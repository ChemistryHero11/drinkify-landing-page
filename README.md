# Drinkify Landing Page 🍸

A premium, mobile-first landing page for Drinkify - the tech-forward company that gamifies the bar experience. Built with Next.js 14, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark Mode Design** - Nightclub atmosphere with neon accents
- **Mobile-First** - Responsive design optimized for all devices
- **Interactive Animations** - Smooth micro-interactions with Framer Motion
- **Product Showcase** - 3D flip cards for MarketBar, TriviaTap, and Spin-the-Shot
- **Dynamic Pricing Ticker** - Live-updating price simulation for MarketBar
- **Animated Counter Stats** - Intersection observer-triggered count-up animations
- **Liquid Card Stack Testimonials** - Auto-rotating testimonial cards
- **Easter Eggs** - Konami code and cursor glow effects
- **SEO Optimized** - Proper meta tags and Open Graph setup

## 🎨 Design System

### Colors
- **Night Ink** `#0D0D12` - Primary background
- **Electric Mint** `#00FFC2` - Primary accent
- **Aperol Coral** `#FF5E5B` - CTA/hover states
- **Slate Silver** `#ABB1C4` - Secondary text

### Typography
- **Headings**: Sora (600-700)
- **Body**: Inter (400-500)
- **Monospace**: Space Mono (for numbers/tickers)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Environment Variables

Create a `.env.local` file in the root directory:

```env
# Newsletter Integration (SendGrid/Supabase)
NEXT_PUBLIC_SENDGRID_API_KEY=your_sendgrid_api_key
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## 📱 Sections Overview

1. **Hero** - Full-screen gradient with animated bubbles
2. **Product Showcase** - Interactive 3D flip cards
3. **How It Works** - 3-step timeline with animations
4. **Impact Stats** - Animated counters with intersection observer
5. **Testimonials** - Rotating card stack
6. **Tech Integrations** - Partner logos with hover effects
7. **Pricing Preview** - Monthly/annual toggle with modals
8. **Newsletter** - Email capture with success states
9. **Footer** - 4-column layout with easter egg

## 🎮 Easter Eggs

- **Konami Code**: ↑↑↓↓←→←→BA - Triggers "Happy Hour Unlocked" with confetti
- **Martini Hover**: Hover over footer martini icon for bubble animation
- **Cursor Glow**: Subtle mint glow follows cursor (desktop only)

## 🔧 Key Dependencies

- **Next.js 14** - React framework
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Viewport detection

## 📊 Performance

- **LCP Target**: < 1.2s on 3G
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: 100/100 Lighthouse score target
- **Animation**: Respects `prefers-reduced-motion`

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm run build
# Upload /out directory to Netlify
```

### Docker
```bash
docker build -t drinkify-landing .
docker run -p 3000:3000 drinkify-landing
```

## 📝 License

© 2025 Drinkify. All rights reserved.

---

Built with ❤️ and 🍸 for the future of bar technology.
