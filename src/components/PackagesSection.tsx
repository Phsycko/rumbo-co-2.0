"use client";

import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chepeClasses, packageDurations } from "@/data/experience-data";
import { openWhatsApp } from "@/lib/whatsapp";
import { PackageDetailModal } from "./PackageDetailModal";

const durationDescriptions = {
  "4 días · 3 noches": "Introducción premium, ideal para un primer encuentro con la Sierra.",
  "5 días · 4 noches": "Espacio ideal para sumar experiencias culturales y miradores exclusivos.",
  "6 días · 5 noches": "Recorrido completo para quienes buscan inmersión y descanso prolongado."
};

export function PackagesSection() {
  const [selectedDuration, setSelectedDuration] = useState<string>(packageDurations[0].label);
  const [selectedClass, setSelectedClass] = useState<string>(chepeClasses[1].label);
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [selectedPackageData, setSelectedPackageData] = useState<any>(null);

  useEffect(() => {
    const handleFilter = (event: Event) => {
      const customEvent = event as CustomEvent;
      const { ruta, personas, experiencia } = customEvent.detail || {};
      // Aquí podrías aplicar filtros visuales o mostrar un mensaje
      if (ruta || personas || experiencia) {
        // Scroll ya se hizo en Hero, solo mostramos que se aplicaron filtros
        console.log("Filtros aplicados:", { ruta, personas, experiencia });
      }
    };

    window.addEventListener("filter-packages", handleFilter);
    return () => {
      window.removeEventListener("filter-packages", handleFilter);
    };
  }, []);

  const currentClass = useMemo(
    () => chepeClasses.find((item) => item.label === selectedClass),
    [selectedClass]
  );

  const handleOpenDetailModal = () => {
    setSelectedPackageData({
      duration: selectedDuration,
      clase: selectedClass,
      badge: currentClass?.badge,
      perks: currentClass?.perks || []
    });
    setDetailModalOpen(true);
  };

  return (
    <section
      id="paquetes"
      className="relative mx-auto max-w-6xl space-y-10 px-6 py-16 bg-white/60"
    >
      <div className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-charcoal/50">Paquetes estándar</p>
        <h2 className="font-serif text-3xl text-charcoal">Duraciones curadas, clases del Chepe y servicio premium.</h2>
        <p className="text-base text-charcoal/70">
          Elige la duración, selecciona la clase del Chepe Express y descubre el nivel de detalle que te acompañará.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {packageDurations.map((duration) => (
          <button
            key={duration.label}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSelectedDuration(duration.label);
            }}
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.4em] transition ${
              selectedDuration === duration.label
                ? "border-terracotta bg-terracotta/15 text-terracotta"
                : "border-charcoal/30 text-charcoal/70 hover:border-terracotta"
            }`}
          >
            {duration.label}
          </button>
        ))}
      </div>
      <p className="text-center text-sm text-charcoal/60">{durationDescriptions[selectedDuration as keyof typeof durationDescriptions]}</p>
      <div className="flex flex-col gap-6 rounded-3xl border border-charcoal/10 bg-cream p-6 shadow-elevated-card md:flex-row">
        <div className="flex-1 space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">Clases del Chepe</p>
          <div className="flex flex-wrap gap-3">
            {chepeClasses.map((item) => {
              const isChepeClass = item.label.includes("Chepe Express");
              const isSelected = selectedClass === item.label;
              return (
                <motion.button
                  key={item.label}
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedClass(item.label);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 min-w-[140px] rounded-2xl border px-4 py-3 text-left text-sm transition ${
                    isSelected
                      ? "border-terracotta bg-terracotta/15 text-terracotta shadow-md"
                      : "border-charcoal/20 text-charcoal/70 hover:border-terracotta"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">{item.badge}</p>
                  <p className="font-serif text-lg text-charcoal">{item.label}</p>
                  {isSelected && isChepeClass && (
                    <motion.div
                      className="mt-2 h-1 w-full rounded-full bg-terracotta/30 overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <motion.div
                        className="h-full bg-gradient-to-r from-terracotta to-soft-gold"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">Qué incluye</p>
            <ul className="list-disc space-y-1 pl-4 text-sm text-charcoal/70">
              {currentClass?.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex-1 space-y-5 border-l border-charcoal/10 pl-6 md:border-l">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedClass}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.5em] text-charcoal/60">Resumen</p>
                <span className="text-xs uppercase tracking-[0.5em] text-terracotta">{selectedDuration}</span>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-glow-soft">
                <div className="mb-4">
                  <div className="h-2 w-full rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-terracotta to-dark-coffee"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.8, ease: "easeInOut" }}
                    />
                  </div>
                  <p className="mt-2 text-xs uppercase tracking-[0.5em] text-charcoal/60">Tu viaje empieza aquí</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm text-charcoal/80">
                    Clase seleccionada: <span className="font-semibold text-charcoal">{selectedClass}</span>
                  </p>
                  <p className="text-xs uppercase tracking-[0.4em] text-charcoal/60">Animación temática Chepe</p>
                  <div className="relative h-12 overflow-hidden rounded-2xl bg-sand/30">
                    <motion.div
                      className="absolute left-0 top-1/2 h-0.5 w-full bg-charcoal/30"
                      animate={{ x: ["-110%", "110%"] }}
                      transition={{ repeat: Infinity, ease: "linear", duration: 4 }}
                    />
                    <motion.div
                      className="absolute left-0 top-1/2 h-1.5 w-16 rounded-full bg-terracotta"
                      animate={{ x: ["-10%", "110%"] }}
                      transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                    />
                  </div>
                </div>
              </div>
                <div className="flex flex-col gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleOpenDetailModal();
                    }}
                    className="rounded-2xl bg-terracotta px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-cream transition hover:bg-dark-coffee"
                  >
                    Ver detalles
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openWhatsApp(
                        `Hola Rumbo Co, quiero cotizar el paquete ${selectedDuration} en ${selectedClass}.`
                      );
                    }}
                    className="rounded-2xl border border-charcoal/30 px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-charcoal transition hover:border-terracotta"
                  >
                    Cotizar ahora
                  </button>
                </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="rounded-3xl border border-charcoal/10 bg-white p-6 text-sm text-charcoal/70">
        <p>
          Cada clase del Chepe encapsula una narrativa: suave para relajarte, ejecutiva para experiencias sociales y primera para un viaje privado. Selecciona tu combinación y activa la animación temática del tren.
        </p>
      </div>
      {selectedPackageData && (
        <PackageDetailModal
          isOpen={detailModalOpen}
          onClose={() => {
            setDetailModalOpen(false);
            setSelectedPackageData(null);
          }}
          packageData={selectedPackageData}
        />
      )}
    </section>
  );
}
