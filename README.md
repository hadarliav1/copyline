# CopyLine Website

Modern bilingual website for CopyLine, built as a fast static frontend with Hebrew-first RTL support and English LTR routing.

## Pages

- `/he` and `/en`
- `/he/about` and `/en/about`
- `/he/services` and `/en/services`
- `/he/printers` and `/en/printers`
- `/he/printers/:slug` and `/en/printers/:slug`
- `/he/meter` and `/en/meter`
- `/he/contact` and `/en/contact`

## Run Locally

```bash
npm run dev
```

Open `http://127.0.0.1:5173/he`.

## Build

```bash
npm run build
```

Deploy the generated `dist/` folder to the host for `copyline.co.il`. The build includes a `_redirects` file for hosts such as Netlify. On Nginx or Apache, configure all unknown paths to serve `index.html` so routes like `/he/printers` and future product URLs work directly.

## Add Printer Products Later

Edit `src/content.js` and add an object to the `products` array:

```js
{
  slug: "real-model-slug",
  category: "multifunction",
  image: "/public/assets/real-model-image.png",
  specs: ["A4", "38 ppm", "Wi-Fi + LAN", "duplex"],
  he: {
    name: "Real Model Name",
    title: "כותרת קצרה",
    description: "תיאור קצר בעברית",
    suitable: "משרדים, עסקים וארגונים",
    benefits: ["יתרון ראשון", "יתרון שני", "יתרון שלישי"]
  },
  en: {
    name: "Real Model Name",
    title: "Short title",
    description: "Short English description",
    suitable: "Offices, businesses and organizations",
    benefits: ["First benefit", "Second benefit", "Third benefit"]
  }
}
```

Place product images in `public/assets/`. Every product image must match the exact model and form factor. The current catalog was imported from `מצגת_מכונות_צילום_מלאה.pptx`; `Brother MFC-J6910DW` is intentionally marked image-pending because the presentation did not include a verified product image for it.

## SEO Notes

Metadata is set per route in `src/main.js`, with Hebrew search phrases included in `src/content.js`. The public Wix reference phone number is included as `1-700-700-388`; update email, address, WhatsApp link and map details before production launch.
