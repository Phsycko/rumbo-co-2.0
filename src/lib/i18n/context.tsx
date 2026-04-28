"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { translate } from "./lexicon";
import type { SiteLocale } from "./siteLocale";

export type { SiteLocale };

const STORAGE_KEY = "rumbo-locale";

type I18nContextValue = {
  locale: SiteLocale;
  setLocale: (_next: SiteLocale) => void;
  t: (_key: string, _vars?: Record<string, string | number>) => string;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/** Evita crash si algún subárbol monta antes del provider (dev / límites de RSC). */
const fallbackI18n: I18nContextValue = {
  locale: "es",
  setLocale: () => {},
  t: (key, vars) => translate("es", key, vars)
};

function readStoredLocale(): SiteLocale {
  if (typeof window === "undefined") return "es";
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    if (v === "en" || v === "es") return v;
  } catch {
    /* ignore */
  }
  return "es";
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SiteLocale>("es");

  useEffect(() => {
    setLocaleState(readStoredLocale());
  }, []);

  const setLocale = useCallback((next: SiteLocale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next === "en" ? "en" : "es";
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale === "en" ? "en" : "es";
    }
  }, [locale]);

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => translate(locale, key, vars),
    [locale]
  );

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[i18n] useI18n fuera de LocaleProvider; usando fallback ES.");
    }
    return fallbackI18n;
  }
  return ctx;
}

/** Para componentes que puedan montarse fuera del provider (no debería ocurrir en producción). */
export function useOptionalI18n(): I18nContextValue | null {
  return useContext(I18nContext);
}
