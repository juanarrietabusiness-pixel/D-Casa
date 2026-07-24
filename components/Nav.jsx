"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { WhatsAppIcon, MenuIcon } from "@/components/icons";
import { asset } from "@/lib/base";

const LINKS = [
  { href: "/catalogo/", label: "Catálogo" },
  { href: "/ambientes/", label: "Ambientes" },
  { href: "/guias/", label: "Guías" },
  { href: "/contacto/", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 24);
    setHidden(y > prev && y > 240 && !open);
  });

  // Bloquea el scroll del fondo mientras el menú móvil está abierto.
  useEffect(() => {
    if (!open) return;
    const prev = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    return () => { document.documentElement.style.overflow = prev; };
  }, [open]);

  const isActive = (href) => pathname === href;
  const cls = ["nav", hidden ? "nav--hidden" : "", solid ? "nav--solid" : ""].filter(Boolean).join(" ");

  return (
    <header className={cls} data-open={open ? "true" : "false"}>
      <div className="container nav__inner">
        <Link className="nav__logo" href="/" aria-label="D'CASA Panamá — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/assets/img/logo.svg")} alt="D'CASA Panamá" width="240" height="104" />
        </Link>
        <nav className="nav__links" aria-label="Principal" id="menu">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={isActive(l.href) ? "page" : undefined} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <WhatsAppLink className="btn btn--primary nav__cta nav__cta--mobile" text="Hola D'CASA, quiero más información 👋">
            Escríbenos por WhatsApp
          </WhatsAppLink>
        </nav>
        <div className="nav__actions">
          <WhatsAppLink className="btn btn--primary nav__cta nav__cta--desktop" text="Hola D'CASA, quiero más información 👋">
            <WhatsAppIcon /> WhatsApp
          </WhatsAppLink>
          <button className="nav__toggle" aria-label="Abrir menú" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((v) => !v)}>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
