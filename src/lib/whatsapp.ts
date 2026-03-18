const WHATSAPP_NUMBER = "5215512345678";
const DEFAULT_MESSAGE = "Hola Rumbo Co, quiero recibir una propuesta para mi viaje premium a Barrancas del Cobre.";

export function buildWhatsAppUrl(message?: string) {
  const payload = message ?? DEFAULT_MESSAGE;
  const encoded = encodeURIComponent(payload);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export function openWhatsApp(message?: string) {
  if (typeof window === "undefined") return;
  window.open(buildWhatsAppUrl(message), "_blank");
}
