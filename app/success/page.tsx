import { redirect } from "next/navigation";
import Stripe from "stripe";
import Link from "next/link";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-01-28.clover",
});

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const sessionId = searchParams.session_id;

  if (!sessionId) redirect("/");

  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    redirect("/");
  }

  if (session.payment_status !== "paid") redirect("/");

  const email = session.customer_details?.email;

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-lg w-full text-center">
        <div className="bg-gray-900/80 border border-emerald-500/30 rounded-2xl p-10 shadow-[0_0_60px_rgba(0,255,100,0.08)]">
          {/* Check icon */}
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl font-bold mb-2">Payment Confirmed</h1>
          {email && (
            <p className="text-gray-500 text-sm mb-6">Receipt sent to {email}</p>
          )}

          <p className="text-gray-400 mb-8 leading-relaxed">
            Your copy of{" "}
            <span className="text-white font-semibold">
              The Complete OpenClaw Deployment Guide
            </span>{" "}
            is ready. Click below to download your PDF.
          </p>

          <a
            href="/guide.pdf"
            download="OpenClaw-Deployment-Guide.pdf"
            className="block w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold text-lg py-4 rounded-xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200 shadow-[0_0_20px_rgba(0,255,100,0.2)] hover:shadow-[0_0_40px_rgba(0,255,100,0.4)] mb-4"
          >
            ⬇️ Download Your Guide (PDF)
          </a>

          <Link
            href="/"
            className="text-gray-600 hover:text-gray-400 text-sm transition-colors"
          >
            ← Back to home
          </Link>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-600 text-sm">
              Enjoy the guide? Share it with others who&apos;d benefit.
            </p>
            <div className="flex justify-center gap-4 mt-3">
              <a
                href="https://twitter.com/intent/tweet?text=Just%20picked%20up%20the%20OpenClaw%20Deployment%20Guide%20%E2%80%94%20covers%20Windows%2C%20macOS%2C%20Docker%2C%20and%20Kali%20Linux.%20Worth%20it.&url=https%3A%2F%2Fopenclaw.guide"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-cyan-400 text-sm transition-colors font-mono"
              >
                Share on X →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
