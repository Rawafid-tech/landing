export type Locale = "ar" | "en";

export interface NavLinkTranslation {
  features: string;
  howItWorks: string;
  integrations: string;
  pricing: string;
  faq: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
    tagline: string;
    ogImageAlt: string;
  };
  nav: {
    skipLink: string;
    ariaLabel: string;
    mobileAriaLabel: string;
    logoAriaLabel: string;
    openMenu: string;
    closeMenu: string;
    mobileMenuLabel: string;
    links: NavLinkTranslation;
    login: string;
    cta: string;
  };
  theme: {
    toggleLabel: string;
  };
  lang: {
    switchToEn: string;
    switchToAr: string;
    shortEn: string;
    shortAr: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustListLabel: string;
    trustBadges: readonly string[];
    worksWithLabel: string;
    dashboardAlt: string;
    floatingIcons: readonly {
      emoji: string;
      position: "top-start" | "top-end" | "bottom-start" | "bottom-end";
    }[];
  };
  marketStats: {
    eyebrow: string;
    /** Optional citation shown under the stats; hidden when empty. */
    source: string;
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
    eyebrow: string;
    headline: string;
    subheadline: string;
    solutionLabel: string;
    problems: readonly {
      id: string;
      title: string;
      description: string;
      solution: string;
      image: "dashboards" | "tracking" | "returns" | "manual" | "pricing" | "hidden-costs";
    }[];
  };
  featuresSection: {
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
  dashboardPreviewSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    tabsLabel: string;
    tabs: readonly {
      id: "overview" | "shipments" | "returns";
      label: string;
    }[];
    hotspots: readonly {
      id: string;
      view: "overview" | "shipments" | "returns";
      title: string;
      description: string;
      navigatesTo?: "overview" | "shipments" | "returns";
    }[];
    hotspotLabel: string;
    openView: string;
    closeHotspot: string;
    cta: {
      primary: string;
      secondary: string;
    };
  };
  howItWorksSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    steps: readonly {
      id: string;
      icon: "connect" | "create" | "track";
      title: string;
      description: string;
    }[];
    cta: string;
  };
  integrationsSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    stores: readonly {
      id: string;
      icon: "shopify" | "easyorders" | "api";
      name: string;
      description: string;
    }[];
    couriers: readonly {
      id: string;
      icon: "bosta" | "jt" | "aramex";
      name: string;
      description: string;
    }[];
    hubLabel: string;
    hubTagline: string;
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
  pricingSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    billing: {
      toggleLabel: string;
      monthly: string;
      annual: string;
      annualSave: string;
    };
    plans: readonly {
      id: "starter" | "growth" | "enterprise";
      name: string;
      tagline: string;
      priceType: "free" | "numeric" | "custom";
      monthlyPrice?: string;
      annualPrice?: string;
      priceSuffix?: string;
      annualNote?: string;
      freeLabel?: string;
      freeSub?: string;
      customLabel?: string;
      customSub?: string;
      popular?: boolean;
      popularBadge?: string;
      features: readonly string[];
      cta: string;
      ctaTarget: "signup" | "contact";
      ctaVariant: "primary" | "secondary";
    }[];
    featuresHeading: string;
    priceUpdated: string;
    trust: {
      label: string;
      points: readonly {
        id: string;
        icon: "local" | "pricing" | "ease";
        title: string;
        description: string;
      }[];
    };
  };
  faqSection: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    items: readonly {
      id: string;
      question: string;
      answer: string;
    }[];
  };
  finalCtaSection: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustBadges: readonly string[];
    trustListAriaLabel: string;
  };
  footerSection: {
    tagline: string;
    backToTop: string;
    externalHint: string;
    productTitle: string;
    contact: {
      title: string;
      emailLabel: string;
      phoneLabel: string;
      whatsappLabel: string;
      addressLabel: string;
      address: string;
    };
    social: {
      ariaLabel: string;
      labels: Record<"linkedin" | "facebook" | "x" | "instagram", string>;
    };
    legal: {
      navAriaLabel: string;
      copyright: string;
      privacy: string;
      terms: string;
    };
  };
  notFound: {
    title: string;
    description: string;
    cta: string;
  };
}
