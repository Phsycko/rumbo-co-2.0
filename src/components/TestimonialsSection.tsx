"use client";

import { testimonials } from "@/data/experience-data";

export function TestimonialsSection() {
  return (
    <section className="relative mx-auto max-w-6xl space-y-8 px-6 py-16 bg-white/70">
      <div className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-charcoal/50">Testimonios</p>
        <h2 className="font-serif text-3xl text-charcoal">Historias reales con sabor a Barrancas</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.name}
            className="rounded-3xl border border-charcoal/10 bg-cream p-6 shadow-elevated-card"
          >
            <p className="text-sm text-charcoal/70">“{item.quote}”</p>
            <div className="mt-6 space-y-1">
              <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">{item.city}</p>
              <p className="text-lg font-semibold text-charcoal">{item.name}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
