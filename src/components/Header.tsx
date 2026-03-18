"use client";

import React, { useEffect, useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";
import { useExperience } from "@/contexts/ExperienceContext";
import { scrollToSection, scrollToTop } from "@/lib/scroll";
import { useToast } from "@/lib/toast";

const primaryNav = [
  { label: "Barrancas del Cobre", sectionId: "barrancas" },
  { label: "Paquetes", sectionId: "paquetes" },
  { label: "Rutas del Chepe", sectionId: "rutas" }
];

const secondaryNav = [
  { label: "Desde Chihuahua", sectionId: "rutas", filter: "chihuahua" },
  { label: "Desde Los Mochis", sectionId: "rutas", filter: "mochis" },
  { label: "Grupos", sectionId: "grupos" },
  { label: "Contacto", sectionId: "contacto" },
  { label: "Blog", isBlog: true }
];

type ThemeMode = "night" | "day";

export function Header() {
  const { openModal } = useExperience();
  const { showToast, ToastComponent } = useToast();

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, sectionId?: string, filter?: string) => {
    e.preventDefault();
    if (sectionId) {
      scrollToSection(sectionId);
      if (filter) {
        // Disparar evento para filtro
        window.dispatchEvent(new CustomEvent("filter-routes", { detail: { origen: filter } }));
      }
    }
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    showToast("Próximamente: guía de viaje Rumbo Co", "info");
  };
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("night");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("rumbo-theme") as ThemeMode | null;
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.classList.toggle("theme-day", theme === "day");
    document.body.classList.toggle("theme-night", theme === "night");
    window.localStorage.setItem("rumbo-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === "night" ? "day" : "night"));

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-cream/90 shadow-elevated-card"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <button
            type="button"
            onClick={scrollToTop}
            className="font-serif text-2xl tracking-[0.3em] text-charcoal hover:text-terracotta transition"
          >
            RUMBO
            <span className="block text-xs tracking-[0.5em] text-terracotta">CO</span>
          </button>
          <nav className="hidden items-center gap-6 md:flex">
            {primaryNav.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={(e) => handleNavClick(e, item.sectionId)}
                className="group relative font-sans text-[0.7rem] uppercase tracking-[0.35em] text-charcoal/80 transition hover:text-terracotta"
              >
                <span className="absolute left-0 -bottom-2 h-[1px] w-full bg-terracotta scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                <span className="relative">{item.label}</span>
              </button>
            ))}
            <details className="relative">
              <summary className="flex cursor-pointer items-center gap-2 rounded-full border border-charcoal/20 bg-cream/70 px-3 py-2 text-xs uppercase tracking-[0.35em] text-charcoal/70 transition hover:border-terracotta hover:text-terracotta">
                <span>Más</span>
                <span className="inline-flex h-2 w-2 items-center justify-center rounded-full bg-terracotta text-[0.5rem]">›</span>
              </summary>
              <div className="absolute right-0 mt-2 w-52 rounded-2xl border border-charcoal/10 bg-cream p-4 shadow-elevated-card z-50">
                <div className="flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.4em] text-charcoal/70">
                  {secondaryNav.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={(e) => {
                        if (item.isBlog) {
                          handleBlogClick(e);
                        } else {
                          handleNavClick(e, item.sectionId, item.filter);
                        }
                      }}
                      className="text-left block transition hover:text-terracotta"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            </details>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Alternar modo noche y día"
              className="flex items-center gap-1 rounded-full border border-charcoal/20 bg-cream/70 px-3 py-2 text-[0.6rem] uppercase tracking-[0.4em] text-charcoal/70 transition hover:border-terracotta hover:text-terracotta"
            >
              <span className="text-[0.7rem]">{theme === "night" ? "🌙" : "☀️"}</span>
              <span>{theme === "night" ? "Modo noche" : "Modo día"}</span>
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openWhatsApp("Hola, quiero diseñar una experiencia con Rumbo Co para Barrancas del Cobre.");
              }}
              className="text-xs font-semibold uppercase tracking-[0.35em] text-charcoal/70 transition hover:text-terracotta"
            >
              WhatsApp
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openModal(undefined, e.currentTarget);
              }}
              className="rounded-full border border-terracotta bg-terracotta/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-terracotta transition hover:bg-terracotta hover:text-cream"
            >
              Diseñar viaje
            </button>
          </div>
        </div>
      </header>
      <ToastComponent />
    </>
  );
}
