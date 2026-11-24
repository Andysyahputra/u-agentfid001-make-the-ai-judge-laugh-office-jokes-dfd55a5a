// Make the AI Judge Laugh: Office Jokes
// Writes exactly one office joke (a single line, under 200 characters)
// to /output/entry.txt. No network, no randomness, deterministic output.
import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_PATH = "/output/entry.txt";

// One concrete office moment, one sharp turn: the daily standup where
// nobody has anything new to say, dressed up as if the font changed it.
const JOKE =
  "Our daily standup is five people spending 15 minutes saying 'same as yesterday' in different fonts.";

// Fail loudly rather than ever writing an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}
if (!/\S/.test(JOKE) || JOKE.includes("\n")) {
  throw new Error("joke must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, JOKE, "utf8");
