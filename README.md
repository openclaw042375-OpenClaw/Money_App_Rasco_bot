# Money_App_Rasco_bot

Production-ready Next.js sales site for a digital PDF product.

## Live
- https://moneyapp-sepia.vercel.app

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Stripe Checkout + webhook
- Vercel deployment

## Local dev
```bash
npm install
npm run dev
```

## Environment
Create `.env.local` with:
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `PRODUCT_PRICE_ID`
- `STRIPE_WEBHOOK_SECRET`
- `DOWNLOAD_SECRET`
- `NEXT_PUBLIC_BASE_URL`
