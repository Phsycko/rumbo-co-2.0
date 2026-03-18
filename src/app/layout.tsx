import type { ReactNode } from "react";
import "@/styles/globals.css";
import { Playfair_Display, Inter } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif"
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans"
});

export const metadata = {
  title: "Rumbo Co · Experiencias premium en Barrancas del Cobre y Chepe Express",
  description:
    "Diseñamos viajes a Barrancas del Cobre, Chepe Express y Sierra Tarahumara con servicio premium, personalización y atención exclusiva.",
  metadataBase: new URL("https://www.rumbo.co")
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-cream text-charcoal">
        <div className="min-h-screen bg-gradient-to-b from-cream to-beige">
          {children}
        </div>
      </body>
    </html>
  );
}
