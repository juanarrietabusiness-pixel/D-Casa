import { waHref, waIsExternal } from "@/lib/config";

// Enlace de WhatsApp con mensaje contextual. Si no hay número aún, cae a Instagram.
export function WhatsAppLink({ text, className, children, ...rest }) {
  const external = waIsExternal;
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
