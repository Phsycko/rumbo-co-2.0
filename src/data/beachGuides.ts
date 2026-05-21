import type { BeachDestination } from "@/data/beaches";

export type BeachGuide = {
  beachId: BeachDestination["id"];
  placeId: string;
  intro: { es: string; en: string };
  highlights: { es: string; en: string }[];
  activities: { es: string; en: string }[];
  tours: { es: string; en: string }[];
};

export const beachGuides: BeachGuide[] = [
  {
    beachId: "cancun",
    placeId: "cancun",
    intro: {
      es: "Zona hotelera, laguna Nichupté y excursiones a Isla Mujeres. Ideal para grupos que buscan todo incluido o estancias con ritmo de resort.",
      en: "Hotel zone, Nichupté lagoon and Isla Mujeres day trips. Ideal for groups seeking all-inclusive or resort-paced stays."
    },
    highlights: [
      { es: "Playa Delfines y zona hotelera", en: "Playa Delfines & hotel zone" },
      { es: "Snorkel y catamaranes", en: "Snorkel & catamarans" },
      { es: "Gastronomía y vida nocturna", en: "Dining & nightlife" }
    ],
    activities: [
      { es: "Día de playa en resort o club de playa", en: "Beach day at resort or beach club" },
      { es: "Snorkel en arrecife o laguna", en: "Reef or lagoon snorkel" },
      { es: "Cena frente al mar y shows", en: "Oceanfront dinner & shows" },
      { es: "Traslados aeropuerto–hotel en paquete", en: "Airport–hotel transfers in package" }
    ],
    tours: [
      { es: "Isla Mujeres en catamarán", en: "Isla Mujeres catamaran" },
      { es: "Xcaret / Xel-Há (parques)", en: "Xcaret / Xel-Há parks" },
      { es: "Chichén Itzá + cenote (1 día)", en: "Chichén Itzá + cenote (day trip)" }
    ]
  },
  {
    beachId: "tulum",
    placeId: "tulum",
    intro: {
      es: "Zona arqueológica frente al mar, beach clubs y cenotes. Perfecto para viajes boutique, wellness y ritmo relajado.",
      en: "Clifftop ruins, beach clubs and cenotes. Perfect for boutique, wellness and a slower pace."
    },
    highlights: [
      { es: "Ruinas y playa", en: "Ruins & beach" },
      { es: "Cenotes y lagunas", en: "Cenotes & lagoons" },
      { es: "Hoteles boutique", en: "Boutique hotels" }
    ],
    activities: [
      { es: "Visita zona arqueológica al amanecer", en: "Sunrise archaeological zone visit" },
      { es: "Cenote y snorkel", en: "Cenote & snorkel" },
      { es: "Beach club o playa pública", en: "Beach club or public beach" },
      { es: "Reserva Sian Ka'an", en: "Sian Ka'an reserve" }
    ],
    tours: [
      { es: "Tulum + cenote + playa", en: "Tulum + cenote + beach" },
      { es: "Sian Ka'an en lancha", en: "Sian Ka'an boat tour" },
      { es: "Bacalar o Cobá (extensión)", en: "Bacalar or Cobá extension" }
    ]
  },
  {
    beachId: "mazatlan",
    placeId: "mazatlan",
    intro: {
      es: "Malecón, pueblo histórico y pacífico accesible. Muy buena relación valor para grupos y viajes largos de fin de semana.",
      en: "Boardwalk, old town and accessible Pacific coast. Strong value for groups and long weekends."
    },
    highlights: [
      { es: "Malecón y centro histórico", en: "Boardwalk & historic center" },
      { es: "Islas y pesca deportiva", en: "Islands & sport fishing" },
      { es: "Gastronomía del pacífico", en: "Pacific cuisine" }
    ],
    activities: [
      { es: "Paseo en malecón y centro", en: "Boardwalk & downtown stroll" },
      { es: "Playa y deportes acuáticos", en: "Beach & water sports" },
      { es: "Show y vida local", en: "Shows & local life" },
      { es: "Hospedaje en zona dorada", en: "Golden Zone stays" }
    ],
    tours: [
      { es: "Isla de la Piedra en lancha", en: "Isla de la Piedra boat" },
      { es: "Pesca deportiva", en: "Sport fishing" },
      { es: "El Quelite y pueblos cercanos", en: "El Quelite & nearby towns" }
    ]
  },
  {
    beachId: "vallarta",
    placeId: "vallarta",
    intro: {
      es: "Bahía de Banderas, malecón y zona romántica. Combina playa, gastronomía y excursiones a pueblos cercanos.",
      en: "Banderas Bay, boardwalk and romantic zone. Beach, dining and nearby town excursions."
    },
    highlights: [
      { es: "Malecón y Zona Romántica", en: "Boardwalk & Romantic Zone" },
      { es: "Yates y bahía", en: "Yachts & bay" },
      { es: "Gastronomía de autor", en: "Chef-driven dining" }
    ],
    activities: [
      { es: "Paseo en malecón al atardecer", en: "Sunset boardwalk walk" },
      { es: "Playa Los Muertos o Mismaloya", en: "Los Muertos or Mismaloya beach" },
      { es: "Cena con vista a la bahía", en: "Bay-view dinner" },
      { es: "Art walks y galerías", en: "Art walks & galleries" }
    ],
    tours: [
      { es: "Yate o lancha en la bahía", en: "Yacht or bay boat" },
      { es: "Yelapa y playas sur", en: "Yelapa & south beaches" },
      { es: "Tequila / San Sebastián", en: "Tequila / San Sebastián highlands" }
    ]
  },
  {
    beachId: "cabo",
    placeId: "cabo",
    intro: {
      es: "Desierto, mar y gastronomía premium. Destino para lunas de miel, grupos exigentes y experiencias en el archipiélago.",
      en: "Desert, sea and premium dining. Honeymoons, discerning groups and archipelago experiences."
    },
    highlights: [
      { es: "El Arco y Land's End", en: "The Arch & Land's End" },
      { es: "Marina y zona hotelera", en: "Marina & hotel corridor" },
      { es: "Vinos y fine dining", en: "Wine & fine dining" }
    ],
    activities: [
      { es: "Crucero al Arco en lancha", en: "Boat cruise to the Arch" },
      { es: "Snorkel y kayak", en: "Snorkel & kayak" },
      { es: "Golf y spa en resort", en: "Resort golf & spa" },
      { es: "Cena con vista al pacífico", en: "Pacific-view dinner" }
    ],
    tours: [
      { es: "Archipiélago y playas escondidas", en: "Archipelago & hidden beaches" },
      { es: "Avistamiento de ballenas (temporada)", en: "Whale watching (season)" },
      { es: "Todos Santos / La Paz (extensión)", en: "Todos Santos / La Paz extension" }
    ]
  },
  {
    beachId: "huatulco",
    placeId: "huatulco",
    intro: {
      es: "Nueve bahías, naturaleza y ritmo tranquilo. Excelente para grupos que buscan playa sin saturación.",
      en: "Nine bays, nature and a calm pace. Excellent for groups wanting beach without crowds."
    },
    highlights: [
      { es: "Bahías y snorkel", en: "Bays & snorkel" },
      { es: "Parque nacional", en: "National park" },
      { es: "Pueblo mágico cercano", en: "Nearby magic town" }
    ],
    activities: [
      { es: "Tour de bahías en lancha", en: "Bay-hopping boat tour" },
      { es: "Snorkel y playas vírgenes", en: "Snorkel & quiet beaches" },
      { es: "Senderismo y miradores", en: "Hiking & viewpoints" },
      { es: "Estancias todo incluido", en: "All-inclusive stays" }
    ],
    tours: [
      { es: "Bahías de Huatulco", en: "Huatulco bays tour" },
      { es: "Cascadas y cafetales", en: "Waterfalls & coffee farms" },
      { es: "Puerto Escondido (extensión)", en: "Puerto Escondido extension" }
    ]
  }
];

const guideByBeachId = new Map(beachGuides.map((g) => [g.beachId, g]));

export function getBeachGuide(beachId: BeachDestination["id"]): BeachGuide | undefined {
  return guideByBeachId.get(beachId);
}
