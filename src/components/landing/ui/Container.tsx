"use client";

import type { PropsWithChildren } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className
}: PropsWithChildren<{
  className?: string;
}>) {
  return (
    <div className={cn("mx-auto w-full max-w-[88rem] px-5 sm:px-8 lg:px-14", className)}>{children}</div>
  );
}
