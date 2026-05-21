"use client";

import Image from "next/image";
import { useState } from "react";
import { LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/landing/ui/Container";
import { Button } from "@/components/landing/ui/Button";
import { BeachDestinationModal } from "@/components/landing/beaches/BeachDestinationModal";
import { beachDestinations, type BeachDestination } from "@/data/beaches";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useI18n } from "@/lib/i18n/context";
import type { SiteLocale } from "@/lib/i18n/siteLocale";

function beachLabel(locale: SiteLocale, item: BeachDestination) {
  return locale === "en" ? item.name.en : item.name.es;
}

function beachVibe(locale: SiteLocale, item: BeachDestination) {
  return locale === "en" ? item.vibe.en : item.vibe.es;
}

const heroImage = "/images/beyond/playas.png";

function BeachCard({
  beach,
  idx,
  locale,
  onOpen,
  t
}: {
  beach: BeachDestination;
  idx: number;
  locale: SiteLocale;
  onOpen: (_beach: BeachDestination) => void;
  t: (_key: string) => string;
}) {
  return (
    <motion.article
      layoutId={`beach-card-${beach.id}`}
      role="button"
      tabIndex={0}
      onClick={() => onOpen(beach)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(beach);
        }
      }}
      className="group/card relative h-[280px] w-full cursor-pointer overflow-hidden border border-ink/10 shadow-[0_12px_36px_rgba(10,9,8,0.1)] transition-shadow duration-500 hover:shadow-[0_20px_52px_rgba(10,9,8,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/40 sm:h-[300px]"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {!beach.image ? (
        <div className="absolute inset-0 z-0" style={{ background: beach.surface }} aria-hidden />
      ) : (
        <Image
          src={beach.image}
          alt=""
          fill
          className="z-[1] object-cover object-center transition duration-700 group-hover/card:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      )}
      <div className="pointer-events-none absolute inset-0 z-[2] flex flex-col justify-between p-5 sm:p-6">
        <span
          className="w-fit text-[10px] font-semibold uppercase tracking-[0.2em] text-white/90"
          style={{ textShadow: "0 1px 8px rgba(0,0,0,0.65)" }}
        >
          {String(idx + 1).padStart(2, "0")}
        </span>
        <div>
          <h3
            className="font-serif text-2xl leading-tight text-white sm:text-[1.65rem]"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.75), 0 1px 3px rgba(0,0,0,0.9)" }}
          >
            {beachLabel(locale, beach)}
          </h3>
          <p
            className="mt-1 text-sm text-white/92"
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.8)" }}
          >
            {beachVibe(locale, beach)}
          </p>
          <span
            className="mt-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/95 transition group-hover/card:gap-2.5"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.75)" }}
          >
            {t("beaches_card_explore")}
            <ArrowRight className="h-3.5 w-3.5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)] transition group-hover/card:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.article>
  );
}

export function BeachDestinationsSection() {
  const { locale, t } = useI18n();
  const reduceMotion = useReducedMotion();
  const [activeBeach, setActiveBeach] = useState<BeachDestination | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openBeachGuide = (beach: BeachDestination) => {
    setActiveBeach(beach);
    setModalOpen(true);
  };

  const closeBeachGuide = () => setModalOpen(false);

  const openBeachQuote = (destination: string) => {
    const message = t("beaches_wa_message", { destination });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <LayoutGroup id="beach-destinations">
      <section
        id="playas"
        className="relative overflow-hidden bg-gradient-to-b from-cream via-[#ebe8e3] to-[#e6ecef] pt-10 sm:pt-14"
        aria-labelledby="playas-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_45%_at_80%_10%,rgba(216,228,232,0.32),transparent_55%)]"
          aria-hidden
        />

        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 lg:pb-6">
            <motion.div
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/50">
                {t("beaches_eyebrow")}
              </p>
              <h2
                id="playas-heading"
                className="mt-3 font-serif text-3xl leading-[1.12] text-ink text-balance sm:text-4xl lg:text-[2.65rem]"
              >
                {t("beaches_title")}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/68 sm:text-[0.9375rem]">
                {t("beaches_subtitle")}
              </p>
              <Button
                type="button"
                variant="outline"
                size="md"
                className="mt-7 hidden sm:inline-flex"
                onClick={() => openBeachQuote(t("beaches_wa_generic_dest"))}
              >
                {t("beaches_cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            <motion.div
              className="relative overflow-hidden border border-ink/10 shadow-[0_24px_68px_rgba(10,9,8,0.12)]"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            >
              <div className="relative aspect-[16/10] lg:aspect-[5/4]">
                <Image
                  src={heroImage}
                  alt={t("beaches_collage_caption")}
                  fill
                  sizes="(max-width: 1024px) 90vw, 44vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/55 via-transparent to-transparent" />
              </div>
              <p className="absolute bottom-4 left-5 right-5 text-[10px] uppercase tracking-[0.16em] text-cream/80">
                {t("beaches_collage_caption")}
              </p>
            </motion.div>

            <Button
              type="button"
              variant="outline"
              size="md"
              className="w-full sm:hidden"
              onClick={() => openBeachQuote(t("beaches_wa_generic_dest"))}
            >
              {t("beaches_cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <ul className="mt-12 list-none grid gap-4 p-0 pb-14 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:pb-20">
            {beachDestinations.map((beach, idx) => (
              <motion.li
                key={beach.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                  delay: reduceMotion ? 0 : Math.min(idx * 0.04, 0.18)
                }}
                className={activeBeach?.id === beach.id ? "opacity-0" : undefined}
              >
                <BeachCard beach={beach} idx={idx} locale={locale} onOpen={openBeachGuide} t={t} />
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>

      {activeBeach ? (
        <BeachDestinationModal
          beach={activeBeach}
          open={modalOpen}
          onClose={closeBeachGuide}
          onExitComplete={() => setActiveBeach(null)}
          onQuote={(dest) => {
            closeBeachGuide();
            openBeachQuote(dest);
          }}
        />
      ) : null}
    </LayoutGroup>
  );
}
