# One prompt. One agent. One game.

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/tothimai196xx-lgtm/post-x-the-agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/tothimai196xx-lgtm/post-x-the-agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from **one prompt** — and I filmed it.
Watch the prompt, the agent working, and the finished game running, in 35 seconds.

**The one prompt:** "Build a tiny browser game: catch falling stars with a basket — arrow keys or mouse to move, 60 seconds, score for every star caught, 3 lives, stars fall faster as you score. One HTML file, no libraries."

## Play the game

Open [`game.html`](game.html) in any browser — no build step, no libraries.
Move the basket with ← → or your mouse, catch the falling stars, don't let
3 slip past. `?auto=1` lets the basket play itself (that's the demo mode in
the video). The game was tested in Node: its real script runs, the score
rises as stars are caught, and the timer ends the game.

## The video

[`clip/makefun-agent-builds-a-game.mp4`](clip/makefun-agent-builds-a-game.mp4)
— 1080×1920 vertical, 35 s, H.264 + AAC. Hook → the prompt on screen →
the agent working (real build log) → 14 s of the game running → "IT WORKS.
YOUR TURN." → make.fun's referral end card with code `wxz47nrz`.

Posted publicly on X from [@lucdao2602](https://x.com/lucdao2602) — see
[`POST.json`](POST.json) for the post's address.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json`, where the gate reads it. That is
all the program has to do — the post itself is the entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wxz47nrz&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
