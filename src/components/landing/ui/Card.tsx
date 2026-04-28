"use client";

import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        "rounded-sm border border-ink/8 bg-parchment/75 backdrop-blur-sm shadow-[0_1px_0_rgba(10,9,8,0.06)] transition-[box-shadow,transform,border-color] duration-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
