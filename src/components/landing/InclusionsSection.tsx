"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { Hotel, TrainFront, Compass, Car, Headset } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

const items = [
  { icon: Hotel, idx: 0 as const },
  { icon: TrainFront, idx: 1 as const },
  { icon: Compass, idx: 2 as const },
  { icon: Car, idx: 3 as const },
  { icon: Headset, idx: 4 as const }
] as const;

export function InclusionsSection() {
  const { t } = useI18n();

  return (
    <section
      id="inclusiones"
      className="border-y border-ink/8 bg-fog/40 py-16 sm:py-24"
      aria-labelledby="inclusiones-heading"
    >
      <Container>
        <SectionHeading
          titleId="inclusiones-heading"
          eyebrow={t("inclusions_eyebrow")}
          title={t("inclusions_title")}
          subtitle={t("inclusions_subtitle")}
        />

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:gap-10">
          {items.map((it, idx) => {
            const Icon = it.icon;
            const title = t(`inc_${it.idx}_t`);
            return (
              <motion.li
                key={it.idx}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
                className="flex gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-ink/10 bg-parchment">
                  <Icon className="h-4 w-4 text-copper-dim" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-ink sm:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{t(`inc_${it.idx}_d`)}</p>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
