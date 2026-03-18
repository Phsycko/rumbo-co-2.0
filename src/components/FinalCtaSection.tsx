"use client";

import { motion } from "framer-motion";
import { openWhatsApp } from "@/lib/whatsapp";
import { useExperience } from "@/contexts/ExperienceContext";

export function FinalCtaSection() {
  const { openModal } = useExperience();
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-charcoal/20 bg-cream p-12 shadow-glow-soft">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-center text-charcoal"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">Cierre emocional</p>
          <h2 className="font-serif text-3xl text-charcoal">Diseña tu viaje ahora y recibe tu propuesta personalizada.</h2>
          <div className="flex flex-wrap justify-center gap-4">
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
                openWhatsApp("Hola, quiero diseñar una experiencia con Rumbo Co para Barrancas del Cobre.");
              }}
              className="rounded-full border border-charcoal/30 px-6 py-3 text-xs uppercase tracking-[0.4em] text-charcoal transition hover:border-terracotta"
            >
              WhatsApp
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
