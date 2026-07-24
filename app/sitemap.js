import { SITE_URL } from "@/lib/site";
export default function sitemap() {
  const routes = ["/", "/catalogo/", "/ambientes/", "/guias/", "/contacto/"];
  const now = new Date();
  return routes.map((r) => ({
    url: SITE_URL + r,
    lastModified: now,
    changeFrequency: r === "/" ? "weekly" : "monthly",
    priority: r === "/" ? 1 : 0.8,
  }));
}
