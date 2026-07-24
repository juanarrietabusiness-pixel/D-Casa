/* ============================================================
   D'CASA PANAMÁ — main.js
   Capa de comportamiento + movimiento.
   Estilo gráfico plano; movimiento cinemático y sobrio.
   - Un solo momento orquestado: el hero.
   - Todo lo demás: reveals suaves con stagger.
   - Solo se anima transform/opacity. Respeta prefers-reduced-motion.
   - El sitio funciona sin JS (fallback <noscript> revela el contenido).
   ============================================================ */
(function () {
  "use strict";
  var cfg = window.DCASA || {};
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  // marca que el JS de movimiento tomó el control (desactiva el auto-unhide de seguridad)
  document.documentElement.classList.add("motion-ready");

  /* =========================================================
     1. DATOS DE CONTACTO (WhatsApp / redes)
     ========================================================= */
  function waLink(text) {
    var msg = encodeURIComponent(text || "Hola D'CASA, quiero más información 👋");
    return cfg.whatsapp ? "https://wa.me/" + cfg.whatsapp + "?text=" + msg : "contacto.html";
  }
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", waLink(el.getAttribute("data-wa-text")));
    if (cfg.whatsapp) { el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); }
    else { el.removeAttribute("target"); el.removeAttribute("rel"); }
  });
  document.querySelectorAll("[data-ig]").forEach(function (el) {
    if (cfg.instagram) el.setAttribute("href", cfg.instagram);
  });

  /* =========================================================
     2. NAV móvil + ocultar al bajar
     ========================================================= */
  var nav = document.querySelector(".nav");
  var toggle = nav && nav.querySelector(".nav__toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    nav.querySelectorAll(".nav__links a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.getAttribute("data-open") === "true") {
        nav.setAttribute("data-open", "false");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  /* =========================================================
     3. SMOOTH SCROLL (Lenis) + puente con GSAP ScrollTrigger
     ========================================================= */
  var lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, syncTouch: false });
    if (hasGSAP) {
      lenis.on("scroll", window.ScrollTrigger.update);
      window.gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      window.gsap.ticker.lagSmoothing(0);
    } else {
      requestAnimationFrame(function raf(t) { lenis.raf(t); requestAnimationFrame(raf); });
    }
    // anclas internas con scroll suave
    document.querySelectorAll('a[href^="#"], a[href*=".html#"]').forEach(function (a) {
      var hash = a.getAttribute("href").split("#")[1];
      if (!hash) return;
      var target = document.getElementById(hash);
      if (target) a.addEventListener("click", function (e) { e.preventDefault(); lenis.scrollTo(target, { offset: -80 }); });
    });
  }

  /* Nav se oculta al bajar, aparece al subir */
  if (nav) {
    var lastY = window.scrollY, ticking = false;
    function onScroll(y) {
      if (y > lastY && y > 240) nav.classList.add("nav--hidden");
      else nav.classList.remove("nav--hidden");
      nav.classList.toggle("nav--solid", y > 24);
      lastY = y;
    }
    if (lenis) { lenis.on("scroll", function (e) { onScroll(e.scroll); }); }
    else window.addEventListener("scroll", function () {
      if (!ticking) { ticking = true; requestAnimationFrame(function () { onScroll(window.scrollY); ticking = false; }); }
    }, { passive: true });
  }

  /* =========================================================
     4. FALLBACK: revelar todo si no hay GSAP o hay reduced-motion
     ========================================================= */
  function revealAll() {
    document.querySelectorAll("[data-reveal], [data-reveal-group] > *").forEach(function (el) {
      el.classList.add("is-in");
    });
  }
  if (reduce || !hasGSAP) {
    revealAll();
  } else {
    initMotion();
  }

  /* =========================================================
     5. MOTION (solo con GSAP y sin reduced-motion)
     ========================================================= */
  function initMotion() {
    var gsap = window.gsap, ST = window.ScrollTrigger;
    gsap.registerPlugin(ST);

    /* ---- 5a. Momento orquestado: HERO ---- */
    var hero = document.querySelector("[data-hero]");
    if (hero) {
      var tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      var h1 = hero.querySelector("h1");
      var words = null;

      if (h1 && window.SplitType) {
        var split = new window.SplitType(h1, { types: "lines,words" });
        words = split.words;
        // re-marcar la palabra de acento tras el split
        (words || []).forEach(function (w) {
          if (w.textContent.toLowerCase().replace(/[^a-záéíóúñ]/g, "") === "ordenada") w.classList.add("accent");
        });
      }

      gsap.set(hero.querySelectorAll("[data-hero-el]"), { autoAlpha: 0, y: 26 });

      if (words) {
        gsap.set(words, { yPercent: 115 });
        tl.to(words, { yPercent: 0, duration: 0.95, stagger: 0.04 }, 0.15);
      }
      tl.to(hero.querySelectorAll("[data-hero-el]"), { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.09 }, 0.35);

      var band = hero.querySelector(".hero__band");
      if (band) { gsap.set(band, { scaleX: 0, transformOrigin: "left center" }); tl.to(band, { scaleX: 1, duration: 0.9, ease: "power2.inOut" }, 0.5); }
    }

    /* ---- 5b. Reveals por scroll con stagger ---- */
    // grupos: los hijos se escalonan
    gsap.utils.toArray("[data-reveal-group]").forEach(function (group) {
      var items = group.children;
      ST.create({
        trigger: group, start: "top 82%", once: true,
        onEnter: function () {
          gsap.fromTo(items, { autoAlpha: 0, y: 26 },
            { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.08,
              onComplete: function () { for (var i = 0; i < items.length; i++) items[i].classList.add("is-in"); } });
        }
      });
    });
    // sueltos (los que están dentro de un grupo los maneja el grupo)
    gsap.utils.toArray("[data-reveal]").forEach(function (el) {
      if (el.closest("[data-reveal-group]")) return;
      ST.create({
        trigger: el, start: "top 86%", once: true,
        onEnter: function () {
          gsap.fromTo(el, { autoAlpha: 0, y: 26 },
            { autoAlpha: 1, y: 0, duration: 0.7, ease: "power3.out",
              onComplete: function () { el.classList.add("is-in"); } });
        }
      });
    });

    /* ---- 5c. Parallax sutil (marcos de ambiente e imágenes) ---- */
    gsap.utils.toArray("[data-parallax]").forEach(function (el) {
      gsap.fromTo(el, { yPercent: -6 }, {
        yPercent: 6, ease: "none",
        scrollTrigger: { trigger: el, scrub: true, start: "top bottom", end: "bottom top" }
      });
    });

    ST.refresh();
  }

  /* =========================================================
     6. Formulario que compone un mensaje de WhatsApp
     ========================================================= */
  var form = document.getElementById("wa-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var nombre = (data.get("nombre") || "").toString().trim();
      var zona = (data.get("zona") || "").toString().trim();
      var interes = (data.get("interes") || "").toString().trim();
      var mensaje = (data.get("mensaje") || "").toString().trim();
      var texto = "¡Hola D'CASA! 👋";
      if (nombre) texto += " Soy " + nombre + ".";
      if (interes) texto += " Me interesa: " + interes + ".";
      if (zona) texto += " Estoy en " + zona + ".";
      if (mensaje) texto += " " + mensaje;
      var note = form.querySelector("[data-form-note]");
      if (!cfg.whatsapp) {
        if (note) { note.hidden = false; note.textContent = "Aún estamos habilitando el WhatsApp. Mientras tanto, escríbenos por Instagram " + (cfg.instagramHandle || "@dcasapty") + " y te atendemos igual."; }
        return;
      }
      window.open("https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
      if (note) { note.hidden = false; note.textContent = "¡Listo! Te abrimos WhatsApp con tu mensaje."; }
    });
  }

  /* =========================================================
     7. Año dinámico
     ========================================================= */
  document.querySelectorAll("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
