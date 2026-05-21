import type { BriefField } from "@/data/customTripBriefFields";
import { customTripBriefFields } from "@/data/customTripBriefFields";
import type { SiteLocale } from "@/lib/i18n/siteLocale";
import { translate } from "@/lib/i18n/lexicon";
import { formatTripDate } from "@/lib/tripDates";

export function getBriefFields(tripId: string): BriefField[] {
  return customTripBriefFields[tripId] ?? [];
}

export function getDefaultBriefValues(tripId: string): Record<string, string> {
  const fields = getBriefFields(tripId);
  const values: Record<string, string> = {};
  for (const f of fields) {
    if (f.defaultValue !== undefined) values[f.id] = f.defaultValue;
    else if (f.type === "number") values[f.id] = "1";
    else values[f.id] = "";
  }
  return values;
}

function labelForField(locale: SiteLocale, field: BriefField, value: string): string {
  const label = translate(locale, field.labelKey);
  if (field.type === "checkbox") {
    const ack =
      value === "yes"
        ? translate(locale, "custom_confidentiality_ack_yes")
        : locale === "en"
          ? "Not accepted"
          : "No aceptado";
    return `${label}: ${ack}`;
  }
  if (field.type === "select" && field.options) {
    const opt = field.options.find((o) => o.value === value);
    if (opt) return `${label}: ${translate(locale, opt.labelKey)}`;
  }
  return `${label}: ${value || "-"}`;
}

export type WizardDestinationSelection = {
  categoryId?: string;
  categoryLabel?: string;
  placeId?: string;
  placeLabel?: string;
  hotelId?: string;
  hotelLabel?: string;
  mixDetail?: string;
  otherDetail?: string;
};

export function formatBriefNotes(
  locale: SiteLocale,
  tripId: string,
  tripLabel: string,
  values: Record<string, string>,
  wizard?: WizardDestinationSelection
): string {
  const fields = getBriefFields(tripId);

  const lines: string[] = [];
  const header =
    locale === "en" ? `Trip brief (${tripLabel}):` : `Brief del viaje (${tripLabel}):`;

  lines.push(header);

  for (const field of fields) {
    const value = values[field.id];
    if (!value?.trim()) continue;
    lines.push(`• ${labelForField(locale, field, value)}`);
  }

  const sub = values.subcategory?.trim();
  if (sub) {
    const subField = fields.find((f) => f.id === "subcategory");
    const opt = subField?.options?.find((o) => o.value === sub);
    if (opt) {
      lines.push(
        `• ${locale === "en" ? "Focus" : "Enfoque"}: ${translate(locale, opt.labelKey)}`
      );
    }
  }

  if (tripId === "grupales") {
    const n = Number.parseInt(values.people ?? "", 10);
    if (Number.isFinite(n) && n >= 1) {
      const scale = resolveGroupScale(n);
      if (scale) {
        const scaleLabel =
          locale === "en"
            ? scale === "semigrupo"
              ? "Semi-group (5–19 guests)"
              : "Group (20+ guests)"
            : scale === "semigrupo"
              ? "Semigrupo (5–19 personas)"
              : "Grupal (20 personas o más)";
        lines.push(`• ${locale === "en" ? "Scale" : "Escala"}: ${scaleLabel}`);
      }
    }
  }

  if (wizard) {
    const destHeader = locale === "en" ? "Destination:" : "Destino:";
    lines.push("", destHeader);
    if (wizard.categoryLabel) {
      lines.push(`• ${locale === "en" ? "Type" : "Tipo"}: ${wizard.categoryLabel}`);
    }
    if (wizard.placeLabel) {
      lines.push(`• ${locale === "en" ? "Place" : "Lugar"}: ${wizard.placeLabel}`);
    }
    if (wizard.hotelLabel) {
      lines.push(`• ${locale === "en" ? "Suggested hotel" : "Hotel sugerido"}: ${wizard.hotelLabel}`);
    }
    if (wizard.mixDetail?.trim()) {
      lines.push(`• ${locale === "en" ? "Combined route" : "Ruta combinada"}: ${wizard.mixDetail}`);
    }
    if (wizard.otherDetail?.trim()) {
      lines.push(`• ${locale === "en" ? "Other idea" : "Otra idea"}: ${wizard.otherDetail}`);
    }
  }

  return lines.join("\n");
}

export type QuoteContact = {
  name: string;
  whatsapp: string;
  email: string;
  city: string;
  departure: string;
  return: string;
};

export function formatCustomTripQuoteMessage(
  locale: SiteLocale,
  tripId: string,
  tripLabel: string,
  briefValues: Record<string, string>,
  wizard: WizardDestinationSelection,
  contact: QuoteContact
): string {
  const intro =
    locale === "en"
      ? "Hello Rumbo Co, I would like a quote for a custom trip:"
      : "Hola Rumbo Co, me interesa una cotización de viaje a medida:";

  const contactHeader = locale === "en" ? "Contact" : "Contacto";
  const tripHeader = locale === "en" ? "Trip type" : "Tipo de viaje";

  const lines = [
    intro,
    "",
    contactHeader,
    `• ${translate(locale, "groups_wa_name")} ${contact.name.trim() || "-"}`,
    `• ${translate(locale, "groups_wa_whatsapp")} ${contact.whatsapp.trim() || "-"}`,
    `• ${translate(locale, "groups_wa_email")} ${contact.email.trim() || "-"}`,
    `• ${translate(locale, "groups_wa_city")} ${contact.city.trim() || "-"}`,
    `• ${translate(locale, "groups_wa_departure")} ${contact.departure.trim() ? formatTripDate(contact.departure, locale) : "-"}`,
    `• ${translate(locale, "groups_wa_return")} ${contact.return.trim() ? formatTripDate(contact.return, locale) : "-"}`,
    "",
    tripHeader,
    `• ${tripLabel}`,
    "",
    formatBriefNotes(locale, tripId, tripLabel, briefValues, wizard)
  ];

  return lines.join("\n");
}

export const GROUP_VALUE_GRUPAL = "Viajes grupales";
export const GROUP_VALUE_SEMIGRUPO = "Semigrupo";

export type GroupScale = "semigrupo" | "grupal";

export const GROUP_SEMIGRUPO_MIN = 5;
export const GROUP_SEMIGRUPO_MAX = 19;
export const GROUP_GRUPAL_MIN = 20;

/** 5–19 personas = semigrupo; 20+ = grupal. */
export function resolveGroupScale(peopleCount: number): GroupScale | null {
  if (peopleCount >= GROUP_GRUPAL_MIN) return "grupal";
  if (peopleCount >= 5 && peopleCount <= 19) return "semigrupo";
  return null;
}

export function deriveGroupSessionType(
  tripId: string,
  tripGroupValue: string,
  values: Record<string, string>
): string {
  if (tripId !== "grupales") return tripGroupValue;
  const n = Number.parseInt(values.people ?? "", 10);
  if (!Number.isFinite(n) || n < 1) return tripGroupValue;
  const scale = resolveGroupScale(n);
  if (scale === "semigrupo") return GROUP_VALUE_SEMIGRUPO;
  if (scale === "grupal") return GROUP_VALUE_GRUPAL;
  return tripGroupValue;
}

export function derivePeopleCount(tripId: string, values: Record<string, string>): string | undefined {
  if (tripId === "individuales") return "1";
  if (tripId === "escolares-culturales") {
    const s = Number.parseInt(values.students ?? "0", 10) || 0;
    const c = Number.parseInt(values.chaperones ?? "0", 10) || 0;
    const total = s + c;
    return total > 0 ? String(total) : undefined;
  }
  const p = values.people;
  if (p) return String(Math.max(1, Number.parseInt(p, 10) || 1));
  return undefined;
}
