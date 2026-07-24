// ÚNICO lugar con los datos de contacto reales.
// ⚠️ Antes de publicar: pon el número real de WhatsApp (formato 5076XXXXXXX, sin + ni espacios).
export const CONFIG = {
  whatsapp: "",                       // vacío => los botones caen a /contacto
  instagram: "https://instagram.com/dcasapty",
  instagramHandle: "@dcasapty",
  tiktok: "",
  email: "",
  phoneDisplay: "",
  nap: { locality: "Ciudad de Panamá", region: "Panamá", country: "PA", street: "", mapsUrl: "" },
};

// Construye el link de WhatsApp con mensaje contextual (o cae a /contacto/).
export function waHref(text) {
  const msg = encodeURIComponent(text || "Hola D'CASA, quiero más información 👋");
  return CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${msg}` : "/contacto/";
}
