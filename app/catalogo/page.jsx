import { SITE_URL } from "@/lib/site";
import { CATALOG } from "@/lib/content";
import { Reveal, Stagger, Item } from "@/components/motion";
import { CtaClose } from "@/components/sections";
import { PageHead } from "@/components/PageHead";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const metadata = {
  title: "Catálogo de muebles",
  description: "Salas, comedores, recámaras, colchones, decoración y exteriores. Muebles para tu casa en Panamá con medidas claras. Precio y disponibilidad al instante por WhatsApp.",
  alternates: { canonical: "/catalogo/" },
  openGraph: { url: "/catalogo/", title: "Catálogo de muebles — D'CASA Panamá" },
};

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Catálogo", item: SITE_URL + "/catalogo/" },
  ],
};

export default function Catalogo() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <main id="main">
        <PageHead crumb="Catálogo" kicker="Catálogo" title="Todo para tu casa, por ambiente">
          Aquí ves qué manejamos y su medida. El precio y la disponibilidad te los pasamos al instante por WhatsApp: así te confirmamos color y existencia de hoy.
        </PageHead>

        {CATALOG.map((cat, i) => (
          <section className={"section" + (i % 2 ? " section--warm" : "")} id={cat.slug} key={cat.slug} aria-labelledby={`${cat.slug}-title`}>
            <div className="container">
              <Reveal className="section-head">
                <span className="kicker">{cat.n} · {cat.title}</span>
                <h2 id={`${cat.slug}-title`}>{cat.title}</h2>
                <p>{cat.intro}</p>
              </Reveal>
              <Stagger className="cards">
                {cat.items.map((it) => (
                  <Item as="article" className={"card" + (i % 2 ? " card--warm" : "")} key={it.title} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                    <span className="card__num">{it.tag}</span>
                    <h3>{it.title}</h3>
                    <p>{it.desc}</p>
                    <span className="price-hint"><span className="price-hint__dot" aria-hidden="true" />Te pasamos el precio por WhatsApp</span>
                    <WhatsAppLink className="btn btn--ghost" text={it.wa}>Consultar este</WhatsAppLink>
                  </Item>
                ))}
              </Stagger>
            </div>
          </section>
        ))}

        <CtaClose
          kicker="¿No sabes por dónde empezar?"
          title="Cuéntanos tu espacio y te armamos la lista."
          text="Nos pasas medidas y presupuesto, y te decimos qué combina y qué te cabe. Fácil."
          waText="Hola D'CASA, quiero ayuda para amoblar mi espacio 👋"
        />
      </main>
    </>
  );
}
