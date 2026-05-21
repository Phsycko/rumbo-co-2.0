import type { BudgetProfile } from "./types";

export const budgetProfiles: BudgetProfile[] = [
  {
    tier: "3000-5000",
    label: { es: "$3,000 – $5,000 MXN", en: "$3,000 – $5,000 MXN" },
    headline: { es: "Económico cómodo", en: "Comfortable value" },
    insight: {
      es: "Excelente para viajes grupales cómodos y escapadas equilibradas.",
      en: "Great for comfortable group trips and balanced escapes."
    },
    vibeLine: {
      es: "Hoteles funcionales, buena ubicación e ideal para grupos.",
      en: "Functional hotels, smart locations, ideal for groups."
    },
    tone: "comfort",
    featuredPlaceIds: ["mazatlan", "vallarta", "huatulco", "creel", "ixtapa"]
  },
  {
    tier: "5000-8000",
    label: { es: "$5,000 – $8,000 MXN", en: "$5,000 – $8,000 MXN" },
    headline: { es: "Balanceado", en: "Balanced" },
    insight: {
      es: "Permite mejores hoteles, vistas y experiencias más completas.",
      en: "Allows better hotels, views and fuller experiences."
    },
    vibeLine: {
      es: "Mejor experiencia, hoteles recomendados y ritmo cuidado.",
      en: "Stronger stays, curated hotels and a thoughtful pace."
    },
    tone: "balanced",
    featuredPlaceIds: ["cancun", "tulum", "vallarta", "huatulco", "oaxaca"]
  },
  {
    tier: "8000-12000",
    label: { es: "$8,000 – $12,000 MXN", en: "$8,000 – $12,000 MXN" },
    headline: { es: "Premium", en: "Premium" },
    insight: {
      es: "Perfecto para experiencias premium y hoteles superiores.",
      en: "Perfect for premium experiences and superior hotels."
    },
    vibeLine: {
      es: "Zonas top, servicio elevado y experiencias más completas.",
      en: "Prime areas, elevated service and richer experiences."
    },
    tone: "premium",
    featuredPlaceIds: ["cancun", "cabo", "riviera-maya", "san-miguel", "bacalar"]
  },
  {
    tier: "12000+",
    label: { es: "Más de $12,000 MXN", en: "Over $12,000 MXN" },
    headline: { es: "Boutique / Luxury", en: "Boutique / Luxury" },
    insight: {
      es: "Abre acceso a hoteles boutique, experiencias privadas y propiedades luxury.",
      en: "Unlocks boutique hotels, private experiences and luxury properties."
    },
    vibeLine: {
      es: "Diseño, exclusividad, gastronomía y frente al mar de autor.",
      en: "Design, exclusivity, gastronomy and signature oceanfront."
    },
    tone: "luxury",
    featuredPlaceIds: ["cabo", "punta-mita", "tulum", "holbox", "valle-guadalupe"]
  },
  {
    tier: "unsure",
    label: { es: "Aún no lo tengo claro", en: "Not sure yet" },
    headline: { es: "Curaduría inspiracional", en: "Inspirational curation" },
    insight: {
      es: "Te mostramos una mezcla de estilos para definir juntos tu inversión ideal.",
      en: "We show a blend of styles to define your ideal investment together."
    },
    vibeLine: {
      es: "Desde escapadas cómodas hasta boutique frente al mar.",
      en: "From comfortable escapes to boutique beachfront."
    },
    tone: "inspire",
    featuredPlaceIds: ["cancun", "cabo", "tulum", "mazatlan", "san-miguel", "creel"]
  }
];

export function getBudgetProfile(tier: import("./types").BudgetTier): BudgetProfile {
  return budgetProfiles.find((p) => p.tier === tier) ?? budgetProfiles[4];
}
