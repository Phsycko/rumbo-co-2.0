export type WizardOrigin = "Chihuahua" | "Los Mochis" | "Otro / por definir";
export type WizardTripType = "Pareja" | "Amigos" | "Familia" | "Solo" | "Grupo";
export type WizardDuration = "4D/3N" | "5D/4N" | "6D/5N" | "Personalizada";
export type WizardChepeClass = "No incluir tren" | "Chepe Express Turista" | "Chepe Express Ejecutiva" | "Chepe Express Primera";

/** Paquete elegido en la grilla de paquetes → abre el wizard con estos valores. */
export type WizardPackagePreset = {
  duration: Exclude<WizardDuration, "Personalizada">;
  chepeClass: "Turista" | "Ejecutiva" | "Primera";
};
export type WizardExperience =
  | "Relax"
  | "Aventura"
  | "Cultural"
  | "Premium"
  | "Fotografía"
  | "Familiar";

export type WizardStop =
  | "Creel"
  | "Divisadero"
  | "Parque Aventura"
  | "Barrancas del Cobre"
  | "El Fuerte"
  | "Bahuichivo"
  | "Cerocahui"
  | "Tour regional tarahumara"
  | "Miradores"
  | "Teleférico";

export type WizardHotelLevel = "Estándar" | "Boutique" | "Premium" | "Mixto";

export type WizardExtra =
  | "Traslados"
  | "Tours"
  | "Desayunos"
  | "Cenas"
  | "Teleférico"
  | "Parque Aventura"
  | "Guía"
  | "Celebración especial";

export type WizardUserData = {
  name: string;
  whatsapp: string;
  email: string;
  tentativeDate: string;
  people: string;
  notes: string;
};

export type WizardState = {
  step: number;
  origin: WizardOrigin | null;
  tripType: WizardTripType | null;
  duration: WizardDuration | null;
  chepeClass: WizardChepeClass | null;
  experience: WizardExperience | null;
  stops: WizardStop[];
  hotelLevel: WizardHotelLevel | null;
  extras: WizardExtra[];
  user: WizardUserData;
};

export const wizardSteps = [
  "Origen",
  "Tipo de viaje",
  "Duración",
  "Clase Chepe",
  "Experiencia",
  "Paradas",
  "Hospedaje",
  "Extras",
  "Datos",
  "Resumen"
] as const;

