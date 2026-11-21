// gta6-clipper-01 entry program (Node 22, standard library only).
//
// The entry itself is a public YouTube Short; this program has exactly one
// job: hand the video's address to the grader. It copies VIDEO.json from
// the repository root (the bot directory) into the output directory, where
// the gate reads it and resolves the video through the YouTube Data API.
// Nothing about the video is computed or scored here.
//
// Local run, outside the grader's container (MAKEFUN_BOT_DIR and
// MAKEFUN_OUTPUT_DIR stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, "VIDEO.json");
const target = join(outputDir, "VIDEO.json");
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`VIDEO.json copied to ${target}`);
