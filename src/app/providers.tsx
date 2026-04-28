"use client";

import type { ReactNode } from "react";
import { LocaleProvider } from "@/lib/i18n/context";
import { LanguageSwitchFixed } from "@/components/i18n/LanguageSwitch";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      {children}
      <LanguageSwitchFixed />
    </LocaleProvider>
  );
}
