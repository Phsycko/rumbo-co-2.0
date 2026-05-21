import type { TripPriority } from "@/data/travel/types";
import type { Localized } from "@/data/travel/types";

export type TripSegmentId =
  | "group"
  | "wedding"
  | "honeymoon"
  | "solo"
  | "university"
  | "school"
  | "corporate";

export type TripExperienceProfile = {
  segment: TripSegmentId;
  defaultPriority: TripPriority;
  insight: Localized;
  vibeLine: Localized;
  highlights: Localized[];
  /** Categorías de destino sugeridas en el wizard */
  suggestedCategories: ("playa" | "cultura" | "sierra" | "barrancas" | "pueblo-magico")[];
};

const profiles: Record<string, TripExperienceProfile> = {
  grupales: {
    segment: "group",
    defaultPriority: "balanced",
    insight: {
      es: "Logística cerrada para grupos: traslados, hospedaje y ritmo coordinado sin fricción.",
      en: "Closed logistics for groups: transfers, lodging and a coordinated pace without friction."
    },
    vibeLine: {
      es: "Hoteles con buen valor para grupos y experiencias compartidas.",
      en: "Strong value hotels for groups and shared experiences."
    },
    highlights: [
      { es: "Traslados y salidas coordinadas", en: "Coordinated transfers & departures" },
      { es: "Hoteles para grupos", en: "Group-friendly hotels" },
      { es: "Actividades a medida", en: "Tailored activities" }
    ],
    suggestedCategories: ["playa", "sierra", "barrancas", "cultura"]
  },
  bodas: {
    segment: "wedding",
    defaultPriority: "premium",
    insight: {
      es: "Invitados, ceremonia y hospitalidad con el detalle que merece tu celebración.",
      en: "Guests, ceremony and hospitality with the detail your celebration deserves."
    },
    vibeLine: {
      es: "Resorts, boutique y venues con servicio impecable.",
      en: "Resorts, boutique stays and venues with impeccable service."
    },
    highlights: [
      { es: "Hospedaje para invitados", en: "Guest lodging" },
      { es: "Ceremonia y recepción", en: "Ceremony & reception" },
      { es: "Coordinación integral", en: "End-to-end coordination" }
    ],
    suggestedCategories: ["playa", "pueblo-magico", "cultura"]
  },
  "luna-miel": {
    segment: "honeymoon",
    defaultPriority: "premium",
    insight: {
      es: "Ritmo íntimo, hoteles con alma y detalles que sorprenden en pareja.",
      en: "Intimate pace, soulful hotels and couple surprises."
    },
    vibeLine: {
      es: "Boutique, spa y frente al mar con privacidad.",
      en: "Boutique, spa and oceanfront with privacy."
    },
    highlights: [
      { es: "Suites y boutique", en: "Suites & boutique" },
      { es: "Cenas y experiencias privadas", en: "Private dinners & experiences" },
      { es: "Traslados discretos", en: "Discreet transfers" }
    ],
    suggestedCategories: ["playa", "pueblo-magico", "cultura"]
  },
  individuales: {
    segment: "solo",
    defaultPriority: "balanced",
    insight: {
      es: "Itinerario personal sin fórmulas: tú marcas el ritmo, nosotros la logística.",
      en: "A personal itinerary without formulas: you set the pace, we handle logistics."
    },
    vibeLine: {
      es: "Flexibilidad, curaduría y acompañamiento ligero.",
      en: "Flexibility, curation and light support."
    },
    highlights: [
      { es: "Ruta a tu medida", en: "Route built for you" },
      { es: "Hoteles seleccionados", en: "Selected hotels" },
      { es: "Experiencias puntuales", en: "Focused experiences" }
    ],
    suggestedCategories: ["playa", "sierra", "barrancas", "cultura"]
  },
  universitarios: {
    segment: "university",
    defaultPriority: "hotels",
    insight: {
      es: "Congresos y viajes académicos con hoteles business, vuelos coordinados y venues eficientes.",
      en: "Congresses and academic trips with business hotels, coordinated flights and efficient venues."
    },
    vibeLine: {
      es: "Centros de convención, grupos grandes y logística precisa.",
      en: "Convention centers, large groups and precise logistics."
    },
    highlights: [
      { es: "Hoteles business y convenciones", en: "Business hotels & conventions" },
      { es: "Vuelos y traslados grupales", en: "Group flights & transfers" },
      { es: "Itinerarios por facultad", en: "Faculty-tailored itineraries" }
    ],
    suggestedCategories: ["cultura", "playa", "pueblo-magico"]
  },
  "escolares-culturales": {
    segment: "school",
    defaultPriority: "balanced",
    insight: {
      es: "Salidas con seguridad, acompañamiento profesional, transporte y experiencias educativas cuidadas.",
      en: "Trips with safety, professional escorts, transport and thoughtful educational experiences."
    },
    vibeLine: {
      es: "Logística clara, museos, cultura y campamentos bien organizados.",
      en: "Clear logistics, museums, culture and well-run camps."
    },
    highlights: [
      { es: "Seguridad y ratios de acompañamiento", en: "Safety & chaperone ratios" },
      { es: "Transporte dedicado", en: "Dedicated transport" },
      { es: "Museos y rutas culturales", en: "Museums & cultural routes" }
    ],
    suggestedCategories: ["cultura", "sierra", "barrancas", "pueblo-magico"]
  },
  corporativos: {
    segment: "corporate",
    defaultPriority: "premium",
    insight: {
      es: "Incentivos, convenciones y team building con estándar ejecutivo y operación impecable.",
      en: "Incentives, conventions and team building with executive standards and flawless operations."
    },
    vibeLine: {
      es: "Networking, venues premium y experiencias para equipos.",
      en: "Networking, premium venues and team experiences."
    },
    highlights: [
      { es: "Incentivos y team building", en: "Incentives & team building" },
      { es: "Salones y convenciones", en: "Meeting rooms & conventions" },
      { es: "Branding y hospitalidad", en: "Branding & hospitality" }
    ],
    suggestedCategories: ["playa", "sierra", "cultura", "pueblo-magico"]
  }
};

export function getTripExperienceProfile(tripId: string): TripExperienceProfile | undefined {
  return profiles[tripId];
}
