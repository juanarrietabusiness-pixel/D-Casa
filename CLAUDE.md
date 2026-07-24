# CLAUDE.md — reglas permanentes de este repositorio

## Proyecto

- **Cliente:** D'CASA Panamá
- **Sector / zona:** Retail de muebles y artículos para el hogar · Panamá
- **Objetivo principal del sitio:** conversaciones de WhatsApp (lead → asesoría → venta)
- **ADN:** propio de D'CASA (v3), sobre estándares de producción del sistema ZERA (familia E adaptada)
- **Signature:** la placa (marco blanco redondeado) como contenedor recurrente + banda inferior amarilla
- **Arquitectura:** multipágina estática (HTML/CSS/JS, sin build)
- **Versión:** estático-v1.0.0

## Documentos de referencia

1. `brand.json` — tokens de la marca. **Única fuente de verdad del estilo.**
2. `content.json` — contenido editable + pendientes del cliente.
3. `assets/js/config.js` — datos de contacto reales (WhatsApp, NAP, redes).
4. `docs/DECISION.md` — qué se decidió y por qué.

## Stack

HTML5 semántico · CSS con custom properties (tokens) · JavaScript vanilla (progressive enhancement).
Sin framework, sin build. Despliegue: Netlify o cualquier hosting estático.

## Reglas innegociables (del ADN de D'CASA)

1. **El amarillo `#FFD000` NUNCA toca el blanco directamente** (1.47:1 = invisible).
   CTAs = azul sobre amarillo. Precios = amarillo sobre azul, dentro de placa.
2. **Proporción 60/30/10** — 60% claro/hueso, 30% azul, 10% amarillo. El amarillo es el subrayado, no el párrafo.
3. **Un solo acento** (amarillo). **Cero degradados, sombras dramáticas o neón.** El sistema es plano.
4. **Tipografía:** Oswald (display, caja alta, 2–5 palabras) + Inter (cuerpo, caja normal).
   Prohibidos: serifs editoriales, scripts, tipografías de bazar.
5. **No inventes contenido.** Nada de precios, cifras ni testimonios ficticios.
   El precio va por WhatsApp; las fotos reales las pone el cliente.
6. **Accesibilidad:** `:focus-visible` en todo lo interactivo, contraste ≥4.5:1,
   `prefers-reduced-motion` real, teclado de principio a fin, un solo `<h1>` por página.
7. **Rendimiento:** animar solo `transform`/`opacity`; imágenes reales con `loading="lazy"` y dimensiones.
8. **Voz:** el pana que sabe de casas — clara, cálida y panameña, útil antes que vendedora, segura
   nunca desesperada. CTA único y siempre igual: **Escríbenos por WhatsApp**.

## Nunca

- Añadir un segundo acento cromático o usar la estética serif/terracota (la prohíbe el ADN de D'CASA).
- Hardcodear el número de WhatsApp o la dirección en el HTML: van en `assets/js/config.js`.
- Publicar testimonios anónimos o cifras sin fuente.
- Gritar en mayúsculas en párrafos ni usar "remate/liquidación total/¡CORRE!".

## Estado actual

Sitio completo (Home, Catálogo, Ambientes, Guías, Contacto, 404) con sistema de diseño, SEO y
accesibilidad. **Bloqueado esperando del cliente:** número de WhatsApp, NAP, fotos reales de
ambientes, dominio definitivo y testimonios con permiso. Ver `content.json → pendienteDelCliente`.
