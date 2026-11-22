// Entry for make.fun "The agent builds a game from one prompt"
// (post-x-the-agent-builds-a-game-from-20261122-1709), Node 22, stdlib only.
//
// The entry IS the X post: a short vertical video of an AI agent building a
// tiny browser game ("Star Catcher") from one prompt, posted natively on X
// from a public account. This program's only job is to hand the post's
// address to the grader: it copies POST.json from the repo root to /output,
// where the gate reads it and the house writes its own reading of the post's
// counts (post.counts.json). Nothing this program writes about the post is
// scored — the house reads the post itself from X.
//
// The video itself lives in this repo at clip/makefun-agent-builds-a-game.mp4
// (1080x1920, 35s, H.264+AAC, sha256 df5d5b16b72232ab644c0e98db00c3ea0e57e2e2db9ceb605f2daf046ac98dbb),
// and the game it shows is game.html — a real, playable single-file browser
// game: catch falling stars with a basket, arrow keys or mouse, 60 seconds,
// 3 lives, faster as you score. Open game.html in any browser to play it.
// The video ends with make.fun's press-pack referral end card (9:16,
// used as-is) carrying referral code wxz47nrz, and its play code is
// makefun-lotus-stairs-freckle (code 0/4 for this bounty).
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, "POST.json"), join(OUTPUT_DIR, "POST.json"));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
