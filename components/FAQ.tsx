"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <section className="py-24 px-4 bg-gray-950/50" id="faq">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <HelpCircle className="w-3 h-3 mr-1" />
              FAQ
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Common{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Questions
              </span>
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-3">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <Card
                className={`border-gray-800 transition-all cursor-pointer ${
                  openFaq === index ? "border-cyan-500/30" : "hover:border-gray-700"
                }`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className={`font-semibold transition-colors ${
                          openFaq === index ? "text-white" : "text-gray-300"
                        }`}
                      >
                        {faq.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openFaq === index && (
                      <p className="mt-3 text-gray-400 text-sm leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    )}
                  </CardContent>
                </button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
