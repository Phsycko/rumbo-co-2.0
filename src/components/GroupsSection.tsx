"use client";

import React, { useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";
import { useToast } from "@/lib/toast";

export function GroupsSection() {
  const { showToast, ToastComponent } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    whatsapp: "",
    correo: "",
    personas: "",
    ciudad: "",
    fechas: "",
    tipoGrupo: "Amigos",
    comentarios: ""
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validación
    if (!formData.nombre.trim()) {
      showToast("Por favor ingresa tu nombre", "error");
      return;
    }
    
    if (!formData.personas || parseInt(formData.personas) < 1) {
      showToast("Por favor ingresa el número de personas", "error");
      return;
    }
    
    if (!formData.whatsapp.trim() && !formData.correo.trim()) {
      showToast("Por favor ingresa WhatsApp o correo electrónico", "error");
      return;
    }

    // Construir mensaje
    const message = `Hola Rumbo Co, quiero cotizar un viaje grupal premium.

Nombre: ${formData.nombre}
${formData.whatsapp ? `WhatsApp: ${formData.whatsapp}` : ""}
${formData.correo ? `Correo: ${formData.correo}` : ""}
Personas: ${formData.personas}
Ciudad de salida: ${formData.ciudad || "Por definir"}
Fechas aproximadas: ${formData.fechas || "Por definir"}
Tipo de grupo: ${formData.tipoGrupo}
${formData.comentarios ? `Comentarios: ${formData.comentarios}` : ""}`;

    openWhatsApp(message);
    showToast("Redirigiendo a WhatsApp...", "success");
    
    // Reset form
    setFormData({
      nombre: "",
      whatsapp: "",
      correo: "",
      personas: "",
      ciudad: "",
      fechas: "",
      tipoGrupo: "Amigos",
      comentarios: ""
    });
  };

  return (
    <section id="grupos" className="relative mx-auto max-w-6xl space-y-8 px-6 py-16 bg-beige/80">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.5em] text-charcoal/60">Viajes grupales personalizados</p>
          <h2 className="font-serif text-3xl text-charcoal">
            Diseñamos viajes grupales a Barrancas del Cobre con logística, hospedaje, tren, tours y atención personalizada.
          </h2>
          <p className="text-sm text-charcoal/70">
            Para empresas, escuelas, celebraciones privadas o grupos de amigos que buscan un viaje exclusivo. Ajustamos rutas, servicios y comunicación.
          </p>
          <p className="text-xs uppercase tracking-[0.3em] text-charcoal/60">Sin precios públicos · Propuesta privada · WhatsApp inmediato</p>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openWhatsApp("Hola Rumbo Co, quiero diseñar una ruta grupal premium.");
            }}
            className="rounded-2xl bg-terracotta px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-cream transition hover:bg-dark-coffee"
          >
            Hablar por WhatsApp
          </button>
        </div>
        <div className="rounded-3xl border border-charcoal/10 bg-white p-6 shadow-elevated-card">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 text-sm text-charcoal/70"
          >
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              Nombre *
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                required
                className="mt-1 w-full rounded-2xl border border-charcoal/20 bg-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40"
                placeholder="Tu nombre completo"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              WhatsApp
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-charcoal/20 bg-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40"
                placeholder="+52 55 1234 5678"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              Correo
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-charcoal/20 bg-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40"
                placeholder="tu@correo.com"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              Número de personas *
              <input
                type="number"
                name="personas"
                min="1"
                value={formData.personas}
                onChange={(e) => setFormData({ ...formData, personas: e.target.value })}
                required
                className="mt-1 w-full rounded-2xl border border-charcoal/20 bg-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40"
                placeholder="Ej: 10"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              Ciudad de salida
              <input
                type="text"
                name="ciudad"
                value={formData.ciudad}
                onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-charcoal/20 bg-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40"
                placeholder="Chihuahua, Los Mochis, etc."
              />
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              Fechas aproximadas
              <input
                type="text"
                name="fechas"
                value={formData.fechas}
                onChange={(e) => setFormData({ ...formData, fechas: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-charcoal/20 bg-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40"
                placeholder="Ej: Marzo 2024"
              />
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              Tipo de grupo
              <select
                value={formData.tipoGrupo}
                onChange={(e) => setFormData({ ...formData, tipoGrupo: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-charcoal/20 bg-sand px-4 py-3 text-sm text-charcoal"
              >
                <option>Amigos</option>
                <option>Familia</option>
                <option>Empresa</option>
                <option>Escuela</option>
                <option>Celebración</option>
              </select>
            </label>
            <label className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              Comentarios
              <textarea
                rows={3}
                value={formData.comentarios}
                onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                className="mt-1 w-full rounded-2xl border border-charcoal/20 bg-sand px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40"
                placeholder="Cuéntanos qué experiencia imaginas"
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-2xl bg-terracotta px-6 py-3 text-xs font-semibold uppercase tracking-[0.4em] text-cream hover:bg-terracotta-dark transition"
            >
              Solicitar cotización grupal
            </button>
          </form>
        </div>
      </div>
      <ToastComponent />
    </section>
  );
}
