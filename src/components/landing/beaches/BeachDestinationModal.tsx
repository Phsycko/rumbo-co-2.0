"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Compass, Hotel, MapPin, Sparkles, X } from "lucide-react";
import { createPortal } from "react-dom";
import type { BeachDestination } from "@/data/beaches";
import { getBeachGuide } from "@/data/beachGuides";
import { budgetProfiles } from "@/data/travel/budgetProfiles";
import { loc } from "@/data/travel/types";
import type { BudgetTier } from "@/data/travel/types";
import { getHotelsForPlace } from "@/lib/travelRecommendations";
import { HotelSuggestionCard } from "@/components/landing/travel/HotelSuggestionCard";
import { Button } from "@/components/landing/ui/Button";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/cn";

const tierOrder: BudgetTier[] = ["3000-5000", "5000-8000", "8000-12000", "12000+"];

function beachLabel(locale: "es" | "en", beach: BeachDestination) {
  return locale === "en" ? beach.name.en : beach.name.es;
}

function pickText(locale: "es" | "en", item: { es: string; en: string }) {
  return locale === "en" ? item.en : item.es;
}

export function BeachDestinationModal({
  beach,
  open,
  onClose,
  onExitComplete,
  onQuote
}: {
  beach: BeachDestination;
  open: boolean;
  onClose: () => void;
  onExitComplete?: () => void;
  onQuote: (_destination: string) => void;
}) {
  const { locale, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [tier, setTier] = useState<BudgetTier>("5000-8000");

  const guide = getBeachGuide(beach.id);

  const hotels = useMemo(() => {
    if (!guide) return [];
    return getHotelsForPlace(guide.placeId, tier, "balanced");
  }, [guide, tier]);

  const profile = budgetProfiles.find((p) => p.tier === tier);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    setTier("5000-8000");
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!mounted || !guide) return null;

  const motionEase = [0.22, 1, 0.36, 1] as const;
  const duration = reduceMotion ? 0.01 : 0.55;
  const crossDuration = reduceMotion ? 0.01 : 0.7;

  return createPortal(
    <AnimatePresence onExitComplete={onExitComplete}>
      {open ? (
    <div className="fixed inset-0 z-[2900] flex items-stretch justify-center" role="dialog" aria-modal="true">
      <motion.button
        key="backdrop"
        type="button"
        className="absolute inset-0 cursor-default bg-ink/70 backdrop-blur-md"
        aria-label={t("beaches_modal_close")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: duration * 0.8 }}
        onClick={onClose}
      />

      {/* Transición cruzada: dos paneles en diagonal */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        <motion.div
          className="absolute inset-0 origin-top-left bg-gradient-to-br from-copper/25 via-transparent to-transparent"
          initial={{ clipPath: "polygon(0 0, 0% 0, 0% 100%, 0% 100%)" }}
          animate={{ clipPath: "polygon(0 0, 100% 0, 55% 100%, 0% 100%)" }}
          transition={{ duration: crossDuration, ease: motionEase }}
        />
        <motion.div
          className="absolute inset-0 origin-bottom-right bg-gradient-to-tl from-[#d8e4e8]/50 via-transparent to-transparent"
          initial={{ clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }}
          animate={{ clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0% 100%)" }}
          transition={{ duration: crossDuration, ease: motionEase, delay: reduceMotion ? 0 : 0.06 }}
        />
      </div>

      <motion.div
        key="panel"
        layoutId={`beach-card-${beach.id}`}
        className="relative z-10 m-0 flex h-full w-full max-w-5xl flex-col overflow-hidden border border-cream/30 bg-parchment shadow-[0_40px_100px_rgba(10,9,8,0.35)] sm:m-4 sm:max-h-[min(92vh,820px)] sm:rounded-sm"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 12 }}
        transition={{ duration, ease: motionEase }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid min-h-0 flex-1 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* Panel izquierdo — hero */}
          <motion.div
            className="relative min-h-[200px] overflow-hidden lg:min-h-0"
            initial={reduceMotion ? false : { x: -28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: duration * 1.1, ease: motionEase, delay: 0.05 }}
          >
            <div className="absolute inset-0" style={{ background: beach.surface }} aria-hidden />
            {beach.image ? (
              <Image
                src={beach.image}
                alt=""
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/90 via-[#0a0908]/45 to-[#0a0908]/20" />
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/25 bg-ink/35 text-cream backdrop-blur-sm transition hover:bg-ink/55"
              aria-label={t("beaches_modal_close")}
            >
              <X className="h-4 w-4" />
            </button>
            <div className="relative z-[1] flex h-full flex-col justify-end p-6 sm:p-8">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-cream/60">
                {t("beaches_modal_eyebrow")}
              </p>
              <h3 className="mt-2 font-serif text-3xl text-cream sm:text-4xl">{beachLabel(locale, beach)}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/85">{pickText(locale, guide.intro)}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {guide.highlights.map((h) => (
                  <li
                    key={h.es}
                    className="border border-cream/20 bg-ink/25 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-cream/80 backdrop-blur-sm"
                  >
                    {pickText(locale, h)}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Panel derecho — contenido */}
          <motion.div
            className="flex min-h-0 flex-col bg-gradient-to-br from-cream/95 via-parchment to-[#e8eef0]/30"
            initial={reduceMotion ? false : { x: 28, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: duration * 1.1, ease: motionEase, delay: 0.1 }}
          >
            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7 sm:py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={beach.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: motionEase }}
                  className="space-y-7"
                >
                  <section>
                    <div className="flex items-center gap-2 text-copper-dim">
                      <Compass className="h-4 w-4" aria-hidden />
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                        {t("beaches_modal_activities")}
                      </h4>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {guide.activities.map((item) => (
                        <li
                          key={item.es}
                          className="flex gap-2 text-sm leading-relaxed text-ink/75 before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-copper/70 before:content-['']"
                        >
                          {pickText(locale, item)}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 text-copper-dim">
                      <MapPin className="h-4 w-4" aria-hidden />
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                        {t("beaches_modal_tours")}
                      </h4>
                    </div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {guide.tours.map((item) => (
                        <li
                          key={item.es}
                          className="border border-ink/10 bg-cream/70 px-3 py-1.5 text-xs text-ink/72"
                        >
                          {pickText(locale, item)}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <div className="flex items-center gap-2 text-copper-dim">
                      <Hotel className="h-4 w-4" aria-hidden />
                      <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                        {t("beaches_modal_hotels")}
                      </h4>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-ink/55">{t("beaches_modal_hotels_sub")}</p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {tierOrder.map((tKey) => {
                        const p = budgetProfiles.find((x) => x.tier === tKey);
                        if (!p) return null;
                        const active = tier === tKey;
                        return (
                          <button
                            key={tKey}
                            type="button"
                            onClick={() => setTier(tKey)}
                            className={cn(
                              "border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.1em] transition duration-300",
                              active
                                ? "border-copper/50 bg-cream text-copper-dim"
                                : "border-ink/10 bg-parchment/60 text-ink/45 hover:border-copper/25"
                            )}
                          >
                            {loc(locale, p.label)}
                          </button>
                        );
                      })}
                    </div>

                    {profile ? (
                      <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-ink/60">
                        <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-copper" aria-hidden />
                        {loc(locale, profile.insight)}
                      </p>
                    ) : null}

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${beach.id}-${tier}`}
                        initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -12 }}
                        transition={{ duration: 0.35, ease: motionEase }}
                        className="mt-4 space-y-3"
                      >
                        {hotels.length > 0 ? (
                          hotels.map((hotel) => (
                            <HotelSuggestionCard key={hotel.id} hotel={hotel} locale={locale} tall />
                          ))
                        ) : (
                          <p className="text-sm text-ink/60">{t("beaches_modal_hotels_empty")}</p>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </section>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="shrink-0 border-t border-ink/8 bg-cream/40 px-5 py-4 sm:px-7">
              <Button
                type="button"
                size="lg"
                className="w-full"
                onClick={() => onQuote(beachLabel(locale, beach))}
              >
                {t("beaches_card_cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
