import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2024-06-20' });

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature');
  if (sig) {
    // Webhook
    const body = await req.text();
    let event;
    try {
      event = stripe.webhooks.constructEvent(body, process.env.STRIPE_WEBHOOK_SECRET!);
    } catch (err: any) {
      console.error('Webhook signature error:', err.message);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as Stripe.Checkout.Session;
      console.log('✅ LIVE PAYMENT:', session.customer_email || 'anon', '| Amount:', session.amount_total! / 100);
      // Fulfill: Telegram lead -1003546116013-75, email PDF
    }
    return NextResponse.json({ received: true });
  } else {
    // Checkout session
    try {
      const origin = req.headers.get('origin') || 'https://myclipverse.com';
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
          price_data: {
            currency: 'usd',
            product_data: { name: 'Digital God UGC Pack' },
            unit_amount: 100,  // $1 LIVE TEST – edit to 4900 for $49
          },
          quantity: 1,
        }],
        mode: 'payment',
        success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/cancel`,
      });
      return NextResponse.json({ url: session.url });
    } catch (error: any) {
      console.error('Checkout error:', error.message);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}

export const runtime = 'nodejs';