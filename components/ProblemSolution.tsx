"use client";

import { problemSolution } from "@/lib/content";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { X, Check } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="py-24 px-4" id="problem">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Problem */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-500/5 rounded-3xl blur-xl" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-red-400">
                  {problemSolution.problem.title}
                </h2>
                <StaggerContainer className="space-y-4">
                  {problemSolution.problem.points.map((point, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-4 p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center mt-0.5">
                          <X className="w-4 h-4 text-red-400" />
                        </div>
                        <p className="text-gray-400">{point}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </FadeIn>

          {/* Solution */}
          <FadeIn direction="right">
            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl blur-xl" />
              <div className="relative">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-emerald-400">
                  {problemSolution.solution.title}
                </h2>
                <StaggerContainer className="space-y-4">
                  {problemSolution.solution.points.map((point, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-start gap-4 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-xl">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center mt-0.5">
                          <Check className="w-4 h-4 text-emerald-400" />
                        </div>
                        <p className="text-gray-300">{point}</p>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
