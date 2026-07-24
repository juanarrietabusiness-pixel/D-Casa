// ÚNICO lugar con los datos de contacto reales.
// ⚠️ Antes de publicar: pon el número real de WhatsApp (formato 5076XXXXXXX, sin + ni espacios).
export const CONFIG = {
  whatsapp: "50760261919",            // +507 6026-1919 (formato wa.me, sin + ni espacios)
  instagram: "https://instagram.com/dcasapty",
  instagramHandle: "@dcasapty",
  tiktok: "",
  email: "",
  phoneDisplay: "+507 6026-1919",
  nap: { locality: "Ciudad de Panamá", region: "Panamá", country: "PA", street: "", mapsUrl: "" },
};

// Construye el link de WhatsApp con mensaje contextual.
// Si aún no hay número, cae a Instagram (canal real) — nunca a un loop a /contacto/.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export function waHref(text) {
  const msg = encodeURIComponent(text || "Hola D'CASA, quiero más información 👋");
  if (CONFIG.whatsapp) return `https://wa.me/${CONFIG.whatsapp}?text=${msg}`;
  return CONFIG.instagram || `${BASE}/contacto/`;
}
// ¿El destino abre una app/red externa? (para target=_blank y rel).
export const waIsExternal = !!(CONFIG.whatsapp || CONFIG.instagram);
