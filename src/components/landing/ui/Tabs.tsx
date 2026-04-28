"use client";

import { cn } from "@/lib/cn";

export function Tabs<T extends string>({
  value,
  options,
  onChange,
  className,
  theme = "light"
}: {
  value: T;
  options: Array<{ value: T; label: string }>;
  onChange: (_next: T) => void;
  className?: string;
  theme?: "light" | "dark";
}) {
  return (
    <div
      className={cn(
        "inline-flex w-full flex-nowrap gap-1 overflow-hidden p-1 sm:w-auto",
        theme === "light" && "border border-ink/10 bg-fog/40",
        theme === "dark" && "border border-cream/15 bg-cream/[0.06]",
        className
      )}
      role="tablist"
      aria-label="Filtro"
    >
      {options.map((opt) => {
        const active = opt.value === value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            className={cn(
              "h-11 min-w-0 flex-1 rounded-full px-3 text-xs font-medium tracking-[0.12em] uppercase transition duration-300 sm:flex-none sm:px-6",
              theme === "light" &&
                (active
                  ? "bg-ink text-cream shadow-none"
                  : "text-stone hover:bg-ink/[0.04] hover:text-ink"),
              theme === "dark" &&
                (active
                  ? "bg-[#dce26a] text-ink shadow-[0_0_22px_rgba(220,226,106,0.55),inset_0_1px_0_rgba(255,255,255,0.35)] ring-1 ring-[#f0f7a0]/80"
                  : "text-cream/55 hover:bg-cream/10 hover:text-cream")
            )}
            onClick={() => onChange(opt.value)}
            type="button"
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
