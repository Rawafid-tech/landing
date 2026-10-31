import type { Translations } from "../types";

const en: Translations = {
  meta: {
    title: "Rawafid — Shipping Management for E-commerce Stores in Egypt",
    description:
      "Connect your Shopify or Easy Orders store with Bosta, J&T Express, and Aramex. Manage shipments, returns, COD, and tracking from one dashboard. Start free.",
    tagline: "The Operating System for E-commerce Logistics",
    ogImageAlt: "Rawafid — manage e-commerce shipments, returns, and couriers from one dashboard",
  },
  nav: {
    skipLink: "Skip to main content",
    ariaLabel: "Main navigation",
    mobileAriaLabel: "Mobile navigation",
    logoAriaLabel: "Rawafid روافد — Home",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    mobileMenuLabel: "Navigation menu",
    links: {
      features: "Features",
      howItWorks: "How it works",
      integrations: "Integrations",
      pricing: "Pricing",
      faq: "FAQ",
    },
    login: "Log in",
    cta: "Start for free",
  },
  theme: {
    toggleLabel: "Dark mode",
  },
  lang: {
    switchToEn: "Switch to English",
    switchToAr: "Switch to Arabic",
    shortEn: "EN",
    shortAr: "عربي",
  },
  hero: {
    badge: "Built for e-commerce in Egypt",
    headline: "Manage every e-commerce shipment",
    headlineAccent: "from one place",
    subheadline:
      "Connect your store, ship with Bosta, J&T Express, or Aramex, and track every order, return, and COD payment from one dashboard built for Egyptian merchants.",
    ctaPrimary: "Start for free",
    ctaSecondary: "See it in action",
    trustListLabel: "Why it's easy to start",
    trustBadges: [
      "Free plan, forever",
      "No credit card required",
      "Upgrade when you're ready",
    ],
    worksWithLabel: "Works with",
    dashboardAlt: "Rawafid dashboard preview for shipment and returns management",
    floatingIcons: [
      { emoji: "📦", position: "top-start" },
      { emoji: "🚚", position: "top-end" },
      { emoji: "✅", position: "bottom-start" },
      { emoji: "🔁", position: "bottom-end" },
    ],
  },
  marketStats: {
    eyebrow: "Egyptian market insights",
    source: "",
    stats: [
      {
        id: "merchant-pain",
        icon: "merchants",
        value: 85,
        suffix: "%",
        labelPrimary: "of merchants",
        labelSecondary: "struggle with fragmented shipment management",
      },
      {
        id: "carrier-fragmentation",
        icon: "carriers",
        value: 6,
        suffix: "+",
        labelPrimary: "shipping carriers",
        labelSecondary: "the average merchant juggles",
      },
      {
        id: "manual-admin-time",
        icon: "time",
        value: 3,
        suffix: "+",
        unit: "hours",
        labelPrimary: "every day",
        labelSecondary: "lost to manual admin work",
      },
      {
        id: "market-volume",
        icon: "market",
        value: 15,
        suffix: "M+",
        labelPrimary: "monthly orders",
        labelSecondary: "e-commerce volume in Egypt",
      },
    ],
  },
  problemSection: {
    eyebrow: "Challenges",
    headline: "Problems every e-commerce merchant faces",
    subheadline: "…and how Rawafid solves each one",
    solutionLabel: "With Rawafid",
    problems: [
      {
        id: "multiple-dashboards",
        title: "Multiple Dashboards",
        description: "Each shipping company has a different system, wasting your time switching between dashboards",
        solution: "One control panel for all your couriers",
        image: "dashboards",
      },
      {
        id: "no-unified-tracking",
        title: "No Unified Tracking",
        description: "Shipments are scattered and you can't track them all from one place",
        solution: "Live tracking for every shipment in one place",
        image: "tracking",
      },
      {
        id: "returns-nightmare",
        title: "Difficult Returns Management",
        description: "Returns take too much time with no clear system to manage them",
        solution: "A structured returns workflow, from request to closure",
        image: "returns",
      },
      {
        id: "manual-entry",
        title: "Manual Order Entry",
        description: "Entering every order manually takes significant time and effort",
        solution: "Orders sync automatically from your store",
        image: "manual",
      },
      {
        id: "price-comparison",
        title: "Hard Price Comparison",
        description: "Difficult to compare carrier prices and choose the best option for each shipment",
        solution: "Instant side-by-side carrier rate comparison",
        image: "pricing",
      },
      {
        id: "hidden-costs",
        title: "Hidden Costs",
        description: "Unclear fees affect your profit margins and you discover them too late",
        solution: "See every carrier's rate before you ship",
        image: "hidden-costs",
      },
    ],
  },
  featuresSection: {
    eyebrow: "Features",
    headline: "Everything you need to run your logistics",
    subheadline:
      "Six powerful tools in one place — so you can focus on growing your business, not managing spreadsheets.",
    features: [
      {
        id: "shipments",
        icon: "shipments",
        title: "Shipment Management",
        description:
          "Create, track, and manage every shipment from a single control panel.",
        benefits: [
          "All shipments in one dashboard",
          "Auto-sync from your store",
          "Print shipping labels instantly",
          "Real-time status tracking",
        ],
      },
      {
        id: "returns",
        icon: "returns",
        title: "Returns Management",
        description:
          "A structured workflow for every return request — no more chaos.",
        benefits: [
          "Create return requests easily",
          "Set reason and schedule pickup",
          "Track the full return lifecycle",
          "Close returns on completion",
        ],
      },
      {
        id: "integrations",
        icon: "integrations",
        title: "Store Integrations",
        description:
          "Connect your store and import orders automatically in minutes.",
        benefits: [
          "Shopify & Easy Orders support",
          "Custom API for bespoke stores (Enterprise)",
          "Automatic order synchronization",
          "Auto-create shipments on new orders",
        ],
      },
      {
        id: "couriers",
        icon: "couriers",
        title: "Multiple Couriers",
        description:
          "Ship with any connected carrier from one place — compare, choose, and go.",
        benefits: [
          "Bosta, J&T Express & Aramex",
          "Unified API across all carriers",
          "Consolidated tracking dashboard",
          "Compare carriers before you ship",
        ],
      },
      {
        id: "pricing",
        icon: "pricing",
        title: "Pricing Calculator",
        description:
          "Compare carrier rates instantly and always pick the best deal.",
        benefits: [
          "Enter weight and destination",
          "Side-by-side price comparison",
          "Estimated delivery per carrier",
          "Cheapest & fastest recommendation",
        ],
      },
      {
        id: "analytics",
        icon: "analytics",
        title: "Analytics Dashboard",
        description:
          "See your logistics performance at a glance with actionable insights.",
        benefits: [
          "Total shipments & success rate",
          "Failed shipments report",
          "COD collected tracking",
          "Top performing couriers",
        ],
      },
    ],
  },
  dashboardPreviewSection: {
    eyebrow: "Interactive preview",
    headline: "See Rawafid in action",
    subheadline: "Switch tabs and click the glowing dots to explore the dashboard.",
    tabsLabel: "Dashboard views",
    tabs: [
      { id: "overview", label: "Overview" },
      { id: "shipments", label: "Shipments" },
      { id: "returns", label: "Returns" },
    ],
    hotspots: [
      {
        id: "stat-total",
        view: "overview",
        title: "Total Shipments",
        description: "See all your shipments at a glance — with a month-over-month change indicator.",
      },
      {
        id: "stat-delivered",
        view: "overview",
        title: "Delivery Success Rate",
        description: "Track courier performance and see who delivers best for your customers.",
      },
      {
        id: "stat-cod",
        view: "overview",
        title: "COD Collected",
        description: "Always know how much cash has been collected — no spreadsheets needed.",
      },
      {
        id: "sidebar-shipments",
        view: "overview",
        title: "Shipments",
        description: "View all shipments with status filters and full shipment details.",
        navigatesTo: "shipments",
      },
      {
        id: "sidebar-returns",
        view: "overview",
        title: "Returns",
        description: "A complete returns workflow — track every stage from request to collection and refund.",
        navigatesTo: "returns",
      },
      {
        id: "create-shipment",
        view: "shipments",
        title: "Create New Shipment",
        description: "Create a shipment in seconds — pick a courier, enter the address, and print the label instantly.",
      },
      {
        id: "shipment-row",
        view: "shipments",
        title: "Shipment Details",
        description: "Open any shipment to see full tracking history, delivery status, and customer data.",
      },
      {
        id: "return-row",
        view: "returns",
        title: "Return Request",
        description: "Every return has a clear workflow — from request through collection to refund.",
      },
      {
        id: "return-status",
        view: "returns",
        title: "Return Status",
        description: "Track every return in real time — pending, collected, or refunded.",
      },
    ],
    hotspotLabel: "Show details: {title}",
    openView: "Open {view}",
    closeHotspot: "Close",
    cta: {
      primary: "Start for free",
      secondary: "Talk to us",
    },
  },
  howItWorksSection: {
    eyebrow: "How it works",
    headline: "Up and running in 3 steps",
    subheadline: "From store connection to delivered shipment — all in one place.",
    steps: [
      {
        id: "connect",
        icon: "connect",
        title: "Connect your store",
        description:
          "Link Shopify or Easy Orders in under a minute and let Rawafid pull your orders automatically.",
      },
      {
        id: "create",
        icon: "create",
        title: "Create the shipment",
        description:
          "Pick the best carrier, compare rates, and create the shipment in a single click.",
      },
      {
        id: "track",
        icon: "track",
        title: "Track & deliver",
        description:
          "Monitor every shipment in real time from one dashboard until it reaches your customer.",
      },
    ],
    cta: "Start for free",
  },
  integrationsSection: {
    eyebrow: "Integrations",
    headline: "Connect all your tools",
    subheadline:
      "Ready-made integrations with e-commerce platforms and couriers — with more added regularly",
    stores: [
      {
        id: "shopify",
        icon: "shopify",
        name: "Shopify",
        description: "Automatic order sync",
      },
      {
        id: "easy-orders",
        icon: "easyorders",
        name: "Easy Orders",
        description: "Import & real-time status updates",
      },
      {
        id: "api",
        icon: "api",
        name: "Custom API",
        description: "Connect any custom store (Enterprise)",
      },
    ],
    couriers: [
      {
        id: "bosta",
        icon: "bosta",
        name: "Bosta",
        description: "Create shipments & track deliveries",
      },
      {
        id: "jt-express",
        icon: "jt",
        name: "J&T Express",
        description: "Shipment creation & status updates",
      },
      {
        id: "aramex",
        icon: "aramex",
        name: "Aramex",
        description: "Shipment creation & live tracking",
      },
    ],
    hubLabel: "Rawafid",
    hubTagline: "Every order and shipment in one place",
    comingSoon: [
      { id: "woocommerce", name: "WooCommerce" },
      { id: "magento", name: "Magento" },
      { id: "salla", name: "Salla" },
      { id: "zid", name: "Zid" },
    ],
    labels: {
      stores: "Stores",
      couriers: "Couriers",
      available: "Available",
      comingSoon: "Coming soon",
    },
  },
  pricingSection: {
    eyebrow: "Pricing",
    headline: "Plans for every stage",
    subheadline: "Start on the free plan and upgrade as you grow — no long-term contracts",
    billing: {
      toggleLabel: "Billing cycle",
      monthly: "Monthly",
      annual: "Annual",
      annualSave: "Save 20%",
    },
    plans: [
      {
        id: "starter",
        name: "Starter",
        tagline: "Try Rawafid with limited usage — free forever",
        priceType: "free",
        freeLabel: "Free",
        freeSub: "forever",
        features: [
          "Up to 50 shipments/month",
          "1 courier integration",
          "1 store integration",
          "Basic dashboard",
          "Shipment tracking",
          "Email support",
        ],
        cta: "Start for free",
        ctaTarget: "signup",
        ctaVariant: "secondary",
      },
      {
        id: "growth",
        name: "Growth",
        tagline: "Growing e-commerce brands",
        priceType: "numeric",
        monthlyPrice: "299",
        annualPrice: "239",
        priceSuffix: "EGP/mo",
        annualNote: "Billed 2,868 EGP yearly",
        popular: true,
        popularBadge: "Most popular",
        features: [
          "Up to 500 shipments/month",
          "Up to 3 courier integrations",
          "Up to 3 store integrations",
          "Advanced dashboard",
          "Analytics & reports",
          "Returns management",
          "Priority support",
          "Webhooks",
        ],
        cta: "Get started",
        ctaTarget: "signup",
        ctaVariant: "primary",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        tagline: "Large stores & enterprises",
        priceType: "custom",
        customLabel: "Custom",
        customSub: "tailored to you",
        features: [
          "Unlimited shipments",
          "All supported couriers",
          "Unlimited stores",
          "Full API access",
          "Dedicated account manager",
          "Custom integrations",
          "SLA guarantee",
          "24/7 support",
        ],
        cta: "Contact us",
        ctaTarget: "contact",
        ctaVariant: "secondary",
      },
    ],
    featuresHeading: "What's included",
    priceUpdated: "Showing {period} prices",
    trust: {
      label: "Why merchants choose Rawafid",
      points: [
        {
          id: "local-market",
          icon: "local",
          title: "Built for Egypt",
          description: "Made for Egyptian merchants and local couriers — from COD to returns.",
        },
        {
          id: "pricing",
          icon: "pricing",
          title: "No hidden fees",
          description: "Clear, published pricing — no surprises on your invoice.",
        },
        {
          id: "ease",
          icon: "ease",
          title: "Easy to use",
          description: "A simple, focused interface — productive from day one.",
        },
      ],
    },
  },
  faqSection: {
    eyebrow: "FAQ",
    headline: "Frequently asked questions",
    subheadline: "Quick answers to the questions merchants ask us most",
    items: [
      {
        id: "free-plan",
        question: "Can I try Rawafid for free?",
        answer:
          "Yes. Instead of a time-limited trial, Rawafid has a permanent free plan (Starter) with a limited number of monthly shipments and a limited number of courier and store integrations. Explore the platform within those limits and upgrade whenever you need more.",
      },
      {
        id: "supported-couriers",
        question: "Which shipping carriers are supported?",
        answer:
          "We currently support Bosta, J&T Express, and Aramex, and we add new carriers based on merchant demand — contact us if you need a specific partner.",
      },
      {
        id: "shopify-connect",
        question: "How do I connect my Shopify store?",
        answer:
          'From Settings, choose "Add store" and follow the connection steps. It takes under a minute — orders sync automatically once connected.',
      },
      {
        id: "returns-system",
        question: "How does the returns system work?",
        answer:
          "Create a return request, select a reason, and Rawafid coordinates pickup with the courier. Track every stage from one dashboard until the return is closed.",
      },
      {
        id: "api-access",
        question: "Is there an API for my systems?",
        answer:
          "Yes — Enterprise includes full API access for custom stores, ERP tools, or internal systems. Contact us for integration details.",
      },
      {
        id: "pricing-plans",
        question: "What pricing plans are available?",
        answer:
          "Three plans: Starter (free forever, with limited shipments and integrations), Growth (299 EGP/month, or 239 EGP/month billed annually), and Enterprise (custom). See the Pricing section for full details.",
      },
      {
        id: "cancel-anytime",
        question: "Can I cancel anytime?",
        answer:
          "Yes — no long-term contracts. Cancel or change your plan anytime from account settings with no cancellation fees.",
      },
    ],
  },
  finalCtaSection: {
    headline: "Ready to get started?",
    subheadline:
      "Stop wasting time on manual work. Create your free account and organize every shipment in one place.",
    ctaPrimary: "Start for free",
    ctaSecondary: "Talk to us",
    trustBadges: [
      "Free plan, forever",
      "No credit card required",
      "Upgrade when you're ready",
    ],
    trustListAriaLabel: "Why it's easy to start",
  },
  footerSection: {
    tagline: "Logistics operating system for e-commerce",
    backToTop: "Back to top",
    externalHint: "(opens in a new tab)",
    productTitle: "Product",
    contact: {
      title: "Contact us",
      emailLabel: "Email",
      phoneLabel: "Phone",
      whatsappLabel: "WhatsApp",
      addressLabel: "Address",
      address: "Cairo, Egypt",
    },
    social: {
      ariaLabel: "Rawafid on social media",
      labels: {
        linkedin: "LinkedIn",
        facebook: "Facebook",
        x: "X (Twitter)",
        instagram: "Instagram",
      },
    },
    legal: {
      navAriaLabel: "Legal links",
      copyright: "© {year} Rawafid. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
  },
  notFound: {
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has moved.",
    cta: "Back to home",
  },
};

export default en;
