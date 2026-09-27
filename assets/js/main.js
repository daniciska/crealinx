(function () {
  "use strict";

  // English copy. Spanish is the default and lives in the HTML.
  var EN = {
    "skip": "Skip to content",
    "nav.services": "Services",
    "nav.method": "Methodology",
    "nav.pricing": "Pricing",
    "nav.about": "About",
    "nav.contact": "Let's talk",
    "hero.eyebrow": "Cost reduction · Supplier negotiation",
    "hero.title": "How long has it been since you reviewed your strategic costs?",
    "hero.lead": "We help companies identify hidden inefficiencies, optimize supplier contracts, and generate measurable savings — without disrupting operations and quality.",
    "hero.cta": "Request a diagnosis",
    "hero.cta2": "See how I charge",
    "hero.guarantee": "100% results-based fee: no savings, no cost.",
    "hero.role": "15+ years in strategic procurement · ex LATAM Airlines",
    "stat1": "years of experience in procurement and strategy",
    "stat2": "years leading negotiations at LATAM Airlines",
    "stat3": "of the savings achieved, for 3 months only",
    "stat4": "if we don't achieve savings",
    "services.eyebrow": "Services",
    "services.title": "What we do for your company",
    "services.lead": "Every peso saved through smarter management goes straight to improving your margin.",
    "s1.t": "Cost structure analysis",
    "s1.d": "We review what you buy and from whom to find where the savings are.",
    "s2.t": "Review and negotiation with suppliers",
    "s2.d": "We renegotiate contracts and terms so you pay a fair price.",
    "s3.t": "Quick wins in operational processes",
    "s3.d": "Fast improvements that generate savings from the first weeks.",
    "s4.t": "E-Procurement",
    "s4.d": "We digitize your purchasing for more control, traceability and speed.",
    "s5.t": "KPI tracking strategies",
    "s5.d": "Clear indicators so savings are sustained over time.",
    "method.eyebrow": "Methodology",
    "method.title": "A clear process, from start to finish",
    "method.lead": "You always know which stage we're in and what results we're achieving.",
    "m1": "Diagnosis",
    "m2": "Showcase of opportunities",
    "m3": "Selection of services",
    "m4": "Execution",
    "m5": "Review of results and closure",
    "pay.eyebrow": "Win-win payment",
    "pay.title": "We only win if you win",
    "pay.lead": "No fixed fees and no risk for your company: our fee is 100% based on results.",
    "pay1": "Variable, based on results.",
    "pay2": "Of the savings achieved, for 3 months.",
    "pay3": "If there are no savings, the cost is $0.",
    "band.t": "Every company can improve its margin without sacrificing growth.",
    "band.cta": "Let's work together",
    "about.eyebrow": "About",
    "about.title": "I'm Mario Carrasco",
    "about.p1": "A procurement and strategy professional with more than 15 years of experience leading cost optimization and supplier management initiatives worldwide. My career began in large corporations, where I learned that the best results come not just from negotiating prices — but from building long-term value and operational excellence.",
    "about.journeyT": "Professional journey",
    "about.p2": "For over a decade, I worked at LATAM Airlines, where I held roles such as Strategic Negotiations and Global Procurement Senior Manager. During that time, I led complex negotiation programs, managed multimillion-dollar budgets, and helped build regional strategies that delivered consistent savings and supplier performance improvements.",
    "about.p3": "After years of corporate leadership, I decided to take that experience to a broader field — helping companies of all sizes achieve the same level of efficiency and strategic clarity that global corporations demand. That's how Crealynx Consulting was born: an advisory practice focused on cost efficiency, supplier strategy, and negotiation excellence.",
    "about.expT": "Expertise",
    "e1": "Strategic Procurement & Category Management",
    "e2": "Cost Optimization & Spend Analysis",
    "e3": "Supplier Negotiation & Contracting",
    "e4": "Procurement Transformation & Governance",
    "e5": "Efficiency Programs for SMEs",
    "phil.t": "My philosophy",
    "phil.d": "Profitability and efficiency are two sides of the same coin. My work is built on data, transparency, and collaboration — transforming procurement from a support function into a true business partner.",
    "pill.data": "Data",
    "pill.transparency": "Transparency",
    "pill.collab": "Collaboration",
    "vision.t": "Vision & Goals",
    "vision.d": "To help organizations become more profitable, efficient, and prepared for the future, bringing advanced negotiation and cost management practices to businesses that seek sustainable growth.",
    "vision.q": "“Long-term value, not short-term savings.”",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's start with a diagnosis",
    "contact.lead": "Tell me briefly about your company and I'll get back to you within one business day. If we don't find savings, you don't pay.",
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
    document.querySelectorAll(".section-head, .service-list li, .steps li, .pay-cards li, .about-copy, .vision, .form")
      .forEach(function (el) { el.classList.add("reveal"); io.observe(el); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();
})();
