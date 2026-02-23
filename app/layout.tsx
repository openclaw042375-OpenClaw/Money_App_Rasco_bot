import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "OpenClaw Deployment Guide — Windows, Docker, macOS & Kali Linux | $19.99",
  description:
    "Complete step-by-step guide to deploying OpenClaw AI on any platform. Covers Windows, macOS, Docker, and Kali Linux with security hardening. Instant PDF download.",
  keywords: [
    "OpenClaw",
    "AI deployment guide",
    "self-hosted AI",
    "Kali Linux AI",
    "Docker AI agent",
    "macOS AI assistant",
    "Windows AI setup",
    "AI automation",
    "security AI",
    "DevOps AI",
  ],
  openGraph: {
    title: "OpenClaw Deployment Guide — Deploy Your AI. Own Your Stack.",
    description:
      "The definitive guide to running OpenClaw on Windows, macOS, Docker, and Kali Linux. Instant PDF download for $19.99.",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Deployment Guide — $19.99",
    description:
      "Deploy your AI on any platform. Windows, macOS, Docker, Kali Linux. Step-by-step guide.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "The Complete OpenClaw Deployment Guide",
  description:
    "Comprehensive step-by-step guide to deploying OpenClaw AI on Windows, macOS, Docker, and Kali Linux. Includes security hardening, channel setup, and advanced configuration.",
  offers: {
    "@type": "Offer",
    price: "19.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2026-12-31",
  },
  author: { "@type": "Organization", name: "ZeroSignal" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
