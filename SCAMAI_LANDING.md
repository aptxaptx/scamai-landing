# Scam.ai Landing Page - Reality Inc.

## 🎨 High-End Landing Page Built

A complete, production-ready landing page matching the "Pixel Point" YouTube aesthetic with developer-centric design.

## 🚀 Access the Page

**URL:** `http://localhost:3000/en/scamai`

## ✨ What Was Built

### 1. **Design System**
- **Background:** `#030303` (Deep black)
- **Primary Color:** `#CCFF00` (Cyber Lime) for highlights, buttons, glows
- **Typography:** Inter & Geist Mono fonts
- **Style:** Glassmorphism cards with subtle border glows

### 2. **Components Created** (`/src/components/scamai/`)

#### Navigation.tsx
- Sticky transparent header with backdrop blur
- Reality Inc. logo with icon
- "Get Started" CTA button with Cyber Lime outline
- Smooth scroll navigation links

#### HeroSection.tsx
- Headline: "Deepfake Detection for the Self-Serve Era"
- Animated gradient orbs background
- Grid pattern overlay
- Live code snippet demo (glassmorphic card)
- Dual CTAs: Primary (Cyber Lime) + Secondary (outlined)
- Scroll-reveal animations with Framer Motion

#### BentoFeatures.tsx
- 4-card grid layout showcasing:
  1. **Instant API Access** - Code snippet visual
  2. **99.9% Accuracy** - Animated radial chart
  3. **Multi-modal** - Video/Audio/Image icons
  4. **Zero Friction** - "No Contact Sales" badge with strikethrough
- Hover effects and glassmorphism styling

#### ComparisonTable.tsx
- Disruptive comparison vs. "Legacy Competitors"
- Features: Scam.ai vs. Reality Defender vs. Resemble.ai
- Highlights: Self-Serve, Transparent Pricing, Pay-per-Scan
- Check/X icons with Cyber Lime highlights
- Bottom CTA section

#### PricingCalculator.tsx
- Interactive slider (1K - 1M scans/month)
- Volume-based tiered pricing:
  - 0-10K: $0.05/scan
  - 10K-50K: $0.04/scan
  - 50K-100K: $0.03/scan
  - 100K-500K: $0.02/scan
  - 500K+: $0.01/scan
- Real-time price calculation
- Savings indicator
- Pricing tiers breakdown table

#### CTAFooter.tsx
- Final push: "Build on Reality"
- Trust indicators (60 seconds, 99.9%, $0.01+)
- Dual CTAs with glow effects
- Footer links (Privacy, Terms, API Docs, Support)

### 3. **Technical Features**
✅ Framer Motion scroll-reveal animations  
✅ Glassmorphism card styling (`.glass-card` utility)  
✅ Fully responsive (mobile-first)  
✅ Lucide React icons throughout  
✅ Custom Cyber Lime color palette  
✅ Dark mode only (per requirements)  
✅ Zero linter errors  
✅ Production build tested  

## 🎯 Key Features

- **Self-Serve Focus:** No "Contact Sales" friction
- **Transparent Pricing:** Interactive calculator with volume discounts
- **Developer-Centric:** Code snippets, API-first messaging
- **High-Fidelity UI:** Mesh gradients, border glows, glassmorphism
- **Smooth Animations:** Scroll-triggered reveals, hover states

## 📁 File Structure

```
src/
├── app/
│   ├── globals.css (Updated with Cyber Lime palette)
│   └── [locale]/(site)/scamai/page.tsx (Main landing page)
└── components/scamai/
    ├── Navigation.tsx
    ├── HeroSection.tsx
    ├── BentoFeatures.tsx
    ├── ComparisonTable.tsx
    ├── PricingCalculator.tsx
    └── CTAFooter.tsx
```

## 🛠️ Custom CSS Classes

- `.glass-card` - Glassmorphism effect
- `.cyber-glow` - Cyber Lime glow effect
- CSS variables: `--cyber-lime`, `--cyber-lime-dim`, `--cyber-lime-glow`

## 🎨 Color Palette

```css
--bg: #030303 (Background)
--panel: #0a0a0a (Panels)
--cyber-lime: #CCFF00 (Primary)
--text: #fafafa (Text)
--text-soft: #a1a1aa (Muted text)
```

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## ✅ Build Status

- **Linter:** ✅ No errors
- **Build:** ✅ Successful
- **Server:** ✅ Running on port 3000

## 🚀 Next Steps

1. Visit `http://localhost:3000/en/scamai` to see the landing page
2. Test all interactive elements (slider, buttons, navigation)
3. Adjust content/copy as needed
4. Connect CTAs to your API signup flow
5. Deploy to production

---

**Built with:** Next.js 15, Tailwind CSS 4, Framer Motion, Lucide React  
**Theme:** Dark Mode Only (Pixel Point aesthetic)  
**Company:** Reality Inc. | Scam.ai
