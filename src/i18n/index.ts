import { defaultLocale, getAlternateLocale, getLocalePath, localeConfig, locales } from "./config";
import ar from "./translations/ar";
import en from "./translations/en";
import type { Locale, Translations } from "./types";

const translations: Record<Locale, Translations> = { ar, en };

export function getTranslations(locale: Locale = defaultLocale): Translations {
  return translations[locale] ?? translations[defaultLocale];
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export {
  ar,
  defaultLocale,
  en,
  getAlternateLocale,
  getLocalePath,
  localeConfig,
  locales,
  type Locale,
  type Translations,
};
