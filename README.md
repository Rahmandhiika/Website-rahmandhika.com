# rahmandhika.com

Portfolio site of **Rahmandhika Putra Purwadi Wicaksono (Dika)**, a Design Engineer working across UI/UX and full-stack development.

Live at **[rahmandhika.com](https://rahmandhika.com)**.

## What's inside

- Homepage with selected work, services, and experience
- A page for each project at `/work/<project>`
- Downloadable CV and portfolio PDF

## Stack

Next.js (App Router) · React · TypeScript · Tailwind CSS · Vitest + Testing Library · Playwright · hosted on Vercel

All copy lives in typed files under `content/`, and every page renders from them.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # unit tests
npm run build && npm run e2e   # mobile layout and accessibility checks
```

## Images

Project images are pre-compressed to WebP with `scripts/prepare-assets.mjs`:

```bash
node scripts/prepare-assets.mjs <source-image> /work/<project>/<name>.webp [maxWidth]
```

---

© 2026 Rahmandhika Putra Purwadi Wicaksono. Code and content are not licensed for reuse.
