"use client";

import { useCallback, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/landing/ui/Container";
import { SectionHeading } from "@/components/landing/ui/SectionHeading";
import { Button } from "@/components/landing/ui/Button";
import { X, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { cn } from "@/lib/cn";
import { CONTACT } from "@/lib/contact";

const tours = [
  {
    id: "creel-pueblo-magico",
    name: "Tour Creel Pueblo Magico",
    duration: "2 horas",
    places: [
      "Mirador Cristo Rey",
      "Tunel Continental",
      "Museo de Arte Popular",
      "Plaza principal",
      "Letras de Creel",
      "Iglesia Cristo Rey"
    ]
  },
  {
    id: "tarahumara",
    name: "Tour Tarahumara",
    duration: "2 a 3 horas",
    places: [
      "La Sagrada Familia",
      "Valle de las Ranas",
      "Valle de los Monjes",
      "Cueva Sebastian",
      "Iglesia de San Ignacio",
      "Lago de Arareko",
      "Valle de los Hongos",
      "Valle de la Montura"
    ]
  },
  {
    id: "cusarare",
    name: "Tour Cascada de Cusarare",
    duration: "3 a 4 horas",
    places: ["Cascada de Cusarare", "Mision de los Cinco Santos", "Lago de Arareko", "Piedra del Elefante", "Cueva de Petra"]
  },
  {
    id: "divisadero",
    name: "Tour Divisadero y Parque de Aventura",
    duration: "Medio dia",
    places: [
      "Canon de Oteros",
      "Cueva de Catalina",
      "Piedra de la Fertilidad",
      "Mirador Divisadero",
      "Puente colgante",
      "Mirador Piedra Volada",
      "Teleferico",
      "Parque de Aventura"
    ]
  },
  {
    id: "cerro-gallego",
    name: "Tour Cerro del Gallego",
    duration: "9 horas",
    places: [
      "Pueblo de Cerocahui",
      "Mision de San Francisco Javier",
      "Mirador de Cerocahui",
      "Piedra del Oso",
      "Mirador Cerro del Gallego",
      "Tunel Cerocahui"
    ]
  },
  {
    id: "menonitas",
    name: "Tour Menonitas de Chihuahua",
    duration: "8 horas",
    places: ["Museo Menonita", "Casa de la Galleta", "Queseria Menonita", "Campos de Colonia Manitoba", "Pizza Menonita", "Huerta de manzanas"]
  },
  {
    id: "recowata",
    name: "Tour Aguas Termales Recowata",
    duration: "6 a 8 horas",
    places: ["Zona de aguas termales de Recowata"]
  },
  {
    id: "batopilas",
    name: "Tour Batopilas",
    duration: "2 dias / 1 noche",
    places: [
      "Cueva Tarahumara",
      "Cascada de Cusarare",
      "Lago de Arareko",
      "Catedral perdida de Satevo",
      "Canon del Cobre",
      "Mirador Barranca de la Bufa",
      "Ex Hacienda San Miguel",
      "Acueducto de Batopilas"
    ]
  },
  {
    id: "basaseachi",
    name: "Tour Basaseachi",
    duration: "9 a 10 horas",
    places: [
      "Miradores San Lorenzo",
      "Miradores de la cascada",
      "Pueblo de Basaseachi",
      "Arco cascada",
      "Mirador Candamena",
      "Fondo de la cascada",
      "Caminata exhaustiva (opcional)"
    ]
  },
  {
    id: "tarahumara-cusarare",
    name: "Tour Tarahumara Plus Cusarare",
    duration: "5 a 6 horas",
    places: [
      "Valle de los Monjes",
      "Lago de Arareko",
      "Iglesia San Ignacio",
      "Cascada de Cusarare",
      "Cueva Tarahumara",
      "Valle de los Hongos",
      "Mision de los Cinco Santos",
      "Piedra del Elefante"
    ]
  },
  {
    id: "canon-cobre-plus",
    name: "Tour Canon del Cobre Plus",
    duration: "7 a 8 horas",
    places: [
      "Valle de los Monjes",
      "Lago de Arareko",
      "Iglesia de San Ignacio",
      "Cascada de Cusarare",
      "Cinturon de Basihuare",
      "Canon del Cobre",
      "Puente de Humira",
      "La Herradura"
    ]
  },
  {
    id: "guachochi-sinforosa",
    name: "Tour Guachochi-Sinforosa",
    duration: "9 a 10 horas",
    places: ["Canon del Jaguar", "Mirador La Sinforosa", "Lago de las Garzas", "Cascada del Salto", "Letras Guachochi"]
  },
  {
    id: "sisoguichi",
    name: "Tour Sisoguichi",
    duration: "5 horas",
    places: [
      "Mision Sisoguichi",
      "Convento Madres Adoratrices",
      "Letras Sisoguichi",
      "Cascada El Salto",
      "Puente colgante",
      "Escuela Ninos Raramuris"
    ]
  },
  {
    id: "maguarichi",
    name: "Tour Maguarichi",
    duration: "7 a 8 horas",
    places: ["Cerro de las Ventanas", "Balneario aguas termales", "Pueblo Maguarichi", "Mision Santa Barbara", "Mina Santa Barbara", "Tunel minero"]
  },
  {
    id: "transporte-creel-chih",
    name: "Transporte Creel-Chihuahua",
    duration: "Servicio de traslado",
    places: ["Hotel o aeropuerto en Chihuahua", "Creel y puntos acordados de salida/llegada"]
  }
] as const;

type Tour = (typeof tours)[number];

export function ToursSection() {
  const { t } = useI18n();
  const sectionId = useId();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modalTour, setModalTour] = useState<Tour | null>(null);
  const [people, setPeople] = useState("1");

  const toggle = useCallback((id: string) => {
    setExpandedId((cur) => (cur === id ? null : id));
  }, []);

  const openModal = useCallback((tour: Tour) => {
    setModalTour(tour);
    setPeople("1");
  }, []);

  const sendTourToWhatsApp = useCallback(() => {
    if (!modalTour) return;
    const n = Math.max(1, Number.parseInt(people, 10) || 1);
    const placesBlock = modalTour.places.map((p) => `• ${p}`).join("\n");
    const message =
      `${t("tours_wa_intro")}\n\n` +
      `${modalTour.name}\n` +
      `${t("tours_modal_duration")} ${modalTour.duration}\n` +
      `${t("tours_modal_people")} ${n}\n\n` +
      `${t("tours_wa_places_block")}\n` +
      `${placesBlock}\n\n` +
      `${t("tours_wa_outro")}`;
    const url = `https://wa.me/${CONTACT.whatsAppDigits}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setModalTour(null);
  }, [modalTour, people, t]);

  return (
    <section id="tours" className="relative border-t border-ink/8 bg-parchment py-16 sm:py-24" aria-labelledby="tours-heading">
      <Container>
        <SectionHeading
          titleId="tours-heading"
          eyebrow={t("tours_eyebrow")}
          title={t("tours_title")}
          subtitle={t("tours_subtitle")}
        />

        <div className="mx-auto mt-10 max-w-3xl border border-ink/10 bg-cream">
          {tours.map((tour, idx) => {
            const open = expandedId === tour.id;
            const panelId = `${sectionId}-panel-${tour.id}`;
            const triggerId = `${sectionId}-trigger-${tour.id}`;
            return (
              <motion.div
                key={tour.id}
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: Math.min(idx * 0.02, 0.2) }}
                className="border-b border-ink/10 last:border-b-0"
              >
                <h3 className="m-0">
                  <button
                    id={triggerId}
                    type="button"
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-ink/[0.03] sm:px-6 sm:py-5"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => toggle(tour.id)}
                  >
                    <span className="min-w-0">
                      <span className="block font-serif text-lg leading-snug text-ink sm:text-xl">{tour.name}</span>
                      <span className="mt-1 block text-sm text-ink/60">
                        {t("tours_modal_duration")} {tour.duration}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "mt-1 h-5 w-5 shrink-0 text-copper-dim transition duration-300",
                        open && "rotate-180"
                      )}
                      aria-hidden
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 border-t border-ink/8 px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">{t("tours_modal_places")}</p>
                          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-ink/80 sm:grid-cols-2">
                            {tour.places.map((place) => (
                              <li key={place} className="flex items-start gap-2">
                                <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-copper/80" />
                                <span>{place}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <p className="text-xs text-ink/65">{t("tours_tip")}</p>
                        <Button type="button" variant="outline" size="sm" className="w-full sm:w-auto" onClick={() => openModal(tour)}>
                          {t("tours_select")}
                        </Button>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl border border-ink/10 bg-cream/70 px-5 py-4 text-center text-xs font-medium uppercase tracking-[0.08em] text-ink/70">
          {t("tours_disclaimer")}
        </p>
      </Container>

      {modalTour ? (
        <div
          role="presentation"
          className="fixed inset-0 z-[2800] flex items-center justify-center bg-ink/65 px-4 py-8 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalTour(null);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="max-h-[min(92vh,860px)] w-full max-w-3xl overflow-y-auto border border-ink/10 bg-parchment p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-copper/90">{t("tours_select")}</p>
                <h3 className="mt-2 font-serif text-3xl leading-tight text-ink sm:text-4xl">{modalTour.name}</h3>
                <p className="mt-2 text-sm text-ink/70">
                  {t("tours_modal_duration")} {modalTour.duration}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setModalTour(null)}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink/70 transition hover:bg-ink/5 hover:text-ink"
                aria-label={t("tours_modal_close")}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/55">{t("tours_modal_places")}</p>
            <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-ink/80 sm:grid-cols-2">
              {modalTour.places.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-copper/80" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 max-w-xs">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/70">{t("tours_modal_people")}</p>
              <input
                type="number"
                min={1}
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                aria-label={t("tours_modal_people_aria")}
                className="mt-2 h-11 w-full border border-ink/25 bg-cream/90 px-4 text-sm text-ink outline-none transition duration-300 placeholder:text-ink/35 focus:border-copper/50 focus:ring-1 focus:ring-copper/20"
              />
            </div>
            <p className="mt-6 text-sm text-ink/70">{t("tours_tip")}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button type="button" size="lg" className="w-full sm:w-auto" onClick={sendTourToWhatsApp}>
                {t("tours_wa_submit")}
              </Button>
              <Button type="button" variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => setModalTour(null)}>
                {t("tours_close")}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
