# D'CASA Panamá — Sitio web

Sitio de **D'CASA Panamá** (muebles y artículos para el hogar) construido con
**Next.js (App Router) + framer-motion + Lenis**, exportado como **HTML estático**
(`output: 'export'`) para máximo SEO local y rendimiento.

Diseño sobre el **ADN de marca de D'CASA (v3)**: estética **plana, ordenada, cálida y
panameña** — azul `#1648C0` + amarillo `#FFD000` + blanco, proporción 60/30/10, la
**placa** como dispositivo recurrente. El *movimiento* es cinemático pero sobrio: un solo
momento orquestado (el hero), scroll suave y reveals con stagger.

---

## Stack

- **Next.js 14** App Router, `output: 'export'` → HTML estático por ruta.
- **framer-motion** — hero orquestado, reveals por scroll, micro-interacciones.
- **Lenis** — scroll suave (se desactiva con `prefers-reduced-motion`).
- **next/font/local** — Oswald + Inter self-hosted (sin CLS, sin CDN).
- Sin Tailwind: el sistema de diseño vive en `app/globals.css` (tokens de marca).

## Estructura

```
app/
  layout.jsx           Nav + Footer + WaFloat + fuentes + metadata base
  globals.css          Design system (tokens + componentes)
  page.jsx             Home (hero orquestado)
  catalogo/…           Catálogo por ambiente
  ambientes/…          Ambientes reales
  guias/…              Guías útiles
  contacto/…           Contacto + formulario que compone WhatsApp
  not-found.jsx        404
  sitemap.js robots.js Metadata routes (SEO)
  fonts.js  fonts/     next/font/local (woff2)
components/            Nav, Footer, Hero, motion (Reveal/Stagger), Faq, ContactForm, icons…
lib/
  config.js            ⚠️ DATOS DE CONTACTO (WhatsApp, redes) — editar antes de publicar
  content.js           Contenido (categorías, catálogo, FAQ, ambientes)
  site.js              URL de producción
public/assets/img/     logo.svg · favicon.svg · og.png
legacy-static/         Versión estática anterior (HTML/CSS/JS) — solo referencia
```

## Comandos

```bash
npm install       # dependencias
npm run dev       # desarrollo (http://localhost:3000)
npm run build     # build → carpeta out/ (HTML estático)
npx serve out     # servir el build estático
```

## Despliegue (Netlify)

Conecta el repo en Netlify con:

- **Build command:** `npm run build`
- **Publish directory:** `out`

`netlify.toml` ya trae cache de assets y cabeceras de seguridad. No requiere plugin
(es export estático). Al conectar un dominio propio, actualiza `lib/site.js`.

> Nota: es un *static export*. Para GitHub Pages en subruta (`/repo/`) haría falta
> `basePath`; en Netlify con dominio raíz no hace falta.

---

## ⚠️ Antes de publicar (pendientes del cliente)

En **`lib/config.js`**:
1. **`whatsapp`** — número real (formato `5076XXXXXXX`, sin `+` ni espacios).
   Mientras esté vacío, los botones de WhatsApp caen a `/contacto/`.
2. **`nap`** — dirección, ciudad y enlace de Google Maps.

Además:
- [ ] **Fotos reales** de ambientes → reemplazar los marcos placeholder (`frame`)
      por `<Image>`/`<img>` reales con `alt`, `width`/`height` y `loading="lazy"`.
- [ ] **Dominio definitivo** en `lib/site.js` (hoy `https://www.dcasa.com.pa`).
- [ ] **Ubicación y horario** en `app/contacto/`.
- [ ] **Testimonios reales** (nombre + zona + foto, con permiso) para la sección Comunidad.
- [ ] **Analítica** (GA4 / Meta Pixel) con IDs reales, si se va a medir.

> El sitio **no inventa** precios, cifras ni testimonios. El precio se entrega por WhatsApp
> (así lo define el playbook del ADN); las fotos de ambiente son marcos de marca hasta la
> sesión fotográfica real.

## Calidad aplicada

- **Accesibilidad**: skip link, `:focus-visible`, contraste AA/AAA, `prefers-reduced-motion`
  real (framer `reducedMotion="user"`), un solo `<h1>` por página, HTML semántico, fallback
  `<noscript>` para que el contenido sea visible sin JS.
- **SEO**: HTML estático por ruta, `title`/`description` únicos, canonical, OG/Twitter,
  JSON-LD (FurnitureStore, FAQPage, BreadcrumbList, HowTo), sitemap y robots.
- **Rendimiento**: fuentes self-hosted subseteadas, JS por ruta ≈135 KB, solo se anima
  `transform`/`opacity`.

Ver `docs/DECISION.md` para el detalle de decisiones de ADN.
