const features = [
  {
    icon: "⚡",
    title: "Instant Download",
    desc: "PDF unlocks immediately after payment. No waiting, no approval queue.",
  },
  {
    icon: "🖥️",
    title: "Any Platform",
    desc: "Windows, macOS, Docker, Kali Linux. One guide covers them all.",
  },
  {
    icon: "🐳",
    title: "Docker & VPS Ready",
    desc: "Full docker-compose template included. Deploy to any VPS in minutes.",
  },
  {
    icon: "🔒",
    title: "Security Hardening",
    desc: "SSH hardening, nginx reverse proxy, firewall rules, and more.",
  },
  {
    icon: "💻",
    title: "Real Commands",
    desc: "Every step shows exact commands to run. Copy, paste, done.",
  },
  {
    icon: "🧠",
    title: "AI Configuration Deep Dive",
    desc: "SOUL.md, memory, heartbeats, sub-agents, model routing — all explained.",
  },
];

export default function Features() {
  return (
    <section className="py-24 px-4 bg-gray-950/50" id="features">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Built for{" "}
            <span className="text-cyan-400">Operators, Not Beginners</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Though beginners will be fine too. The guide meets you where you are.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-gray-900/50 border border-gray-800/60 rounded-xl p-6 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
