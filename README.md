# OpenClaw Super Guide

Production-ready Next.js sales site for the OpenClaw Super Guide — a comprehensive PDF product for deploying OpenClaw AI on Windows, macOS, Docker, and Kali Linux.

## Live Site
- Production: https://moneyapp-sepia.vercel.app

## Tech Stack
- **Next.js 14** — App Router, React Server Components
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Subtle reveal animations
- **shadcn/ui** — Reusable component patterns
- **Stripe** — Payment processing with webhooks

## Installation

```bash
# Clone and navigate to the project
cd money_app

# Install dependencies
npm install
```

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

### Required Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `STRIPE_SECRET_KEY` | Stripe secret key (sk_*) | Yes |
| `STRIPE_WEBHOOK_SECRET` | Webhook endpoint secret (whsec_*) | Yes |
| `PRODUCT_PRICE_ID` | Stripe Price ID for the guide | Yes |
| `NEXT_PUBLIC_BASE_URL` | Your production domain | Yes |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key (pk_*) | Yes |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_CHECKOUT_URL` | Direct checkout URL (disables Stripe) | — |
| `NEXT_PUBLIC_PRICE` | Display price | 39 |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console verification | — |

## Development

```bash
# Start development server
npm run dev

# Server runs on http://localhost:3000
```

## Build

```bash
# Create production build
npm run build

# Output is in ./dist (static export)
```

## Start (Production)

```bash
# After building, start the production server
npm run start
```

## Project Structure

```
app/
├── api/
│   ├── checkout/route.ts      # Stripe checkout session
│   └── webhook/route.ts       # Stripe webhook handler
├── page.tsx                    # Homepage with all sections
├── layout.tsx                  # Root layout with SEO
├── globals.css                 # Global styles
├── sitemap.ts                  # Dynamic sitemap
├── robots.ts                   # Robots.txt
├── thanks/page.tsx             # Post-purchase page
├── support/page.tsx            # Support page
├── terms/page.tsx              # Terms of Service
├── privacy/page.tsx            # Privacy Policy
└── success/page.tsx            # Redirects to /thanks

components/
├── ui/                         # shadcn-style components
│   ├── button.tsx
│   ├── card.tsx
│   ├── badge.tsx
│   └── accordion.tsx
├── motion.tsx                  # Framer Motion wrappers
├── Header.tsx                  # Sticky navigation
├── Hero.tsx                    # Hero section
├── CredibilityStrip.tsx        # Logo strip
├── ProblemSolution.tsx         # Problem/solution split
├── ModulesTOC.tsx              # 12 modules accordion
├── Templates.tsx               # Template grid + snippet
├── WhoItsFor.tsx               # Target audience
├── Pricing.tsx                 # Pricing card
├── FAQ.tsx                     # FAQ accordion
├── FinalCTA.tsx                # Bottom call-to-action
└── Footer.tsx                  # Footer with links

lib/
├── content.ts                  # All site content/data
└── utils.ts                    # Utility functions (cn)

public/
├── guide.pdf                   # The PDF product
├── icon.svg                    # SVG favicon
├── apple-touch-icon.png        # iOS icon
└── og-image.svg                # Open Graph image
```

## Asset Locations

| Asset | Location | Notes |
|-------|----------|-------|
| PDF Product | `public/guide.pdf` | Replace with new version |
| Favicon | `public/icon.svg` | SVG format, 32x32 |
| Apple Icon | `public/apple-touch-icon.png` | 180x180 PNG/SVG |
| OG Image | `public/og-image.svg` | 1200x630 |
| Content | `lib/content.ts` | All copy, pricing, features |

## Launch Checklist

- [ ] Set up Stripe account and create product/price
- [ ] Add all required environment variables to Vercel
- [ ] Configure webhook endpoint in Stripe Dashboard
- [ ] Test checkout flow in test mode
- [ ] Replace `public/guide.pdf` with actual product PDF
- [ ] Update `NEXT_PUBLIC_BASE_URL` with production domain
- [ ] Add Google Search Console verification (optional)
- [ ] Update social links in `lib/content.ts`
- [ ] Test all pages (/, /thanks, /terms, /privacy, /support)
- [ ] Run `npm run build` and verify no errors
- [ ] Deploy to Vercel
- [ ] Test webhook with Stripe CLI
- [ ] Switch to live Stripe keys
- [ ] Test complete purchase flow end-to-end

## Content Updates

All content is centralized in `lib/content.ts`. Edit this file to update:

- Site metadata (title, description, price)
- Navigation links
- Hero copy
- Module list (12 modules)
- Features and pricing
- FAQ items
- Footer links

## Stripe Webhook Setup

1. Install Stripe CLI locally for testing:
```bash
stripe listen --forward-to localhost:3000/api/webhook
```

2. Add the webhook signing secret to `.env.local`:
```
STRIPE_WEBHOOK_SECRET=whsec_...
```

3. In production, add the endpoint in Stripe Dashboard:
   - URL: `https://your-domain.vercel.app/api/webhook`
   - Events: `checkout.session.completed`

## Troubleshooting

### Build fails with "window is not defined"
Ensure all client-side code uses `"use client"` directive.

### Checkout button is disabled
Set `NEXT_PUBLIC_CHECKOUT_URL` or configure Stripe properly. Button shows "Coming Soon" when checkout is unavailable.

### PDF not downloading
Verify `public/guide.pdf` exists and is readable.

### Animations not working
Framer Motion requires client components. Check for `"use client"` directive.

## License

Private — All rights reserved.

## Contact

- X/Twitter: [@OpenClaw042375](https://x.com/OpenClaw042375)
- Email: support@openclaw.guide
