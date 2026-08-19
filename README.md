# Sahil Kale — Research Portfolio

## Run locally

Install Node.js 18.17+ and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run build` to verify a production build and `npm run start` to preview it.

## Edit content

All personal content lives in [`content/site-data.ts`](content/site-data.ts). Update the name, tagline, bio, and contact URLs there. Add typed objects to the empty experience, publications, and awards arrays when those pages are built. Replace `public/headshot.png` with the current professional photo (keep that filename or update the image source in `components/Hero.tsx`).

## Add a page

Create one new `app/<route>/page.tsx` file. Import `siteData` for content and reuse the shared components or add a small component under `components/`. Add the route to the `links` array in `components/Nav.tsx`.

## Deploy to Vercel

Push the repository to GitHub, import it at [vercel.com](https://vercel.com), and keep the detected Next.js settings. Vercel will run the build automatically; all current routes are statically prerendered and require no special configuration.
