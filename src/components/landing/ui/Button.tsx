"use client";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "light";
type Size = "sm" | "md" | "lg";

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: Variant;
    size?: Size;
  }
>) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper/40 focus-visible:ring-offset-2 focus-visible:ring-offset-parchment disabled:opacity-45 disabled:pointer-events-none";

  const variants: Record<Variant, string> = {
    primary:
      "bg-ink text-cream border border-ink shadow-glow-soft hover:bg-ink-soft hover:border-copper/35 hover:-translate-y-px active:translate-y-0",
    secondary:
      "bg-cream/8 text-cream backdrop-blur-md border border-cream/18 hover:bg-cream/14 hover:border-cream/28",
    ghost: "text-cream/90 hover:text-cream hover:bg-cream/8",
    outline:
      "bg-transparent text-ink border border-ink/20 hover:border-copper/45 hover:bg-ink/[0.03]",
    light:
      "bg-cream text-ink border border-ink/10 hover:bg-fog shadow-[0_12px_40px_rgba(10,9,8,0.08)]"
  };

  const sizes: Record<Size, string> = {
    sm: "h-10 px-5 text-xs uppercase tracking-[0.14em]",
    md: "h-12 px-7 text-sm",
    lg: "h-14 px-9 text-[0.9375rem]"
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
