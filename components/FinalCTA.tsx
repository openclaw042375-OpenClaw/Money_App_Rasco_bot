"use client";

import { siteConfig } from "@/lib/content";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function FinalCTA() {
  const handleCheckout = async () => {
    try {
      const res = await fetch('/api/checkout', { method: 'POST' });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error: ' + (data.error || 'Unknown'));
      }
    } catch (error) {
      alert('Network error');
    }
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="relative">
            {/* Background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-3xl blur-2xl" />

            <div className="relative bg-gray-900/80 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                  Own Your Stack?
                </span>
              </h2>

              <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
                Join thousands of developers who have deployed OpenClaw with confidence.
                Get instant access to the complete guide.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  onClick={handleCheckout}
                  size="lg"
                  className="text-lg px-8 py-6"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get the Guide — ${siteConfig.price}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              <p className="mt-4 text-gray-600 text-sm">
                Instant download · Lifetime access · Free updates
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
