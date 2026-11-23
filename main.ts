// ORBITFALL — entrypoint for the make.fun grader (node22, program/v1).
// The game itself is a single self-contained HTML file (index.html),
// written by an AI agent from the one prompt in PROMPT.md.
// This program emits the playable game into the output directory,
// deterministically: same input tree -> same output bytes, every run.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const botDir = process.env.MAKEFUN_BOT_DIR || dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(botDir, "output");

mkdirSync(outDir, { recursive: true });

const game = readFileSync(join(botDir, "index.html"));
writeFileSync(join(outDir, "index.html"), game);
console.log("emit index.html " + game.length + " bytes");

const prompt = readFileSync(join(botDir, "PROMPT.md"));
writeFileSync(join(outDir, "PROMPT.md"), prompt);
console.log("emit PROMPT.md " + prompt.length + " bytes");

console.log("orbitfall ready: open output/index.html in a browser to play");
