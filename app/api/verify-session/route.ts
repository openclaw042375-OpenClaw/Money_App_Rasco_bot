import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const apiKey = process.env.STRIPE_SECRET_KEY;
  if (!apiKey) {
    throw new Error("STRIPE_SECRET_KEY is not set");
  }
  return new Stripe(apiKey, {
    apiVersion: "2026-02-25.clover",
  });
}

export async function GET(req: NextRequest) {
  const stripe = getStripe();
  const { searchParams } = new URL(req.url);
  const sessionId = searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ valid: false });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ valid: false });
    }

    return NextResponse.json({
      valid: true,
      email: session.customer_details?.email || null,
    });
  } catch {
    return NextResponse.json({ valid: false });
  }
}

export const dynamic = 'force-dynamic';
