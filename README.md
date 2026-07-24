# D'CASA Panamá — Sitio web

Sitio estático (HTML + CSS + JavaScript vanilla) para **D'CASA Panamá**, tienda de
muebles y artículos para el hogar. Sin paso de build: se publica tal cual.

Construido sobre el **ADN de marca de D'CASA (v3)** y los estándares de producción del
sistema ZERA (accesibilidad, rendimiento y SEO). Estética **plana, ordenada, cálida y
panameña** — azul `#1648C0` + amarillo `#FFD000` + blanco, proporción 60/30/10.

---

## Estructura

```
.
├── index.html          Home
├── catalogo.html       Catálogo por ambiente (salas, comedores, recámaras, colchones, decoración, exteriores)
├── ambientes.html      Ambientes reales / inspiración
├── guias.html          Guías útiles (cómo medir, elegir colchón, comprar sofá, combinar colores)
├── contacto.html       Contacto + formulario que compone un mensaje de WhatsApp
├── 404.html            Página de error con salida
├── assets/
│   ├── css/tokens.css  Tokens de marca (colores, escalas, movimiento) — única fuente del estilo
│   ├── css/styles.css  Sistema de componentes
│   ├── js/config.js    ⚠️ DATOS DE CONTACTO — se edita antes de publicar
│   ├── js/main.js      Nav móvil, acordeón, reveals, links de WhatsApp
│   └── img/            logo.svg · favicon.svg · og.png/svg
├── brand.json          Tokens de marca en JSON (documentación)
├── content.json        Contenido editable + lista de pendientes del cliente
├── robots.txt · sitemap.xml
└── netlify.toml        Configuración de despliegue
```

---

## Cómo verlo en local

No requiere Node ni instalación. Cualquier servidor estático sirve:

```bash
# opción 1
python3 -m http.server 8080
# opción 2
npx serve .
```

Luego abre http://localhost:8080

---

## ⚠️ Antes de publicar (pendientes del cliente)

Edita **`assets/js/config.js`** y completa:

1. **`whatsapp`** — número real en formato internacional sin `+` ni espacios (ej. `5076XXXXXXX`).
   Mientras esté vacío, todos los botones de WhatsApp llevan con elegancia a la página de contacto.
2. **`nap`** — dirección, ciudad y enlace de Google Maps.
3. Opcional: `tiktok`, `email`, `phoneDisplay`.

Además:

- [ ] **Fotos reales** de ambientes → reemplazar los marcos placeholder en `index.html` y `ambientes.html`
      (busca `frame__ph`) por `<img>` reales con `alt` descriptivo, `loading="lazy"` y `width/height`.
- [ ] **Dominio definitivo** → reemplazar `https://www.dcasa.com.pa/` en las etiquetas `canonical`,
      `og:url`, JSON-LD, `robots.txt` y `sitemap.xml`.
- [ ] **Ubicación y horario** en `contacto.html` (hoy dice "estamos afinando estos datos").
- [ ] **Testimonios reales** (nombre + zona + foto, con permiso) para la sección Comunidad de `ambientes.html`.
      No se publican inventados: es una regla del ADN.
- [ ] **Analítica** (GA4 / Meta Pixel) con IDs reales, si se va a medir. Nunca placeholders `G-XXXX`.

> El sitio **no inventa** precios, cifras ni testimonios. El precio se entrega por WhatsApp
> (así lo define el playbook de conversión del ADN), y las fotos de ambientes son marcos de marca
> hasta que llegue la sesión fotográfica real.

---

## Despliegue

### Netlify (recomendado)
1. Sube este repo a GitHub.
2. En Netlify: *Add new site → Import from Git* y elige el repo.
3. Build command: *(vacío)* · Publish directory: `.`
4. Deploy. `netlify.toml` ya trae cache de assets, cabeceras de seguridad y 404.

### Hostinger / cualquier hosting estático
Sube todos los archivos a la carpeta pública (`public_html`). No hay build.

---

## Decisiones de marca aplicadas

- **Colores exactos** del logo real y **reglas de contraste WCAG** (§3 del ADN): el amarillo nunca
  toca blanco; CTAs en azul-sobre-amarillo; precios en amarillo-sobre-azul dentro de placa.
- **Tipografía**: Oswald (condensada, caja alta, titulares 2–5 palabras) + Inter (cuerpo).
- **La placa** como dispositivo recurrente y la **banda inferior amarilla** ("azul arriba, amarillo abajo").
- **Voz**: el pana que sabe de casas — clara, cálida, útil, segura. CTA único: *Escríbenos por WhatsApp*.
- **Accesibilidad**: skip link, `:focus-visible`, contraste ≥4.5:1, `prefers-reduced-motion`,
  objetivos táctiles ≥48px, navegación por teclado, HTML semántico con un solo `<h1>` por página.
- **SEO**: multipágina, títulos y descripciones únicos, canonical, OG/Twitter, JSON-LD
  (FurnitureStore, FAQPage, BreadcrumbList, HowTo), sitemap y robots.

Ver `docs/DECISION.md` para el detalle.
