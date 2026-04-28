"use client";

import React from "react";
import { scrollToSection } from "@/lib/scroll";
import { openWhatsApp } from "@/lib/whatsapp";
import { CONTACT } from "@/lib/contact";
import { useToast } from "@/lib/toast";

export function Footer() {
  const { showToast, ToastComponent } = useToast();

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    showToast("Próximamente: guía de viaje Rumbo Co", "info");
  };

  return (
    <>
      <footer id="contacto" className="bg-cream text-charcoal">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12 md:flex-row md:items-start">
          <div className="space-y-2">
            <button
              type="button"
              onClick={() => scrollToSection("hero", 0)}
              className="font-serif text-2xl tracking-[0.3em] text-charcoal hover:text-terracotta transition"
            >
              RUMBO CO
            </button>
            <p className="text-xs uppercase tracking-[0.5em] text-charcoal/60">Hospitalidad premium · Sierra Tarahumara</p>
          </div>
          <div className="flex flex-1 flex-wrap gap-6 text-sm text-charcoal/70">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Navegación</p>
              <button
                type="button"
                onClick={(e) => handleNavClick(e, "barrancas")}
                className="block text-sm hover:text-terracotta transition"
              >
                Barrancas del Cobre
              </button>
              <button
                type="button"
                onClick={(e) => handleNavClick(e, "paquetes")}
                className="block text-sm hover:text-terracotta transition"
              >
                Paquetes
              </button>
              <button
                type="button"
                onClick={(e) => handleNavClick(e, "rutas")}
                className="block text-sm hover:text-terracotta transition"
              >
                Rutas del Chepe
              </button>
              <button
                type="button"
                onClick={(e) => handleNavClick(e, "grupos")}
                className="block text-sm hover:text-terracotta transition"
              >
                Grupos
              </button>
              <button
                type="button"
                onClick={handleBlogClick}
                className="block text-sm hover:text-terracotta transition"
              >
                Blog
              </button>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Contacto</p>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openWhatsApp("Hola Rumbo Co, quiero más información.");
                }}
                className="block text-sm hover:text-terracotta transition"
              >
                WhatsApp: +52 {CONTACT.whatsAppDisplay}
              </button>
              <a
                href={`tel:+${CONTACT.phoneDigits}`}
                className="block text-sm hover:text-terracotta transition"
              >
                Llamadas: +52 {CONTACT.phoneDisplay}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block text-sm hover:text-terracotta transition"
              >
                Correo: {CONTACT.email}
              </a>
              <a
                href={CONTACT.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-terracotta transition"
              >
                Facebook
              </a>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="block text-sm hover:text-terracotta transition"
              >
                Instagram
              </a>
              <p className="text-sm">Rutas destacadas: Chihuahua, Los Mochis, Creel</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Legal</p>
              <button
                type="button"
                onClick={() => showToast("Página en construcción", "info")}
                className="block text-sm hover:text-terracotta transition"
              >
                Aviso de privacidad
              </button>
              <button
                type="button"
                onClick={() => showToast("Página en construcción", "info")}
                className="block text-sm hover:text-terracotta transition"
              >
                Términos
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-charcoal/10 px-6 py-6 text-xs uppercase tracking-[0.3em] text-charcoal/60">
          © {new Date().getFullYear()} Rumbo Co. Experiencias premium en Barrancas del Cobre y Chepe Express.
        </div>
      </footer>
      <ToastComponent />
    </>
  );
}
