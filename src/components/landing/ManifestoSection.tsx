"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { useI18n } from "@/lib/i18n/context";

export function ManifestoSection() {
  const { t } = useI18n();
  return (
    <section
      id="manifiesto"
      className="border-y border-ink/8 bg-parchment py-14 sm:py-16"
      aria-labelledby="manifiesto-heading"
    >
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.26em] text-copper-dim">{t("manifesto_kicker")}</p>
          <h2
            id="manifiesto-heading"
            className="mt-4 font-serif text-3xl leading-[1.2] text-ink text-balance sm:text-4xl"
          >
            {t("manifesto_title")}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70 sm:text-lg">{t("manifesto_body")}</p>
        </motion.div>
      </Container>
    </section>
  );
}
