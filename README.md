# Jorik van Ruiswijk — Portfolio

Personal portfolio site for Jorik van Ruiswijk — CTO, Designer & Developer.

## Stack

- **React 18 + TypeScript + Vite** — modern DX, fast builds
- **Tailwind CSS v3** — utility-first styling
- **Framer Motion** — scroll-triggered animations and entrance effects
- **Lucide React** — clean icon set

## Setup

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Add your photo

Drop your photo as `public/jorik.png`. The hero card is built for a portrait-orientation image (3:4 ratio works best).

## Build

```bash
npm run build
npm run preview  # preview the production build locally
```

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Vercel auto-detects Vite.

### Option B — GitHub integration

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import from GitHub
3. Select the repo — Vercel detects Vite automatically
4. Click **Deploy**

No environment variables needed.

---

Built with vibe coding + Claude
