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
  featuresSection: {
    ariaLabel: "ميزات المنصة",
    eyebrow: "الميزات",
    headline: "كل اللي محتاجه لإدارة شحناتك",
    subheadline:
      "ست أدوات قوية في مكان واحد — علشان تركّز على تنمية تجارتك، مش إدارة جداول بيانات.",
    features: [
      {
        id: "shipments",
        icon: "shipments",
        title: "إدارة الشحنات",
        description:
          "أنشئ، تتبع، وأدر كل شحناتك من لوحة تحكم واحدة.",
        benefits: [
          "كل الشحنات في داشبورد واحدة",
          "مزامنة تلقائية من متجرك",
          "طباعة بوليصات الشحن فوراً",
          "تتبع حالة الشحنة لحظياً",
        ],
      },
      {
        id: "returns",
        icon: "returns",
        title: "إدارة المرتجعات",
        description:
          "سير عمل منظم لكل طلبات الاسترجاع — مفيش فوضى تاني.",
        benefits: [
          "إنشاء طلبات استرجاع بسهولة",
          "تحديد السبب وجدولة الاستلام",
          "تتبع دورة حياة المرتجع كاملاً",
          "إغلاق المرتجع بعد الاكتمال",
        ],
      },
      {
        id: "integrations",
        icon: "integrations",
        title: "ربط المتاجر",
        description:
          "اربط متجرك واستورد الأوردرات تلقائياً في دقائق.",
        benefits: [
          "دعم Shopify و EzOrders",
          "Custom API للمتاجر المخصصة",
          "مزامنة تلقائية للأوردرات",
          "إنشاء شحنات تلقائي عند الأوردر",
        ],
      },
      {
        id: "couriers",
        icon: "couriers",
        title: "شركات الشحن المتعددة",
        description:
          "اشحن مع أي شركة من مكان واحد — قارن، اختار، واشحن.",
        benefits: [
          "Bosta وشركات شحن محلية متعددة",
          "API موحد لكل الشركات",
          "داشبورد تتبع موحد",
          "وقت التسليم المتوقع لكل شركة",
        ],
      },
      {
        id: "pricing",
        icon: "pricing",
        title: "حاسبة الأسعار",
        description:
          "قارن أسعار الشحن فوراً واختار الأفضل لك دايماً.",
        benefits: [
          "أدخل الوزن والوجهة",
          "مقارنة فورية بين كل الشركات",
          "وقت التسليم المتوقع لكل شركة",
          "توصية بالأرخص والأسرع",
        ],
      },
      {
        id: "analytics",
        icon: "analytics",
        title: "لوحة تحكم تحليلية",
        description:
          "شوف أداء عملياتك اللوجستية في لمحة مع رؤى قابلة للتنفيذ.",
        benefits: [
          "إجمالي الشحنات ونسبة التوصيل",
          "تقرير الشحنات الفاشلة",
          "متابعة COD المحصّل",
          "أفضل شركات الشحن أداءً",
        ],
      },
    ],
  },
  dashboardPreviewSection: {
    ariaLabel: "معاينة تفاعلية للوحة تحكم روافد",
    eyebrow: "معاينة تفاعلية",
    headline: "شوف روافد وهي شغّالة",
    subheadline:
      "اضغط على النقاط المضيئة لاستكشاف المميزات. اسحب للتنقل وكبّر للتفاصيل.",
    tabs: [
      { id: "overview", label: "نظرة عامة" },
      { id: "shipments", label: "الشحنات" },
      { id: "returns", label: "المرتجعات" },
    ],
    hotspots: [
      {
        id: "stat-total",
        view: "overview",
        title: "إجمالي الشحنات",
        description:
          "شوف كل شحناتك في لمحة — مع مؤشر التغيير مقارنةً بالشهر اللي فات.",
        countUp: { value: 1247, suffix: "" },
      },
      {
        id: "stat-delivered",
        view: "overview",
        title: "نسبة التسليم الناجح",
        description:
          "تابع أداء شركات الشحن وشوف مين الأفضل تسليماً لعملاءك.",
        countUp: { value: 89, suffix: ".3%" },
      },
      {
        id: "stat-cod",
        view: "overview",
        title: "COD محصّل",
        description:
          "ابقى دايماً عارف كام فلوس اتحصلت — بدون جداول بيانات أو حسابات يدوية.",
        countUp: { value: 34820, suffix: " ج.م" },
      },
      {
        id: "sidebar-shipments",
        view: "overview",
        title: "الشحنات",
        description:
          "اضغط لعرض كل الشحنات مع فلاتر الحالة وتفاصيل كل شحنة على حدة.",
        navigatesTo: "shipments",
      },
      {
        id: "sidebar-returns",
        view: "overview",
        title: "المرتجعات",
        description:
          "نظام مرتجعات متكامل — تابع كل مرحلة من الطلب للاستلام والاسترداد.",
        navigatesTo: "returns",
      },
      {
        id: "create-shipment",
        view: "shipments",
        title: "إنشاء شحنة جديدة",
        description:
          "أنشئ شحنة في ثوانٍ — اختار شركة الشحن، أدخل العنوان، واطبع البوليصة فوراً.",
      },
      {
        id: "shipment-row",
        view: "shipments",
        title: "تفاصيل الشحنة",
        description:
          "اضغط على أي شحنة لعرض التتبع الكامل، حالة التسليم، وبيانات العميل.",
      },
      {
        id: "return-row",
        view: "returns",
        title: "طلب الاسترجاع",
        description:
          "كل طلب مرتجع ليه سير عمل واضح — من الطلب لحد الاستلام والاسترداد.",
      },
      {
        id: "return-status",
        view: "returns",
        title: "حالة المرتجع",
        description:
          "تتبع كل مرتجع لحظياً — في الانتظار، تم الاستلام، أو تم الاسترداد.",
      },
    ],
    hints: {
      drag: "اسحب للتنقل",
      click: "اضغط على النقاط",
    },
    controls: {
      zoomIn: "تكبير",
      zoomOut: "تصغير",
      zoomReset: "إعادة الضبط",
      closeHotspot: "إغلاق",
    },
    cta: {
      primary: "ابدأ تجربتك المجانية",
      primaryHref: "#cta",
      primaryAriaLabel: "ابدأ تجربتك المجانية مع روافد",
      secondary: "احجز عرضاً توضيحياً",
      secondaryHref: "#contact",
      secondaryAriaLabel: "احجز عرضاً توضيحياً مع فريق روافد",
    },
  },
  howItWorksSection: {
    ariaLabel: "كيفية عمل روافد",
    eyebrow: "كيف يعمل",
    headline: "إزاي بتشتغل روافد؟",
    subheadline: "٣ خطوات بسيطة وشحناتك تحت السيطرة",
    steps: [
      {
        id: "connect",
        number: "01",
        icon: "connect",
        title: "اربط متجرك",
        description:
          "اربط Shopify أو EzOrders في أقل من دقيقة وخلّي روافد تجيب الأوردرات تلقائياً.",
      },
      {
        id: "create",
        number: "02",
        icon: "create",
        title: "أنشئ الشحنة",
        description:
          "اختار شركة الشحن الأنسب، قارن الأسعار، وأنشئ الشحنة بضغطة واحدة.",
      },
      {
        id: "track",
        number: "03",
        icon: "track",
        title: "تتبع وسلّم",
        description:
          "تابع حالة كل شحنة لحظياً من لوحة تحكم واحدة حتى وصولها للعميل.",
      },
    ],
    cta: "ابدأ مجاناً",
    ctaHref: "#cta",
    ctaAriaLabel: "ابدأ تجربتك المجانية مع روافد",
  },
};

export default ar;
