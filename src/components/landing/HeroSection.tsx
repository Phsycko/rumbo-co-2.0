"use client";

import { useMemo, useState, type Dispatch, type SetStateAction } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { Button } from "@/components/landing/ui/Button";
import { Label, Input, Select } from "@/components/landing/ui/Field";
import { TripDateRangePicker } from "@/components/landing/ui/TripDateRangePicker";
import { emptyTripDateRange, formatTripDate, type TripDateRange } from "@/lib/tripDates";
import { Sparkles, Train, ArrowRight, ChevronDown } from "lucide-react";
import { useChepeEffect } from "@/components/landing/chepe/ChepeEffect";
import { cn } from "@/lib/cn";
import type { SiteLocale } from "@/lib/i18n/context";
import { useI18n } from "@/lib/i18n/context";

export type MiniConfiguratorValue = {
  route: "Chihuahua → Creel → Chihuahua" | "Chihuahua → Creel → Los Mochis" | "Los Mochis → Creel → Los Mochis" | "Los Mochis → Creel → Chihuahua";
  dateRange: TripDateRange;
  people: number;
  experience: "Relax" | "Aventura" | "Cultural" | "Premium" | "Fotografía" | "Familiar";
  chepeClass: "No incluir tren" | "Turista" | "Ejecutiva" | "Primera";
};

function buildNextDateSuggestions(
  dateValue: string,
  locale: SiteLocale,
  t: (_key: string, _vars?: Record<string, string | number>) => string
) {
  if (!dateValue) return [];
  const base = new Date(`${dateValue}T12:00:00`);
  if (Number.isNaN(base.getTime())) return [];
  return [2, 5, 9].map((offset) => {
    const next = new Date(base);
    next.setDate(base.getDate() + offset);
    return {
      value: next.toISOString().slice(0, 10),
      label: new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-MX", { day: "numeric", month: "short" }).format(
        next
      ),
      copy: t("hero_suggested_copy", { n: offset })
    };
  });
}

function AtelierFields({
  value,
  setValue,
  onOpenWizard,
  trigger
}: {
  value: MiniConfiguratorValue;
  setValue: Dispatch<SetStateAction<MiniConfiguratorValue>>;
  onOpenWizard: () => void;
  trigger: ReturnType<typeof useChepeEffect>["trigger"];
}) {
  const { locale, t } = useI18n();
  const neonLabelClass =
    "text-white [text-shadow:0_0_8px_rgba(255,255,255,0.45),0_0_18px_rgba(120,220,255,0.28)] [filter:drop-shadow(0_0_6px_rgba(130,220,255,0.35))]";
  const selectedDateLabel = value.dateRange.departure
    ? formatTripDate(value.dateRange.departure, locale)
    : "";
  const selectedReturnLabel = value.dateRange.return
    ? formatTripDate(value.dateRange.return, locale)
    : "";
  const nextDateSuggestions = buildNextDateSuggestions(value.dateRange.departure, locale, t);

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-3">
        <Label className={neonLabelClass}>{t("hero_label_route")}</Label>
        <Select
          className="mt-2 border-cream/30 bg-ink/45 !text-cream placeholder:text-cream/80 focus:border-copper/60"
          value={value.route}
          onChange={(e) =>
            setValue((v) => ({ ...v, route: e.target.value as MiniConfiguratorValue["route"] }))
          }
        >
          <option className="bg-ink text-cream">Chihuahua → Creel → Chihuahua</option>
          <option className="bg-ink text-cream">Chihuahua → Creel → Los Mochis</option>
          <option className="bg-ink text-cream">Los Mochis → Creel → Los Mochis</option>
          <option className="bg-ink text-cream">Los Mochis → Creel → Chihuahua</option>
        </Select>
      </div>

      <div className="lg:col-span-4">
        <Label className={neonLabelClass}>{t("hero_label_dates")}</Label>
        <TripDateRangePicker
          className="mt-2"
          variant="hero"
          value={value.dateRange}
          onChange={(dateRange) => setValue((v) => ({ ...v, dateRange }))}
        />
      </div>
      <div className="lg:col-span-2">
        <Label className={neonLabelClass}>{t("hero_label_people")}</Label>
        <Input
          className="mt-2 border-cream/30 bg-ink/45 !text-cream"
          type="number"
          min={1}
          value={value.people}
          onChange={(e) => setValue((v) => ({ ...v, people: Number(e.target.value || 1) }))}
        />
      </div>

      <div className="grid grid-cols-2 gap-4 lg:col-span-3">
        <div>
          <Label className={neonLabelClass}>{t("hero_label_experience")}</Label>
          <Select
            className="mt-2 border-cream/30 bg-ink/45 !text-cream"
            value={value.experience}
            onChange={(e) =>
              setValue((v) => ({
                ...v,
                experience: e.target.value as MiniConfiguratorValue["experience"]
              }))
            }
          >
            <option className="bg-ink text-cream">Relax</option>
            <option className="bg-ink text-cream">Aventura</option>
            <option className="bg-ink text-cream">Cultural</option>
            <option className="bg-ink text-cream">Premium</option>
            <option className="bg-ink text-cream">Fotografía</option>
            <option className="bg-ink text-cream">Familiar</option>
          </Select>
        </div>
        <div>
          <Label className={neonLabelClass}>{t("hero_label_chepe")}</Label>
          <Select
            className="mt-2 border-cream/30 bg-ink/45 !text-cream"
            value={value.chepeClass}
            onChange={(e) => {
              const next = e.target.value as MiniConfiguratorValue["chepeClass"];
              setValue((v) => ({ ...v, chepeClass: next }));
              if (next !== "No incluir tren") trigger("hero");
            }}
          >
            <option className="bg-ink text-cream" value="No incluir tren">
              {t("hero_chepe_none")}
            </option>
            <option className="bg-ink text-cream" value="Turista">
              {t("hero_chepe_turista")}
            </option>
            <option className="bg-ink text-cream" value="Ejecutiva">
              {t("hero_chepe_ejecutiva")}
            </option>
            <option className="bg-ink text-cream" value="Primera">
              {t("hero_chepe_primera")}
            </option>
          </Select>
        </div>
      </div>

      {value.dateRange.departure ? (
        <div className="lg:col-span-12">
          <div className="mt-1 border border-copper/45 bg-ink/45 p-4 backdrop-blur-sm">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper/95">{t("hero_map_title")}</p>
            <p className="mt-2 text-sm text-cream/90">
              {selectedReturnLabel
                ? `${t("date_picker_departure")}: ${selectedDateLabel} · ${t("date_picker_return")}: ${selectedReturnLabel}`
                : t("hero_map_sub", { date: selectedDateLabel })}
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {nextDateSuggestions.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  className="border border-cream/20 bg-ink/40 px-3 py-2 text-left transition hover:border-copper/60 hover:bg-ink/60"
                  onClick={() =>
                    setValue((v) => ({
                      ...v,
                      dateRange: { departure: v.dateRange.departure, return: item.value }
                    }))
                  }
                >
                  <p className="text-sm font-semibold text-cream">{item.label}</p>
                  <p className="mt-1 text-xs text-cream/70">{item.copy}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      <div className="lg:col-span-2">
        <Button className="w-full" onClick={onOpenWizard}>
          {t("hero_cta_options")}
          <ArrowRight className="h-4 w-4 opacity-90 transition group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  );
}

export function HeroSection({
  onOpenWizard,
  onScrollToPackages
}: {
  onOpenWizard: () => void;
  onScrollToPackages: () => void;
}) {
  const { t } = useI18n();
  const { trigger } = useChepeEffect();
  const [value, setValue] = useState<MiniConfiguratorValue>({
    route: "Chihuahua → Creel → Chihuahua",
    dateRange: emptyTripDateRange(),
    people: 2,
    experience: "Premium",
    chepeClass: "Ejecutiva"
  });
  const [mobileAtelierOpen, setMobileAtelierOpen] = useState(false);

  const heroImage = "/images/hero/barrancas-hq.jpg";

  const subtitle = useMemo(() => t("hero_subtitle"), [t]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden" aria-labelledby="hero-heading">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-[center_28%]"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_20%,rgba(240,232,220,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink" />
        <div className="pointer-events-none absolute inset-0 bg-grain-dark opacity-25 mix-blend-overlay" />
      </div>

      <Container className="relative flex min-h-[calc(100svh-76px)] flex-col justify-between pb-10 pt-10 sm:pb-14 sm:pt-14 lg:pt-16">
        <div className="max-w-4xl">
          <motion.p
            className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] text-cream/65"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-px w-10 bg-copper/70" aria-hidden />
            <Train className="h-3.5 w-3.5 text-copper" aria-hidden />
            {t("hero_eyebrow")}
          </motion.p>

          <motion.h1
            id="hero-heading"
            className="mt-8 font-serif text-display text-cream text-balance"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}
          >
            {t("hero_title")}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
          >
            <Button onClick={onScrollToPackages} size="lg">
              {t("hero_cta_routes")}
              <ArrowRight className="h-4 w-4 opacity-90 transition group-hover:translate-x-0.5" />
            </Button>
            <Button variant="secondary" onClick={onOpenWizard} size="lg">
              <Sparkles className="h-4 w-4 text-copper" />
              {t("hero_cta_wizard")}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-16 lg:mt-24"
        >
          <div className="hidden border-t border-cream/20 bg-ink/20 px-5 pb-5 pt-8 backdrop-blur-[2px] lg:block">
            <div className="mb-6 flex items-end justify-between gap-6">
              <div>
                <p className="font-serif text-2xl text-cream drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] sm:text-3xl">
                  {t("hero_atelier_title")}
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-cream/85">{t("hero_atelier_sub")}</p>
              </div>
              <p className="hidden text-right text-[10px] font-medium uppercase tracking-[0.28em] text-cream/65 xl:block">
                {t("hero_atelier_brand")}
              </p>
            </div>
            <AtelierFields
              value={value}
              setValue={setValue}
              onOpenWizard={onOpenWizard}
              trigger={trigger}
            />
            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-copper/95">{t("hero_design_line")}</p>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileAtelierOpen((o) => !o)}
              className="flex w-full items-center justify-between border border-cream/15 bg-ink/30 px-5 py-4 text-left backdrop-blur-md transition hover:border-cream/25"
              aria-expanded={mobileAtelierOpen}
            >
              <span className="font-serif text-lg text-cream">{t("hero_atelier_title")}</span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 text-cream/60 transition duration-300",
                  mobileAtelierOpen && "rotate-180"
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-500 ease-out",
                mobileAtelierOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <div className="border border-t-0 border-cream/20 bg-ink/35 px-4 py-6 backdrop-blur-md">
                  <AtelierFields
                    value={value}
                    setValue={setValue}
                    onOpenWizard={onOpenWizard}
                    trigger={trigger}
                  />
                  <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-copper/95">{t("hero_design_line")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
