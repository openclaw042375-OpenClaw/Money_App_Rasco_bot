"use client";

import { pricingFeatures, siteConfig } from "@/lib/content";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap } from "lucide-react";

export default function Pricing() {
  const hasCheckoutUrl = !!siteConfig.checkoutUrl;

  const handleCheckout = () => {
    if (siteConfig.checkoutUrl) {
      window.location.href = siteConfig.checkoutUrl;
    }
  };

  return (
    <section className="py-24 px-4" id="pricing">
      <div className="max-w-lg mx-auto">
        <FadeIn>
          <div className="text-center mb-12">
            <Badge className="mb-4">
              <Zap className="w-3 h-3 mr-1" />
              Instant Access
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              One Price.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Everything Included.
              </span>
            </h2>
            <p className="text-gray-400">No subscription. No upsells. Just the guide.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Card className="relative border-cyan-500/30 bg-gray-900/80 shadow-[0_0_60px_rgba(0,255,200,0.08)]">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-black border-0">
                BEST VALUE
              </Badge>
            </div>

            <CardContent className="pt-8">
              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-start justify-center gap-1">
                  <span className="text-2xl text-gray-400 mt-2">$</span>
                  <span className="text-7xl font-bold text-white">{siteConfig.price}</span>
                  <span className="text-3xl text-gray-400 mt-4">.00</span>
                </div>
                <p className="text-gray-500 text-sm mt-1">USD · one-time payment</p>
              </div>

              {/* Included list */}
              <StaggerContainer className="space-y-3 mb-8">
                {pricingFeatures.map((item) => (
                  <StaggerItem key={item}>
                    <div className="flex items-start gap-3 text-sm text-gray-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA */}
              <Button
                onClick={handleCheckout}
                disabled={!hasCheckoutUrl}
                size="lg"
                className={`w-full text-lg py-6 ${
                  !hasCheckoutUrl ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {hasCheckoutUrl ? `Buy Now — $${siteConfig.price}` : "Coming Soon"}
              </Button>

              {!hasCheckoutUrl && (
                <p className="text-center text-gray-500 text-xs mt-4">
                  Checkout URL not configured. Set NEXT_PUBLIC_CHECKOUT_URL to enable purchases.
                </p>
              )}
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
