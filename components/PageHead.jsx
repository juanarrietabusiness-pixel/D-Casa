import Link from "next/link";

export function PageHead({ crumb, kicker, title, children }) {
  return (
    <header className="page-head">
      <div className="container">
        <nav className="breadcrumb" aria-label="Migas de pan">
          <Link href="/">Inicio</Link> / <span aria-current="page">{crumb}</span>
        </nav>
        {kicker && <span className="kicker">{kicker}</span>}
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </header>
  );
}
