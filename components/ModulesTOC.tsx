"use client";

import { useState } from "react";
import { modules } from "@/lib/content";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Clock, BookOpen } from "lucide-react";

export default function ModulesTOC() {
  const [openModule, setOpenModule] = useState<string | null>("01");

  return (
    <section className="py-24 px-4 bg-gray-950/50" id="modules">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4">12 Modules</Badge>
            <h2 className="text-4xl font-bold mb-4">
              From Zero to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Production-Ready
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              A structured curriculum that takes you from installation to advanced automation.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="space-y-3">
          {modules.map((module) => (
            <StaggerItem key={module.id}>
              <Card className="overflow-hidden border-gray-800 hover:border-gray-700 transition-colors">
                <button
                  onClick={() => setOpenModule(openModule === module.id ? null : module.id)}
                  className="w-full"
                >
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4 p-5">
                      <span className="font-mono text-sm text-cyan-500/60 w-8">
                        {module.id}
                      </span>
                      <div className="flex-1 text-left">
                        <h3 className="font-semibold text-white">{module.title}</h3>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="hidden sm:flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {module.duration}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            openModule === module.id ? "rotate-180" : ""
                          }`}
                        />
                      </div>
                    </div>
                    {openModule === module.id && (
                      <div className="px-5 pb-5 pl-17">
                        <div className="pl-12 text-gray-400 text-sm">
                          <p>{module.description}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </button>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-gray-500">
            <BookOpen className="w-4 h-4" />
            <span>Total: ~6 hours of structured content</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
