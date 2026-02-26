"use client";

import { Button } from "@/components/ui/button";
import { Download, CheckCircle2 } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-emerald-900 via-gray-900 to-cyan-900">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle2 className="w-20 h-20 text-emerald-400 mx-auto mb-6" />
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-xl text-gray-300 mb-8">
          Your OpenClaw Super Guide is ready to download.
        </p>

        <div className="bg-gray-900/60 border border-emerald-500/30 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Download Your Guide</h2>
          
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-emerald-600 hover:bg-emerald-700"
          >
            <a href="/OpenClaw_Super_Guide.pdf" download>
              <Download className="w-5 h-5 mr-2" />
              Download PDF Guide
            </a>
          </Button>

          <p className="text-gray-400 text-sm mt-4">
            334 KB • Lifetime access • Free updates
          </p>
        </div>

        <div className="text-gray-400 space-y-2">
          <p>✓ Check your email for receipt and download link</p>
          <p>✓ Bookmark this page for future downloads</p>
          <p>✓ Questions? Contact support@myclipverse.com</p>
        </div>

        <div className="mt-8">
          <a 
            href="/" 
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
