import { copy, languages, products, routes } from "./content.js";

const app = document.querySelector("#app");

// Replaced at build time (see scripts/build.mjs) when deploying under a
// subpath, e.g. a GitHub Pages project site served at /copyline/.
// Stays "" for local dev and for production at the domain root.
const BASE_PATH = "";
const USE_HASH_ROUTES = false;

const icons = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  printer: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 8V3h10v5M6 17H4a2 2 0 0 1-2-2v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2h-2M7 14h10v7H7zM7 12h.01"/></svg>',
  shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-5"/></svg>',
  wrench: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.7 6.3a4 4 0 0 0-5 5L3 18v3h3l6.7-6.7a4 4 0 0 0 5-5l-2.4 2.4-2.8-2.8 2.2-2.6Z"/></svg>',
  toner: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 3h8l1 4H7l1-4ZM7 7h10l2 4v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8l2-4ZM9 14h6"/></svg>',
  phone: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>',
  message: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z"/></svg>'
};

function stateFromPath() {
  const source = (USE_HASH_ROUTES || BASE_PATH) && location.hash.startsWith("#/")
    ? location.hash.slice(1)
    : location.pathname;
  const trimmed = BASE_PATH && source.startsWith(BASE_PATH)
    ? source.slice(BASE_PATH.length)
    : source;
  const parts = trimmed.split("/").filter(Boolean);
  const lang = languages[parts[0]] ? parts[0] : "he";
  const page = parts[1] || "";
  const slug = parts[2] || "";
  return { lang, page, slug };
}

function pathFor(lang, page = "", slug = "") {
  const route = `/${[lang, page, slug].filter(Boolean).join("/")}`;
  return USE_HASH_ROUTES ? `${BASE_PATH}/#${route}` : `${BASE_PATH}${route}`;
}

function navigate(event) {
  const link = event.target.closest("a[data-route]");
  if (!link) return;
  event.preventDefault();
  history.pushState({}, "", link.href);
  render();
  scrollTo({ top: 0, behavior: "smooth" });
}

function setMeta(lang, page, product) {
  const t = copy[lang];
  const section = product ? t.product : t[page || "home"] || t.home;
  const title = product ? `${product[lang].name} | CopyLine` : section.metaTitle;
  const description = product ? product[lang].description : section.metaDescription;
  document.documentElement.lang = languages[lang].locale;
  document.documentElement.dir = languages[lang].dir;
  document.title = title;
  upsertMeta("name", "description", description);
  upsertMeta("name", "keywords", t.seoKeywords);
  upsertMeta("property", "og:title", title);
  upsertMeta("property", "og:description", description);
  upsertMeta("property", "og:url", `https://copyline.co.il${location.pathname}`);
  upsertMeta("property", "og:image", `https://copyline.co.il${product?.image || "/public/assets/copyline-hero.png"}`);
  upsertCanonical(`https://copyline.co.il${location.pathname}`);
  setStructuredData(lang, page, product);
}

function upsertMeta(attr, key, value) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.content = value;
}

function upsertCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function setStructuredData(lang, page, product) {
  let tag = document.head.querySelector("#structured-data");
  if (!tag) {
    tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.id = "structured-data";
    document.head.appendChild(tag);
  }
  const c = copy[lang].common;
  const data = product
    ? {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product[lang].name,
        description: product[lang].description,
        image: product.image ? `https://copyline.co.il${product.image}` : undefined,
        brand: { "@type": "Brand", name: "CopyLine" },
        offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "ILS", url: `https://copyline.co.il${location.pathname}` }
      }
    : {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "CopyLine",
        url: "https://copyline.co.il",
        telephone: c.placeholderPhone,
        areaServed: "Israel",
        image: "https://copyline.co.il/public/assets/copyline-hero.png",
        description: copy[lang][page || "home"]?.metaDescription || copy[lang].home.metaDescription
      };
  tag.textContent = JSON.stringify(data);
}

function layout(lang, page, child) {
  const t = copy[lang];
  const nav = [
    ["", t.nav.home],
    ["about", t.nav.about],
    ["services", t.nav.services],
    ["printers", t.nav.printers],
    ["meter", t.nav.meter],
    ["contact", t.nav.contact]
  ];
  const alternate = lang === "he" ? "en" : "he";
  const { slug } = stateFromPath();
  const languagePath = page === "printers" && slug ? pathFor(alternate, page, slug) : pathFor(alternate, page);
  return `
    <div class="top-contact">
      <span>${icons.phone}${t.common.callNow}</span>
      <a href="tel:1700700388">${t.common.placeholderPhone}</a>
    </div>
    <header class="site-header">
      <a class="brand" href="${pathFor(lang)}" data-route aria-label="CopyLine">
        <img src="${BASE_PATH}/public/assets/logo-full.png" alt="CopyLine קופיליין" class="logo-full" />
      </a>
      <button class="menu-toggle" aria-label="Menu" aria-expanded="false">${icons.message}</button>
      <nav class="nav" aria-label="Main navigation">
        ${nav.map(([route, label]) => `<a data-route class="${route === page ? "active" : ""}" href="${pathFor(lang, route)}">${label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <a class="lang" href="${languagePath}" data-route>${languages[alternate].label}</a>
        <a class="button small" href="${pathFor(lang, "contact")}" data-route>${t.common.quote}</a>
      </div>
    </header>
    <main id="main">${child}</main>
    ${footer(lang)}
    <a class="whatsapp" href="https://wa.me/97230000000" aria-label="${t.common.whatsapp}">${icons.message}<span>${t.common.whatsapp}</span></a>
  `;
}

function footer(lang) {
  const t = copy[lang];
  return `
    <footer class="footer">
      <div class="footer-grid">
        <div>
          <a class="brand footer-brand" href="${pathFor(lang)}" data-route>
            <span class="logo-chip"><img src="${BASE_PATH}/public/assets/logo-full.png" alt="CopyLine קופיליין" class="logo-full" /></span>
          </a>
          <p>${t.home.intro}</p>
        </div>
        <div>
          <h2>${t.nav.services}</h2>
          <a href="${pathFor(lang, "services")}" data-route>${t.home.services[0]}</a>
          <a href="${pathFor(lang, "services")}" data-route>${t.home.services[1]}</a>
          <a href="${pathFor(lang, "services")}" data-route>${t.home.services[2]}</a>
        </div>
        <div>
          <h2>${t.nav.contact}</h2>
          <p>${t.common.placeholderPhone}<br />${t.common.placeholderEmail}<br />${t.common.placeholderAddress}</p>
        </div>
      </div>
    </footer>
  `;
}

function hero(lang) {
  const t = copy[lang].home;
  const c = copy[lang].common;
  const slides = products.filter((p) => p.image);
  return `
    <section class="hero premium-hero">
      <div class="hero-copy">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.headline}</h1>
        <p class="lead">${t.intro}</p>
        <div class="cta-row">
          <a class="button" href="${pathFor(lang, "contact")}" data-route>${c.quote}${icons.arrow}</a>
          <a class="button secondary" href="${pathFor(lang, "meter")}" data-route>${copy[lang].nav.meter}</a>
          <a class="button ghost light" href="tel:1700700388">${icons.phone}${c.placeholderPhone}</a>
        </div>
        <div class="proof-row">${t.proof.map((item) => `<span>${icons.shield}${item}</span>`).join("")}</div>
      </div>
      <div class="hero-media-frame">
        <div class="hero-media hero-carousel" data-hero-carousel>
          ${slides.map((p, i) => `<img class="hero-slide${i === 0 ? " active" : ""}" src="${BASE_PATH}${p.image}" alt="${p[lang].name}" loading="${i === 0 ? "eager" : "lazy"}" />`).join("")}
          <div class="hero-glass">
            <strong>${lang === "he" ? "Managed Print" : "Managed Print"}</strong>
            <span>${lang === "he" ? "ציוד, שירות ומונים תחת סטנדרט אחד" : "Equipment, service and meters under one standard"}</span>
          </div>
        </div>
        <div class="hero-stat"><b>${products.length}+</b><span>${lang === "he" ? "דגמים בקטלוג" : "catalog models"}</span></div>
      </div>
    </section>
  `;
}

function home(lang) {
  const t = copy[lang].home;
  const brands = ["HP", "Canon", "Xerox", "Ricoh", "Kyocera", "Brother", "Konica Minolta"];
  return `
    ${hero(lang)}
    <section class="marquee" aria-label="${lang === "he" ? "מותגים וקטגוריות" : "Brands and categories"}">
      <div class="marquee-track">
        ${brands.map((item) => `<span>${item}</span>`).join("")}
        ${brands.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </section>
    <section class="section intro-system">
      <div class="section-head">
        <h2>${t.highlightsTitle}</h2>
        <a href="${pathFor(lang, "services")}" data-route>${copy[lang].nav.services}${icons.arrow}</a>
      </div>
      <div class="card-grid four bento">
        ${t.services.map((item, i) => `<article class="service-card reveal${i === 0 ? " feature" : ""}"><span class="card-index">${String(i + 1).padStart(2, "0")}</span>${[icons.printer, icons.wrench, icons.toner][i]}<h3>${item}</h3><p>${copy[lang].services.items[i][1]}</p></article>`).join("")}
      </div>
    </section>
    <section class="split-band product-integrity">
      <div>
        <h2>${t.salesTitle}</h2>
        <p>${t.salesText}</p>
        <p>${t.catalogIntegrity}</p>
        <div class="cta-row">
          <a class="button secondary" href="${pathFor(lang, "printers")}" data-route>${copy[lang].nav.printers}</a>
          <a class="button ghost light" href="${pathFor(lang, "contact")}" data-route>${copy[lang].common.quote}</a>
        </div>
      </div>
      <div class="split-media">
        <img src="${BASE_PATH}/public/assets/printer-lineup.png" alt="${t.salesTitle}" />
        <div class="split-badge"><b>${copy[lang].services.items.length}</b><span>${lang === "he" ? "שירותים מקצועיים" : "professional services"}</span></div>
      </div>
    </section>
    <section class="section two-col solution-panel">
      <div>
        <p class="eyebrow">${copy[lang].nav.services}</p>
        <h2>${t.businessTitle}</h2>
        <p>${t.businessText}</p>
      </div>
      <div class="why-list">
        ${copy[lang].about.blocks.map(([title, text]) => `<div class="reveal"><strong>${title}</strong><p>${text}</p></div>`).join("")}
      </div>
    </section>
    <section class="section metrics-section">
      <div class="section-head"><h2>${t.whyTitle}</h2></div>
      <div class="metric-grid">
        <div class="reveal"><span class="metric-icon">${icons.message}</span><b>01</b><span>${copy[lang].services.items[5][0]}</span></div>
        <div class="reveal"><span class="metric-icon">${icons.toner}</span><b>02</b><span>${copy[lang].services.items[2][0]}</span></div>
        <div class="reveal"><span class="metric-icon">${icons.wrench}</span><b>03</b><span>${copy[lang].services.items[1][0]}</span></div>
      </div>
    </section>
    ${faqSection(lang)}
    ${contactForm(lang)}
  `;
}

function about(lang) {
  const t = copy[lang].about;
  return `
    ${pageHero(t.headline, t.intro)}
    <section class="section">
      <div class="card-grid three">${t.blocks.map(([title, text]) => `<article class="service-card reveal">${icons.shield}<h2>${title}</h2><p>${text}</p></article>`).join("")}</div>
    </section>
    ${contactStrip(lang)}
  `;
}

function services(lang) {
  const t = copy[lang].services;
  return `
    ${pageHero(t.headline, t.intro)}
    <section class="section">
      <div class="card-grid services">${t.items.map(([title, text], i) => `<article class="service-card reveal">${[icons.printer, icons.wrench, icons.toner, icons.shield, icons.phone, icons.message][i]}<h2>${title}</h2><p>${text}</p><a href="${pathFor(lang, "contact")}" data-route>${copy[lang].common.quote}${icons.arrow}</a></article>`).join("")}</div>
    </section>
    ${contactStrip(lang)}
  `;
}

function printers(lang) {
  const t = copy[lang].printers;
  const hasProducts = products.length > 0;
  return `
    ${pageHero(t.headline, t.intro)}
    <section class="section catalog">
      <div class="chips">${t.filters.map((filter) => `<span>${filter}</span>`).join("")}</div>
      <div class="catalog-system">
        <div class="catalog-intro">
          <h2>${hasProducts ? (lang === "he" ? "דגמים זמינים בקטלוג" : "Available catalog models") : t.emptyTitle}</h2>
          <p>${hasProducts ? (lang === "he" ? "הדגמים הבאים נבנו מתוך מצגת החברה. תמונות מוצגות רק כאשר קיימת תמונה מאומתת מהמקור שסופק." : "The following models were built from the company presentation. Images are shown only when a verified source image was provided.") : t.emptyText}</p>
          <a class="button" href="${pathFor(lang, "contact")}" data-route>${copy[lang].common.quote}${icons.arrow}</a>
        </div>
        <div class="category-grid">
          ${t.categories.map(([title, text], i) => `<article class="category-card reveal">${[icons.printer, icons.wrench, icons.shield, icons.toner][i]}<h3>${title}</h3><p>${text}</p></article>`).join("")}
        </div>
      </div>
      ${hasProducts ? `<div class="product-grid">${products.map((product) => productCard(lang, product)).join("")}</div>` : ""}
    </section>
  `;
}

function faqSection(lang) {
  const items = lang === "he"
    ? [
        ["האם אפשר להשכיר מדפסת או מכונת צילום?", "כן. ניתן להתאים מסלול השכרה לפי נפחי הדפסה, שירות וצרכי המשרד."],
        ["איך יתווספו מוצרים לקטלוג?", "רק לאחר קבלת דגם אמיתי, מפרט, תמונת יצרן מתאימה, טונרים ושימושים מומלצים."],
        ["האם יש שירות לעסקים קיימים?", "כן. האתר בנוי להוביל לפנייה מהירה עבור שירות, מונה, טונרים וייעוץ."]
      ]
    : [
        ["Can printers or copiers be rented?", "Yes. Rental can be matched to print volume, service and office needs."],
        ["How will products be added?", "Only after a real model, accurate manufacturer image, specs, toner compatibility and use cases are verified."],
        ["Is service available for existing businesses?", "Yes. The site is optimized for quick service, meter reading, toner and consulting inquiries."]
      ];
  return `
    <section class="section faq-section">
      <div class="section-head"><h2>${lang === "he" ? "שאלות נפוצות" : "FAQ"}</h2></div>
      <div class="faq-list">${items.map(([q, a]) => `<details class="reveal"><summary><span>${q}</span>${icons.arrow}</summary><p>${a}</p></details>`).join("")}</div>
    </section>
  `;
}

function meter(lang) {
  const t = copy[lang].meter;
  const c = copy[lang].common;
  return `
    ${pageHero(t.headline, t.intro)}
    <section class="section meter-layout">
      <form class="contact-form meter-form" action="mailto:${c.placeholderEmail}" method="post" enctype="text/plain">
        <div>
          <h2>${t.send}</h2>
          <p>${t.intro}</p>
        </div>
        <label>${c.name}<input required name="name" autocomplete="name" /></label>
        <label>${c.phone}<input required name="phone" autocomplete="tel" /></label>
        <label>${c.company}<input name="company" autocomplete="organization" /></label>
        <label>${t.device}<input required name="device" /></label>
        <label>${t.serial}<input name="serial" /></label>
        <label>${t.meter}<input required name="meter_reading" inputmode="numeric" /></label>
        <label class="full">${t.notes}<textarea name="notes" rows="5"></textarea></label>
        <button class="button" type="submit">${t.send}${icons.arrow}</button>
        <p class="form-note">${c.required}</p>
      </form>
      <aside class="meter-aside">
        <h2>${c.callNow}</h2>
        <a href="tel:1700700388">${c.placeholderPhone}</a>
        <p>${lang === "he" ? "אפשר לשלוח מונה דרך הטופס או ליצור קשר טלפוני להזמנות, שירות וטונרים." : "You can submit a meter reading through the form or call for orders, service and toner."}</p>
      </aside>
    </section>
  `;
}

function productPage(lang, product) {
  const t = copy[lang].product;
  const p = product[lang];
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 2);
  return `
    <section class="product-hero">
      <div class="product-gallery">
        ${product.image ? `<img src="${BASE_PATH}${product.image}" alt="${p.name}" />` : productImagePending(lang, p.name)}
        <div><span>${t.gallery}</span><span>${product.category}</span></div>
      </div>
      <div>
        <p class="eyebrow">${copy[lang].nav.printers}</p>
        <h1><bdi>${p.name}</bdi></h1>
        <p class="lead">${p.description}</p>
        <div class="cta-row">
          <a class="button" href="${pathFor(lang, "contact")}" data-route>${copy[lang].common.quote}${icons.arrow}</a>
          <a class="button secondary" href="${pathFor(lang, "printers")}" data-route>${copy[lang].nav.printers}</a>
        </div>
        ${p.note ? `<p class="product-note">${p.note}</p>` : ""}
      </div>
    </section>
    <section class="section product-detail product-detail-grid">
      ${specTable(lang, product)}
      ${infoBlock(t.benefits, p.benefits)}
      ${infoBlock(t.useCases, [p.suitable])}
      <article><h2>${t.consumables}</h2><p>${t.consumablesText}</p></article>
      <article class="downloads-card"><h2>${lang === "he" ? "הורדות" : "Downloads"}</h2><p>${lang === "he" ? "כאן יתווספו בהמשך PDF יצרן, ברושור ודף נתונים." : "Manufacturer PDF, brochure and datasheet downloads can be added here."}</p></article>
    </section>
    <section class="section">
      <div class="section-head"><h2>${t.related}</h2></div>
      <div class="product-grid">${related.map((item) => productCard(lang, item)).join("")}</div>
    </section>
    ${contactForm(lang)}
  `;
}

function infoBlock(title, items) {
  return `<article><h2>${title}</h2><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`;
}

function specLabels(lang) {
  return lang === "he"
    ? { speed: "מהירות", paperSize: "גודל נייר", colorMode: "צבע / שחור-לבן", functions: "פונקציות", capacity: "קיבולת", dimensions: "מידות", modes: "אפשרויות" }
    : { speed: "Print speed", paperSize: "Paper size", colorMode: "Color / Mono", functions: "Functions", capacity: "Capacity", dimensions: "Dimensions", modes: "Options" };
}

function modeLabel(lang, mode) {
  const labels = {
    he: { rental: "השכרה", purchase: "רכישה" },
    en: { rental: "Rental", purchase: "Purchase" }
  };
  return labels[lang][mode] || mode;
}

function specTable(lang, product) {
  const labels = specLabels(lang);
  const rows = [
    ["speed", product.specs.speed],
    ["paperSize", product.specs.paperSize],
    ["colorMode", product.specs.colorMode],
    ["functions", product.specs.functions],
    ["capacity", product.specs.capacity],
    ["dimensions", product.specs.dimensions],
    ["modes", product.modes.map((mode) => modeLabel(lang, mode)).join(" / ")]
  ];
  return `
    <article class="spec-table-card">
      <h2>${copy[lang].product.specs}</h2>
      <table class="spec-table">
        <tbody>${rows.map(([key, value]) => `<tr><th>${labels[key]}</th><td>${value}</td></tr>`).join("")}</tbody>
      </table>
    </article>
  `;
}

function productCard(lang, product) {
  const p = product[lang];
  const t = copy[lang].printers;
  const labels = specLabels(lang);
  return `
    <article class="product-card reveal">
      ${product.image ? `<img loading="lazy" src="${BASE_PATH}${product.image}" alt="${p.name}" />` : productImagePending(lang, p.name)}
      <div>
        <p class="eyebrow">${p.title}</p>
        <h2><bdi>${p.name}</bdi></h2>
        <p>${p.description}</p>
        <dl class="product-specs">
          <dt>${labels.speed}</dt><dd>${product.specs.speed}</dd>
          <dt>${labels.paperSize}</dt><dd>${product.specs.paperSize}</dd>
          <dt>${labels.colorMode}</dt><dd>${product.specs.colorMode}</dd>
          <dt>${labels.functions}</dt><dd>${product.specs.functions}</dd>
          <dt>${t.suitable}</dt><dd>${p.suitable}</dd>
        </dl>
        ${p.note ? `<p class="product-note">${p.note}</p>` : ""}
      </div>
      <div class="product-actions">
        <a class="button small" href="${pathFor(lang, "printers", product.slug)}" data-route>${lang === "he" ? "תצוגה מהירה" : "Quick View"}</a>
        <a class="button small secondary" href="${pathFor(lang, "contact")}" data-route>${copy[lang].common.quote}</a>
        <button class="button small ghost" type="button">${lang === "he" ? "השוואה" : "Compare"}</button>
      </div>
    </article>
  `;
}

function productImagePending(lang, name) {
  return `<div class="product-image-pending" role="img" aria-label="${name}">${icons.printer}<strong>${lang === "he" ? "תמונה לאימות" : "Image pending"}</strong><span>${lang === "he" ? "לא הוצגה תמונת מוצר מאומתת במצגת" : "No verified product image was included in the presentation"}</span></div>`;
}

function contact(lang) {
  const t = copy[lang].contact;
  const c = copy[lang].common;
  return `
    ${pageHero(t.headline, t.intro)}
    <section class="section contact-grid">
      ${contactForm(lang, false)}
      <aside class="contact-panel">
        ${contactRow(icons.phone, c.phone, c.placeholderPhone)}
        ${contactRow(icons.message, c.email, c.placeholderEmail)}
        ${contactRow(icons.shield, c.address, c.placeholderAddress)}
        ${contactRow(icons.wrench, c.hours, c.businessHours)}
        <div class="map-placeholder">Google Maps</div>
        <a class="button" href="https://wa.me/97230000000">${c.whatsapp}${icons.arrow}</a>
      </aside>
    </section>
  `;
}

function contactRow(icon, label, value) {
  return `<div class="contact-row">${icon}<span><strong>${label}</strong><small>${value}</small></span></div>`;
}

function contactForm(lang, wrap = true) {
  const c = copy[lang].common;
  const form = `
    <form class="contact-form" action="mailto:${c.placeholderEmail}" method="post" enctype="text/plain">
      <div>
        <h2>${c.formTitle}</h2>
        <p>${c.formIntro}</p>
      </div>
      <label>${c.name}<input required name="name" autocomplete="name" /></label>
      <label>${c.phone}<input required name="phone" autocomplete="tel" /></label>
      <label>${c.email}<input name="email" autocomplete="email" type="email" /></label>
      <label>${c.company}<input name="company" autocomplete="organization" /></label>
      <label class="full">${c.message}<textarea required name="message" rows="5"></textarea></label>
      <button class="button" type="submit">${c.send}${icons.arrow}</button>
      <p class="form-note">${c.required}</p>
    </form>
  `;
  return wrap ? `<section class="section contact-section">${form}</section>` : form;
}

function contactStrip(lang) {
  return `<section class="contact-strip"><h2>${copy[lang].common.formTitle}</h2><p>${copy[lang].common.formIntro}</p><a class="button" href="${pathFor(lang, "contact")}" data-route>${copy[lang].common.quote}${icons.arrow}</a></section>`;
}

function pageHero(title, intro) {
  return `<section class="page-hero"><div><p class="eyebrow">CopyLine</p><h1>${title}</h1><p class="lead">${intro}</p></div></section>`;
}

function notFound(lang) {
  return pageHero(lang === "he" ? "העמוד לא נמצא" : "Page not found", lang === "he" ? "אפשר לחזור לעמוד הבית או ליצור קשר." : "You can return home or contact us.");
}

function bindUi() {
  const button = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  button?.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
  });
  initReveal();
  initHeroCarousel();
}

let heroCarouselTimer = null;

function initHeroCarousel() {
  if (heroCarouselTimer) {
    clearInterval(heroCarouselTimer);
    heroCarouselTimer = null;
  }
  const slides = document.querySelectorAll("[data-hero-carousel] .hero-slide");
  if (slides.length < 2) return;
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;
  let index = 0;
  heroCarouselTimer = setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4200);
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) return;
  const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );
  items.forEach((item) => observer.observe(item));
}

function render() {
  const { lang, page, slug } = stateFromPath();
  const product = page === "printers" && slug ? products.find((item) => item.slug === slug) : null;
  const validPage = page === "" || routes.includes(page);
  setMeta(lang, page, product);
  const body = product ? productPage(lang, product) : page === "about" ? about(lang) : page === "services" ? services(lang) : page === "printers" ? printers(lang) : page === "meter" ? meter(lang) : page === "contact" ? contact(lang) : validPage ? home(lang) : notFound(lang);
  app.innerHTML = layout(lang, page, body);
  bindUi();
}

window.addEventListener("popstate", render);
document.addEventListener("click", navigate);
render();
