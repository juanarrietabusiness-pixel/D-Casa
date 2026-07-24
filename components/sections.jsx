import { Reveal } from "@/components/motion";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { WhatsAppIcon } from "@/components/icons";

export function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((t, i) => <span key={i}>{t}</span>)}
      </div>
    </div>
  );
}

export function CtaClose({ kicker, title, text, waText }) {
  return (
    <section className="section section--brand on-brand" aria-labelledby="cta-close-title">
      <div className="container cta-close">
        {kicker && <span className="kicker">{kicker}</span>}
        <Reveal as="h2" id="cta-close-title">{title}</Reveal>
        {text && <Reveal as="p">{text}</Reveal>}
        <Reveal className="btn-row">
          <WhatsAppLink className="btn btn--primary" text={waText}>
            <WhatsAppIcon /> Escríbenos por WhatsApp
          </WhatsAppLink>
        </Reveal>
      </div>
    </section>
  );
}
