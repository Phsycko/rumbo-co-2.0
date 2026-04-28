import type { SiteLocale } from "./siteLocale";

/** Textos UI (es/en). Claves en snake_case. */
export const LEX: Record<string, { es: string; en: string }> = {
  lang_es: { es: "ES", en: "ES" },
  lang_en: { es: "EN", en: "EN" },
  lang_aria: { es: "Idioma del sitio", en: "Site language" },

  header_tagline: { es: "Travel design · Norte", en: "Travel design · North" },
  header_atelier: { es: "Atelier", en: "Atelier" },
  header_whatsapp: { es: "WhatsApp", en: "WhatsApp" },
  header_menu_open: { es: "Abrir menú", en: "Open menu" },
  header_menu_close: { es: "Cerrar menú", en: "Close menu" },
  header_mobile_atelier: { es: "Atelier — diseñar viaje", en: "Atelier — design trip" },

  nav_barrancas: { es: "Barrancas del Cobre", en: "Copper Canyon" },
  nav_paquetes: { es: "Paquetes", en: "Packages" },
  nav_rutas: { es: "Rutas del Chepe", en: "Chepe routes" },
  nav_chihuahua: { es: "Desde Chihuahua", en: "From Chihuahua" },
  nav_mochis: { es: "Desde Los Mochis", en: "From Los Mochis" },
  nav_grupos: { es: "Grupos", en: "Groups" },
  nav_blog: { es: "Blog", en: "Blog" },
  nav_contacto: { es: "Contacto", en: "Contact" },

  footer_col_nav: { es: "Navegación", en: "Navigation" },
  footer_col_rutas: { es: "Rutas", en: "Routes" },
  footer_col_explore: { es: "Explorar", en: "Explore" },
  footer_link_inicio: { es: "Inicio", en: "Home" },
  footer_link_paquetes: { es: "Paquetes", en: "Packages" },
  footer_link_rutas: { es: "Rutas del Chepe", en: "Chepe routes" },
  footer_link_grupos: { es: "Grupos", en: "Groups" },
  footer_link_contacto: { es: "Contacto", en: "Contact" },
  footer_link_chih: { es: "Desde Chihuahua", en: "From Chihuahua" },
  footer_link_mochis: { es: "Desde Los Mochis", en: "From Los Mochis" },
  footer_link_chepe: { es: "Chepe Express", en: "Chepe Express" },
  footer_link_barrancas: { es: "Barrancas del Cobre", en: "Copper Canyon" },
  footer_link_paquetes_b: { es: "Paquetes Barrancas", en: "Copper packages" },
  footer_link_creel: { es: "Creel & sierra", en: "Creel & sierra" },
  footer_whatsapp: { es: "WhatsApp", en: "WhatsApp" },
  footer_llamadas: { es: "Llamadas", en: "Phone" },
  footer_correo: { es: "Correo", en: "Email" },
  footer_wa_cta: { es: "Iniciar conversación", en: "Start chat" },
  footer_rights: {
    es: "Travel design en la Sierra Tarahumara.",
    en: "Travel design in the Sierra Tarahumara."
  },
  footer_privacy: { es: "Privacidad", en: "Privacy" },
  footer_terms: { es: "Términos", en: "Terms" },

  hero_eyebrow: {
    es: "Travel design · Barrancas · Chepe Express",
    en: "Travel design · Copper Canyon · Chepe Express"
  },
  hero_title: { es: "Donde el cobre se vuelve horizonte", en: "Where copper becomes horizon" },
  hero_subtitle: {
    es: "Sierra Tarahumara, Barrancas y Chepe con calma y precisión. Nosotros ordenamos el viaje; tú vives el paisaje.",
    en: "Sierra Tarahumara, canyons and Chepe with calm and precision. We structure the trip; you live the landscape."
  },
  hero_cta_routes: { es: "Explorar rutas curadas", en: "Explore curated routes" },
  hero_cta_wizard: { es: "Encargar un itinerario", en: "Request an itinerary" },
  hero_atelier_title: { es: "Boceto de viaje", en: "Trip sketch" },
  hero_atelier_sub: {
    es: "Un primer trazo: ruta, fechas y clase de Chepe. Lo afinamos contigo en el configurador.",
    en: "A first pass: route, dates and Chepe class. We refine it with you in the configurator."
  },
  hero_atelier_brand: { es: "Atelier Rumbo", en: "Rumbo Atelier" },
  hero_label_route: { es: "Ruta", en: "Route" },
  hero_label_dates: { es: "Fechas", en: "Dates" },
  hero_label_people: { es: "Personas", en: "Guests" },
  hero_label_experience: { es: "Experiencia", en: "Experience" },
  hero_label_chepe: { es: "Chepe", en: "Chepe" },
  hero_map_title: { es: "Mapa de fecha", en: "Date map" },
  hero_map_sub: {
    es: "Desde el {date}, te mostramos ventanas sugeridas para salir.",
    en: "From {date}, we show suggested windows to depart."
  },
  hero_suggested_copy: { es: "Salida sugerida +{n} días", en: "Suggested departure +{n} days" },
  hero_cta_options: { es: "Ver opciones", en: "See options" },
  hero_design_line: { es: "Diseñar tu experiencia", en: "Design your experience" },
  hero_chepe_none: { es: "No incluir tren", en: "No train" },
  hero_chepe_turista: { es: "Turista", en: "Tourist" },
  hero_chepe_ejecutiva: { es: "Ejecutiva", en: "Executive" },
  hero_chepe_primera: { es: "Primera", en: "First class" },

  manifesto_kicker: { es: "Rumbo Co", en: "Rumbo Co" },
  manifesto_title: {
    es: "Travel design en el norte: menos circuito, más criterio.",
    en: "Travel design in the north: fewer circuits, more judgment."
  },
  manifesto_body: {
    es: "Barrancas del Cobre y Chepe Express son nuestro territorio. Curamos ritmo, hoteles y travesía para que la sierra se sienta íntima aun siendo inmensa.",
    en: "Copper Canyon and Chepe Express are our home ground. We curate pace, hotels and journey so the sierra feels intimate even when it is vast."
  },

  brand_kicker: { es: "Rumbo Co", en: "Rumbo Co" },
  brand_mission_title: { es: "Mision y vision", en: "Mission & vision" },
  brand_mission_body: {
    es: "Diseñamos travesias memorables en Barrancas del Cobre y Chepe Express con ritmo, criterio y precision. Queremos ser la firma de travel design de referencia en el norte de Mexico por calidad, confianza y ejecucion impecable.",
    en: "We design memorable journeys in Copper Canyon and Chepe Express with pace, judgment and precision. We aim to be the reference travel-design studio in northern Mexico for quality, trust and flawless execution."
  },
  brand_values_title: { es: "Valores", en: "Values" },
  brand_commit_title: { es: "Compromisos", en: "Commitments" },
  brand_v0: { es: "Criterio antes que volumen", en: "Judgment over volume" },
  brand_v1: { es: "Hospitalidad real", en: "Real hospitality" },
  brand_v2: { es: "Detalle premium", en: "Premium detail" },
  brand_v3: { es: "Transparencia total", en: "Full transparency" },
  brand_c0: {
    es: "Diseño de viaje a medida, sin plantillas rígidas.",
    en: "Bespoke trip design, no rigid templates."
  },
  brand_c1: {
    es: "Ejecución completa antes, durante y después del viaje.",
    en: "End-to-end execution before, during and after the trip."
  },
  brand_c2: {
    es: "Selección de hoteles, rutas y experiencias con estándar Rumbo Co.",
    en: "Hotels, routes and experiences selected to Rumbo Co standards."
  },
  brand_c3: {
    es: "Comunicación clara y acompañamiento humano en todo momento.",
    en: "Clear communication and human support at every step."
  },

  routes_eyebrow: { es: "Rutas", en: "Routes" },
  routes_title: { es: "Cuatro formas de cruzar la sierra", en: "Four ways to cross the sierra" },
  routes_subtitle: {
    es: "Elegimos contigo ritmo, hoteles y paradas. El Chepe es el hilo; el criterio es nuestro.",
    en: "We choose pace, hotels and stops with you. Chepe is the thread; judgment is ours."
  },
  routes_cta: { es: "Ruta a medida", en: "Custom route" },
  routes_card_cta: { es: "Diseñar esta ruta", en: "Design this route" },

  tours_eyebrow: { es: "Tours", en: "Tours" },
  tours_title: { es: "Tours y experiencias por Barrancas", en: "Tours & experiences in the canyons" },
  tours_subtitle: {
    es: "Despliega el tour que te interese para ver duración, lugares y recomendaciones. Así tienes el catálogo completo sin saturar la página.",
    en: "Expand any tour to see duration, stops and tips—the full catalogue without overwhelming the page."
  },
  tours_select: { es: "Seleccionar tour", en: "Select tour" },
  tours_tip: { es: "Recomendacion: llevar calzado y ropa comoda.", en: "Tip: comfortable shoes and clothing." },
  tours_disclaimer: {
    es: "Ningun tour incluye entradas a los sitios, alimentos ni propinas.",
    en: "No tour includes site tickets, meals or tips."
  },
  tours_modal_duration: { es: "Duración:", en: "Duration:" },
  tours_modal_places: { es: "Lugares a visitar", en: "Places to visit" },
  tours_modal_people: { es: "Personas", en: "Guests" },
  tours_modal_close: { es: "Cerrar detalle de tour", en: "Close tour details" },
  tours_modal_people_aria: { es: "Número de personas", en: "Number of guests" },
  tours_wa_intro: {
    es: "Hola Rumbo Co, quiero cotizar este tour:",
    en: "Hello Rumbo Co, I would like a quote for this tour:"
  },
  tours_wa_places_block: { es: "Lugares:", en: "Stops:" },
  tours_wa_outro: {
    es: "¿Me comparten disponibilidad y precio aproximado? Gracias.",
    en: "Could you share availability and an approximate price? Thank you."
  },
  tours_wa_submit: { es: "Enviar a WhatsApp", en: "Send to WhatsApp" },
  tours_close: { es: "Cerrar", en: "Close" },

  beyond_eyebrow: { es: "Tu ruta", en: "Your route" },
  beyond_title: { es: "Creel no es tu destino", en: "Creel is not your only destination" },
  beyond_subtitle: {
    es: "Platícanos a dónde te gustaría ir y nosotros diseñamos tu experiencia.",
    en: "Tell us where you would like to go and we will design your experience."
  },
  beyond_body: {
    es: "Si buscas otra comunidad, otra barranca, otro ritmo o una combinación que no ves en el catálogo, cuéntanos y armamos propuesta sobre la marcha.",
    en: "If you want another community, canyon, pace or a mix you do not see in the catalogue, tell us and we will build a proposal."
  },
  beyond_chip: { es: "Sierra Tarahumara y alrededores", en: "Sierra Tarahumara & surroundings" },
  beyond_chip_playas: { es: "Playas", en: "Beaches" },
  beyond_chip_pueblos_magicos: { es: "Pueblos mágicos", en: "Magic towns" },
  beyond_chips_aria: {
    es: "Ámbitos donde diseñamos rutas",
    en: "Regions where we design trips"
  },
  beyond_form_kicker: { es: "Tu solicitud", en: "Your request" },
  beyond_form_intro: {
    es: "Lo enviamos por WhatsApp; puedes ajustar el mensaje antes de mandarlo.",
    en: "We open WhatsApp with your message; you can edit it before sending."
  },
  beyond_label_name: { es: "Nombre", en: "Name" },
  beyond_label_contact: { es: "WhatsApp o correo", en: "WhatsApp or email" },
  beyond_ph_contact: { es: "Ej. +52… o hola@correo.com", en: "e.g. +52… or hello@email.com" },
  beyond_label_where: { es: "Adónde te gustaría ir", en: "Where you would like to go" },
  beyond_ph_where: { es: "Pueblo, zona o idea de ruta", en: "Town, area or route idea" },
  beyond_label_dates: { es: "Fechas aproximadas", en: "Approximate dates" },
  beyond_ph_dates: { es: "Mes o rango", en: "Month or range" },
  beyond_label_people: { es: "Personas", en: "Guests" },
  beyond_ph_people: { es: "Ej. 2", en: "e.g. 2" },
  beyond_label_notes: { es: "Tu idea o prioridades", en: "Your idea or priorities" },
  beyond_ph_notes: {
    es: "Ej. menos caminata, más tiempo en miradores, viaje con niños…",
    en: "e.g. less hiking, more viewpoints, traveling with kids…"
  },
  beyond_ph_name: { es: "Tu nombre", en: "Your name" },
  beyond_submit: { es: "Enviar por WhatsApp", en: "Send via WhatsApp" },

  packages_eyebrow: { es: "Paquetes", en: "Packages" },
  packages_title: { es: "Tres clases de Chepe, una misma exigencia", en: "Three Chepe classes, one standard" },
  packages_sub_prefix: { es: "Duracion seleccionada:", en: "Selected length:" },
  packages_sub_suffix: {
    es: "Compara Turista, Ejecutiva y Primera.",
    en: "Compare Tourist, Executive and First."
  },
  packages_recommended: { es: "Recomendada", en: "Recommended" },
  packages_included: { es: "Qué incluye", en: "What's included" },
  packages_cta: { es: "Diseñar mi experiencia", en: "Design my experience" },
  packages_card_configure: { es: "Configurar este paquete", en: "Configure this package" },
  packages_card_quote_wa: { es: "Cotizar por WhatsApp", en: "Quote on WhatsApp" },
  packages_wa_package_intro: {
    es: "Hola Rumbo Co, quiero cotizar el paquete {duration} Chepe Express clase {clase}.",
    en: "Hello Rumbo Co, I would like a quote for the {duration} package, Chepe Express {clase} class."
  },
  packages_cta_top: { es: "A medida", en: "Bespoke" },
  packages_note_title: { es: "Nota de tarifas", en: "Fare note" },
  packages_note_body: {
    es: "Las tarifas de Chepe Express varían por temporada alta (más demanda, boleto más caro) y temporada baja (más accesible), además de la ocupación y la clase: Turista, Ejecutiva o Primera.",
    en: "Chepe Express fares vary by high season (higher demand, higher price) and low season (lower price), plus occupancy and class: Tourist, Executive or First."
  },

  design_banner_kicker: { es: "Ya cuentas con itinerario", en: "You already have an itinerary" },
  design_banner_body: {
    es: "Nosotros lo ejecutamos de punta a punta: transporte, traslados y coordinacion local para que tu viaje salga impecable, sin friccion y sin perder tiempo.",
    en: "We execute end to end: transport, transfers and local coordination so your trip runs smoothly, without friction or wasted time."
  },
  design_transport_title: { es: "Ya tienes tu itinerario, pero te falta el transporte?", en: "You have an itinerary but still need transport?" },
  design_transport_sub: { es: "Nosotros te ayudamos a completar tu viaje.", en: "We help you complete your trip." },
  design_transport_cta: { es: "Seleccionar transporte", en: "Select transport" },
  design_eyebrow: { es: "A medida", en: "Bespoke" },
  design_title: { es: "Tu viaje, compuesto con calma", en: "Your trip, composed with calm" },
  design_subtitle: {
    es: "Nos dices ritmo y estilo; nosotros lo volvemos itinerario claro, con Chepe, hoteles y traslados alineados.",
    en: "You share pace and style; we turn it into a clear itinerary with Chepe, hotels and transfers aligned."
  },
  design_config: { es: "Configurador", en: "Configurator" },
  design_wa: { es: "WhatsApp", en: "WhatsApp" },
  design_modal_transport: { es: "Solicitud de transporte", en: "Transport request" },
  design_modal_close: { es: "Cerrar popup", en: "Close" },
  design_modal_schedule_summary: {
    es: "Ver calendario del servicio, horarios de referencia y notas",
    en: "View service calendar, sample times and notes"
  },
  design_modal_trip_fields: { es: "Datos de tu viaje", en: "Your trip details" },
  design_modal_bus_info: {
    es: "Sin calendario fijo del tren: coordinamos autobús o traslado privado según tu fecha, origen y destino.",
    en: "No fixed train calendar: we coordinate bus or private transfer for your dates, origin and destination."
  },
  design_lbl_date: { es: "Fecha", en: "Date" },
  design_lbl_return: { es: "Fecha de regreso", en: "Return date" },
  design_lbl_people: { es: "Cuantas personas", en: "How many guests" },
  design_lbl_from: { es: "Lugar de salida", en: "Departure place" },
  design_lbl_to: { es: "Lugar de destino", en: "Destination" },
  design_lbl_class: { es: "Clase a elegir (Chepe Express)", en: "Class (Chepe Express)" },
  design_cancel: { es: "Cancelar", en: "Cancel" },
  design_send: { es: "Enviar solicitud", en: "Send request" },
  design_ph_people: { es: "Ej. 4", en: "e.g. 4" },
  design_ph_from: { es: "Ej. Chihuahua", en: "e.g. Chihuahua" },
  design_ph_to: { es: "Ej. Creel", en: "e.g. Creel" },

  inclusions_eyebrow: { es: "Qué incluye", en: "What is included" },
  inclusions_title: { es: "Lo esencial, bien resuelto", en: "The essentials, done right" },
  inclusions_subtitle: {
    es: "Menos promesas vagas: piezas concretas que hacen fluido el viaje.",
    en: "Fewer vague promises: concrete pieces that keep the trip flowing."
  },

  why_eyebrow: { es: "Confianza", en: "Trust" },
  why_title: { es: "Precisión en lugar de ruido", en: "Precision instead of noise" },
  why_subtitle: {
    es: "El norte se disfruta con orden. Nosotros cuidamos el ritmo para que tú mires el paisaje.",
    en: "The north is best enjoyed with order. We guard the pace so you can watch the landscape."
  },

  editorial_eyebrow: { es: "Destino", en: "Destination" },
  editorial_title: { es: "Barrancas del Cobre y el Chepe", en: "Copper Canyon & Chepe" },
  editorial_subtitle: {
    es: "Abismos, bosques y un tren que marca el ritmo. Diseñamos para que la escala épica se viva con calma.",
    en: "Abysses, forest and a train that sets the pace. We design so epic scale feels calm."
  },

  testimonials_eyebrow: { es: "Opiniones", en: "Reviews" },
  testimonials_title: { es: "Lo que cuenta al volver", en: "What matters when you return" },
  testimonials_subtitle: { es: "Pocas líneas, bien dichas.", en: "A few lines, well said." },

  faq_eyebrow: { es: "FAQ", en: "FAQ" },
  faq_title: { es: "Dudas frecuentes", en: "Common questions" },
  faq_subtitle: {
    es: "Respuestas directas. Si prefieres hablar, escríbenos por WhatsApp.",
    en: "Straight answers. Prefer to talk? Message us on WhatsApp."
  },

  groups_eyebrow: { es: "Grupos", en: "Groups" },
  groups_title: { es: "Viajes privados, sin fórmulas", en: "Private trips, no formulas" },
  groups_subtitle: {
    es: "Cotización cerrada según fechas, tamaño y estilo. Chepe, hoteles, traslados y tours bajo un solo criterio.",
    en: "Closed quotes by dates, size and style. Chepe, hotels, transfers and tours under one standard."
  },
  groups_brief_title: { es: "Brief grupal", en: "Group brief" },
  groups_brief_sub: { es: "Escala y fechas. Te respondemos con escenarios.", en: "Scale and dates. We reply with scenarios." },
  groups_lbl_city: { es: "Ciudad de salida", en: "Departure city" },
  groups_lbl_dates: { es: "Fechas", en: "Dates" },
  groups_ph_dates: { es: "Ej. mayo 2026", en: "e.g. May 2026" },
  groups_lbl_type: { es: "Tipo de grupo", en: "Group type" },
  groups_mail: { es: "Correo", en: "Email" },
  groups_gp0_t: { es: "Amigos y familia", en: "Friends & family" },
  groups_gp0_d: {
    es: "Celebraciones, reencuentros o viajes multigeneracionales.",
    en: "Celebrations, reunions or multigenerational trips."
  },
  groups_gp1_t: { es: "Empresas e instituciones", en: "Companies & institutions" },
  groups_gp1_d: {
    es: "Incentivos, equipos y experiencias con logística cerrada.",
    en: "Incentives, teams and experiences with closed logistics."
  },
  groups_gp2_t: { es: "Escuelas y grupos privados", en: "Schools & private groups" },
  groups_gp2_d: {
    es: "Salidas educativas o colectivos con necesidades propias.",
    en: "Educational trips or groups with specific needs."
  },
  groups_lbl_name: { es: "Nombre", en: "Name" },
  groups_lbl_whatsapp: { es: "WhatsApp", en: "WhatsApp" },
  groups_lbl_people: { es: "Personas", en: "Guests" },
  groups_lbl_notes: { es: "Comentarios", en: "Comments" },
  groups_mail_subject: { es: "Cotización grupal Rumbo Co", en: "Rumbo Co group quote" },
  groups_wa_intro: { es: "Hola Rumbo Co, quiero una cotización grupal.", en: "Hello Rumbo Co, I would like a group quote." },
  groups_wa_name: { es: "Nombre:", en: "Name:" },
  groups_wa_whatsapp: { es: "WhatsApp:", en: "WhatsApp:" },
  groups_wa_email: { es: "Correo:", en: "Email:" },
  groups_wa_people: { es: "Personas:", en: "Guests:" },
  groups_wa_city: { es: "Ciudad de salida:", en: "Departure city:" },
  groups_wa_dates: { es: "Fechas aproximadas:", en: "Approximate dates:" },
  groups_wa_type: { es: "Tipo de grupo:", en: "Group type:" },
  groups_wa_notes: { es: "Comentarios:", en: "Comments:" },
  groups_opt_amigos: { es: "Amigos", en: "Friends" },
  groups_opt_empresas: { es: "Empresas", en: "Companies" },
  groups_opt_escuelas: { es: "Escuelas", en: "Schools" },
  groups_opt_familias: { es: "Familias grandes", en: "Large families" },
  groups_opt_privado: { es: "Grupo privado", en: "Private group" },
  groups_seo_kicker: { es: "Landing SEO (stub)", en: "SEO landing (stub)" },
  groups_seo_title: { es: "Grupos Barrancas del Cobre", en: "Copper Canyon groups" },

  beyond_wa_intro: {
    es: "Hola Rumbo Co, Creel no es mi destino: quiero que diseñen mi experiencia.",
    en: "Hello Rumbo Co, Creel is not my destination: I want you to design my experience."
  },
  beyond_wa_name: { es: "Nombre:", en: "Name:" },
  beyond_wa_contact: { es: "Contacto (WhatsApp o correo):", en: "Contact (WhatsApp or email):" },
  beyond_wa_where: { es: "Adónde me gustaría ir:", en: "Where I would like to go:" },
  beyond_wa_dates: { es: "Fechas aproximadas:", en: "Approximate dates:" },
  beyond_wa_people: { es: "Personas:", en: "Guests:" },
  beyond_wa_notes_block: { es: "Idea o comentarios:", en: "Ideas or comments:" },

  final_wa_body: {
    es: "Hola Rumbo Co, quiero una propuesta curada para Barrancas del Cobre y Chepe Express. ¿Cómo empezamos?",
    en: "Hello Rumbo Co, I want a curated proposal for Copper Canyon and Chepe Express. How do we start?"
  },

  packages_badge_mas_vendido: { es: "Más vendido", en: "Best seller" },
  packages_badge_premium: { es: "Premium", en: "Premium" },
  packages_badge_ideal: { es: "Ideal para primera vez", en: "Ideal for first visit" },
  packages_img_alt: { es: "Barrancas del Cobre", en: "Copper Canyon" },

  final_kicker: { es: "Cierre", en: "Closing" },
  final_title: { es: "Siguiente paso", en: "Next step" },
  final_subtitle: { es: "Propuesta clara, con opciones por nivel. Sin ruido.", en: "A clear proposal, tiered options. No noise." },
  final_cta: { es: "Pedir propuesta", en: "Request proposal" },
  final_wa: { es: "WhatsApp", en: "WhatsApp" },

  wizard_title: { es: "Configurador premium", en: "Premium configurator" },
  wizard_progress: { es: "Progreso", en: "Progress" },
  wizard_back: { es: "Atrás", en: "Back" },
  wizard_anterior: { es: "Anterior", en: "Previous" },
  wizard_next: { es: "Siguiente", en: "Next" },
  wizard_send: { es: "Enviar a WhatsApp", en: "Send to WhatsApp" },
  wizard_recibir_wa: { es: "Recibir propuesta por WhatsApp", en: "Get proposal via WhatsApp" },
  wizard_cotizar: { es: "Solicitar cotización", en: "Request a quote" },
  wizard_step_0: { es: "Origen", en: "Origin" },
  wizard_step_1: { es: "Tipo de viaje", en: "Trip type" },
  wizard_step_2: { es: "Duración", en: "Duration" },
  wizard_step_3: { es: "Clase Chepe", en: "Chepe class" },
  wizard_step_4: { es: "Experiencia", en: "Experience" },
  wizard_step_5: { es: "Paradas", en: "Stops" },
  wizard_step_6: { es: "Hospedaje", en: "Lodging" },
  wizard_step_7: { es: "Extras", en: "Extras" },
  wizard_step_8: { es: "Datos", en: "Details" },
  wizard_step_9: { es: "Resumen", en: "Summary" },
  wizard_q_origin: { es: "¿Desde dónde sales?", en: "Where are you leaving from?" },
  wizard_q_trip: { es: "¿Qué tipo de viaje es?", en: "What kind of trip is it?" },
  wizard_q_duration: { es: "Duración ideal", en: "Ideal length" },
  wizard_q_feel: { es: "¿Qué quieres sentir en este viaje?", en: "What do you want to feel on this trip?" },
  wizard_q_stops: { es: "Paradas o experiencias obligatorias", en: "Must-have stops or experiences" },
  wizard_q_hotel: { es: "Nivel de hospedaje", en: "Lodging level" },
  wizard_q_extras: { es: "Extras", en: "Extras" },
  wizard_pick_selected: { es: "Seleccionado", en: "Selected" },
  wizard_pick_cta: { es: "Elegir", en: "Choose" },
  wizard_multipick_hint: {
    es: "Selecciona lo que sí o sí quieres vivir.",
    en: "Pick what you definitely want to experience."
  },
  wizard_multipick_count: { es: "{n} seleccionadas", en: "{n} selected" },
  wizard_lbl_party: { es: "Número de personas", en: "Number of guests" },
  wizard_chepe_intro: {
    es: "Aquí activamos un efecto especial: selección elegante, rápida y memorable.",
    en: "Here we add a special touch: elegant, fast, memorable selection."
  },
  wizard_chepe_primera: {
    es: "La versión prestige: la forma más especial de vivir la ruta.",
    en: "The prestige version: the most special way to ride the line."
  },
  wizard_chepe_ejecutiva: {
    es: "El equilibrio premium: comodidad + ejecución impecable.",
    en: "Premium balance: comfort + flawless execution."
  },
  wizard_chepe_turista: {
    es: "La puerta de entrada: práctico y cómodo.",
    en: "The gateway: practical and comfortable."
  },
  wizard_chepe_none: { es: "Incluye traslados y tours sin tren.", en: "Transfers and tours without train." },
  wizard_lbl_name: { es: "Nombre", en: "Name" },
  wizard_lbl_wa: { es: "WhatsApp", en: "WhatsApp" },
  wizard_lbl_email: { es: "Correo", en: "Email" },
  wizard_data_title: { es: "Tus datos", en: "Your details" },
  wizard_data_sub: {
    es: "Esto nos permite enviarte una propuesta clara por WhatsApp o correo.",
    en: "So we can send you a clear proposal by WhatsApp or email."
  },
  wizard_lbl_tentative: { es: "Fecha tentativa", en: "Tentative date" },
  wizard_ph_tentative: { es: "Ej. 12–16 abril", en: "e.g. Apr 12–16" },
  wizard_lbl_comments: { es: "Comentarios", en: "Comments" },
  wizard_summary_title: { es: "Resumen visual", en: "Visual summary" },
  wizard_summary_sub: {
    es: "Esto es lo que vamos a convertir en una propuesta premium.",
    en: "This is what we will turn into a premium proposal."
  },
  wizard_sum_origin: { es: "Origen", en: "Origin" },
  wizard_sum_trip: { es: "Tipo de viaje", en: "Trip type" },
  wizard_sum_duration: { es: "Duración", en: "Duration" },
  wizard_sum_chepe: { es: "Chepe", en: "Chepe" },
  wizard_sum_experience: { es: "Experiencia", en: "Experience" },
  wizard_sum_hotel: { es: "Hospedaje", en: "Lodging" },
  wizard_sum_stops: { es: "Paradas", en: "Stops" },
  wizard_sum_extras: { es: "Extras", en: "Extras" },
  wizard_sum_data: { es: "Datos", en: "Details" },
  wizard_sum_name: { es: "Nombre:", en: "Name:" },
  wizard_sum_wa: { es: "WhatsApp:", en: "WhatsApp:" },
  wizard_sum_email: { es: "Correo:", en: "Email:" },
  wizard_sum_tentative: { es: "Fecha tentativa:", en: "Tentative date:" },
  wizard_sum_people: { es: "Personas:", en: "Guests:" },
  wizard_sum_notes: { es: "Comentarios:", en: "Comments:" },
  wizard_footer_note: {
    es: "Listo. En el backend, esto se enviará a CRM / correo / WhatsApp automáticamente.",
    en: "Ready. In production this would sync to CRM / email / WhatsApp."
  },

  inc_0_t: { es: "Hospedaje curado", en: "Curated lodging" },
  inc_0_d: { es: "Ubicación, carácter y servicio. Sin improvisar.", en: "Location, character and service. No guesswork." },
  inc_1_t: { es: "Chepe Express", en: "Chepe Express" },
  inc_1_d: { es: "Ruta y clase acordes a tu forma de viajar.", en: "Route and class matched to how you travel." },
  inc_2_t: { es: "Tours y miradores", en: "Tours & viewpoints" },
  inc_2_d: { es: "Experiencias con criterio, no relleno.", en: "Experiences with judgment, not filler." },
  inc_3_t: { es: "Traslados", en: "Transfers" },
  inc_3_d: {
    es: "Conexiones limpias entre tren, hotel y puntos clave.",
    en: "Clean connections between train, hotel and key points."
  },
  inc_4_t: { es: "Coordinación y soporte", en: "Coordination & support" },
  inc_4_d: {
    es: "Reservas, confirmaciones y acompañamiento humano.",
    en: "Bookings, confirmations and human support."
  },

  edit_p1: {
    es: "Creel y Divisadero son hitos, no simples paradas. El Chepe Express enlaza el paisaje en una sucesión de ventanas: cada una cambia la escena sin apresurarte.",
    en: "Creel and Divisadero are milestones, not mere stops. Chepe Express links the landscape in a sequence of windows: each shifts the scene without rushing you."
  },
  edit_p2: {
    es: "Nuestros paquetes a Barrancas del Cobre desde Chihuahua o Los Mochis buscan una sola cosa: que lo legendario se sienta cercano, y lo cotidiano del viaje, impecable.",
    en: "Our Copper Canyon packages from Chihuahua or Los Mochis aim for one thing: that the legendary feels close, and the everyday travel details feel flawless."
  },

  why_r0_t: { es: "Territorio conocido", en: "Known territory" },
  why_r0_d: {
    es: "Tiempos, clima y paradas: lo que sugerimos lo hemos vivido.",
    en: "Timing, weather and stops: we have lived what we suggest."
  },
  why_r1_t: { es: "Curaduría real", en: "Real curation" },
  why_r1_d: {
    es: "Hoteles y experiencias por sensación, no por catálogo.",
    en: "Hotels and experiences by feel, not by catalogue."
  },
  why_r2_t: { es: "Un solo interlocutor", en: "One point of contact" },
  why_r2_d: {
    es: "Chepe, pernoctas y tours bajo una misma coordinación.",
    en: "Chepe, nights and tours under one coordination."
  },
  why_s0: { es: "Rutas diseñadas", en: "Designed routes" },
  why_s1: { es: "Clases Chepe", en: "Chepe classes" },

  design_card_bus_t: { es: "Autobuses a tu medida", en: "Buses tailored to you" },
  design_card_bus_d: {
    es: "Tu decides la salida y nosotros coordinamos el traslado terrestre ideal para tu grupo o servicio privado.",
    en: "You choose departure; we coordinate the right ground transfer for your group or private service."
  },
  design_card_reg_t: { es: "Chepe Regional", en: "Chepe Regional" },
  design_card_reg_d: {
    es: "Salidas fijas por origen; al solicitar transporte despliega el calendario del servicio para ver días y conexiones.",
    en: "Fixed departures by origin; when you request transport, expand the service calendar to see days and connections."
  },
  design_card_reg_schedules: {
    es: "Calendario fijo: desde Chihuahua sale martes y sábado; desde Los Mochis, miércoles y domingo. Conecta estaciones del tramo regional según tu itinerario.",
    en: "Fixed schedule: from Chihuahua on Tuesday and Saturday; from Los Mochis on Wednesday and Sunday. Regional segment stops follow your itinerary."
  },
  design_card_exp_t: { es: "Chepe Express", en: "Chepe Express" },
  design_card_exp_d: {
    es: "Tramo Los Mochis–Creel y regreso; Turista, Ejecutiva o Primera. Tarifas más altas en temporada alta y más accesibles en baja. El detalle de días y horarios va al desplegar el formulario.",
    en: "Los Mochis–Creel and return; Tourist, Executive or First. Higher fares in high season, lower in low. Days and times appear when you open the request form."
  },
  design_card_exp_schedules: {
    es: "Los Mochis → Creel: lunes, jueves y sábado. Creel → Los Mochis: martes, viernes y domingo. En mayo, junio, agosto y septiembre el tren suele operar solo de jueves a domingo (revisa calendario oficial).\n\nHorarios de referencia: Los Mochis 07:00 → Creel 17:40 (paradas El Fuerte, Bahuichivo, Divisadero). Regreso Creel 08:00 → Los Mochis 16:40.\n\nEn Sinaloa hay una hora menos que en Chihuahua. Las estaciones abren una hora antes de la salida.",
    en: "Los Mochis → Creel: Monday, Thursday and Saturday. Creel → Los Mochis: Tuesday, Friday and Sunday. In May, June, August and September service is often Thursday–Sunday only (check the official calendar).\n\nSample times: Los Mochis 07:00 → Creel 17:40 (El Fuerte, Bahuichivo, Divisadero). Return Creel 08:00 → Los Mochis 16:40.\n\nSinaloa is one hour behind Chihuahua. Stations open one hour before departure."
  },
};

export function translate(locale: SiteLocale, key: string, vars?: Record<string, string | number>): string {
  const row = LEX[key];
  if (!row) return key;
  let out = row[locale] ?? row.es;
  if (vars) {
    for (const [k, v] of Object.entries(vars)) {
      out = out.replaceAll(`{${k}}`, String(v));
    }
  }
  return out;
}

/** Rutas: textos largos EN por id de ruta. */
export const ROUTE_LEX: Record<
  string,
  { duration: { es: string; en: string }; vibe: { es: string; en: string } }
> = {
  "route-chih-creel-chih": {
    duration: { es: "4–5 días sugeridos", en: "4–5 suggested days" },
    vibe: {
      es: "Ideal para primera vez: Sierra Tarahumara en versión cómoda y bien curada.",
      en: "Ideal for a first visit: Sierra Tarahumara in a comfortable, curated version."
    }
  },
  "route-chih-creel-mochis": {
    duration: { es: "5–6 días sugeridos", en: "5–6 suggested days" },
    vibe: {
      es: "La travesía completa: paisajes dramáticos, tren icónico y cierre costero.",
      en: "The full crossing: dramatic landscapes, iconic train and a coastal finish."
    }
  },
  "route-mochis-creel-mochis": {
    duration: { es: "4–5 días sugeridos", en: "4–5 suggested days" },
    vibe: {
      es: "Entrada cinematográfica por el cañón: Chepe, miradores y descanso.",
      en: "A cinematic entry through the canyon: Chepe, viewpoints and rest."
    }
  },
  "route-mochis-creel-chih": {
    duration: { es: "5–6 días sugeridos", en: "5–6 suggested days" },
    vibe: {
      es: "Ruta épica con ritmo premium: lo mejor del Chepe y la sierra.",
      en: "An epic route at a premium pace: the best of Chepe and the sierra."
    }
  }
};

export function routeField<K extends "duration" | "vibe">(
  locale: SiteLocale,
  routeId: string,
  field: K,
  fallbackEs: string
): string {
  const row = ROUTE_LEX[routeId];
  if (!row || !row[field]) return fallbackEs;
  const cell = row[field];
  return locale === "en" ? cell.en : cell.es;
}

export const FAQ_LEX: Array<{ q: { es: string; en: string }; a: { es: string; en: string } }> = [
  {
    q: {
      es: "¿Cuántos días necesito para conocer Barrancas del Cobre?",
      en: "How many days do I need to see Copper Canyon?"
    },
    a: {
      es: "Para una primera vez recomendamos 4–5 días. Si quieres incluir más paradas, tours regionales y disfrutar con calma, 6 días suele ser ideal.",
      en: "For a first visit we suggest 4–5 days. If you want more stops, regional tours and a relaxed pace, 6 days is often ideal."
    }
  },
  {
    q: {
      es: "¿Qué diferencia hay entre Chepe Express turista, ejecutiva y primera?",
      en: "What is the difference between Chepe Express Tourist, Executive and First?"
    },
    a: {
      es: "Cambia el nivel de servicio, comodidad y ubicación. En Rumbo Co te ayudamos a elegir según tu estilo de viaje y la experiencia que quieres vivir, sin complicaciones.",
      en: "Service level, comfort and seat location differ. At Rumbo Co we help you choose based on your travel style and the experience you want—without hassle."
    }
  },
  {
    q: {
      es: "¿Qué días sale el Chepe Regional?",
      en: "What days does Chepe Regional run?"
    },
    a: {
      es: "Desde Chihuahua circula martes y sábado; desde Los Mochis, miércoles y domingo. Al diseñar tu viaje confirmamos horarios y conexiones según la temporada.",
      en: "From Chihuahua it runs Tuesday and Saturday; from Los Mochis, Wednesday and Sunday. When we design your trip we confirm times and connections for your dates."
    }
  },
  {
    q: {
      es: "¿Es mejor salir desde Chihuahua o desde Los Mochis?",
      en: "Is it better to start from Chihuahua or Los Mochis?"
    },
    a: {
      es: "Depende del ritmo y el tipo de paisajes que prefieras. Desde Chihuahua entras directo a la sierra; desde Los Mochis vives una transición dramática desde cañón y río hacia las alturas.",
      en: "It depends on pace and scenery. From Chihuahua you go straight into the sierra; from Los Mochis you get a dramatic shift from canyon and river up into the highlands."
    }
  },
  {
    q: { es: "¿Qué incluye un paquete?", en: "What does a package include?" },
    a: {
      es: "Nuestros paquetes integran hospedaje, tren (Chepe Express), traslados y una curaduría de experiencias. La tarifa del tren depende también de temporada alta o baja. Lo exacto varía por duración y nivel; lo ajustamos a tu estilo.",
      en: "Packages bundle lodging, train (Chepe Express), transfers and a curated set of experiences. Train fares also depend on high or low season. Details vary by length and tier; we tune them to your style."
    }
  },
  {
    q: { es: "¿Se puede personalizar el itinerario?", en: "Can the itinerary be customized?" },
    a: {
      es: "Sí. Diseñamos tu viaje como experiencia a medida: paradas, hoteles, tours, ritmo y extras. Lo armamos contigo y lo coordinamos de punta a punta.",
      en: "Yes. We design your trip as a bespoke experience: stops, hotels, tours, pace and extras. We build it with you and coordinate end to end."
    }
  },
  {
    q: { es: "¿Tienen opciones para grupos?", en: "Do you offer options for groups?" },
    a: {
      es: "Sí. Creamos viajes grupales privados para amigos, empresas, escuelas y familias grandes. Sin precio público: la cotización se diseña por perfil y fechas.",
      en: "Yes. We create private group trips for friends, companies, schools and large families. No public pricing: quotes are built by profile and dates."
    }
  },
  {
    q: { es: "¿Cuál es la mejor temporada?", en: "What is the best season?" },
    a: {
      es: "Primavera y otoño suelen ser ideales por clima. Invierno ofrece paisajes únicos; verano es verde y vivo. Te recomendamos según tu tolerancia al frío y lo que quieres ver.",
      en: "Spring and autumn are often ideal for weather. Winter brings unique landscapes; summer is lush and vivid. We recommend based on cold tolerance and what you want to see."
    }
  },
  {
    q: {
      es: "¿Qué días y horarios tiene el Chepe Express?",
      en: "What days and times does Chepe Express run?"
    },
    a: {
      es: "De Los Mochis hacia Creel suele salir lunes, jueves y sábado; de Creel hacia Los Mochis, martes, viernes y domingo. En mayo, junio, agosto y septiembre el calendario suele reducirse a jueves a domingo. Horarios de referencia: salida Los Mochis 07:00 y llegada a Creel 17:40 hacia la sierra; regreso salida Creel 08:00 y llegada Los Mochis 16:40 (paradas en El Fuerte, Bahuichivo y Divisadero). En Sinaloa hay una hora menos que en Chihuahua; las estaciones abren una hora antes. Los precios del boleto suben en temporada alta y bajan en temporada baja. Siempre confirmamos con el calendario oficial al armar tu viaje.",
      en: "Los Mochis toward Creel usually runs Monday, Thursday and Saturday; Creel toward Los Mochis Tuesday, Friday and Sunday. In May, June, August and September schedules often narrow to Thursday–Sunday. Sample times: Los Mochis 07:00 to Creel 17:40 toward the sierra; return Creel 08:00 to Los Mochis 16:40 (stops at El Fuerte, Bahuichivo and Divisadero). Sinaloa is one hour behind Chihuahua; stations open one hour early. Ticket prices are higher in high season and lower in low season. We always confirm against the official calendar when building your trip."
    }
  }
];

export const TESTIMONIAL_LEX: Record<string, { es: string; en: string }> = {
  t1: {
    es: "Se sintió premium de verdad: todo coordinado, hoteles impecables y el Chepe fue un momento inolvidable. Volvería sin pensarlo.",
    en: "It truly felt premium: everything coordinated, flawless hotels and Chepe was unforgettable. I would return without thinking twice."
  },
  t2: {
    es: "Nos diseñaron una ruta con el ritmo perfecto. Sin estrés, sin improvisar. Solo disfrutar.",
    en: "They designed a route with the perfect pace. No stress, no improvising. Just enjoyment."
  },
  t3: {
    es: "Nos encantó la atención: recomendaciones reales y una experiencia muy bien cuidada. Se nota que conocen el destino.",
    en: "We loved the care: real recommendations and a very well looked-after experience. You can tell they know the destination."
  }
};
