"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { useI18n } from "@/lib/i18n/context";

const valueKeys = ["brand_v0", "brand_v1", "brand_v2", "brand_v3"] as const;
const commitmentKeys = ["brand_c0", "brand_c1", "brand_c2", "brand_c3"] as const;

export function BrandPrinciplesSection() {
  const { t } = useI18n();
  return (
    <section id="principios" className="bg-parchment py-16 sm:py-20" aria-labelledby="principios-heading">
      <Container>
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 lg:grid-cols-3"
        >
          <article className="border border-ink/10 bg-cream/40 p-6 sm:p-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-copper-dim">{t("brand_kicker")}</p>
            <h2 id="principios-heading" className="mt-3 font-serif text-2xl text-ink sm:text-[30px]">
              {t("brand_mission_title")}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75 sm:text-base">{t("brand_mission_body")}</p>
          </article>

          <article className="border border-ink/10 bg-cream/40 p-6 sm:p-7">
            <h3 className="font-serif text-2xl text-ink sm:text-[30px]">{t("brand_values_title")}</h3>
            <ul className="mt-4 space-y-3">
              {valueKeys.map((key) => (
                <li key={key} className="flex items-start gap-2 text-sm leading-relaxed text-ink/80 sm:text-base">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="border border-ink/10 bg-cream/40 p-6 sm:p-7">
            <h3 className="font-serif text-2xl text-ink sm:text-[30px]">{t("brand_commit_title")}</h3>
            <ul className="mt-4 space-y-3">
              {commitmentKeys.map((key) => (
                <li key={key} className="flex items-start gap-2 text-sm leading-relaxed text-ink/80 sm:text-base">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" aria-hidden />
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </article>
        </motion.div>
      </Container>
    </section>
  );
}
