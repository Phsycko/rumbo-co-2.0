"use client";

import type { InputHTMLAttributes, PropsWithChildren, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Label({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <span
      className={cn("block text-[10px] font-medium uppercase tracking-[0.16em] text-ink/50", className)}
    >
      {children}
    </span>
  );
}

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full border border-ink/12 bg-cream/90 px-4 text-sm text-ink outline-none transition duration-300 placeholder:text-ink/35 focus:border-copper/50 focus:ring-1 focus:ring-copper/20",
        className
      )}
      {...props}
    />
  );
}

export function Select({ className, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "h-11 w-full appearance-none border border-ink/12 bg-cream/90 px-4 text-sm text-ink outline-none transition duration-300 focus:border-copper/50 focus:ring-1 focus:ring-copper/20",
        className
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[120px] w-full border border-ink/12 bg-cream/90 px-4 py-3 text-sm text-ink outline-none transition duration-300 focus:border-copper/50 focus:ring-1 focus:ring-copper/20",
        className
      )}
      {...props}
    />
  );
}
