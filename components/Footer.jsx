import Link from "next/link";
import { CONFIG } from "@/lib/config";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer base-band">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__logo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/logo.svg" alt="D'CASA Panamá" width="240" height="104" />
            <p>Muebles y todo para tu casa. Ordenado donde los demás son caóticos, cálido donde los demás son fríos, panameño donde los demás son genéricos.</p>
          </div>
          <div>
            <h4>Catálogo</h4>
            <ul role="list">
              <li><Link href="/catalogo/#salas">Salas</Link></li>
              <li><Link href="/catalogo/#comedores">Comedores</Link></li>
              <li><Link href="/catalogo/#recamaras">Recámaras</Link></li>
              <li><Link href="/catalogo/#colchones">Colchones</Link></li>
            </ul>
          </div>
          <div>
            <h4>D'CASA</h4>
            <ul role="list">
              <li><Link href="/ambientes/">Ambientes</Link></li>
              <li><Link href="/guias/">Guías útiles</Link></li>
              <li><Link href="/contacto/">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4>Escríbenos</h4>
            <ul role="list">
              <li><WhatsAppLink text="Hola D'CASA 👋">WhatsApp</WhatsAppLink></li>
              <li><a href={CONFIG.instagram} target="_blank" rel="noopener">Instagram {CONFIG.instagramHandle}</a></li>
              <li><Link href="/contacto/">Ubicación y horario</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} D'CASA Panamá. Todos los derechos reservados.</span>
          <div className="social-row">
            <a href={CONFIG.instagram} target="_blank" rel="noopener" aria-label="Instagram de D'CASA"><InstagramIcon /></a>
            <WhatsAppLink text="Hola D'CASA 👋" aria-label="WhatsApp de D'CASA"><WhatsAppIcon /></WhatsAppLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WaFloat({ text = "Hola D'CASA, vi su página y quiero más información 👋" }) {
  return (
    <WhatsAppLink className="wa-float" text={text} aria-label="Escríbenos por WhatsApp">
      <WhatsAppIcon /> <span>WhatsApp</span>
    </WhatsAppLink>
  );
}
