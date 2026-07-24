import { CONFIG, waHref } from "@/lib/config";

// Enlace de WhatsApp con mensaje contextual. Si no hay número configurado,
// cae a /contacto/. Determinista en build (no necesita 'use client').
export function WhatsAppLink({ text, className, children, ...rest }) {
  const external = !!CONFIG.whatsapp;
  return (
    <a
      href={waHref(text)}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
