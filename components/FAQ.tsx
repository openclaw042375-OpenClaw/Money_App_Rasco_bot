const faqs = [
  {
    q: "What format is the guide?",
    a: "PDF. Works on any device — laptop, tablet, phone. Print it if you want. It's yours forever.",
  },
  {
    q: "Is this beginner-friendly?",
    a: "Yes. Every step shows the exact command to run. If you can open a terminal, you can follow this guide.",
  },
  {
    q: "Do I need technical experience?",
    a: "Basic command-line comfort helps. You should know how to open a terminal and run commands. Everything else is explained.",
  },
  {
    q: "What platforms does it cover?",
    a: "Windows (native and WSL2), macOS (Homebrew + launchd service), Docker (full docker-compose template), and Kali Linux (including VPS deployment with nginx and SSH hardening).",
  },
  {
    q: "Is this a subscription?",
    a: "No. One-time payment of $19.99. Download it, keep it, use it forever.",
  },
  {
    q: "What is OpenClaw?",
    a: "OpenClaw is a self-hosted AI gateway — your own private AI assistant that runs on your hardware, connects to your messaging apps, and never sends your data to third parties.",
  },
  {
    q: "When do I get access?",
    a: "Immediately after payment. You'll see a download button on the confirmation page. No waiting.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 px-4 bg-gray-950/50" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Common <span className="text-cyan-400">Questions</span>
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-gray-900/40 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
            >
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
