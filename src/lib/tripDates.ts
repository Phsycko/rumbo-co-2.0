import type { SiteLocale } from "@/lib/i18n/siteLocale";

export type TripDateRange = {
  departure: string;
  return: string;
};

export function emptyTripDateRange(): TripDateRange {
  return { departure: "", return: "" };
}

export function toIsoDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function parseIsoDate(value: string): Date | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const parsed = new Date(`${value}T12:00:00`);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1, 12);
}

export function addMonths(date: Date, count: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + count, 1, 12);
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isBeforeDay(a: Date, b: Date): boolean {
  const da = new Date(a.getFullYear(), a.getMonth(), a.getDate());
  const db = new Date(b.getFullYear(), b.getMonth(), b.getDate());
  return da.getTime() < db.getTime();
}

export function isBetweenDays(day: Date, start: Date, end: Date): boolean {
  const d = new Date(day.getFullYear(), day.getMonth(), day.getDate()).getTime();
  const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
  const e = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
  return d > s && d < e;
}

export function formatTripDate(iso: string, locale: SiteLocale): string {
  const parsed = parseIsoDate(iso);
  if (!parsed) return iso;
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-MX", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric"
  }).format(parsed);
}

export function formatTripDateRange(range: TripDateRange, locale: SiteLocale): string {
  if (!range.departure && !range.return) return "";
  if (range.departure && range.return) {
    return `${formatTripDate(range.departure, locale)} → ${formatTripDate(range.return, locale)}`;
  }
  if (range.departure) return formatTripDate(range.departure, locale);
  return formatTripDate(range.return, locale);
}

/** Texto compacto para WhatsApp y formularios legacy */
export function tripDateRangeToLegacyString(range: TripDateRange): string {
  if (!range.departure && !range.return) return "";
  if (range.departure && range.return) return `${range.departure} → ${range.return}`;
  return range.departure || range.return;
}

export function legacyStringToTripDateRange(value: string): TripDateRange {
  const trimmed = value.trim();
  if (!trimmed) return emptyTripDateRange();
  const parts = trimmed.split(/\s*→\s*|\s*–\s*|\s*-\s*/);
  if (parts.length >= 2) {
    return { departure: parts[0].trim(), return: parts[1].trim() };
  }
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return { departure: trimmed, return: "" };
  }
  return { departure: trimmed, return: "" };
}

export function getCalendarDays(month: Date): (Date | null)[] {
  const first = startOfMonth(month);
  const startPad = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
  const cells: (Date | null)[] = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push(new Date(first.getFullYear(), first.getMonth(), d, 12));
  }
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}
