"use client";

import { useState } from "react";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { Button } from "@/components/landing/ui/Button";
import { CustomTripCard } from "@/components/landing/CustomTripCard";
import { CustomTripQuoteModal } from "@/components/landing/CustomTripQuoteModal";
import {
  customTripCoreTypes,
  customTripProfessionalTypes,
  type CustomTripType
} from "@/data/customTrips";
import { useI18n } from "@/lib/i18n/context";
import { ArrowRight } from "lucide-react";

export function CustomTripsSection({ onScrollToGroups }: { onScrollToGroups: () => void }) {
  const { t } = useI18n();
  const [pendingTrip, setPendingTrip] = useState<CustomTripType | null>(null);

  const steps = [
    t("custom_step_1"),
    t("custom_step_2"),
    t("custom_step_3"),
    t("custom_step_4")
  ];

  return (
    <section
      id="viajes-a-medida"
      className="border-t border-ink/8 bg-cream py-14 sm:py-20 lg:py-24"
      aria-labelledby="viajes-a-medida-heading"
    >
      <Container>
        <div className="max-w-3xl lg:max-w-none">
          <SectionHeading
            titleId="viajes-a-medida-heading"
            eyebrow={t("custom_eyebrow")}
            title={t("custom_title")}
            subtitle={t("custom_subtitle")}
            className="max-w-none"
          />
        </div>

        <div className="mt-12 lg:grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 lg:items-start">
          <aside className="mb-10 lg:mb-0 lg:sticky lg:top-28">
            <div className="border border-ink/10 bg-parchment p-5 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-copper-dim">
                {t("custom_steps_title")}
              </p>
              <ol className="mt-4 list-none space-y-3 p-0">
                {steps.map((step, i) => (
                  <li key={step} className="flex gap-3 text-sm leading-relaxed text-ink/72">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-copper/25 bg-cream text-[10px] font-semibold text-copper-dim">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-4 border border-ink/10 bg-parchment/80 px-5 py-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/45">
                {t("custom_scale_legend")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-ink/68">
                <li>{t("custom_scale_legend_semigrupo")}</li>
                <li>{t("custom_scale_legend_grupal")}</li>
              </ul>
            </div>
          </aside>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/45">
              {t("custom_group_core")}
            </p>
            <ul className="mt-4 list-none grid gap-4 p-0 sm:grid-cols-2">
              {customTripCoreTypes.map((trip, idx) => (
                <li key={trip.id} className={trip.id === "grupales" ? "sm:col-span-2" : undefined}>
                  <CustomTripCard
                    trip={trip}
                    index={idx}
                    featured={trip.id === "grupales"}
                    onSelect={() => setPendingTrip(trip)}
                  />
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-ink/8 pt-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-copper-dim">
                {t("custom_group_professional")}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/65">
                {t("custom_group_professional_sub")}
              </p>

              <ul className="mt-6 list-none flex gap-4 overflow-x-auto p-0 pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-1 lg:gap-5 lg:overflow-visible lg:pb-0 xl:grid-cols-1 [&::-webkit-scrollbar]:hidden">
                {customTripProfessionalTypes.map((trip, idx) => (
                  <li
                    key={trip.id}
                    className="w-[min(88vw,380px)] shrink-0 snap-center lg:w-full lg:shrink"
                  >
                    <CustomTripCard
                      trip={trip}
                      index={customTripCoreTypes.length + idx}
                      featured
                      onSelect={() => setPendingTrip(trip)}
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-col gap-4 border border-ink/10 bg-parchment p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <p className="max-w-md text-sm leading-relaxed text-ink/65">{t("custom_note")}</p>
              <Button type="button" size="lg" className="w-full shrink-0 sm:w-auto" onClick={onScrollToGroups}>
                {t("custom_cta")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {pendingTrip ? (
        <CustomTripQuoteModal
          trip={pendingTrip}
          onClose={() => setPendingTrip(null)}
          onSent={() => setPendingTrip(null)}
        />
      ) : null}
    </section>
  );
}
