export type Locale = "ar" | "en";

export interface NavLinkTranslation {
  home: string;
  problems: string;
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
  whyRawafidSection: {
    ariaLabel: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    points: readonly {
      id: string;
      icon: "local" | "security" | "support" | "ease" | "pricing" | "updates";
      title: string;
      description: string;
    }[];
    comparison: {
      ariaLabel: string;
      headline: string;
      columns: {
        feature: string;
        rawafid: string;
        traditional: string;
      };
      rows: readonly {
        id: string;
        feature: string;
        rawafid: { kind: "text" | "yes"; value?: string };
        traditional: { kind: "text" | "no"; value?: string };
      }[];
      labels: {
        yes: string;
        no: string;
      };
    };
  };
  pricingSection: {
    ariaLabel: string;
    eyebrow: string;
    headline: string;
    subheadline: string;
    billing: {
      toggleLabel: string;
      monthly: string;
      annual: string;
      annualSave: string;
      monthlyHint: string;
      annualHint: string;
    };
    plans: readonly {
      id: "starter" | "growth" | "enterprise";
      name: string;
      tagline: string;
      priceType: "free" | "numeric" | "custom";
      monthlyPrice?: string;
      annualPrice?: string;
      priceSuffix?: string;
      freeLabel?: string;
      freeSub?: string;
      customLabel?: string;
      customSub?: string;
      popular?: boolean;
      popularBadge?: string;
      features: readonly string[];
      cta: string;
      ctaHref: string;
      ctaAriaLabel: string;
      ctaVariant: "primary" | "secondary";
    }[];
    featuresHeading: string;
    priceUpdated: string;
  };
  faqSection: {
    ariaLabel: string;
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
    ariaLabel: string;
    icon: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaPrimaryHref: string;
    ctaPrimaryAriaLabel: string;
    ctaSecondary: string;
    ctaSecondaryHref: string;
    ctaSecondaryAriaLabel: string;
    trustBadges: readonly string[];
    trustListAriaLabel: string;
  };
  footerSection: {
    ariaLabel: string;
    tagline: string;
    backToTop: string;
    backToTopAriaLabel: string;
    columns: readonly {
      id: string;
      title: string;
      links: readonly {
        id: string;
        label: string;
        href: string;
        external?: boolean;
        ariaLabel?: string;
      }[];
    }[];
    contact: {
      title: string;
      email: {
        label: string;
        value: string;
        href: string;
        ariaLabel: string;
      };
      phone: {
        label: string;
        value: string;
        href: string;
        ariaLabel: string;
      };
      address: {
        label: string;
        value: string;
      };
    };
    social: {
      ariaLabel: string;
      links: readonly {
        id: "linkedin" | "facebook" | "x" | "instagram";
        label: string;
        href: string;
      }[];
    };
    legal: {
      navAriaLabel: string;
      copyright: string;
      privacy: {
        label: string;
        href: string;
        ariaLabel: string;
      };
      terms: {
        label: string;
        href: string;
        ariaLabel: string;
      };
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
