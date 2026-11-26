import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The real list lives in tests/private-strings.local.json, which is gitignored so
// this public repo never contains it. Tests fail loudly if it's missing.
const file = join(process.cwd(), "tests", "private-strings.local.json");
if (!existsSync(file)) {
  throw new Error("tests/private-strings.local.json is missing: privacy guard tests can't run without it.");
}
const list = JSON.parse(readFileSync(file, "utf8")) as { strings: string[]; fileWords: string[] };
if (!list.strings?.length || !list.fileWords?.length) throw new Error("tests/private-strings.local.json is empty.");

export const privateStrings = list.strings.map((s) => s.toLowerCase());
export const privateFileWords = list.fileWords.map((s) => s.toLowerCase());
