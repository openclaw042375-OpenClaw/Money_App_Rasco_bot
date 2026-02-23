"use client";

export default function Hero() {
  const handleBuy = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
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
        {/* Terminal badge */}
        <div className="inline-flex items-center gap-2 bg-gray-900/80 border border-cyan-500/30 rounded-full px-4 py-2 mb-8 font-mono text-sm text-cyan-400">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span>$ openclaw --install --platform=all</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
          Deploy Your AI.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            Own Your Stack.
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
          The definitive guide to running OpenClaw on any platform — Windows,
          macOS, Docker, or Kali Linux.
        </p>

        <p className="text-gray-600 font-mono text-sm mb-10">
          Real commands. Real examples. No filler.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 text-sm">
          {[
            "📄 PDF Download",
            "⚡ Instant Access",
            "💳 One-Time Payment",
            "🔒 4 Platforms Covered",
          ].map((badge) => (
            <span
              key={badge}
              className="bg-gray-900/60 border border-gray-700/60 rounded-full px-4 py-1.5 text-gray-300"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={handleBuy}
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-xl px-10 py-5 rounded-xl hover:from-cyan-400 hover:to-emerald-400 transition-all duration-200 shadow-[0_0_30px_rgba(0,255,200,0.3)] hover:shadow-[0_0_50px_rgba(0,255,200,0.5)]"
        >
          Get the Guide —{" "}
          <span className="font-mono">$19.99</span>
          <svg
            className="w-5 h-5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>

        <p className="mt-4 text-gray-600 text-sm">
          Secure checkout via Stripe · No subscription · Download immediately
        </p>
      </div>
    </section>
  );
}
