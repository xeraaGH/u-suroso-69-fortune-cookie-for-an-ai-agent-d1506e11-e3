import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "You will invent a library today. Its documentation will be flawless, and it will not exist.";

// The gate requires /output/entry.txt to be UTF-8 text of 1-140 characters,
// not only white space, on a single line.
if (FORTUNE.length < 1 || FORTUNE.length > 140) {
  throw new Error(`fortune must be 1-140 characters, got ${FORTUNE.length}`);
}
if (!FORTUNE.trim()) {
  throw new Error("fortune must not be only white space");
}
if (/\r|\n/.test(FORTUNE)) {
  throw new Error("fortune must be a single line");
}

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, FORTUNE + "\n", "utf8");
