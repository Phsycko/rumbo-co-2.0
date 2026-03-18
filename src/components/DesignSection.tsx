"use client";

import { motion } from "framer-motion";
import { useExperience } from "@/contexts/ExperienceContext";

export function DesignSection() {
  const { openModal } = useExperience();
  return (
    <section className="relative mx-auto max-w-6xl space-y-8 px-6 py-16 bg-beige/80">
      <div className="rounded-3xl border border-charcoal/10 bg-white p-8 shadow-elevated-card">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.5em] text-charcoal/50">Diseña tu experiencia</p>
            <h2 className="font-serif text-4xl text-charcoal">No eliges un paquete cualquiera. Diseñas una experiencia hecha para ti.</h2>
            <p className="text-sm text-charcoal/70">
              El viaje se arma minuto a minuto con expertos Rumbo Co. Cada solicitud se convierte en una narrativa personal, con atención 24/7 y contenido visual que ya te transporta.
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Configurador premium · Resumen visual · Animaciones temáticas</p>
          </div>
          <div className="relative rounded-3xl border border-charcoal/10 bg-sand/70 p-6 shadow-glow-soft">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <div className="h-48 rounded-2xl bg-[radial-gradient(circle_at_top,#c46a3a,#6b4f3a)]" />
              <p className="text-sm text-charcoal/70">
                Abre el asistente premium y observa cómo la historia de tu viaje toma forma con rutas, hospedaje selecto y la magia del Chepe.
              </p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openModal(undefined, e.currentTarget);
                }}
                className="w-full rounded-2xl bg-terracotta px-4 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-cream transition hover:bg-dark-coffee"
              >
                Crear mi itinerario
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
