This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## SEO Runbook (Production)

### 1) Deploy and Submit Sitemap

1. Deploy the latest main branch.
2. Confirm these URLs are live and return 200:
	- `https://allostef.fr/sitemap.xml`
	- `https://allostef.fr/robots.txt`
3. In Google Search Console:
	- Add/verify property `https://allostef.fr`
	- Submit `https://allostef.fr/sitemap.xml`
	- Request indexing for new local pages (priority):
	  - `/chauffagiste-pontoise`, `/chauffagiste-compiegne`
	  - `/electricien-meru`, `/electricien-beauvais`, `/electricien-cergy`, `/electricien-pontoise`, `/electricien-compiegne`

### 2) Local Authority (Off-site)

1. Optimize Google Business Profile (categories, services, service areas, photos).
2. Acquire reviews continuously with city + service context when natural.
3. Create/clean citations on trusted local directories (same NAP format everywhere).
4. Build local backlinks (partners, city/community sites, supplier pages).

### 3) Weekly SEO Monitoring (8 weeks)

1. In Search Console, track for each new URL:
	- indexed status
	- impressions
	- average position
	- CTR
2. If a page is indexed but low-visibility after 3-4 weeks:
	- add 2-3 new internal links from relevant pages
	- expand FAQ by 2 real-world questions
	- strengthen title/description with clearer local intent
3. Keep sitemap and internal links aligned with every new page.
