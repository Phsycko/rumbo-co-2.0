"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/landing/ui/Button";
import { Container } from "@/components/landing/ui/Container";
import { MessageCircle, Sparkles, Menu, X } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { useI18n } from "@/lib/i18n/context";
import { LanguageSwitch } from "@/components/i18n/LanguageSwitch";

const nav = [
  { key: "barrancas", href: "/barrancas-del-cobre" },
  { key: "paquetes", href: "#paquetes" },
  { key: "rutas", href: "#rutas" },
  { key: "chihuahua", href: "/paquetes-desde-chihuahua" },
  { key: "mochis", href: "/paquetes-desde-los-mochis" },
  { key: "grupos", href: "/grupos-barrancas-del-cobre" },
  { key: "blog", href: "/blog" },
  { key: "contacto", href: "#contacto" }
] as const;

export function LandingHeader({
  onOpenWizard
}: {
  onOpenWizard: () => void;
}) {
  const { t } = useI18n();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const whatsappHref = useMemo(
    () =>
      buildWhatsAppUrl(
        "Hola Rumbo Co, quiero diseñar mi viaje a Barrancas del Cobre y Chepe Express con su enfoque de travel design."
      ),
    []
  );

  const onLightSurface = solid;

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-[2000] transition-[background-color,border-color,backdrop-filter] duration-500",
        onLightSurface
          ? "border-b border-ink/8 bg-parchment/95 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
        menuOpen && "border-b border-ink/8 bg-parchment/95 backdrop-blur-md"
      )}
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <Container className="h-[82px]">
        <div className="flex h-full items-center gap-3 sm:gap-5">
          <Link
            href="/"
            className="group inline-flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
            aria-label="Rumbo Co — inicio"
            onClick={() => setMenuOpen(false)}
          >
            <span
              className={cn(
                "inline-flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-cream p-0.5 transition-colors duration-500 sm:h-10 sm:w-10 sm:p-1",
                onLightSurface || menuOpen
                  ? "border-ink/12"
                  : "border-cream/35 backdrop-blur-md"
              )}
            >
              <Image
                src="/brand/rumbo-logo.png"
                alt="Logo Rumbo Co"
                width={512}
                height={512}
                sizes="(max-width: 640px) 36px, 40px"
                quality={100}
                className="h-full w-full rounded-full object-contain object-center"
                priority
              />
            </span>
            <div className="min-w-0 leading-tight">
              <p
                className={cn(
                  "truncate font-serif text-base transition-colors duration-500 sm:text-lg",
                  onLightSurface || menuOpen ? "text-ink" : "text-cream"
                )}
              >
                Rumbo Co
              </p>
              <p
                className={cn(
                  "text-[9px] font-medium uppercase tracking-[0.12em] transition-colors duration-500 sm:text-[10px] sm:tracking-[0.14em]",
                  onLightSurface || menuOpen ? "text-ink/55" : "text-cream/60"
                )}
              >
                {t("header_tagline")}
              </p>
            </div>
          </Link>

          <span
            className={cn(
              "hidden h-8 w-px shrink-0 xl:block",
              onLightSurface || menuOpen ? "bg-ink/12" : "bg-cream/20"
            )}
          />

          <nav
            className={cn(
              "mx-auto hidden flex-1 items-center justify-center rounded-full border px-1.5 py-1 lg:flex",
              onLightSurface || menuOpen
                ? "border-ink/10 bg-parchment/70"
                : "border-cream/20 bg-cream/[0.07] backdrop-blur-md"
            )}
            aria-label="Navegación principal"
          >
            {nav.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 py-2 text-[11px] font-medium tracking-[0.01em] transition-all duration-300 xl:px-3",
                  onLightSurface
                    ? "text-ink/70 hover:bg-ink/[0.06] hover:text-ink"
                    : "text-cream/80 hover:bg-cream/[0.14] hover:text-cream"
                )}
              >
                {t(`nav_${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-2.5">
            <div
              className={cn(
                "hidden md:block",
                onLightSurface || menuOpen ? "[&_button]:text-ink" : "[&_button]:text-ink [&_.rounded-full]:border-cream/25"
              )}
            >
              <LanguageSwitch
                className={cn(
                  "border shadow-md",
                  !(onLightSurface || menuOpen) && "border-cream/25 bg-ink/35 backdrop-blur-md [&_button]:text-cream/90"
                )}
              />
            </div>
            <button
              type="button"
              className={cn(
                "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden",
                onLightSurface || menuOpen
                  ? "border-ink/15 text-ink hover:bg-ink/[0.04]"
                  : "border-cream/25 text-cream hover:bg-cream/10"
              )}
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? t("header_menu_close") : t("header_menu_open")}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Button
              variant="outline"
              className={cn(
                "inline-flex px-3.5 sm:px-6",
                !onLightSurface &&
                  !menuOpen &&
                  "border-cream/25 text-cream hover:border-cream/40 hover:bg-cream/10 hover:text-cream"
              )}
              onClick={() => {
                setMenuOpen(false);
                onOpenWizard();
              }}
            >
              <Sparkles className="h-4 w-4" />
              <span className="hidden min-[400px]:inline">{t("header_atelier")}</span>
            </Button>

            <a href={whatsappHref} target="_blank" rel="noreferrer" className="shrink-0">
              <Button variant={onLightSurface || menuOpen ? "primary" : "secondary"}>
                <MessageCircle className="h-4 w-4" />
                <span className="hidden md:inline">{t("header_whatsapp")}</span>
              </Button>
            </a>
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            key="menu-movil"
            id="menu-movil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-ink/10 bg-parchment lg:hidden"
          >
            <Container className="max-h-[min(70vh,520px)] overflow-y-auto py-4">
              <div className="mb-4 flex justify-end">
                <LanguageSwitch />
              </div>
              <nav className="flex flex-col" aria-label="Navegación móvil">
                {nav.map((item) => (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="border-b border-ink/8 py-3.5 text-sm font-medium text-ink transition hover:bg-ink/[0.03]"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t(`nav_${item.key}`)}
                  </Link>
                ))}
                <button
                  type="button"
                  className="mt-4 w-full border border-ink/15 py-3 text-left text-sm font-medium text-ink"
                  onClick={() => {
                    setMenuOpen(false);
                    onOpenWizard();
                  }}
                >
                  {t("header_mobile_atelier")}
                </button>
              </nav>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
