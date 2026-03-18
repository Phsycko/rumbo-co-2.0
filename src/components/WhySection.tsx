"use client";

import { useExperience } from "@/contexts/ExperienceContext";
import { openWhatsApp } from "@/lib/whatsapp";
import { scrollToSection } from "@/lib/scroll";

export function WhySection() {
  const { openModal } = useExperience();
  return (
    <section className="relative mx-auto max-w-6xl space-y-8 px-6 py-16 bg-white/70">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-charcoal/50">Por qué Rumbo Co</p>
          <h2 className="font-serif text-3xl text-charcoal">Curadores del Chepe y arquitectos de viajes por Barrancas del Cobre.</h2>
          <p className="text-sm text-charcoal/70">
            No somos una agencia genérica. Somos un atelier de viajes para quienes buscan emoción elegante, atención personalizada y hospedaje con alma.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "15+", label: "años en el destino" },
              { value: "250+", label: "viajes diseñados" },
              { value: "4.9/5", label: "satisfacción promedio" },
              { value: "24/7", label: "atención personalizada" }
            ].map((item) => (
              <div key={item.value} className="rounded-2xl border border-charcoal/20 bg-sand/70 p-4 text-center">
                <p className="text-2xl font-semibold text-charcoal">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">{item.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openModal(undefined, e.currentTarget);
              }}
              className="rounded-full bg-terracotta px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-cream transition hover:bg-dark-coffee"
            >
              Diseñar viaje
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openWhatsApp("Hola Rumbo Co, quiero más información sobre sus servicios premium.");
              }}
              className="rounded-full border border-charcoal/30 px-6 py-3 text-xs uppercase tracking-[0.4em] text-charcoal transition hover:border-terracotta"
            >
              Hablar por WhatsApp
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection("paquetes");
              }}
              className="rounded-full border border-charcoal/30 px-6 py-3 text-xs uppercase tracking-[0.4em] text-charcoal transition hover:border-terracotta"
            >
              Ver paquetes
            </button>
          </div>
        </div>
        <div className="rounded-3xl border border-charcoal/20 bg-beige/70 p-6 text-sm text-charcoal/70">
          <h3 className="font-serif text-2xl text-charcoal">Expertise en cada detalle</h3>
          <p className="mt-4">
            Nuestra carta de hoteles boutique, guías locales y experiencias culturales se actualiza cada temporada. Además, coordinamos logística de tren, hoteles, tours y traslados para grupos y viajeros individuales.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-soft-gold">Curaduría · Confianza · Hospitalidad premium</p>
        </div>
      </div>
    </section>
  );
}
