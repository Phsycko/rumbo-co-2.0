import { getBudgetProfile } from "@/data/travel/budgetProfiles";
import { getTripExperienceProfile } from "@/data/tripExperienceProfiles";
import { destinationPlaces } from "@/data/travel/destinations";
import { travelHotels } from "@/data/travel/hotels";
import type {
  BudgetTier,
  DestinationCategoryId,
  DestinationPlace,
  Hotel,
  HotelTagId,
  TripPriority
} from "@/data/travel/types";

export type { BudgetTier, Hotel, TripPriority };

const hotelsByPlace = new Map<string, Hotel[]>();

for (const h of travelHotels) {
  const list = hotelsByPlace.get(h.placeId) ?? [];
  list.push(h);
  hotelsByPlace.set(h.placeId, list);
}

const PRIORITY_TAGS: Record<TripPriority, HotelTagId[]> = {
  relax: ["spa", "boutique", "nature"],
  adventure: ["nature", "oceanfront"],
  hotels: ["luxury", "boutique", "design", "oceanfront"],
  premium: ["luxury", "boutique", "gastronomy", "spa", "design"],
  balanced: ["oceanfront", "groups", "gastronomy"],
  all_inclusive: ["all-inclusive", "oceanfront", "groups"]
};

export function getBudgetTier(briefValues: Record<string, string>): BudgetTier {
  const raw = briefValues.budget_pp ?? "unsure";
  if (raw === "3000-5000" || raw === "5000-8000" || raw === "8000-12000" || raw === "12000+") return raw;
  return "unsure";
}

export function getPriority(briefValues: Record<string, string>): TripPriority {
  const raw = briefValues.priority ?? "balanced";
  if (raw in PRIORITY_TAGS) return raw as TripPriority;
  return "balanced";
}

export function getPriorityForTrip(
  tripId: string,
  briefValues: Record<string, string>
): TripPriority {
  const profile = getTripExperienceProfile(tripId);
  const fromBrief = getPriority(briefValues);
  if (briefValues.priority && briefValues.priority in PRIORITY_TAGS) return fromBrief;
  return profile?.defaultPriority ?? fromBrief;
}

function scoreHotel(hotel: Hotel, priority: TripPriority): number {
  const wanted = PRIORITY_TAGS[priority];
  return hotel.tags.filter((t) => wanted.includes(t)).length;
}

function tierForUnsure(): BudgetTier[] {
  return ["3000-5000", "5000-8000", "8000-12000", "12000+"];
}

export function getHotelsForPlace(
  placeId: string,
  tier: BudgetTier,
  priority: TripPriority = "balanced"
): Hotel[] {
  const all = hotelsByPlace.get(placeId) ?? [];
  if (!all.length) return [];

  if (tier === "unsure") {
    const picked: Hotel[] = [];
    for (const t of tierForUnsure()) {
      const inTier = all.filter((h) => h.tier === t);
      if (inTier[0]) picked.push(inTier[0]);
    }
    return picked.length ? picked : all.slice(0, 4);
  }

  const filtered = all.filter((h) => h.tier === tier);
  const list = filtered.length ? filtered : all.filter((h) => h.tier === "5000-8000");
  return [...list].sort((a, b) => scoreHotel(b, priority) - scoreHotel(a, priority));
}

export function getPlacesForCategory(
  categoryId: DestinationCategoryId,
  tier: BudgetTier = "unsure"
): DestinationPlace[] {
  const profile = getBudgetProfile(tier);
  const places = destinationPlaces.filter((p) => p.categoryId === categoryId);

  if (tier === "unsure") return places;

  const boosted = places.filter((p) =>
    profile.featuredPlaceIds.includes(p.id) || hotelsByPlace.has(p.id)
  );
  return boosted.length >= 4 ? boosted : places;
}

export function getInspirationalHotels(
  tier: BudgetTier,
  priority: TripPriority,
  limit = 4
): Hotel[] {
  const profile = getBudgetProfile(tier);
  const out: Hotel[] = [];

  for (const placeId of profile.featuredPlaceIds) {
    const hotels = getHotelsForPlace(placeId, tier, priority);
    if (hotels[0]) out.push(hotels[0]);
    if (out.length >= limit) break;
  }

  if (out.length < limit) {
    const rest = travelHotels
      .filter((h) => (tier === "unsure" ? true : h.tier === tier))
      .filter((h) => !out.some((o) => o.id === h.id))
      .sort((a, b) => scoreHotel(b, priority) - scoreHotel(a, priority));
    out.push(...rest.slice(0, limit - out.length));
  }

  return out;
}

export { getBudgetProfile };

export function categoryNeedsPlacePicker(categoryId: DestinationCategoryId) {
  return (
    categoryId === "playa" ||
    categoryId === "pueblo-magico" ||
    categoryId === "sierra" ||
    categoryId === "barrancas" ||
    categoryId === "cultura"
  );
}
