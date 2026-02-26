"use client";

import { heroContent, siteConfig } from "@/lib/content";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
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
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 pt-24 pb-20">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,255,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,200,0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <FadeIn delay={0}>
          {/* Terminal badge */}
          <div className="inline-flex items-center gap-2 bg-gray-900/80 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 font-mono text-sm text-cyan-400">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span>{heroContent.badge}</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            {heroContent.headline}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {heroContent.headlineHighlight}
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
            {heroContent.subheadline}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-gray-600 font-mono text-sm mb-10">
            {heroContent.subtitle}
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm">
            {heroContent.badges.map((badge) => (
              <span
                key={badge}
                className="bg-gray-900/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-gray-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          {/* CTA */}
          <Button
            onClick={handleCheckout}
            size="lg"
            className="group text-lg px-10 py-6"
          >
            {heroContent.ctaText} —{" "}
            <span className="font-mono">${siteConfig.price}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </FadeIn>

        <FadeIn delay={0.6}>
          <p className="mt-4 text-gray-600 text-sm">{heroContent.ctaSubtext}</p>
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={0.7}>
          <div className="mt-12 flex flex-col items-center gap-2 text-gray-600">
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
