"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { CustomTripType } from "@/data/customTrips";
import { useI18n } from "@/lib/i18n/context";
import type { SiteLocale } from "@/lib/i18n/siteLocale";
import { cn } from "@/lib/cn";

function tripCopy(locale: SiteLocale, item: CustomTripType, field: "label" | "desc") {
  return locale === "en" ? item[field].en : item[field].es;
}

export function CustomTripCard({
  trip,
  index,
  featured = false,
  onSelect
}: {
  trip: CustomTripType;
  index: number;
  featured?: boolean;
  onSelect: () => void;
}) {
  const { locale, t } = useI18n();
  const subs = trip.subcategories?.slice(0, featured ? 6 : 4) ?? [];

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: Math.min(index * 0.04, 0.16) }}
      className={cn(
        "group relative w-full cursor-pointer overflow-hidden border border-ink/10 text-left transition-all duration-500",
        "hover:border-copper/35 hover:shadow-[0_20px_52px_rgba(10,9,8,0.1)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/35 focus-visible:ring-offset-2 focus-visible:ring-offset-cream",
        featured ? "min-h-[320px] sm:min-h-[340px]" : "min-h-[220px] sm:min-h-[240px]"
      )}
    >
      <div className="absolute inset-0" style={{ background: trip.surface }} aria-hidden />
      {trip.image ? (
        <Image
          src={trip.image}
          alt=""
          fill
          className="object-cover object-center opacity-88 transition duration-700 group-hover:scale-[1.02]"
          sizes={featured ? "(max-width: 1024px) 90vw, 50vw" : "(max-width: 640px) 85vw, 33vw"}
        />
      ) : null}

      <div className="absolute inset-0 z-[1] flex flex-col justify-between p-5 sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center border border-cream/25 bg-ink/25 backdrop-blur-sm">
              <trip.icon className="h-[18px] w-[18px] text-cream" aria-hidden />
            </span>
            {trip.badgeKey ? (
              <span className="border border-cream/20 bg-ink/20 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-cream/90 backdrop-blur-sm">
                {t(trip.badgeKey)}
              </span>
            ) : null}
          </div>
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-cream/70"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3
            className={cn(
              "font-serif leading-tight text-cream",
              featured ? "text-2xl sm:text-3xl" : "text-xl sm:text-[1.35rem]"
            )}
            style={{ textShadow: "0 2px 14px rgba(0,0,0,0.75)" }}
          >
            {tripCopy(locale, trip, "label")}
          </h3>
          <p
            className={cn("mt-2 leading-relaxed text-cream/90", featured ? "max-w-lg text-sm" : "text-sm")}
            style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
          >
            {tripCopy(locale, trip, "desc")}
          </p>

          {subs.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {subs.map((sub) => (
                <li
                  key={sub.id}
                  className="border border-cream/25 bg-ink/30 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-cream/85 backdrop-blur-sm transition group-hover:border-cream/40"
                >
                  {t(sub.labelKey)}
                </li>
              ))}
            </ul>
          ) : null}

          <span
            className="mt-5 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-cream"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.65)" }}
          >
            {t("custom_card_cta")}
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </motion.button>
  );
}
