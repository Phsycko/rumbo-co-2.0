"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { Button } from "@/components/landing/ui/Button";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function FinalCtaSection({ onOpenWizard }: { onOpenWizard: () => void }) {
  const { t } = useI18n();
  const wa = useMemo(() => buildWhatsAppUrl(t("final_wa_body")), [t]);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-24"
      aria-labelledby="cierre-heading"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(10,9,8,0.85), rgba(10,9,8,0.92)), url('/images/cta/final.webp')"
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain-dark opacity-25 mix-blend-overlay" />

      <Container className="relative">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl border border-cream/15 bg-cream/[0.06] px-8 py-12 text-center text-cream backdrop-blur-sm sm:px-12 sm:py-14"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-cream/55">{t("final_kicker")}</p>
          <h2 id="cierre-heading" className="mt-5 font-serif text-display-sm text-balance">
            {t("final_title")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">{t("final_subtitle")}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button onClick={onOpenWizard} size="lg">
              <Sparkles className="h-4 w-4" />
              {t("final_cta")}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => window.open(wa, "_blank", "noopener,noreferrer")}
            >
              <MessageCircle className="h-4 w-4 text-copper" />
              {t("final_wa")}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
