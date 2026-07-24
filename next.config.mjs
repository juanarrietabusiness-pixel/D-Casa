/** @type {import('next').NextConfig} */
// basePath vacío por defecto (Netlify, dominio raíz).
// GitHub Pages (subruta /D-Casa/) lo inyecta con NEXT_PUBLIC_BASE_PATH.
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  basePath: base,
  assetPrefix: base || undefined,
};
export default nextConfig;
