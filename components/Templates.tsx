"use client";

import { templates, templateSnippet } from "@/lib/content";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileCode, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Templates() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(templateSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 px-4" id="templates">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4">Production Ready</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Copy-Paste{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Templates
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Battle-tested configurations you can deploy today.
            </p>
          </div>
        </FadeIn>

        {/* Template Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {templates.map((template) => (
            <StaggerItem key={template.name}>
              <Card className="h-full border-gray-800 hover:border-cyan-500/30 transition-colors group">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <FileCode className="w-5 h-5 text-cyan-400" />
                    <Badge variant="outline" className="text-xs">
                      {template.tag}
                    </Badge>
                  </div>
                  <CardTitle className="text-sm font-mono text-gray-200 group-hover:text-cyan-400 transition-colors">
                    {template.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xs">
                    {template.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Code Snippet */}
        <FadeIn delay={0.2}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20" />
                  </div>
                  <span className="ml-3 text-sm font-mono text-gray-500">docker-compose.yml</span>
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
                <code>{templateSnippet}</code>
              </pre>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
