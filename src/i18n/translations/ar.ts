import type { Translations } from "../types";

const ar: Translations = {
  meta: {
    title: "روافد — إدارة الشحنات والمرتجعات للمتاجر الإلكترونية في مصر",
    description:
      "اربط متجرك على Shopify أو Easy Orders مع Bosta و J&T Express و Aramex، وأدِر الشحنات والمرتجعات والتحصيل والتتبع من لوحة تحكم واحدة. ابدأ مجاناً.",
    tagline: "نظام تشغيل لوجستيات التجارة الإلكترونية",
    ogImageAlt: "روافد — أدِر شحنات ومرتجعات متجرك الإلكتروني وشركات الشحن من لوحة تحكم واحدة",
  },
  nav: {
    skipLink: "تخطي إلى المحتوى الرئيسي",
    ariaLabel: "التنقل الرئيسي",
    mobileAriaLabel: "التنقل للجوال",
    logoAriaLabel: "Rawafid روافد — الصفحة الرئيسية",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    mobileMenuLabel: "قائمة التنقل",
    links: {
      features: "الميزات",
      howItWorks: "كيف يعمل",
      integrations: "التكاملات",
      pricing: "الأسعار",
      faq: "الأسئلة",
    },
    login: "تسجيل الدخول",
    cta: "ابدأ مجاناً",
  },
  theme: {
    toggleLabel: "الوضع الداكن",
  },
  lang: {
    switchToEn: "التبديل إلى الإنجليزية",
    switchToAr: "التبديل إلى العربية",
    shortEn: "EN",
    shortAr: "عربي",
  },
  hero: {
    badge: "مصممة للتجارة الإلكترونية في مصر",
    headline: "أدِر كل شحنات متجرك الإلكتروني",
    headlineAccent: "من مكان واحد",
    subheadline:
      "اربط متجرك، اشحن مع Bosta أو J&T Express أو Aramex، وتابع كل أوردر ومرتجع وتحصيل COD من لوحة تحكم واحدة مصممة للتاجر المصري.",
    ctaPrimary: "ابدأ مجاناً",
    ctaSecondary: "شوف المنصة من جوه",
    trustListLabel: "ليه البداية سهلة",
    trustBadges: [
      "باقة مجانية للأبد",
      "بدون بطاقة ائتمان",
      "رقّي باقتك وقت ما تحب",
    ],
    worksWithLabel: "متكامل مع",
    dashboardAlt: "معاينة لوحة تحكم روافد لإدارة الشحنات والمرتجعات",
    floatingIcons: [
      { emoji: "📦", position: "top-start" },
      { emoji: "🚚", position: "top-end" },
      { emoji: "✅", position: "bottom-start" },
      { emoji: "🔁", position: "bottom-end" },
    ],
  },
  marketStats: {
    eyebrow: "أرقام من السوق المصري",
    source: "",
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
    eyebrow: "التحديات",
    headline: "مشاكل بتواجه كل تاجر إلكتروني",
    subheadline: "وإزاي روافد بتحل كل واحدة منهم",
    solutionLabel: "مع روافد",
    problems: [
      {
        id: "multiple-dashboards",
        title: "داشبوردات متعددة",
        description: "كل شركة شحن ليها نظام مختلف، وبتضيع وقتك بين الداشبوردات",
        solution: "لوحة تحكم واحدة لكل شركات الشحن",
        image: "dashboards",
      },
      {
        id: "no-unified-tracking",
        title: "مفيش تتبع موحد",
        description: "الشحنات متفرقة ومش قادر تتابعها كلها من مكان واحد",
        solution: "تتبع لحظي لكل شحناتك في مكان واحد",
        image: "tracking",
      },
      {
        id: "returns-nightmare",
        title: "إدارة المرتجعات صعبة",
        description: "المرتجعات بتاخد وقت كتير ومفيش نظام واضح لإدارتها",
        solution: "نظام متكامل للمرتجعات من الطلب لحد الإغلاق",
        image: "returns",
      },
      {
        id: "manual-entry",
        title: "إدخال يدوي للأوردرات",
        description: "بتدخل كل أوردر يدوياً وده بياخد وقت ومجهود كبير",
        solution: "الأوردرات بتتزامن تلقائياً من متجرك",
        image: "manual",
      },
      {
        id: "price-comparison",
        title: "مقارنة الأسعار صعبة",
        description: "صعب تقارن أسعار شركات الشحن وتختار الأنسب لكل شحنة",
        solution: "مقارنة فورية بين أسعار شركات الشحن",
        image: "pricing",
      },
      {
        id: "hidden-costs",
        title: "تكاليف مخفية",
        description: "مصاريف مش واضحة بتأثر على الربح وبتكتشفها متأخر",
        solution: "شوف سعر كل شركة شحن قبل ما تشحن",
        image: "hidden-costs",
      },
    ],
  },
  featuresSection: {
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
          "Custom API للمتاجر المخصصة (Enterprise)",
          "مزامنة تلقائية للأوردرات",
          "إنشاء شحنات تلقائي عند الأوردر",
        ],
      },
      {
        id: "couriers",
        icon: "couriers",
        title: "شركات الشحن المتعددة",
        description:
          "اشحن مع أي شركة مربوطة من مكان واحد — قارن، اختار، واشحن.",
        benefits: [
          "Bosta و J&T Express و Aramex",
          "API موحد لكل الشركات",
          "داشبورد تتبع موحد",
          "قارن بين الشركات قبل الشحن",
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
    eyebrow: "معاينة تفاعلية",
    headline: "شوف روافد وهي شغّالة",
    subheadline: "بدّل بين التبويبات واضغط على النقاط المضيئة لاستكشاف لوحة التحكم.",
    tabsLabel: "عروض لوحة التحكم",
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
        description: "شوف كل شحناتك في لمحة — مع مؤشر التغيير مقارنةً بالشهر اللي فات.",
      },
      {
        id: "stat-delivered",
        view: "overview",
        title: "نسبة التسليم الناجح",
        description: "تابع أداء شركات الشحن وشوف مين الأفضل تسليماً لعملاءك.",
      },
      {
        id: "stat-cod",
        view: "overview",
        title: "COD محصّل",
        description: "ابقى دايماً عارف كام فلوس اتحصلت — بدون جداول بيانات أو حسابات يدوية.",
      },
      {
        id: "sidebar-shipments",
        view: "overview",
        title: "الشحنات",
        description: "اعرض كل الشحنات مع فلاتر الحالة وتفاصيل كل شحنة على حدة.",
        navigatesTo: "shipments",
      },
      {
        id: "sidebar-returns",
        view: "overview",
        title: "المرتجعات",
        description: "نظام مرتجعات متكامل — تابع كل مرحلة من الطلب للاستلام والاسترداد.",
        navigatesTo: "returns",
      },
      {
        id: "create-shipment",
        view: "shipments",
        title: "إنشاء شحنة جديدة",
        description: "أنشئ شحنة في ثوانٍ — اختار شركة الشحن، أدخل العنوان، واطبع البوليصة فوراً.",
      },
      {
        id: "shipment-row",
        view: "shipments",
        title: "تفاصيل الشحنة",
        description: "افتح أي شحنة لعرض التتبع الكامل، حالة التسليم، وبيانات العميل.",
      },
      {
        id: "return-row",
        view: "returns",
        title: "طلب الاسترجاع",
        description: "كل طلب مرتجع ليه سير عمل واضح — من الطلب لحد الاستلام والاسترداد.",
      },
      {
        id: "return-status",
        view: "returns",
        title: "حالة المرتجع",
        description: "تتبع كل مرتجع لحظياً — في الانتظار، تم الاستلام، أو تم الاسترداد.",
      },
    ],
    hotspotLabel: "اعرض التفاصيل: {title}",
    openView: "افتح {view}",
    closeHotspot: "إغلاق",
    cta: {
      primary: "ابدأ مجاناً",
      secondary: "تواصل معنا",
    },
  },
  howItWorksSection: {
    eyebrow: "كيف يعمل",
    headline: "إزاي بتشتغل روافد؟",
    subheadline: "٣ خطوات بسيطة وشحناتك تحت السيطرة",
    steps: [
      {
        id: "connect",
        icon: "connect",
        title: "اربط متجرك",
        description:
          "اربط Shopify أو Easy Orders في أقل من دقيقة وخلّي روافد تجيب الأوردرات تلقائياً.",
      },
      {
        id: "create",
        icon: "create",
        title: "أنشئ الشحنة",
        description:
          "اختار شركة الشحن الأنسب، قارن الأسعار، وأنشئ الشحنة بضغطة واحدة.",
      },
      {
        id: "track",
        icon: "track",
        title: "تتبع وسلّم",
        description:
          "تابع حالة كل شحنة لحظياً من لوحة تحكم واحدة حتى وصولها للعميل.",
      },
    ],
    cta: "ابدأ مجاناً",
  },
  integrationsSection: {
    eyebrow: "التكاملات",
    headline: "اربط كل أدواتك",
    subheadline:
      "تكاملات جاهزة مع منصات التجارة الإلكترونية وشركات الشحن — وبنضيف تكاملات جديدة باستمرار",
    stores: [
      {
        id: "shopify",
        icon: "shopify",
        name: "Shopify",
        description: "مزامنة تلقائية للأوردرات",
      },
      {
        id: "easy-orders",
        icon: "easyorders",
        name: "Easy Orders",
        description: "استيراد وتحديث الحالة فوري",
      },
      {
        id: "api",
        icon: "api",
        name: "Custom API",
        description: "ربط أي متجر مخصص (Enterprise)",
      },
    ],
    couriers: [
      {
        id: "bosta",
        icon: "bosta",
        name: "Bosta",
        description: "إنشاء الشحنات وتتبع التوصيل",
      },
      {
        id: "jt-express",
        icon: "jt",
        name: "J&T Express",
        description: "إنشاء الشحنات وتحديث الحالة",
      },
      {
        id: "aramex",
        icon: "aramex",
        name: "Aramex",
        description: "إنشاء الشحنات والتتبع اللحظي",
      },
    ],
    hubLabel: "روافد",
    hubTagline: "كل أوردراتك وشحناتك في مكان واحد",
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
  pricingSection: {
    eyebrow: "الأسعار",
    headline: "خطط تناسب كل الأحجام",
    subheadline: "ابدأ بالباقة المجانية ورقّي باقتك مع نمو تجارتك — بدون التزامات طويلة",
    billing: {
      toggleLabel: "دورة الفوترة",
      monthly: "شهري",
      annual: "سنوي",
      annualSave: "وفّر 20%",
    },
    plans: [
      {
        id: "starter",
        name: "Starter",
        tagline: "جرّب روافد باستخدام محدود — مجاناً للأبد",
        priceType: "free",
        freeLabel: "مجاني",
        freeSub: "للأبد",
        features: [
          "حتى 50 شحنة/شهر",
          "ربط شركة شحن واحدة",
          "ربط متجر واحد",
          "لوحة تحكم أساسية",
          "تتبع الشحنات",
          "دعم عبر البريد",
        ],
        cta: "ابدأ مجاناً",
        ctaTarget: "signup",
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
        annualNote: "تُدفع 2,868 ج.م سنوياً",
        popular: true,
        popularBadge: "الأكثر شعبية",
        features: [
          "حتى 500 شحنة/شهر",
          "ربط حتى 3 شركات شحن",
          "ربط حتى 3 متاجر",
          "لوحة تحكم متقدمة",
          "تحليلات وتقارير",
          "إدارة المرتجعات",
          "دعم أولوية",
          "Webhooks",
        ],
        cta: "ابدأ الآن",
        ctaTarget: "signup",
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
          "كل شركات الشحن المدعومة",
          "متاجر غير محدودة",
          "وصول API كامل",
          "مدير حساب مخصص",
          "تكاملات مخصصة",
          "ضمان SLA",
          "دعم 24/7",
        ],
        cta: "تواصل معنا",
        ctaTarget: "contact",
        ctaVariant: "secondary",
      },
    ],
    featuresHeading: "الميزات المتضمنة",
    priceUpdated: "عرض أسعار الفوترة {period}",
    trust: {
      label: "ليه التجار بيختاروا روافد",
      points: [
        {
          id: "local-market",
          icon: "local",
          title: "مصممة للسوق المصري",
          description: "نفهم احتياجات التاجر المصري وشركات الشحن المحلية — من COD للمرتجعات.",
        },
        {
          id: "pricing",
          icon: "pricing",
          title: "بدون تكاليف خفية",
          description: "أسعار واضحة ومعلنة — مفيش مفاجآت في الفاتورة.",
        },
        {
          id: "ease",
          icon: "ease",
          title: "سهولة الاستخدام",
          description: "واجهة بسيطة ومباشرة — تبدأ الشغل من أول يوم بدون تعقيد.",
        },
      ],
    },
  },
  faqSection: {
    eyebrow: "الأسئلة الشائعة",
    headline: "أسئلة شائعة",
    subheadline: "إجابات سريعة على أكثر الأسئلة اللي بنستقبلها من التجار",
    items: [
      {
        id: "free-plan",
        question: "أقدر أجرب روافد مجاناً؟",
        answer:
          "أيوه. بدل التجربة المحدودة بمدة، روافد فيها باقة مجانية دائمة (Starter) بعدد محدود من الشحنات الشهرية وعدد محدود من تكاملات شركات الشحن والمتاجر. استكشف المنصة في حدود الباقة، ورقّي وقت ما تحتاج أكتر.",
      },
      {
        id: "supported-couriers",
        question: "إيه شركات الشحن المدعومة؟",
        answer:
          "حالياً بندعم Bosta و J&T Express و Aramex، وبنضيف شركات جديدة حسب طلبات التجار — لو محتاج شركة معينة، تواصل معانا.",
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
          "عندنا 3 خطط: Starter (مجانية للأبد بعدد محدود من الشحنات والتكاملات)، Growth (299 ج.م/شهر، أو 239 ج.م/شهر مع الفوترة السنوية)، و Enterprise (مخصص). شوف تفاصيل كل خطة في قسم الأسعار.",
      },
      {
        id: "cancel-anytime",
        question: "أقدر ألغي في أي وقت؟",
        answer:
          "أيوه، مفيش عقود طويلة. تقدر تلغي أو تغير خطتك في أي وقت من إعدادات الحساب — بدون رسوم إلغاء.",
      },
    ],
  },
  finalCtaSection: {
    headline: "جاهز تبدأ؟",
    subheadline:
      "بطّل تضيّع وقتك في الشغل اليدوي. اعمل حسابك المجاني ونظّم كل شحناتك في مكان واحد.",
    ctaPrimary: "ابدأ مجاناً",
    ctaSecondary: "تواصل معنا",
    trustBadges: [
      "باقة مجانية للأبد",
      "بدون بطاقة ائتمان",
      "رقّي باقتك وقت ما تحب",
    ],
    trustListAriaLabel: "ليه البداية سهلة",
  },
  footerSection: {
    tagline: "منصة تشغيل لوجستية للتجارة الإلكترونية",
    backToTop: "العودة للأعلى",
    externalHint: "(يفتح في نافذة جديدة)",
    productTitle: "المنتج",
    contact: {
      title: "تواصل معنا",
      emailLabel: "البريد الإلكتروني",
      phoneLabel: "الهاتف",
      whatsappLabel: "واتساب",
      addressLabel: "العنوان",
      address: "القاهرة، مصر",
    },
    social: {
      ariaLabel: "روافد على وسائل التواصل الاجتماعي",
      labels: {
        linkedin: "LinkedIn",
        facebook: "Facebook",
        x: "X (Twitter)",
        instagram: "Instagram",
      },
    },
    legal: {
      navAriaLabel: "روابط قانونية",
      copyright: "© {year} Rawafid روافد. جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "الشروط والأحكام",
    },
  },
  notFound: {
    title: "الصفحة مش موجودة",
    description: "الصفحة اللي بتدور عليها مش موجودة أو اتنقلت.",
    cta: "ارجع للرئيسية",
  },
};

export default ar;
