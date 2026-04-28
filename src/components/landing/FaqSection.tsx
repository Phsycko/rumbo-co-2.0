"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { faqs } from "@/data/landing";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n/context";
import { FAQ_LEX } from "@/lib/i18n/lexicon";

export function FaqSection() {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-parchment py-16 sm:py-24" aria-labelledby="faq-heading">
      <Container>
        <SectionHeading
          titleId="faq-heading"
          eyebrow={t("faq_eyebrow")}
          title={t("faq_title")}
          subtitle={t("faq_subtitle")}
        />

        <div className="mt-10 border-t border-ink/10">
          {faqs.map((f, idx) => {
            const lex = FAQ_LEX[idx];
            const q = lex ? (locale === "en" ? lex.q.en : lex.q.es) : f.q;
            const a = lex ? (locale === "en" ? lex.a.en : lex.a.es) : f.a;
            const active = open === idx;
            return (
              <div key={f.q} className="border-b border-ink/10">
                <h3 className="m-0">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 py-5 text-left text-ink transition hover:bg-ink/[0.02] sm:py-6"
                    onClick={() => setOpen((cur) => (cur === idx ? null : idx))}
                    aria-expanded={active}
                  >
                    <span className="font-serif text-base leading-snug sm:text-lg">{q}</span>
                    <ChevronDown
                      className={cn(
                        "mt-0.5 h-5 w-5 shrink-0 text-copper-dim transition duration-300",
                        active && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {active ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="max-w-2xl pb-5 text-sm leading-relaxed text-ink/70 sm:pb-6 sm:text-base">{a}</div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
