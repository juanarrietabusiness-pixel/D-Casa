import Link from "next/link";

export const metadata = { title: "Página no encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <main id="main">
      <section className="section section--brand on-brand" style={{ minHeight: "72vh", display: "grid", placeItems: "center" }}>
        <div className="container cta-close">
          <span className="kicker" style={{ justifyContent: "center" }}>Error 404</span>
          <h2 style={{ color: "var(--blanco)", fontSize: "var(--fs-3xl)", marginTop: "var(--sp-4)" }}>Esta página se nos mudó de casa</h2>
          <p style={{ marginInline: "auto" }}>No encontramos lo que buscabas. Volvamos a un lugar conocido.</p>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: "var(--sp-8)" }}>
            <Link className="btn btn--primary" href="/">Volver al inicio</Link>
            <Link className="btn btn--ghost" href="/catalogo/">Ver catálogo</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
