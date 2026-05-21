"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { Card } from "@/components/landing/ui/Card";
import { Button } from "@/components/landing/ui/Button";
import { Label, Input, Select, Textarea } from "@/components/landing/ui/Field";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { TripDateRangePicker } from "@/components/landing/ui/TripDateRangePicker";
import { emptyTripDateRange, formatTripDate, type TripDateRange } from "@/lib/tripDates";
import { CONTACT } from "@/lib/contact";
import { MessageCircle, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import {
  GROUP_VALUE_GRUPAL,
  GROUP_VALUE_SEMIGRUPO,
  resolveGroupScale
} from "@/lib/customTripBrief";

type GroupForm = {
  name: string;
  whatsapp: string;
  email: string;
  people: string;
  city: string;
  dateRange: TripDateRange;
  groupType: string;
  notes: string;
};

const perfiles = [
  { titleKey: "groups_gp0_t" as const, descKey: "groups_gp0_d" as const },
  { titleKey: "groups_gp1_t" as const, descKey: "groups_gp1_d" as const },
  { titleKey: "groups_gp2_t" as const, descKey: "groups_gp2_d" as const }
] as const;

export function GroupsSection() {
  const { locale, t } = useI18n();
  const [form, setForm] = useState<GroupForm>({
    name: "",
    whatsapp: "",
    email: "",
    people: "",
    city: "",
    dateRange: emptyTripDateRange(),
    groupType: "Viajes grupales",
    notes: ""
  });

  useEffect(() => {
    const preset = window.sessionStorage.getItem("rumbo-group-type");
    const presetPeople = window.sessionStorage.getItem("rumbo-group-people");
    const presetBrief = window.sessionStorage.getItem("rumbo-group-brief-notes");
    if (!preset && !presetPeople && !presetBrief) return;
    setForm((f) => ({
      ...f,
      ...(preset ? { groupType: preset } : {}),
      ...(presetPeople ? { people: presetPeople } : {}),
      ...(presetBrief
        ? { notes: f.notes.trim() ? `${presetBrief}\n\n${f.notes}` : presetBrief }
        : {})
    }));
    if (preset) window.sessionStorage.removeItem("rumbo-group-type");
    if (presetPeople) window.sessionStorage.removeItem("rumbo-group-people");
    if (presetBrief) window.sessionStorage.removeItem("rumbo-group-brief-notes");
  }, []);

  const peopleCount = Number.parseInt(form.people, 10) || 0;
  const groupScale = resolveGroupScale(peopleCount);
  const groupScaleHintKey =
    groupScale === "semigrupo"
      ? "custom_scale_hint_semigrupo"
      : groupScale === "grupal"
        ? "custom_scale_hint_grupal"
        : peopleCount > 0 && peopleCount < 5
          ? "custom_scale_hint_below_min"
          : null;

  useEffect(() => {
    if (!groupScale) return;
    const nextType = groupScale === "grupal" ? GROUP_VALUE_GRUPAL : GROUP_VALUE_SEMIGRUPO;
    setForm((f) => (f.groupType === nextType ? f : { ...f, groupType: nextType }));
  }, [groupScale]);

  const { whatsappHref, mailtoHref } = useMemo(() => {
    const body =
      `${t("groups_wa_intro")}\n` +
      `${t("groups_wa_name")} ${form.name || "-"}\n` +
      `${t("groups_wa_whatsapp")} ${form.whatsapp || "-"}\n` +
      `${t("groups_wa_email")} ${form.email || "-"}\n` +
      `${t("groups_wa_people")} ${form.people || "-"}\n` +
      `${t("groups_wa_city")} ${form.city || "-"}\n` +
      `${t("groups_wa_departure")} ${form.dateRange.departure ? formatTripDate(form.dateRange.departure, locale) : "-"}\n` +
      `${t("groups_wa_return")} ${form.dateRange.return ? formatTripDate(form.dateRange.return, locale) : "-"}\n` +
      `${t("groups_wa_type")} ${form.groupType || "-"}\n` +
      `${t("groups_wa_notes")} ${form.notes || "-"}`;
    return {
      whatsappHref: buildWhatsAppUrl(body),
      mailtoHref: `mailto:${CONTACT.email}?subject=${encodeURIComponent(t("groups_mail_subject"))}&body=${encodeURIComponent(body)}`
    };
  }, [form, locale, t]);

  return (
    <section id="grupos" className="border-t border-ink/8 bg-parchment pt-8 pb-12 sm:pt-10 sm:pb-16" aria-labelledby="grupos-heading">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <div>
            <SectionHeading
              titleId="grupos-heading"
              eyebrow={t("groups_eyebrow")}
              title={t("groups_title")}
              subtitle={t("groups_subtitle")}
            />

            <ul className="mt-8 space-y-6">
              {perfiles.map((p) => (
                <li key={p.titleKey} className="border-l-2 border-copper/30 pl-4">
                  <p className="font-serif text-lg text-ink">{t(p.titleKey)}</p>
                  <p className="mt-1 text-sm text-ink/70">{t(p.descKey)}</p>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Card className="border-ink/10 bg-parchment p-7 sm:p-8">
              <h3 className="font-serif text-xl text-ink">{t("groups_brief_title")}</h3>
              <p className="mt-2 text-sm text-ink/70">{t("groups_brief_sub")}</p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <Label>{t("groups_lbl_name")}</Label>
                  <Input className="mt-2" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
                </div>
                <div>
                  <Label>{t("groups_lbl_whatsapp")}</Label>
                  <Input className="mt-2" value={form.whatsapp} onChange={(e) => setForm((f) => ({ ...f, whatsapp: e.target.value }))} />
                </div>
                <div>
                  <Label>{t("groups_mail")}</Label>
                  <Input className="mt-2" type="email" value={form.email} onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))} />
                </div>
                <div>
                  <Label>{t("groups_lbl_people")}</Label>
                  <Input
                    className="mt-2"
                    type="number"
                    min={5}
                    value={form.people}
                    onChange={(e) => setForm((f) => ({ ...f, people: e.target.value }))}
                  />
                  {groupScaleHintKey ? (
                    <p className="mt-2 text-xs leading-relaxed text-copper-dim/90">{t(groupScaleHintKey)}</p>
                  ) : null}
                </div>
                <div>
                  <Label>{t("groups_lbl_city")}</Label>
                  <Input className="mt-2" value={form.city} onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))} />
                </div>
                <div className="sm:col-span-2">
                  <Label>{t("groups_lbl_dates")}</Label>
                  <TripDateRangePicker
                    className="mt-2"
                    value={form.dateRange}
                    onChange={(dateRange) => setForm((f) => ({ ...f, dateRange }))}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label>{t("groups_lbl_type")}</Label>
                  <Select className="mt-2" value={form.groupType} onChange={(e) => setForm((f) => ({ ...f, groupType: e.target.value }))}>
                    <option value="Viajes grupales">{t("groups_opt_grupales")}</option>
                    <option value="Semigrupo">{t("groups_opt_semigrupo")}</option>
                    <option value="Bodas">{t("groups_opt_bodas")}</option>
                    <option value="Universitarios y congresos">{t("groups_opt_universitarios")}</option>
                    <option value="Escolares y culturales">{t("groups_opt_escolares_culturales")}</option>
                    <option value="Escolares">{t("groups_opt_escolares")}</option>
                    <option value="Individuales">{t("groups_opt_individuales")}</option>
                    <option value="Lunas de miel">{t("groups_opt_luna_miel")}</option>
                    <option value="Corporativos">{t("groups_opt_corporativos")}</option>
                    <option value="Amigos">{t("groups_opt_amigos")}</option>
                    <option value="Empresas">{t("groups_opt_empresas")}</option>
                    <option value="Escuelas">{t("groups_opt_escuelas")}</option>
                    <option value="Familias grandes">{t("groups_opt_familias")}</option>
                    <option value="Grupo privado">{t("groups_opt_privado")}</option>
                  </Select>
                </div>
                <div className="sm:col-span-2">
                  <Label>{t("groups_lbl_notes")}</Label>
                  <Textarea className="mt-2" value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Button
                  type="button"
                  className="w-full"
                  onClick={() => window.open(whatsappHref, "_blank", "noopener,noreferrer")}
                >
                  {t("final_wa")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    window.location.href = mailtoHref;
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("groups_mail")}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
