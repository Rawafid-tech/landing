export type Locale = "ar" | "en";

export interface NavLinkTranslation {
  features: string;
  integrations: string;
  pricing: string;
  faq: string;
  contact: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    tagline: string;
  };
  nav: {
    skipLink: string;
    ariaLabel: string;
    logoAriaLabel: string;
    logoAlt: string;
    openMenu: string;
    closeMenu: string;
    mobileMenuLabel: string;
    links: NavLinkTranslation;
    cta: string;
  };
  theme: {
    switchToLight: string;
    switchToDark: string;
  };
  lang: {
    switchToEn: string;
    switchToAr: string;
    shortEn: string;
    shortAr: string;
  };
  hero: {
    ariaLabel: string;
    badge: string;
    headlinePrefix: string;
    rotatingWords: readonly string[];
    subheadline: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    trustBadges: readonly string[];
    dashboardAlt: string;
    floatingIcons: readonly {
      emoji: string;
      label: string;
      position: "top-start" | "top-end" | "bottom-start" | "bottom-end";
      delay: number;
    }[];
  };
  marketStats: {
    ariaLabel: string;
    eyebrow: string;
    stats: readonly {
      id: string;
      icon: "merchants" | "carriers" | "time" | "market";
      value: number;
      prefix?: string;
      suffix?: string;
      unit?: string;
      labelPrimary: string;
      labelSecondary: string;
    }[];
  };
}
