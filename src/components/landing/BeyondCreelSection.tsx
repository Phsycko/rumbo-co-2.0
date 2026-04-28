"use client";

import { useCallback, useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { Button } from "@/components/landing/ui/Button";
import { Input, Label, Textarea } from "@/components/landing/ui/Field";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Landmark, MapPin, Waves } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";

export function BeyondCreelSection() {
  const { t } = useI18n();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [destination, setDestination] = useState("");
  const [dates, setDates] = useState("");
  const [people, setPeople] = useState("");
  const [details, setDetails] = useState("");

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const message =
        `${t("beyond_wa_intro")}\n\n` +
        `${t("beyond_wa_name")} ${name || "-"}\n` +
        `${t("beyond_wa_contact")} ${contact || "-"}\n` +
        `${t("beyond_wa_where")} ${destination || "-"}\n` +
        `${t("beyond_wa_dates")} ${dates || "-"}\n` +
        `${t("beyond_wa_people")} ${people || "-"}\n\n` +
        `${t("beyond_wa_notes_block")}\n${details || "-"}\n`;
      window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    },
    [name, contact, destination, dates, people, details, t]
  );

  return (
    <section
      id="mas-que-creel"
      className="relative isolate overflow-hidden bg-ink py-16 sm:py-24"
      aria-labelledby="mas-que-creel-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-grain-dark opacity-25 mix-blend-overlay"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-1/2 z-0 h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-y-1/2 rounded-full bg-copper/20 blur-3xl"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:items-start lg:gap-16 xl:gap-20">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading
              titleId="mas-que-creel-heading"
              eyebrow={t("beyond_eyebrow")}
              tone="dark"
              title={t("beyond_title")}
              subtitle={t("beyond_subtitle")}
            />
            <p className="mt-8 max-w-md text-sm leading-relaxed text-cream/80">{t("beyond_body")}</p>
            <ul className="mt-8 flex flex-wrap gap-3" aria-label={t("beyond_chips_aria")}>
              <li className="inline-flex items-center gap-2 border border-cream/15 px-4 py-3 text-xs uppercase tracking-[0.14em] text-cream/55">
                <MapPin className="h-4 w-4 shrink-0 text-copper" aria-hidden />
                {t("beyond_chip")}
              </li>
              <li className="inline-flex items-center gap-2 border border-cream/15 px-4 py-3 text-xs uppercase tracking-[0.14em] text-cream/55">
                <Waves className="h-4 w-4 shrink-0 text-copper" aria-hidden />
                {t("beyond_chip_playas")}
              </li>
              <li className="inline-flex items-center gap-2 border border-cream/15 px-4 py-3 text-xs uppercase tracking-[0.14em] text-cream/55">
                <Landmark className="h-4 w-4 shrink-0 text-copper" aria-hidden />
                {t("beyond_chip_pueblos_magicos")}
              </li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            className="border border-cream/12 bg-parchment p-6 shadow-[0_24px_80px_rgba(0,0,0,0.25)] sm:p-8"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper/90">{t("beyond_form_kicker")}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/80">{t("beyond_form_intro")}</p>

            <div className="mt-6 space-y-4">
              <div>
                <Label>{t("beyond_label_name")}</Label>
                <Input
                  className="mt-2"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t("beyond_ph_name")}
                />
              </div>
              <div>
                <Label>{t("beyond_label_contact")}</Label>
                <Input
                  className="mt-2"
                  autoComplete="on"
                  inputMode="text"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  placeholder={t("beyond_ph_contact")}
                />
              </div>
              <div>
                <Label>{t("beyond_label_where")}</Label>
                <Input
                  className="mt-2"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder={t("beyond_ph_where")}
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>{t("beyond_label_dates")}</Label>
                  <Input
                    className="mt-2"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                    placeholder={t("beyond_ph_dates")}
                  />
                </div>
                <div>
                  <Label>{t("beyond_label_people")}</Label>
                  <Input
                    className="mt-2"
                    type="number"
                    min={1}
                    inputMode="numeric"
                    value={people}
                    onChange={(e) => setPeople(e.target.value)}
                    placeholder={t("beyond_ph_people")}
                  />
                </div>
              </div>
              <div>
                <Label>{t("beyond_label_notes")}</Label>
                <Textarea
                  className="mt-2 min-h-[140px]"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={t("beyond_ph_notes")}
                />
              </div>
            </div>

            <div className="mt-8">
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {t("beyond_submit")}
              </Button>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
