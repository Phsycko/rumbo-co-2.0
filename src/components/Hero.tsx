"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useExperience } from "@/contexts/ExperienceContext";
import { scrollToSection } from "@/lib/scroll";

const routes = ["Chihuahua → Creel → Chihuahua", "Chihuahua → Creel → Los Mochis", "Los Mochis → Creel → Chihuahua"];
const experiences = ["Relax", "Aventura", "Premium", "Cultural"];

export function Hero() {
  const { openModal } = useExperience();
  const [miniForm, setMiniForm] = useState({
    ruta: routes[0],
    fecha: "",
    personas: "2",
    experiencia: experiences[0]
  });

  const handleVerOpciones = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!miniForm.personas || parseInt(miniForm.personas) < 1) {
      alert("Por favor ingresa el número de personas");
      return;
    }
    scrollToSection("paquetes");
    // Disparar evento con filtros
    window.dispatchEvent(new CustomEvent("filter-packages", {
      detail: {
        ruta: miniForm.ruta,
        personas: miniForm.personas,
        experiencia: miniForm.experiencia
      }
    }));
  };
  return (
    <section
      id="hero"
      className="relative min-h-[95vh] overflow-hidden bg-cream text-charcoal"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80 pointer-events-none"
        style={{ backgroundImage: "url('/images/tour_barrancas_cobre_1769123086499.png')" }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-cream/80 via-sand/50 to-beige/80 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 mx-auto flex min-h-[95vh] max-w-6xl flex-col gap-10 px-6 py-24"
      >
        <p className="text-xs uppercase tracking-[0.6em] text-charcoal/50">Experiencias diseñadas con el Chepe</p>
        <div className="space-y-6 max-w-3xl">
          <h1 className="font-serif text-4xl leading-tight text-charcoal md:text-6xl">
            Paquetes a Barrancas del Cobre y Chepe Express desde Chihuahua y Los Mochis
          </h1>
          <p className="font-sans text-lg text-charcoal/70">
            Diseñamos experiencias por Creel, Divisadero y Sierra Tarahumara con hospedaje, tren, tours y traslados incluidos.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                scrollToSection("paquetes");
              }}
              className="rounded-full border border-charcoal/30 px-6 py-2 text-sm uppercase tracking-[0.3em] text-charcoal transition hover:border-terracotta-soft hover:text-terracotta-dark"
            >
              Ver paquetes
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openModal(undefined, e.currentTarget);
              }}
              className="rounded-full bg-terracotta-soft px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-cream transition hover:bg-terracotta-dark"
            >
              Diseñar mi experiencia
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="glass-border flex flex-wrap gap-4 rounded-3xl border border-[#d8d0c6] bg-white/70 p-6 shadow-elevated-card"
        >
          <div className="flex-1 min-w-[140px]">
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Ruta</label>
            <select
              value={miniForm.ruta}
              onChange={(e) => setMiniForm({ ...miniForm, ruta: e.target.value })}
              className="mt-2 w-full rounded-2xl bg-white px-4 py-2 text-sm text-charcoal/80 shadow-inner"
            >
              {routes.map((route) => (
                <option key={route} value={route}>
                  {route}
                </option>
              ))}
            </select>
          </div>
          <div className="flex-1 min-w-[140px]">
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Fechas</label>
            <input
              type="date"
              value={miniForm.fecha}
              onChange={(e) => setMiniForm({ ...miniForm, fecha: e.target.value })}
              className="mt-2 w-full rounded-2xl bg-white px-4 py-2 text-sm text-charcoal placeholder:text-charcoal/40 shadow-inner"
            />
          </div>
          <div className="flex-1 min-w-[120px]">
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Personas</label>
            <input
              type="number"
              min={1}
              value={miniForm.personas}
              onChange={(e) => setMiniForm({ ...miniForm, personas: e.target.value })}
              className="mt-2 w-full rounded-2xl bg-white px-4 py-2 text-sm text-charcoal placeholder:text-charcoal/40 shadow-inner"
            />
          </div>
          <div className="flex-1 min-w-[160px]">
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">Tipo de experiencia</label>
            <select
              value={miniForm.experiencia}
              onChange={(e) => setMiniForm({ ...miniForm, experiencia: e.target.value })}
              className="mt-2 w-full rounded-2xl bg-white px-4 py-2 text-sm text-charcoal placeholder:text-charcoal/40 shadow-inner"
            >
              {experiences.map((exp) => (
                <option key={exp} value={exp}>
                  {exp}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <button
              type="button"
              onClick={handleVerOpciones}
              className="rounded-2xl bg-terracotta px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-cream transition hover:bg-dark-coffee"
            >
              Ver opciones
            </button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
