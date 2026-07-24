import { SITE_URL } from "@/lib/site";
import { CONFIG } from "@/lib/config";
import { Reveal } from "@/components/motion";
import { CtaClose } from "@/components/sections";
import { PageHead } from "@/components/PageHead";
import { JsonLd } from "@/components/JsonLd";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const metadata = {
  title: "Contacto y ubicación",
  description: "Escríbenos por WhatsApp o Instagram y te asesoramos con tu compra. Muebles y artículos para el hogar con entrega a todo Panamá.",
  alternates: { canonical: "/contacto/" },
  openGraph: { url: "/contacto/", title: "Contacto y ubicación — D'CASA Panamá" },
};

const breadcrumb = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL + "/" },
    { "@type": "ListItem", position: 2, name: "Contacto", item: SITE_URL + "/contacto/" },
  ],
};

export default function Contacto() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <main id="main">
        <PageHead crumb="Contacto" kicker="Hablemos" title="Escríbenos y te resolvemos">
          La forma más rápida es por WhatsApp: te pasamos precio, disponibilidad y entrega al momento. También estamos en Instagram.
        </PageHead>

        <section className="section">
          <div className="container split">
            <Reveal>
              <span className="kicker">Cuéntanos qué buscas</span>
              <h2>Te armamos el mensaje</h2>
              <p>Llena esto y al enviar te abrimos WhatsApp con tu consulta lista. Así el asesor ya sabe qué necesitas.</p>
              <ContactForm />
            </Reveal>

            <Reveal className="stack">
              <div className="plate--light plate" style={{ padding: "var(--sp-6)" }}>
                <span className="badge badge--yellow">La vía más rápida</span>
                <h3 style={{ marginTop: "var(--sp-4)" }}>WhatsApp</h3>
                <p style={{ color: "var(--muted)" }}>Precio, disponibilidad y entrega al momento. Te respondemos en horario de tienda.</p>
                <div className="btn-row mt-8">
                  <WhatsAppLink className="btn btn--brand" text="Hola D'CASA, quiero que me asesoren 👋">Abrir WhatsApp</WhatsAppLink>
                </div>
              </div>
              <div className="plate--light plate" style={{ padding: "var(--sp-6)" }}>
                <h3>Instagram</h3>
                <p style={{ color: "var(--muted)" }}>Mira ambientes, ofertas y tips del día a día.</p>
                <div className="btn-row mt-8">
                  <a className="btn btn--ghost" href={CONFIG.instagram} target="_blank" rel="noopener">Seguir {CONFIG.instagramHandle}</a>
                </div>
              </div>
              <div className="plate--light plate" id="ubicacion" style={{ padding: "var(--sp-6)" }}>
                <h3>Ubicación y horario</h3>
                <p style={{ color: "var(--muted)" }}>Estamos afinando estos datos. Escríbenos por WhatsApp y con gusto te confirmamos dirección, horario y cómo llegar.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <CtaClose title="El pana que sabe de casas, a un mensaje." text="Sin apuro y sin letras chiquitas. Te ayudamos a elegir lo que de verdad te sirve." waText="Hola D'CASA, quiero que me asesoren 👋" />
      </main>
    </>
  );
}
