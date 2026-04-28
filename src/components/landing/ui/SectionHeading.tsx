"use client";

import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  tone = "light",
  titleId
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  tone?: "light" | "dark";
  /** Para enlazar la sección con `aria-labelledby` (accesibilidad). */
  titleId?: string;
}) {
  const dark = tone === "dark";

  return (
    <header
      className={cn(
        "max-w-[40rem]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-[11px] font-medium uppercase tracking-[0.24em]",
            dark ? "text-copper" : "text-copper-dim"
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cn(
          "mt-4 font-serif text-display-sm text-balance",
          eyebrow ? "" : "mt-0",
          dark ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-[1.0625rem]",
            dark ? "text-cream/75" : "text-ink/70"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

export function Kicker({ children }: PropsWithChildren) {
  return <p className="text-sm font-normal leading-relaxed text-ink/70">{children}</p>;
}
