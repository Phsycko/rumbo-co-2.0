export type RouteCard = {
  id: string;
  from: "Chihuahua" | "Los Mochis";
  to: "Chihuahua" | "Los Mochis";
  via: string[];
  title: string;
  duration: string;
  vibe: string;
  image: string;
  anchorId: string;
};

export type ChepeClass = "No incluir tren" | "Turista" | "Ejecutiva" | "Primera";

export type PackageBadge = "Más vendido" | "Premium" | "Ideal para primera vez";

export type PackageCard = {
  id: string;
  durationKey: "4D/3N" | "5D/4N" | "6D/5N";
  name: string;
  chepeClass: Exclude<ChepeClass, "No incluir tren">;
  badge: PackageBadge;
  includes: string[];
  highlight: string;
};

export type FaqItem = { q: string; a: string };

export type Testimonial = {
  id: string;
  name: string;
  city: string;
  quote: string;
  rating?: 5 | 4;
};

export const routes: RouteCard[] = [
  {
    id: "route-chih-creel-chih",
    from: "Chihuahua",
    to: "Chihuahua",
    via: ["Creel", "Divisadero"],
    title: "Chihuahua → Creel → Chihuahua",
    duration: "4–5 días sugeridos",
    vibe: "Ideal para primera vez: Sierra Tarahumara en versión cómoda y bien curada.",
    image: "/images/routes/chihuahua-cuadro-1.png",
    anchorId: "paquetes"
  },
  {
    id: "route-chih-creel-mochis",
    from: "Chihuahua",
    to: "Los Mochis",
    via: ["Creel", "Divisadero", "El Fuerte"],
    title: "Chihuahua → Creel → Los Mochis",
    duration: "5–6 días sugeridos",
    vibe: "La travesía completa: paisajes dramáticos, tren icónico y cierre costero.",
    image: "/images/routes/creel-cuadro-2.png",
    anchorId: "paquetes"
  },
  {
    id: "route-mochis-creel-mochis",
    from: "Los Mochis",
    to: "Los Mochis",
    via: ["El Fuerte", "Creel", "Divisadero"],
    title: "Los Mochis → Creel → Los Mochis",
    duration: "4–5 días sugeridos",
    vibe: "Entrada cinematográfica por el cañón: Chepe, miradores y descanso.",
    image: "/images/routes/los-mochis-cuadro-3.png",
    anchorId: "paquetes"
  },
  {
    id: "route-mochis-creel-chih",
    from: "Los Mochis",
    to: "Chihuahua",
    via: ["El Fuerte", "Creel", "Divisadero"],
    title: "Los Mochis → Creel → Chihuahua",
    duration: "5–6 días sugeridos",
    vibe: "Ruta épica con ritmo premium: lo mejor del Chepe y la sierra.",
    image: "/images/routes/barrancas-cuadro-4.png",
    anchorId: "paquetes"
  }
];

export const packages: PackageCard[] = [
  {
    id: "p-4-turista",
    durationKey: "4D/3N",
    name: "PAQ 4D/3N",
    chepeClass: "Turista",
    badge: "Ideal para primera vez",
    highlight:
      "3 noches de hospedaje, 3 tours y Chepe Express clase turista hacia Divisadero. Todo integrado para una ruta completa desde Chihuahua.",
    includes: [
      "3 noches de hospedaje",
      "Hotel economico a elegir: Paraje Santa Cruz o La Quinta",
      "3 tours: Region Tarahumara, Barrancas del Cobre y Comunidad Menonita",
      "Chepe Express clase Turista hacia Divisadero",
      "Entradas incluidas",
      "Desayunos incluidos",
      "Traslado redondo desde Chihuahua"
    ]
  },
  {
    id: "p-4-ejecutiva",
    durationKey: "4D/3N",
    name: "PAQ 4D/3N",
    chepeClass: "Ejecutiva",
    badge: "Más vendido",
    highlight:
      "3 noches de hospedaje, 3 tours y Chepe Express clase Ejecutiva hacia Divisadero. Todo integrado para una ruta completa desde Chihuahua.",
    includes: [
      "3 noches de hospedaje",
      "Hotel ejecutivo: Santa Cruz",
      "3 tours: Region Tarahumara, Barrancas del Cobre y Comunidad Menonita",
      "Chepe Express clase Ejecutiva hacia Divisadero",
      "Entradas incluidas",
      "Desayunos incluidos",
      "Traslado redondo desde Chihuahua"
    ]
  },
  {
    id: "p-4-primera",
    durationKey: "4D/3N",
    name: "PAQ 4D/3N",
    chepeClass: "Primera",
    badge: "Premium",
    highlight:
      "3 noches de hospedaje, 3 tours y Chepe Express clase Primera hacia Divisadero. Todo integrado para una ruta completa desde Chihuahua.",
    includes: [
      "3 noches de hospedaje",
      "Hotel premium a elegir: Quinta Mision, Parador del Alma o Hacienda Don Armando",
      "3 tours: Region Tarahumara, Barrancas del Cobre y Comunidad Menonita",
      "Chepe Express clase Primera hacia Divisadero",
      "Entradas incluidas",
      "Desayunos incluidos",
      "Traslado redondo desde Chihuahua"
    ]
  },
  {
    id: "p-5-turista",
    durationKey: "5D/4N",
    name: "PAQ 5D/4N",
    chepeClass: "Turista",
    badge: "Ideal para primera vez",
    highlight:
      "4 noches de hospedaje, 4 tours y Teleferico incluido para vivir una travesia completa y equilibrada.",
    includes: [
      "4 noches de hospedaje",
      "Hotel economico a elegir: Paraje Santa Cruz o La Quinta",
      "4 tours: Region Tarahumara, Barrancas del Cobre, Comunidad Menonita y Aguas Termales de Recowata",
      "Chepe Express clase Turista",
      "Teleferico incluido",
      "Desayunos incluidos",
      "Traslado redondo"
    ]
  },
  {
    id: "p-5-ejecutiva",
    durationKey: "5D/4N",
    name: "PAQ 5D/4N",
    chepeClass: "Ejecutiva",
    badge: "Más vendido",
    highlight:
      "4 noches de hospedaje, 4 tours y Teleferico incluido para vivir una travesia completa y equilibrada.",
    includes: [
      "4 noches de hospedaje",
      "Hotel ejecutivo: Santa Cruz",
      "4 tours: Region Tarahumara, Barrancas del Cobre, Comunidad Menonita y Aguas Termales de Recowata",
      "Chepe Express clase Ejecutiva",
      "Teleferico incluido",
      "Desayunos incluidos",
      "Traslado redondo"
    ]
  },
  {
    id: "p-5-primera",
    durationKey: "5D/4N",
    name: "PAQ 5D/4N",
    chepeClass: "Primera",
    badge: "Premium",
    highlight:
      "4 noches de hospedaje, 4 tours y Teleferico incluido para vivir una travesia completa y equilibrada.",
    includes: [
      "4 noches de hospedaje",
      "Hotel premium a elegir: Quinta Mision, Parador del Alma o Hacienda Don Armando",
      "4 tours: Region Tarahumara, Barrancas del Cobre, Comunidad Menonita y Aguas Termales de Recowata",
      "Chepe Express clase Primera",
      "Teleferico incluido",
      "Desayunos incluidos",
      "Traslado redondo"
    ]
  },
  {
    id: "p-6-turista",
    durationKey: "6D/5N",
    name: "PAQ 6D/5N",
    chepeClass: "Turista",
    badge: "Ideal para primera vez",
    highlight:
      "5 noches de hospedaje y 5 tours para una travesia premium completa con Chepe Express clase Turista.",
    includes: [
      "5 noches de hospedaje",
      "Hotel economico a elegir: Paraje Santa Cruz o La Quinta",
      "5 tours: Region Tarahumara, Barrancas del Cobre, Comunidad Menonita, Aguas Termales de Recowata y Cascada de Basaseachi",
      "Chepe Express clase Turista",
      "Entradas incluidas",
      "Teleferico incluido",
      "Tirolesa o zip line incluidos",
      "Desayunos incluidos",
      "Traslados redondos"
    ]
  },
  {
    id: "p-6-ejecutiva",
    durationKey: "6D/5N",
    name: "PAQ 6D/5N",
    chepeClass: "Ejecutiva",
    badge: "Más vendido",
    highlight:
      "5 noches de hospedaje y 5 tours para una travesia premium completa con Chepe Express clase Ejecutiva.",
    includes: [
      "5 noches de hospedaje",
      "Hotel ejecutivo: Santa Cruz",
      "5 tours: Region Tarahumara, Barrancas del Cobre, Comunidad Menonita, Aguas Termales de Recowata y Cascada de Basaseachi",
      "Chepe Express clase Ejecutiva",
      "Entradas incluidas",
      "Teleferico incluido",
      "Tirolesa o zip line incluidos",
      "Desayunos incluidos",
      "Traslados redondos"
    ]
  },
  {
    id: "p-6-primera",
    durationKey: "6D/5N",
    name: "PAQ 6D/5N",
    chepeClass: "Primera",
    badge: "Premium",
    highlight:
      "5 noches de hospedaje y 5 tours para una travesia premium completa con Chepe Express Primera Clase.",
    includes: [
      "5 noches de hospedaje",
      "Hotel premium a elegir: Quinta Mision, Parador del Alma o Hacienda Don Armando",
      "5 tours: Region Tarahumara, Barrancas del Cobre, Comunidad Menonita, Aguas Termales de Recowata y Cascada de Basaseachi",
      "Chepe Express Primera Clase",
      "Entradas incluidas",
      "Teleferico incluido",
      "Tirolesa o zip line incluidos",
      "Desayunos incluidos",
      "Traslados redondos"
    ]
  }
];

export const faqs: FaqItem[] = [
  {
    q: "¿Cuántos días necesito para conocer Barrancas del Cobre?",
    a: "Para una primera vez recomendamos 4–5 días. Si quieres incluir más paradas, tours regionales y disfrutar con calma, 6 días suele ser ideal."
  },
  {
    q: "¿Qué diferencia hay entre Chepe Express turista, ejecutiva y primera?",
    a: "Cambia el nivel de servicio, comodidad y ubicación. En Rumbo Co te ayudamos a elegir según tu estilo de viaje y la experiencia que quieres vivir, sin complicaciones."
  },
  {
    q: "¿Qué días sale el Chepe Regional?",
    a: "Desde Chihuahua circula martes y sábado; desde Los Mochis, miércoles y domingo. Al diseñar tu viaje confirmamos horarios y conexiones según la temporada."
  },
  {
    q: "¿Es mejor salir desde Chihuahua o desde Los Mochis?",
    a: "Depende del ritmo y el tipo de paisajes que prefieras. Desde Chihuahua entras directo a la sierra; desde Los Mochis vives una transición dramática desde cañón y río hacia las alturas."
  },
  {
    q: "¿Qué incluye un paquete?",
    a: "Nuestros paquetes integran hospedaje, tren (Chepe Express), traslados y una curaduría de experiencias. La tarifa del tren depende también de temporada alta o baja. Lo exacto varía por duración y nivel; lo ajustamos a tu estilo."
  },
  {
    q: "¿Se puede personalizar el itinerario?",
    a: "Sí. Diseñamos tu viaje como experiencia a medida: paradas, hoteles, tours, ritmo y extras. Lo armamos contigo y lo coordinamos de punta a punta."
  },
  {
    q: "¿Tienen opciones para grupos?",
    a: "Sí. Creamos viajes grupales privados para amigos, empresas, escuelas y familias grandes. Sin precio público: la cotización se diseña por perfil y fechas."
  },
  {
    q: "¿Cuál es la mejor temporada?",
    a: "Primavera y otoño suelen ser ideales por clima. Invierno ofrece paisajes únicos; verano es verde y vivo. Te recomendamos según tu tolerancia al frío y lo que quieres ver."
  },
  {
    q: "¿Qué días y horarios tiene el Chepe Express?",
    a: "De Los Mochis hacia Creel suele salir lunes, jueves y sábado; de Creel hacia Los Mochis, martes, viernes y domingo. En mayo, junio, agosto y septiembre el calendario suele reducirse a jueves a domingo. Horarios de referencia: salida Los Mochis 07:00 y llegada a Creel 17:40 hacia la sierra; regreso salida Creel 08:00 y llegada Los Mochis 16:40 (paradas en El Fuerte, Bahuichivo y Divisadero). En Sinaloa hay una hora menos que en Chihuahua; las estaciones abren una hora antes. Los precios del boleto suben en temporada alta y bajan en temporada baja. Siempre confirmamos con el calendario oficial al armar tu viaje."
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana G.",
    city: "CDMX",
    quote:
      "Se sintió premium de verdad: todo coordinado, hoteles impecables y el Chepe fue un momento inolvidable. Volvería sin pensarlo.",
    rating: 5
  },
  {
    id: "t2",
    name: "Carlos R.",
    city: "Chihuahua",
    quote:
      "Nos diseñaron una ruta con el ritmo perfecto. Sin estrés, sin improvisar. Solo disfrutar.",
    rating: 5
  },
  {
    id: "t3",
    name: "A. / L.",
    city: "Los Mochis",
    quote:
      "Nos encantó la atención: recomendaciones reales y una experiencia muy bien cuidada. Se nota que conocen el destino.",
    rating: 4
  }
];

export const seoAnchors = [
  { id: "barrancas-del-cobre", label: "Barrancas del Cobre" },
  { id: "paquetes", label: "Paquetes" },
  { id: "chepe-express", label: "Chepe Express" },
  { id: "desde-chihuahua", label: "Desde Chihuahua" },
  { id: "desde-los-mochis", label: "Desde Los Mochis" }
] as const;

