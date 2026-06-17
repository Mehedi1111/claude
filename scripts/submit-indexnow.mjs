import { readdir } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const KEY = "a8f3e7d2b5c94f1e8a2d6b3c7f9e4d5a";
const BASE = "https://madebyevoke.com";
const HOST = "madebyevoke.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";

async function getBlogSlugs() {
  const dir = join(__dirname, "..", "content", "blog");
  const files = await readdir(dir);
  return files.filter((f) => f.endsWith(".mdx")).map((f) => f.replace(".mdx", ""));
}

const lpSlugs = [
  "logo-design-service",
  "brand-identity-design",
  "ai-logo-vectorization",
  "startup-branding",
  "small-business-branding",
  "logo-redesign-service",
  "brand-guidelines-design",
  "web-design-for-startups",
  "branding-agency-usa",
  "ai-logo-cleanup",
  "logo-design-agency",
  "branding-agency-uk",
  "branding-agency-australia",
  "rebranding-agency",
  "web-design-agency",
  "brand-identity-package",
  "saas-branding-agency",
  "b2b-branding-agency",
  "ecommerce-branding-agency",
  "affordable-logo-design",
];

async function main() {
  try {
    const slugs = await getBlogSlugs();

    const urls = [
      BASE,
      `${BASE}/blog`,
      `${BASE}/services`,
      `${BASE}/pricing`,
      `${BASE}/contact`,
      ...lpSlugs.map((slug) => `${BASE}/lp/${slug}`),
      ...slugs.map((slug) => `${BASE}/blog/${slug}`),
    ];

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${BASE}/${KEY}.txt`,
        urlList: urls,
      }),
    });

    if (res.status === 200 || res.status === 202) {
      console.log(`✓ IndexNow: submitted ${urls.length} URLs to Bing (status ${res.status})`);
    } else {
      console.warn(`⚠ IndexNow: unexpected status ${res.status}`);
    }
  } catch (err) {
    // Never fail the build — IndexNow is best-effort
    console.warn("⚠ IndexNow submission skipped:", err.message);
  }
}

main();
