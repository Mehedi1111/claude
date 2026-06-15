/**
 * convert-images.mjs
 * Free, zero-API image converter — uses sharp (already in Next.js) to convert
 * any JPG/PNG/WEBP to AVIF and save it to /public/portfolio/<folder>/
 *
 * Usage:
 *   node scripts/convert-images.mjs <url-or-local-path> <output-folder> [width] [quality]
 *
 * Examples:
 *   node scripts/convert-images.mjs https://example.com/photo.jpg my-project
 *   node scripts/convert-images.mjs https://example.com/photo.jpg my-project 1920 60
 *   node scripts/convert-images.mjs ./downloads/photo.jpg my-project 1400 55
 *
 * The output file will be saved to:
 *   public/portfolio/<output-folder>/<original-filename>.avif
 *
 * Run for multiple URLs by passing them in sequence or by editing the BATCH section below.
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "../public/portfolio");

// ─── BATCH MODE ────────────────────────────────────────────────────────────────
// Add entries here to convert multiple images in one run:
//   { url, folder, name?, width?, quality? }
const BATCH = [
  // Example:
  // {
  //   url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/abc123.jpg",
  //   folder: "my-new-project",
  //   name: "hero",
  //   width: 1920,
  //   quality: 55,
  // },
];
// ───────────────────────────────────────────────────────────────────────────────

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      Referer: "https://www.behance.net/",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function convertToAvif({ url, folder, name, width = 1920, quality = 55 }) {
  const outDir = path.join(publicDir, folder);
  fs.mkdirSync(outDir, { recursive: true });

  const isRemote = url.startsWith("http");
  let inputBuf;

  if (isRemote) {
    console.log(`⬇  Downloading ${url.split("/").pop()}...`);
    inputBuf = await fetchBuffer(url);
  } else {
    const absPath = path.resolve(process.cwd(), url);
    console.log(`📂 Reading ${absPath}...`);
    inputBuf = fs.readFileSync(absPath);
  }

  const baseName = name ?? path.basename(url).replace(/\.[^.]+$/, "");
  const outFile = path.join(outDir, `${baseName}.avif`);

  await sharp(inputBuf)
    .resize({ width, withoutEnlargement: true })
    .avif({ quality, effort: 8 })
    .toFile(outFile);

  const { size } = fs.statSync(outFile);
  console.log(`✅ Saved → public/portfolio/${folder}/${baseName}.avif  (${(size / 1024).toFixed(1)} KB)`);
  return `/portfolio/${folder}/${baseName}.avif`;
}

// CLI mode
const args = process.argv.slice(2);

if (args.length > 0) {
  const [url, folder = "general", width = 1920, quality = 55] = args;
  await convertToAvif({ url, folder, width: Number(width), quality: Number(quality) });
} else if (BATCH.length > 0) {
  console.log(`\nBatch converting ${BATCH.length} image(s)...\n`);
  for (const item of BATCH) {
    await convertToAvif(item);
  }
  console.log("\n✅ Batch complete.");
} else {
  console.log(`
Usage:
  node scripts/convert-images.mjs <url-or-path> <folder> [width] [quality]

Examples:
  node scripts/convert-images.mjs https://example.com/image.jpg my-project
  node scripts/convert-images.mjs https://example.com/image.jpg my-project 1920 60

Or edit the BATCH array inside this script to convert multiple images at once.

Output: public/portfolio/<folder>/<filename>.avif
  `);
}
