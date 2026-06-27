import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { products } from "../src/content.js";

const dist = new URL("../dist/", import.meta.url);
const files = ["index.html", "src", "public"];

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const file of files) {
  const from = new URL(`../${file}`, import.meta.url);
  const to = new URL(`../dist/${file}`, import.meta.url);
  if (existsSync(from)) {
    await cp(from, to, { recursive: true });
  }
}

await writeFile(
  new URL("../dist/_redirects", import.meta.url),
  "/* /index.html 200\n",
  "utf8"
);

await writeFile(
  new URL("../dist/robots.txt", import.meta.url),
  "User-agent: *\nAllow: /\nSitemap: https://copyline.co.il/sitemap.xml\n",
  "utf8"
);

await cp(
  new URL("../dist/index.html", import.meta.url),
  new URL("../dist/404.html", import.meta.url)
);

await writeFile(
  new URL("../dist/sitemap.xml", import.meta.url),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://copyline.co.il/he</loc></url>
  <url><loc>https://copyline.co.il/he/about</loc></url>
  <url><loc>https://copyline.co.il/he/services</loc></url>
  <url><loc>https://copyline.co.il/he/printers</loc></url>
${products.map((product) => `  <url><loc>https://copyline.co.il/he/printers/${product.slug}</loc></url>`).join("\n")}
  <url><loc>https://copyline.co.il/he/meter</loc></url>
  <url><loc>https://copyline.co.il/he/contact</loc></url>
  <url><loc>https://copyline.co.il/en</loc></url>
  <url><loc>https://copyline.co.il/en/about</loc></url>
  <url><loc>https://copyline.co.il/en/services</loc></url>
  <url><loc>https://copyline.co.il/en/printers</loc></url>
${products.map((product) => `  <url><loc>https://copyline.co.il/en/printers/${product.slug}</loc></url>`).join("\n")}
  <url><loc>https://copyline.co.il/en/meter</loc></url>
  <url><loc>https://copyline.co.il/en/contact</loc></url>
</urlset>
`,
  "utf8"
);

console.log("Built CopyLine site into dist/");
