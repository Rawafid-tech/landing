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
};

export default en;
