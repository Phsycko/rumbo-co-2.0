import { faqs, packages as landingPackages, routes as landingRoutes, testimonials as landingTestimonials } from "@/data/landing";

export const faqEntries = faqs.map((f) => ({ question: f.q, answer: f.a }));

export const packageDurations = [
  { label: "4 días · 3 noches", key: "4D/3N" },
  { label: "5 días · 4 noches", key: "5D/4N" },
  { label: "6 días · 5 noches", key: "6D/5N" }
] as const;

export const chepeClasses = [
  {
    label: "Chepe Express Turista",
    badge: "Ideal para primera vez",
    perks: ["Confort práctico", "Experiencia icónica", "Ritmo bien diseñado"]
  },
  {
    label: "Chepe Express Ejecutiva",
    badge: "Más vendido",
    perks: ["Equilibrio premium", "Mejor sensación de viaje", "Curaduría Rumbo Co"]
  },
  {
    label: "Chepe Express Primera",
    badge: "Premium",
    perks: ["Prestige", "Detalles finos", "La versión más especial"]
  }
] as const;

export const featuredRoutes = landingRoutes.map((r) => ({
  title: r.title,
  duration: r.duration,
  description: r.vibe,
  image: r.image
}));

export const testimonials = landingTestimonials.map((t) => ({
  name: t.name,
  city: t.city,
  quote: t.quote
}));

// Derivado para componentes legacy (si los conectas después)
export const packagesByDurationAndClass = landingPackages;

