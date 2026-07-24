/* ============================================================
   D'CASA PANAMÁ — main.js
   Progressive enhancement. El sitio funciona sin JS;
   esto solo añade nav móvil, reveals suaves y links de WhatsApp.
   ============================================================ */
(function () {
  "use strict";
  var cfg = window.DCASA || {};

  /* ---------- WhatsApp: construye links contextuales ----------
     Uso en HTML:  <a data-wa data-wa-text="Hola, me interesa el sofá">
     Si no hay número configurado, cae a /contacto.html            */
  function waLink(text) {
    var msg = encodeURIComponent(text || "Hola D'CASA, quiero más información 👋");
    if (cfg.whatsapp) {
      return "https://wa.me/" + cfg.whatsapp + "?text=" + msg;
    }
    return "contacto.html";
  }
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.setAttribute("href", waLink(el.getAttribute("data-wa-text")));
    if (!cfg.whatsapp) {
      // sin número aún: no abrir en pestaña nueva, es navegación interna
      el.removeAttribute("target");
      el.removeAttribute("rel");
    } else {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  });

  /* ---------- Instagram / redes desde config ---------- */
  document.querySelectorAll("[data-ig]").forEach(function (el) {
    if (cfg.instagram) { el.setAttribute("href", cfg.instagram); }
  });

  /* ---------- Nav móvil ---------- */
  var nav = document.querySelector(".nav");
  var toggle = nav && nav.querySelector(".nav__toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = nav.getAttribute("data-open") === "true";
      nav.setAttribute("data-open", String(!open));
      toggle.setAttribute("aria-expanded", String(!open));
    });
    // cerrar al navegar / con Esc
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

  /* ---------- Reveal por scroll (respeta reduced-motion) ---------- */
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var reveals = document.querySelectorAll("[data-reveal]");
  if (reduce || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Formulario que compone un mensaje de WhatsApp ----------
     Sin backend: arma el texto con lo que escribe el cliente y abre
     WhatsApp. Si aún no hay número, muestra un aviso claro.          */
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
        if (note) {
          note.hidden = false;
          note.textContent = "Aún estamos habilitando el WhatsApp. Mientras tanto, escríbenos por Instagram " +
            (cfg.instagramHandle || "@dcasapty") + " y te atendemos igual.";
        }
        return;
      }
      var url = "https://wa.me/" + cfg.whatsapp + "?text=" + encodeURIComponent(texto);
      window.open(url, "_blank", "noopener");
      if (note) {
        note.hidden = false;
        note.textContent = "¡Listo! Te abrimos WhatsApp con tu mensaje. Si no se abrió, revisa que no esté bloqueada la ventana.";
      }
    });
  }

  /* ---------- Año dinámico en el footer ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
