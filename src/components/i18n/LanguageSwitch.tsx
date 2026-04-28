"use client";

import { cn } from "@/lib/cn";
import { useI18n, type SiteLocale } from "@/lib/i18n/context";

const pill =
  "inline-flex h-9 min-w-[2.75rem] items-center justify-center rounded-full px-3 text-xs font-semibold uppercase tracking-[0.14em] transition duration-300";

export function LanguageSwitch({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  const set = (next: SiteLocale) => setLocale(next);

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-ink/15 bg-parchment/95 p-1 shadow-[0_8px_30px_rgba(10,9,8,0.12)] backdrop-blur-md",
        className
      )}
      role="group"
      aria-label={t("lang_aria")}
    >
      <button
        type="button"
        className={cn(pill, locale === "es" ? "bg-ink text-cream" : "text-ink/60 hover:bg-ink/[0.06] hover:text-ink")}
        onClick={() => set("es")}
        aria-pressed={locale === "es"}
      >
        {t("lang_es")}
      </button>
      <button
        type="button"
        className={cn(pill, locale === "en" ? "bg-ink text-cream" : "text-ink/60 hover:bg-ink/[0.06] hover:text-ink")}
        onClick={() => set("en")}
        aria-pressed={locale === "en"}
      >
        {t("lang_en")}
      </button>
    </div>
  );
}

/** Visible en todas las rutas: esquina inferior derecha. */
export function LanguageSwitchFixed() {
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-[2500] sm:bottom-6 sm:right-6">
      <div className="pointer-events-auto">
        <LanguageSwitch />
      </div>
    </div>
  );
}
