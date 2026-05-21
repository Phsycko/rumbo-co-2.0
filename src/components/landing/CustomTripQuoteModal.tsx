"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight, ChevronLeft, X } from "lucide-react";
import { Button } from "@/components/landing/ui/Button";
import { Input, Label, Select, Textarea } from "@/components/landing/ui/Field";
import type { CustomTripType } from "@/data/customTrips";
import type { BriefField } from "@/data/customTripBriefFields";
import { destinationCategories } from "@/data/travel/destinations";
import { travelHotels } from "@/data/travel/hotels";
import type { DestinationCategoryId, Localized } from "@/data/travel/types";
import { loc as locItem } from "@/data/travel/types";
import {
  categoryNeedsPlacePicker,
  getBudgetTier,
  getHotelsForPlace,
  getPlacesForCategory,
  getPriorityForTrip
} from "@/lib/travelRecommendations";
import { getTripExperienceProfile } from "@/data/tripExperienceProfiles";
import { TravelExperiencePanel } from "@/components/landing/travel/TravelExperiencePanel";
import { getBudgetProfile } from "@/data/travel/budgetProfiles";
import {
  formatCustomTripQuoteMessage,
  getBriefFields,
  getDefaultBriefValues,
  resolveGroupScale,
  type QuoteContact,
  type WizardDestinationSelection
} from "@/lib/customTripBrief";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { TripDateRangePicker } from "@/components/landing/ui/TripDateRangePicker";
import { useI18n } from "@/lib/i18n/context";
import type { SiteLocale } from "@/lib/i18n/siteLocale";
import { cn } from "@/lib/cn";

function loc(locale: SiteLocale, item: Localized) {
  return locItem(locale, item);
}

function tripLabel(locale: SiteLocale, trip: CustomTripType) {
  return locale === "en" ? trip.label.en : trip.label.es;
}

function FieldControl({
  field,
  value,
  onChange
}: {
  field: BriefField;
  value: string;
  onChange: (_value: string) => void;
}) {
  const { t } = useI18n();

  if (field.type === "select" && field.options) {
    return (
      <Select className="mt-2.5" value={value} onChange={(e) => onChange(e.target.value)}>
        {field.options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {t(opt.labelKey)}
          </option>
        ))}
      </Select>
    );
  }

  if (field.type === "textarea") {
    return (
      <Textarea
        className="mt-2.5 min-h-[100px]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={field.placeholderKey ? t(field.placeholderKey) : undefined}
      />
    );
  }

  if (field.type === "checkbox") {
    return (
      <label className="mt-3 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 shrink-0 accent-copper"
          checked={value === "yes"}
          onChange={(e) => onChange(e.target.checked ? "yes" : "")}
        />
        <span className="text-sm leading-relaxed text-ink/85">{t(field.labelKey)}</span>
      </label>
    );
  }

  return (
    <Input
      className="mt-2.5"
      type={field.type === "number" ? "number" : "text"}
      min={field.type === "number" ? (field.min ?? 1) : undefined}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={field.placeholderKey ? t(field.placeholderKey) : undefined}
    />
  );
}

type WizardStep = "brief" | "category" | "detail" | "contact";

const emptyContact = (): QuoteContact => ({
  name: "",
  whatsapp: "",
  email: "",
  city: "",
  departure: "",
  return: ""
});

export function CustomTripQuoteModal({
  trip,
  onClose,
  onSent
}: {
  trip: CustomTripType;
  onClose: () => void;
  onSent: () => void;
}) {
  const { locale, t } = useI18n();
  const fields = getBriefFields(trip.id);
  const [step, setStep] = useState<WizardStep>("brief");
  const [brief, setBrief] = useState<Record<string, string>>(() => getDefaultBriefValues(trip.id));
  const [categoryId, setCategoryId] = useState<DestinationCategoryId | "">("");
  const [placeId, setPlaceId] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [mixDetail, setMixDetail] = useState("");
  const [otherDetail, setOtherDetail] = useState("");
  const [contact, setContact] = useState<QuoteContact>(emptyContact);
  const [contactError, setContactError] = useState(false);
  const [destBackStep, setDestBackStep] = useState<"category" | "detail">("category");

  useEffect(() => {
    setStep("brief");
    setBrief(getDefaultBriefValues(trip.id));
    setCategoryId("");
    setPlaceId("");
    setHotelId("");
    setMixDetail("");
    setOtherDetail("");
    setContact(emptyContact());
    setContactError(false);
    setDestBackStep("category");
  }, [trip.id]);

  const setField = (id: string, v: string) => {
    setBrief((prev) => ({ ...prev, [id]: v }));
  };

  const budgetTier = useMemo(() => getBudgetTier(brief), [brief]);
  const priority = useMemo(() => getPriorityForTrip(trip.id, brief), [trip.id, brief]);
  const tripProfile = useMemo(() => getTripExperienceProfile(trip.id), [trip.id]);
  const budgetProfile = useMemo(() => getBudgetProfile(budgetTier), [budgetTier]);
  const subcategories = trip.subcategories ?? [];

  useEffect(() => {
    setHotelId("");
  }, [budgetTier, priority, placeId]);

  const places = useMemo(() => {
    if (!categoryId || !categoryNeedsPlacePicker(categoryId)) return [];
    return getPlacesForCategory(categoryId, budgetTier);
  }, [categoryId, budgetTier]);

  const hotels = useMemo(() => {
    if (!placeId) return [];
    return getHotelsForPlace(placeId, budgetTier, priority);
  }, [placeId, budgetTier, priority]);

  const selectedPlace = places.find((p) => p.id === placeId);
  const selectedHotel = travelHotels.find((h) => h.id === hotelId);
  const selectedCategory = destinationCategories.find((c) => c.id === categoryId);

  const briefSubKey =
    trip.id === "luna-miel"
      ? "custom_brief_sub_luna_miel"
      : trip.id === "escolares-culturales"
        ? "custom_brief_sub_escolares_culturales"
        : (`custom_brief_sub_${trip.id}` as const);
  const TripIcon = trip.icon;

  const peopleCount = Number.parseInt(brief.people ?? "", 10) || 0;
  const groupScale = trip.id === "grupales" ? resolveGroupScale(peopleCount) : null;
  const tripTypeBadgeLabel =
    groupScale === "semigrupo"
      ? t("custom_scale_semigrupo")
      : groupScale === "grupal"
        ? t("custom_scale_grupal")
        : tripLabel(locale, trip);
  const groupScaleHintKey =
    groupScale === "semigrupo"
      ? "custom_scale_hint_semigrupo"
      : groupScale === "grupal"
        ? "custom_scale_hint_grupal"
        : trip.id === "grupales" && peopleCount > 0 && peopleCount < 5
          ? "custom_scale_hint_below_min"
          : null;

  const validateBrief = () => {
    for (const f of fields) {
      if (f.required) {
        if (f.type === "checkbox") {
          if (brief[f.id] !== "yes") return false;
        } else if (!brief[f.id]?.trim()) {
          return false;
        }
      }
      if (f.type === "number" && f.min != null) {
        const n = Number.parseInt(brief[f.id] ?? "", 10);
        if (!Number.isFinite(n) || n < f.min) return false;
      }
    }
    return true;
  };

  const buildWizard = (): WizardDestinationSelection => {
    const cat = destinationCategories.find((c) => c.id === categoryId);
    return {
      categoryId: categoryId || undefined,
      categoryLabel: cat ? loc(locale, cat.label) : undefined,
      placeId: placeId || undefined,
      placeLabel: selectedPlace ? loc(locale, selectedPlace.name) : undefined,
      hotelId: hotelId || undefined,
      hotelLabel: selectedHotel ? loc(locale, selectedHotel.name) : undefined,
      mixDetail: mixDetail.trim() || undefined,
      otherDetail: otherDetail.trim() || undefined
    };
  };

  const goNextFromBrief = () => {
    if (!validateBrief()) return;
    setStep("category");
  };

  const goToContact = (from: "category" | "detail") => {
    setDestBackStep(from);
    setContactError(false);
    setStep("contact");
  };

  const goNextFromCategory = () => {
    if (!categoryId) return;
    if (categoryId === "mixto" || categoryId === "otro") {
      goToContact("category");
      return;
    }
    setPlaceId("");
    setHotelId("");
    setStep("detail");
  };

  const finishDetail = () => {
    if (categoryNeedsPlacePicker(categoryId as DestinationCategoryId) && !placeId) return;
    goToContact("detail");
  };

  const validateContact = () => {
    const ok = contact.name.trim().length > 0 && contact.whatsapp.trim().length > 0;
    setContactError(!ok);
    return ok;
  };

  const sendQuote = () => {
    if (!validateContact()) return;
    const message = formatCustomTripQuoteMessage(
      locale,
      trip.id,
      tripLabel(locale, trip),
      brief,
      buildWizard(),
      contact
    );
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    onSent();
  };

  const stepLabels: { key: WizardStep; label: string }[] = [
    { key: "brief", label: t("custom_wizard_step_trip") },
    { key: "category", label: t("custom_wizard_step_dest") },
    { key: "detail", label: t("custom_wizard_step_detail") },
    { key: "contact", label: t("custom_wizard_step_contact") }
  ];

  const showDetailStep = categoryId && categoryNeedsPlacePicker(categoryId as DestinationCategoryId);

  return (
    <div
      role="presentation"
      className="fixed inset-0 z-[2800] flex items-center justify-center bg-ink/60 px-4 py-8 backdrop-blur-[6px]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="custom-brief-dialog-title"
        className={cn(
          "max-h-[min(92vh,880px)] w-full max-w-xl overflow-y-auto border border-ink/10 bg-parchment sm:max-w-3xl",
          "shadow-[0_32px_80px_rgba(10,9,8,0.22)]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-ink/8 bg-cream/50 px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <span className="inline-flex items-center gap-2 border border-copper/25 bg-parchment px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-copper-dim">
                <TripIcon className="h-3.5 w-3.5" aria-hidden />
                {t("custom_brief_selected")}: {tripTypeBadgeLabel}
              </span>
              <h3
                id="custom-brief-dialog-title"
                className="mt-4 font-serif text-2xl leading-tight text-ink sm:text-[1.75rem]"
              >
                {step === "brief"
                  ? t("custom_brief_title")
                  : step === "category"
                    ? t("custom_wizard_dest_title")
                    : step === "detail"
                      ? t("custom_wizard_place_title")
                      : t("custom_wizard_contact_title")}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink/70">
                {step === "brief"
                  ? t(briefSubKey)
                  : step === "category"
                    ? t("custom_wizard_dest_sub")
                    : step === "detail"
                      ? categoryId === "playa"
                        ? t("custom_wizard_place_sub_playa")
                        : t("custom_wizard_place_sub_default")
                      : t("custom_wizard_contact_sub")}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {stepLabels.map((s, i) => {
                  const active = s.key === step;
                  const done =
                    (s.key === "brief" && step !== "brief") ||
                    (s.key === "category" && (step === "detail" || step === "contact")) ||
                    (s.key === "detail" && step === "contact");
                  const hidden = s.key === "detail" && !showDetailStep;
                  if (hidden) return null;
                  return (
                    <span
                      key={s.key}
                      className={cn(
                        "text-[10px] font-semibold uppercase tracking-[0.14em]",
                        active ? "text-copper" : done ? "text-ink/45" : "text-ink/30"
                      )}
                    >
                      {i + 1}. {s.label}
                    </span>
                  );
                })}
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/12 text-ink/60 transition hover:border-ink/25 hover:bg-cream hover:text-ink"
              aria-label={t("custom_people_close")}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-7">
          {step === "brief" ? (
            <div className="space-y-8">
              {tripProfile ? (
                <div className="border border-copper/20 bg-gradient-to-br from-cream/90 via-parchment to-[#e8eef0]/35 p-5 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-copper-dim">
                    {tripLabel(locale, trip)}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">
                    {loc(locale, tripProfile.insight)}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {tripProfile.highlights.map((h) => (
                      <li
                        key={h.es}
                        className="border border-ink/10 bg-parchment/80 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-ink/55"
                      >
                        {loc(locale, h)}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {subcategories.length > 0 ? (
                <div>
                  <Label className="text-ink/55">{t("custom_field_subcategory")}</Label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {subcategories.map((sub) => {
                      const active = brief.subcategory === sub.id;
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => setField("subcategory", sub.id)}
                          className={cn(
                            "border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] transition duration-300",
                            active
                              ? "border-copper/50 bg-cream text-copper-dim"
                              : "border-ink/12 bg-parchment/60 text-ink/45 hover:border-copper/30 hover:text-ink/70"
                          )}
                        >
                          {t(sub.labelKey)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                {fields
                  .filter((field) => field.id !== "subcategory" && field.type !== "checkbox")
                  .map((field) => (
                  <div key={field.id} className={field.fullWidth ? "sm:col-span-2" : undefined}>
                    <Label className="text-ink/55">{t(field.labelKey)}</Label>
                    <FieldControl field={field} value={brief[field.id] ?? ""} onChange={(v) => setField(field.id, v)} />
                    {field.id === "budget_pp" ? (
                      <p className="mt-2 text-xs leading-relaxed text-copper-dim/90">
                        {loc(locale, budgetProfile.insight)}
                      </p>
                    ) : null}
                    {field.id === "people" && groupScaleHintKey ? (
                      <p className="mt-2 text-xs leading-relaxed text-copper-dim/90">{t(groupScaleHintKey)}</p>
                    ) : null}
                    {field.hintKey && field.id !== "budget_pp" ? (
                      <p className="mt-2 text-xs leading-relaxed text-ink/55">{t(field.hintKey)}</p>
                    ) : null}
                  </div>
                ))}
              </div>

              {fields
                .filter((field) => field.type === "checkbox")
                .map((field) => (
                  <div
                    key={field.id}
                    className="border border-copper/20 bg-cream/60 px-4 py-4 sm:px-5 sm:py-5"
                  >
                    {field.noticeKey ? (
                      <p className="text-sm leading-relaxed text-ink/75">{t(field.noticeKey)}</p>
                    ) : null}
                    <FieldControl
                      field={field}
                      value={brief[field.id] ?? ""}
                      onChange={(v) => setField(field.id, v)}
                    />
                  </div>
                ))}
            </div>
          ) : null}

          {step === "category" ? (
            <div className="grid gap-3 sm:grid-cols-2">
              {destinationCategories.map((cat) => {
                const selected = categoryId === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setCategoryId(cat.id)}
                    className={cn(
                      "cursor-pointer border p-4 text-left transition-all duration-400",
                      selected
                        ? "border-copper/50 bg-cream shadow-[0_8px_24px_rgba(10,9,8,0.08)]"
                        : "border-ink/10 bg-parchment/50 hover:border-copper/30 hover:bg-cream"
                    )}
                  >
                    <p className="font-serif text-lg text-ink">{loc(locale, cat.label)}</p>
                    <p className="mt-1 text-xs text-ink/60">{loc(locale, cat.desc)}</p>
                  </button>
                );
              })}
              {categoryId === "mixto" ? (
                <div className="sm:col-span-2">
                  <Label className="text-ink/55">{t("custom_wizard_mix_label")}</Label>
                  <Textarea
                    className="mt-2.5 min-h-[88px]"
                    value={mixDetail}
                    onChange={(e) => setMixDetail(e.target.value)}
                    placeholder={t("custom_wizard_mix_ph")}
                  />
                </div>
              ) : null}
              {categoryId === "otro" ? (
                <div className="sm:col-span-2">
                  <Label className="text-ink/55">{t("custom_wizard_other_label")}</Label>
                  <Input
                    className="mt-2.5"
                    value={otherDetail}
                    onChange={(e) => setOtherDetail(e.target.value)}
                    placeholder={t("custom_wizard_other_ph")}
                  />
                </div>
              ) : null}
            </div>
          ) : null}

          {step === "detail" && categoryId ? (
            <div className="space-y-8">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                  {selectedCategory ? loc(locale, selectedCategory.label) : ""}
                </p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {places.map((place) => {
                    const selected = placeId === place.id;
                    return (
                      <button
                        key={place.id}
                        type="button"
                        onClick={() => {
                          setPlaceId(place.id);
                          setHotelId("");
                        }}
                        className={cn(
                          "cursor-pointer border px-4 py-3 text-left transition-all duration-400",
                          selected
                            ? "border-copper/50 bg-cream"
                            : "border-ink/10 hover:border-copper/30 hover:bg-parchment"
                        )}
                      >
                        <p className="font-serif text-base text-ink">{loc(locale, place.name)}</p>
                        <p className="mt-0.5 text-[11px] text-ink/55">{loc(locale, place.region)}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {!placeId ? (
                <p className="border border-dashed border-ink/12 bg-cream/40 px-4 py-3 text-sm leading-relaxed text-ink/55">
                  {t("travel_select_place_hint")}
                </p>
              ) : null}

              {placeId && hotels.length > 0 ? (
                <TravelExperiencePanel
                  tier={budgetTier}
                  priority={priority}
                  hotels={hotels}
                  locale={locale}
                  selectedHotelId={hotelId}
                  onSelectHotel={setHotelId}
                  segmentInsight={tripProfile?.insight}
                  segmentVibe={tripProfile?.vibeLine}
                  segmentHighlights={tripProfile?.highlights}
                />
              ) : null}

              {placeId && hotels.length === 0 ? (
                <p className="text-sm leading-relaxed text-ink/60">
                  {t("travel_no_hotels_place", {
                    place: selectedPlace ? loc(locale, selectedPlace.name) : ""
                  })}
                </p>
              ) : null}
            </div>
          ) : null}

          {step === "contact" ? (
            <div className="space-y-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label className="text-ink/55">{t("groups_lbl_name")}</Label>
                  <Input
                    className="mt-2.5"
                    value={contact.name}
                    onChange={(e) => {
                      setContact((c) => ({ ...c, name: e.target.value }));
                      setContactError(false);
                    }}
                  />
                </div>
                <div>
                  <Label className="text-ink/55">{t("groups_lbl_whatsapp")}</Label>
                  <Input
                    className="mt-2.5"
                    value={contact.whatsapp}
                    onChange={(e) => {
                      setContact((c) => ({ ...c, whatsapp: e.target.value }));
                      setContactError(false);
                    }}
                  />
                </div>
                <div>
                  <Label className="text-ink/55">{t("groups_mail")}</Label>
                  <Input
                    className="mt-2.5"
                    type="email"
                    value={contact.email}
                    onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                  />
                </div>
                <div>
                  <Label className="text-ink/55">{t("groups_lbl_city")}</Label>
                  <Input
                    className="mt-2.5"
                    value={contact.city}
                    onChange={(e) => setContact((c) => ({ ...c, city: e.target.value }))}
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-ink/55">{t("groups_lbl_dates")}</Label>
                  <TripDateRangePicker
                    className="mt-2.5"
                    value={{ departure: contact.departure, return: contact.return }}
                    onChange={(range) =>
                      setContact((c) => ({
                        ...c,
                        departure: range.departure,
                        return: range.return
                      }))
                    }
                  />
                </div>
              </div>
              {contactError ? (
                <p className="text-sm text-copper-dim">{t("custom_quote_contact_required")}</p>
              ) : null}
              <div className="border border-ink/10 bg-cream/50 px-4 py-3 text-xs leading-relaxed text-ink/60">
                <p className="font-semibold uppercase tracking-[0.12em] text-ink/45">
                  {tripLabel(locale, trip)}
                </p>
                <p className="mt-2 whitespace-pre-line">
                  {formatCustomTripQuoteMessage(
                    locale,
                    trip.id,
                    tripLabel(locale, trip),
                    brief,
                    buildWizard(),
                    { ...contact, name: contact.name || "…", whatsapp: contact.whatsapp || "…" }
                  )}
                </p>
              </div>
            </div>
          ) : null}

          <div className="mt-8 flex flex-col gap-3 border-t border-ink/8 pt-6 sm:flex-row">
            {step !== "brief" ? (
              <Button
                type="button"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => {
                  if (step === "contact") setStep(destBackStep);
                  else if (step === "detail") setStep("category");
                  else if (step === "category") setStep("brief");
                }}
              >
                <ChevronLeft className="h-4 w-4" />
                {t("custom_wizard_back")}
              </Button>
            ) : (
              <Button type="button" variant="outline" size="lg" className="w-full sm:w-auto" onClick={onClose}>
                {t("custom_people_cancel")}
              </Button>
            )}

            {step === "brief" ? (
              <Button type="button" size="lg" className="w-full sm:flex-1" onClick={goNextFromBrief}>
                {t("custom_wizard_next")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : null}

            {step === "category" ? (
              <Button
                type="button"
                size="lg"
                className="w-full sm:flex-1"
                onClick={goNextFromCategory}
                disabled={!categoryId || (categoryId === "mixto" && !mixDetail.trim()) || (categoryId === "otro" && !otherDetail.trim())}
              >
                {t("custom_wizard_next")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : null}

            {step === "detail" ? (
              <Button type="button" size="lg" className="w-full sm:flex-1" onClick={finishDetail} disabled={!placeId}>
                {t("custom_wizard_next")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : null}

            {step === "contact" ? (
              <Button type="button" size="lg" className="w-full sm:flex-1" onClick={sendQuote}>
                {t("custom_quote_send_wa")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
