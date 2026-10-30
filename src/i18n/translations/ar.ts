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
      home: "الرئيسية",
      problems: "التحديات",
      features: "الميزات",
      howItWorks: "كيف يعمل",
      integrations: "التكاملات",
      pricing: "الأسعار",
      faq: "الأسئلة",
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
          "دعم Shopify و Easy Orders",
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
          "اربط Shopify أو Easy Orders في أقل من دقيقة وخلّي روافد تجيب الأوردرات تلقائياً.",
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
  integrationsSection: {
    ariaLabel: "تكاملات روافد مع المتاجر وشركات الشحن",
    eyebrow: "التكاملات",
    headline: "اربط كل أدواتك",
    subheadline:
      "تكاملات جاهزة مع منصات التجارة الإلكترونية وشركات الشحن المحلية — كل حاجة في مكان واحد",
    hubLabel: "روافد",
    hubTagline: "المركز الموحد",
    stores: [
      {
        id: "shopify",
        icon: "shopify",
        name: "Shopify",
        description: "مزامنة تلقائية للأوردرات",
      },
      {
        id: "easy-orders",
        icon: "Easy Orders",
        name: "Easy Orders",
        description: "استيراد وتحديث الحالة فوري",
      },
      {
        id: "api",
        icon: "api",
        name: "Custom API",
        description: "ربط أي متجر مخصص",
      },
    ],
    couriers: [
      {
        id: "bosta",
        icon: "bosta",
        name: "Bosta",
        description: "الشريك الرئيسي للتوصيل",
      },
      {
        id: "courier-2",
        icon: "local",
        name: "شركة شحن محلية",
        description: "تغطية واسعة في مصر",
      },
      {
        id: "courier-3",
        icon: "local",
        name: "شريك التوصيل",
        description: "شحن سريع وموثوق",
      },
    ],
    comingSoon: [
      { id: "woocommerce", name: "WooCommerce" },
      { id: "magento", name: "Magento" },
      { id: "salla", name: "Salla" },
      { id: "zid", name: "Zid" },
    ],
    labels: {
      stores: "المتاجر",
      couriers: "شركات الشحن",
      available: "متاح",
      comingSoon: "قريباً",
    },
  },
  whyRawafidSection: {
    ariaLabel: "لماذا تختار روافد",
    eyebrow: "لماذا روافد؟",
    headline: "ليه تختار روافد؟",
    subheadline: "منصة شحن مصممة للتاجر المصري — بمزايا حقيقية مش وعود فارغة",
    points: [
      {
        id: "local-market",
        icon: "local",
        title: "مصممة للسوق المصري",
        description: "نفهم احتياجات التاجر المصري وشركات الشحن المحلية — من COD للمرتجعات.",
      },
      {
        id: "security",
        icon: "security",
        title: "بياناتك في أمان",
        description: "تشفير كامل للبيانات مع أعلى معايير الحماية والخصوصية.",
      },
      {
        id: "support",
        icon: "support",
        title: "دعم فني سريع",
        description: "فريق دعم متاح للرد على استفساراتك خلال ساعات — مش أيام.",
      },
      {
        id: "ease",
        icon: "ease",
        title: "سهولة الاستخدام",
        description: "واجهة بسيطة ومباشرة — تبدأ الشغل من أول يوم بدون تعقيد.",
      },
      {
        id: "pricing",
        icon: "pricing",
        title: "بدون تكاليف خفية",
        description: "أسعار واضحة ومعلنة — مفيش مفاجآت في الفاتورة.",
      },
      {
        id: "updates",
        icon: "updates",
        title: "تحديثات مستمرة",
        description: "ميزات جديدة وتحسينات باستمرار بناءً على احتياجات التجار.",
      },
    ],
    comparison: {
      ariaLabel: "مقارنة روافد مع الطريقة التقليدية",
      headline: "الفرق بين روافد والطرق التقليدية",
      columns: {
        feature: "الميزة",
        rawafid: "روافد",
        traditional: "الطريقة التقليدية",
      },
      rows: [
        {
          id: "dashboards",
          feature: "عدد الداشبوردات",
          rawafid: { kind: "text", value: "1" },
          traditional: { kind: "text", value: "6+" },
        },
        {
          id: "shipment-time",
          feature: "وقت إنشاء الشحنة",
          rawafid: { kind: "text", value: "30 ثانية" },
          traditional: { kind: "text", value: "5+ دقائق" },
        },
        {
          id: "tracking",
          feature: "تتبع موحد",
          rawafid: { kind: "yes" },
          traditional: { kind: "no" },
        },
        {
          id: "price-compare",
          feature: "مقارنة الأسعار",
          rawafid: { kind: "text", value: "فورية" },
          traditional: { kind: "text", value: "يدوية" },
        },
        {
          id: "returns",
          feature: "إدارة المرتجعات",
          rawafid: { kind: "text", value: "منظمة" },
          traditional: { kind: "text", value: "فوضى" },
        },
      ],
      labels: {
        yes: "متاح",
        no: "غير متاح",
      },
    },
  },
  pricingSection: {
    ariaLabel: "خطط أسعار روافد",
    eyebrow: "الأسعار",
    headline: "خطط تناسب كل الأحجام",
    subheadline: "ابدأ مجاناً، وكبّر حسب احتياجك — بدون التزامات طويلة",
    billing: {
      toggleLabel: "اختر دورة الفوترة",
      monthly: "شهري",
      annual: "سنوي",
      annualSave: "وفّر 20%",
      monthlyHint: "الفوترة الشهرية",
      annualHint: "الفوترة السنوية — خصم 20%",
    },
    plans: [
      {
        id: "starter",
        name: "Starter",
        tagline: "للمتاجر الصغيرة والتجربة",
        priceType: "free",
        freeLabel: "مجاني",
        freeSub: "للأبد",
        features: [
          "حتى 50 شحنة/شهر",
          "شركة شحن واحدة",
          "متجر واحد",
          "لوحة تحكم أساسية",
          "تتبع الشحنات",
          "دعم عبر البريد",
        ],
        cta: "ابدأ مجاناً",
        ctaHref: "#cta",
        ctaAriaLabel: "ابدأ الخطة المجانية Starter مع روافد",
        ctaVariant: "secondary",
      },
      {
        id: "growth",
        name: "Growth",
        tagline: "للمتاجر النامية",
        priceType: "numeric",
        monthlyPrice: "299",
        annualPrice: "239",
        priceSuffix: "ج.م/شهرياً",
        popular: true,
        popularBadge: "الأكثر شعبية",
        features: [
          "حتى 500 شحنة/شهر",
          "3 شركات شحن",
          "3 متاجر",
          "لوحة تحكم متقدمة",
          "تحليلات وتقارير",
          "إدارة المرتجعات",
          "دعم أولوية",
          "Webhooks",
        ],
        cta: "اشترك الآن",
        ctaHref: "#cta",
        ctaAriaLabel: "اشترك في خطة Growth مع روافد",
        ctaVariant: "primary",
      },
      {
        id: "enterprise",
        name: "Enterprise",
        tagline: "للمتاجر الكبيرة والشركات",
        priceType: "custom",
        customLabel: "مخصص",
        customSub: "حسب احتياجك",
        features: [
          "شحنات غير محدودة",
          "كل شركات الشحن",
          "متاجر غير محدودة",
          "وصول API كامل",
          "مدير حساب مخصص",
          "تكاملات مخصصة",
          "ضمان SLA",
          "دعم 24/7",
        ],
        cta: "تواصل معنا",
        ctaHref: "#contact",
        ctaAriaLabel: "تواصل مع فريق روافد لخطة Enterprise",
        ctaVariant: "secondary",
      },
    ],
    featuresHeading: "الميزات المتضمنة",
    priceUpdated: "تم تحديث الأسعار إلى الفوترة {period}",
  },
  faqSection: {
    ariaLabel: "الأسئلة الشائعة عن روافد",
    eyebrow: "الأسئلة الشائعة",
    headline: "أسئلة شائعة",
    subheadline: "إجابات سريعة على أكثر الأسئلة اللي بنستقبلها من التجار",
    items: [
      {
        id: "supported-couriers",
        question: "إيه شركات الشحن المدعومة؟",
        answer:
          "حالياً بندعم Bosta وشركات شحن محلية تانية. بنضيف شركات جديدة باستمرار حسب طلبات العملاء — لو محتاج شركة معينة، تواصل معانا.",
      },
      {
        id: "shopify-connect",
        question: "إزاي أربط متجر Shopify؟",
        answer:
          'من خلال صفحة الإعدادات، اختار "إضافة متجر" واتبع خطوات الربط. العملية بتاخد أقل من دقيقة — والأوردرات بتتزامن تلقائياً بعد الربط.',
      },
      {
        id: "returns-system",
        question: "إزاي بيشتغل نظام المرتجعات؟",
        answer:
          "بتنشئ طلب استرجاع، تحدد السبب، وروافد بتنسق مع شركة الشحن لاستلام المرتجع. هتقدر تتبع كل المراحل من لوحة واحدة لحد ما المرتجع يتقفل.",
      },
      {
        id: "api-access",
        question: "فيه API للربط مع أنظمتي؟",
        answer:
          "أيوه، في خطة Enterprise بنوفر API كامل للربط مع أي نظام — متاجر مخصصة، ERP، أو أدوات داخلية. تواصل معانا لمعرفة التفاصيل.",
      },
      {
        id: "pricing-plans",
        question: "إيه خطط الأسعار المتاحة؟",
        answer:
          "عندنا 3 خطط: Starter (مجاني للأبد)، Growth (299 ج.م/شهر)، و Enterprise (مخصص). Growth فيها 14 يوم تجربة مجانية. شوف تفاصيل كل خطة في قسم الأسعار.",
      },
      {
        id: "cancel-anytime",
        question: "أقدر ألغي في أي وقت؟",
        answer:
          "أيوه، مفيش عقود طويلة. تقدر تلغي أو تغير خطتك في أي وقت من إعدادات الحساب — بدون رسوم إلغاء.",
      },
      {
        id: "free-trial",
        question: "فيه تجربة مجانية؟",
        answer:
          "خطة Starter مجانية للأبد — مناسبة للتجربة والمتاجر الصغيرة. وخطة Growth فيها 14 يوم trial كامل بدون بطاقة ائتمان.",
      },
    ],
  },
  finalCtaSection: {
    ariaLabel: "ابدأ تجربتك المجانية مع روافد",
    icon: "🚀",
    headline: "جاهز تبدأ؟",
    subheadline:
      "بطّل تضيّع وقتك في الشغل اليدوي. ابدأ دلوقتي واحنا هنساعدك تنظم كل شحناتك.",
    ctaPrimary: "ابدأ تجربتك المجانية",
    ctaPrimaryHref: "https://app.rawafid.com/signup",
    ctaPrimaryAriaLabel: "ابدأ تجربتك المجانية مع روافد",
    ctaSecondary: "احجز Demo",
    ctaSecondaryHref: "#contact",
    ctaSecondaryAriaLabel: "احجز عرضاً توضيحياً مع فريق روافد",
    trustBadges: [
      "14 يوم تجربة مجانية",
      "بدون بطاقة ائتمان",
      "إلغاء في أي وقت",
    ],
    trustListAriaLabel: "ضمانات التجربة المجانية",
  },
  footerSection: {
    ariaLabel: "تذييل الموقع",
    tagline: "منصة تشغيل لوجستية للتجارة الإلكترونية",
    backToTop: "العودة للأعلى",
    backToTopAriaLabel: "العودة إلى بداية الصفحة",
    columns: [
      {
        id: "product",
        title: "المنتج",
        links: [
          { id: "features", label: "الميزات", href: "#features" },
          { id: "integrations", label: "التكاملات", href: "#integrations" },
          { id: "pricing", label: "الأسعار", href: "#pricing" },
          {
            id: "changelog",
            label: "التحديثات",
            href: "https://rawafid.app/changelog",
            external: true,
            ariaLabel: "التحديثات — يفتح في نافذة جديدة",
          },
        ],
      },
      {
        id: "company",
        title: "الشركة",
        links: [
          {
            id: "about",
            label: "عن روافد",
            href: "https://rawafid.app/about",
            external: true,
            ariaLabel: "عن روافد — يفتح في نافذة جديدة",
          },
          {
            id: "careers",
            label: "الوظائف",
            href: "https://rawafid.app/careers",
            external: true,
            ariaLabel: "الوظائف — يفتح في نافذة جديدة",
          },
          {
            id: "blog",
            label: "المدونة",
            href: "https://rawafid.app/blog",
            external: true,
            ariaLabel: "المدونة — يفتح في نافذة جديدة",
          },
          { id: "contact", label: "اتصل بنا", href: "#contact" },
        ],
      },
      {
        id: "support",
        title: "الدعم",
        links: [
          {
            id: "help",
            label: "مركز المساعدة",
            href: "https://help.rawafid.app",
            external: true,
            ariaLabel: "مركز المساعدة — يفتح في نافذة جديدة",
          },
          {
            id: "docs",
            label: "التوثيق",
            href: "https://docs.rawafid.app",
            external: true,
            ariaLabel: "التوثيق — يفتح في نافذة جديدة",
          },
          {
            id: "status",
            label: "حالة النظام",
            href: "https://status.rawafid.app",
            external: true,
            ariaLabel: "حالة النظام — يفتح في نافذة جديدة",
          },
          {
            id: "api",
            label: "API Docs",
            href: "https://docs.rawafid.app/api",
            external: true,
            ariaLabel: "توثيق API — يفتح في نافذة جديدة",
          },
        ],
      },
    ],
    contact: {
      title: "تواصل معنا",
      email: {
        label: "البريد الإلكتروني",
        value: "hello@rawafid.com",
        href: "mailto:hello@rawafid.com",
        ariaLabel: "إرسال بريد إلكتروني إلى hello@rawafid.com",
      },
      phone: {
        label: "الهاتف",
        value: "+20 100 000 0000",
        href: "tel:+201000000000",
        ariaLabel: "الاتصال على +20 100 000 0000",
      },
      address: {
        label: "العنوان",
        value: "القاهرة، مصر",
      },
    },
    social: {
      ariaLabel: "روافد على شبكات التواصل الاجتماعي",
      links: [
        {
          id: "linkedin",
          label: "LinkedIn",
          href: "https://www.linkedin.com/company/rawafid",
        },
        {
          id: "facebook",
          label: "Facebook",
          href: "https://www.facebook.com/rawafid",
        },
        {
          id: "x",
          label: "X (Twitter)",
          href: "https://x.com/rawafid",
        },
        {
          id: "instagram",
          label: "Instagram",
          href: "https://www.instagram.com/rawafid",
        },
      ],
    },
    legal: {
      navAriaLabel: "روابط قانونية",
      copyright: "© {year} Rawafid روافد. جميع الحقوق محفوظة.",
      privacy: {
        label: "سياسة الخصوصية",
        href: "https://rawafid.app/privacy",
        ariaLabel: "سياسة الخصوصية — يفتح في نافذة جديدة",
      },
      terms: {
        label: "الشروط والأحكام",
        href: "https://rawafid.app/terms",
        ariaLabel: "الشروط والأحكام — يفتح في نافذة جديدة",
      },
    },
  },
};

export default ar;
