import type { Translations } from "../types";

const en: Translations = {
  meta: {
    title: "Rawafid (روافد) — The Operating System for E-commerce Logistics",
    description:
      "Rawafid helps e-commerce businesses manage shipments, returns, courier integrations, and real-time tracking from one unified platform.",
    tagline: "The Operating System for E-commerce Logistics",
  },
  nav: {
    skipLink: "Skip to main content",
    ariaLabel: "Main navigation",
    logoAriaLabel: "Rawafid روافد — Home",
    logoAlt: "Rawafid روافد",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    mobileMenuLabel: "Navigation menu",
    links: {
      features: "Features",
      integrations: "Integrations",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
    },
    cta: "Start for free",
  },
  theme: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  lang: {
    switchToEn: "Switch to English",
    switchToAr: "Switch to Arabic",
    shortEn: "EN",
    shortAr: "عربي",
  },
  hero: {
    ariaLabel: "Hero section",
    badge: "🚀 #1 Shipping Platform for E-commerce in Egypt",
    headlinePrefix: "Manage all your shipments from",
    rotatingWords: ["one place", "one dashboard", "one platform", "one system"],
    subheadline:
      "Rawafid unifies couriers, stores, and shipments in one platform. Goodbye chaos, hello efficiency.",
    ctaPrimary: "Start your free trial",
    ctaPrimaryHref: "#cta",
    ctaSecondary: "Watch demo",
    ctaSecondaryHref: "#demo",
    trustBadges: [
      "14-day free trial",
      "No credit card required",
      "Cancel anytime",
    ],
    dashboardAlt: "Rawafid dashboard preview for shipment and returns management",
    floatingIcons: [
      { emoji: "📦", label: "Shipment management", position: "top-start", delay: 0.1 },
      { emoji: "🚚", label: "Courier integrations", position: "top-end", delay: 0.25 },
      { emoji: "✅", label: "Real-time tracking", position: "bottom-start", delay: 0.4 },
      { emoji: "🔁", label: "Returns management", position: "bottom-end", delay: 0.55 },
    ],
  },
  marketStats: {
    ariaLabel: "Egyptian market statistics",
    eyebrow: "Egyptian market insights",
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
    ariaLabel: "Problems merchants face",
    eyebrow: "Challenges",
    headline: "Problems every e-commerce merchant faces",
    subheadline: "Rawafid solves all these problems from one place",
    problems: [
      {
        id: "multiple-dashboards",
        title: "Multiple Dashboards",
        description: "Each shipping company has a different system, wasting your time switching between dashboards",
        image: "dashboards",
      },
      {
        id: "no-unified-tracking",
        title: "No Unified Tracking",
        description: "Shipments are scattered and you can't track them all from one place",
        image: "tracking",
      },
      {
        id: "returns-nightmare",
        title: "Difficult Returns Management",
        description: "Returns take too much time with no clear system to manage them",
        image: "returns",
      },
      {
        id: "manual-entry",
        title: "Manual Order Entry",
        description: "Entering every order manually takes significant time and effort",
        image: "manual",
      },
      {
        id: "price-comparison",
        title: "Hard Price Comparison",
        description: "Difficult to compare carrier prices and choose the best option for each shipment",
        image: "pricing",
      },
      {
        id: "hidden-costs",
        title: "Hidden Costs",
        description: "Unclear fees affect your profit margins and you discover them too late",
        image: "hidden-costs",
      },
    ],
  },
  solutionSection: {
    ariaLabel: "How Rawafid solves your logistics challenges",
    eyebrow: "The Solution",
    headline: "One platform. Every problem solved.",
    subheadline:
      "Rawafid replaces the chaos of juggling multiple tools with a single, unified platform built for Egyptian e-commerce.",
    beforeLabel: "Before Rawafid",
    afterLabel: "With Rawafid",
    pairs: [
      {
        id: "dashboards",
        before: "6+ separate carrier dashboards",
        after: "One unified control panel",
      },
      {
        id: "entry",
        before: "Manual order entry every time",
        after: "Automatic sync from your store",
      },
      {
        id: "tracking",
        before: "No unified shipment tracking",
        after: "Live real-time tracking in one place",
      },
      {
        id: "returns",
        before: "Returns with no clear workflow",
        after: "Structured returns management system",
      },
      {
        id: "pricing",
        before: "Hard carrier price comparison",
        after: "Instant side-by-side price comparison",
      },
      {
        id: "manual",
        before: "Hours of repetitive manual work",
        after: "Fully automated operations",
      },
    ],
  },
  featuresSection: {
    ariaLabel: "Platform features",
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
          "Custom API for bespoke stores",
          "Automatic order synchronization",
          "Auto-create shipments on new orders",
        ],
      },
      {
        id: "couriers",
        icon: "couriers",
        title: "Multiple Couriers",
        description:
          "Ship with any carrier from one place — compare, choose, and go.",
        benefits: [
          "Bosta & multiple local carriers",
          "Unified API across all carriers",
          "Consolidated tracking dashboard",
          "Estimated delivery per carrier",
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
    ariaLabel: "Interactive Rawafid dashboard preview",
    eyebrow: "Interactive preview",
    headline: "See Rawafid in action",
    subheadline:
      "Click the glowing dots to explore features. Drag to navigate and scroll to zoom.",
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
        description:
          "See all your shipments at a glance — with a month-over-month change indicator.",
        countUp: { value: 1247, suffix: "" },
      },
      {
        id: "stat-delivered",
        view: "overview",
        title: "Delivery Success Rate",
        description:
          "Track courier performance and see who delivers best for your customers.",
        countUp: { value: 89, suffix: ".3%" },
      },
      {
        id: "stat-cod",
        view: "overview",
        title: "COD Collected",
        description:
          "Always know how much cash has been collected — no spreadsheets needed.",
        countUp: { value: 34820, suffix: " EGP" },
      },
      {
        id: "sidebar-shipments",
        view: "overview",
        title: "Shipments",
        description:
          "Click to view all shipments with status filters and full shipment details.",
        navigatesTo: "shipments",
      },
      {
        id: "sidebar-returns",
        view: "overview",
        title: "Returns",
        description:
          "A complete returns workflow — track every stage from request to collection and refund.",
        navigatesTo: "returns",
      },
      {
        id: "create-shipment",
        view: "shipments",
        title: "Create New Shipment",
        description:
          "Create a shipment in seconds — pick a courier, enter the address, and print the label instantly.",
      },
      {
        id: "shipment-row",
        view: "shipments",
        title: "Shipment Details",
        description:
          "Click any shipment to see full tracking history, delivery status, and customer data.",
      },
      {
        id: "return-row",
        view: "returns",
        title: "Return Request",
        description:
          "Every return has a clear workflow — from request through collection to refund.",
      },
      {
        id: "return-status",
        view: "returns",
        title: "Return Status",
        description:
          "Track every return in real time — pending, collected, or refunded.",
      },
    ],
    hints: {
      drag: "Drag to explore",
      click: "Click the dots",
    },
    controls: {
      zoomIn: "Zoom in",
      zoomOut: "Zoom out",
      zoomReset: "Reset zoom",
      closeHotspot: "Close",
    },
    cta: {
      primary: "Start your free trial",
      primaryHref: "#cta",
      primaryAriaLabel: "Start your free trial with Rawafid",
      secondary: "Book a demo",
      secondaryHref: "#contact",
      secondaryAriaLabel: "Book a demo with the Rawafid team",
    },
  },
  howItWorksSection: {
    ariaLabel: "How Rawafid works",
    eyebrow: "How it works",
    headline: "Up and running in 3 steps",
    subheadline: "From store connection to delivered shipment — all in one place.",
    steps: [
      {
        id: "connect",
        number: "01",
        icon: "connect",
        title: "Connect your store",
        description:
          "Link Shopify or Easy Orders in under a minute and let Rawafid pull your orders automatically.",
      },
      {
        id: "create",
        number: "02",
        icon: "create",
        title: "Create the shipment",
        description:
          "Pick the best carrier, compare rates, and create the shipment in a single click.",
      },
      {
        id: "track",
        number: "03",
        icon: "track",
        title: "Track & deliver",
        description:
          "Monitor every shipment in real time from one dashboard until it reaches your customer.",
      },
    ],
    cta: "Start for free",
    ctaHref: "#cta",
    ctaAriaLabel: "Start your free trial with Rawafid",
  },
  integrationsSection: {
    ariaLabel: "Rawafid integrations with stores and couriers",
    eyebrow: "Integrations",
    headline: "Connect all your tools",
    subheadline:
      "Ready-made integrations with e-commerce platforms and local couriers — everything unified in one place",
    hubLabel: "Rawafid",
    hubTagline: "Unified hub",
    stores: [
      {
        id: "shopify",
        icon: "shopify",
        name: "Shopify",
        description: "Automatic order sync",
      },
      {
        id: "easy-orders",
        icon: "Easy Orders",
        name: "Easy Orders",
        description: "Import & real-time status updates",
      },
      {
        id: "api",
        icon: "api",
        name: "Custom API",
        description: "Connect any custom store",
      },
    ],
    couriers: [
      {
        id: "bosta",
        icon: "bosta",
        name: "Bosta",
        description: "Primary delivery partner",
      },
      {
        id: "courier-2",
        icon: "local",
        name: "Local Courier",
        description: "Wide Egypt coverage",
      },
      {
        id: "courier-3",
        icon: "local",
        name: "Delivery Partner",
        description: "Fast & reliable shipping",
      },
    ],
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
  whyRawafidSection: {
    ariaLabel: "Why choose Rawafid",
    eyebrow: "Why Rawafid?",
    headline: "Why choose Rawafid?",
    subheadline: "A shipping platform built for Egyptian merchants — real value, not empty promises",
    points: [
      {
        id: "local-market",
        icon: "local",
        title: "Built for Egypt",
        description: "We understand Egyptian merchants and local couriers — from COD to returns.",
      },
      {
        id: "security",
        icon: "security",
        title: "Your data is safe",
        description: "End-to-end encryption with industry-standard security and privacy practices.",
      },
      {
        id: "support",
        icon: "support",
        title: "Fast support",
        description: "A responsive team that answers within hours — not days.",
      },
      {
        id: "ease",
        icon: "ease",
        title: "Easy to use",
        description: "A simple, focused interface — productive from day one.",
      },
      {
        id: "pricing",
        icon: "pricing",
        title: "No hidden fees",
        description: "Clear, published pricing — no surprises on your invoice.",
      },
      {
        id: "updates",
        icon: "updates",
        title: "Continuous updates",
        description: "New features and improvements driven by merchant feedback.",
      },
    ],
    comparison: {
      ariaLabel: "Rawafid vs traditional shipping workflow",
      headline: "Rawafid vs the traditional way",
      columns: {
        feature: "Feature",
        rawafid: "Rawafid",
        traditional: "Traditional",
      },
      rows: [
        {
          id: "dashboards",
          feature: "Dashboards to manage",
          rawafid: { kind: "text", value: "1" },
          traditional: { kind: "text", value: "6+" },
        },
        {
          id: "shipment-time",
          feature: "Time to create a shipment",
          rawafid: { kind: "text", value: "30 seconds" },
          traditional: { kind: "text", value: "5+ minutes" },
        },
        {
          id: "tracking",
          feature: "Unified tracking",
          rawafid: { kind: "yes" },
          traditional: { kind: "no" },
        },
        {
          id: "price-compare",
          feature: "Price comparison",
          rawafid: { kind: "text", value: "Instant" },
          traditional: { kind: "text", value: "Manual" },
        },
        {
          id: "returns",
          feature: "Returns management",
          rawafid: { kind: "text", value: "Organized" },
          traditional: { kind: "text", value: "Chaotic" },
        },
      ],
      labels: {
        yes: "Available",
        no: "Not available",
      },
    },
  },
  pricingSection: {
    ariaLabel: "Rawafid pricing plans",
    eyebrow: "Pricing",
    headline: "Plans for every stage",
    subheadline: "Start free, scale as you grow — no long-term contracts",
    billing: {
      toggleLabel: "Choose billing cycle",
      monthly: "Monthly",
      annual: "Annual",
      annualSave: "Save 20%",
      monthlyHint: "Billed monthly",
      annualHint: "Billed annually — 20% off",
    },
    plans: [
      {
        id: "starter",
        name: "Starter",
        tagline: "Small stores & getting started",
        priceType: "free",
        freeLabel: "Free",
        freeSub: "forever",
        features: [
          "Up to 50 shipments/month",
          "1 courier",
          "1 store",
          "Basic dashboard",
          "Shipment tracking",
          "Email support",
        ],
        cta: "Start for free",
        ctaHref: "#cta",
        ctaAriaLabel: "Start the free Starter plan with Rawafid",
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
        popular: true,
        popularBadge: "Most popular",
        features: [
          "Up to 500 shipments/month",
          "3 couriers",
          "3 stores",
          "Advanced dashboard",
          "Analytics & reports",
          "Returns management",
          "Priority support",
          "Webhooks",
        ],
        cta: "Subscribe now",
        ctaHref: "#cta",
        ctaAriaLabel: "Subscribe to the Growth plan with Rawafid",
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
          "All couriers",
          "Unlimited stores",
          "Full API access",
          "Dedicated account manager",
          "Custom integrations",
          "SLA guarantee",
          "24/7 support",
        ],
        cta: "Contact us",
        ctaHref: "#contact",
        ctaAriaLabel: "Contact the Rawafid team for Enterprise pricing",
        ctaVariant: "secondary",
      },
    ],
    featuresHeading: "What's included",
    priceUpdated: "Prices updated to {period} billing",
  },
  faqSection: {
    ariaLabel: "Rawafid frequently asked questions",
    eyebrow: "FAQ",
    headline: "Frequently asked questions",
    subheadline: "Quick answers to the questions merchants ask us most",
    items: [
      {
        id: "supported-couriers",
        question: "Which shipping carriers are supported?",
        answer:
          "We currently support Bosta and other local couriers. We add new carriers regularly based on merchant demand — contact us if you need a specific partner.",
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
          "Three plans: Starter (free forever), Growth (299 EGP/month), and Enterprise (custom). Growth includes a 14-day free trial. See the Pricing section for full details.",
      },
      {
        id: "cancel-anytime",
        question: "Can I cancel anytime?",
        answer:
          "Yes — no long-term contracts. Cancel or change your plan anytime from account settings with no cancellation fees.",
      },
      {
        id: "free-trial",
        question: "Is there a free trial?",
        answer:
          "Starter is free forever — great for testing and small stores. Growth includes a full 14-day trial with no credit card required.",
      },
    ],
  },
};

export default en;
