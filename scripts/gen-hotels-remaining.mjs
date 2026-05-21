import { readFileSync, writeFileSync } from "fs";

const tierMap = { c: "3000-5000", b: "5000-8000", p: "8000-12000", l: "12000+" };
const toneMap = { c: "comfort", b: "balanced", p: "premium", l: "luxury" };

/** [placeId, tierKey, slug, nameEs, nameEn, descEs, descEn, vibeEs, vibeEn, tags] */
const rows = [
  // Tulum
  ["tulum", "c", "diamante-k", "Diamante K Tulum", "Diamante K Tulum", "Cabañas frente al mar con ambiente relajado y acceso directo a la playa.", "Oceanfront cabanas with relaxed vibe and direct beach access.", "Rústico frente al mar", "Rustic oceanfront", ["oceanfront", "nature"]],
  ["tulum", "c", "poc-na-nah", "Hotel Poc Na Nah", "Hotel Poc Na Nah", "Hotel sencillo cerca de la zona arqueológica ideal para explorar.", "Simple hotel near ruins, ideal for exploring.", "Sencillo y céntrico", "Simple and central", ["groups", "nature"]],
  ["tulum", "c", "hotelito-azul", "Hotelito Azul Tulum", "Hotelito Azul Tulum", "Boutique accesible con decoración caribeña a pasos de la playa.", "Accessible boutique with Caribbean decor steps from the beach.", "Bohemio accesible", "Accessible bohemian", ["boutique", "oceanfront"]],
  ["tulum", "b", "kan", "Kan Tulum", "Kan Tulum", "Boutique con rooftop, piscina y diseño que celebra selva y mar.", "Boutique with rooftop, pool, and jungle-meets-sea design.", "Boutique y selva", "Boutique and jungle", ["boutique", "rooftop", "design", "nature"]],
  ["tulum", "b", "amarte", "Hotel Amarte Tulum", "Hotel Amarte Tulum", "Estancia con arte local, piscina y desayuno en la zona hotelera.", "Stay with local art, pool, and breakfast in the hotel zone.", "Arte y calma", "Art and calm", ["boutique", "design"]],
  ["tulum", "b", "mia", "Mia Tulum", "Mia Tulum", "Hotel con piscina infinita y ambiente social en la playa.", "Hotel with infinity pool and social beach vibe.", "Social y playero", "Social and beachy", ["oceanfront", "rooftop", "design"]],
  ["tulum", "p", "be-tulum", "Be Tulum", "Be Tulum", "Boutique premium frente al mar con suites de diseño y gastronomía de autor.", "Premium oceanfront boutique with designer suites and signature cuisine.", "Diseño frente al mar", "Design on the beach", ["boutique", "oceanfront", "design", "gastronomy"]],
  ["tulum", "p", "nomade", "Nomade Tulum", "Nomade Tulum", "Concepto wellness con restaurantes de autor y playa privada.", "Wellness concept with signature restaurants and private beach.", "Wellness y bohemia", "Wellness and bohemian", ["boutique", "gastronomy", "spa", "design"]],
  ["tulum", "p", "habitas", "Habitas Tulum", "Habitas Tulum", "Glamping de lujo en la selva con experiencias culturales y cocina contemporánea.", "Luxury jungle glamping with cultural experiences and contemporary cuisine.", "Selva y comunidad", "Jungle and community", ["nature", "boutique", "design", "gastronomy"]],
  ["tulum", "l", "ana-jose", "Ana y José Beachfront Hotel & Spa", "Ana y Jose Beachfront Hotel & Spa", "Pionero de lujo en Tulum con suites frente al mar y spa de clase mundial.", "Tulum luxury pioneer with oceanfront suites and world-class spa.", "Pionero y exclusivo", "Pioneer and exclusive", ["luxury", "spa", "oceanfront", "boutique"]],
  ["tulum", "l", "azulik", "Azulik Tulum", "Azulik Tulum", "Arquitectura orgánica icónica con villas en la selva y experiencias artísticas.", "Iconic organic architecture with jungle villas and art experiences.", "Orgánico y artístico", "Organic and artistic", ["luxury", "design", "nature", "boutique"]],
  ["tulum", "l", "casa-malca", "Casa Malca Tulum", "Casa Malca Tulum", "Mansión convertida en hotel de arte con playa privada y colección única.", "Art mansion hotel with private beach and unique collection.", "Arte y exclusividad", "Art and exclusivity", ["luxury", "design", "oceanfront", "boutique"]],
];

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function renderHotel([placeId, tk, slug, nameEs, nameEn, descEs, descEn, vibeEs, vibeEn, tags]) {
  const tier = tierMap[tk];
  const tone = toneMap[tk];
  const prefix = { c: "comf", b: "bal", p: "pre", l: "lux" }[tk];
  const id = `${placeId}-${prefix}-${slug}`;
  const tagStr = tags.map((t) => `"${t}"`).join(", ");
  return `  {
    id: "${id}",
    placeId: "${placeId}",
    tier: "${tier}",
    name: { es: "${esc(nameEs)}", en: "${esc(nameEn)}" },
    description: { es: "${esc(descEs)}", en: "${esc(descEn)}" },
    vibe: { es: "${esc(vibeEs)}", en: "${esc(vibeEn)}" },
    tags: [${tagStr}],
    tone: "${tone}"
  }`;
}

const path = "src/data/travel/hotels.ts";
let content = readFileSync(path, "utf8");
const block = "\n" + rows.map(renderHotel).join(",\n") + ",\n";
if (!content.endsWith("\n")) content += "\n";
content = content.trimEnd() + block;
writeFileSync(path, content);
console.log("Appended", rows.length, "hotels");
