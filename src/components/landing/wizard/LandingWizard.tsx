"use client";

import { useEffect, useMemo, useState } from "react";
import { Modal } from "@/components/landing/ui/Modal";
import { Button } from "@/components/landing/ui/Button";
import { cn } from "@/lib/cn";
import { wizardSteps, type WizardPackagePreset, type WizardState } from "@/components/landing/wizard/wizardTypes";
import { Label, Input, Select, Textarea } from "@/components/landing/ui/Field";
import { Container } from "@/components/landing/ui/Container";
import { Badge } from "@/components/landing/ui/Badge";
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, TrainFront, X } from "lucide-react";
import { useChepeEffect } from "@/components/landing/chepe/ChepeEffect";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useI18n } from "@/lib/i18n/context";
import { TripDateRangePicker } from "@/components/landing/ui/TripDateRangePicker";
import { formatTripDate } from "@/lib/tripDates";

const initial: WizardState = {
  step: 0,
  origin: "Chihuahua",
  tripType: "Pareja",
  duration: "5D/4N",
  chepeClass: "Chepe Express Ejecutiva",
  experience: "Premium",
  stops: ["Creel", "Divisadero", "Barrancas del Cobre", "Miradores"],
  hotelLevel: "Boutique",
  extras: ["Traslados", "Tours"],
  user: {
    name: "",
    whatsapp: "",
    email: "",
    departureDate: "",
    returnDate: "",
    people: "2",
    notes: ""
  }
};

export function LandingWizard({
  open,
  onClose,
  packagePreset
}: {
  open: boolean;
  onClose: () => void;
  /** Si viene de una tarjeta de paquete, precarga duración y clase Chepe. */
  packagePreset?: WizardPackagePreset | null;
}) {
  const { locale, t } = useI18n();
  const { trigger } = useChepeEffect();
  const [state, setState] = useState<WizardState>(initial);

  const packagePresetKey = packagePreset
    ? `${packagePreset.duration}-${packagePreset.chepeClass}`
    : "";

  useEffect(() => {
    if (!open) return;
    const chepeFromPackage = packagePreset
      ? (`Chepe Express ${packagePreset.chepeClass}` as WizardState["chepeClass"])
      : initial.chepeClass;
    setState({
      ...initial,
      ...(packagePreset
        ? { duration: packagePreset.duration, chepeClass: chepeFromPackage }
        : {}),
      step: 0
    });
  }, [open, packagePresetKey, packagePreset]);

  const progress = useMemo(() => {
    const max = wizardSteps.length - 1;
    return Math.round((state.step / max) * 100);
  }, [state.step]);

  const waHref = useMemo(() => {
    const msg =
      `Hola Rumbo Co, quiero recibir una propuesta premium.\n\n` +
      `Origen: ${state.origin ?? "-"}\n` +
      `Tipo de viaje: ${state.tripType ?? "-"}\n` +
      `Duración: ${state.duration ?? "-"}\n` +
      `Chepe: ${state.chepeClass ?? "-"}\n` +
      `Experiencia: ${state.experience ?? "-"}\n` +
      `Paradas: ${state.stops.length ? state.stops.join(", ") : "-"}\n` +
      `Hospedaje: ${state.hotelLevel ?? "-"}\n` +
      `Extras: ${state.extras.length ? state.extras.join(", ") : "-"}\n\n` +
      `Nombre: ${state.user.name || "-"}\n` +
      `WhatsApp: ${state.user.whatsapp || "-"}\n` +
      `Correo: ${state.user.email || "-"}\n` +
      `${t("groups_wa_departure")} ${state.user.departureDate ? formatTripDate(state.user.departureDate, locale) : "-"}\n` +
      `${t("groups_wa_return")} ${state.user.returnDate ? formatTripDate(state.user.returnDate, locale) : "-"}\n` +
      `Personas: ${state.user.people || "-"}\n` +
      `Comentarios: ${state.user.notes || "-"}`;
    return buildWhatsAppUrl(msg);
  }, [locale, state, t]);

  const canNext = state.step < wizardSteps.length - 1;
  const canPrev = state.step > 0;

  const next = () =>
    setState((s) => ({
      ...s,
      step: Math.min(wizardSteps.length - 1, s.step + 1)
    }));

  const prev = () =>
    setState((s) => ({
      ...s,
      step: Math.max(0, s.step - 1)
    }));

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-charcoal/10 bg-gradient-to-r from-cream/90 via-cream/75 to-cream/85 px-4 py-4 backdrop-blur-md sm:px-6">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper-dim">{t("wizard_title")}</p>
            <p className="mt-1 truncate font-serif text-xl text-charcoal drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
              {t(`wizard_step_${state.step}`)}
            </p>
          </div>
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-charcoal/10 bg-cream/80 text-charcoal/70 shadow-[0_6px_20px_rgba(10,9,8,0.08)] transition hover:-translate-y-0.5 hover:bg-cream"
            onClick={onClose}
            aria-label="Cerrar"
            type="button"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="border-b border-charcoal/10 bg-cream/70 px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-charcoal/70">{t("wizard_progress")}</p>
            <p className="text-xs font-semibold text-charcoal/70">{progress}%</p>
          </div>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-charcoal/10 shadow-[inset_0_1px_3px_rgba(10,9,8,0.15)]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-copper/70 via-terracotta to-copper/80 shadow-[0_0_14px_rgba(166,93,52,0.45)] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <Container className="py-8 sm:py-10">
            <div className="mx-auto max-w-3xl">
              <StepBody
                state={state}
                setState={setState}
                onChepeSelection={() => trigger("wizard")}
              />
            </div>
          </Container>
        </div>

        <div className="border-t border-charcoal/10 bg-gradient-to-r from-cream/90 via-cream/80 to-cream/90 px-4 py-4 backdrop-blur-md sm:px-6">
          <div className="mx-auto flex w-full max-w-3xl items-center justify-between gap-3">
            <Button variant="outline" onClick={prev} disabled={!canPrev}>
              <ArrowLeft className="h-4 w-4" />
              {t("wizard_anterior")}
            </Button>

            {state.step < wizardSteps.length - 1 ? (
              <Button onClick={next} disabled={!canNext}>
                {t("wizard_next")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : (
              <div className="flex flex-col gap-2 sm:flex-row">
                <a href={waHref} target="_blank" rel="noreferrer">
                  <Button>
                    <TrainFront className="h-4 w-4" />
                    {t("wizard_recibir_wa")}
                  </Button>
                </a>
                <Button variant="outline">
                  <Sparkles className="h-4 w-4" />
                  {t("wizard_cotizar")}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
}

function StepBody({
  state,
  setState,
  onChepeSelection
}: {
  state: WizardState;
  setState: (_fn: (_prev: WizardState) => WizardState) => void;
  onChepeSelection: () => void;
}) {
  const { locale, t } = useI18n();
  switch (state.step) {
    case 0:
      return (
        <OptionGrid
          title={t("wizard_q_origin")}
          options={["Chihuahua", "Los Mochis", "Otro / por definir"]}
          value={state.origin ?? undefined}
          onChange={(v) => setState((s) => ({ ...s, origin: v as any }))}
        />
      );
    case 1:
      return (
        <OptionGrid
          title={t("wizard_q_trip")}
          options={["Pareja", "Amigos", "Familia", "Solo", "Grupo"]}
          value={state.tripType ?? undefined}
          onChange={(v) => setState((s) => ({ ...s, tripType: v as any }))}
        />
      );
    case 2:
      return (
        <OptionGrid
          title={t("wizard_q_duration")}
          options={["4D/3N", "5D/4N", "6D/5N", "Personalizada"]}
          value={state.duration ?? undefined}
          onChange={(v) => setState((s) => ({ ...s, duration: v as any }))}
        />
      );
    case 3:
      return (
        <div>
          <h3 className="font-serif text-2xl text-charcoal">{t("wizard_step_3")}</h3>
          <p className="mt-2 text-sm text-charcoal/70">{t("wizard_chepe_intro")}</p>

          <div className="mt-6 grid gap-3">
            {[
              "No incluir tren",
              "Chepe Express Turista",
              "Chepe Express Ejecutiva",
              "Chepe Express Primera"
            ].map((x) => {
              const active = state.chepeClass === x;
              return (
                <button
                  key={x}
                  className={cn(
                    "flex items-center justify-between rounded-[22px] border px-5 py-4 text-left shadow-[0_10px_30px_rgba(10,9,8,0.07)] transition",
                    active
                      ? "border-copper/45 bg-gradient-to-br from-copper/15 to-cream/70"
                      : "border-charcoal/10 bg-cream/65 hover:-translate-y-0.5 hover:bg-cream"
                  )}
                  onClick={() =>
                    setState((s) => {
                      if (x !== "No incluir tren") onChepeSelection();
                      return { ...s, chepeClass: x as any };
                    })
                  }
                  type="button"
                >
                  <div>
                    <p className="font-serif text-lg text-charcoal">{x}</p>
                    <p className="mt-1 text-sm text-charcoal/70">
                      {x === "Chepe Express Primera"
                        ? t("wizard_chepe_primera")
                        : x === "Chepe Express Ejecutiva"
                          ? t("wizard_chepe_ejecutiva")
                          : x === "Chepe Express Turista"
                            ? t("wizard_chepe_turista")
                            : t("wizard_chepe_none")}
                    </p>
                  </div>
                  {active ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-xs font-semibold text-cream shadow-[0_8px_20px_rgba(10,9,8,0.25)]">
                      <CheckCircle2 className="h-4 w-4" />
                      {t("wizard_pick_selected")}
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-charcoal/60">{t("wizard_pick_cta")}</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      );
    case 4:
      return (
        <OptionGrid
          title={t("wizard_q_feel")}
          options={["Relax", "Aventura", "Cultural", "Premium", "Fotografía", "Familiar"]}
          value={state.experience ?? undefined}
          onChange={(v) => setState((s) => ({ ...s, experience: v as any }))}
        />
      );
    case 5: {
      const all = [
        "Tour Creel Pueblo Mágico",
        "Tour Tarahumara",
        "Tour Cascada de Cusárare",
        "Tour Divisadero y Parque de Aventura",
        "Tour Cerro del Gallego",
        "Tour Menonitas de Chihuahua",
        "Tour Aguas Termales Recowata",
        "Tour Batopilas",
        "Tour Basaseachic",
        "Tour Tarahumara Plus Cusárare",
        "Tour Tarde en el Lago de Arareko",
        "Tour Cañón del Cobre Plus",
        "Tour Guachochi-Sinforosa",
        "Tour Sisoguichi",
        "Tour Maguarichi",
        "Transporte Creel-Chihuahua"
      ] as const;
      return (
        <MultiPick
          title={t("wizard_q_stops")}
          options={all}
          selected={state.stops}
          onToggle={(x) =>
            setState((s) => ({
              ...s,
              stops: s.stops.includes(x as any)
                ? s.stops.filter((k) => k !== (x as any))
                : [...s.stops, x as any]
            }))
          }
        />
      );
    }
    case 6:
      return (
        <OptionGrid
          title={t("wizard_q_hotel")}
          options={["Estándar", "Boutique", "Premium", "Mixto"]}
          value={state.hotelLevel ?? undefined}
          onChange={(v) => setState((s) => ({ ...s, hotelLevel: v as any }))}
        />
      );
    case 7: {
      const all = [
        "Traslados",
        "Tours",
        "Desayunos",
        "Cenas",
        "Teleférico",
        "Parque Aventura",
        "Guía",
        "Celebración especial"
      ] as const;
      return (
        <MultiPick
          title={t("wizard_q_extras")}
          options={all}
          selected={state.extras}
          onToggle={(x) =>
            setState((s) => ({
              ...s,
              extras: s.extras.includes(x as any)
                ? s.extras.filter((k) => k !== (x as any))
                : [...s.extras, x as any]
            }))
          }
        />
      );
    }
    case 8:
      return (
        <div>
          <h3 className="font-serif text-2xl text-charcoal">{t("wizard_data_title")}</h3>
          <p className="mt-2 text-sm text-charcoal/70">{t("wizard_data_sub")}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <Label>{t("wizard_lbl_name")}</Label>
              <Input
                className="mt-2"
                value={state.user.name}
                onChange={(e) =>
                  setState((s) => ({ ...s, user: { ...s.user, name: e.target.value } }))
                }
              />
            </div>
            <div>
              <Label>{t("wizard_lbl_wa")}</Label>
              <Input
                className="mt-2"
                value={state.user.whatsapp}
                onChange={(e) =>
                  setState((s) => ({ ...s, user: { ...s.user, whatsapp: e.target.value } }))
                }
              />
            </div>
            <div>
              <Label>{t("wizard_lbl_email")}</Label>
              <Input
                className="mt-2"
                type="email"
                value={state.user.email}
                onChange={(e) =>
                  setState((s) => ({ ...s, user: { ...s.user, email: e.target.value } }))
                }
              />
            </div>
            <div className="sm:col-span-2">
              <Label>{t("groups_lbl_dates")}</Label>
              <TripDateRangePicker
                className="mt-2"
                value={{
                  departure: state.user.departureDate,
                  return: state.user.returnDate
                }}
                onChange={(range) =>
                  setState((s) => ({
                    ...s,
                    user: {
                      ...s.user,
                      departureDate: range.departure,
                      returnDate: range.return
                    }
                  }))
                }
              />
            </div>
            <div>
              <Label>{t("wizard_lbl_party")}</Label>
              <Select
                className="mt-2"
                value={state.user.people}
                onChange={(e) =>
                  setState((s) => ({ ...s, user: { ...s.user, people: e.target.value } }))
                }
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <option key={i + 1} value={String(i + 1)}>
                    {i + 1}
                  </option>
                ))}
                <option value="12+">12+</option>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <Label>{t("wizard_lbl_comments")}</Label>
              <Textarea
                className="mt-2"
                value={state.user.notes}
                onChange={(e) =>
                  setState((s) => ({ ...s, user: { ...s.user, notes: e.target.value } }))
                }
              />
            </div>
          </div>
        </div>
      );
    case 9:
      return (
        <div>
          <h3 className="font-serif text-2xl text-charcoal">{t("wizard_summary_title")}</h3>
          <p className="mt-2 text-sm text-charcoal/70">{t("wizard_summary_sub")}</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <SummaryCard label={t("wizard_sum_origin")} value={state.origin ?? "-"} />
            <SummaryCard label={t("wizard_sum_trip")} value={state.tripType ?? "-"} />
            <SummaryCard label={t("wizard_sum_duration")} value={state.duration ?? "-"} />
            <SummaryCard
              label={t("wizard_sum_chepe")}
              value={state.chepeClass ?? "-"}
              badge={state.chepeClass && state.chepeClass !== "No incluir tren" ? "Chepe Express" : undefined}
            />
            <SummaryCard label={t("wizard_sum_experience")} value={state.experience ?? "-"} />
            <SummaryCard label={t("wizard_sum_hotel")} value={state.hotelLevel ?? "-"} />
            <SummaryCard label={t("wizard_sum_stops")} value={state.stops.length ? state.stops.join(", ") : "-"} wide />
            <SummaryCard label={t("wizard_sum_extras")} value={state.extras.length ? state.extras.join(", ") : "-"} wide />
          </div>

          <div className="mt-8 rounded-[24px] border border-charcoal/10 bg-cream/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/60">{t("wizard_sum_data")}</p>
            <div className="mt-3 grid gap-2 text-sm text-charcoal/75 sm:grid-cols-2">
              <p>
                <span className="font-semibold text-charcoal">{t("wizard_sum_name")}</span> {state.user.name || "-"}
              </p>
              <p>
                <span className="font-semibold text-charcoal">{t("wizard_sum_wa")}</span> {state.user.whatsapp || "-"}
              </p>
              <p>
                <span className="font-semibold text-charcoal">{t("wizard_sum_email")}</span> {state.user.email || "-"}
              </p>
              <p>
                <span className="font-semibold text-charcoal">{t("date_picker_departure")}</span>{" "}
                {state.user.departureDate ? formatTripDate(state.user.departureDate, locale) : "-"}
              </p>
              <p>
                <span className="font-semibold text-charcoal">{t("date_picker_return")}</span>{" "}
                {state.user.returnDate ? formatTripDate(state.user.returnDate, locale) : "-"}
              </p>
              <p>
                <span className="font-semibold text-charcoal">{t("wizard_sum_people")}</span> {state.user.people || "-"}
              </p>
              <p className="sm:col-span-2">
                <span className="font-semibold text-charcoal">{t("wizard_sum_notes")}</span> {state.user.notes || "-"}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-[24px] border border-terracotta/25 bg-terracotta/10 p-6">
            <p className="flex items-center gap-2 text-sm font-semibold text-charcoal">
              <Sparkles className="h-4 w-4 text-terracotta" />
              {t("wizard_footer_note")}
            </p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

function SummaryCard({
  label,
  value,
  wide,
  badge
}: {
  label: string;
  value: string;
  wide?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-charcoal/10 bg-gradient-to-br from-cream/80 to-cream/55 p-6 shadow-[0_12px_30px_rgba(10,9,8,0.07)]",
        wide && "sm:col-span-2"
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/60">
          {label}
        </p>
        {badge ? <Badge tone="copper">{badge}</Badge> : null}
      </div>
      <p className="mt-3 font-serif text-lg text-charcoal">{value}</p>
    </div>
  );
}

function OptionGrid({
  title,
  options,
  value,
  onChange
}: {
  title: string;
  options: readonly string[];
  value?: string;
  onChange: (_v: string) => void;
}) {
  const { t } = useI18n();
  return (
    <div>
      <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {options.map((o) => {
          const active = o === value;
          return (
            <button
              key={o}
              className={cn(
                "rounded-[22px] border px-5 py-4 text-left shadow-[0_10px_30px_rgba(10,9,8,0.06)] transition",
                active
                  ? "border-copper/45 bg-gradient-to-br from-copper/15 to-cream/75"
                  : "border-charcoal/10 bg-cream/60 hover:-translate-y-0.5 hover:bg-cream"
              )}
              onClick={() => onChange(o)}
              type="button"
            >
              <p className="font-serif text-lg text-charcoal">{o}</p>
              <p className="mt-1 text-sm text-charcoal/70">
                {active ? t("wizard_pick_selected") : t("wizard_pick_cta")}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MultiPick({
  title,
  options,
  selected,
  onToggle
}: {
  title: string;
  options: readonly string[];
  selected: string[];
  onToggle: (_v: string) => void;
}) {
  const { t } = useI18n();
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
          <p className="mt-2 text-sm text-charcoal/70">{t("wizard_multipick_hint")}</p>
        </div>
        <Badge tone="charcoal">{t("wizard_multipick_count", { n: selected.length })}</Badge>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {options.map((o) => {
          const active = selected.includes(o);
          return (
            <button
              key={o}
              onClick={() => onToggle(o)}
              type="button"
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-semibold shadow-[0_6px_18px_rgba(10,9,8,0.07)] transition",
                active
                  ? "border-copper/45 bg-gradient-to-br from-copper/15 to-cream/75 text-charcoal"
                  : "border-charcoal/10 bg-cream/60 text-charcoal/75 hover:-translate-y-0.5 hover:bg-cream hover:text-charcoal"
              )}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

