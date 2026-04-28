"use client";

import { useI18n } from "@/lib/i18n/context";

export function GruposSeoStub() {
  const { t } = useI18n();
  return (
    <section className="mx-auto w-full max-w-5xl px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta/80">{t("groups_seo_kicker")}</p>
      <h1 className="mt-4 font-serif text-4xl text-charcoal">{t("groups_seo_title")}</h1>
    </section>
  );
}
