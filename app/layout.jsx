import "./globals.css";
import { oswald, inter } from "./fonts";
import { SITE_URL } from "@/lib/site";
import { Providers } from "@/components/Providers";
import { Nav } from "@/components/Nav";
import { Footer, WaFloat } from "@/components/Footer";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "D'CASA Panamá — Muebles y todo para tu casa",
    template: "%s — D'CASA Panamá",
  },
  description:
    "Muebles y artículos para el hogar en Panamá, con precios claros y entrega a todo el país. Ordenado donde los demás son caóticos. Escríbenos por WhatsApp y te asesoramos.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "D'CASA Panamá",
    locale: "es_PA",
    url: "/",
    title: "D'CASA Panamá — Muebles y todo para tu casa",
    description: "Muebles y artículos para el hogar en Panamá, con precios claros y entrega a todo el país.",
    images: [{ url: "/assets/img/og.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/img/favicon.svg`,
    apple: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/assets/img/favicon.svg`,
  },
};

export const viewport = { themeColor: "#1648C0" };

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        {/* Sin JS: neutraliza los estados iniciales de framer-motion para que el contenido sea visible */}
        <noscript dangerouslySetInnerHTML={{ __html: '<style>[style*="opacity:0"]{opacity:1!important}[style*="transform"]{transform:none!important}</style>' }} />
        <a className="skip-link" href="#main">Ir al contenido</a>
        <Providers>
          <Nav />
          {children}
          <Footer />
          <WaFloat />
        </Providers>
      </body>
    </html>
  );
}
