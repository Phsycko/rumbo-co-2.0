"use client";

import { useState } from "react";
import { faqEntries } from "@/data/experience-data";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="relative mx-auto max-w-6xl space-y-6 px-6 py-16">
      <div className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-charcoal/50">Preguntas frecuentes</p>
        <h2 className="font-serif text-3xl text-charcoal">Aclaramos todo antes de que pidas cotización.</h2>
      </div>
      <div className="space-y-3">
        {faqEntries.map((entry, index) => {
          const isOpen = index === openIndex;
          return (
            <div
              key={entry.question}
              className="rounded-3xl border border-charcoal/10 bg-white/80 p-5 transition shadow-elevated-card"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.4em] text-charcoal"
              >
                {entry.question}
                <span className="text-xs text-charcoal/60">{isOpen ? "Cerrar" : "Abrir"}</span>
              </button>
              {isOpen && (
                <p className="mt-3 text-sm text-charcoal/70">{entry.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
