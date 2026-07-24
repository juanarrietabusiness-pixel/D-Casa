# DECISION.md — D'CASA Panamá

Registro de las decisiones de ADN para este sitio (lo que leería Claude Code al reabrir el proyecto).

## 1. Familia

**Familia E (negocio local) del sistema ZERA, adaptada al ADN propio de D'CASA.**
Razón: D'CASA es un negocio local que vive de que lo encuentren y lo contacten → multipágina + SEO.
Pero su ADN (v3) **contradice** la estética por defecto de la familia E (serif editorial, terracota,
minimalismo nórdico). Se prioriza el ADN de D'CASA: azul/amarillo/blanco, plano y ordenado.

## 2. Paleta (extraída del logo real)

| Rol | Color |
|---|---|
| Azul madre | `#1648C0` |
| Amarillo acción | `#FFD000` |
| Blanco / aire | `#FFFFFF` |
| Navy (texto largo, derivado) | `#0E2A6B` |
| Hueso (fondos cálidos) | `#F7F4EF` |
| Arena (alternos) | `#E8E2D9` |
| Grafito (texto secundario) | `#2B2E38` |

Proporción **60/30/10**. Regla dura: **el amarillo nunca toca el blanco.**
CTAs = azul sobre amarillo (5.24:1 AA). Precios = amarillo sobre azul en placa.

## 3. Tipografía

- Display: **Oswald** (condensada, caja alta, bold) — titulares de 2–5 palabras y precios.
- Cuerpo: **Inter** (caja normal, buena legibilidad).
- Fallbacks: Archivo Narrow / Barlow Condensed / Anton (display); Barlow / Work Sans (cuerpo).
- Prohibido: serifs editoriales, scripts, tipografías con bordes/sombras.

## 4. Bloques (por página)

- **Home:** hero (placa + banda) → marquee categorías → 3 valores → grid de categorías →
  utilidad (cómo medir) → ambientes preview → FAQ → CTA de cierre → footer.
- **Catálogo:** cabecera + 6 secciones de categoría con tarjetas y precio-por-WhatsApp + CTA.
- **Ambientes:** galería de marcos (placeholder de foto real) + "mismo modelo, tu espacio" + invitación a comunidad.
- **Guías:** índice + 4 guías útiles (medir, colchón, sofá, colores) + CTA. Contenido real, no inventado.
- **Contacto:** formulario que compone un mensaje de WhatsApp (sin backend) + tarjetas de contacto.

## 5. Signature

**La placa** (marco blanco redondeado del logo) usada como contenedor recurrente: cards, marcos de
foto, badges, cabeceras. Reforzada por la **banda inferior amarilla** ("azul arriba, amarillo abajo").

## 6. Arquitectura y stack

Multipágina **estática** (HTML/CSS/JS vanilla), sin build. Elegido sobre Vite/React por: máxima
compatibilidad con SEO (HTML real por ruta), rendimiento sin overhead de framework, y coherencia con
la estética plana del ADN (no necesita motor de animación cinemática). Deploy: Netlify / Hostinger.

## 7. Voz

El **Amigo cercano + Sabio práctico**: clara, cálida y panameña, útil antes que vendedora, segura
nunca desesperada. CTA único: **Escríbenos por WhatsApp**.

## 8. Giro del negocio (confirmado)

**Retail de muebles y artículos para el hogar** (no fabricación a medida). El copy usa
"te lo llevamos", "te cabe", "entrega a todo el país".

## 9. Pendiente del cliente

Número de WhatsApp, NAP (dirección/horario/mapa), fotos reales de ambientes, dominio definitivo,
testimonios con permiso y (si se mide) IDs reales de analítica. Ver `content.json`.
