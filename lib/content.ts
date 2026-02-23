// Site Content Data
// All content is centralized here for easy editing

export const siteConfig = {
  name: "ZeroSignal",
  title: "OpenClaw Super Guide",
  description:
    "The complete 12-module system to deploy, configure, and master OpenClaw AI on any platform — Windows, macOS, Docker, and Kali Linux.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://openclaw.guide",
  ogImage: "/og-image.png",
  price: Number(process.env.NEXT_PUBLIC_PRICE) || 39,
  checkoutUrl: process.env.NEXT_PUBLIC_CHECKOUT_URL || "",
};

export const navLinks = [
  { href: "#modules", label: "Modules" },
  { href: "#templates", label: "Templates" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

export const heroContent = {
  badge: "$ openclaw --install --platform=all",
  headline: "Deploy Your AI.",
  headlineHighlight: "Own Your Stack.",
  subheadline:
    "The complete 12-module system to deploy, configure, and master OpenClaw AI on any platform.",
  subtitle: "Real commands. Real examples. No filler.",
  badges: ["📄 PDF Download", "⚡ Instant Access", "💳 One-Time Payment", "🔒 4 Platforms Covered"],
  ctaText: "Get the Guide",
  ctaSubtext: "Secure checkout via Stripe · No subscription · Download immediately",
};

export const credibilityLogos = [
  { name: "Stripe", icon: "stripe" },
  { name: "Vercel", icon: "vercel" },
  { name: "Docker", icon: "docker" },
  { name: "GitHub", icon: "github" },
];

export const problemSolution = {
  problem: {
    title: "Deploying AI feels overwhelming",
    points: [
      "Conflicting tutorials that skip crucial steps",
      "Security gaps that leave your system exposed",
      "Hours wasted on configuration dead-ends",
      "No single source of truth for multi-platform setup",
    ],
  },
  solution: {
    title: "One guide. Every platform. Zero confusion.",
    points: [
      "Step-by-step commands for Windows, macOS, Docker, Kali",
      "Security hardening included from day one",
      "Production-ready templates you can deploy today",
      "12 structured modules that build your expertise",
    ],
  },
};

export const modules = [
  {
    id: "01",
    title: "OpenClaw Fundamentals",
    description: "Architecture overview, core concepts, and understanding the AI gateway pattern.",
    duration: "15 min",
  },
  {
    id: "02",
    title: "macOS Installation",
    description: "Homebrew setup, Node.js configuration, and first launch walkthrough.",
    duration: "25 min",
  },
  {
    id: "03",
    title: "Windows Setup",
    description: "WSL2 recommended path, native PowerShell install, and Windows Service via NSSM.",
    duration: "30 min",
  },
  {
    id: "04",
    title: "Docker Deployment",
    description: "Full docker-compose template, multi-container with Redis, and volume mounts.",
    duration: "35 min",
  },
  {
    id: "05",
    title: "Kali Linux — Hacking Edition",
    description: "Recon automation, security tools integration, and headless VPS deployment.",
    duration: "40 min",
  },
  {
    id: "06",
    title: "Configuration Deep Dive",
    description: "SOUL.md, memory systems, heartbeats, and sub-agent workflows.",
    duration: "45 min",
  },
  {
    id: "07",
    title: "Security Hardening",
    description: "SSH hardening, nginx reverse proxy, firewall rules, and SSL certificates.",
    duration: "35 min",
  },
  {
    id: "08",
    title: "Channel Integration",
    description: "Telegram, Signal, WhatsApp setup and webhook configuration.",
    duration: "30 min",
  },
  {
    id: "09",
    title: "Model Routing",
    description: "Multi-model setup, provider fallbacks, and cost optimization.",
    duration: "25 min",
  },
  {
    id: "10",
    title: "Automation Workflows",
    description: "Cron jobs, scheduled tasks, and event-driven automation.",
    duration: "30 min",
  },
  {
    id: "11",
    title: "Advanced Patterns",
    description: "Custom skills, tool integration, and extending OpenClaw.",
    duration: "40 min",
  },
  {
    id: "12",
    title: "Production Deployment",
    description: "Monitoring, logging, backup strategies, and update workflows.",
    duration: "35 min",
  },
];

export const templates = [
  {
    name: "docker-compose.yml",
    description: "Production-ready multi-container setup with Redis and health checks.",
    tag: "Docker",
  },
  {
    name: "nginx.conf",
    description: "Reverse proxy configuration with SSL and rate limiting.",
    tag: "Nginx",
  },
  {
    name: "openclaw.service",
    description: "systemd service file for Linux background operation.",
    tag: "Linux",
  },
  {
    name: "SOUL.md",
    description: "Template for AI personality and behavior configuration.",
    tag: "Config",
  },
];

export const templateSnippet = `version: '3.8'
services:
  openclaw:
    image: openclaw/core:latest
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - REDIS_URL=redis://redis:6379
    volumes:
      - ./data:/app/data
      - ./skills:/app/skills
    depends_on:
      - redis
  redis:
    image: redis:7-alpine
    restart: unless-stopped`;

export const targetAudience = [
  {
    icon: "🧑‍💻",
    title: "Developers",
    description: "Who want to self-host AI without the configuration headache.",
  },
  {
    icon: "🔒",
    title: "Security Professionals",
    description: "Who need OpenClaw running on Kali Linux with proper hardening.",
  },
  {
    icon: "🏢",
    title: "DevOps Engineers",
    description: "Who want production-ready Docker deployments with monitoring.",
  },
  {
    icon: "🚀",
    title: "Early Adopters",
    description: "Who want to own their AI stack and keep data private.",
  },
];

export const pricingFeatures = [
  "643-page comprehensive PDF",
  "12 structured learning modules",
  "4 platform guides (Windows, macOS, Docker, Kali)",
  "Production-ready templates",
  "Security hardening guide",
  "Configuration deep dive",
  "Advanced automation workflows",
  "Lifetime access — no subscriptions",
  "Free future updates",
];

export const faqs = [
  {
    question: "What format is the guide?",
    answer:
      "PDF. Works on any device — laptop, tablet, phone. Print it if you want. It's yours forever.",
  },
  {
    question: "Is this beginner-friendly?",
    answer:
      "Yes. Every step shows the exact command to run. If you can open a terminal, you can follow this guide.",
  },
  {
    question: "Do I need technical experience?",
    answer:
      "Basic command-line comfort helps. You should know how to open a terminal and run commands. Everything else is explained.",
  },
  {
    question: "What platforms does it cover?",
    answer:
      "Windows (native and WSL2), macOS (Homebrew + launchd service), Docker (full docker-compose template), and Kali Linux (including VPS deployment with nginx and SSH hardening).",
  },
  {
    question: "Is this a subscription?",
    answer: "No. One-time payment. Download it, keep it, use it forever.",
  },
  {
    question: "What is OpenClaw?",
    answer:
      "OpenClaw is a self-hosted AI gateway — your own private AI assistant that runs on your hardware, connects to your messaging apps, and never sends your data to third parties.",
  },
  {
    question: "When do I get access?",
    answer: "Immediately after payment. You'll see a download button on the confirmation page. No waiting.",
  },
  {
    question: "Are there free updates?",
    answer: "Yes. When OpenClaw releases new features, the guide gets updated and you'll receive the new version at no extra cost.",
  },
];

export const footerLinks = {
  product: [
    { href: "#modules", label: "Modules" },
    { href: "#templates", label: "Templates" },
    { href: "#pricing", label: "Pricing" },
  ],
  support: [
    { href: "/support", label: "Help Center" },
    { href: "mailto:support@openclaw.guide", label: "Contact" },
  ],
  legal: [
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
  ],
  social: [
    { href: "https://x.com/OpenClaw042375", label: "X / Twitter" },
    { href: "https://github.com/openclaw", label: "GitHub" },
  ],
};

export const productJsonLd = {
  name: "OpenClaw Super Guide",
  description:
    "The complete 12-module system to deploy, configure, and master OpenClaw AI on any platform.",
  brand: {
    name: "ZeroSignal",
  },
  offers: {
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};
