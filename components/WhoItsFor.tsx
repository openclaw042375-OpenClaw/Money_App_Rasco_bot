"use client";

import { targetAudience } from "@/lib/content";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";

export default function WhoItsFor() {
  return (
    <section className="py-24 px-4 bg-gray-950/50" id="who-its-for">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <Badge className="mb-4">
              <Users className="w-3 h-3 mr-1" />
              Who It&apos;s For
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                Operators
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Whether you&apos;re a developer, security professional, or DevOps engineer —
              this guide meets you where you are.
            </p>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {targetAudience.map((audience) => (
            <StaggerItem key={audience.title}>
              <Card className="h-full border-gray-800 hover:border-cyan-500/30 transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="text-4xl mb-3">{audience.icon}</div>
                  <CardTitle className="text-lg">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{audience.description}</CardDescription>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
