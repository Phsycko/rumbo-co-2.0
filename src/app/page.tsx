import type { Metadata } from "next";
import { LandingHome } from "@/components/landing/LandingHome";

/**
 * Homepage "/" — Rumbo Co.
 * Contenido: LandingHome (navbar, hero, mensaje Barrancas/Chepe/Creel/Chihuahua/Los Mochis,
 * CTA paquetes, tours, rutas Chepe, confianza, paquetes, diseño a medida, FAQ, grupos, footer, wizard).
 * Rutas internas (/chepe-express, /blog, etc.) siguen en sus propios page.tsx.
 */
export const metadata: Metadata = {
  description:
    "Viajes curados a Barrancas del Cobre, Chepe Express, Creel, Chihuahua y Los Mochis. Travel design con ritmo, hospedaje y logística impecable.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Rumbo Co",
    title: "Rumbo Co · Barrancas del Cobre y Chepe Express",
    description:
      "Diseñamos tu viaje a la Sierra Tarahumara: Barrancas del Cobre, Chepe Express, paquetes desde Chihuahua o Los Mochis."
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumbo Co · Barrancas del Cobre y Chepe Express",
    description:
      "Travel design en Barrancas del Cobre, Chepe Express, Creel, Chihuahua y Los Mochis."
  }
};

export default function HomePage() {
  return <LandingHome />;
}
