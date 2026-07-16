# RuneScape Adventure Guide

A fun-first Old School RuneScape Ironman guide built with Astro.

## Local development

Open PowerShell in the project folder and run:

```powershell
npm install
npm run dev
```

Keep that terminal open while previewing the site at `http://localhost:4321/runescape-adventure-guide/`.

Use a second PowerShell window for Git commands.

## Build check

```powershell
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Push the repository to GitHub.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main`. The included workflow will build and deploy the site.

## Formspree feedback

The feedback page submits to Formspree form ID `mpqvqjrr` using a lightweight native JavaScript request. No database or server is required.

## Companion access

The companion link is hidden in the footer and protected by a lightweight client-side PIN intended only to prevent accidental spoilers. The current prototype PIN is `2007`.

To change it, update `companionPin` in:

- `src/layouts/GuideLayout.astro`
- `src/pages/companion/chapter-1.astro`

## Current prototype — v0.3

- Landing page
- Chapter 1 player guide
- Layered collapsible hints
- Local progress saving
- Two-part gameplay and guide feedback form
- PIN-gated Chapter 1 companion notes
- GitHub Pages deployment workflow


## GitHub Pages routing

The project uses trailing-slash routes so nested pages work reliably on GitHub Pages.
