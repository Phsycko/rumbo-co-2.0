"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { cn } from "@/lib/cn";
import { useI18n } from "@/lib/i18n/context";
import {
  addMonths,
  formatTripDate,
  getCalendarDays,
  isBeforeDay,
  isBetweenDays,
  isSameDay,
  parseIsoDate,
  startOfMonth,
  toIsoDate,
  type TripDateRange
} from "@/lib/tripDates";

type TripDateRangePickerProps = {
  value: TripDateRange;
  onChange: (_value: TripDateRange) => void;
  variant?: "default" | "hero";
  className?: string;
};

const WEEKDAY_KEYS = ["date_week_mon", "date_week_tue", "date_week_wed", "date_week_thu", "date_week_fri", "date_week_sat", "date_week_sun"] as const;

function MonthGrid({
  month,
  minDate,
  value,
  picking,
  onPick,
  variant
}: {
  month: Date;
  minDate: Date;
  value: TripDateRange;
  picking: "departure" | "return";
  onPick: (_day: Date) => void;
  variant: "default" | "hero";
}) {
  const { t, locale } = useI18n();
  const dep = value.departure ? parseIsoDate(value.departure) : null;
  const ret = value.return ? parseIsoDate(value.return) : null;
  const days = getCalendarDays(month);
  const monthLabel = new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-MX", {
    month: "long",
    year: "numeric"
  }).format(month);

  return (
    <div className="min-w-[240px] flex-1">
      <p
        className={cn(
          "mb-3 text-center text-sm font-medium capitalize",
          variant === "hero" ? "text-cream/90" : "text-ink"
        )}
      >
        {monthLabel}
      </p>
      <div className="grid grid-cols-7 gap-0.5 text-center">
        {WEEKDAY_KEYS.map((key) => (
          <span
            key={key}
            className={cn(
              "py-1 text-[10px] font-semibold uppercase tracking-[0.08em]",
              variant === "hero" ? "text-cream/45" : "text-ink/40"
            )}
          >
            {t(key)}
          </span>
        ))}
        {days.map((day, idx) => {
          if (!day) {
            return <span key={`empty-${idx}`} className="h-9" aria-hidden />;
          }
          const disabled = isBeforeDay(day, minDate);
          const isDep = dep && isSameDay(day, dep);
          const isRet = ret && isSameDay(day, ret);
          const inRange = dep && ret && isBetweenDays(day, dep, ret);
          const isStart = isDep;
          const isEnd = isRet;

          return (
            <button
              key={toIsoDate(day)}
              type="button"
              disabled={disabled}
              onClick={() => onPick(day)}
              className={cn(
                "relative h-9 w-full text-sm transition",
                disabled && "cursor-not-allowed opacity-30",
                !disabled && (variant === "hero" ? "hover:bg-cream/15" : "hover:bg-copper/10"),
                inRange && (variant === "hero" ? "bg-copper/25 text-cream" : "bg-copper/15 text-ink"),
                (isStart || isEnd) &&
                  (variant === "hero"
                    ? "bg-copper text-cream font-semibold"
                    : "bg-copper text-cream font-semibold"),
                picking === "departure" && !value.departure && !disabled && "ring-1 ring-inset ring-copper/40",
                !isStart && !isEnd && !inRange && (variant === "hero" ? "text-cream/85" : "text-ink/80")
              )}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function TripDateRangePicker({
  value,
  onChange,
  variant = "default",
  className
}: TripDateRangePickerProps) {
  const { t, locale } = useI18n();
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [picking, setPicking] = useState<"departure" | "return">("departure");
  const [viewMonth, setViewMonth] = useState(() => startOfMonth(new Date()));

  const minDate = useMemo(() => {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), 12);
  }, []);

  const secondMonth = useMemo(() => addMonths(viewMonth, 1), [viewMonth]);

  useEffect(() => {
    if (!open) return;
    const first = value.departure ? parseIsoDate(value.departure) : null;
    if (first) setViewMonth(startOfMonth(first));
  }, [open, value.departure]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const handlePick = (day: Date) => {
    const iso = toIsoDate(day);
    if (picking === "departure") {
      const next: TripDateRange = { departure: iso, return: "" };
      if (value.return) {
        const ret = parseIsoDate(value.return);
        if (ret && isBeforeDay(ret, day)) next.return = "";
        else next.return = value.return;
      }
      onChange(next);
      setPicking("return");
      return;
    }
    const dep = value.departure ? parseIsoDate(value.departure) : null;
    if (dep && isBeforeDay(day, dep)) {
      onChange({ departure: iso, return: "" });
      setPicking("return");
      return;
    }
    onChange({ departure: value.departure, return: iso });
    setOpen(false);
    setPicking("departure");
  };

  const openPicker = (field: "departure" | "return") => {
    setPicking(field);
    setOpen(true);
  };

  const triggerShell =
    variant === "hero"
      ? "border-cream/30 bg-ink/45"
      : "border-ink/12 bg-cream/90";

  const triggerText = variant === "hero" ? "text-cream/90" : "text-ink";
  const placeholderText = variant === "hero" ? "text-cream/50" : "text-ink/35";

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <div
        className={cn(
          "grid grid-cols-2 divide-x",
          triggerShell,
          variant === "hero" ? "divide-cream/20" : "divide-ink/10"
        )}
      >
        <button
          type="button"
          id={`${id}-departure`}
          aria-expanded={open && picking === "departure"}
          aria-haspopup="dialog"
          onClick={() => openPicker("departure")}
          className={cn(
            "flex min-h-[44px] flex-col items-start px-3 py-2.5 text-left transition",
            variant === "hero" ? "hover:bg-ink/55" : "hover:bg-parchment"
          )}
        >
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.14em]",
              variant === "hero" ? "text-copper/90" : "text-copper-dim"
            )}
          >
            {t("date_picker_departure")}
          </span>
          <span className={cn("mt-0.5 text-sm", value.departure ? triggerText : placeholderText)}>
            {value.departure ? formatTripDate(value.departure, locale) : t("date_picker_placeholder")}
          </span>
        </button>
        <button
          type="button"
          id={`${id}-return`}
          aria-expanded={open && picking === "return"}
          aria-haspopup="dialog"
          onClick={() => openPicker("return")}
          className={cn(
            "flex min-h-[44px] flex-col items-start px-3 py-2.5 text-left transition",
            variant === "hero" ? "hover:bg-ink/55" : "hover:bg-parchment"
          )}
        >
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-[0.14em]",
              variant === "hero" ? "text-copper/90" : "text-copper-dim"
            )}
          >
            {t("date_picker_return")}
          </span>
          <span className={cn("mt-0.5 text-sm", value.return ? triggerText : placeholderText)}>
            {value.return ? formatTripDate(value.return, locale) : t("date_picker_placeholder")}
          </span>
        </button>
      </div>

      {open ? (
        <div
          role="dialog"
          aria-labelledby={`${id}-departure`}
          className={cn(
            "absolute left-0 right-0 z-[50] mt-2 border shadow-[0_24px_64px_rgba(10,9,8,0.18)] sm:left-auto sm:right-0 sm:min-w-[520px]",
            variant === "hero" ? "border-cream/20 bg-ink" : "border-ink/12 bg-parchment"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between gap-3 border-b px-4 py-3",
              variant === "hero" ? "border-cream/15" : "border-ink/8"
            )}
          >
            <div className="flex items-center gap-2">
              <Calendar className={cn("h-4 w-4", variant === "hero" ? "text-copper" : "text-copper-dim")} />
              <p className={cn("text-sm", variant === "hero" ? "text-cream/90" : "text-ink/75")}>
                {picking === "departure" ? t("date_picker_hint_departure") : t("date_picker_hint_return")}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                aria-label={t("date_picker_prev_month")}
                onClick={() => setViewMonth((m) => addMonths(m, -1))}
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border transition",
                  variant === "hero"
                    ? "border-cream/20 text-cream/80 hover:bg-cream/10"
                    : "border-ink/12 text-ink/60 hover:bg-cream"
                )}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                aria-label={t("date_picker_next_month")}
                onClick={() => setViewMonth((m) => addMonths(m, 1))}
                className={cn(
                  "inline-flex h-8 w-8 items-center justify-center rounded-full border transition",
                  variant === "hero"
                    ? "border-cream/20 text-cream/80 hover:bg-cream/10"
                    : "border-ink/12 text-ink/60 hover:bg-cream"
                )}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4 p-4 sm:flex-row">
            <MonthGrid
              month={viewMonth}
              minDate={minDate}
              value={value}
              picking={picking}
              onPick={handlePick}
              variant={variant}
            />
            <MonthGrid
              month={secondMonth}
              minDate={minDate}
              value={value}
              picking={picking}
              onPick={handlePick}
              variant={variant}
            />
          </div>

          <div
            className={cn(
              "flex flex-wrap items-center justify-between gap-2 border-t px-4 py-3",
              variant === "hero" ? "border-cream/15" : "border-ink/8"
            )}
          >
            <button
              type="button"
              className={cn(
                "text-xs font-medium uppercase tracking-[0.12em] underline-offset-2 hover:underline",
                variant === "hero" ? "text-cream/60" : "text-ink/50"
              )}
              onClick={() => {
                onChange({ departure: "", return: "" });
                setPicking("departure");
              }}
            >
              {t("date_picker_clear")}
            </button>
            <button
              type="button"
              className={cn(
                "text-xs font-semibold uppercase tracking-[0.12em]",
                variant === "hero" ? "text-copper" : "text-copper-dim"
              )}
              onClick={() => setOpen(false)}
            >
              {t("date_picker_done")}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
