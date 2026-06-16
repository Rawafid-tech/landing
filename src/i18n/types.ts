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
  problemSection: {
    ariaLabel: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    problems: readonly {
      id: string;
      title: string;
      description: string;
      image: "dashboards" | "tracking" | "returns" | "manual" | "pricing" | "hidden-costs";
    }[];
  };
  solutionSection: {
    ariaLabel: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    beforeLabel: string;
    afterLabel: string;
    pairs: readonly {
      id: string;
      before: string;
      after: string;
    }[];
  };
  featuresSection: {
    ariaLabel: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    features: readonly {
      id: string;
      icon: "shipments" | "returns" | "integrations" | "couriers" | "pricing" | "analytics";
      title: string;
      description: string;
      benefits: readonly string[];
    }[];
  };
  howItWorksSection: {
    ariaLabel: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    steps: readonly {
      id: string;
      number: string;
      icon: "connect" | "create" | "track";
      title: string;
      description: string;
    }[];
    cta: string;
    ctaHref: string;
    ctaAriaLabel: string;
  };
  integrationsSection: {
    ariaLabel: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    hubLabel: string;
    hubTagline: string;
    stores: readonly {
      id: string;
      icon: "shopify" | "Easy Orders" | "api";
      name: string;
      description: string;
    }[];
    couriers: readonly {
      id: string;
      icon: "bosta" | "local";
      name: string;
      description: string;
    }[];
    comingSoon: readonly {
      id: string;
      name: string;
    }[];
    labels: {
      stores: string;
      couriers: string;
      available: string;
      comingSoon: string;
    };
  };
  dashboardPreviewSection: {
    ariaLabel: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    tabs: readonly {
      id: "overview" | "shipments" | "returns";
      label: string;
    }[];
    hotspots: readonly {
      id: string;
      view: "overview" | "shipments" | "returns";
      title: string;
      description: string;
      countUp?: { value: number; suffix: string };
      navigatesTo?: "overview" | "shipments" | "returns";
    }[];
    hints: {
      drag: string;
      click: string;
    };
    controls: {
      zoomIn: string;
      zoomOut: string;
      zoomReset: string;
      closeHotspot: string;
    };
    cta: {
      primary: string;
      primaryHref: string;
      primaryAriaLabel: string;
      secondary: string;
      secondaryHref: string;
      secondaryAriaLabel: string;
    };
  };
}
