import type { APIRoute } from "astro";
import { getLocalePath, localeConfig, locales } from "../i18n";
import { SITE_URL } from "../config/site";

// Both locales are the same page, so every <url> lists every language alternate.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? SITE_URL;
  const alternates = [
    ...locales.map(
      (locale) =>
        `    <xhtml:link rel="alternate" hreflang="${localeConfig[locale].htmlLang}" href="${new URL(getLocalePath(locale), base).href}"/>`,
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${new URL(getLocalePath("ar"), base).href}"/>`,
  ].join("\n");

  const urls = locales
    .map((locale) => `  <url>\n    <loc>${new URL(getLocalePath(locale), base).href}</loc>\n${alternates}\n  </url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
