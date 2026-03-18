"use client";

import { scrollToSection } from "@/lib/scroll";

export function BarrancasSection() {

  return (
    <section id="barrancas" className="relative mx-auto max-w-6xl space-y-6 px-6 py-16">
      <div className="space-y-4 rounded-3xl border border-charcoal/10 bg-white p-8 shadow-elevated-card">
        <p className="text-xs uppercase tracking-[0.5em] text-charcoal/60">Barrancas del Cobre</p>
        <h2 className="font-serif text-3xl text-charcoal">El viaje más espectacular de México merece una narrativa premium.</h2>
        <p className="text-sm text-charcoal/70">
          Barrancas del Cobre es un sistema de cañones más grande que el Gran Cañón. Rumbo Co lo conecta con el Chepe Express, lodges de autor y guías Tarahumara que revelan secretos culturales y miradores deslumbrantes.
        </p>
        <p className="text-sm text-charcoal/70">
          Organizamos hospedaje boutique, traslados privados y experiencias inmersivas en Creel, Bahuichivo, Divisadero y el teleférico. Viajar con Rumbo Co significa vivir la majestuosidad del tren y la Sierra con comodidad, atención humana y curaduría constante.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollToSection("paquetes");
            }}
            className="rounded-full border border-charcoal/20 px-6 py-3 text-xs uppercase tracking-[0.4em] text-charcoal/70 transition hover:border-terracotta hover:text-terracotta"
          >
            Explorar paquetes Barrancas del Cobre
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              scrollToSection("rutas");
              setTimeout(() => {
                window.dispatchEvent(new CustomEvent("highlight-chepe"));
              }, 500);
            }}
            className="rounded-full border border-terracotta bg-terracotta/15 px-6 py-3 text-xs uppercase tracking-[0.4em] text-terracotta transition hover:bg-terracotta hover:text-cream"
          >
            Conoce el Chepe Express
          </button>
        </div>
      </div>
    </section>
  );
}
