"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionItemProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
}

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

const AccordionContext = React.createContext<{
  openValue: string | null;
  setOpenValue: (value: string | null) => void;
}>({ openValue: null, setOpenValue: () => {} });

const Accordion = ({ children, className }: AccordionProps) => {
  const [openValue, setOpenValue] = React.useState<string | null>(null);
  return (
    <AccordionContext.Provider value={{ openValue, setOpenValue }}>
      <div className={cn("space-y-2", className)}>{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, className, value }: AccordionItemProps) => {
  return (
    <div className={cn("border border-gray-800 rounded-xl overflow-hidden", className)} data-value={value}>
      {children}
    </div>
  );
};

const AccordionTrigger = ({ children, className }: AccordionTriggerProps) => {
  const { openValue, setOpenValue } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const isOpen = openValue === value;

  return (
    <button
      onClick={() => setOpenValue(isOpen ? null : value)}
      className={cn(
        "flex w-full items-center justify-between p-4 text-left font-medium transition-all hover:bg-gray-800/50",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn("h-4 w-4 shrink-0 text-gray-500 transition-transform duration-200", {
          "rotate-180": isOpen,
        })}
      />
    </button>
  );
};

const AccordionItemContext = React.createContext<string>("");

const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const { openValue } = React.useContext(AccordionContext);
  const value = React.useContext(AccordionItemContext);
  const isOpen = openValue === value;

  if (!isOpen) return null;

  return (
    <div className={cn("overflow-hidden px-4 pb-4 text-sm text-gray-400", className)}>
      {children}
    </div>
  );
};

// Wrapper to provide value context
const AccordionItemWithContext = ({
  children,
  className,
  value,
}: AccordionItemProps) => {
  return (
    <AccordionItemContext.Provider value={value}>
      <AccordionItem value={value} className={className}>
        {children}
      </AccordionItem>
    </AccordionItemContext.Provider>
  );
};

export { Accordion, AccordionItemWithContext as AccordionItem, AccordionTrigger, AccordionContent };
