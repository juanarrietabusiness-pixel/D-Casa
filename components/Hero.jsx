"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { WhatsAppIcon } from "@/components/icons";

const EASE = [0.16, 1, 0.3, 1];
const container = { hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } };
const h1Var = { hidden: {}, show: { transition: { staggerChildren: 0.045 } } };
const wordUp = { hidden: { yPercent: 118 }, show: { yPercent: 0, transition: { duration: 0.85, ease: "easeOut" } } };
const bandGrow = { hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.5 } } };

// Grupos que NO se parten (evitan viudas como una "y" sola al final de línea).
const TITLE_GROUPS = [["Tu", "casa,"], ["ordenada"], ["y", "sin"], ["gastar"], ["de", "más."]];

export function Hero() {
  return (
    <motion.section className="hero on-brand" aria-labelledby="hero-title" initial="hidden" animate="show" variants={container}>
      <div className="container hero__grid">
        <div>
          <motion.span className="kicker" variants={fadeUp}>Muebles y todo para tu casa · Panamá</motion.span>
          <motion.h1 id="hero-title" className="hero__title" variants={h1Var}>
            {TITLE_GROUPS.map((group, gi) => (
              <span className="word-group" key={gi}>
                {group.map((w, wi) => (
                  <span className="line-mask" key={wi}>
                    <motion.span className={"word" + (w === "ordenada" ? " accent" : "")} variants={wordUp}>{w}</motion.span>
                  </span>
                ))}
              </span>
            ))}
          </motion.h1>
          <motion.p variants={fadeUp}>El pana que sabe de casas. Precios claros, entrega a todo el país y un mueble que de verdad te cabe. Sin ruido, sin letras chiquitas.</motion.p>
          <motion.div className="btn-row" variants={fadeUp}>
            <WhatsAppLink className="btn btn--primary" text="Hola D'CASA, quiero que me asesoren para amoblar mi espacio 👋">
              <WhatsAppIcon /> Escríbenos por WhatsApp
            </WhatsAppLink>
            <Link className="btn-text-cta" href="/catalogo/">Ver catálogo <span aria-hidden="true">→</span></Link>
          </motion.div>
        </div>
        <div className="hero__visual">
          <motion.div className="hero-plate" variants={fadeUp}>
            <span className="badge badge--yellow">Ordenado y accesible</span>
            <h2>Cálido donde los demás son fríos.</h2>
            <p>Fotos de hogares panameños reales, no showroom nórdico. Te decimos la verdad y te resolvemos.</p>
          </motion.div>
          <motion.div className="hero-stats" role="list" variants={fadeUp}>
            <div className="stat" role="listitem"><b>Entrega</b><span>a todo el país</span></div>
            <div className="stat" role="listitem"><b>Asesoría</b><span>por WhatsApp</span></div>
            <div className="stat" role="listitem"><b>Pagos</b><span>a tu medida</span></div>
          </motion.div>
        </div>
      </div>
      <motion.div className="hero__band" aria-hidden="true" variants={bandGrow} style={{ transformOrigin: "left center" }} />
    </motion.section>
  );
}
