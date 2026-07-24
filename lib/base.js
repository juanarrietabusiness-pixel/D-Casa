// Prefijo de ruta base (vacío en Netlify; "/D-Casa" en GitHub Pages).
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
export const asset = (p) => `${BASE}${p}`;
