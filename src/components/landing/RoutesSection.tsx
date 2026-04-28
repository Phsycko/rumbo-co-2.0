"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { routes } from "@/data/landing";
import { Button } from "@/components/landing/ui/Button";
import { Badge } from "@/components/landing/ui/Badge";
import { ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { routeField } from "@/lib/i18n/lexicon";

export function RoutesSection({ onOpenWizard }: { onOpenWizard: () => void }) {
  const { locale, t } = useI18n();
  return (
    <section
      id="rutas"
      className="relative py-16 sm:py-24"
      aria-labelledby="rutas-heading"
    >
      <div className="absolute inset-0 -z-10 bg-parchment" />

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            titleId="rutas-heading"
            eyebrow={t("routes_eyebrow")}
            title={t("routes_title")}
            subtitle={t("routes_subtitle")}
          />
          <div className="hidden shrink-0 lg:block">
            <Button variant="outline" onClick={onOpenWizard}>
              {t("routes_cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 xl:grid-cols-4">
          {routes.map((r, idx) => (
            <motion.article
              key={r.id}
              className="group relative min-h-[300px] overflow-hidden bg-parchment sm:min-h-[320px]"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: idx * 0.04 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-[1s] ease-out group-hover:scale-[1.04]"
                style={{ backgroundImage: `url('${r.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20 opacity-[0.92]" />

              <div className="relative flex h-full min-h-[300px] flex-col justify-between p-6 sm:min-h-[320px] sm:p-7">
                <div>
                  <Badge tone="outline" className="border-cream/25 text-cream/90">
                    {routeField(locale, r.id, "duration", r.duration)}
                  </Badge>
                  <h3 className="mt-5 font-serif text-xl leading-snug text-cream sm:text-2xl text-balance">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/75">
                    {routeField(locale, r.id, "vibe", r.vibe)}
                  </p>
                </div>
                <div className="pt-6">
                  <button
                    type="button"
                    onClick={onOpenWizard}
                    className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-cream/85 transition hover:text-cream"
                  >
                    {t("routes_card_cta")}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 lg:hidden">
          <Button variant="outline" className="w-full" onClick={onOpenWizard}>
            {t("routes_cta")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
