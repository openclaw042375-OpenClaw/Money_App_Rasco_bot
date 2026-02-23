import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using ZeroSignal products and services.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <FadeIn>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: February 23, 2026</p>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-xl font-semibold text-white mb-2">1. Products</h2>
            <p>
              All products sold on this site are digital downloads. Upon successful payment, you
              will receive access to download your purchased content. All sales are final. No
              refunds are offered on digital products.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">2. License</h2>
            <p>
              Purchased digital products are licensed for personal use only. Redistribution, resale,
              or sharing of purchased content is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">3. Automation & AI Content</h2>
            <p>
              This site and associated social media accounts may use automated systems and AI to
              generate and post content. All automated content is reviewed for quality and
              compliance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">4. Limitation of Liability</h2>
            <p>
              ZeroSignal provides all products and services &quot;as is&quot; without warranty of any
              kind. We are not liable for any damages arising from the use of our products or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-2">5. Contact</h2>
            <p>
              For questions, contact us at{" "}
              <a
                href="https://x.com/OpenClaw042375"
                className="text-cyan-400 hover:text-cyan-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                @OpenClaw042375
              </a>{" "}
              on X.
            </p>
          </section>
        </div>
      </FadeIn>
    </main>
  );
}
