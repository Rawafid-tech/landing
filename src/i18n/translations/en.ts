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
          "Shopify & EzOrders support",
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
};

export default en;
