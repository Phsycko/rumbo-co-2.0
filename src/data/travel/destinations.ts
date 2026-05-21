import type { DestinationCategory, DestinationPlace } from "./types";

export const destinationCategories: DestinationCategory[] = [
  {
    id: "playa",
    label: { es: "Playa", en: "Beach" },
    desc: { es: "Caribe y Pacífico", en: "Caribbean & Pacific" }
  },
  {
    id: "pueblo-magico",
    label: { es: "Pueblo mágico", en: "Magic town" },
    desc: { es: "Encanto, cultura y calma", en: "Charm, culture & calm" }
  },
  {
    id: "cultura",
    label: { es: "Cultura y experiencias", en: "Culture & experiences" },
    desc: { es: "Gastronomía, historia y ritmo local", en: "Food, history & local rhythm" }
  },
  {
    id: "sierra",
    label: { es: "Sierra Tarahumara", en: "Sierra Tarahumara" },
    desc: { es: "Creel y naturaleza", en: "Creel & nature" }
  },
  {
    id: "barrancas",
    label: { es: "Barrancas del Cobre", en: "Copper Canyon" },
    desc: { es: "Tren Chepe y miradores", en: "Chepe train & viewpoints" }
  },
  {
    id: "mixto",
    label: { es: "Ruta combinada", en: "Combined route" },
    desc: { es: "Sierra, playa u otros", en: "Mountains, beach & more" }
  },
  {
    id: "otro",
    label: { es: "Otro destino", en: "Other destination" },
    desc: { es: "Cuéntanos tu idea", en: "Tell us your idea" }
  }
];

export const destinationPlaces: DestinationPlace[] = [
  { id: "cancun", categoryId: "playa", name: { es: "Cancún", en: "Cancun" }, region: { es: "Quintana Roo", en: "Quintana Roo" }, tags: ["playa", "premium", "grupos-economicos"] },
  { id: "riviera-maya", categoryId: "playa", name: { es: "Riviera Maya", en: "Riviera Maya" }, region: { es: "Quintana Roo", en: "Quintana Roo" }, tags: ["playa", "premium"] },
  { id: "tulum", categoryId: "playa", name: { es: "Tulum", en: "Tulum" }, region: { es: "Quintana Roo", en: "Quintana Roo" }, tags: ["playa", "premium"] },
  { id: "holbox", categoryId: "playa", name: { es: "Holbox", en: "Holbox" }, region: { es: "Quintana Roo", en: "Quintana Roo" }, tags: ["playa", "premium"] },
  { id: "bacalar", categoryId: "playa", name: { es: "Bacalar", en: "Bacalar" }, region: { es: "Quintana Roo", en: "Quintana Roo" }, tags: ["playa", "premium"] },
  { id: "vallarta", categoryId: "playa", name: { es: "Puerto Vallarta", en: "Puerto Vallarta" }, region: { es: "Jalisco", en: "Jalisco" }, tags: ["playa", "grupos-economicos"] },
  { id: "riviera-nayarit", categoryId: "playa", name: { es: "Riviera Nayarit", en: "Riviera Nayarit" }, region: { es: "Nayarit", en: "Nayarit" }, tags: ["playa", "premium"] },
  { id: "punta-mita", categoryId: "playa", name: { es: "Punta Mita", en: "Punta Mita" }, region: { es: "Nayarit", en: "Nayarit" }, tags: ["playa", "premium"] },
  { id: "cabo", categoryId: "playa", name: { es: "Los Cabos", en: "Los Cabos" }, region: { es: "Baja California Sur", en: "Baja California Sur" }, tags: ["playa", "premium"] },
  { id: "mazatlan", categoryId: "playa", name: { es: "Mazatlán", en: "Mazatlan" }, region: { es: "Sinaloa", en: "Sinaloa" }, tags: ["playa", "grupos-economicos"] },
  { id: "huatulco", categoryId: "playa", name: { es: "Huatulco", en: "Huatulco" }, region: { es: "Oaxaca", en: "Oaxaca" }, tags: ["playa", "grupos-economicos"] },
  { id: "ixtapa", categoryId: "playa", name: { es: "Ixtapa", en: "Ixtapa" }, region: { es: "Guerrero", en: "Guerrero" }, tags: ["playa", "grupos-economicos"] },
  { id: "la-paz", categoryId: "playa", name: { es: "La Paz", en: "La Paz" }, region: { es: "Baja California Sur", en: "Baja California Sur" }, tags: ["playa", "premium"] },
  { id: "san-miguel", categoryId: "pueblo-magico", name: { es: "San Miguel de Allende", en: "San Miguel de Allende" }, region: { es: "Guanajuato", en: "Guanajuato" }, tags: ["premium", "cultura"] },
  { id: "valle-guadalupe", categoryId: "cultura", name: { es: "Valle de Guadalupe", en: "Valle de Guadalupe" }, region: { es: "Baja California", en: "Baja California" }, tags: ["premium", "cultura"] },
  { id: "oaxaca", categoryId: "cultura", name: { es: "Oaxaca", en: "Oaxaca" }, region: { es: "Oaxaca", en: "Oaxaca" }, tags: ["cultura"] },
  { id: "merida", categoryId: "cultura", name: { es: "Mérida", en: "Merida" }, region: { es: "Yucatán", en: "Yucatan" }, tags: ["cultura"] },
  { id: "chiapas", categoryId: "cultura", name: { es: "Chiapas", en: "Chiapas" }, region: { es: "Chiapas", en: "Chiapas" }, tags: ["cultura"] },
  { id: "tequila", categoryId: "cultura", name: { es: "Tequila", en: "Tequila" }, region: { es: "Jalisco", en: "Jalisco" }, tags: ["cultura"] },
  { id: "todos-santos", categoryId: "playa", name: { es: "Todos Santos", en: "Todos Santos" }, region: { es: "Baja California Sur", en: "Baja California Sur" }, tags: ["premium", "playa"] },
  { id: "creel", categoryId: "sierra", name: { es: "Creel", en: "Creel" }, region: { es: "Chihuahua", en: "Chihuahua" }, tags: ["sierra", "grupos-economicos"] },
  { id: "divisadero", categoryId: "barrancas", name: { es: "Divisadero", en: "Divisadero" }, region: { es: "Barrancas del Cobre", en: "Copper Canyon" }, tags: ["barrancas", "sierra"] },
  { id: "batopilas", categoryId: "barrancas", name: { es: "Batopilas", en: "Batopilas" }, region: { es: "Barrancas del Cobre", en: "Copper Canyon" }, tags: ["barrancas"] },
  { id: "chepe-ruta", categoryId: "barrancas", name: { es: "Ruta Chepe", en: "Chepe route" }, region: { es: "Chihuahua – Sinaloa", en: "Chihuahua – Sinaloa" }, tags: ["barrancas", "sierra"] },
  { id: "huasteca", categoryId: "cultura", name: { es: "Huasteca Potosina", en: "Huasteca Potosina" }, region: { es: "San Luis Potosí", en: "San Luis Potosi" }, tags: ["grupos-economicos", "cultura"] },
  { id: "guadalajara", categoryId: "cultura", name: { es: "Guadalajara", en: "Guadalajara" }, region: { es: "Jalisco", en: "Jalisco" }, tags: ["grupos-economicos", "cultura"] },
  { id: "queretaro", categoryId: "pueblo-magico", name: { es: "Querétaro", en: "Queretaro" }, region: { es: "Querétaro", en: "Queretaro" }, tags: ["grupos-economicos", "cultura"] },
  { id: "puebla", categoryId: "cultura", name: { es: "Puebla", en: "Puebla" }, region: { es: "Puebla", en: "Puebla" }, tags: ["grupos-economicos", "cultura"] }
];
