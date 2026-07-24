import { FAQ } from "@/lib/content";

// Acordeón accesible con <details> nativo (sin JS, sin salto de layout).
export function Faq({ items = FAQ }) {
  return (
    <div className="faq">
      {items.map((f, i) => (
        <details key={i} name="faq-dcasa">
          <summary>{f.q}<span className="plus" aria-hidden="true" /></summary>
          <div className="faq__body"><p>{f.a}</p></div>
        </details>
      ))}
    </div>
  );
}
