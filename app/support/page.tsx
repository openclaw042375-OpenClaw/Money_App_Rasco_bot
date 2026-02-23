import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageCircle, BookOpen, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with your OpenClaw Super Guide purchase.",
};

const supportOptions = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email Support",
    description: "Get a response within 24 hours for any questions about your purchase.",
    action: {
      label: "support@openclaw.guide",
      href: "mailto:support@openclaw.guide",
    },
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "X / Twitter",
    description: "Quick questions? Reach out on X for the fastest response.",
    action: {
      label: "@OpenClaw042375",
      href: "https://x.com/OpenClaw042375",
      external: true,
    },
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Documentation",
    description: "Check the OpenClaw documentation for technical questions.",
    action: {
      label: "View Docs",
      href: "https://github.com/openclaw",
      external: true,
    },
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-4xl font-bold mb-4">Support</h1>
          <p className="text-gray-400 mb-12">
            Need help with your purchase? We&apos;re here to assist you.
          </p>
        </FadeIn>

        <div className="grid gap-6">
          {supportOptions.map((option) => (
            <FadeIn key={option.title} delay={0.1}>
              <Card className="border-gray-800 hover:border-gray-700 transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold mb-2">{option.title}</h2>
                      <p className="text-gray-400 mb-4">{option.description}</p>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={option.action.href}
                          target={option.action.external ? "_blank" : undefined}
                          rel={option.action.external ? "noopener noreferrer" : undefined}
                        >
                          {option.action.label}
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-12 p-6 bg-gray-900/50 border border-gray-800 rounded-xl">
            <h3 className="font-semibold mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-400 text-sm mb-4">
              Before reaching out, check our FAQ section on the homepage for quick answers to common
              questions.
            </p>
            <Link href="/#faq" className="text-cyan-400 hover:text-cyan-300 text-sm">
              View FAQ →
            </Link>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
