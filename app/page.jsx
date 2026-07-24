import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { CATEGORIES, FAQ } from "@/lib/content";
import { Hero } from "@/components/Hero";
import { Marquee, CtaClose } from "@/components/sections";
import { Reveal, Stagger, Item } from "@/components/motion";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { LineIcon } from "@/components/icons";

const VALUES = [
  { icon: "list", title: "Precios claros", text: "El precio va grande y sin disculpas. Nada de “consultar por interno” con vergüenza: te lo pasamos al momento." },
  { icon: "truck", title: "Entrega a todo el país", text: "Cuéntanos tu zona y te decimos costo y fecha. Te lo llevamos y te ayudamos a acomodarlo." },
  { icon: "chat", title: "Te asesoramos de verdad", text: "Te enseñamos a medir y a combinar para que no falles. Útil antes que vendedor: esa es la diferencia." },
];

const TIPS = [
  { n: "1", h: "Mide el hueco, no el mueble", p: "Largo y fondo de la pared donde irá. Deja 20 cm de paso a cada lado para caminar cómodo." },
  { n: "2", h: "Revisa la entrada", p: "Ancho de puertas y pasillos, y si hay escalera o ascensor. Un sofá con brazos delgados te da 20 cm de más." },
  { n: "3", h: "Pásanos las medidas", p: "Nos escribes por WhatsApp con esos números y te decimos si te queda perfecto o cuál te conviene más." },
];

const AMB = [
  { icon: "home", title: "Sala montada", label: "Sala" },
  { icon: "table", title: "Comedor familiar", label: "Comedor" },
  { icon: "bed", title: "Recámara principal", label: "Recámara" },
];

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  const store = {
    "@context": "https://schema.org", "@type": "FurnitureStore",
    name: "D'CASA Panamá",
    description: "Tienda de muebles y artículos para el hogar en Panamá. Precios claros y entrega a todo el país.",
    url: SITE_URL + "/", logo: SITE_URL + "/assets/img/logo.svg", image: SITE_URL + "/assets/img/og.png",
    areaServed: { "@type": "Country", name: "Panamá" },
    sameAs: ["https://instagram.com/dcasapty"], priceRange: "$$",
  };
  const faqLd = {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <JsonLd data={store} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: "D'CASA Panamá", url: SITE_URL + "/", inLanguage: "es" }} />
      <JsonLd data={faqLd} />

      <main id="main">
        <Hero />

        <Marquee items={["Salas", "Comedores", "Recámaras", "Colchones", "Decoración", "Exteriores"]} />

        {/* POR QUÉ */}
        <section className="section" aria-labelledby="valores-title">
          <div className="container">
            <Reveal className="section-head">
              <span className="kicker">Por qué D'CASA</span>
              <h2 id="valores-title">Accesible, y además ordenado.</h2>
              <p>Nadie en Panamá ocupa la casilla de precio amigable con las cosas bien puestas. Nosotros sí.</p>
            </Reveal>
            <Stagger className="value-row">
              {VALUES.map((v) => (
                <Item className="value" key={v.title} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <div className="icon-box"><LineIcon name={v.icon} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CATEGORÍAS */}
        <section className="section section--warm" aria-labelledby="cat-title">
          <div className="container">
            <Reveal className="section-head">
              <span className="kicker">Catálogo</span>
              <h2 id="cat-title">Todo para tu espacio</h2>
              <p>Elige por ambiente. Cada mueble con su medida clara para que sepas si te cabe antes de comprar.</p>
            </Reveal>
            <Stagger className="cards">
              {CATEGORIES.map((c) => (
                <Item as="a" className="card card--warm" href={`/catalogo/#${c.slug}`} key={c.slug} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <span className="card__num">{c.n}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <span className="card__arrow">Ver {c.title.toLowerCase()} →</span>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CÓMO MEDIR */}
        <section className="section" aria-labelledby="medir-title">
          <div className="container split">
            <Reveal>
              <span className="kicker">Guía útil · guárdala</span>
              <h2 id="medir-title">Cómo medir tu sala antes de comprar</h2>
              <p className="lead">Tres medidas y una regla. Con esto no vuelves a comprar un sofá que no te cabe por la puerta.</p>
              <div className="btn-row mt-8"><Link className="btn btn--brand" href="/guias/">Ver todas las guías</Link></div>
            </Reveal>
            <Stagger className="tip-list">
              {TIPS.map((t) => (
                <Item className="tip" key={t.n}><span className="n">{t.n}</span><div><h3>{t.h}</h3><p>{t.p}</p></div></Item>
              ))}
            </Stagger>
          </div>
        </section>

        {/* AMBIENTES */}
        <section className="section section--sand" aria-labelledby="amb-title">
          <div className="container">
            <Reveal className="section-head">
              <span className="kicker">Ambientes reales</span>
              <h2 id="amb-title">Así se ve en una casa de verdad</h2>
              <p>Espacios panameños reales, no render. Mismo mueble, tu espacio.</p>
            </Reveal>
            <Stagger className="ambientes">
              {AMB.map((a) => (
                <Item as="figure" className="frame" key={a.label} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <div className="frame__ph"><LineIcon name={a.icon} /><span>{a.title}</span><small>Foto real de cliente — pendiente de sesión fotográfica</small></div>
                  <figcaption className="frame__label"><b>{a.label}</b><span className="badge badge--outline">Ambiente</span></figcaption>
                </Item>
              ))}
            </Stagger>
            <Reveal className="btn-row mt-8"><Link className="btn btn--ghost" href="/ambientes/">Ver más ambientes</Link></Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" aria-labelledby="faq-title">
          <div className="container">
            <Reveal className="section-head">
              <span className="kicker">Preguntas frecuentes</span>
              <h2 id="faq-title">Lo que todos preguntan</h2>
            </Reveal>
            <Reveal><Faq /></Reveal>
          </div>
        </section>

        <CtaClose
          kicker="Hablemos"
          title="Cuéntanos tu espacio. Nosotros te lo resolvemos."
          text="Un solo mensaje y te asesoramos: medidas, precio, entrega y formas de pago. Fácil."
          waText="Hola D'CASA, quiero asesoría para amoblar mi casa 👋"
        />
      </main>
    </>
  );
}
