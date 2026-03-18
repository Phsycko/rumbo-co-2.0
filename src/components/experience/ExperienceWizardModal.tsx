"use client";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { openWhatsApp } from "@/lib/whatsapp";
import { useExperience } from "@/contexts/ExperienceContext";

type StepKey =
  | "origen"
  | "tipo"
  | "duracion"
  | "clase"
  | "experiencia"
  | "paradas"
  | "hospedaje"
  | "extras"
  | "datos";

const steps: { key: StepKey; title: string; copy?: string }[] = [
  { key: "origen", title: "¿Desde dónde viajas?", copy: "Selecciona tu punto de partida." },
  { key: "tipo", title: "Tipo de viaje", copy: "Pareja, amigos, familia o grupo privado." },
  { key: "duracion", title: "Duración", copy: "4, 5, 6 días o personaliza tu tiempo." },
  { key: "clase", title: "Clase del Chepe", copy: "Activa la experiencia del tren con animación premium." },
  { key: "experiencia", title: "Experiencia deseada", copy: "Relájate, aventúrate o captura cada momento premium." },
  { key: "paradas", title: "Lugares obligatorios", copy: "Elige los sitios que no pueden faltar en tu ruta." },
  { key: "hospedaje", title: "Nivel de hospedaje", copy: "Boutique, premium o mixto según tu gusto." },
  { key: "extras", title: "Extras", copy: "Añade traslados, tours, cenas y celebraciones." },
  { key: "datos", title: "Tus datos", copy: "Para enviarte una propuesta vía WhatsApp." }
];

const options = {
  origen: ["Chihuahua", "Los Mochis", "Otro / por definir"],
  tipo: ["Pareja", "Amigos", "Familia", "Solo", "Grupo"],
  duracion: ["4D / 3N", "5D / 4N", "6D / 5N", "Personalizada"],
  clase: ["No incluir tren", "Chepe Express Turista", "Chepe Express Ejecutiva", "Chepe Express Primera"],
  experiencia: ["Relax", "Aventura", "Cultural", "Premium", "Fotografía", "Familiar"],
  paradas: [
    "Creel",
    "Divisadero",
    "Parque Aventura",
    "Barrancas del Cobre",
    "El Fuerte",
    "Bahuichivo",
    "Cerocahui",
    "Tour regional tarahumara",
    "Miradores",
    "Teleférico"
  ],
  hospedaje: ["Estándar", "Boutique", "Premium", "Mixto"],
  extras: [
    "Traslados",
    "Tours",
    "Desayunos",
    "Cenas",
    "Teleférico",
    "Parque Aventura",
    "Guía",
    "Celebración especial"
  ]
};

const initialFormState = {
  origen: "Chihuahua",
  tipo: "Pareja",
  duracion: "4D / 3N",
  clase: "Chepe Express Ejecutiva",
  experiencia: "Aventura",
  paradas: ["Creel", "Divisadero"],
  hospedaje: "Boutique",
  extras: ["Traslados", "Tours"],
  datos: {
    nombre: "",
    whatsapp: "",
    correo: "",
    fecha: "",
    personas: "2",
    comentarios: ""
  }
};

export default function ExperienceWizardModal() {
  const { isOpen, context, triggerPosition, closeModal } = useExperience();
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState(initialFormState);
  const [mounted, setMounted] = useState(false);
  const [modalStyle, setModalStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setModalStyle({});
      return;
    }

    const calculatePosition = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const modalWidth = Math.min(896, viewportWidth - 32);
      const modalHeight = Math.min(viewportHeight * 0.9, 800);

      // En mobile, siempre centrar
      if (viewportWidth < 768) {
        setModalStyle({
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${modalWidth}px`,
          maxHeight: `${modalHeight}px`,
          zIndex: 10000
        });
        return;
      }

      // Sin triggerPosition, centrar
      if (!triggerPosition) {
        setModalStyle({
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${modalWidth}px`,
          maxHeight: `${modalHeight}px`,
          zIndex: 10000
        });
        return;
      }

      // Usar coordenadas del viewport directamente
      const buttonTop = triggerPosition.top;
      const buttonBottom = buttonTop + triggerPosition.height;
      const buttonLeft = triggerPosition.left;
      const buttonRight = buttonLeft + triggerPosition.width;
      const buttonCenterX = buttonLeft + triggerPosition.width / 2;

      // Posicionar debajo del botón
      let top = buttonBottom + 20;
      let left = buttonCenterX - modalWidth / 2;

      // Si no cabe abajo, poner arriba
      if (top + modalHeight > viewportHeight - 20) {
        top = buttonTop - modalHeight - 20;
        if (top < 20) {
          top = Math.max(20, buttonBottom - modalHeight + 20);
        }
      }

      // Ajustar horizontalmente
      if (left < 20) left = 20;
      if (left + modalWidth > viewportWidth - 20) {
        left = viewportWidth - modalWidth - 20;
      }

      // Alinear según posición del botón
      if (buttonLeft < viewportWidth / 3) {
        left = Math.max(20, buttonLeft);
      } else if (buttonRight > viewportWidth * 2 / 3) {
        left = Math.min(viewportWidth - modalWidth - 20, buttonRight - modalWidth);
      }

      setModalStyle({
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        width: `${modalWidth}px`,
        maxHeight: `${modalHeight}px`,
        zIndex: 10000
      });
    };

    // Calcular inmediatamente
    calculatePosition();
    
    // Recalcular en resize
    const handleResize = () => calculatePosition();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, triggerPosition]);

  useEffect(() => {
    if (isOpen) {
      setCurrentStep(0);
      if (context) {
        setForm((prev) => ({
          ...prev,
          ...(context.origen && { origen: context.origen }),
          ...(context.duracion && { duracion: context.duracion }),
          ...(context.clase && { clase: context.clase }),
          ...(context.tipo && { tipo: context.tipo })
        }));
      } else {
        setForm(initialFormState);
      }
    }
  }, [isOpen, context]);

  const activeStep = steps[currentStep];
  const isChepeSelected = form.clase.includes("Chepe Express");

  const toggleSelection = (key: StepKey, value: string) => {
    if (key === "paradas" || key === "extras") {
      setForm((prev) => {
        const current = prev[key] as string[];
        const next = current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
        return { ...prev, [key]: next };
      });
      return;
    }
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleNext = () => {
    // Validación en paso de datos
    if (activeStep.key === "datos") {
      if (!form.datos.nombre.trim()) {
        alert("Por favor ingresa tu nombre");
        return;
      }
      if (!form.datos.whatsapp.trim() && !form.datos.correo.trim()) {
        alert("Por favor ingresa WhatsApp o correo electrónico");
        return;
      }
      if (!form.datos.personas || parseInt(form.datos.personas) < 1) {
        alert("Por favor ingresa el número de personas");
        return;
      }
    }
    
    if (currentStep < steps.length - 1) setCurrentStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep((prev) => prev - 1);
  };

  const summaryMessage = `Hola Rumbo Co, quiero una propuesta premium desde ${form.origen} con duración ${form.duracion}, experiencia ${form.experiencia}, clase ${form.clase} y extras: ${form.extras.join(
    ", "
  )}.`;

  useEffect(() => {
    if (!isOpen) return;
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, closeModal]);

  if (!mounted || !isOpen) {
    return null;
  }

  const portalTarget = typeof document !== "undefined" ? document.body : null;
  if (!portalTarget) return null;
  
  // Estilo por defecto si no se ha calculado aún
  const finalStyle: React.CSSProperties = Object.keys(modalStyle).length > 0 ? modalStyle : {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '896px',
    maxWidth: '90vw',
    maxHeight: '90vh',
    zIndex: 10000
  };

  const modal = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          />
          
          {/* Modal Container - Dynamic positioning */}
          <div 
            className="fixed inset-0 z-[9999] pointer-events-none"
            style={{
              display: 'block',
              padding: '0'
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden rounded-2xl bg-white shadow-2xl pointer-events-auto"
              onClick={(event) => event.stopPropagation()}
              style={finalStyle}
            >
              {/* Scrollable Content */}
              <div className="max-h-[90vh] overflow-y-auto">
                <div className="relative p-8">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="absolute right-4 top-4 z-10 rounded-full bg-white border-2 border-charcoal/20 px-4 py-2 text-sm font-bold text-charcoal hover:bg-terracotta hover:text-cream hover:border-terracotta transition shadow-lg"
                    aria-label="Cerrar modal"
                  >
                    ✕
                  </button>
          <div className="space-y-6 pb-8 pt-4">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-terracotta mb-2">Configurator premium</p>
              <h3 className="font-serif text-3xl font-bold text-charcoal mb-2">{activeStep.title}</h3>
              <p className="text-base text-charcoal/80">{activeStep.copy}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {steps.map((step, index) => (
                <div
                  key={step.key}
                  className={`w-full rounded-2xl border px-3 py-2 text-center text-[0.65rem] uppercase tracking-[0.35em] md:flex-1 ${
                    index === currentStep
                      ? "border-terracotta bg-terracotta/10 text-terracotta"
                      : "border-charcoal/20 text-charcoal/70"
                  }`}
                >
                  {step.title}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 min-h-[300px]">
            {activeStep.key !== "datos" && activeStep.key !== "paradas" && activeStep.key !== "extras" && (
              <div className="flex flex-wrap gap-3">
                {options[activeStep.key].map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleSelection(activeStep.key, option)}
                    className={`rounded-2xl border-2 px-6 py-3 text-sm font-medium uppercase tracking-[0.3em] transition-all ${
                      form[activeStep.key] === option
                        ? "border-terracotta bg-terracotta text-cream shadow-lg scale-105"
                        : "border-charcoal/30 bg-white text-charcoal hover:border-terracotta hover:bg-terracotta/5"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {activeStep.key === "paradas" && (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {options.paradas.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => toggleSelection("paradas", item)}
                    className={`rounded-2xl border-2 px-4 py-4 text-sm font-medium text-left transition-all ${
                      form.paradas.includes(item)
                        ? "border-terracotta bg-terracotta text-cream shadow-lg"
                        : "border-charcoal/30 bg-white text-charcoal hover:border-terracotta hover:bg-terracotta/5"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            {activeStep.key === "extras" && (
              <div className="flex flex-wrap gap-3">
                {options.extras.map((extra) => (
                  <button
                    key={extra}
                    type="button"
                    onClick={() => toggleSelection("extras", extra)}
                    className={`rounded-full border-2 px-5 py-3 text-sm font-medium uppercase tracking-[0.3em] transition-all ${
                      form.extras.includes(extra)
                        ? "border-terracotta bg-terracotta text-cream shadow-lg"
                        : "border-charcoal/30 bg-white text-charcoal hover:border-terracotta hover:bg-terracotta/5"
                    }`}
                  >
                    {extra}
                  </button>
                ))}
              </div>
            )}

            {activeStep.key === "datos" && (
              <div className="space-y-4">
                {Object.entries(form.datos).map(([key, value]) => (
                  <label key={key} className="flex flex-col gap-2 text-sm font-medium uppercase tracking-[0.2em] text-charcoal">
                    {key === "nombre"
                      ? "Nombre completo"
                      : key === "whatsapp"
                      ? "WhatsApp"
                      : key === "correo"
                      ? "Correo electrónico"
                      : key === "fecha"
                      ? "Fecha tentativa de viaje"
                      : key === "personas"
                      ? "Número de personas"
                      : "Comentarios adicionales"}
                    <input
                      type={key === "correo" ? "email" : key === "personas" ? "number" : key === "fecha" ? "date" : "text"}
                      value={value}
                      onChange={(event) =>
                        setForm((prev) => ({
                          ...prev,
                          datos: { ...prev.datos, [key]: event.target.value }
                        }))
                      }
                      className="rounded-xl border-2 border-charcoal/30 bg-white px-5 py-3 text-base text-charcoal placeholder:text-charcoal/40 focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20"
                      placeholder={`Ingresa tu ${key === "nombre" ? "nombre" : key === "whatsapp" ? "número de WhatsApp" : key === "correo" ? "correo electrónico" : key === "fecha" ? "fecha" : key === "personas" ? "número de personas" : "comentarios"}`}
                    />
                  </label>
                ))}
              </div>
            )}

            {isChepeSelected && (
              <div className="rounded-2xl border border-terracotta/60 bg-gradient-to-r from-terracotta/30 to-soft-gold/30 p-4 text-sm text-charcoal/80">
                <p className="text-xs uppercase tracking-[0.4em] text-terracotta">Momento Chepe</p>
                <p>El tren despierta una estela de cobre y humo sutil para recordar que tu viaje comienza desde la selección.</p>
                <div className="relative mt-3 h-10 overflow-hidden rounded-full bg-sand/30">
                  <motion.div
                    className="absolute inset-y-0 left-0 h-2 w-24 rounded-full bg-gradient-to-r from-terracotta to-soft-gold"
                    animate={{ x: ["-20%", "110%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  />
                </div>
              </div>
            )}
          </div>

          {currentStep === steps.length - 1 && (
            <div className="rounded-3xl border-2 border-terracotta/30 bg-gradient-to-br from-cream to-sand/50 p-6 shadow-lg">
              <h4 className="font-serif text-2xl font-bold text-charcoal mb-4">Resumen de tu experiencia</h4>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span className="text-sm font-medium text-charcoal/60">Origen:</span>
                  <span className="text-base font-semibold text-charcoal">{form.origen}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span className="text-sm font-medium text-charcoal/60">Tipo de viaje:</span>
                  <span className="text-base font-semibold text-charcoal">{form.tipo}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span className="text-sm font-medium text-charcoal/60">Duración:</span>
                  <span className="text-base font-semibold text-charcoal">{form.duracion}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span className="text-sm font-medium text-charcoal/60">Clase del Chepe:</span>
                  <span className="text-base font-semibold text-charcoal">{form.clase}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-charcoal/10">
                  <span className="text-sm font-medium text-charcoal/60">Hospedaje:</span>
                  <span className="text-base font-semibold text-charcoal">{form.hospedaje}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm font-medium text-charcoal/60">Extras:</span>
                  <span className="text-base font-semibold text-charcoal">{form.extras.join(", ") || "Ninguno"}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => {
                    openWhatsApp(summaryMessage);
                    closeModal();
                  }}
                  className="flex-1 rounded-2xl bg-terracotta px-6 py-4 text-sm font-bold uppercase tracking-[0.3em] text-cream hover:bg-terracotta-dark transition shadow-lg"
                >
                  Recibir propuesta por WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => {
                    // Simular envío de formulario
                    console.log("Formulario enviado:", {
                      ...form,
                      datos: form.datos
                    });
                    alert("¡Solicitud de cotización enviada! Pronto nos pondremos en contacto contigo.");
                    closeModal();
                  }}
                  className="flex-1 rounded-2xl border-2 border-terracotta bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.3em] text-terracotta hover:bg-terracotta/5 transition"
                >
                  Solicitar cotización
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 flex justify-between items-center pt-6 border-t border-charcoal/10">
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="rounded-full border-2 border-charcoal/30 bg-white px-8 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal hover:border-terracotta hover:bg-terracotta/5 transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Atrás
            </button>
            <span className="text-xs uppercase tracking-[0.4em] text-charcoal/50">
              Paso {currentStep + 1} de {steps.length}
            </span>
            <button
              type="button"
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="rounded-full bg-terracotta px-8 py-3 text-sm font-bold uppercase tracking-[0.3em] text-cream hover:bg-terracotta-dark transition shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {currentStep === steps.length - 1 ? "Finalizar" : "Siguiente →"}
            </button>
                </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );

  return ReactDOM.createPortal(modal, portalTarget);
}
