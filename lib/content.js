// Contenido editable del sitio. Fuente de verdad del texto.
// Regla: nada inventado (precios, cifras, testimonios). El precio va por WhatsApp.

export const CATEGORIES = [
  { n: "01", slug: "salas", title: "Salas", desc: "Sofás, seccionales y mesas de centro que aprovechan cada centímetro." },
  { n: "02", slug: "comedores", title: "Comedores", desc: "Mesas y sillas para 4, 6 u 8 puestos. Del diario al día especial." },
  { n: "03", slug: "recamaras", title: "Recámaras", desc: "Camas, cómodas y clósets que ordenan sin quitarte espacio." },
  { n: "04", slug: "colchones", title: "Colchones", desc: "Del firme al suave. Te ayudamos a elegir el que te va a durar." },
  { n: "05", slug: "decoracion", title: "Decoración", desc: "El detalle que termina el ambiente: textiles, luz y accesorios." },
  { n: "06", slug: "exteriores", title: "Exteriores", desc: "Balcón, terraza o patio: muebles que aguantan el clima de aquí." },
];

export const CATALOG = [
  {
    slug: "salas", n: "01", title: "Salas",
    intro: "Desde el sofá del diario hasta el seccional para toda la familia. Con brazos delgados ganas paso en salas chiquitas.",
    items: [
      { tag: "Sofá 3 puestos", title: "Sofá de sala", desc: "El de siempre, cómodo y resistente. Ideal para espacios de medianos a amplios.", wa: "Hola D'CASA, me interesa un sofá de 3 puestos para la sala 🛋️" },
      { tag: "Seccional en L", title: "Seccional", desc: "Más puestos sin ocupar de más. Perfecto para sala-comedor integrada.", wa: "Hola D'CASA, me interesa un seccional en L para la sala 🛋️" },
      { tag: "Mesa de centro", title: "Mesas y complementos", desc: "Mesas de centro, laterales y muebles de TV para completar el ambiente.", wa: "Hola D'CASA, me interesa una mesa de centro para la sala 🛋️" },
    ],
  },
  {
    slug: "comedores", n: "02", title: "Comedores",
    intro: "Para 4, 6 u 8 puestos. Te ayudamos a elegir el tamaño según tu espacio y cuántos se sientan a diario.",
    items: [
      { tag: "4 puestos", title: "Comedor compacto", desc: "Para apartamentos y cocinas abiertas. Ocupa poco y rinde.", wa: "Hola D'CASA, me interesa un comedor de 4 puestos 🍽️" },
      { tag: "6 puestos", title: "Comedor familiar", desc: "El más pedido. Aguanta el diario y se ve bien cuando llega visita.", wa: "Hola D'CASA, me interesa un comedor de 6 puestos 🍽️" },
      { tag: "8 puestos", title: "Comedor amplio", desc: "Para casas con espacio y reuniones grandes. Robusto y con presencia.", wa: "Hola D'CASA, me interesa un comedor de 8 puestos 🍽️" },
    ],
  },
  {
    slug: "recamaras", n: "03", title: "Recámaras",
    intro: "Camas, cómodas y clósets que ordenan sin quitarte espacio. Del cuarto principal al de los niños.",
    items: [
      { tag: "Cama Queen / King", title: "Camas", desc: "Base y cabecera en varios tamaños. Te decimos cuál te cabe según tu cuarto.", wa: "Hola D'CASA, me interesa una cama para la recámara 🛏️" },
      { tag: "Cómoda / gavetero", title: "Cómodas", desc: "Guardado que suma orden sin robar paso. Combinan con la cama.", wa: "Hola D'CASA, me interesa una cómoda para la recámara 🛏️" },
      { tag: "Clóset / ropero", title: "Clósets", desc: "Para cuartos sin clóset fijo. Aprovechan el alto de la pared.", wa: "Hola D'CASA, me interesa un clóset para la recámara 🛏️" },
    ],
  },
  {
    slug: "colchones", n: "04", title: "Colchones",
    intro: "Del firme al suave. Te preguntamos cómo duermes y te decimos cuál te va a durar y a cuidar la espalda.",
    items: [
      { tag: "Firme", title: "Soporte firme", desc: "Para quien duerme boca arriba o de lado y quiere buen soporte.", wa: "Hola D'CASA, me interesa un colchón firme 😴" },
      { tag: "Intermedio", title: "Balanceado", desc: "El punto medio. El más versátil para parejas con gustos distintos.", wa: "Hola D'CASA, me interesa un colchón intermedio 😴" },
      { tag: "Suave / memory", title: "Acolchado suave", desc: "Sensación mullida para quien duerme de lado y quiere abrazo.", wa: "Hola D'CASA, me interesa un colchón suave 😴" },
    ],
  },
  {
    slug: "decoracion", n: "05", title: "Decoración",
    intro: "El detalle que termina el ambiente. Textiles, luz y accesorios que combinan con lo que ya tienes.",
    items: [
      { tag: "Textiles", title: "Cortinas y cojines", desc: "Cambian el ambiente sin obra. Te ayudamos a combinar colores.", wa: "Hola D'CASA, me interesa decoración textil para mi casa ✨" },
      { tag: "Iluminación", title: "Lámparas", desc: "De mesa, de pie o de techo. La luz correcta ordena el espacio.", wa: "Hola D'CASA, me interesa iluminación para mi casa ✨" },
      { tag: "Accesorios", title: "Complementos", desc: "Espejos, cuadros y organizadores que rematan el ambiente.", wa: "Hola D'CASA, me interesa decoración y accesorios ✨" },
    ],
  },
  {
    slug: "exteriores", n: "06", title: "Exteriores",
    intro: "Balcón, terraza o patio. Muebles pensados para el clima de aquí: sol, lluvia y humedad.",
    items: [
      { tag: "Juego de terraza", title: "Salas de exterior", desc: "Para recibir afuera. Materiales que aguantan sol y lluvia.", wa: "Hola D'CASA, me interesa un juego para la terraza 🌤️" },
      { tag: "Comedor de patio", title: "Comedores de exterior", desc: "Para el patio o la parrillada del fin de semana.", wa: "Hola D'CASA, me interesa un comedor de patio 🌤️" },
      { tag: "Balcón", title: "Muebles de balcón", desc: "Compactos para espacios chicos. Sacan provecho de cada rincón.", wa: "Hola D'CASA, me interesa mueble para el balcón 🌤️" },
    ],
  },
];

export const FAQ = [
  { q: "¿Hacen entregas a todo Panamá?", a: "Sí, llegamos a todo el país. Cuéntanos tu zona por WhatsApp y te decimos costo y fecha de entrega. ¿Para cuándo lo necesitas?" },
  { q: "¿Cómo sé el precio de un mueble?", a: "Nos escribes por WhatsApp con el mueble que te gustó y te pasamos el precio y la disponibilidad al momento. Sin vueltas y sin vergüenza: el precio va con orgullo." },
  { q: "¿Qué formas de pago manejan?", a: "Manejamos varias formas de pago para que te acomodes. Escríbenos y te explicamos la que mejor te sirve." },
  { q: "¿Me ayudan a saber si el mueble me cabe?", a: "Claro. Si nos pasas las medidas de tu espacio por WhatsApp, te decimos si te queda perfecto o cuál te conviene más. Para eso estamos." },
  { q: "¿Puedo ver los muebles antes de comprar?", a: "Sí. Escríbenos por WhatsApp y coordinamos cómo verlos y confirmamos existencias y colores disponibles hoy mismo." },
];

export const AMBIENTES = [
  { title: "Sala en apartamento", label: "Sala compacta", icon: "home" },
  { title: "Comedor familiar", label: "Comedor 6 puestos", icon: "table" },
  { title: "Recámara principal", label: "Recámara", icon: "bed" },
  { title: "Terraza panameña", label: "Exterior", icon: "sun" },
  { title: "Sala-comedor integrada", label: "Espacio abierto", icon: "window" },
  { title: "Antes / después", label: "Transformación", icon: "swap" },
];
