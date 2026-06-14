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
};

export default en;
