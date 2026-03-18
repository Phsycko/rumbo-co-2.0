"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { featuredRoutes } from "@/data/experience-data";
import { useExperience } from "@/contexts/ExperienceContext";

export function RoutesSection() {
  const { openModal } = useExperience();
  const [filteredOrigin, setFilteredOrigin] = useState<string | null>(null);

  useEffect(() => {
    const handleFilter = (event: Event) => {
      const customEvent = event as CustomEvent;
      const origen = customEvent.detail?.origen;
      if (origen === "chihuahua" || origen === "mochis") {
        setFilteredOrigin(origen === "chihuahua" ? "Chihuahua" : "Los Mochis");
      } else {
        setFilteredOrigin(null);
      }
    };

    window.addEventListener("filter-routes", handleFilter);
    return () => {
      window.removeEventListener("filter-routes", handleFilter);
    };
  }, []);

  const getRouteOrigin = (title: string): string | null => {
    if (title.includes("Chihuahua") && title.indexOf("Chihuahua") < title.indexOf("→")) {
      return "Chihuahua";
    }
    if (title.includes("Los Mochis") && title.indexOf("Los Mochis") < title.indexOf("→")) {
      return "Los Mochis";
    }
    return null;
  };

  const filteredRoutes = filteredOrigin
    ? featuredRoutes.filter((route) => getRouteOrigin(route.title) === filteredOrigin)
    : featuredRoutes;

  return (
    <section id="rutas" className="relative mx-auto max-w-6xl space-y-8 px-6 py-16 bg-white/60">
      <div className="space-y-2 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-charcoal/50">Rutas más buscadas</p>
        <h2 className="font-serif text-3xl text-charcoal">Caminos vivos por las Barrancas</h2>
        <p className="text-base text-charcoal/70">
          Cada ruta cuenta con storytelling, vistas únicas y asistencia premium desde la selección del tren.
        </p>
        {filteredOrigin && (
          <div className="flex items-center justify-center gap-2 pt-2">
            <p className="text-sm text-terracotta">Mostrando rutas desde {filteredOrigin}</p>
            <button
              type="button"
              onClick={() => setFilteredOrigin(null)}
              className="text-xs text-charcoal/60 hover:text-terracotta underline"
            >
              Limpiar filtro
            </button>
          </div>
        )}
      </div>
      <AnimatePresence mode="wait">
        <div key={filteredOrigin || "all"} className="grid gap-6 md:grid-cols-2">
          {filteredRoutes.map((route) => (
            <motion.article
              key={route.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-3xl bg-white shadow-elevated-card"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64">
                <Image
                  src={route.image}
                  alt={route.title}
                  fill
                  className="object-cover transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#f5f1eb]/50 via-[#ede6dc]/60 to-transparent" />
              </div>
              <div className="space-y-2 px-6 py-6">
                <p className="text-xs uppercase tracking-[0.4em] text-charcoal/50">{route.duration}</p>
                <h3 className="font-serif text-2xl text-charcoal">{route.title}</h3>
                <p className="text-sm text-charcoal/70">{route.description}</p>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const origen = getRouteOrigin(route.title);
                    const buttonElement = e.currentTarget;
                    openModal({ origen: origen || undefined, ruta: route.title, duracion: route.duration }, buttonElement);
                  }}
                  className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-terracotta transition hover:text-dark-coffee"
                >
                  Diseñar esta ruta
                  <span className="h-[1px] w-8 bg-terracotta" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </AnimatePresence>
    </section>
  );
}
