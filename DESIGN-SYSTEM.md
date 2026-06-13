# 🎨 Rawafid (روافد) Design System

Enterprise-grade design system inspired by Stripe, Linear, Ramp, and Vercel.

---

## 📋 Table of Contents

1. [Color System](#color-system)
2. [Theme Support (Light/Dark)](#theme-support)
3. [Typography](#typography)
4. [Spacing](#spacing)
5. [Components](#components)
6. [Animation](#animation)
7. [Layout](#layout)
8. [Best Practices](#best-practices)

---

## 🎨 Color System

### 🌓 Theme Support (Light & Dark Mode)

Rawafid (روافد) supports both **Light Mode** and **Dark Mode** with:

✨ **Features:**
- 🌓 Automatic system preference detection
- 💾 User preference persistence (localStorage)
- ⚡ Zero flash on page load (FOUC prevention)
- 🎨 Smooth transitions between themes
- ♿ Accessible theme toggle button

**Implementation:**
```html
<!-- Add to <head> to prevent flash -->
<ThemeScript />

<!-- Add theme toggle to navbar -->
<ThemeToggle />
```

### Primary Colors

```css
--color-primary: #2563EB        /* Main brand blue */
--color-primary-light: #3B82F6  /* Hover states */
--color-primary-dark: #1D4ED8   /* Active states */
```

**Usage:**
- CTAs and primary actions
- Links and interactive elements
- Focus states

### Secondary Colors

```css
--color-secondary: #0F172A      /* Navy blue */
--color-secondary-light: #1E293B
--color-secondary-dark: #020617
```

**Usage:**
- Dark sections backgrounds
- Text headings
- Navigation bar

### Accent Colors

```css
--color-accent: #22C55E         /* Success green */
--color-accent-light: #4ADE80
--color-accent-dark: #16A34A
```

**Usage:**
- Success states
- Tracking indicators
- Confirmations
- Feature highlights

### Light Mode Colors

| Element | Color | Usage |
|---------|-------|-------|
| Background Primary | `#FFFFFF` | Main page background |
| Background Secondary | `#F8FAFC` | Alternate sections |
| Text Primary | `#0F172A` | Headings, important text |
| Text Secondary | `#64748B` | Body text, descriptions |
| Borders | `#E2E8F0` | Cards, dividers |

### Dark Mode Colors

| Element | Color | Usage |
|---------|-------|-------|
| Background Primary | `#0F172A` | Main page background |
| Background Secondary | `#1E293B` | Alternate sections, cards |
| Text Primary | `#F8FAFC` | Headings, important text |
| Text Secondary | `#94A3B8` | Body text, descriptions |
| Borders | `#334155` | Cards, dividers |

### Using Theme Colors

```css
/* Colors automatically adapt to theme */
.my-component {
  background: var(--bg-primary);
  color: var(--color-gray-900);
  border: 1px solid var(--border-primary);
}
```

---

## 📝 Typography

### Font Family

```css
--font-primary: 'Inter', system-ui, sans-serif
--font-mono: 'JetBrains Mono', monospace
```

### Type Scale

| Class | Size | Weight | Usage |
|-------|------|--------|-------|
| `.text-display-1` | 72px | Bold | Hero headlines |
| `.text-display-2` | 60px | Bold | Section headers |
| `.text-h1` | 48px | Bold | Page titles |
| `.text-h2` | 36px | Semibold | Section titles |
| `.text-h3` | 30px | Semibold | Card titles |
| `.text-h4` | 24px | Semibold | Subsection titles |
| `.text-body-large` | 20px | Normal | Large body text |
| `.text-body` | 16px | Normal | Body text |
| `.text-body-small` | 14px | Normal | Small text |
| `.text-caption` | 12px | Medium | Labels, captions |

### Examples

```html
<!-- Hero Headline -->
<h1 class="text-display-1">
  Manage All Your Shipping Operations
</h1>

<!-- Section Title -->
<h2 class="text-h2">
  Enterprise Features
</h2>

<!-- Body Text -->
<p class="text-body-large">
  Rawafid (روافد) helps e-commerce businesses manage shipments...
</p>
```

---

## 📐 Spacing System

Based on 8pt grid system (Swiss Design principles)

```css
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
--space-32: 128px
```

### Usage Guidelines

- **Micro spacing** (1-3): Icons, badges, tight layouts
- **Component spacing** (4-8): Padding, gaps, margins
- **Section spacing** (12-24): Between sections
- **Macro spacing** (32+): Hero sections, page-level spacing

---

## 🎯 Components

### Theme Toggle

```html
<ThemeToggle />
```

Features:
- Smooth icon transitions
- Accessible (ARIA labels)
- Keyboard navigable
- Remembers user preference

### Buttons

#### Primary Button
```html
<button class="btn btn-primary">
  Start Free Trial
</button>
```

#### Secondary Button
```html
<button class="btn btn-secondary">
  Learn More
</button>
```

#### Button Sizes
```html
<button class="btn btn-primary btn-large">Large</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-small">Small</button>
```

### Cards

#### Basic Card
```html
<div class="card">
  <h3 class="text-h4">Feature Title</h3>
  <p class="text-body">Description...</p>
</div>
```

#### Feature Card (with hover effects)
```html
<div class="card-feature">
  <div class="icon">📦</div>
  <h3 class="text-h3">Shipment Management</h3>
  <p class="text-body">Manage all shipments from one dashboard</p>
</div>
```

---

## 🎬 Animation System

### Transitions

```css
--transition-fast: 150ms     /* Micro interactions */
--transition-base: 250ms     /* Standard transitions */
--transition-slow: 350ms     /* Complex animations */
```

### Animation Classes

```html
<!-- Fade In -->
<div class="animate-fade-in">Content</div>

<!-- Fade Up (entrance) -->
<div class="animate-fade-up">Content</div>

<!-- Float (continuous) -->
<div class="animate-float">Icon</div>
```

---

## ✨ Theme-Specific Effects

### Dark Mode Only Content

```html
<!-- Only visible in dark mode -->
<div class="dark-mode-only">
  Dark mode exclusive content
</div>

<!-- Only visible in light mode -->
<div class="light-mode-only">
  Light mode exclusive content
</div>
```

### Enhanced Glows in Dark Mode

```html
<!-- Stronger glow effect in dark mode -->
<div class="card-feature glow-primary">
  Content with blue glow
</div>
```

---

## 🎯 Best Practices

### Theme Implementation

✅ **DO:**
- Use CSS variables for all colors
- Test in both light and dark modes
- Ensure sufficient contrast in both themes
- Provide smooth transitions
- Remember user preference

❌ **DON'T:**
- Hardcode color values
- Forget to test dark mode
- Use low contrast in dark mode
- Flash content on load

### Color Usage

✅ **DO:**
- Use primary blue for main CTAs
- Use accent green for success states
- Maintain color contrast ratios (WCAG AA)
- Use semantic colors consistently

❌ **DON'T:**
- Mix too many colors in one section
- Use low contrast combinations
- Override brand colors

---

## 📦 Implementation Guide

### 1. Setup Theme Detection

Add to Layout.astro `<head>`:
```astro
---
import ThemeScript from '../components/ThemeScript.astro';
---

<head>
  <ThemeScript />
  <!-- Other head content -->
</head>
```

### 2. Add Theme Toggle

Add to Navbar component:
```astro
---
import ThemeToggle from '../components/ThemeToggle.astro';
---

<nav>
  <!-- Other nav items -->
  <ThemeToggle />
</nav>
```

### 3. Use Theme-Aware Colors

```css
.my-component {
  background: var(--bg-primary);
  color: var(--color-gray-900);
  border: 1px solid var(--border-primary);
}
```

The colors will automatically adapt based on the active theme!

---

## 🧪 Testing Checklist

- [ ] Test in both light and dark modes
- [ ] Verify no FOUC (Flash of Unstyled Content)
- [ ] Check contrast ratios in both modes
- [ ] Test theme toggle functionality
- [ ] Verify localStorage persistence
- [ ] Test system preference detection
- [ ] Check smooth theme transitions
- [ ] Verify all components in dark mode
- [ ] Test on multiple browsers
- [ ] Check accessibility with screen readers

---

## 📱 Responsive Behavior

Theme toggle scales appropriately:
- Desktop: 48px × 48px
- Mobile: 40px × 40px

```css
@media (max-width: 768px) {
  .theme-toggle {
    width: 40px;
    height: 40px;
  }
}
```

---

## 🎨 Color Combinations

### Light Mode Combinations

| Background | Text | Border | Usage |
|------------|------|--------|-------|
| White | Gray-900 | Gray-200 | Light sections |
| Gray-50 | Gray-900 | Gray-200 | Alternate sections |
| Primary | White | Primary-dark | CTAs |

### Dark Mode Combinations

| Background | Text | Border | Usage |
|------------|------|--------|-------|
| Navy (#0F172A) | Gray-50 | Gray-700 | Dark sections |
| Gray-800 | Gray-100 | Gray-600 | Cards |
| Primary | White | Primary-dark | CTAs |

---

## ♿ Accessibility

- All color combinations meet WCAG AA standards
- Theme toggle has proper ARIA labels
- Keyboard navigation supported
- Screen reader friendly
- Respects prefers-reduced-motion
- High contrast in both modes

---

**Built with precision for Rawafid (روافد) — The Operating System for E-commerce Logistics** 🚚✨
