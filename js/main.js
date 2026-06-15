/* ============================================================
   MAIN — renders the UI from portfolioData.js and powers
   the signal canvas, nav, and scroll interactions.
   You should NOT need to edit this file to change content.
   ============================================================ */

"use strict";

/* ---------- tiny helpers ---------- */
const $ = (sel) => document.querySelector(sel);

function el(tag, className, html) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html !== undefined) node.innerHTML = html;
  return node;
}

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str ?? "";
  return d.innerHTML;
}

const ICONS = {
  github:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.04.77 2.1v3.12c0 .3.21.66.8.55A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  external:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/></svg>',
  fork:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><path d="M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"/><path d="M12 13v2"/></svg>',
};

function socialLinks(container, size) {
  const wrap = $(container);
  portfolioData.personal.socials.forEach((s) => {
    if (!s.url) return;
    const a = el("a", "icon-link");
    a.href = s.url;
    a.setAttribute("aria-label", s.label);
    if (!s.url.startsWith("mailto:")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    a.innerHTML = ICONS[s.icon] || ICONS.external;
    wrap.appendChild(a);
  });
}

/* ============ RENDER: HERO ============ */
function renderHero() {
  const p = portfolioData.personal;
  document.title = portfolioData.meta.siteTitle;
  $("#navName").textContent = p.name;
  $("#heroAvailability").textContent = p.availability;
  $("#heroName").textContent = p.name;
  $("#heroRole").textContent = p.role;
  $("#heroTagline").textContent = p.tagline;

  const actions = $("#heroActions");
  const contactBtn = el("a", "btn btn--primary", "Get in touch");
  contactBtn.href = "#contact";
  actions.appendChild(contactBtn);

  const projBtn = el("a", "btn btn--ghost", "View projects");
  projBtn.href = "#projects";
  actions.appendChild(projBtn);

  if (p.resumeUrl) {
    const cv = el("a", "btn btn--ghost", "View résumé");
    cv.href = p.resumeUrl;
    cv.target = "_blank";
    cv.rel = "noopener noreferrer";
    actions.appendChild(cv);
  }

  socialLinks("#heroSocials");
}

/* ============ RENDER: ABOUT ============ */
function renderAbout() {
  $("#aboutHeading").textContent = portfolioData.about.heading;
  const wrap = $("#aboutParagraphs");
  portfolioData.about.paragraphs.forEach((t) => wrap.appendChild(el("p", "", esc(t))));

  const stats = $("#aboutStats");
  portfolioData.about.highlights.forEach((h, i) => {
    const card = el("div", "stat reveal");
    card.style.transitionDelay = `${i * 90}ms`;
    card.appendChild(el("div", "stat__value", esc(h.value)));
    card.appendChild(el("div", "stat__label", esc(h.label)));
    stats.appendChild(card);
  });
}

/* ============ RENDER: EXPERIENCE ============ */
function renderExperience() {
  const wrap = $("#experienceList");
  portfolioData.experience.forEach((x) => {
    const card = el("article", "xp reveal");

    const meta = el("div", "xp__meta");
    meta.appendChild(el("span", "xp__period mono", esc(x.period)));
    meta.appendChild(el("span", "xp__location mono", esc(x.location)));
    if (x.summary) meta.appendChild(el("p", "xp__summary", esc(x.summary)));

    const body = el("div", "xp__body");
    body.appendChild(el("h3", "xp__role", esc(x.role)));
    body.appendChild(el("p", "xp__company", esc(x.company)));

    const ul = el("ul", "xp__points");
    x.points.forEach((pt) => ul.appendChild(el("li", "", esc(pt))));
    body.appendChild(ul);

    if (x.tech?.length) {
      const tags = el("div", "xp__tags");
      x.tech.forEach((t) => tags.appendChild(el("span", "tag", esc(t))));
      body.appendChild(tags);
    }

    card.appendChild(meta);
    card.appendChild(body);
    wrap.appendChild(card);
  });
}

/* ============ RENDER: OPEN SOURCE ============ */
function renderOpenSource() {
  const wrap = $("#openSourceList");
  portfolioData.openSource.forEach((o) => {
    const a = el("a", "oss__card reveal");
    a.href = o.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.appendChild(el("h3", "oss__name", `${ICONS.fork}<span>${esc(o.name)}</span>`));
    a.appendChild(el("p", "oss__desc", esc(o.description)));
    const tags = el("div", "xp__tags");
    (o.tags || []).forEach((t) => tags.appendChild(el("span", "tag", esc(t))));
    a.appendChild(tags);
    wrap.appendChild(a);
  });
}

/* ============ RENDER: PROJECTS ============ */
function renderProjects() {
  const grid = $("#projectsGrid");
  const moreBtn = $("#moreProjectsBtn");
  let hasHidden = false;

  portfolioData.projects.forEach((p, i) => {
    const card = el("article", "project reveal");
    if (!p.featured) {
      card.classList.add("is-hidden", "extra");
      hasHidden = true;
    }
    card.style.transitionDelay = `${(i % 3) * 80}ms`;

    const top = el("div", "project__top");
    top.appendChild(el("h3", "project__title", esc(p.title)));

    const links = el("div", "project__links");
    if (p.github) {
      const g = el("a", "icon-link", ICONS.github);
      g.href = p.github; g.target = "_blank"; g.rel = "noopener noreferrer";
      g.setAttribute("aria-label", `${p.title} on GitHub`);
      links.appendChild(g);
    }
    if (p.demo) {
      const d = el("a", "icon-link", ICONS.external);
      d.href = p.demo; d.target = "_blank"; d.rel = "noopener noreferrer";
      d.setAttribute("aria-label", `${p.title} live demo`);
      links.appendChild(d);
    }
    if (links.children.length) top.appendChild(links);
    card.appendChild(top);

    card.appendChild(el("p", "project__desc", esc(p.description)));

    const tags = el("div", "project__tags");
    (p.tags || []).forEach((t) => tags.appendChild(el("span", "tag", esc(t))));
    card.appendChild(tags);

    grid.appendChild(card);
  });

  if (!hasHidden) {
    moreBtn.parentElement.style.display = "none";
  } else {
    moreBtn.addEventListener("click", () => {
      const extras = grid.querySelectorAll(".project.extra");
      const opening = extras[0].classList.contains("is-hidden");
      extras.forEach((c) => {
        c.classList.toggle("is-hidden", !opening);
        if (opening) requestAnimationFrame(() => c.classList.add("is-visible"));
      });
      moreBtn.textContent = opening ? "Show fewer projects" : "Show more projects";
    });
  }
}

/* ============ RENDER: SKILLS ============ */
function renderSkills() {
  const grid = $("#skillsGrid");
  portfolioData.skills.forEach((g, i) => {
    const card = el("div", "skill-group reveal");
    card.style.transitionDelay = `${i * 90}ms`;
    card.appendChild(el("h3", "skill-group__name", esc(g.group)));
    const items = el("div", "skill-group__items");
    g.items.forEach((s) => items.appendChild(el("span", "skill-chip", esc(s))));
    card.appendChild(items);
    grid.appendChild(card);
  });
}

/* ============ RENDER: ACHIEVEMENTS ============ */
function renderAchievements() {
  const wrap = $("#achievementsList");
  portfolioData.achievements.forEach((a) => {
    const row = el("div", "ach reveal");
    row.appendChild(el("span", "ach__year mono", esc(a.year)));
    const body = el("div");
    body.appendChild(el("h3", "ach__title", esc(a.title)));
    body.appendChild(el("p", "ach__detail", esc(a.detail)));
    row.appendChild(body);
    wrap.appendChild(row);
  });
}

/* ============ RENDER: EDUCATION ============ */
function renderEducation() {
  const wrap = $("#educationList");
  portfolioData.education.forEach((e) => {
    const card = el("div", "edu reveal");
    const left = el("div");
    left.appendChild(el("h3", "edu__inst", esc(e.institution)));
    left.appendChild(el("p", "edu__degree", esc(e.degree)));
    card.appendChild(left);
    card.appendChild(el("span", "edu__period mono", esc(e.period)));
    wrap.appendChild(card);
  });
}

/* ============ RENDER: CONTACT + FOOTER ============ */
function renderContact() {
  const p = portfolioData.personal;
  $("#contactHeading").textContent = portfolioData.contact.heading;
  $("#contactBlurb").textContent = portfolioData.contact.blurb;

  const actions = $("#contactActions");
  const mail = el("a", "btn btn--primary btn--lower", esc(p.email));
  mail.href = `mailto:${p.email}`;
  actions.appendChild(mail);

  if (p.phone) {
    const tel = el("a", "btn btn--ghost btn--lower", esc(p.phone));
    tel.href = `tel:${p.phone.replace(/\s+/g, "")}`;
    actions.appendChild(tel);
  }

  $("#footerText").textContent =
    `© ${new Date().getFullYear()} ${p.name} · ${portfolioData.meta.footerNote}`;
  socialLinks("#footerSocials");
}

/* ============ SIGNAL CANVAS (hero) ============ */
function initSignalCanvas() {
  const canvas = $("#signalCanvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  const COLORS = ["#3b0f70", "#8c2981", "#de4968", "#fe9f6d", "#fcfdbf"];
  const LINES = 5;
  let w, h, dpr;
  const mouse = { x: -9999, y: -9999, active: false };
  let t = 0;
  let raf;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    const step = 6;

    for (let i = 0; i < LINES; i++) {
      const baseY = h * (0.3 + (i / (LINES - 1)) * 0.5);
      const amp = 14 + i * 6;
      const freq = 0.004 + i * 0.0012;
      const speed = 0.6 + i * 0.18;

      ctx.beginPath();
      for (let x = 0; x <= w; x += step) {
        // mouse proximity boosts the local amplitude — "exciting the signal"
        const dx = x - mouse.x;
        const dyToLine = baseY - mouse.y;
        const dist2 = dx * dx + dyToLine * dyToLine;
        const boost = mouse.active ? Math.exp(-dist2 / 30000) * 55 : 0;

        const y =
          baseY +
          Math.sin(x * freq + t * speed) * (amp + boost) +
          Math.sin(x * freq * 2.7 + t * speed * 1.6) * (amp * 0.3 + boost * 0.4);

        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.strokeStyle = COLORS[i];
      ctx.globalAlpha = 0.16 + i * 0.05;
      ctx.lineWidth = 1.4;
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    t += 0.012;
    raf = requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize, { passive: true });
  canvas.parentElement.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
    mouse.active = true;
  });
  canvas.parentElement.addEventListener("pointerleave", () => (mouse.active = false));

  // pause when hero is off-screen
  new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        if (!raf) raf = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(raf);
        raf = null;
      }
    },
    { threshold: 0 }
  ).observe(canvas);

  resize();
}

/* ============ NAV BEHAVIOR ============ */
function initNav() {
  const nav = $("#nav");
  const toggle = $("#navToggle");
  const mobile = $("#navMobile");

  window.addEventListener(
    "scroll",
    () => nav.classList.toggle("is-scrolled", window.scrollY > 24),
    { passive: true }
  );

  toggle.addEventListener("click", () => {
    const open = mobile.classList.toggle("is-open");
    toggle.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    mobile.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  });

  mobile.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      mobile.classList.remove("is-open");
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    })
  );

  // highlight the active section link
  const links = [...document.querySelectorAll(".nav__links a")];
  const sections = links
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((a) =>
          a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`)
        );
      });
    },
    { rootMargin: "-40% 0px -55% 0px" }
  );
  sections.forEach((s) => spy.observe(s));
}

/* ============ SCROLL REVEALS ============ */
function initReveals() {
  const revealEls = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
  if (!revealEls.length) return;

  const show = (node) => node.classList.add("is-visible");

  // Known crawlers, link-preview fetchers, and headless/preview renderers.
  const isCrawler = /bot|crawl|spider|slurp|bingpreview|google|baidu|yandex|duckduck|facebookexternalhit|embedly|quora|pinterest|whatsapp|telegram|lighthouse|headless|prerender|screenshot/i
    .test(navigator.userAgent || "");

  // Crawler, or no IntersectionObserver support → reveal everything now.
  if (isCrawler || !("IntersectionObserver" in window)) {
    revealEls.forEach(show);
    return;
  }

  // Primary behaviour: fade each element in as it scrolls into view.
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          show(e.target);
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealEls.forEach((n) => obs.observe(n));

  // Reveal whatever is already on screen at load (above-the-fold for a human,
  // the whole page for a tall crawler viewport). Keeps the first paint and any
  // preview screenshot from ever being blank, without touching below-fold
  // elements — those still animate in on scroll.
  const revealInViewport = () => {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    revealEls.forEach((n) => {
      if (n.classList.contains("is-visible")) return;
      const r = n.getBoundingClientRect();
      if (r.top < vh && r.bottom > 0) show(n);
    });
  };
  requestAnimationFrame(revealInViewport);
  window.addEventListener("load", () => requestAnimationFrame(revealInViewport), { once: true });
}

/* ============ BOOT ============ */
document.addEventListener("DOMContentLoaded", () => {
  renderHero();
  renderAbout();
  renderExperience();
  renderOpenSource();
  renderProjects();
  renderSkills();
  renderAchievements();
  renderEducation();
  renderContact();

  initSignalCanvas();
  initNav();
  initReveals();
});