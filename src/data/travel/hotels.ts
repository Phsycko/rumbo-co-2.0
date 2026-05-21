import type { Hotel } from "./types";

export const travelHotels: Hotel[] = [
  // ── Cancún ──────────────────────────────────────────────────────────
  {
    id: "cancun-comf-city-express",
    placeId: "cancun",
    tier: "3000-5000",
    name: { es: "City Express Plus by Marriott Cancún", en: "City Express Plus by Marriott Cancun" },
    description: {
      es: "Ubicación práctica y habitaciones eficientes para explorar la zona hotelera sin pagar resort.",
      en: "Practical location and efficient rooms to explore the hotel zone without resort pricing."
    },
    vibe: { es: "Práctico y ligero", en: "Practical and light" },
    tags: ["groups"],
    tone: "comfort",
    image: "/images/hotels/cancun/city-express.png"
  },
  {
    id: "cancun-comf-hampton",
    placeId: "cancun",
    tier: "3000-5000",
    name: { es: "Hampton Inn by Hilton Cancún Cumbres", en: "Hampton Inn by Hilton Cancun Cumbres" },
    description: {
      es: "Desayuno incluido y acceso rápido al centro para viajes de trabajo o escapadas cortas.",
      en: "Included breakfast and quick downtown access for work trips or short getaways."
    },
    vibe: { es: "Cómodo y confiable", en: "Comfortable and reliable" },
    tags: ["groups"],
    tone: "comfort",
    image: "/images/hotels/cancun/hampton.png"
  },
  {
    id: "cancun-comf-aloft",
    placeId: "cancun",
    tier: "3000-5000",
    name: { es: "Aloft Cancún", en: "Aloft Cancun" },
    description: {
      es: "Diseño urbano y ambiente social cerca del malecón y la vida nocturna.",
      en: "Urban design and social vibe near the boardwalk and nightlife."
    },
    vibe: { es: "Urbano y social", en: "Urban and social" },
    tags: ["design", "rooftop"],
    tone: "comfort",
    image: "/images/hotels/cancun/aloft.png"
  },
  {
    id: "cancun-bal-fiesta-condesa",
    placeId: "cancun",
    tier: "5000-8000",
    name: { es: "Fiesta Americana Condesa Cancún", en: "Fiesta Americana Condesa Cancun" },
    description: {
      es: "Resort frente al mar con piscinas, gastronomía variada y ambiente familiar animado.",
      en: "Oceanfront resort with pools, varied dining, and a lively family atmosphere."
    },
    vibe: { es: "Playa y familia", en: "Beach and family" },
    tags: ["oceanfront", "all-inclusive", "groups", "gastronomy"],
    tone: "balanced",
    image: "/images/hotels/cancun/fiesta-condesa.png"
  },
  {
    id: "cancun-bal-hyatt-vivid",
    placeId: "cancun",
    tier: "5000-8000",
    name: { es: "Hyatt Vivid Grand Island", en: "Hyatt Vivid Grand Island" },
    description: {
      es: "Experiencia adults-oriented con entretenimiento, gastronomía y acceso a la laguna Nichupté.",
      en: "Adults-oriented experience with entertainment, dining, and Nichupté lagoon access."
    },
    vibe: { es: "Adultos y fiesta", en: "Adults and party" },
    tags: ["adults-only", "oceanfront", "gastronomy", "rooftop"],
    tone: "balanced",
    image: "/images/hotels/cancun/hyatt-vivid.png"
  },
  {
    id: "cancun-bal-courtyard",
    placeId: "cancun",
    tier: "5000-8000",
    name: { es: "Courtyard by Marriott Cancún Airport", en: "Courtyard by Marriott Cancun Airport" },
    description: {
      es: "Base cómoda con traslado al aeropuerto y fácil conexión a la zona hotelera.",
      en: "Comfortable base with airport shuttle and easy hotel-zone connections."
    },
    vibe: { es: "Conectado y ágil", en: "Connected and agile" },
    tags: ["groups"],
    tone: "balanced",
    image: "/images/hotels/cancun/courtyard.png"
  },
  {
    id: "cancun-pre-nizuc",
    placeId: "cancun",
    tier: "8000-12000",
    name: { es: "NIZUC Resort & Spa", en: "NIZUC Resort & Spa" },
    description: {
      es: "Refugio contemporáneo en Punta Nizuc con spa, gastronomía de autor y vistas al Caribe.",
      en: "Contemporary retreat in Punta Nizuc with spa, signature dining, and Caribbean views."
    },
    vibe: { es: "Contemporáneo y sereno", en: "Contemporary and serene" },
    tags: ["luxury", "spa", "gastronomy", "oceanfront", "design"],
    tone: "premium",
    image: "/images/hotels/cancun/nizuc.png"
  },
  {
    id: "cancun-pre-secrets-vine",
    placeId: "cancun",
    tier: "8000-12000",
    name: { es: "Secrets The Vine Cancun", en: "Secrets The Vine Cancun" },
    description: {
      es: "Todo incluido solo adultos con viñedo, rooftops y servicio personalizado frente al mar.",
      en: "Adults-only all-inclusive with vineyard, rooftops, and personalized oceanfront service."
    },
    vibe: { es: "Sofisticado todo incluido", en: "Sophisticated all-inclusive" },
    tags: ["adults-only", "all-inclusive", "gastronomy", "rooftop", "oceanfront"],
    tone: "premium",
    image: "/images/hotels/cancun/secrets-vine.png"
  },
  {
    id: "cancun-pre-trs-coral",
    placeId: "cancun",
    tier: "8000-12000",
    name: { es: "TRS Coral Hotel Cancun", en: "TRS Coral Hotel Cancun" },
    description: {
      es: "Hotel boutique dentro de Hard Rock con mayordomo, suites amplias y gastronomía gourmet.",
      en: "Boutique hotel within Hard Rock with butler, spacious suites, and gourmet dining."
    },
    vibe: { es: "Boutique y exclusivo", en: "Boutique and exclusive" },
    tags: ["boutique", "adults-only", "luxury", "gastronomy", "spa"],
    tone: "premium",
    image: "/images/hotels/cancun/trs-coral.png"
  },
  {
    id: "cancun-lux-le-blanc",
    placeId: "cancun",
    tier: "12000+",
    name: { es: "Le Blanc Spa Resort Cancun", en: "Le Blanc Spa Resort Cancun" },
    description: {
      es: "Icono adults-only de lujo blanco con spa Le Blanc y servicio impecable frente al mar.",
      en: "White-luxury adults-only icon with Le Blanc spa and impeccable oceanfront service."
    },
    vibe: { es: "Blanco y sublime", en: "White and sublime" },
    tags: ["luxury", "adults-only", "spa", "oceanfront", "gastronomy"],
    tone: "luxury",
    image: "/images/hotels/cancun/le-blanc.png"
  },
  {
    id: "cancun-lux-kempinski",
    placeId: "cancun",
    tier: "12000+",
    name: { es: "Kempinski Hotel Cancún", en: "Kempinski Hotel Cancun" },
    description: {
      es: "Elegancia europea en la zona hotelera con suites amplias y gastronomía de nivel mundial.",
      en: "European elegance in the hotel zone with spacious suites and world-class dining."
    },
    vibe: { es: "Europeo y refinado", en: "European and refined" },
    tags: ["luxury", "spa", "gastronomy", "oceanfront"],
    tone: "luxury",
    image: "/images/hotels/cancun/kempinski.png"
  },
  {
    id: "cancun-lux-jw-marriott",
    placeId: "cancun",
    tier: "12000+",
    name: { es: "JW Marriott Cancun Resort & Spa", en: "JW Marriott Cancun Resort & Spa" },
    description: {
      es: "Resort icónico en la punta del hotel zone con spa de clase mundial y playa privada.",
      en: "Iconic resort at the hotel zone tip with world-class spa and private beach."
    },
    vibe: { es: "Icónico frente al mar", en: "Iconic oceanfront" },
    tags: ["luxury", "spa", "oceanfront", "gastronomy"],
    tone: "luxury",
    image: "/images/hotels/cancun/jw-marriott.png"
  },

  // ── Riviera Maya ────────────────────────────────────────────────────
  {
    id: "riviera-maya-comf-holiday-inn",
    placeId: "riviera-maya",
    tier: "3000-5000",
    name: { es: "Holiday Inn Express Playa del Carmen", en: "Holiday Inn Express Playa del Carmen" },
    description: {
      es: "Base económica a pasos de la Quinta Avenida y tours a cenotes y ruinas.",
      en: "Budget base steps from Fifth Avenue and tours to cenotes and ruins."
    },
    vibe: { es: "Céntrico y práctico", en: "Central and practical" },
    tags: ["groups"],
    tone: "comfort"
  },
  {
    id: "riviera-maya-comf-hm-playa",
    placeId: "riviera-maya",
    tier: "3000-5000",
    name: { es: "HM Playa del Carmen", en: "HM Playa del Carmen" },
    description: {
      es: "Hotel urbano con piscina en el corazón de Playa para explorar la Riviera.",
      en: "Urban hotel with pool in downtown Playa to explore the Riviera."
    },
    vibe: { es: "Urbano playero", en: "Urban beach town" },
    tags: ["groups", "rooftop"],
    tone: "comfort"
  },
  {
    id: "riviera-maya-comf-hampton",
    placeId: "riviera-maya",
    tier: "3000-5000",
    name: { es: "Hampton Inn by Hilton Playa del Carmen", en: "Hampton Inn by Hilton Playa del Carmen" },
    description: {
      es: "Cadena confiable con desayuno y ubicación ideal para cenotes y Tulum.",
      en: "Reliable chain with breakfast and ideal location for cenotes and Tulum."
    },
    vibe: { es: "Confiable y céntrico", en: "Reliable and central" },
    tags: ["groups"],
    tone: "comfort"
  },
  {
    id: "riviera-maya-bal-paradisus",
    placeId: "riviera-maya",
    tier: "5000-8000",
    name: { es: "Paradisus Playa del Carmen", en: "Paradisus Playa del Carmen" },
    description: {
      es: "Resort todo incluido con jardines tropicales y acceso a la playa de Playacar.",
      en: "All-inclusive resort with tropical gardens and Playacar beach access."
    },
    vibe: { es: "Tropical todo incluido", en: "Tropical all-inclusive" },
    tags: ["all-inclusive", "oceanfront", "spa", "groups"],
    tone: "balanced"
  },
  {
    id: "riviera-maya-bal-barcelo-maya",
    placeId: "riviera-maya",
    tier: "5000-8000",
    name: { es: "Barceló Maya Grand Resort", en: "Barcelo Maya Grand Resort" },
    description: {
      es: "Complejo familiar enorme con múltiples resorts, parque acuático y playas de arena blanca.",
      en: "Huge family complex with multiple resorts, water park, and white-sand beaches."
    },
    vibe: { es: "Familiar y amplio", en: "Family and expansive" },
    tags: ["all-inclusive", "oceanfront", "groups"],
    tone: "balanced"
  },
  {
    id: "riviera-maya-bal-iberostar",
    placeId: "riviera-maya",
    tier: "5000-8000",
    name: { es: "Iberostar Tucán & Quetzal", en: "Iberostar Tucan & Quetzal" },
    description: {
      es: "Dos resorts conectados con golf, deportes acuáticos y ambiente animado en la playa.",
      en: "Two connected resorts with golf, water sports, and lively beach atmosphere."
    },
    vibe: { es: "Activo en la playa", en: "Active on the beach" },
    tags: ["all-inclusive", "oceanfront", "groups"],
    tone: "balanced"
  },
  {
    id: "riviera-maya-pre-xcaret-arte",
    placeId: "riviera-maya",
    tier: "8000-12000",
    name: { es: "Hotel Xcaret Arte", en: "Hotel Xcaret Arte" },
    description: {
      es: "Experiencia cultural premium con acceso ilimitado a parques Xcaret y gastronomía de autor.",
      en: "Premium cultural experience with unlimited Xcaret park access and signature dining."
    },
    vibe: { es: "Arte y naturaleza", en: "Art and nature" },
    tags: ["luxury", "nature", "gastronomy", "spa", "design"],
    tone: "premium"
  },
  {
    id: "riviera-maya-pre-andaz-mayakoba",
    placeId: "riviera-maya",
    tier: "8000-12000",
    name: { es: "Andaz Mayakoba Resort Riviera Maya", en: "Andaz Mayakoba Resort Riviera Maya" },
    description: {
      es: "Diseño contemporáneo entre manglares con lagunas, kayak y gastronomía local elevada.",
      en: "Contemporary design among mangroves with lagoons, kayaking, and elevated local cuisine."
    },
    vibe: { es: "Manglar y diseño", en: "Mangrove and design" },
    tags: ["design", "nature", "spa", "gastronomy", "boutique"],
    tone: "premium"
  },
  {
    id: "riviera-maya-pre-banyan-tree",
    placeId: "riviera-maya",
    tier: "8000-12000",
    name: { es: "Banyan Tree Mayakoba", en: "Banyan Tree Mayakoba" },
    description: {
      es: "Villas con piscina privada en canal mayakoba con spa tailandés y servicio butler.",
      en: "Pool villas on Mayakoba canals with Thai spa and butler service."
    },
    vibe: { es: "Villa y serenidad", en: "Villa and serenity" },
    tags: ["luxury", "spa", "nature", "boutique"],
    tone: "premium"
  },
  {
    id: "riviera-maya-lux-rosewood",
    placeId: "riviera-maya",
    tier: "12000+",
    name: { es: "Rosewood Mayakoba", en: "Rosewood Mayakoba" },
    description: {
      es: "Lujo discreto en lagunas de manglar con villas sobre el agua y gastronomía excepcional.",
      en: "Discreet luxury on mangrove lagoons with overwater villas and exceptional dining."
    },
    vibe: { es: "Discreto y sublime", en: "Discreet and sublime" },
    tags: ["luxury", "spa", "gastronomy", "nature", "boutique"],
    tone: "luxury"
  },
  {
    id: "riviera-maya-lux-fairmont",
    placeId: "riviera-maya",
    tier: "12000+",
    name: { es: "Fairmont Mayakoba", en: "Fairmont Mayakoba" },
    description: {
      es: "Resort de lujo con campo de golf El Camaleón y playas de arena fina en Mayakoba.",
      en: "Luxury resort with El Camaleón golf course and fine-sand beaches in Mayakoba."
    },
    vibe: { es: "Golf y elegancia", en: "Golf and elegance" },
    tags: ["luxury", "spa", "oceanfront", "gastronomy"],
    tone: "luxury"
  },
  {
    id: "riviera-maya-lux-grand-velas",
    placeId: "riviera-maya",
    tier: "12000+",
    name: { es: "Grand Velas Riviera Maya", en: "Grand Velas Riviera Maya" },
    description: {
      es: "Todo incluido de ultra lujo con suites amplias, spa galardonado y alta cocina.",
      en: "Ultra-luxury all-inclusive with spacious suites, award-winning spa, and haute cuisine."
    },
    vibe: { es: "Ultra lujo integral", en: "Ultra all-inclusive luxury" },
    tags: ["luxury", "all-inclusive", "spa", "gastronomy", "oceanfront"],
    tone: "luxury"
  }
];
