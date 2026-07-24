/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",          // genera HTML estático por ruta (SEO local)
  trailingSlash: true,       // /catalogo/ -> catalogo/index.html
  images: { unoptimized: true }, // sin servidor de imágenes en hosting estático
  reactStrictMode: true,
};
export default nextConfig;
