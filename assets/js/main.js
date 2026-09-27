(function () {
  "use strict";

  // English copy. Spanish is the default and lives in the HTML.
  var EN = {
    "skip": "Skip to content",
    "nav.services": "Services",
    "nav.approach": "Approach",
    "nav.about": "About",
    "nav.contact": "Let's talk",
    "hero.eyebrow": "Strategic procurement · Cost efficiency · Negotiation",
    "hero.title": "Every company can improve its margin without sacrificing growth.",
    "hero.lead": "I bring advanced negotiation and cost management practices to businesses of all sizes that seek sustainable growth.",
    "hero.cta": "Book a conversation",
    "hero.cta2": "See services",
    "pill.data": "Data",
    "pill.transparency": "Transparency",
    "pill.collab": "Collaboration",
    "hero.quoteTitle": "Profitability and efficiency",
    "hero.quote": "are two sides of the same coin.",
    "services.eyebrow": "Expertise",
    "services.title": "How I help your company",
    "services.lead": "Every peso saved through smarter management goes straight to improving your margin.",
    "s1.t": "Strategic Procurement & Category Management",
    "s1.d": "We organize your spend into categories and define a strategy for each one based on impact and risk.",
    "s2.t": "Cost Optimization & Spend Analysis",
    "s2.d": "We analyze what you buy and from whom to uncover concrete, measurable savings.",
    "s3.t": "Supplier Negotiation & Contracting",
    "s3.d": "We prepare and lead negotiations that secure better terms and long-term relationships.",
    "s4.t": "Procurement Transformation & Governance",
    "s4.d": "Clear processes, policies and roles so procurement moves from support function to business partner.",
    "s5.t": "Efficiency Programs for SMEs",
    "s5.d": "The same tools global corporations use, adapted to the size and pace of your business.",
    "s6.t": "Not sure where to start?",
    "s6.d": "Tell me about your situation and I'll point out your biggest savings opportunity.",
    "s6.cta": "Write to me",
    "approach.eyebrow": "My philosophy",
    "approach.title": "Long-term value, not short-term savings.",
    "approach.lead": "My work is built on three pillars that transform procurement from a support function into a true business partner.",
    "p1.t": "Data",
    "p1.d": "Decisions grounded in real spend analysis, not assumptions.",
    "p2.t": "Transparency",
    "p2.d": "Goals, progress and results visible at every stage.",
    "p3.t": "Collaboration",
    "p3.d": "I work alongside your team so results last over time.",
    "about.eyebrow": "About me",
    "about.title": "From corporate leadership to your business",
    "about.p1": "After years of corporate leadership, I decided to take that experience to a broader field — helping companies of all sizes achieve the same level of efficiency and strategic clarity that global corporations demand.",
    "about.p2": "That's how Crealynx Consulting was born: an advisory practice focused on cost efficiency, supplier strategy, and negotiation excellence.",
    "vision.t": "Vision & Goals",
    "vision.d": "To help organizations become more profitable, efficient, and prepared for the future.",
    "vision.q": "“Let's work together to make it happen.”",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your margin",
    "contact.lead": "Tell me briefly about your company and I'll get back to you within one business day.",
    "f.name": "Name",
    "f.email": "Email",
    "f.company": "Company",
    "f.phone": "Mobile",
    "f.msg": "How can I help?",
    "f.send": "Send message"
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  var ES = {};
  nodes.forEach(function (el) { ES[el.dataset.i18n] = el.textContent; });

  var toggle = document.getElementById("lang-toggle");

  function setLang(lang) {
    var dict = lang === "en" ? EN : ES;
    nodes.forEach(function (el) {
      var key = el.dataset.i18n;
      if (dict[key]) el.textContent = dict[key];
    });
    document.documentElement.lang = lang;
    toggle.textContent = lang === "en" ? "ES" : "EN";
    toggle.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  if (saved === "en" || (!saved && /^en/i.test(navigator.language || ""))) setLang("en");

  toggle.addEventListener("click", function () {
    setLang(document.documentElement.lang === "en" ? "es" : "en");
  });

  // Mobile menu
  var menuBtn = document.querySelector(".menu-toggle");
  var nav = document.getElementById("nav");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  // Header border on scroll
  var header = document.querySelector(".site-header");
  function onScroll() { header.classList.toggle("scrolled", window.scrollY > 8); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Reveal on scroll
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".section-head, .card, .pillar, .about-copy, .vision, .form")
      .forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
