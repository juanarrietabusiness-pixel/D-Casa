/* ============================================================
   D'CASA PANAMÁ — config.js
   ÚNICO lugar donde viven los datos de contacto de la marca.
   ⚠️ ANTES DE PUBLICAR: pon el número real de WhatsApp.
   El resto del sitio lee de aquí; no hardcodees datos en el HTML.
   ============================================================ */
window.DCASA = {
  // Número de WhatsApp en formato internacional SIN "+", espacios ni guiones.
  // Ej. Panamá: "5076XXXXXXX".  Déjalo vacío hasta tenerlo: los botones
  // caerán con elegancia a la página de contacto en lugar de romperse.
  whatsapp: "",

  // Redes / contacto conocidos (del ADN de marca)
  instagram: "https://instagram.com/dcasapty",
  instagramHandle: "@dcasapty",
  tiktok: "",            // opcional
  email: "",             // opcional: hola@dcasa.com.pa
  phoneDisplay: "",      // opcional para mostrar, ej. "+507 6XXX-XXXX"

  // Ubicación (NAP) — el cliente la completa antes de lanzar
  nap: {
    name: "D'CASA Panamá",
    street: "",          // dirección exacta
    locality: "Ciudad de Panamá",
    region: "Panamá",
    country: "PA",
    mapsUrl: ""          // enlace a Google Maps
  }
};
