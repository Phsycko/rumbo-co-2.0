export type { BudgetTier, DestinationCategoryId, Localized } from "@/data/travel/types";
export { destinationCategories, destinationPlaces } from "@/data/travel/destinations";
export {
  getBudgetTier,
  categoryNeedsPlacePicker,
  getBudgetProfile
} from "@/lib/travelRecommendations";

import type { BudgetTier, DestinationCategoryId, Localized } from "@/data/travel/types";
import {
  getPlacesForCategory as getPlaces,
  getHotelsForPlace as getHotels,
  getPriority
} from "@/lib/travelRecommendations";

export function getPlacesForCategory(categoryId: DestinationCategoryId, tier?: BudgetTier) {
  return getPlaces(categoryId, tier ?? "unsure");
}

export type SuggestedHotel = {
  id: string;
  name: Localized;
  note: Localized;
};

export function getHotelsForPlace(
  placeId: string,
  tier: BudgetTier,
  briefValues?: Record<string, string>
): SuggestedHotel[] {
  const priority = briefValues ? getPriority(briefValues) : "balanced";
  return getHotels(placeId, tier, priority).map((h) => ({
    id: h.id,
    name: h.name,
    note: h.description
  }));
}
