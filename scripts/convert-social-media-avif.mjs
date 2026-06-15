import sharp from "sharp";
import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/portfolio/social-media-2025");

const images = [
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/c5cb40225081509.681734feedfa5.jpg",
    name: "social-media-2025-cover",
    width: 2400,
  },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/f34e6e225081509.6819db4344772.jpg",
    name: "social-media-2025-2",
    width: 1600,
  },
  {
    url: "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840_webp/773096225081509.681dc838a85d1.jpg",
    name: "social-media-2025-3",
    width: 1600,
  },
];

async function fetchBuffer(url) {
  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

for (const img of images) {
  console.log(`⬇  Downloading ${img.name}...`);
  const buf = await fetchBuffer(img.url);

  const avifPath = path.join(outDir, `${img.name}.avif`);
  await sharp(buf)
    .resize({ width: img.width, withoutEnlargement: true })
    .avif({ quality: 72, effort: 6 })
    .toFile(avifPath);

  const { size } = await import("fs").then((f) =>
    f.promises.stat(avifPath)
  );
  console.log(`✅ ${img.name}.avif — ${(size / 1024).toFixed(1)} KB`);
}

console.log("\nAll images converted to AVIF.");
