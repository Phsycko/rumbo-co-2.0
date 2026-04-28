"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { useI18n } from "@/lib/i18n/context";

const reasons = [0, 1, 2] as const;
const stats = [
  { labelKey: "why_s0" as const, value: "4" },
  { labelKey: "why_s1" as const, value: "3" }
] as const;

export function WhyRumboSection() {
  const { t } = useI18n();

  return (
    <section id="por-que" className="relative py-16 sm:py-24" aria-labelledby="por-que-heading">
      <div className="absolute inset-0 -z-10 bg-parchment" />

      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              titleId="por-que-heading"
              eyebrow={t("why_eyebrow")}
              title={t("why_title")}
              subtitle={t("why_subtitle")}
            />

            <div className="mt-10 flex gap-12 border-t border-ink/10 pt-8">
              {stats.map((s, idx) => (
                <motion.div
                  key={s.labelKey}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                >
                  <p className="font-serif text-4xl text-ink">{s.value}</p>
                  <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/55">{t(s.labelKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <ul className="space-y-0 divide-y divide-ink/10 border-t border-ink/10">
            {reasons.map((ri, idx) => (
              <motion.li
                key={ri}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                className="py-6"
              >
                <h3 className="font-serif text-lg text-ink sm:text-xl">{t(`why_r${ri}_t`)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 sm:text-base">{t(`why_r${ri}_d`)}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
