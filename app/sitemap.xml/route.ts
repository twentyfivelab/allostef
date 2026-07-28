const SITE_URL = "https://allostef.fr";

const pages = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: "1.0",
  },
  {
    path: "/mentions-legales",
    changeFrequency: "yearly",
    priority: "0.3",
  },
  {
    path: "/politique-de-confidentialite",
    changeFrequency: "yearly",
    priority: "0.3",
  },
] as const;

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");

export async function GET() {
  const lastModified = new Date().toISOString();

  const urls = pages
    .map(
      (page) => `  <url>\n    <loc>${escapeXml(`${SITE_URL}${page.path}`)}</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>${page.changeFrequency}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
