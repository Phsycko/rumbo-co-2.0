import type { SiteLocale } from "@/lib/i18n/siteLocale";

export type Localized = { es: string; en: string };

export type BudgetTier = "3000-5000" | "5000-8000" | "8000-12000" | "12000+" | "unsure";

export type HotelVisualTone = "comfort" | "balanced" | "premium" | "luxury" | "inspire";

export type HotelTagId =
  | "boutique"
  | "all-inclusive"
  | "adults-only"
  | "oceanfront"
  | "luxury"
  | "groups"
  | "gastronomy"
  | "spa"
  | "rooftop"
  | "design"
  | "nature"
  | "historic";

export type DestinationTag =
  | "playa"
  | "premium"
  | "grupos-economicos"
  | "cultura"
  | "sierra"
  | "barrancas";

export type DestinationCategoryId =
  | "playa"
  | "pueblo-magico"
  | "sierra"
  | "barrancas"
  | "cultura"
  | "mixto"
  | "otro";

export type TripPriority =
  | "relax"
  | "adventure"
  | "hotels"
  | "premium"
  | "balanced"
  | "all_inclusive";

export type DestinationPlace = {
  id: string;
  categoryId: DestinationCategoryId;
  name: Localized;
  region: Localized;
  tags: DestinationTag[];
};

export type DestinationCategory = {
  id: DestinationCategoryId;
  label: Localized;
  desc: Localized;
};

export type Hotel = {
  id: string;
  placeId: string;
  tier: BudgetTier;
  name: Localized;
  description: Localized;
  vibe: Localized;
  tags: HotelTagId[];
  tone: HotelVisualTone;
  /** Ruta en /public, ej. /images/hotels/cancun/aloft.png */
  image?: string;
};

export type BudgetProfile = {
  tier: BudgetTier;
  label: Localized;
  headline: Localized;
  insight: Localized;
  vibeLine: Localized;
  tone: HotelVisualTone;
  featuredPlaceIds: string[];
};

export function loc(locale: SiteLocale, item: Localized): string {
  return locale === "en" ? item.en : item.es;
}
