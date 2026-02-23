"use client";

const included = [
  "643-page PDF (readable on any device)",
  "macOS step-by-step installation",
  "Windows (native + WSL2) guide",
  "Full Docker deployment with docker-compose",
  "Kali Linux Hacking Edition chapter",
  "Configuration deep dive (SOUL.md, memory, cron)",
  "Advanced automation & sub-agent workflows",
  "Security hardening for VPS deployments",
  "Quick command reference appendix",
  "Lifetime access — download and keep",
];

export default function Pricing() {
  const handleBuy = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();
    if (data.url) window.location.href = data.url;
  };

  return (
    <section className="py-24 px-4" id="pricing">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            One Price.{" "}
            <span className="text-cyan-400">Everything Included.</span>
          </h2>
          <p className="text-gray-400">No subscription. No upsells. Just the guide.</p>
        </div>

        <div className="relative bg-gray-900/80 border border-cyan-500/30 rounded-2xl p-8 shadow-[0_0_60px_rgba(0,255,200,0.08)]">
          {/* Popular badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-full">
              INSTANT DOWNLOAD
            </span>
          </div>

          {/* Price */}
          <div className="text-center mb-8 pt-2">
            <div className="flex items-start justify-center gap-1">
              <span className="text-2xl text-gray-400 mt-2">$</span>
              <span className="text-7xl font-bold text-white">19</span>
              <span className="text-3xl text-gray-400 mt-4">.99</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">USD · one-time payment</p>
          </div>

          {/* Included list */}
          <ul className="space-y-3 mb-8">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                <span className="text-emerald-400 flex-shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={handleBuy}
            className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold text-lg py-4 rounded-xl hover:from-cyan-400 hover:to-emerald-400 transition-all duration-200 shadow-[0_0_20px_rgba(0,255,200,0.2)] hover:shadow-[0_0_40px_rgba(0,255,200,0.4)]"
          >
            Buy Now — $19.99
          </button>

          <p className="text-center text-gray-600 text-xs mt-4 font-mono">
            Test mode · Use card 4242 4242 4242 4242
          </p>
        </div>
      </div>
    </section>
  );
}
