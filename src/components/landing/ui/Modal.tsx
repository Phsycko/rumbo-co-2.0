"use client";

import { useEffect, useState, type PropsWithChildren } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";

export function Modal({
  open,
  onClose,
  children,
  className
}: PropsWithChildren<{
  open: boolean;
  onClose: () => void;
  className?: string;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-stretch justify-stretch"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-[radial-gradient(circle_at_20%_10%,rgba(166,93,52,0.2),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(201,166,106,0.18),transparent_45%),rgba(10,9,8,0.8)] backdrop-blur-md"
        onClick={onClose}
        aria-label="Cerrar"
      />
      <div
        className={cn(
          "relative z-10 m-0 h-full w-full overflow-hidden border border-cream/40 bg-[linear-gradient(160deg,rgba(250,245,237,0.97)_0%,rgba(242,235,225,0.94)_45%,rgba(236,228,218,0.96)_100%)] shadow-[0_50px_140px_rgba(10,9,8,0.4),0_0_0_1px_rgba(255,255,255,0.24)_inset] sm:m-6 sm:h-auto sm:max-h-[calc(100vh-3rem)] sm:rounded-[28px]",
          className
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/70 to-transparent" />
        {children}
      </div>
    </div>,
    document.body
  );
}
