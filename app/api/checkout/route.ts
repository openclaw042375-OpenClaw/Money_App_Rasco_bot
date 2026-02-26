import { NextRequest, NextResponse } from 'next/server';

const stripeLib = require('stripe');
const stripe = stripeLib(process.env.STRIPE_SECRET_KEY || 'sk_test_dummy');

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  
  if (sig && process.env.STRIPE_WEBHOOK_SECRET) {
    const body = await req.text();
    try {
      const event = stripe.webhooks.constructEvent(body, process.env.STRIPE_WEBHOOK_SECRET);
      if (event.type === 'checkout.session.completed') {
        console.log('Payment:', event.data.object.customer_email);
      }
      return NextResponse.json({ received: true });
    } catch (err: any) {
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
  }
  
  try {
    const origin = req.headers.get('origin') || 'https://myclipverse.com';
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: { currency: 'usd', product_data: { name: 'Digital God UGC Pack' }, unit_amount: 100 },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${origin}/success`,
      cancel_url: `${origin}/cancel`,
    });
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export const runtime = 'nodejs';