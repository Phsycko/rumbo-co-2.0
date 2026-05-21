"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { getBudgetProfile } from "@/data/travel/budgetProfiles";
import { loc } from "@/data/travel/types";
import type { BudgetTier, Hotel, Localized, TripPriority } from "@/data/travel/types";
import { HotelSuggestionCard } from "@/components/landing/travel/HotelSuggestionCard";
import { useI18n } from "@/lib/i18n/context";
import type { SiteLocale } from "@/lib/i18n/siteLocale";
import { cn } from "@/lib/cn";

export function TravelExperiencePanel({
  tier,
  priority,
  hotels,
  locale,
  selectedHotelId,
  onSelectHotel,
  compact = false,
  segmentInsight,
  segmentVibe,
  segmentHighlights
}: {
  tier: BudgetTier;
  priority: TripPriority;
  hotels: Hotel[];
  locale: SiteLocale;
  selectedHotelId?: string;
  onSelectHotel?: (_id: string) => void;
  compact?: boolean;
  segmentInsight?: Localized;
  segmentVibe?: Localized;
  segmentHighlights?: Localized[];
}) {
  const { t } = useI18n();
  const profile = getBudgetProfile(tier);
  const insight = segmentInsight ? loc(locale, segmentInsight) : loc(locale, profile.insight);
  const vibe = segmentVibe ? loc(locale, segmentVibe) : loc(locale, profile.vibeLine);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${tier}-${priority}-${hotels.map((h) => h.id).join(",")}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "border border-ink/10 bg-gradient-to-br from-cream/90 via-parchment to-[#e8eef0]/40",
          compact ? "p-4" : "p-5 sm:p-6"
        )}
      >
        <div className="flex items-start gap-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-copper" aria-hidden />
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-copper-dim">
              {loc(locale, profile.headline)}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">{insight}</p>
            <p className="mt-1 text-xs text-ink/50">{vibe}</p>
            {segmentHighlights && segmentHighlights.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {segmentHighlights.map((h) => (
                  <li
                    key={h.es}
                    className="border border-ink/10 bg-cream/70 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-ink/55"
                  >
                    {loc(locale, h)}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        {hotels.length > 0 ? (
          <div className={cn("mt-5", compact ? "space-y-3" : "space-y-4")}>
            <p className="font-serif text-lg text-ink sm:text-xl">{t("travel_hotels_title")}</p>
            <p className="text-xs leading-relaxed text-ink/55">{t("travel_hotels_sub")}</p>
            <div className={cn("grid gap-3", compact ? "grid-cols-1" : "sm:grid-cols-2")}>
              {hotels.map((hotel) => (
                <HotelSuggestionCard
                  key={hotel.id}
                  hotel={hotel}
                  locale={locale}
                  selected={selectedHotelId === hotel.id}
                  onSelect={onSelectHotel ? () => onSelectHotel(hotel.id) : undefined}
                />
              ))}
            </div>
          </div>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
