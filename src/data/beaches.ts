export type BeachDestination = {
  id: string;
  name: { es: string; en: string };
  vibe: { es: string; en: string };
  /** CSS linear-gradient — siempre visible (no depende de clases Tailwind dinámicas). */
  surface: string;
  image?: string;
};

export const beachDestinations: BeachDestination[] = [
  {
    id: "cancun",
    name: { es: "Cancún", en: "Cancun" },
    vibe: { es: "Caribe turquesa", en: "Turquoise Caribbean" },
    surface: "linear-gradient(145deg, #3d5a5e 0%, #2f484c 55%, #243a3e 100%)",
    image: "/images/beyond/playas.png"
  },
  {
    id: "tulum",
    name: { es: "Tulum", en: "Tulum" },
    vibe: { es: "Riviera y cenotes", en: "Riviera & cenotes" },
    surface: "linear-gradient(145deg, #3f5248 0%, #33443c 55%, #283530 100%)",
    image: "/images/beyond/tulum.png"
  },
  {
    id: "mazatlan",
    name: { es: "Mazatlán", en: "Mazatlan" },
    vibe: { es: "Pacífico y malecón", en: "Pacific coast & boardwalk" },
    surface: "linear-gradient(145deg, #524a40 0%, #433c34 55%, #352f28 100%)",
    image: "/images/beyond/mazatlan.png"
  },
  {
    id: "vallarta",
    name: { es: "Puerto Vallarta", en: "Puerto Vallarta" },
    vibe: { es: "Bahía y pueblo", en: "Bay & old town" },
    surface: "linear-gradient(145deg, #3f4a54 0%, #333d46 55%, #28313a 100%)",
    image: "/images/beyond/vallarta.png"
  },
  {
    id: "cabo",
    name: { es: "Los Cabos", en: "Los Cabos" },
    vibe: { es: "Desierto y mar", en: "Desert meets sea" },
    surface: "linear-gradient(145deg, #504840 0%, #403a32 55%, #322e26 100%)",
    image: "/images/beyond/cabo.png"
  },
  {
    id: "huatulco",
    name: { es: "Huatulco", en: "Huatulco" },
    vibe: { es: "Bahías tranquilas", en: "Quiet bays" },
    surface: "linear-gradient(145deg, #35524f 0%, #2c4542 55%, #233836 100%)",
    image: "/images/beyond/huatulco.png"
  }
];
