# CopyLine Website Architecture

## Brand Direction

CopyLine is positioned as a premium, reliable Israeli printer partner for offices, organizations, businesses and private customers. The refreshed identity uses:

- Deep ink black for trust and seriousness.
- Strong business blue for technology and service confidence.
- Cyan accent for speed, support and modernity.
- Clean white and cool gray surfaces for readability.
- Sharp 8px-radius components, clear CTAs and practical B2B spacing.

The logo concept keeps the CopyLine initials and printer/document cues, but updates the mark into a compact digital-first symbol.

## Benchmark Notes

The site is designed to outperform typical local printer-service sites by being clearer, more conversion-focused and easier to scan:

- Hebrew-first RTL content and navigation.
- Immediate quote/contact actions.
- Service categories visible above the fold.
- Catalog cards prepared for real models and future product pages.
- Trust, service and business-fit messaging instead of only product listing.

## Technical Stack

- Dependency-free static frontend.
- ES modules for reusable rendering functions.
- `src/content.js` for bilingual copy and product data.
- `src/main.js` for routing, metadata and page rendering.
- `src/styles.css` for responsive RTL/LTR UI.
- `scripts/build.mjs` for deployment output.
- `scripts/serve.py` for local development with route fallback.

## Routing

The app supports:

- `/he`
- `/en`
- `/he/about`
- `/en/about`
- `/he/services`
- `/en/services`
- `/he/printers`
- `/en/printers`
- `/he/printers/:slug`
- `/en/printers/:slug`
- `/he/meter`
- `/en/meter`
- `/he/contact`
- `/en/contact`

Production hosting should rewrite unknown paths to `index.html`.

## Product Data Model

Products live in `src/content.js` as structured objects with:

- `slug`
- `category`
- `image`
- `specs`
- Hebrew content
- English content
- benefits
- suitable use cases

This can later be swapped for a CMS, JSON feed or API without changing the page structure.

Current policy: products should be published only when the model, image, technical specs, compatible toner/consumables and recommended use cases are verified. The first catalog import was built from `מצגת_מכונות_צילום_מלאה.pptx`; one Brother model is intentionally marked image-pending because the PPTX did not include a verified product image for it.

## SEO

Each route sets:

- Page title
- Meta description
- Meta keywords
- Open Graph title
- Open Graph description
- Open Graph URL
- Open Graph image

The build also creates:

- `dist/robots.txt`
- `dist/sitemap.xml`
- `dist/_redirects`

Important Hebrew phrases are included in the Hebrew content and metadata: `מכונות צילום`, `מדפסות לעסקים`, `השכרת מדפסות`, `שירות למדפסות`, `מכירת מדפסות`, `מדפסות למשרד`, `טונרים למדפסות`, `שליחת מונה`, `פתרונות הדפסה לעסקים`, `CopyLine`, `קופיליין`.

## Production Checklist

- Confirm phone, email, WhatsApp and address details.
- Add real Google Maps embed or map link.
- Replace placeholder printer products with actual models.
- Add real customer testimonials.
- Connect the contact form to CRM, email service or backend endpoint.
- Add analytics and conversion tracking if desired.
