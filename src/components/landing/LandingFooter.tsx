"use client";

import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Container } from "@/components/landing/ui/Container";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/contact";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitch } from "@/components/i18n/LanguageSwitch";

const linkUnderline =
  "border-b border-copper/40 pb-0.5 transition hover:border-copper";

const columnDefs = [
  {
    titleKey: "footer_col_nav",
    links: [
      { labelKey: "footer_link_inicio", href: "/" },
      { labelKey: "footer_link_paquetes", href: "/#paquetes" },
      { labelKey: "footer_link_rutas", href: "/#rutas" },
      { labelKey: "footer_link_grupos", href: "/grupos-barrancas-del-cobre" },
      { labelKey: "footer_link_contacto", href: "/#contacto" }
    ]
  },
  {
    titleKey: "footer_col_rutas",
    links: [
      { labelKey: "footer_link_chih", href: "/paquetes-desde-chihuahua" },
      { labelKey: "footer_link_mochis", href: "/paquetes-desde-los-mochis" },
      { labelKey: "footer_link_chepe", href: "/chepe-express" },
      { labelKey: "footer_link_barrancas", href: "/barrancas-del-cobre" }
    ]
  },
  {
    titleKey: "footer_col_explore",
    links: [
      { labelKey: "footer_link_paquetes_b", href: "/paquetes-barrancas-del-cobre" },
      { labelKey: "footer_link_creel", href: "/barrancas-del-cobre#barrancas-del-cobre" },
      { labelKey: "nav_blog", href: "/blog" }
    ]
  }
] as const;

export function LandingFooter() {
  const { t } = useI18n();
  const wa = buildWhatsAppUrl(
    "Hola Rumbo Co, busco orientación para un viaje a Barrancas del Cobre y Chepe Express."
  );
  const telHref = `tel:+${CONTACT.phoneDigits}`;

  const columns = useMemo(
    () =>
      columnDefs.map((c) => ({
        title: t(c.titleKey),
        links: c.links.map((l) => ({ label: t(l.labelKey), href: l.href }))
      })),
    [t]
  );

  return (
    <footer id="contacto" className="relative overflow-hidden border-t border-cream/10 bg-ink py-16 text-cream">
      <div className="pointer-events-none absolute inset-0 bg-grain-dark opacity-30 mix-blend-overlay" />
      <Container className="relative">
        <div className="mb-8 flex justify-end lg:absolute lg:right-5 lg:top-0 lg:mb-0">
          <LanguageSwitch className="border-cream/25 bg-ink/55 [&_button]:text-cream/90 [&_button]:aria-pressed]:bg-cream [&_button]:aria-pressed]:text-ink" />
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-cream/20 bg-cream p-0.5">
                <Image
                  src="/brand/rumbo-logo.png"
                  alt="Logo Rumbo Co"
                  width={512}
                  height={512}
                  sizes="48px"
                  quality={100}
                  className="h-full w-full rounded-full object-contain object-center"
                />
              </span>
              <div>
                <p className="font-serif text-2xl text-cream">Rumbo Co</p>
                <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-cream/45">
                  Travel design · Barrancas · Chepe
                </p>
              </div>
            </Link>

            <div className="mt-8 space-y-4 text-sm text-cream/65">
              <p>
                <span className="text-cream/90">{t("footer_whatsapp")}</span>
                <br />
                <a className={linkUnderline} href={wa} target="_blank" rel="noreferrer">
                  {CONTACT.whatsAppDisplay} — {t("footer_wa_cta")}
                </a>
              </p>
              <p>
                <span className="text-cream/90">{t("footer_llamadas")}</span>
                <br />
                <a className={linkUnderline} href={telHref}>
                  {CONTACT.phoneDisplay}
                </a>
              </p>
              <p>
                <span className="text-cream/90">{t("footer_correo")}</span>
                <br />
                <a className={linkUnderline} href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </p>
              <div className="flex items-center gap-4 pt-1">
                <a
                  href={CONTACT.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cream/80 transition hover:text-cream"
                  aria-label="Rumbo Co en Facebook"
                >
                  <Facebook className="h-5 w-5 shrink-0" aria-hidden />
                  <span className="text-xs uppercase tracking-[0.12em]">Facebook</span>
                </a>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-cream/80 transition hover:text-cream"
                  aria-label="Rumbo Co en Instagram"
                >
                  <Instagram className="h-5 w-5 shrink-0" aria-hidden />
                  <span className="text-xs uppercase tracking-[0.12em]">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-cream/40">{c.title}</p>
              <ul className="mt-5 space-y-3 text-sm">
                {c.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link className="text-cream/65 transition hover:text-cream" href={l.href}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-10 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Rumbo Co. {t("footer_rights")}
          </p>
          <div className="flex items-center gap-8">
            <Link className="transition hover:text-cream" href="/aviso-de-privacidad">
              {t("footer_privacy")}
            </Link>
            <Link className="transition hover:text-cream" href="/terminos">
              {t("footer_terms")}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
