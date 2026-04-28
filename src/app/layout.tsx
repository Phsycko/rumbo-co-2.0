import type { Metadata } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";
import { AppProviders } from "@/app/providers";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap"
});

const sans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Rumbo Co · Travel design en Barrancas del Cobre y Chepe Express",
  description:
    "Casa de travel design en la Sierra Tarahumara. Barrancas del Cobre y Chepe Express con curaduría, ritmo y ejecución premium.",
  metadataBase: new URL("https://www.rumbo.co"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className={`${serif.variable} ${sans.variable}`}>
      <body className="relative bg-parchment text-ink font-sans antialiased" suppressHydrationWarning>
        <a
          href="#contenido-principal"
          className="absolute left-[-9999px] top-0 z-[3000] whitespace-nowrap rounded-sm bg-ink px-4 py-2 text-sm text-cream focus:left-4 focus:top-4 focus:outline-none focus:ring-2 focus:ring-copper/50"
        >
          Saltar al contenido
        </a>
        <AppProviders>
          <div className="min-h-screen bg-parchment">{children}</div>
        </AppProviders>
      </body>
    </html>
  );
}
