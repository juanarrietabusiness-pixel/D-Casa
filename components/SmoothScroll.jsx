"use client";
import { useEffect } from "react";
import Lenis from "lenis";

// Scroll suave cinemático (Lenis). Se desactiva con prefers-reduced-motion.
// También hace scroll suave a las anclas internas (#id) de la misma página.
export function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true, syncTouch: false });
    let id = requestAnimationFrame(function raf(t) {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    });

    function onClick(e) {
      const a = e.target.closest('a[href*="#"]');
      if (!a) return;
      const url = new URL(a.href, location.href);
      if (url.pathname !== location.pathname) return; // otra página: navegación normal
      const el = url.hash && document.getElementById(url.hash.slice(1));
      if (el) { e.preventDefault(); lenis.scrollTo(el, { offset: -80 }); history.pushState(null, "", url.hash); }
    }
    document.addEventListener("click", onClick);
    return () => { cancelAnimationFrame(id); lenis.destroy(); document.removeEventListener("click", onClick); };
  }, []);
  return null;
}
