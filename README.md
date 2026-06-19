# SUGARCRASH//

## What it is

A single-page fan site celebrating a personal rotation of pop and hyperpop artists. It pairs a loud, candy-coated, glitchy aesthetic with real, legal music playback via official Spotify players. There's no build step, no framework, and nothing to install — it's one self-contained HTML file.

## Features

- **Glitching chrome wordmark** that shimmers and RGB-splits on hover
- **Two artist groups** — *Hyperpop & adjacent* (Ayesha Erotica, Slayyyter, Charli xcx, Dorian Electra, Addison Rae) and *Pop* (Lady Gaga, Ariana Grande, Tate McRae, Doja Cat, Zara Larsson)
- **PRESS PLAY** section with official **Spotify embeds** for all ten artists — real audio, streamed straight from Spotify
- **Rotation list** with one-tap links out to Spotify, Apple Music, and YouTube, plus an in-page preview
- **Draggable Y2K media-player** widget in the corner (skip / play / minimize)
- **Hyperpop lexicon** (pitched-up vocals, bubblegum bass, the drop, digicore…)
- **Motion everywhere**: scroll-reveal with staggered card pop-ins, gloss sweeps, twinkling stars, a scroll-progress bar, and sparkle bursts on play — all gated behind `prefers-reduced-motion`

## Running it

Just open `sugarcrash.html` in any modern browser, or host it anywhere static (GitHub Pages, Netlify, etc.).

> **Note on the Spotify players:** they need a real browser to load. In a sandboxed preview (like an in-chat artifact viewer) they may appear blank — that's the sandbox blocking third-party embeds, not a bug. Open the file directly or host it and they'll play. Without logging in, Spotify plays 30-second previews; log into Spotify in that browser for full songs.

## Tech

- Plain HTML + CSS + vanilla JavaScript, one file
- Google Fonts (Unbounded, Space Grotesk, Space Mono)
- Official Spotify embed iframes
- No dependencies, no build, no tracking

## Customizing

To add an artist, copy one artist `<article class="card">` block in the relevant group, give the art tile a new `.aN` gradient class, then add a matching Spotify embed in PRESS PLAY (using that artist's Spotify artist ID), a row in the rotation list, and an entry in the mini-player's `tracks` array.

## Copyright

This is a fan project. **No audio or artwork is hosted here** — music is played only through official Spotify players, and all "album art" is generated CSS gradients. All rights to the music belong to the respective artists and labels.

---

*Built with ♥ for hyperpop.*
