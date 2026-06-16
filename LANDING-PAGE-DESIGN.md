# 🚀 Rawafid Landing Page Design Specification

> **Note:** This document outlines the complete landing page structure, content, and animations for Rawafid (روافد) platform.  
> **Animation Library:** React Bits  
> **Target:** High-conversion, premium SaaS landing page  
> **Stage:** 🌱 Startup-Friendly (معدّل للمنصات الناشئة بدون عملاء فعليين)

---

## 📑 Table of Contents

1. [Navigation Bar](#1-navigation-bar)
2. [Hero Section](#2-hero-section)
3. [Market Problem Stats](#3-market-problem-stats-بديل-social-proof-للمنصات-الناشئة) ⭐ معدّل للمنصات الناشئة
4. [Problem Section](#4-problem-section)
5. [Solution Section](#5-solution-section)
6. [Features Section](#6-features-section)
7. [How It Works](#7-how-it-works)
8. [Dashboard Preview — Hotspot Interactive Demo](#8-dashboard-preview--hotspot-interactive-demo)
9. [Integrations Section](#9-integrations-section)
10. [Pricing Section](#10-pricing-section)
11. [Why Rawafid?](#11-why-rawafid-بديل-testimonials-للمنصات-الناشئة) ⭐ معدّل للمنصات الناشئة
12. [FAQ Section](#12-faq-section)
13. [Final CTA Section](#13-final-cta-section)
14. [Footer](#14-footer)

---

## 🚀 ملاحظة للمنصات الناشئة (Startup-Friendly Approach)

بما إن روافد منصة ناشئة ولسه مفيش عملاء فعليين، عملنا التعديلات دي:

| Section الأصلي | البديل | السبب |
|---------------|--------|-------|
| Social Proof (أرقام عملاء) | Market Problem Stats | نعرض أرقام عن حجم المشكلة في السوق بدل أرقام وهمية |
| Trusted By (شعارات عملاء) | Platform Capabilities | نعرض قدرات المنصة بدل شعارات مزيفة |
| Testimonials (آراء عملاء) | Why Rawafid? | نقدم value propositions حقيقية بدل testimonials مزيفة |

### ✅ مميزات الـ Approach ده:
- **صادق:** مش بنكذب على الزوار
- **مقنع:** الأرقام عن السوق مقنعة أكتر
- **Professional:** شركات كتير بتعمل كده في البداية
- **Flexible:** سهل نضيف testimonials لما يبقى عندنا عملاء

### 🔄 لما يبقى عندك عملاء:
1. استبدل Market Stats بـ Social Proof حقيقي
2. أضف Testimonials section
3. أضف Case Studies

---

## 🎨 General Animation Guidelines

### React Bits Components to Use:
- `SplitText` - للعناوين الكبيرة
- `TextReveal` / `BlurText` - لإظهار النصوص
- `CountUp` - للأرقام والإحصائيات
- `AnimatedBackground` / `Particles` - للخلفيات
- `Magnet` - للـ buttons hover
- `TiltCard` - للكروت
- `AnimatedList` - للقوائم
- `SpotlightCard` - للفيتشرز
- `ScrollReveal` - لإظهار العناصر عند السكرول
- `AnimatedBeam` - للـ connections
- `GradientText` - للنصوص المميزة
- `Dock` - للأيقونات
- `RotatingText` - للنصوص المتغيرة

---

## 1. Navigation Bar

### 📍 Position
- Sticky top
- Glassmorphism effect on scroll (blur + transparency)

### 📋 Content
```
[Logo: Rawafid روافد] | Features | Integrations | Pricing | FAQ | Contact | [Theme Toggle] | [CTA: ابدأ مجاناً]
```

### ✨ Animations (React Bits)
- **Logo:** Subtle scale on hover
- **Links:** `Magnet` effect on hover - الماوس ينجذب للـ link
- **CTA Button:** `ShinyButton` / `RippleButton` effect
- **Theme Toggle:** Smooth rotation animation

### 🎯 Behavior
- Transparent on top → Blurred background on scroll
- Hide/Show on scroll direction (optional)
- Mobile: Hamburger menu with slide-in animation

---

## 2. Hero Section

### 📍 Layout
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│        [Badge: 🚀 منصة الشحن الأولى في مصر]        │
│                                                     │
│     أدِر كل شحناتك من                              │
│     [مكان واحد] ← Animated rotating text           │
│                                                     │
│     روافد بتساعد أصحاب المتاجر الإلكترونية          │
│     يديروا الشحنات والمرتجعات وشركات الشحن          │
│     من داشبورد واحدة موحدة                          │
│                                                     │
│     [ابدأ تجربتك المجانية]  [احجز Demo]            │
│                                                     │
│     ✓ 14 يوم مجاناً   ✓ بدون كارت   ✓ إلغاء أي وقت │
│                                                     │
│     ┌─────────────────────────────────┐            │
│     │    [Dashboard Preview Image]     │            │
│     │    with floating elements        │            │
│     └─────────────────────────────────┘            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### 📝 Content

**Badge:**
```
🚀 منصة الشحن #1 للتجارة الإلكترونية في مصر
```

**Headline (Arabic):**
```
أدِر كل شحناتك من [مكان واحد]
```

**Rotating Words for [مكان واحد]:**
- داشبورد واحدة
- منصة واحدة
- نظام موحد
- مكان واحد

**Subheadline:**
```
روافد بتوحّد شركات الشحن، المتاجر، والشحنات في منصة واحدة.
وداعاً للفوضى، مرحباً بالكفاءة.
```

**CTAs:**
- Primary: `ابدأ تجربتك المجانية` (Start Free Trial)
- Secondary: `شاهد العرض التوضيحي` (Watch Demo)

**Trust Badges:**
```
✓ 14 يوم تجربة مجانية
✓ بدون بطاقة ائتمان
✓ إلغاء في أي وقت
```

### ✨ Animations (React Bits)

| Element | Animation | Description |
|---------|-----------|-------------|
| Badge | `FadeIn` + `Bounce` | يظهر من فوق مع ارتداد خفيف |
| Headline | `SplitText` | كل حرف يظهر بشكل متتابع |
| Rotating Text | `RotatingText` / `FlipText` | الكلمات تتبدل مع flip effect |
| Subheadline | `BlurText` | يظهر مع blur-to-clear |
| CTAs | `Magnet` + `ShinyButton` | جذب للماوس + لمعان |
| Dashboard Image | `Float` + `Parallax` | يطفو ويتحرك مع الماوس |
| Background | `Particles` / `AnimatedGridPattern` | جزيئات متحركة أو grid pattern |
| Trust Badges | `StaggeredFadeIn` | تظهر واحدة تلو الأخرى |

### 🎨 Visual Elements
- **Background:** Gradient mesh أو animated particles
- **Dashboard Preview:** Floating with shadow, tilts with mouse movement
- **Decorative:** Floating icons (📦 🚚 ✅) around the dashboard

---

## 3. Market Problem Stats (بديل Social Proof للمنصات الناشئة)

### 📍 Position
- بعد الـ Hero مباشرة
- Full width strip

### 📋 Content
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   📊 أرقام من السوق المصري                                    │
│                                                                │
│   [85%]              [6+]               [3 ساعات]             │
│   من التجار          شركات شحن          يومياً               │
│   بيعانوا من         بيتعاملوا معاها     وقت ضايع في          │
│   تشتت الشحنات      في المتوسط         الإدارة اليدوية        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### 📝 Stats (أرقام عن المشكلة/السوق)
| Metric | Value | Label |
|--------|-------|-------|
| Pain Point | 85% | من التجار بيعانوا من تشتت إدارة الشحنات |
| Fragmentation | 6+ | شركات شحن بيتعامل معاها التاجر في المتوسط |
| Time Waste | 3+ ساعات | يومياً في الإدارة اليدوية |
| Market Size | 15M+ | أوردر e-commerce شهرياً في مصر |

### 💡 Alternative: Platform Capabilities
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   🚀 قدرات المنصة                                              │
│                                                                │
│   [5+]               [99.9%]            [<1 دقيقة]            │
│   شركات شحن         Uptime             وقت إنشاء              │
│   مدعومة            مضمون              الشحنة                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Stats Numbers | `CountUp` - العدد يزيد من 0 للرقم النهائي |
| Section | `ScrollReveal` - يظهر عند الوصول إليه |
| Icons | `Bounce` on scroll into view |

---

## 4. Problem Section

### 📍 Purpose
- إظهار المشاكل اللي بيواجهها التجار
- خلق empathy مع المستخدم

### 📋 Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              😫 هل بتعاني من المشاكل دي؟                    │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ 🔄          │ │ 📊          │ │ 🤯          │           │
│  │ فتح أكتر   │ │ مفيش تتبع  │ │ المرتجعات  │           │
│  │ من داشبورد │ │ موحد       │ │ كابوس      │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                             │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ ⏰          │ │ 📉          │ │ 💸          │           │
│  │ إدخال      │ │ مقارنة     │ │ تكاليف     │           │
│  │ الأوردرات  │ │ الأسعار    │ │ مخفية      │           │
│  │ يدوي       │ │ صعبة       │ │             │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 📝 Problems List

| Icon | Problem (AR) | Problem (EN) | Description |
|------|-------------|--------------|-------------|
| 🔄 | داشبوردات متعددة | Multiple Dashboards | كل شركة شحن ليها نظام مختلف |
| 📊 | مفيش تتبع موحد | No Unified Tracking | الشحنات متفرقة ومش قادر تتابعها |
| 🤯 | إدارة المرتجعات | Returns Nightmare | المرتجعات كابوس وبتاخد وقت كتير |
| ⏰ | إدخال يدوي | Manual Entry | بتدخل كل أوردر يدوياً |
| 📉 | مقارنة الأسعار | Price Comparison | صعب تقارن أسعار شركات الشحن |
| 💸 | تكاليف مخفية | Hidden Costs | مصاريف مش واضحة بتأثر على الربح |

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Section Headline | `SplitText` + shake effect |
| Problem Cards | `StaggeredFadeIn` - تظهر بالتتابع |
| Icons | `Bounce` on hover |
| Cards | `TiltCard` - تميل مع حركة الماوس |
| Background | Subtle red/orange gradient (pain theme) |

---

## 5. Solution Section

### 📍 Purpose
- تقديم روافد كالحل للمشاكل
- Transition من المشكلة للحل

### 📋 Layout
```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│              ✨ روافد هي الحل                               │
│                                                             │
│     كل اللي محتاجه في مكان واحد                            │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                                                     │   │
│  │   Before: 😫 ──────────→ After: 😊                 │   │
│  │                                                     │   │
│  │   6 داشبوردات ──────────→ داشبورد واحدة            │   │
│  │   إدخال يدوي  ──────────→ سحب تلقائي              │   │
│  │   مفيش تتبع   ──────────→ تتبع لحظي               │   │
│  │   مرتجعات فوضى ─────────→ نظام مرتجعات متكامل     │   │
│  │                                                     │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### 📝 Before vs After

| Before | After |
|--------|-------|
| 6+ داشبوردات مختلفة | داشبورد واحدة موحدة |
| إدخال أوردرات يدوي | سحب تلقائي من المتجر |
| مفيش تتبع للشحنات | تتبع لحظي موحد |
| مرتجعات بدون نظام | نظام مرتجعات متكامل |
| مقارنة أسعار صعبة | مقارنة فورية للأسعار |
| شغل يدوي كتير | أتمتة العمليات |

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Section Title | `GradientText` + `FadeIn` |
| Before/After | `AnimatedBeam` connecting lines |
| Transformation Arrow | `DrawSVG` - السهم يترسم |
| Content | `ScrollReveal` with slide |
| Background | Transition from red/orange to blue/green |

---

## 6. Features Section

### 📍 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    🎯 كل اللي محتاجه لإدارة شحناتك              │
│                                                                 │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   │  📦             │  │  🔁             │  │  🔗             │
│   │  إدارة الشحنات  │  │  إدارة المرتجعات │  │  ربط المتاجر    │
│   │                 │  │                 │  │                 │
│   │  أنشئ، تتبع،   │  │  طلبات استرجاع  │  │  Shopify        │
│   │  وأدر كل       │  │  متكاملة مع     │  │  Easy Orders       │
│   │  شحناتك        │  │  سير عمل واضح   │  │  Custom API     │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘
│                                                                 │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   │  🚚             │  │  💰             │  │  📊             │
│   │  شركات الشحن   │  │  حاسبة الأسعار  │  │  لوحة التحكم    │
│   │                 │  │                 │  │                 │
│   │  Bosta وشركات  │  │  قارن الأسعار   │  │  إحصائيات       │
│   │  شحن متعددة    │  │  واختار الأفضل  │  │  وتقارير شاملة  │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 📝 Features Detail

#### Feature 1: إدارة الشحنات (Shipment Management)
```
Icon: 📦
Title: إدارة الشحنات
Description: أنشئ، تتبع، وأدر كل شحناتك من مكان واحد
Benefits:
  - عرض كل الشحنات في لوحة واحدة
  - إنشاء شحنات يدوياً أو تلقائياً
  - طباعة بوليصات الشحن
  - تتبع حالة الشحنة لحظياً
  - فلترة حسب الحالة، الشركة، والتاريخ
```

#### Feature 2: إدارة المرتجعات (Returns Management)
```
Icon: 🔁
Title: إدارة المرتجعات
Description: نظام متكامل لإدارة كل عمليات الاسترجاع
Benefits:
  - إنشاء طلبات استرجاع
  - تحديد سبب الاسترجاع
  - جدولة استلام المرتجعات
  - تتبع دورة حياة المرتجع
  - إغلاق المرتجع بعد الاكتمال
```

#### Feature 3: ربط المتاجر (Store Integrations)
```
Icon: 🔗
Title: ربط المتاجر
Description: اربط متجرك واستورد الأوردرات تلقائياً
Benefits:
  - ربط Shopify
  - ربط Easy Orders
  - Custom API للمتاجر المخصصة
  - مزامنة تلقائية للأوردرات
  - إنشاء شحنات تلقائي
```

#### Feature 4: شركات الشحن (Courier Management)
```
Icon: 🚚
Title: شركات الشحن المتعددة
Description: اشحن مع أي شركة من مكان واحد
Benefits:
  - Bosta integration
  - شركات شحن محلية متعددة
  - إنشاء شحنات عبر API موحد
  - تتبع موحد لكل الشركات
  - عرض أوقات التسليم المتوقعة
```

#### Feature 5: حاسبة الأسعار (Pricing Calculator)
```
Icon: 💰
Title: حاسبة الأسعار
Description: قارن الأسعار واختار الأفضل لك
Benefits:
  - أدخل الوزن والوجهة
  - عرض مقارنة أسعار الشركات
  - عرض وقت التسليم المتوقع
  - توصية بالأرخص والأسرع
  - حساب فوري
```

#### Feature 6: لوحة التحكم (Analytics Dashboard)
```
Icon: 📊
Title: لوحة تحكم تحليلية
Description: شوف أداء عملياتك في لمحة
Benefits:
  - إجمالي الشحنات
  - نسبة التوصيل الناجح
  - الشحنات الفاشلة
  - COD المحصّل
  - أفضل شركات الشحن أداءً
```

### ✨ Animations (React Bits)
| Element | Animation |
|---------|-----------|
| Section Title | `SplitText` |
| Feature Cards | `SpotlightCard` - spotlight يتبع الماوس |
| Icons | `Bounce` + `Pulse` on hover |
| Cards Container | `StaggeredFadeIn` - تظهر واحدة واحدة |
| Card Hover | `TiltCard` + `Glow` |
| Background | Subtle `GridPattern` |

### 🎯 Alternative Layout: Bento Grid
يمكن استخدام Bento Grid layout (مثل Apple) للـ features:
- Feature رئيسي كبير (Shipment Management)
- باقي الـ features بأحجام مختلفة
- أكثر جاذبية بصرياً

---

## 7. How It Works

### 📍 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    🎯 إزاي بتشتغل؟                              │
│                    3 خطوات بس وخلاص                             │
│                                                                 │
│      ①                    ②                    ③               │
│   ┌──────┐             ┌──────┐             ┌──────┐           │
│   │  🔗  │─────────────│  📦  │─────────────│  🚀  │           │
│   └──────┘             └──────┘             └──────┘           │
│                                                                 │
│   اربط متجرك         أنشئ الشحنة          تتبع وسلّم          │
│                                                                 │
│   اربط Shopify       اختار شركة           تتبع الشحنة          │
│   أو Easy Orders        الشحن وأنشئ          لحظياً حتى           │
│   في دقيقة          الشحنة               التسليم              │
│                                                                 │
│                    [ابدأ الآن مجاناً]                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 📝 Steps Detail

| Step | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | 🔗 | اربط متجرك | اربط Shopify أو Easy Orders في أقل من دقيقة |
| 2 | 📦 | أنشئ الشحنة | اختار شركة الشحن المناسبة وأنشئ الشحنة |
| 3 | 🚀 | تتبع وسلّم | تتبع الشحنة لحظياً حتى التسليم |

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Steps | `AnimatedBeam` - خط متحرك يربط الخطوات |
| Step Numbers | `CountUp` من 1 لـ 3 |
| Icons | `Bounce` عند الـ scroll |
| Connection Line | `DrawSVG` - الخط يترسم |
| Active Step | `Pulse` + `Glow` |
| CTA | `ShinyButton` |

### 🎯 Interactive Version
- عند السكرول، كل خطوة تضيء بالتتابع
- الخط بين الخطوات يترسم تدريجياً
- يمكن إضافة micro-animation لكل خطوة

---

## 8. Dashboard Preview — Hotspot Interactive Demo

> **✅ القرار المعتمد:** Hotspot Interactive Demo  
> الزائر يحرّك الشاشة، يضغط على أجزاء من الداشبورد، ويتنقل بين views — بدون iframe أو backend.  
> **Anchor:** `#demo` (مرتبط بـ CTA «شاهد العرض التوضيحي» في الـ Hero)

### 📍 Purpose
- إثبات جودة المنتج وبناء الثقة
- محاكاة تجربة استخدام الداشبورد بدون deploy لـ staging
- تحويل الزائر من «شاهد» إلى «جرّب» قبل الـ CTA النهائي
- ربط الـ features اللي اتعرضت في Section 6 بصورة عملية

### 🎯 ليه Hotspot Demo؟

| Approach | القرار |
|----------|--------|
| Screenshot + Video فقط | ❌ مش كفاية — مفيش تفاعل |
| iframe لـ staging | ❌ تقيل، محتاج infra وصيانة |
| Fake UI كامل في React | ⏳ Phase 2 — جهد عالي |
| **Hotspot Interactive Demo** | **✅ المعتمد** — تفاعل مقنع، خفيف، مناسب للـ landing |

### 📋 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              🖥️ شوف روافد وهي شغّالة                           │
│         جرّب الداشبورد بنفسك — اضغط على أي جزء                 │
│                                                                 │
│   [ نظرة عامة ]  [ الشحنات ]  [ المرتجعات ]  ← View Tabs     │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ ● ● ●  demo.rawafid.app                          🔍 − + │   │
│  ├─────────────────────────────────────────────────────────┤   │
│  │                                                         │   │
│  │   ┌─────────┐  ┌─────────┐  ┌─────────┐                │   │
│  │   │ Stat 1 ◉│  │ Stat 2  │  │ Stat 3  │  ← hotspots   │   │
│  │   └─────────┘  └─────────┘  └─────────┘                │   │
│  │                                                         │   │
│  │   ┌──────────────────────────────────────┐             │   │
│  │   │  Shipments Table          [row ◉]    │             │   │
│  │   └──────────────────────────────────────┘             │   │
│  │                                                         │   │
│  │   ◉ = clickable hotspot (pulse ring on idle)           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│   ┌──────────────────────────────────────┐                     │
│   │ 💡 تتبع كل الشحنات من لوحة واحدة    │  ← Tooltip/Popover │
│   └──────────────────────────────────────┘                     │
│                                                                 │
│        [ابدأ تجربتك المجانية]   [احجز Demo]                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 🧭 Views (حالات الداشبورد)

كل tab يبدّل screenshot/state كامل للداشبورد:

| View ID | Tab (AR) | Tab (EN) | المحتوى المعروض |
|---------|----------|----------|-----------------|
| `overview` | نظرة عامة | Overview | Stats + chart + آخر الشحنات |
| `shipments` | الشحنات | Shipments | جدول الشحنات + فلاتر |
| `returns` | المرتجعات | Returns | جدول المرتجعات + حالات |

> **Assets:** 3 screenshots عالية الجودة (أو export من Figma) — مش view واحد بس.

### 🎯 Hotspots (مناطق قابلة للضغط)

| Hotspot ID | View | المنطقة | عند الضغط |
|------------|------|---------|-----------|
| `stat-total` | overview | كارت «إجمالي الشحنات» | Tooltip: إجمالي الشحنات + CountUp animation |
| `stat-delivered` | overview | كارت «تم التسليم» | Tooltip: نسبة النجاح |
| `stat-cod` | overview | كارت «COD محصّل» | Tooltip: COD المحصّل |
| `sidebar-shipments` | overview | Sidebar → الشحنات | ينتقل لـ view `shipments` |
| `sidebar-returns` | overview | Sidebar → المرتجعات | ينتقل لـ view `returns` |
| `shipment-row` | shipments | صف في الجدول | Popover/Modal: تفاصيل shipment وهمية |
| `filter-bar` | shipments | شريط الفلاتر | Tooltip: فلترة حسب الحالة والشركة |
| `create-shipment` | shipments | زر «إنشاء شحنة» | Tooltip: إنشاء شحنة في ثوانٍ |
| `return-row` | returns | صف مرتجع | Popover: دورة حياة المرتجع |
| `return-status` | returns | badge الحالة | Tooltip: تتبع مراحل الاسترجاع |

> Hotspots تظهر كـ **pulse ring** خفيف في idle، وتتوهج عند hover/focus.

### 👆 تفاعلات الزائر

| التفاعل | السلوك | Desktop | Mobile |
|---------|--------|---------|--------|
| **Pan (تحريك)** | سحب داخل إطار الداشبورد | Drag بالماوس | Touch drag |
| **Zoom** | تكبير/تصغير المحتوى | أزرار +/− أو scroll wheel | Pinch-to-zoom + أزرار |
| **Click hotspot** | Tooltip / popover / تبديل view | Click | Tap |
| **View tabs** | تبديل بين الـ 3 views | Click tab | Swipeable tabs |
| **Keyboard** | Tab بين hotspots، Enter يفعّل | ✅ | N/A |

### 📝 Content (i18n)

```typescript
dashboardPreviewSection: {
  ariaLabel: string;
  eyebrow: string;           // "🖥️ شوف روافد وهي شغّالة"
  headline: string;
  subheadline: string;       // "جرّب الداشبورد بنفسك..."
  views: { id, label }[];    // overview | shipments | returns
  hotspots: { id, title, description }[];
  shipmentDetail: { ... };  // بيانات وهمية للـ popover
  cta: { primary, secondary, primaryHref, secondaryHref };
  hints: {
    drag: string;            // "اسحب لاستكشاف الداشبورد"
    click: string;           // "اضغط على النقاط المضيئة"
  };
}
```

### ✨ Animations (React Bits + motion)

| Element | Animation | Description |
|---------|-----------|-------------|
| Section entry | `ScrollReveal` | يظهر عند الوصول للسيكشن |
| Section title | `SplitText` / `BlurText` | عنوان + subheadline |
| Demo container | `TiltCard` | تميل خفيفة مع الماوس (desktop) |
| View transition | `Fade` + `Slide` | crossfade بين screenshots |
| Hotspot idle | `Pulse` ring | حلقة نابضة تجذب الانتباه |
| Hotspot active | `Scale` + `Glow` | عند hover/focus/click |
| Tooltip/Popover | `FadeIn` + `SlideUp` | spring animation |
| Stat values | `CountUp` | عند فتح tooltip للـ stats |
| Tab switch | `LayoutGroup` / underline slide | underline يتحرك للـ tab النشط |
| First visit hint | `FadeIn` → auto-hide | «اضغط على النقاط المضيئة» |

### 🎨 Visual Style
- **Browser chrome** فوق الـ demo (نفس style الـ Hero dashboard frame)
- **Ambient glows** على جانبي السيكشن (consistent مع باقي sections)
- Hotspots: primary color ring + backdrop blur على tooltip
- **Dark/Light theme:** screenshots أو overlay يتكيف مع `data-theme`
- Zoom controls: minimal icons في corner الـ frame

### 📱 Responsive

| Breakpoint | السلوك |
|------------|--------|
| Desktop (>1024px) | TiltCard + pan + zoom كامل + hover tooltips |
| Tablet (640–1024px) | pan + zoom، tabs في صف واحد |
| Mobile (<640px) | tabs scrollable، pinch zoom، tap tooltips، pan مبسّط |
| `prefers-reduced-motion` | بدون tilt/pulse، transitions فورية |

### ♿ Accessibility
- `aria-label` على كل hotspot
- Keyboard navigation: Tab → Enter/Space
- Tooltips: `role="tooltip"` + `aria-describedby`
- Focus ring واضح على hotspots
- Zoom controls: buttons مع labels
- Live region لإعلان تغيير الـ view

### 🛠️ Implementation Plan

> **ملاحظة:** التنفيذ يبدأ بعد مراجعة الـ spec ده.

#### Files
```
src/components/DashboardPreviewSection.astro
src/components/react-bits/DashboardPreviewContent.tsx
src/components/react-bits/DashboardHotspot.tsx
src/components/react-bits/DashboardViewTabs.tsx
src/assets/demo/overview.webp
src/assets/demo/shipments.webp
src/assets/demo/returns.webp
src/i18n/types.ts
src/i18n/translations/ar.ts
src/i18n/translations/en.ts
src/pages/index.astro
src/pages/en/index.astro
```

#### Reuse from existing codebase
- `TiltCard` — container tilt
- `SectionHeader` — eyebrow + headline
- `MouseParallax` patterns — optional subtle parallax on frame
- Hero browser bar styling — consistent demo chrome

#### Component structure
```
DashboardPreviewSection (Astro)
└── DashboardPreviewContent (React, client:visible)
    ├── SectionHeader
    ├── DashboardViewTabs
    └── DemoFrame
        ├── BrowserChrome
        ├── PanZoomContainer
        │   ├── ViewImage (per active view)
        │   └── DashboardHotspot[] (positioned %)
        ├── ZoomControls (+/−/reset)
        └── HintBanner (first visit)
```

#### Hotspot positioning
- Coordinates كنسب مئوية (`top: 32%`, `left: 18%`) — responsive على كل أحجام الشاشة
- Config file أو i18n metadata:
```typescript
{ id: "stat-total", view: "overview", x: 12, y: 28, width: 18, height: 14 }
```

### 🔮 Future Upgrades (Phase 2+)
- [ ] استبدال screenshots بـ Fake UI React كامل
- [ ] iframe لـ `demo.rawafid.com` لما يبقى جاهز
- [ ] Guided tour (Driver.js / react-joyride) — «خطوة بخطوة»
- [ ] Video fallback لمن يفضّل المشاهدة

---

## 9. Integrations Section

### 📍 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              🔗 اربط كل أدواتك                                  │
│              تكاملات جاهزة مع منصاتك المفضلة                    │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                                                         │   │
│  │   ┌─────────────────────────────────────────────────┐  │   │
│  │   │                                                 │  │   │
│  │   │     [Shopify]  ←──→  [Rawafid]  ←──→  [Bosta]  │  │   │
│  │   │                         ↕                       │  │   │
│  │   │     [Easy Orders] ←──→     ↕      ←──→  [Courier] │  │   │
│  │   │                         ↕                       │  │   │
│  │   │     [Custom]   ←──→     ↕      ←──→  [...]     │  │   │
│  │   │                                                 │  │   │
│  │   └─────────────────────────────────────────────────┘  │   │
│  │                                                         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  Stores                          Couriers                       │
│  ┌─────┐ ┌─────┐ ┌─────┐       ┌─────┐ ┌─────┐ ┌─────┐       │
│  │Shpfy│ │EzOrd│ │ API │       │Bosta│ │ C2  │ │ C3  │       │
│  └─────┘ └─────┘ └─────┘       └─────┘ └─────┘ └─────┘       │
│                                                                 │
│  Coming Soon: WooCommerce • Magento • Salla • Zid              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 📝 Integrations List

**Store Integrations:**
| Platform | Status | Description |
|----------|--------|-------------|
| Shopify | ✅ Available | مزامنة تلقائية للأوردرات |
| Easy Orders | ✅ Available | استيراد وتحديث الحالة |
| Custom API | ✅ Available | للمتاجر المخصصة |
| WooCommerce | 🔜 Coming Soon | - |
| Magento | 🔜 Coming Soon | - |
| Salla | 🔜 Coming Soon | - |
| Zid | 🔜 Coming Soon | - |

**Courier Integrations:**
| Courier | Status | Description |
|---------|--------|-------------|
| Bosta | ✅ Available | الشريك الرئيسي |
| + 2 Couriers | ✅ Available | شركات شحن محلية |

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Center Hub (Rawafid) | `Pulse` + `Glow` |
| Connection Lines | `AnimatedBeam` - خطوط متحركة |
| Integration Icons | `Dock` - تكبير عند الـ hover |
| Data Flow | Particles flowing through beams |
| Logos | `FadeIn` staggered |
| Coming Soon | `Blur` + `Opacity` |

### 🎯 Visual Style
- Rawafid في المنتصف كـ hub
- الـ integrations حواليها
- Animated beams توضح flow البيانات

---

## 10. Pricing Section

### 📍 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              💰 خطط تناسب كل الأحجام                            │
│              ابدأ مجاناً، وكبّر حسب احتياجك                     │
│                                                                 │
│       [ Monthly ○ ]  [ ● Annual - وفّر 20% ]                   │
│                                                                 │
│   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│   │              │  │  ⭐ POPULAR  │  │              │        │
│   │   Starter    │  │    Growth    │  │  Enterprise  │        │
│   │              │  │              │  │              │        │
│   │   مجاني      │  │  299 ج.م    │  │   مخصص      │        │
│   │              │  │    /شهرياً   │  │              │        │
│   │ ───────────  │  │ ───────────  │  │ ───────────  │        │
│   │ ✓ 50 شحنة   │  │ ✓ 500 شحنة  │  │ ✓ Unlimited  │        │
│   │ ✓ شركة شحن  │  │ ✓ 3 شركات   │  │ ✓ All        │        │
│   │ ✓ متجر واحد │  │ ✓ 3 متاجر   │  │ ✓ Unlimited  │        │
│   │ ✓ Dashboard │  │ ✓ Analytics  │  │ ✓ API        │        │
│   │              │  │ ✓ Priority   │  │ ✓ Dedicated  │        │
│   │              │  │              │  │              │        │
│   │  [ابدأ مجاناً]│  │  [اشترك الآن]│  │  [تواصل معنا]│        │
│   │              │  │              │  │              │        │
│   └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 📝 Pricing Plans

#### Starter (مجاني)
```
Price: مجاني للأبد
Best for: المتاجر الصغيرة والتجربة

Features:
✓ حتى 50 شحنة/شهر
✓ شركة شحن واحدة
✓ متجر واحد
✓ Dashboard أساسية
✓ تتبع الشحنات
✓ Email support

CTA: ابدأ مجاناً
```

#### Growth (الأكثر شعبية) ⭐
```
Price: 299 ج.م/شهر (أو 239 ج.م سنوياً)
Best for: المتاجر النامية

Features:
✓ حتى 500 شحنة/شهر
✓ 3 شركات شحن
✓ 3 متاجر
✓ Dashboard متقدمة
✓ Analytics وتقارير
✓ إدارة المرتجعات
✓ Priority support
✓ Webhooks

CTA: اشترك الآن
```

#### Enterprise
```
Price: مخصص حسب الاحتياج
Best for: المتاجر الكبيرة والشركات

Features:
✓ شحنات غير محدودة
✓ كل شركات الشحن
✓ متاجر غير محدودة
✓ API access كامل
✓ Dedicated account manager
✓ Custom integrations
✓ SLA guarantee
✓ 24/7 support
✓ On-premise option

CTA: تواصل معنا
```

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Toggle Switch | `Spring` animation |
| Price Change | `CountUp` / `FlipNumbers` |
| Cards | `StaggeredFadeIn` |
| Popular Badge | `Pulse` + `Glow` |
| Card Hover | `Scale` + `Shadow` |
| CTA Buttons | `ShinyButton` / `RippleButton` |
| Checkmarks | `DrawSVG` - يترسم واحد واحد |

### 🎯 Interaction
- Toggle بين Monthly و Annual
- الأسعار تتغير مع animation
- Popular card مميز بـ border/glow

---

## 11. Why Rawafid? (بديل Testimonials للمنصات الناشئة)

> **ملاحظة:** بما إن المنصة لسه جديدة ومفيش testimonials حقيقية، هنستبدل الـ section ده بـ "ليه تختار روافد" - وده أقوى وأصدق من testimonials مزيفة.

### 📍 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              💎 ليه تختار روافد؟                                │
│                                                                 │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   │  🇪🇬             │  │  🔒             │  │  🚀             │
│   │  مصممة للسوق    │  │  بياناتك        │  │  دعم فني       │
│   │  المصري         │  │  في أمان        │  │  سريع          │
│   │                 │  │                 │  │                 │
│   │  نفهم احتياجات  │  │  تشفير كامل    │  │  رد خلال       │
│   │  التاجر المصري  │  │  وحماية قصوى   │  │  ساعات         │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘
│                                                                 │
│   ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   │  ⚡             │  │  💰             │  │  🔄             │
│   │  سهولة          │  │  بدون تكاليف   │  │  تحديثات       │
│   │  الاستخدام      │  │  خفية          │  │  مستمرة        │
│   │                 │  │                 │  │                 │
│   │  واجهة بسيطة   │  │  أسعار واضحة   │  │  ميزات جديدة   │
│   │  وسلسة         │  │  ومباشرة       │  │  كل أسبوع      │
│   └──────────────────┘  └──────────────────┘  └──────────────────┘
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 📝 Why Rawafid Points

| Icon | Title | Description |
|------|-------|-------------|
| 🇪🇬 | مصممة للسوق المصري | نفهم احتياجات التاجر المصري وشركات الشحن المحلية |
| 🔒 | بياناتك في أمان | تشفير كامل للبيانات مع أعلى معايير الحماية |
| 🚀 | دعم فني سريع | فريق دعم متاح للرد على استفساراتك |
| ⚡ | سهولة الاستخدام | واجهة مستخدم بسيطة ومباشرة، مفيش تعقيد |
| 💰 | بدون تكاليف خفية | الأسعار واضحة ومعلنة، مفيش مفاجآت |
| 🔄 | تحديثات مستمرة | ميزات جديدة وتحسينات باستمرار |

### 🎯 Alternative: Comparison Table
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              📊 الفرق بين روافد والطرق التقليدية               │
│                                                                 │
│   ┌────────────────────────────────────────────────────────┐   │
│   │                    │    روافد    │   الطريقة التقليدية │   │
│   ├────────────────────┼─────────────┼────────────────────┤   │
│   │ عدد الداشبوردات   │      1      │        6+          │   │
│   │ وقت إنشاء الشحنة  │   30 ثانية  │     5+ دقائق       │   │
│   │ تتبع موحد        │      ✅     │        ❌          │   │
│   │ مقارنة الأسعار    │    فورية    │       يدوية        │   │
│   │ إدارة المرتجعات   │    منظمة    │       فوضى         │   │
│   └────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Cards | `StaggeredFadeIn` - تظهر بالتتابع |
| Icons | `Bounce` on hover |
| Card Hover | `Scale` + `Glow` |
| Comparison Table | `ScrollReveal` with `SlideUp` |
| Checkmarks | `DrawSVG` animation |

### 📌 Future: Add Testimonials Section
> **ملاحظة للمستقبل:** لما يبقى عندك عملاء فعليين، ممكن:
> 1. تضيف section testimonials منفصل
> 2. أو تبدل الـ section ده بالـ testimonials
> 3. أو تخلي الاتنين موجودين

---

## 12. FAQ Section

### 📍 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│              ❓ أسئلة شائعة                                     │
│                                                                 │
│   ┌──────────────────────────────────────────────────────┐     │
│   │ ▼ إيه شركات الشحن المدعومة؟                         │     │
│   ├──────────────────────────────────────────────────────┤     │
│   │   حالياً بندعم Bosta وشركتين تانيين. وبنضيف         │     │
│   │   شركات جديدة باستمرار حسب طلبات العملاء.           │     │
│   └──────────────────────────────────────────────────────┘     │
│                                                                 │
│   ┌──────────────────────────────────────────────────────┐     │
│   │ ► إزاي أربط متجر Shopify؟                            │     │
│   └──────────────────────────────────────────────────────┘     │
│                                                                 │
│   ┌──────────────────────────────────────────────────────┐     │
│   │ ► إزاي بيشتغل نظام المرتجعات؟                        │     │
│   └──────────────────────────────────────────────────────┘     │
│                                                                 │
│   ┌──────────────────────────────────────────────────────┐     │
│   │ ► فيه API للربط مع أنظمتي؟                           │     │
│   └──────────────────────────────────────────────────────┘     │
│                                                                 │
│   ┌──────────────────────────────────────────────────────┐     │
│   │ ► إيه خطط الأسعار المتاحة؟                           │     │
│   └──────────────────────────────────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 📝 FAQ Content

| Question | Answer |
|----------|--------|
| إيه شركات الشحن المدعومة؟ | حالياً بندعم Bosta وشركات شحن محلية تانية. بنضيف شركات جديدة باستمرار. |
| إزاي أربط متجر Shopify؟ | من خلال صفحة الإعدادات، اختار "إضافة متجر" واتبع خطوات الربط. العملية بتاخد أقل من دقيقة. |
| إزاي بيشتغل نظام المرتجعات؟ | بتنشئ طلب استرجاع، تحدد السبب، وروافد بتنسق مع شركة الشحن لاستلام المرتجع. هتقدر تتبع كل المراحل. |
| فيه API للربط مع أنظمتي؟ | أيوه، في خطة Enterprise بنوفر API كامل للربط مع أي نظام. |
| إيه خطط الأسعار؟ | عندنا 3 خطط: Starter (مجاني)، Growth (299 ج.م/شهر)، و Enterprise (مخصص). |
| أقدر ألغي في أي وقت؟ | أيوه، مفيش عقود طويلة. تقدر تلغي أو تغير خطتك في أي وقت. |
| فيه تجربة مجانية؟ | خطة Starter مجانية للأبد. وخطة Growth فيها 14 يوم trial. |

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Accordion | `Collapse` / `Expand` with spring |
| Icon Rotation | `Rotate` (► to ▼) |
| Content | `FadeIn` + `SlideDown` |
| Section | `ScrollReveal` |

---

## 13. Final CTA Section

### 📍 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
│   ░                                                         ░   │
│   ░              🚀 جاهز تبدأ؟                              ░   │
│   ░                                                         ░   │
│   ░     بطّل تضيّع وقتك في الشغل اليدوي                     ░   │
│   ░     ابدأ دلوقتي واحنا هنساعدك تنظم شحناتك              ░   │
│   ░                                                         ░   │
│   ░        [ابدأ تجربتك المجانية]   [احجز Demo]             ░   │
│   ░                                                         ░   │
│   ░     ✓ 14 يوم مجاناً  ✓ بدون كارت  ✓ إلغاء أي وقت       ░   │
│   ░                                                         ░   │
│   ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 📝 Content

**Headline:**
```
🚀 جاهز تبدأ؟
```

**Subheadline:**
```
بطّل تضيّع وقتك في الشغل اليدوي
ابدأ دلوقتي واحنا هنساعدك تنظم كل شحناتك
```

**CTAs:**
- Primary: `ابدأ تجربتك المجانية`
- Secondary: `احجز Demo`

**Trust Badges:**
```
✓ 14 يوم تجربة مجانية
✓ بدون بطاقة ائتمان
✓ إلغاء في أي وقت
```

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Background | `AnimatedGradient` / `Particles` |
| Headline | `SplitText` + `Glow` |
| CTAs | `Magnet` + `ShinyButton` |
| Section Entry | `ZoomIn` / `FadeUp` |

### 🎨 Visual
- Gradient background (Blue → Purple)
- Subtle animated particles
- High contrast section
- Stands out from rest of page

---

## 14. Footer

### 📍 Layout
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  [Logo: Rawafid روافد]                                         │
│  منصة تشغيل لوجستية للتجارة الإلكترونية                         │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  المنتج          الشركة          الدعم           تواصل معنا    │
│  ─────────      ─────────      ─────────        ─────────     │
│  الميزات         عن روافد       مركز المساعدة    [📧] Email    │
│  التكاملات       الوظائف        التوثيق          [📱] Phone    │
│  الأسعار         المدونة        حالة النظام      [📍] Address  │
│  التحديثات       اتصل بنا       API Docs                       │
│                                                                 │
│  ─────────────────────────────────────────────────────────────  │
│                                                                 │
│  [🌐] [📘] [🐦] [📷]                     © 2024 Rawafid        │
│                                                                 │
│                [سياسة الخصوصية] [الشروط والأحكام]              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### 📝 Footer Links

**المنتج (Product)**
- الميزات (Features)
- التكاملات (Integrations)
- الأسعار (Pricing)
- التحديثات (Updates/Changelog)

**الشركة (Company)**
- عن روافد (About)
- الوظائف (Careers)
- المدونة (Blog)
- اتصل بنا (Contact)

**الدعم (Support)**
- مركز المساعدة (Help Center)
- التوثيق (Documentation)
- حالة النظام (System Status)
- API Documentation

**تواصل معنا (Contact)**
- Email: hello@rawafid.com
- Phone: +20 XXX XXX XXXX
- Address: Cairo, Egypt

**Social Links**
- LinkedIn
- Facebook
- Twitter/X
- Instagram

### ✨ Animations
| Element | Animation |
|---------|-----------|
| Links | `Underline` on hover |
| Social Icons | `Scale` + `Glow` on hover |
| Back to Top | `FadeIn` on scroll |

---

## 📱 Responsive Considerations

### Mobile Breakpoints
```
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
```

### Mobile Specific
- Hamburger menu
- Stacked layouts
- Reduced animations
- Touch-friendly CTAs
- Swipeable carousels

---

## 🎯 Performance Guidelines

### Animation Performance
- Use `transform` and `opacity` only
- Avoid animating `width`, `height`, `top`, `left`
- Use `will-change` sparingly
- Implement `prefers-reduced-motion`
- Lazy load below-fold animations

### Loading Priority
1. Navbar + Hero (critical)
2. Social Proof
3. Rest of page (lazy)

---

## 📋 Implementation Checklist

- [ ] Setup React Bits library
- [ ] Create reusable animation components
- [ ] Build Navbar with scroll effects
- [ ] Build Hero with all animations
- [ ] Build Market Problem Stats with counters (بديل Social Proof)
- [ ] Build Problem section
- [ ] Build Solution section
- [ ] Build Features with SpotlightCard
- [ ] Build How It Works with AnimatedBeam
- [ ] Build Dashboard Preview — Hotspot Interactive Demo (#demo)
- [ ] Build Integrations with connections
- [ ] Build Pricing with toggle
- [ ] Build Why Rawafid section (بديل Testimonials)
- [ ] Build FAQ accordion
- [ ] Build Final CTA
- [ ] Build Footer
- [ ] Mobile responsive
- [ ] Performance optimization
- [ ] Accessibility audit

### 🔮 Future Additions (لما يبقى عندك عملاء):
- [ ] Add real Social Proof section
- [ ] Add Testimonials carousel
- [ ] Add Case Studies page
- [ ] Add customer logos

---

## 🔗 Resources

- [React Bits Documentation](https://react-bits.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP](https://greensock.com/gsap/)

---

**Ready for review and feedback! 🚀**
