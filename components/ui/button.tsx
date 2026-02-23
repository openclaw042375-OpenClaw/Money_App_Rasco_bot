"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default:
        "bg-gradient-to-r from-cyan-500 to-emerald-500 text-black hover:from-cyan-400 hover:to-emerald-400 shadow-[0_0_20px_rgba(0,255,200,0.2)] hover:shadow-[0_0_40px_rgba(0,255,200,0.4)]",
      outline:
        "border border-gray-700 bg-transparent hover:bg-gray-800 hover:text-white text-gray-300",
      ghost: "hover:bg-gray-800 hover:text-white text-gray-400",
      link: "text-cyan-400 underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-8 px-3 text-xs",
      lg: "h-12 px-8 text-lg",
    };

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement, {
        className: cn(baseStyles, variants[variant], sizes[size], className, (children as React.ReactElement).props.className),
        ref,
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
