"use client";

import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "copper",
  className
}: PropsWithChildren<{
  tone?: "copper" | "cream" | "charcoal" | "outline";
  className?: string;
}>) {
  const tones = {
    copper: "bg-copper/12 text-copper-dim border-copper/25",
    cream: "bg-cream/10 text-cream border-cream/22",
    charcoal: "bg-ink/[0.04] text-ink border-ink/10",
    outline: "bg-transparent text-cream/85 border-cream/25"
  } as const;

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
