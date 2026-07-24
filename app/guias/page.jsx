import Link from "next/link";
import { SITE_URL } from "@/lib/site";
import { Reveal, Stagger, Item } from "@/components/motion";
import { CtaClose } from "@/components/sections";
import { PageHead } from "@/components/PageHead";
import { JsonLd } from "@/components/JsonLd";

export const metadata = {
  title: "Guías útiles para amoblar tu casa",
  description: "Cómo medir tu sala, elegir colchón, comprar el sofá correcto y combinar colores. Guías claras y prácticas de D'CASA para que no falles al amoblar tu casa en Panamá.",
  alternates: { canonical: "/guias/" },
  openGraph: { url: "/guias/", title: "Guías útiles para amoblar tu casa — D'CASA Panamá" },
};

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Guías", item: SITE_URL + "/guias/" },
  ],
};
const howTo = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "Cómo medir tu sala antes de comprar un mueble",
  step: [
    { "@type": "HowToStep", name: "Mide el hueco", text: "Toma el largo y el fondo de la pared donde irá el mueble y deja 20 cm de paso a cada lado." },
    { "@type": "HowToStep", name: "Revisa la entrada", text: "Mide el ancho de puertas y pasillos, y considera si hay escalera o ascensor." },
    { "@type": "HowToStep", name: "Compara con la medida del mueble", text: "Pásanos las medidas por WhatsApp y confirmamos si te queda perfecto o cuál te conviene más." },
  ],
};

const INDEX = [
  { href: "#medir", n: "Guía 01", t: "Cómo medir tu sala", d: "3 medidas y una regla para que el mueble te quepa por la puerta." },
  { href: "#colchon", n: "Guía 02", t: "Elegir colchón", d: "Firme, intermedio o suave según cómo duermes." },
  { href: "#sofa", n: "Guía 03", t: "3 errores al comprar un sofá", d: "Lo que casi todos olvidan y les cuesta caro." },
  { href: "#colores", n: "Guía 04", t: "Combinar colores", d: "Una fórmula simple para que todo se vea ordenado." },
];

const medir = [
  { n: "1", h: "Mide el hueco, no el mueble", p: "Largo y fondo de la pared donde irá. Ese es tu límite real." },
  { n: "2", h: "Revisa la entrada", p: "Ancho de puertas y pasillos, y si hay escalera o ascensor." },
  { n: "3", h: "Deja el paso", p: "20 cm libres a cada lado. Un espacio ordenado se camina sin chocar." },
  { n: "4", h: "Pásanos los números", p: "Con tus medidas te confirmamos el modelo exacto que te queda." },
];
const colchon = [
  { n: "1", h: "Boca arriba o boca abajo", p: "Te conviene un colchón más firme que sostenga la columna." },
  { n: "2", h: "De lado", p: "Uno intermedio o suave que amortigüe hombro y cadera." },
  { n: "3", h: "En pareja con gustos distintos", p: "El intermedio es el punto de encuentro más seguro." },
  { n: "4", h: "Calor de Panamá", p: "Pregúntanos por materiales frescos y transpirables. Importa aquí." },
];
const sofa = [
  { n: "1", h: "Solo mirar el ancho", p: "El fondo también importa: un sofá muy profundo te come la sala. Míralo completo." },
  { n: "2", h: "Olvidar la puerta", p: "Si no entra por la entrada, no importa lo lindo que sea. Mide antes." },
  { n: "3", h: "Elegir por foto, no por uso", p: "¿Se sienta la familia entera? ¿Ves películas ahí? El uso decide el modelo." },
];
const colores = [
  { n: "60", h: "Color base", p: "Paredes y muebles grandes en un tono neutro y cálido. Es el lienzo." },
  { n: "30", h: "Color secundario", p: "Un sofá, alfombra o cortina que dé carácter sin gritar." },
  { n: "10", h: "Acento", p: "Cojines, cuadros o una lámpara con el toque de color fuerte. Poco y con intención." },
];

function Tips({ list }) {
  return (
    <Stagger className="tip-list">
      {list.map((t) => (
        <Item className="tip" key={t.n}><span className="n">{t.n}</span><div><h3>{t.h}</h3><p>{t.p}</p></div></Item>
      ))}
    </Stagger>
  );
}

export default function Guias() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={howTo} />
      <main id="main">
        <PageHead crumb="Guías" kicker="Guías útiles · guárdalas" title="Para que no falles al amoblar">
          El pana que sabe de casas te enseña primero, te vende después. Estas guías te ahorran comprar dos veces.
        </PageHead>

        <section className="section">
          <div className="container">
            <Stagger className="cards">
              {INDEX.map((g) => (
                <Item as="a" className="card" href={g.href} key={g.href} whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <span className="card__num">{g.n}</span><h3>{g.t}</h3><p>{g.d}</p><span className="card__arrow">Leer →</span>
                </Item>
              ))}
            </Stagger>
          </div>
        </section>

        <article className="section section--warm" id="medir" aria-labelledby="g1-title">
          <div className="container split">
            <Reveal>
              <span className="kicker">Guía 01</span>
              <h2 id="g1-title">Cómo medir tu sala antes de comprar</h2>
              <p className="lead">La causa número uno de una compra devuelta: el mueble no cabía o no entraba. Se evita con cinta métrica y cinco minutos.</p>
              <p>Regla rápida: deja siempre <strong>20 cm de paso</strong> para caminar cómodo entre el mueble y la pared o mesa de enfrente. Un sofá con brazos delgados te da ese espacio de más en salas chiquitas.</p>
            </Reveal>
            <Tips list={medir} />
          </div>
        </article>

        <article className="section" id="colchon" aria-labelledby="g2-title">
          <div className="container split">
            <Tips list={colchon} />
            <Reveal>
              <span className="kicker">Guía 02</span>
              <h2 id="g2-title">Elegir el colchón que te va a durar</h2>
              <p className="lead">No hay colchón “mejor”: hay el mejor para cómo duermes tú. Empieza por tu posición al dormir.</p>
              <p>Un buen colchón se nota en la espalda al tercer día, no en la tienda. Cuéntanos cómo duermes y te orientamos sin presionarte.</p>
            </Reveal>
          </div>
        </article>

        <article className="section section--warm" id="sofa" aria-labelledby="g3-title">
          <div className="container split">
            <Reveal>
              <span className="kicker">Guía 03</span>
              <h2 id="g3-title">3 errores al comprar un sofá</h2>
              <p className="lead">Un sofá es de las compras que más dura en una casa. Vale la pena hacerla bien la primera vez.</p>
              <p>Si dudas entre dos modelos, escríbenos las medidas de tu sala y te decimos con cuál ganas más espacio sin perder puestos.</p>
            </Reveal>
            <Tips list={sofa} />
          </div>
        </article>

        <article className="section" id="colores" aria-labelledby="g4-title">
          <div className="container split">
            <Tips list={colores} />
            <Reveal>
              <span className="kicker">Guía 04</span>
              <h2 id="g4-title">Combinar colores sin equivocarte</h2>
              <p className="lead">La regla 60/30/10: un color manda, otro acompaña y uno remata. Con eso un espacio se ve ordenado y no caótico.</p>
              <p>¿Tienes ya un mueble o pared de un color? Mándanos la foto y te decimos qué combina para que todo cuadre.</p>
            </Reveal>
          </div>
        </article>

        <CtaClose kicker="¿Te quedó una duda?" title="Pregúntanos. Para eso estamos." text="Te respondemos claro, sin tecnicismos y sin apuro. Enseñar es parte de vender bien." waText="Hola D'CASA, tengo una duda antes de comprar 👋" />
      </main>
    </>
  );
}
