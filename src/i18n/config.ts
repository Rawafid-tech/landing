import type { Locale } from "./types";

export const defaultLocale: Locale = "ar";
export const locales: Locale[] = ["ar", "en"];

export const localeConfig: Record<
  Locale,
  { dir: "rtl" | "ltr"; htmlLang: string; path: string }
> = {
  ar: { dir: "rtl", htmlLang: "ar", path: "/" },
  en: { dir: "ltr", htmlLang: "en", path: "/en/" },
};

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ar" ? "en" : "ar";
}

export function getLocalePath(locale: Locale): string {
  return localeConfig[locale].path;
}
