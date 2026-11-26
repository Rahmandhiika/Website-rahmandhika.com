import { describe, expect, test } from "vitest";
import { existsSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { projects } from "@/content/projects";
import { privateFileWords } from "./private-strings";

const pub = (p: string) => join(process.cwd(), "public", p);
const images = [
  ...projects.flatMap((p) => [p.cover.src, ...p.gallery.map((g) => g.src)]),
  "/me/sticker.webp",
  "/me/photo.webp",
];

function walk(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
}

describe("assets", () => {
  test.each(images)("%s exists as webp under 500 KB", (src) => {
    expect(src.endsWith(".webp")).toBe(true);
    expect(existsSync(pub(src))).toBe(true);
    expect(statSync(pub(src)).size).toBeLessThanOrEqual(500 * 1024);
  });

  test.each(["/Rahmandhika-CV.pdf", "/Rahmandhika-Portfolio.pdf"])("%s exists under 10 MB", (src) => {
    expect(existsSync(pub(src))).toBe(true);
    expect(statSync(pub(src)).size).toBeLessThanOrEqual(10 * 1024 * 1024);
  });

  test("no public file name mentions the client", () => {
    const names = walk(join(process.cwd(), "public"));
    expect(names.filter((n) => privateFileWords.some((w) => n.toLowerCase().includes(w)))).toEqual([]);
  });
});
