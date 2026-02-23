"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "outline" | "secondary" }>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
      outline: "text-gray-400 border-gray-700",
      secondary: "bg-gray-800 text-gray-300 border-gray-700",
    };

    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";

export { Badge };
