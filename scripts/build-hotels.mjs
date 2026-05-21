import { writeFileSync } from "fs";
import { rowsPart2 } from "./hotels-rows-part2.mjs";
import { rowsPart3 } from "./hotels-rows-part3.mjs";
import { rowsPart4 } from "./hotels-rows-part4.mjs";
import { rowsPart5 } from "./hotels-rows-part5.mjs";

const tierMap = { c: "3000-5000", b: "5000-8000", p: "8000-12000", l: "12000+" };
const toneMap = { c: "comfort", b: "balanced", p: "premium", l: "luxury" };
const prefixMap = { c: "comf", b: "bal", p: "pre", l: "lux" };

const rowsPart1 = [
  ["cancun", "c", "city-express", "City Express Plus by Marriott Cancún", "City Express Plus by Marriott Cancun", "Ubicación práctica y habitaciones eficientes para explorar la zona hotelera sin pagar resort.", "Practical location and efficient rooms to explore the hotel zone without resort pricing.", "Práctico y ligero", "Practical and light", ["groups"]],
  ["cancun", "c", "hampton", "Hampton Inn by Hilton Cancún Cumbres", "Hampton Inn by Hilton Cancun Cumbres", "Desayuno incluido y acceso rápido al centro para viajes de trabajo o escapadas cortas.", "Included breakfast and quick downtown access for work trips or short getaways.", "Cómodo y confiable", "Comfortable and reliable", ["groups"]],
  ["cancun", "c", "aloft", "Aloft Cancún", "Aloft Cancun", "Diseño urbano y ambiente social cerca del malecón y la vida nocturna.", "Urban design and social vibe near the boardwalk and nightlife.", "Urbano y social", "Urban and social", ["design", "rooftop"]],
  ["cancun", "b", "fiesta-condesa", "Fiesta Americana Condesa Cancún", "Fiesta Americana Condesa Cancun", "Resort frente al mar con piscinas, gastronomía variada y ambiente familiar animado.", "Oceanfront resort with pools, varied dining, and a lively family atmosphere.", "Playa y familia", "Beach and family", ["oceanfront", "all-inclusive", "groups", "gastronomy"]],
  ["cancun", "b", "hyatt-vivid", "Hyatt Vivid Grand Island", "Hyatt Vivid Grand Island", "Experiencia adults-oriented con entretenimiento, gastronomía y acceso a la laguna Nichupté.", "Adults-oriented experience with entertainment, dining, and Nichupté lagoon access.", "Adultos y fiesta", "Adults and party", ["adults-only", "oceanfront", "gastronomy", "rooftop"]],
  ["cancun", "b", "courtyard", "Courtyard by Marriott Cancún Airport", "Courtyard by Marriott Cancun Airport", "Base cómoda con traslado al aeropuerto y fácil conexión a la zona hotelera.", "Comfortable base with airport shuttle and easy hotel-zone connections.", "Conectado y ágil", "Connected and agile", ["groups"]],
  ["cancun", "p", "nizuc", "NIZUC Resort & Spa", "NIZUC Resort & Spa", "Refugio contemporáneo en Punta Nizuc con spa, gastronomía de autor y vistas al Caribe.", "Contemporary retreat in Punta Nizuc with spa, signature dining, and Caribbean views.", "Contemporáneo y sereno", "Contemporary and serene", ["luxury", "spa", "gastronomy", "oceanfront", "design"]],
  ["cancun", "p", "secrets-vine", "Secrets The Vine Cancun", "Secrets The Vine Cancun", "Todo incluido solo adultos con viñedo, rooftops y servicio personalizado frente al mar.", "Adults-only all-inclusive with vineyard, rooftops, and personalized oceanfront service.", "Sofisticado todo incluido", "Sophisticated all-inclusive", ["adults-only", "all-inclusive", "gastronomy", "rooftop", "oceanfront"]],
  ["cancun", "p", "trs-coral", "TRS Coral Hotel Cancun", "TRS Coral Hotel Cancun", "Hotel boutique dentro de Hard Rock con mayordomo, suites amplias y gastronomía gourmet.", "Boutique hotel within Hard Rock with butler, spacious suites, and gourmet dining.", "Boutique y exclusivo", "Boutique and exclusive", ["boutique", "adults-only", "luxury", "gastronomy", "spa"]],
  ["cancun", "l", "le-blanc", "Le Blanc Spa Resort Cancun", "Le Blanc Spa Resort Cancun", "Icono adults-only de lujo blanco con spa Le Blanc y servicio impecable frente al mar.", "White-luxury adults-only icon with Le Blanc spa and impeccable oceanfront service.", "Blanco y sublime", "White and sublime", ["luxury", "adults-only", "spa", "oceanfront", "gastronomy"]],
  ["cancun", "l", "kempinski", "Kempinski Hotel Cancún", "Kempinski Hotel Cancun", "Elegancia europea en la zona hotelera con suites amplias y gastronomía de nivel mundial.", "European elegance in the hotel zone with spacious suites and world-class dining.", "Europeo y refinado", "European and refined", ["luxury", "spa", "gastronomy", "oceanfront"]],
  ["cancun", "l", "jw-marriott", "JW Marriott Cancun Resort & Spa", "JW Marriott Cancun Resort & Spa", "Resort icónico en la punta de la zona hotelera con spa de clase mundial y playa privada.", "Iconic resort at the hotel zone tip with world-class spa and private beach.", "Icónico frente al mar", "Iconic oceanfront", ["luxury", "spa", "oceanfront", "gastronomy"]],
  ["riviera-maya", "c", "holiday-inn", "Holiday Inn Express Playa del Carmen", "Holiday Inn Express Playa del Carmen", "Base económica a pasos de la Quinta Avenida y tours a cenotes y ruinas.", "Budget base steps from Fifth Avenue and tours to cenotes and ruins.", "Céntrico y práctico", "Central and practical", ["groups"]],
  ["riviera-maya", "c", "hm-playa", "HM Playa del Carmen", "HM Playa del Carmen", "Hotel urbano con piscina en el corazón de Playa para explorar la Riviera.", "Urban hotel with pool in downtown Playa to explore the Riviera.", "Urbano playero", "Urban beach town", ["groups", "rooftop"]],
  ["riviera-maya", "c", "hampton", "Hampton Inn by Hilton Playa del Carmen", "Hampton Inn by Hilton Playa del Carmen", "Cadena confiable con desayuno y ubicación ideal para cenotes y Tulum.", "Reliable chain with breakfast and ideal location for cenotes and Tulum.", "Confiable y céntrico", "Reliable and central", ["groups"]],
  ["riviera-maya", "b", "paradisus", "Paradisus Playa del Carmen", "Paradisus Playa del Carmen", "Resort todo incluido con jardines tropicales y acceso a la playa de Playacar.", "All-inclusive resort with tropical gardens and Playacar beach access.", "Tropical todo incluido", "Tropical all-inclusive", ["all-inclusive", "oceanfront", "spa", "groups"]],
  ["riviera-maya", "b", "barcelo-maya", "Barceló Maya Grand Resort", "Barcelo Maya Grand Resort", "Complejo familiar enorme con múltiples resorts, parque acuático y playas de arena blanca.", "Huge family complex with multiple resorts, water park, and white-sand beaches.", "Familiar y amplio", "Family and expansive", ["all-inclusive", "oceanfront", "groups"]],
  ["riviera-maya", "b", "iberostar", "Iberostar Tucán & Quetzal", "Iberostar Tucan & Quetzal", "Dos resorts conectados con golf, deportes acuáticos y ambiente animado en la playa.", "Two connected resorts with golf, water sports, and lively beach atmosphere.", "Activo en la playa", "Active on the beach", ["all-inclusive", "oceanfront", "groups"]],
  ["riviera-maya", "p", "xcaret-arte", "Hotel Xcaret Arte", "Hotel Xcaret Arte", "Experiencia cultural premium con acceso ilimitado a parques Xcaret y gastronomía de autor.", "Premium cultural experience with unlimited Xcaret park access and signature dining.", "Arte y naturaleza", "Art and nature", ["luxury", "nature", "gastronomy", "spa", "design"]],
  ["riviera-maya", "p", "andaz-mayakoba", "Andaz Mayakoba Resort Riviera Maya", "Andaz Mayakoba Resort Riviera Maya", "Diseño contemporáneo entre manglares con lagunas, kayak y gastronomía local elevada.", "Contemporary design among mangroves with lagoons, kayaking, and elevated local cuisine.", "Manglar y diseño", "Mangrove and design", ["design", "nature", "spa", "gastronomy", "boutique"]],
  ["riviera-maya", "p", "banyan-tree", "Banyan Tree Mayakoba", "Banyan Tree Mayakoba", "Villas con piscina privada en canal Mayakoba con spa tailandés y servicio butler.", "Pool villas on Mayakoba canals with Thai spa and butler service.", "Villa y serenidad", "Villa and serenity", ["luxury", "spa", "nature", "boutique"]],
  ["riviera-maya", "l", "rosewood", "Rosewood Mayakoba", "Rosewood Mayakoba", "Lujo discreto en lagunas de manglar con villas sobre el agua y gastronomía excepcional.", "Discreet luxury on mangrove lagoons with overwater villas and exceptional dining.", "Discreto y sublime", "Discreet and sublime", ["luxury", "spa", "gastronomy", "nature", "boutique"]],
  ["riviera-maya", "l", "fairmont", "Fairmont Mayakoba", "Fairmont Mayakoba", "Resort de lujo con campo de golf El Camaleón y playas de arena fina en Mayakoba.", "Luxury resort with El Camaleón golf course and fine-sand beaches in Mayakoba.", "Golf y elegancia", "Golf and elegance", ["luxury", "spa", "oceanfront", "gastronomy"]],
  ["riviera-maya", "l", "grand-velas", "Grand Velas Riviera Maya", "Grand Velas Riviera Maya", "Todo incluido de ultra lujo con suites amplias, spa galardonado y alta cocina.", "Ultra-luxury all-inclusive with spacious suites, award-winning spa, and haute cuisine.", "Ultra lujo integral", "Ultra all-inclusive luxury", ["luxury", "all-inclusive", "spa", "gastronomy", "oceanfront"]],
];

const rows = [...rowsPart1, ...rowsPart2, ...rowsPart3, ...rowsPart4, ...rowsPart5];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function renderHotel(r) {
  const [placeId, tk, slug, nameEs, nameEn, descEs, descEn, vibeEs, vibeEn, tags] = r;
  const id = `${placeId}-${prefixMap[tk]}-${slug}`;
  return `  {
    id: "${id}",
    placeId: "${placeId}",
    tier: "${tierMap[tk]}",
    name: { es: "${esc(nameEs)}", en: "${esc(nameEn)}" },
    description: { es: "${esc(descEs)}", en: "${esc(descEn)}" },
    vibe: { es: "${esc(vibeEs)}", en: "${esc(vibeEn)}" },
    tags: [${tags.map((t) => `"${t}"`).join(", ")}],
    tone: "${toneMap[tk]}"
  }`;
}

const header = `import type { Hotel } from "./types";

export const travelHotels: Hotel[] = [
`;

const footer = `
];
`;

writeFileSync("src/data/travel/hotels.ts", header + rows.map(renderHotel).join(",\n") + footer);

const places = [...new Set(rows.map((r) => r[0]))];
const counts = {};
for (const r of rows) {
  const k = `${r[0]}-${r[1]}`;
  counts[k] = (counts[k] || 0) + 1;
}
console.log("Wrote", rows.length, "hotels across", places.length, "destinations");
for (const p of places) {
  for (const t of ["c", "b", "p", "l"]) {
    const n = counts[`${p}-${t}`] || 0;
    if (n !== 3) console.warn(`WARN ${p} tier ${t}: ${n} hotels`);
  }
}
