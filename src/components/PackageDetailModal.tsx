"use client";

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import { useExperience } from "@/contexts/ExperienceContext";

interface PackageDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: {
    duration: string;
    clase: string;
    badge?: string;
    perks: string[];
  };
}

export function PackageDetailModal({ isOpen, onClose, packageData }: PackageDetailModalProps) {
  const { openModal } = useExperience();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  if (!mounted || !isOpen) return null;

  const portalTarget = typeof document !== "undefined" ? document.body : null;
  if (!portalTarget) return null;

  const whatsappMessage = `Hola, quiero cotizar el paquete ${packageData.duration} Chepe Express ${packageData.clase} de Rumbo Co.`;

  const modal = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <div
        className="relative z-[10000] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
        style={{ position: 'relative', margin: 'auto', maxHeight: '90vh' }}
      >
        <div className="p-8">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 rounded-full bg-white border-2 border-charcoal/20 px-4 py-2 text-sm font-bold text-charcoal hover:bg-terracotta hover:text-cream hover:border-terracotta transition"
          >
            ✕
          </button>

          <div className="space-y-6">
            <div>
              {packageData.badge && (
                <p className="text-xs uppercase tracking-[0.5em] text-terracotta mb-2">{packageData.badge}</p>
              )}
              <h3 className="font-serif text-3xl font-bold text-charcoal mb-2">
                Paquete {packageData.duration}
              </h3>
              <p className="text-lg text-charcoal/80 font-semibold">{packageData.clase}</p>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-charcoal/60">Qué incluye:</p>
              <ul className="space-y-2">
                {packageData.perks.map((perk, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-charcoal/80">
                    <span className="text-terracotta mt-1">✓</span>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-charcoal/10">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openModal({ duracion: packageData.duration, clase: packageData.clase }, e.currentTarget);
                  onClose();
                }}
                className="flex-1 rounded-2xl bg-terracotta px-6 py-4 text-sm font-bold uppercase tracking-[0.3em] text-cream hover:bg-terracotta-dark transition shadow-lg"
              >
                Quiero este paquete
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openModal({ duracion: packageData.duration, clase: packageData.clase }, e.currentTarget);
                  onClose();
                }}
                className="flex-1 rounded-2xl border-2 border-terracotta bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.3em] text-terracotta hover:bg-terracotta/5 transition"
              >
                Diseñar una variante
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openWhatsApp(whatsappMessage);
                }}
                className="flex-1 rounded-2xl border-2 border-charcoal/30 bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal hover:border-terracotta transition"
              >
                Cotizar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, portalTarget);
}
