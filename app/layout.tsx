import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig, productJsonLd, faqs } from "@/lib/content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.title} — $${siteConfig.price}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
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
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${siteConfig.title} — Deploy Your AI. Own Your Stack.`,
    description: siteConfig.description,
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.title} — $${siteConfig.price}`,
    description: "The complete guide to deploying OpenClaw AI on any platform. Instant PDF download.",
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

// JSON-LD structured data
const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: productJsonLd.name,
  description: productJsonLd.description,
  brand: {
    "@type": "Brand",
    name: productJsonLd.brand.name,
  },
  offers: {
    "@type": "Offer",
    price: siteConfig.price.toString(),
    priceCurrency: productJsonLd.offers.priceCurrency,
    availability: productJsonLd.offers.availability,
    priceValidUntil: "2026-12-31",
    seller: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    "https://x.com/OpenClaw042375",
    "https://github.com/openclaw",
  ],
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-[#0a0a0a] text-gray-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
