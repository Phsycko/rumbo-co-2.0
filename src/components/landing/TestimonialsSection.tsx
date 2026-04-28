"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { testimonials } from "@/data/landing";
import { Star } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { TESTIMONIAL_LEX } from "@/lib/i18n/lexicon";

export function TestimonialsSection() {
  const { locale, t } = useI18n();

  return (
    <section id="testimonios" className="bg-parchment py-16 sm:py-24" aria-labelledby="testimonios-heading">
      <Container>
        <SectionHeading
          titleId="testimonios-heading"
          eyebrow={t("testimonials_eyebrow")}
          title={t("testimonials_title")}
          subtitle={t("testimonials_subtitle")}
        />

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((row, idx) => {
            const lex = TESTIMONIAL_LEX[row.id];
            const quote = lex ? (locale === "en" ? lex.en : lex.es) : row.quote;
            return (
              <motion.li
                key={row.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: idx * 0.05 }}
                className="flex flex-col border border-ink/10 bg-parchment p-6"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-serif text-lg text-ink">{row.name}</p>
                    <p className="mt-0.5 text-xs text-ink/55">{row.city}</p>
                  </div>
                  {row.rating ? (
                    <div className="flex gap-0.5 text-copper">
                      {Array.from({ length: row.rating }).map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-current" />
                      ))}
                    </div>
                  ) : null}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">“{quote}”</p>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
