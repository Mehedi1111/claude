import { readdir, readFile, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const KEY = "a8f3e7d2b5c94f1e8a2d6b3c7f9e4d5a";
const BASE = "https://madebyevoke.com";
const HOST = "madebyevoke.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const TRACKER = join(__dirname, "..", ".indexnow-submitted.json");

const STATIC_URLS = [
  BASE,
  `${BASE}/blog`,
  `${BASE}/services`,
  `${BASE}/pricing`,
  `${BASE}/contact`,
];

const LP_SLUGS = [
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

async function getBlogSlugs() {
  const dir = join(__dirname, "..", "content", "blog");
  const files = await readdir(dir);
  return files
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(".mdx", ""));
}

async function loadSubmitted() {
  try {
    const raw = await readFile(TRACKER, "utf-8");
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

async function saveSubmitted(submitted) {
  await writeFile(TRACKER, JSON.stringify([...submitted], null, 2));
}

async function main() {
  try {
    const blogSlugs = await getBlogSlugs();
    const allUrls = [
      ...STATIC_URLS,
      ...LP_SLUGS.map((slug) => `${BASE}/lp/${slug}`),
      ...blogSlugs.map((slug) => `${BASE}/blog/${slug}`),
    ];

    const submitted = await loadSubmitted();
    const newUrls = allUrls.filter((url) => !submitted.has(url));

    if (newUrls.length === 0) {
      console.log("✓ IndexNow: no new URLs to submit");
      return;
    }

    // IndexNow allows max 10,000 URLs per request
    const batch = newUrls.slice(0, 10000);

    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${BASE}/${KEY}.txt`,
        urlList: batch,
      }),
    });

    if (res.status === 200 || res.status === 202) {
      batch.forEach((url) => submitted.add(url));
      await saveSubmitted(submitted);
      console.log(`✓ IndexNow: submitted ${batch.length} new URLs (status ${res.status})`);
    } else {
      console.warn(`⚠ IndexNow: unexpected status ${res.status} — URLs not marked as submitted`);
    }
  } catch (err) {
    // Never fail the build — IndexNow is best-effort
    console.warn("⚠ IndexNow submission skipped:", err.message);
  }
}

main();
