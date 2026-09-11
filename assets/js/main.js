/* =========================================================
   Four Deserts Cleaning Co. LLC  |  Site interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---------- Mobile drawer ---------- */
  var toggle = document.getElementById("menuToggle");
  var drawer = document.getElementById("drawer");
  var backdrop = document.getElementById("drawerBackdrop");
  var closeBtn = document.getElementById("drawerClose");

  function openDrawer() {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    if (toggle) toggle.setAttribute("aria-expanded", "true");
  }

  function closeDrawer() {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  }

  if (toggle) toggle.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (backdrop) backdrop.addEventListener("click", closeDrawer);

  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeDrawer);
    });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });

  /* ---------- Smooth scroll with sticky-header offset ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href || href === "#") return;
    a.addEventListener("click", function (e) {
      var target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      var offset = 76;
      var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var btn = item.querySelector(".faq-q");
    var ans = item.querySelector(".faq-a");
    if (!btn || !ans) return;

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      document.querySelectorAll(".faq-item.open").forEach(function (other) {
        if (other !== item) {
          other.classList.remove("open");
          other.querySelector(".faq-a").style.maxHeight = null;
          other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        ans.style.maxHeight = null;
        btn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("open");
        ans.style.maxHeight = ans.scrollHeight + "px";
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach(function (el) {
      io.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ---------- Quote form (mailto handoff, no backend needed) ---------- */
  var form = document.getElementById("quoteForm");
  var success = document.getElementById("formSuccess");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var name = (document.getElementById("name") || {}).value || "";
      var phone = (document.getElementById("phone") || {}).value || "";
      var email = (document.getElementById("email") || {}).value || "";
      var service = (document.getElementById("service") || {}).value || "";
      var message = (document.getElementById("message") || {}).value || "";

      var subject = "Free Quote Request - " + (service || "Cleaning Service");
      var lines = [
        "Name: " + name,
        "Phone: " + phone,
        "Email: " + email,
        "Service Needed: " + service,
        "",
        "Details:",
        message,
      ];
      var body = lines.join("\n");

      var mailto =
        "mailto:ecarltonusa@gmail.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      if (success) success.classList.add("show");
      window.location.href = mailto;
      form.reset();
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
