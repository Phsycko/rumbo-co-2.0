"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { Tabs } from "@/components/landing/ui/Tabs";
import { Badge } from "@/components/landing/ui/Badge";
import { Button } from "@/components/landing/ui/Button";
import { packages, type PackageBadge, type PackageCard } from "@/data/landing";
import { Sparkles, Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n/context";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { WizardPackagePreset } from "@/components/landing/wizard/wizardTypes";

type DurationKey = "4D/3N" | "5D/4N" | "6D/5N";

const durationTabs: Array<{ value: DurationKey; label: string }> = [
  { value: "4D/3N", label: "4D / 3N" },
  { value: "5D/4N", label: "5D / 4N" },
  { value: "6D/5N", label: "6D / 5N" }
];

const packageHeroByClass: Record<PackageCard["chepeClass"], string> = {
  Turista: "/images/routes/chihuahua-cuadro-1.png",
  Ejecutiva: "/images/routes/creel-cuadro-2.png",
  Primera: "/images/routes/barrancas-cuadro-4.png"
};

function badgeTone(b: PackageCard["badge"]) {
  if (b === "Premium") return "copper";
  if (b === "Más vendido") return "charcoal";
  return "copper";
}

function packageBadgeLabel(badge: PackageBadge, t: (_key: string) => string) {
  if (badge === "Más vendido") return t("packages_badge_mas_vendido");
  if (badge === "Premium") return t("packages_badge_premium");
  return t("packages_badge_ideal");
}

export function PackagesSection({
  onOpenWizard,
  onConfigurePackage
}: {
  onOpenWizard: () => void;
  onConfigurePackage: (_preset: WizardPackagePreset) => void;
}) {
  const { t } = useI18n();
  const [duration, setDuration] = useState<DurationKey>("6D/5N");
  const filtered = useMemo(() => packages.filter((p) => p.durationKey === duration), [duration]);

  const columns = useMemo(() => {
    const order = ["Turista", "Ejecutiva", "Primera"] as const;
    return order.map((c) => filtered.find((p) => p.chepeClass === c)).filter(Boolean) as PackageCard[];
  }, [filtered]);

  return (
    <section
      id="paquetes"
      className="relative bg-ink py-16 text-cream sm:py-24"
      aria-labelledby="paquetes-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain-dark opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_0%,rgba(184,115,74,0.1),transparent_50%)]" />

      <Container className="relative">
        <div className="flex flex-col gap-8 border border-cream/10 bg-gradient-to-r from-cream/[0.05] via-transparent to-cream/[0.03] p-5 sm:p-7 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            titleId="paquetes-heading"
            tone="dark"
            eyebrow={t("packages_eyebrow")}
            title={t("packages_title")}
            subtitle={`${t("packages_sub_prefix")} ${duration}. ${t("packages_sub_suffix")}`}
            className="max-w-xl"
          />
          <div className="flex flex-col items-stretch gap-3 sm:items-end sm:justify-end">
            <Tabs
              value={duration}
              options={durationTabs}
              onChange={(v) => setDuration(v)}
              theme="dark"
              className="rounded-full border-cream/20 bg-cream/[0.04] p-1"
            />
            <Button variant="secondary" onClick={onOpenWizard} className="w-full sm:w-auto">
              <Sparkles className="h-4 w-4" />
              {t("packages_cta_top")}
            </Button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {columns.map((p, idx) => {
            const premium = p.chepeClass === "Primera";
            const popular = p.chepeClass === "Ejecutiva";
            const imageSrc = packageHeroByClass[p.chepeClass];

            return (
              <motion.article
                key={p.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: idx * 0.06 }}
                className={cn(
                  "group relative flex h-auto flex-col overflow-visible border border-cream/15 bg-cream shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_62px_rgba(0,0,0,0.45)]",
                  premium && "ring-1 ring-copper/30",
                  popular && "ring-1 ring-cream/20"
                )}
              >
                <div className="relative h-[320px]">
                  <Image
                    src={imageSrc}
                    alt={t("packages_img_alt")}
                    fill
                    className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-ink/15 via-ink/45 to-ink/80" />
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <Badge tone={badgeTone(p.badge)} className="border-cream/35 bg-ink/55 text-cream backdrop-blur-sm">
                        {packageBadgeLabel(p.badge, t)}
                      </Badge>
                      {popular ? (
                        <span className="inline-flex items-center rounded-full border border-cream/35 bg-ink/45 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-cream">
                          {t("packages_recommended")}
                        </span>
                      ) : null}
                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-cream/80">{p.durationKey}</span>
                    </div>
                    <div className="max-w-[34ch] space-y-3">
                      <p className="font-serif text-[34px] leading-[1.05] text-cream">{p.name}</p>
                      <p className="text-[15px] leading-relaxed text-cream/92">{p.highlight}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-cream p-7 pb-8">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55">{t("packages_included")}</p>
                  <ul className="mt-5 space-y-3">
                    {p.includes.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-sm leading-relaxed text-charcoal/80">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" strokeWidth={2} />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                    <Button
                      type="button"
                      variant="primary"
                      size="md"
                      className="w-full sm:flex-1"
                      onClick={() =>
                        onConfigurePackage({
                          duration: p.durationKey,
                          chepeClass: p.chepeClass
                        })
                      }
                    >
                      <Sparkles className="h-4 w-4" />
                      {t("packages_card_configure")}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      size="md"
                      className="w-full sm:flex-1"
                      onClick={() =>
                        window.open(
                          buildWhatsAppUrl(
                            t("packages_wa_package_intro", {
                              duration: p.durationKey,
                              clase: p.chepeClass
                            })
                          ),
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <MessageCircle className="h-4 w-4" />
                      {t("packages_card_quote_wa")}
                    </Button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <div className="flex w-full max-w-3xl flex-col items-center gap-4 text-center">
            <Button variant="secondary" onClick={onOpenWizard} className="px-8 py-3 text-xs tracking-[0.14em] uppercase">
              <Sparkles className="h-4 w-4" />
              {t("packages_cta")}
            </Button>
            <div className="w-full border border-cream/15 bg-gradient-to-r from-cream/[0.04] via-cream/[0.08] to-cream/[0.04] px-5 py-4 sm:px-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper/85">{t("packages_note_title")}</p>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-cream/80">{t("packages_note_body")}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
