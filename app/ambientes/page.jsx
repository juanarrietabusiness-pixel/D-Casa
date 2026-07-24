import { SITE_URL } from "@/lib/site";
import { AMBIENTES } from "@/lib/content";
import { Reveal, Stagger, Item } from "@/components/motion";
import { PageHead } from "@/components/PageHead";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { WhatsAppIcon, LineIcon } from "@/components/icons";

export const metadata = {
  title: "Ambientes reales",
  description: "Espacios panameños reales amoblados con D'CASA. Salas, comedores y recámaras montadas de verdad. Mismo modelo, tu espacio. Escríbenos por WhatsApp.",
  alternates: { canonical: "/ambientes/" },
  openGraph: { url: "/ambientes/", title: "Ambientes reales — D'CASA Panamá" },
};

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Ambientes", item: SITE_URL + "/ambientes/" },
  ],
};

const PASOS = [
  { n: "1", h: "Nos mandas tu espacio", p: "Una foto y las medidas por WhatsApp. Con eso ya entendemos qué te sirve." },
  { n: "2", h: "Te proponemos el ambiente", p: "Te decimos qué muebles combinan, en qué colores y cómo distribuirlos." },
  { n: "3", h: "Te lo llevamos y lo montamos", p: "Coordinamos entrega en tu zona y te ayudamos a acomodarlo. Quedó." },
];

export default function Ambientes() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <main id="main">
        <PageHead crumb="Ambientes" kicker="Ambientes reales" title="Así se ve en una casa de verdad">
          Espacios panameños reales, con luz natural y tonos cálidos. No render, no showroom nórdico. Mismo modelo, tu espacio.
        </PageHead>

        <section className="section" aria-labelledby="galeria-title">
          <div className="container">
            <Reveal className="section-head">
              <span className="kicker">Galería</span>
              <h2 id="galeria-title">Ambientes montados</h2>
              <p>Elige el ambiente que se parece al tuyo y pídenos el detalle. Te decimos qué muebles son y si te caben.</p>
            </Reveal>
            <Stagger className="ambientes">
              {AMBIENTES.map((a) => (
                <Item as="figure" className="frame" key={a.title} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <div className="frame__ph"><LineIcon name={a.icon} /><span>{a.title}</span><small>Foto real de cliente — pendiente de sesión fotográfica</small></div>
                  <figcaption className="frame__label"><b>{a.label}</b><span className="badge badge--outline">Ambiente</span></figcaption>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="section section--warm" aria-labelledby="como-title">
          <div className="container split">
            <Reveal>
              <span className="kicker">Mismo modelo, tu espacio</span>
              <h2 id="como-title">Te lo mostramos en tu casa, no en un showroom</h2>
              <p className="lead">La foto de catálogo se ve linda, pero lo que importa es cómo queda en tu espacio real. Por eso trabajamos así:</p>
              <div className="btn-row mt-8">
                <WhatsAppLink className="btn btn--brand" text="Hola D'CASA, quiero ver cómo quedaría un ambiente en mi espacio 👋">Pídenos tu ambiente</WhatsAppLink>
              </div>
            </Reveal>
            <Stagger className="tip-list">
              {PASOS.map((s) => (
                <Item className="tip" key={s.n}><span className="n">{s.n}</span><div><h3>{s.h}</h3><p>{s.p}</p></div></Item>
              ))}
            </Stagger>
          </div>
        </section>

        <section className="section" aria-labelledby="social-title">
          <div className="container narrow text-center">
            <Reveal>
              <span className="kicker" style={{ justifyContent: "center" }}>Comunidad D'CASA</span>
              <h2 id="social-title">¿Ya amoblaste con nosotros?</h2>
              <p style={{ marginInline: "auto" }}>Mándanos la foto de cómo quedó tu espacio. Con tu permiso, lo compartimos aquí para que otra familia se inspire. Así se llena esta sección: con casas reales, no con montajes.</p>
              <div className="btn-row" style={{ justifyContent: "center" }}>
                <WhatsAppLink className="btn btn--primary" text="Hola D'CASA, quiero compartir la foto de mi espacio 📸"><WhatsAppIcon /> Compartir mi espacio</WhatsAppLink>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </>
  );
}
