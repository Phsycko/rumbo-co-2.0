"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { useI18n } from "@/lib/i18n/context";

export function BarrancasEditorialSection() {
  const { t } = useI18n();

  return (
    <section
      id="barrancas-del-cobre"
      className="relative py-16 sm:py-24"
      aria-labelledby="barrancas-heading"
    >
      <div className="absolute inset-0 -z-10 bg-parchment" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-[center_40%] opacity-[0.14]"
        style={{ backgroundImage: "url('/images/editorial/barrancas.webp')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-parchment via-parchment/97 to-parchment" />

      <Container>
        <SectionHeading
          titleId="barrancas-heading"
          eyebrow={t("editorial_eyebrow")}
          title={t("editorial_title")}
          subtitle={t("editorial_subtitle")}
          className="max-w-2xl"
        />

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-ink/70 sm:text-lg"
        >
          <p>{t("edit_p1")}</p>
          <p>{t("edit_p2")}</p>
        </motion.div>
      </Container>
    </section>
  );
}
