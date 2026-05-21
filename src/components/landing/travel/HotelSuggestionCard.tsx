"use client";

import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Hotel, HotelTagId } from "@/data/travel/types";
import { loc } from "@/data/travel/types";
import type { SiteLocale } from "@/lib/i18n/siteLocale";
import { useI18n } from "@/lib/i18n/context";

const toneSurface: Record<Hotel["tone"], string> = {
  comfort: "linear-gradient(145deg, #4a5f62 0%, #354a4d 100%)",
  balanced: "linear-gradient(145deg, #3d5560 0%, #2e4248 100%)",
  premium: "linear-gradient(145deg, #2f3d42 0%, #1f2a2e 100%)",
  luxury: "linear-gradient(145deg, #1f2428 0%, #121618 100%)",
  inspire: "linear-gradient(145deg, #4a6568 0%, #2c3a3d 100%)"
};

const tagLabelKey: Record<HotelTagId, string> = {
  boutique: "travel_tag_boutique",
  "all-inclusive": "travel_tag_all_inclusive",
  "adults-only": "travel_tag_adults_only",
  oceanfront: "travel_tag_oceanfront",
  luxury: "travel_tag_luxury",
  groups: "travel_tag_groups",
  gastronomy: "travel_tag_gastronomy",
  spa: "travel_tag_spa",
  rooftop: "travel_tag_rooftop",
  design: "travel_tag_design",
  nature: "travel_tag_nature",
  historic: "travel_tag_historic"
};

export function HotelSuggestionCard({
  hotel,
  locale,
  selected,
  onSelect,
  tall = false
}: {
  hotel: Hotel;
  locale: SiteLocale;
  selected?: boolean;
  onSelect?: () => void;
  /** Más altura de foto en popups de playa */
  tall?: boolean;
}) {
  const { t } = useI18n();
  const Tag = onSelect ? "button" : "div";

  return (
    <Tag
      type={onSelect ? "button" : undefined}
      onClick={onSelect}
      className={cn(
        "group w-full overflow-hidden border text-left transition-all duration-500",
        selected
          ? "border-copper/55 bg-cream shadow-[0_12px_36px_rgba(10,9,8,0.1)]"
          : "border-ink/10 bg-parchment/80 hover:border-copper/35 hover:shadow-[0_10px_28px_rgba(10,9,8,0.08)]",
        onSelect && "cursor-pointer"
      )}
    >
      <div
        className={cn("relative overflow-hidden", tall ? "h-36 sm:h-40" : "h-28 sm:h-32")}
        style={hotel.image ? undefined : { background: toneSurface[hotel.tone] }}
      >
        {hotel.image ? (
          <Image
            src={hotel.image}
            alt={loc(locale, hotel.name)}
            fill
            className="object-cover object-center transition duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 640px) 100vw, 400px"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0908]/85 via-[#0a0908]/25 to-[#0a0908]/10" />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="font-serif text-lg leading-tight text-cream drop-shadow-sm">{loc(locale, hotel.name)}</p>
          <p className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-cream/75">
            {loc(locale, hotel.vibe)}
          </p>
        </div>
      </div>
      <div className="space-y-3 p-4">
        <p className="text-xs leading-relaxed text-ink/68">{loc(locale, hotel.description)}</p>
        <div className="flex flex-wrap gap-1.5">
          {hotel.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="border border-ink/10 bg-cream/60 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.12em] text-ink/55"
            >
              {t(tagLabelKey[tag])}
            </span>
          ))}
        </div>
      </div>
    </Tag>
  );
}
