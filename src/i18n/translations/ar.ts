import type { Translations } from "../types";

const ar: Translations = {
  meta: {
    title: "روافد (Rawafid) — نظام تشغيل لوجستيات التجارة الإلكترونية",
    description:
      "روافد (Rawafid) تساعد أصحاب المتاجر الإلكترونية على إدارة الشحنات والمرتجعات وتكامل شركات الشحن والتتبع اللحظي من منصة واحدة.",
    tagline: "نظام تشغيل لوجستيات التجارة الإلكترونية",
  },
  nav: {
    skipLink: "تخطي إلى المحتوى الرئيسي",
    ariaLabel: "التنقل الرئيسي",
    logoAriaLabel: "Rawafid روافد — الصفحة الرئيسية",
    logoAlt: "Rawafid روافد",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    mobileMenuLabel: "قائمة التنقل",
    links: {
      features: "الميزات",
      integrations: "التكاملات",
      pricing: "الأسعار",
      faq: "الأسئلة الشائعة",
      contact: "اتصل بنا",
    },
    cta: "ابدأ مجاناً",
  },
  theme: {
    switchToLight: "التبديل إلى الوضع الفاتح",
    switchToDark: "التبديل إلى الوضع الداكن",
  },
  lang: {
    switchToEn: "التبديل إلى الإنجليزية",
    switchToAr: "التبديل إلى العربية",
    shortEn: "EN",
    shortAr: "عربي",
  },
  hero: {
    ariaLabel: "القسم الرئيسي",
    badge: "🚀 منصة الشحن #1 للتجارة الإلكترونية في مصر",
    headlinePrefix: "أدِر كل شحناتك من",
    rotatingWords: ["مكان واحد", "داشبورد واحدة", "منصة واحدة", "نظام موحد"],
    subheadline:
      "روافد بتوحّد شركات الشحن، المتاجر، والشحنات في منصة واحدة. وداعاً للفوضى، مرحباً بالكفاءة.",
    ctaPrimary: "ابدأ تجربتك المجانية",
    ctaPrimaryHref: "#cta",
    ctaSecondary: "شاهد العرض التوضيحي",
    ctaSecondaryHref: "#demo",
    trustBadges: [
      "14 يوم تجربة مجانية",
      "بدون بطاقة ائتمان",
      "إلغاء في أي وقت",
    ],
    dashboardAlt: "معاينة لوحة تحكم روافد لإدارة الشحنات والمرتجعات",
    floatingIcons: [
      { emoji: "📦", label: "إدارة الشحنات", position: "top-start", delay: 0.1 },
      { emoji: "🚚", label: "شركات الشحن", position: "top-end", delay: 0.25 },
      { emoji: "✅", label: "تتبع لحظي", position: "bottom-start", delay: 0.4 },
      { emoji: "🔁", label: "إدارة المرتجعات", position: "bottom-end", delay: 0.55 },
    ],
  },
  marketStats: {
    ariaLabel: "إحصائيات السوق المصري",
    eyebrow: "أرقام من السوق المصري",
    stats: [
      {
        id: "merchant-pain",
        icon: "merchants",
        value: 85,
        suffix: "%",
        labelPrimary: "من التجار",
        labelSecondary: "بيعانوا من تشتت إدارة الشحنات",
      },
      {
        id: "carrier-fragmentation",
        icon: "carriers",
        value: 6,
        suffix: "+",
        labelPrimary: "شركات شحن",
        labelSecondary: "بيتعاملوا معاها التاجر في المتوسط",
      },
      {
        id: "manual-admin-time",
        icon: "time",
        value: 3,
        suffix: "+",
        unit: "ساعات",
        labelPrimary: "يومياً",
        labelSecondary: "وقت ضايع في الإدارة اليدوية",
      },
      {
        id: "market-volume",
        icon: "market",
        value: 15,
        suffix: "M+",
        labelPrimary: "أوردر شهرياً",
        labelSecondary: "e-commerce في مصر",
      },
    ],
  },
  problemSection: {
    ariaLabel: "المشاكل اللي بيواجهها التجار",
    eyebrow: "التحديات",
    headline: "مشاكل بتواجه كل تاجر إلكتروني",
    subheadline: "روافد بتحل المشاكل دي كلها من مكان واحد",
    problems: [
      {
        id: "multiple-dashboards",
        title: "داشبوردات متعددة",
        description: "كل شركة شحن ليها نظام مختلف، وبتضيع وقتك بين الداشبوردات",
        image: "dashboards",
      },
      {
        id: "no-unified-tracking",
        title: "مفيش تتبع موحد",
        description: "الشحنات متفرقة ومش قادر تتابعها كلها من مكان واحد",
        image: "tracking",
      },
      {
        id: "returns-nightmare",
        title: "إدارة المرتجعات صعبة",
        description: "المرتجعات بتاخد وقت كتير ومفيش نظام واضح لإدارتها",
        image: "returns",
      },
      {
        id: "manual-entry",
        title: "إدخال يدوي للأوردرات",
        description: "بتدخل كل أوردر يدوياً وده بياخد وقت ومجهود كبير",
        image: "manual",
      },
      {
        id: "price-comparison",
        title: "مقارنة الأسعار صعبة",
        description: "صعب تقارن أسعار شركات الشحن وتختار الأنسب لكل شحنة",
        image: "pricing",
      },
      {
        id: "hidden-costs",
        title: "تكاليف مخفية",
        description: "مصاريف مش واضحة بتأثر على الربح وبتكتشفها متأخر",
        image: "hidden-costs",
      },
    ],
  },
  solutionSection: {
    ariaLabel: "كيف تحل روافد تحديات اللوجستيات",
    eyebrow: "الحل",
    headline: "منصة واحدة. كل مشكلة اتحلت.",
    subheadline:
      "روافد بتستبدل فوضى التنقل بين الأنظمة بمنصة واحدة موحدة مصممة للتجارة الإلكترونية المصرية.",
    beforeLabel: "قبل روافد",
    afterLabel: "مع روافد",
    pairs: [
      {
        id: "dashboards",
        before: "6+ داشبوردات لكل شركة شحن",
        after: "لوحة تحكم واحدة موحدة",
      },
      {
        id: "entry",
        before: "إدخال الأوردرات يدوياً كل مرة",
        after: "مزامنة تلقائية من متجرك",
      },
      {
        id: "tracking",
        before: "مفيش تتبع موحد للشحنات",
        after: "تتبع لحظي لكل شحناتك في مكان واحد",
      },
      {
        id: "returns",
        before: "مرتجعات بدون نظام واضح",
        after: "نظام متكامل لإدارة المرتجعات",
      },
      {
        id: "pricing",
        before: "مقارنة أسعار الشحن صعبة",
        after: "مقارنة فورية بين كل شركات الشحن",
      },
      {
        id: "manual",
        before: "ساعات من الشغل اليدوي المتكرر",
        after: "أتمتة كاملة للعمليات",
      },
    ],
  },
};

export default ar;
