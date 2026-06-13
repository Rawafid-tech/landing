# 🚚 Rawafid (روافد)

<div align="center">

![Rawafid (روافد) Logo](public/favicon.svg)

**روافد — Rawafid**

**The Operating System for E-commerce Logistics**

A premium, enterprise-grade landing page built with modern web technologies for a SaaS logistics platform.

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?style=for-the-badge&logo=astro)](https://astro.build)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[View Demo](#) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📖 Table of Contents

- [About روافد / Rawafid](#-about-روافد--rawafid)
- [Project Overview](#-project-overview)
- [Tech Stack](#-tech-stack)
- [Design System](#-design-system)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 About روافد / Rawafid

**Rawafid (روافد)** is a comprehensive logistics operating system designed for e-commerce businesses. It centralizes:

- 📦 **Shipment Management** - Manage all shipments from one unified dashboard
- 🔄 **Returns Management** - Streamlined returns workflow
- 🚚 **Multi-Courier Integration** - Connect with multiple shipping providers
- 📊 **Real-time Tracking** - Track all deliveries in real-time
- 💰 **Smart Pricing** - Compare courier prices and optimize costs
- 📈 **Analytics Dashboard** - Business insights and metrics

### 🎯 Target Market

E-commerce businesses in Egypt and MENA region looking to:
- Streamline shipping operations
- Reduce manual processing
- Integrate multiple couriers (Bosta, local partners)
- Manage returns efficiently
- Track COD payments
- Connect stores (Shopify, EzOrders, Custom APIs)

---

## 💼 Project Overview

This repository contains the **marketing landing page** for **Rawafid (روافد)** — the primary entry point for customer acquisition and conversion.

### Goals

✅ Communicate premium SaaS positioning  
✅ Showcase logistics infrastructure capabilities  
✅ Drive conversions (Free Trial + Demo bookings)  
✅ Achieve Lighthouse score 95+  
✅ Deliver enterprise-grade user experience  

### Design Philosophy

Inspired by world-class SaaS companies:
- **Stripe** - Premium feel, clean UI
- **Linear** - Smooth animations, attention to detail
- **Ramp** - Enterprise positioning
- **Vercel** - Modern aesthetic
- **Notion** - User-friendly approach

---

## 🛠 Tech Stack

### Core Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| [Astro](https://astro.build) | Static Site Generator | Latest |
| [TypeScript](https://www.typescriptlang.org/) | Type Safety | 5.x |
| [Tailwind CSS](https://tailwindcss.com) | Utility-First CSS | 4.x |
| [Framer Motion](https://www.framer.com/motion/) | Animations | Latest |
| [GSAP](https://greensock.com/gsap/) | Advanced Animations | Latest |

### Why These Technologies?

**⚡ Astro**
- Lightning-fast performance (zero JS by default)
- SEO-optimized out of the box
- Island architecture for interactive components
- Perfect for marketing landing pages

**🎨 Tailwind CSS**
- Rapid development
- Consistent design system
- Responsive utilities
- Custom design system integration

**✨ Animation Libraries**
- Framer Motion for React-like components
- GSAP for scroll-based animations
- Smooth, premium feel

---

## 🎨 Design System

We've built a comprehensive design system inspired by Swiss minimalism and enterprise SaaS aesthetics.

### Color Palette

```css
Primary Blue:    #2563EB  /* CTAs, highlights */
Secondary Navy:  #0F172A  /* Backgrounds, sections */
Accent Green:    #22C55E  /* Success, tracking */
```

### Typography

- **Font Family**: Inter (Primary), JetBrains Mono (Monospace)
- **Scale**: 8pt grid system
- **Weights**: Regular (400), Medium (500), Semibold (600), Bold (700)

### Components

- ✅ Premium buttons with hover effects
- ✅ Feature cards with animations
- ✅ Glassmorphism elements
- ✅ Gradient backgrounds
- ✅ Shadow system
- ✅ Responsive grid layouts

📚 **Full Documentation**: See [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)

---

## ✨ Features

### Landing Page Sections

1. **Hero Section**
   - Compelling headline
   - Clear value proposition
   - Dual CTAs (Trial + Demo)
   - Animated UI elements

2. **Problem & Solution**
   - Address pain points
   - Present Rawafid (روافد) as the solution

3. **Features Showcase**
   - Shipment management
   - Returns handling
   - Store integrations
   - Multi-courier system
   - Analytics dashboard

4. **How It Works**
   - Step-by-step workflow
   - Visual progression
   - Scroll-triggered animations

5. **Dashboard Preview**
   - Real product screenshots
   - Interactive elements
   - Parallax effects

6. **Integrations**
   - Shopify, EzOrders, APIs
   - Coming soon: WooCommerce, Magento

7. **Courier Partners**
   - Bosta and local partners
   - Price comparison
   - Unified tracking

8. **Pricing**
   - Starter, Growth, Enterprise tiers
   - Feature comparison
   - Highlighted recommended plan

9. **FAQ**
   - Common questions
   - Quick answers

10. **Final CTA**
    - Strong closing message
    - Clear next steps

### Technical Features

- ⚡ Optimized performance (Lighthouse 95+)
- 📱 Fully responsive design
- ♿ WCAG AA accessibility
- 🎬 Smooth scroll animations
- 🖼️ Lazy-loaded images
- 🔍 SEO optimized
- 🌐 OpenGraph support
- 📊 Structured data (Schema.org)

---

## 📁 Project Structure

```text
rawafid/
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   └── (images, assets)
│
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   │
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── Dashboard.astro
│   │   ├── Pricing.astro
│   │   ├── FAQ.astro
│   │   ├── Footer.astro
│   │   └── DesignSystemExample.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   └── styles/
│       ├── design-system.css    # Design tokens & system
│       └── global.css            # Global styles & resets
│
├── .astro/
├── .vscode/
├── node_modules/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── project-info.md               # Product requirements
├── DESIGN-SYSTEM.md              # Design documentation
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **pnpm**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/rawafid.git
cd rawafid
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Open browser**

Navigate to `http://localhost:4321`

---

## 💻 Development

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview build locally |
| `npm run astro check` | Check TypeScript types |
| `npm run astro -- --help` | Get CLI help |

### Development Workflow

1. **Create components** in `src/components/`
2. **Follow design system** variables from `design-system.css`
3. **Use Tailwind utilities** for rapid styling
4. **Test responsiveness** across devices
5. **Check performance** with Lighthouse
6. **Verify accessibility** with axe DevTools

### Design System Usage

```astro
---
// Example Component
---

<section class="section">
  <div class="container">
    <h2 class="text-h2 mb-8">Section Title</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="card-feature">
        <h3 class="text-h3">Feature Title</h3>
        <p class="text-body">Description...</p>
      </div>
    </div>
    
    <button class="btn btn-primary btn-large">
      Call to Action
    </button>
  </div>
</section>
```

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Output will be in `./dist/` directory.

### Deployment Platforms

Recommended platforms for Astro static sites:

- **Vercel** ⭐ (Recommended)
- **Netlify**
- **Cloudflare Pages**
- **AWS Amplify**
- **GitHub Pages**

### Vercel Deployment

```bash
npm i -g vercel
vercel
```

---

## ⚡ Performance

### Performance Targets

- ✅ **Lighthouse Score**: 95+
- ✅ **First Contentful Paint**: < 1.5s
- ✅ **Largest Contentful Paint**: < 2.5s
- ✅ **Time to Interactive**: < 3.5s
- ✅ **Cumulative Layout Shift**: < 0.1

### Optimization Techniques

- 🖼️ Lazy loading images
- ⚡ Minimal JavaScript (Astro Islands)
- 🗜️ Automatic asset optimization
- 📦 Code splitting
- 🎯 Critical CSS inlining
- 🌐 CDN delivery

---

## 🎨 Design Tokens

### Spacing (8pt Grid)

```css
--space-2: 8px
--space-4: 16px
--space-6: 24px
--space-8: 32px
--space-12: 48px
--space-16: 64px
```

### Transitions

```css
--transition-fast: 150ms
--transition-base: 250ms
--transition-slow: 350ms
```

### Shadows

```css
--shadow-sm: Subtle shadow
--shadow-base: Default shadow
--shadow-lg: Large shadow
--shadow-glow-primary: Blue glow
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow existing code patterns
- Use design system variables
- Write semantic HTML
- Ensure accessibility
- Test responsiveness

---

## 📝 Documentation

- [Project Info](./project-info.md) - Product requirements and specifications
- [Design System](./DESIGN-SYSTEM.md) - Complete design documentation
- [Astro Docs](https://docs.astro.build) - Framework documentation
- [Tailwind Docs](https://tailwindcss.com/docs) - Utility classes reference

---

## 🔗 Links

- **Website**: [rawafid.app](#) (coming soon)
- **Documentation**: [docs.rawafid.app](#) (coming soon)
- **API**: [api.rawafid.app](#) (coming soon)

---

## 📧 Contact

For questions or support:

- Email: hello@rawafid.app
- Twitter: [@rawafidapp](#)
- LinkedIn: [Rawafid (روافد)](#)

---

## 📄 License

This project is proprietary software. All rights reserved.

---

## 🙏 Acknowledgments

- [Astro](https://astro.build) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com) for the utility-first approach
- Design inspiration: Stripe, Linear, Ramp, Vercel, Notion

---

<div align="center">

**Built with ❤️ for the future of e-commerce logistics**

[⬆ Back to Top](#-rawafid-روافد)

</div>
