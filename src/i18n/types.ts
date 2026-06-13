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
}
