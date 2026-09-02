# XIG Digital

Premium website for **XIG Digital**, a digital marketing training institute in Kolkata.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Centralised content in `src/data/`

## Content you can edit

| File | Purpose |
| --- | --- |
| `src/data/site.ts` | Institute name, address, phone, email, WhatsApp, social links, maps |
| `src/data/courses.ts` | Courses, modules, curriculum |
| `src/data/stats.ts` | Homepage statistics |
| `src/data/testimonials.ts` | Student reviews |
| `src/data/faqs.ts` | FAQs |
| `src/data/blog.ts` | Blog posts |
| `src/data/tools.ts` | Tools & platforms |
| `src/data/navigation.ts` | Navbar and footer links |

Replace placeholder contact numbers, map embed, testimonials and statistics with verified details before launch. Placement is not guaranteed in copy.

## Scripts

```bash
npm install
npm run dev
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

The site is a static export (`next build` writes to `out/`).

**Vercel (recommended):** import [the GitHub repo](https://github.com/pratiharsayan/Ravel) at [vercel.com/new](https://vercel.com/new).

**Netlify:** import the same repo, or run `npx netlify deploy --dir=out --prod` after `npm run build`.

