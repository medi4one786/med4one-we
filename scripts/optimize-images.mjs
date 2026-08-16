#!/usr/bin/env node
/**
 * Automated image optimization pipeline.
 *
 * Scans src/assets and public for raster source images and produces, for each:
 *   - a compressed original-format file (PNG/JPEG) as the universal fallback
 *   - a lossless/high-quality WebP sibling (served first)
 *   - responsive width variants (WebP + fallback) for any image wider than the
 *     smallest breakpoint
 *   - an entry in src/assets/image-manifest.json with intrinsic dimensions and
 *     generated srcsets, consumed by <OptimizedImage />
 *
 * Usage: bun run optimize:images
 */
import { readdir, stat, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const SCAN_DIRS = ["src/assets", "public"];
const SOURCE_EXT = new Set([".png", ".jpg", ".jpeg"]);
const WIDTHS = [480, 768, 1200, 1920];
const MANIFEST = path.join(ROOT, "src/assets/image-manifest.json");
const GENERATED = /-(\d+)w\.(png|jpe?g|webp)$/i;

async function walk(dir) {
  const out = [];
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return out;
  }
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else out.push(full);
  }
  return out;
}

function publicUrl(file) {
  const rel = path.relative(ROOT, file).split(path.sep).join("/");
  return rel.startsWith("public/") ? rel.slice("public".length) : "/" + rel;
}

async function sizeOf(file) {
  return (await stat(file)).size;
}

async function optimize(file) {
  const ext = path.extname(file).toLowerCase();
  const base = file.slice(0, -ext.length);
  const input = sharp(file);
  const meta = await input.metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;
  const isPng = ext === ".png";

  // 1. Compress the original format in place (fallback for old browsers).
  const before = await sizeOf(file);
  const compressed = isPng
    ? await sharp(file).png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 }).toBuffer()
    : await sharp(file).jpeg({ quality: 82, mozjpeg: true, progressive: true }).toBuffer();
  if (compressed.length < before) await writeFile(file, compressed);

  // 2. WebP sibling at full resolution.
  const webpPath = `${base}.webp`;
  await sharp(file)
    .webp(isPng ? { lossless: true, effort: 6 } : { quality: 82, effort: 6 })
    .toFile(webpPath);

  // 3. Responsive width variants.
  const variants = [];
  for (const w of WIDTHS) {
    if (w >= width) continue;
    const webpVariant = `${base}-${w}w.webp`;
    const fallbackVariant = `${base}-${w}w${ext}`;
    await sharp(file).resize({ width: w }).webp(isPng ? { lossless: true, effort: 6 } : { quality: 80, effort: 6 }).toFile(webpVariant);
    const resized = sharp(file).resize({ width: w });
    await (isPng
      ? resized.png({ compressionLevel: 9, palette: true, quality: 90, effort: 10 })
      : resized.jpeg({ quality: 80, mozjpeg: true, progressive: true })
    ).toFile(fallbackVariant);
    variants.push({ width: w, webp: publicUrl(webpVariant), fallback: publicUrl(fallbackVariant) });
  }

  const key = path
    .relative(ROOT, file)
    .split(path.sep)
    .join("/")
    .replace(/^(src\/assets|public)\//, "")
    .replace(new RegExp(`${ext.replace(".", "\\.")}$`), "");

  const srcSetWebp = [...variants.map((v) => `${v.webp} ${v.width}w`), `${publicUrl(webpPath)} ${width}w`].join(", ");
  const srcSetFallback = [...variants.map((v) => `${v.fallback} ${v.width}w`), `${publicUrl(file)} ${width}w`].join(", ");

  return [
    key,
    {
      width,
      height,
      fallback: publicUrl(file),
      webp: publicUrl(webpPath),
      srcSetWebp,
      srcSetFallback,
      bytes: { before, afterFallback: await sizeOf(file), afterWebp: await sizeOf(webpPath) },
    },
  ];
}

const files = (await Promise.all(SCAN_DIRS.map((d) => walk(path.join(ROOT, d)))))
  .flat()
  .filter((f) => SOURCE_EXT.has(path.extname(f).toLowerCase()))
  .filter((f) => !GENERATED.test(f))
  .sort();

if (files.length === 0) {
  console.log("No source images found in", SCAN_DIRS.join(", "));
  process.exit(0);
}

const manifest = {};
let savedBytes = 0;
for (const file of files) {
  const [key, entry] = await optimize(file);
  manifest[key] = entry;
  savedBytes += entry.bytes.before - Math.min(entry.bytes.afterWebp, entry.bytes.afterFallback);
  console.log(
    `${key}: ${entry.width}x${entry.height} | ${(entry.bytes.before / 1024).toFixed(1)}KB -> webp ${(entry.bytes.afterWebp / 1024).toFixed(1)}KB, fallback ${(entry.bytes.afterFallback / 1024).toFixed(1)}KB`,
  );
}

await mkdir(path.dirname(MANIFEST), { recursive: true });
await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
console.log(`\n${files.length} image(s) optimized. Est. savings: ${(savedBytes / 1024).toFixed(1)}KB`);
console.log(`Manifest written to ${path.relative(ROOT, MANIFEST)}`);
