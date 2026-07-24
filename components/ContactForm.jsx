"use client";
import { useState } from "react";
import { CONFIG } from "@/lib/config";
import { WhatsAppIcon } from "@/components/icons";

export function ContactForm() {
  const [note, setNote] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const nombre = (d.get("nombre") || "").toString().trim();
    const zona = (d.get("zona") || "").toString().trim();
    const interes = (d.get("interes") || "").toString().trim();
    const mensaje = (d.get("mensaje") || "").toString().trim();
    let texto = "¡Hola D'CASA! 👋";
    if (nombre) texto += ` Soy ${nombre}.`;
    if (interes) texto += ` Me interesa: ${interes}.`;
    if (zona) texto += ` Estoy en ${zona}.`;
    if (mensaje) texto += ` ${mensaje}`;
    if (!CONFIG.whatsapp) {
      setNote(`Aún estamos habilitando el WhatsApp. Mientras tanto, escríbenos por Instagram ${CONFIG.instagramHandle} y te atendemos igual.`);
      return;
    }
    window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank", "noopener");
    setNote("¡Listo! Te abrimos WhatsApp con tu mensaje.");
  }

  return (
    <form className="form mt-8" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label htmlFor="nombre">Tu nombre</label>
        <input id="nombre" name="nombre" type="text" autoComplete="name" placeholder="Como te decimos" />
      </div>
      <div className="field">
        <label htmlFor="interes">¿Qué te interesa?</label>
        <select id="interes" name="interes" defaultValue="">
          <option value="">Elige una opción</option>
          <option>Sala / sofá</option>
          <option>Comedor</option>
          <option>Recámara</option>
          <option>Colchón</option>
          <option>Decoración</option>
          <option>Exteriores</option>
          <option>Asesoría para amoblar</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="zona">Tu zona / ciudad</label>
        <input id="zona" name="zona" type="text" autoComplete="address-level2" placeholder="Para calcular la entrega" />
      </div>
      <div className="field">
        <label htmlFor="mensaje">Cuéntanos más <span className="hint">(medidas, presupuesto, dudas…)</span></label>
        <textarea id="mensaje" name="mensaje" placeholder="Ej: Sala de 3.20 m de largo, busco un sofá de 3 puestos" />
      </div>
      <button className="btn btn--primary" type="submit"><WhatsAppIcon /> Enviar por WhatsApp</button>
      {note && <p className="hint" role="status" aria-live="polite">{note}</p>}
    </form>
  );
}
