import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  GraduationCap,
  Heart,
  HeartHandshake,
  Landmark,
  User,
  Users
} from "lucide-react";

export type CustomTripSubcategory = {
  id: string;
  labelKey: string;
};

export type CustomTripGroup = "core" | "professional";

export type CustomTripType = {
  id: string;
  icon: LucideIcon;
  label: { es: string; en: string };
  desc: { es: string; en: string };
  groupValue: string;
  group: CustomTripGroup;
  badgeKey?: string;
  subcategories?: CustomTripSubcategory[];
  /** Superficie de respaldo si no hay imagen */
  surface: string;
  image?: string;
};

export const customTripCoreTypes: CustomTripType[] = [
  {
    id: "grupales",
    icon: Users,
    group: "core",
    label: { es: "Viajes grupales", en: "Group travel" },
    desc: {
      es: "Amigos, familias o colectivos. Semigrupo 5–19 · Grupal desde 20 personas.",
      en: "Friends, families or groups. Semi-group 5–19 · Full group from 20."
    },
    groupValue: "Viajes grupales",
    surface: "linear-gradient(145deg, #4a5f62 0%, #354a4d 100%)",
    image: "/images/beyond/grupales.png"
  },
  {
    id: "bodas",
    icon: Heart,
    group: "core",
    label: { es: "Bodas", en: "Weddings" },
    desc: {
      es: "Hospedaje, ceremonia y experiencias coordinadas para tus invitados.",
      en: "Lodging, ceremony and coordinated experiences for your guests."
    },
    groupValue: "Bodas",
    badgeKey: "custom_badge_celebration",
    surface: "linear-gradient(145deg, #5c4a48 0%, #3d3230 100%)",
    image: "/images/beyond/bodas.png"
  },
  {
    id: "luna-miel",
    icon: HeartHandshake,
    group: "core",
    label: { es: "Lunas de miel", en: "Honeymoons" },
    desc: {
      es: "Ritmo íntimo, hoteles especiales y detalles que elevan la experiencia.",
      en: "Intimate pace, special hotels and elevated details."
    },
    groupValue: "Lunas de miel",
    badgeKey: "custom_badge_celebration",
    surface: "linear-gradient(145deg, #4f5258 0%, #363940 100%)",
    image: "/images/beyond/lunas-de-miel.png"
  },
  {
    id: "individuales",
    icon: User,
    group: "core",
    label: { es: "Individuales", en: "Solo travelers" },
    desc: {
      es: "Viajes personales diseñados desde cero, sin paquetes genéricos.",
      en: "Personal trips designed from scratch—no generic packages."
    },
    groupValue: "Individuales",
    surface: "linear-gradient(145deg, #454a50 0%, #2e3338 100%)",
    image: "/images/beyond/individuales.png"
  }
];

export const customTripProfessionalTypes: CustomTripType[] = [
  {
    id: "universitarios",
    icon: GraduationCap,
    group: "professional",
    label: { es: "Universitarios y congresos", en: "University & congresses" },
    desc: {
      es: "Congresos, competencias, viajes académicos y experiencias universitarias bien organizadas.",
      en: "Congresses, competitions, academic travel and well-organized university experiences."
    },
    groupValue: "Universitarios y congresos",
    badgeKey: "custom_badge_university",
    surface: "linear-gradient(145deg, #3d4a5c 0%, #2a3544 100%)",
    image: "/images/beyond/universitarios.png",
    subcategories: [
      { id: "medicina", labelKey: "custom_sub_univ_medicina" },
      { id: "odontologia", labelKey: "custom_sub_univ_odontologia" },
      { id: "negocios", labelKey: "custom_sub_univ_negocios" },
      { id: "arquitectura", labelKey: "custom_sub_univ_arquitectura" },
      { id: "ingenieria", labelKey: "custom_sub_univ_ingenieria" },
      { id: "derecho", labelKey: "custom_sub_univ_derecho" },
      { id: "intercambios", labelKey: "custom_sub_univ_intercambios" },
      { id: "convenciones", labelKey: "custom_sub_univ_convenciones" }
    ]
  },
  {
    id: "escolares-culturales",
    icon: Landmark,
    group: "professional",
    label: { es: "Escolares y culturales", en: "School & cultural" },
    desc: {
      es: "Salidas educativas, culturales y recreativas con logística segura y acompañamiento profesional.",
      en: "Educational, cultural and recreational trips with safe logistics and professional escorts."
    },
    groupValue: "Escolares y culturales",
    badgeKey: "custom_badge_school",
    surface: "linear-gradient(145deg, #4a5548 0%, #354038 100%)",
    image: "/images/beyond/escolares-culturales.png",
    subcategories: [
      { id: "secundarias", labelKey: "custom_sub_school_secundarias" },
      { id: "preparatorias", labelKey: "custom_sub_school_preparatorias" },
      { id: "culturales", labelKey: "custom_sub_school_culturales" },
      { id: "museos", labelKey: "custom_sub_school_museos" },
      { id: "historia", labelKey: "custom_sub_school_historia" },
      { id: "campamentos", labelKey: "custom_sub_school_campamentos" },
      { id: "educativas", labelKey: "custom_sub_school_educativas" }
    ]
  },
  {
    id: "corporativos",
    icon: Briefcase,
    group: "professional",
    label: { es: "Corporativos e incentivos", en: "Corporate & incentives" },
    desc: {
      es: "Viajes empresariales, convenciones, integración y experiencias premium para equipos.",
      en: "Corporate travel, conventions, integration and premium team experiences."
    },
    groupValue: "Corporativos e incentivos",
    badgeKey: "custom_badge_corporate",
    surface: "linear-gradient(145deg, #4a4e56 0%, #32363e 100%)",
    image: "/images/beyond/corporativos.png",
    subcategories: [
      { id: "incentivos", labelKey: "custom_sub_corp_incentivos" },
      { id: "team-building", labelKey: "custom_sub_corp_team" },
      { id: "convenciones", labelKey: "custom_sub_corp_convenciones" },
      { id: "congresos", labelKey: "custom_sub_corp_congresos" },
      { id: "networking", labelKey: "custom_sub_corp_networking" },
      { id: "ejecutivas", labelKey: "custom_sub_corp_ejecutivas" }
    ]
  }
];

export const customTripTypes: CustomTripType[] = [
  ...customTripCoreTypes,
  ...customTripProfessionalTypes
];

export function getCustomTripById(id: string): CustomTripType | undefined {
  return customTripTypes.find((t) => t.id === id);
}
