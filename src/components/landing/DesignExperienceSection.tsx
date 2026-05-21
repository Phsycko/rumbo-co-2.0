"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/landing/ui/Container";
import { Button } from "@/components/landing/ui/Button";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { Input, Label, Select } from "@/components/landing/ui/Field";
import { TripDateRangePicker } from "@/components/landing/ui/TripDateRangePicker";
import { emptyTripDateRange, formatTripDate } from "@/lib/tripDates";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Sparkles, X } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

type TransportMode = "Autobus" | "Chepe Regional" | "Chepe Express";

const transportCards: Array<{
  mode: TransportMode;
  titleKey: string;
  descKey: string;
  image: string;
}> = [
  {
    mode: "Autobus",
    titleKey: "design_card_bus_t",
    descKey: "design_card_bus_d",
    image: "/images/routes/autobus-ado.png"
  },
  {
    mode: "Chepe Regional",
    titleKey: "design_card_reg_t",
    descKey: "design_card_reg_d",
    image: "/images/routes/chepe-regional.png"
  },
  {
    mode: "Chepe Express",
    titleKey: "design_card_exp_t",
    descKey: "design_card_exp_d",
    image: "/images/routes/chepe-express.png"
  }
];

function transportDetailLexKey(mode: TransportMode): string {
  if (mode === "Chepe Express") return "design_card_exp_schedules";
  if (mode === "Chepe Regional") return "design_card_reg_schedules";
  return "design_modal_bus_info";
}

export function DesignExperienceSection({ onOpenWizard }: { onOpenWizard: () => void }) {
  const { locale, t } = useI18n();
  const [selectedTransport, setSelectedTransport] = useState<TransportMode | null>(null);
  const [dateRange, setDateRange] = useState(emptyTripDateRange());
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [people, setPeople] = useState("");
  const [chepeClass, setChepeClass] = useState("Turista");

  const wa = useMemo(
    () =>
      buildWhatsAppUrl(
        "Hola Rumbo Co, quiero diseñar mi viaje a Barrancas y Chepe con ustedes."
      ),
    []
  );
  const transportWa = useMemo(() => {
    if (!selectedTransport) return "#";
    const message =
      `Hola Rumbo Co, quiero cotizar transporte.\n` +
      `Servicio: ${selectedTransport}\n` +
      `${t("groups_wa_departure")} ${dateRange.departure ? formatTripDate(dateRange.departure, locale) : "-"}\n` +
      `${t("groups_wa_return")} ${dateRange.return ? formatTripDate(dateRange.return, locale) : "-"}\n` +
      `Lugar de salida: ${origin || "-"}\n` +
      `Lugar de destino: ${destination || "-"}\n` +
      `Numero de personas: ${people || "-"}\n` +
      `${selectedTransport === "Chepe Express" ? `Clase Chepe Express: ${chepeClass}\n` : ""}`;
    return buildWhatsAppUrl(message);
  }, [selectedTransport, dateRange, locale, origin, destination, people, chepeClass, t]);

  return (
    <section
      id="experiencia"
      className="relative py-16 sm:py-24"
      aria-labelledby="experiencia-heading"
    >
      <div className="absolute inset-0 -z-10 bg-parchment" />

      <Container>
        <motion.div
          className="mb-5 border border-copper/25 bg-gradient-to-r from-copper/10 via-copper/5 to-transparent px-6 py-4 sm:px-8"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-copper/90">{t("design_banner_kicker")}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/80 sm:text-base">{t("design_banner_body")}</p>
          <div className="mt-6">
            <h3 className="text-center font-serif text-3xl leading-tight text-ink sm:text-4xl">{t("design_transport_title")}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-center text-base text-ink/70">{t("design_transport_sub")}</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {transportCards.map((card) => (
                <article key={card.mode} className="border border-ink/10 bg-parchment/80 p-4 sm:p-5">
                  <div className="relative h-40 overflow-hidden rounded-sm">
                    <Image
                      src={card.image}
                      alt={t(card.titleKey)}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 768px) 33vw, 100vw"
                    />
                  </div>
                  <h4 className="mt-4 font-serif text-3xl leading-tight text-ink">{t(card.titleKey)}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{t(card.descKey)}</p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4 w-full"
                    onClick={() => {
                      setSelectedTransport(card.mode);
                      setDateRange(emptyTripDateRange());
                      setOrigin("");
                      setDestination("");
                      setPeople("");
                      setChepeClass("Turista");
                    }}
                  >
                    {t("design_transport_cta")}
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border border-ink/10 bg-parchment px-8 py-10 sm:px-12 sm:py-12"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
            <SectionHeading
              titleId="experiencia-heading"
              eyebrow={t("design_eyebrow")}
              title={t("design_title")}
              subtitle={t("design_subtitle")}
            />
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button onClick={onOpenWizard} size="lg">
                <Sparkles className="h-4 w-4" />
                {t("design_config")}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => window.open(wa, "_blank", "noopener,noreferrer")}
              >
                {t("design_wa")}
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>

      {selectedTransport ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/70 px-4 py-8 backdrop-blur-sm"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedTransport(null);
          }}
        >
          <div
            className="w-full max-w-2xl border border-ink/10 bg-parchment p-6 sm:p-8"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper/90">{t("design_modal_transport")}</p>
                <h3 className="mt-2 font-serif text-3xl text-ink">{selectedTransport}</h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTransport(null)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition hover:bg-ink/5 hover:text-ink"
                aria-label={t("design_modal_close")}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <details className="mt-5 rounded-lg border border-ink/12 bg-parchment/80 text-ink open:bg-parchment">
              <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="underline decoration-copper/40 decoration-1 underline-offset-2">
                  {t("design_modal_schedule_summary")}
                </span>
              </summary>
              <div className="border-t border-ink/10 px-4 py-3 text-sm leading-relaxed text-ink/80 whitespace-pre-line">
                {t(transportDetailLexKey(selectedTransport))}
              </div>
            </details>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-copper/90">
              {t("design_modal_trip_fields")}
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label>{t("design_lbl_date")}</Label>
                <TripDateRangePicker
                  className="mt-2"
                  value={dateRange}
                  onChange={setDateRange}
                />
              </div>
              <div>
                <Label>{t("design_lbl_people")}</Label>
                <Input
                  className="mt-2"
                  type="number"
                  min={1}
                  placeholder={t("design_ph_people")}
                  value={people}
                  onChange={(e) => setPeople(e.target.value)}
                />
              </div>
              <div>
                <Label>{t("design_lbl_from")}</Label>
                <Input
                  className="mt-2"
                  placeholder={t("design_ph_from")}
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                />
              </div>
              <div>
                <Label>{t("design_lbl_to")}</Label>
                <Input
                  className="mt-2"
                  placeholder={t("design_ph_to")}
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              {selectedTransport === "Chepe Express" ? (
                <div className="sm:col-span-2">
                  <Label>{t("design_lbl_class")}</Label>
                  <Select className="mt-2" value={chepeClass} onChange={(e) => setChepeClass(e.target.value)}>
                    <option>Turista</option>
                    <option>Ejecutiva</option>
                    <option>Primera</option>
                  </Select>
                </div>
              ) : null}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Button type="button" variant="outline" onClick={() => setSelectedTransport(null)}>
                {t("design_cancel")}
              </Button>
              <Button
                type="button"
                onClick={() => window.open(transportWa, "_blank", "noopener,noreferrer")}
              >
                {t("design_send")}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
