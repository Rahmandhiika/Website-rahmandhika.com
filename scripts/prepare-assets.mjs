// Compresses one source image into a WebP under public/.
// Usage: node scripts/prepare-assets.mjs <source-image> <public-path.webp> [maxWidth]
import sharp from "sharp";
import { mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

const [src, dest, maxWidth = "1600"] = process.argv.slice(2);
if (!src || !dest?.endsWith(".webp")) {
  console.error("usage: prepare-assets <source> <public-path.webp> [maxWidth]");
  process.exit(1);
}
const out = join(process.cwd(), "public", dest);
mkdirSync(dirname(out), { recursive: true });
const info = await sharp(src)
  .resize({ width: Number(maxWidth), withoutEnlargement: true })
  .webp({ quality: 80 })
  .toFile(out);
console.log(`${dest} ${info.width}x${info.height} ${Math.round(info.size / 1024)} KB`);
