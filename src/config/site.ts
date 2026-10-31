/**
 * Single source of truth for URLs and contact details used across the landing page.
 * Leave a value empty ("") to hide whatever depends on it instead of shipping a placeholder.
 */

/** Public URL of this landing site (canonical, hreflang, sitemap, structured data). */
export const SITE_URL = "https://rawafid.app";

/** Rawafid web app. Temporary Vercel host until the custom app domain is ready. */
export const APP_URL = "https://r-dashboard-lyart.vercel.app";
export const SIGNUP_URL = `${APP_URL}/register`;
export const LOGIN_URL = `${APP_URL}/login`;

export const CONTACT = {
  email: "hossamyehia@easyorders.eg",
  /** Display format, e.g. "+20 100 123 4567". */
  phone: "+201206001955",
  /** Any format, e.g. "+20 100 123 4567"; normalized to digits for wa.me links. */
  whatsapp: "+201206001955",
  /** Calendly or similar booking link for demos. */
  demoUrl: "",
} as const;

export const SOCIAL_LINKS: Partial<Record<"linkedin" | "facebook" | "x" | "instagram", string>> = {
  // linkedin: "https://www.linkedin.com/company/…",
};

export const LEGAL_LINKS = {
  privacy: "",
  terms: "",
} as const;

/** WhatsApp number as wa.me expects it: digits only, no "+". */
export const WHATSAPP_DIGITS = CONTACT.whatsapp.replace(/\D/g, "");
export const WHATSAPP_URL = WHATSAPP_DIGITS ? `https://wa.me/${WHATSAPP_DIGITS}` : "";

/** Where "talk to us" CTAs go: demo booking → WhatsApp → email. */
export function getContactHref(): string {
  if (CONTACT.demoUrl) return CONTACT.demoUrl;
  if (WHATSAPP_URL) return WHATSAPP_URL;
  return `mailto:${CONTACT.email}`;
}
