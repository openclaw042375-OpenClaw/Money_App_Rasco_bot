"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/lib/content";
import { FadeIn } from "@/components/motion";
import { Check, Download, ArrowLeft, Twitter } from "lucide-react";

function ThanksContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  // Show a generic message if no session_id (they arrived here directly)
  const isValidSession = !!sessionId;

  return (
    <div className="relative z-10 max-w-lg w-full">
      <FadeIn>
        <div className="bg-gray-900/80 border border-emerald-500/30 rounded-2xl p-8 md:p-10 shadow-[0_0_60px_rgba(0,255,100,0.08)] text-center">
          {/* Check icon */}
          <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-emerald-400" />
          </div>

          <h1 className="text-3xl font-bold mb-2">Thank You!</h1>
          {isValidSession && (
            <p className="text-gray-500 text-sm mb-6">Your payment was successful.</p>
          )}

          <p className="text-gray-400 mb-8 leading-relaxed">
            {isValidSession ? (
              <>
                Your copy of{" "}
                <span className="text-white font-semibold">{siteConfig.title}</span> is ready.
                Click below to download your PDF.
              </>
            ) : (
              <>
                Welcome to your download page for{" "}
                <span className="text-white font-semibold">{siteConfig.title}</span>.
                Your PDF is ready below.
              </>
            )}
          </p>

          <a
            href="/guide.pdf"
            download="OpenClaw-Super-Guide.pdf"
            className="inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold text-lg py-4 rounded-xl hover:from-emerald-400 hover:to-cyan-400 transition-all duration-200 shadow-[0_0_20px_rgba(0,255,100,0.2)] hover:shadow-[0_0_40px_rgba(0,255,100,0.4)] mb-4"
          >
            <Download className="w-5 h-5" />
            Download Your Guide (PDF)
          </a>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-400 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-gray-600 text-sm mb-4">Enjoy the guide? Share it with others.</p>
            <a
              href="https://twitter.com/intent/tweet?text=Just%20picked%20up%20the%20OpenClaw%20Super%20Guide%20%E2%80%94%20covers%20Windows%2C%20macOS%2C%20Docker%2C%20and%20Kali%20Linux.%20Worth%20it.&url=https%3A%2F%2Fopenclaw.guide"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-400 text-sm transition-colors"
            >
              <Twitter className="w-4 h-4" />
              Share on X
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default function ThanksPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 py-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl" />
      </div>

      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      }>
        <ThanksContent />
      </Suspense>
    </main>
  );
}
