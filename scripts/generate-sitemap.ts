import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { products } from "../src/data/products";
import { solutions } from "../src/data/solutions";
import { blogPosts } from "../src/data/blogs";
import { siteConfig } from "../src/lib/siteConfig";

const staticRoutes = [
  "/",
  "/about",
  "/products",
  "/solutions",
  "/industries",
  "/case-studies",
  "/downloads",
  "/blog",
  "/contact",
  "/request-demo",
  "/careers",
  "/privacy-policy",
  "/terms",
];

const dynamicRoutes = [
  ...products.map((product) => `/products/${product.slug}`),
  ...solutions.map((solution) => `/solutions/${solution.slug}`),
  ...blogPosts.map((post) => `/blog/${post.slug}`),
];

// Industries and case studies are anchors on a single page, not separate
// routes, so /industries and /case-studies above already cover them.
const routes = [...staticRoutes, ...dynamicRoutes];

const today = new Date().toISOString().slice(0, 10);

const urlEntries = routes
  .map((route) => {
    const priority = route === "/" ? "1.0" : route.split("/").filter(Boolean).length === 1 ? "0.8" : "0.6";
    return `  <url>\n    <loc>${siteConfig.siteUrl}${route}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;

const currentDir = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(currentDir, "../public/sitemap.xml");
writeFileSync(outputPath, sitemap, "utf-8");

console.log(`Generated sitemap.xml with ${routes.length} URLs at ${outputPath}`);
