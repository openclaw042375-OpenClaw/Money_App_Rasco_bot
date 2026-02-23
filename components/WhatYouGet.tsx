const platforms = [
  {
    icon: "🪟",
    name: "Windows",
    badge: null,
    badgeColor: null,
    features: [
      "WSL2 recommended path",
      "Native PowerShell install",
      "Windows Service via NSSM",
      "Firewall configuration",
      "Troubleshooting guide",
    ],
  },
  {
    icon: "🍎",
    name: "macOS",
    badge: null,
    badgeColor: null,
    features: [
      "Homebrew + Node.js setup",
      "First launch walkthrough",
      "Telegram, Signal, WhatsApp",
      "launchd background service",
      "Common fixes included",
    ],
  },
  {
    icon: "🐳",
    name: "Docker",
    badge: null,
    badgeColor: null,
    features: [
      "Full docker-compose.yml",
      "Multi-container with Redis",
      "Volume mounts + env vars",
      "Health checks",
      "Update strategy",
    ],
  },
  {
    icon: "💀",
    name: "Kali Linux",
    badge: "HACKING EDITION",
    badgeColor: "text-red-400 border-red-500/50 bg-red-500/10",
    features: [
      "Recon automation setup",
      "nmap/sqlmap/metasploit shell",
      "Headless VPS deployment",
      "Nginx reverse proxy + SSL",
      "SSH hardening + UFW rules",
    ],
  },
];

const chapters = [
  "Introduction to OpenClaw",
  "Chapter 1: macOS Installation",
  "Chapter 2: Windows Installation",
  "Chapter 3: Docker Deployment",
  "Chapter 4: Kali Linux — Hacking Edition",
  "Chapter 5: Configuration Deep Dive",
  "Chapter 6: Advanced Usage & Automation",
  "Appendix: Commands, Versions & Troubleshooting",
];

export default function WhatYouGet() {
  return (
    <section className="py-24 px-4" id="what-you-get">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need.{" "}
            <span className="text-cyan-400">All in One PDF.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Four platform guides, real commands, and zero fluff. This is the
            guide you wish existed when you started.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors"
            >
              <div className="text-4xl mb-3">{p.icon}</div>
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-xl font-bold">{p.name}</h3>
                {p.badge && (
                  <span
                    className={`text-xs font-mono font-bold border rounded-full px-2 py-0.5 ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                    <span className="text-cyan-500 mt-0.5 flex-shrink-0">›</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Chapter list */}
        <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-gray-200">
            📋 Table of Contents
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {chapters.map((ch, i) => (
              <div
                key={ch}
                className="flex items-center gap-3 text-gray-400 text-sm"
              >
                <span className="font-mono text-cyan-500/60 text-xs w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {ch}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
