"use client";

import type { PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-stretch justify-stretch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <button
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(166,93,52,0.2),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(201,166,106,0.18),transparent_45%),rgba(10,9,8,0.8)] backdrop-blur-md"
            onClick={onClose}
            aria-label="Cerrar"
          />
          <motion.div
            className={cn(
              "relative m-0 h-full w-full overflow-hidden border border-cream/40 bg-[linear-gradient(160deg,rgba(250,245,237,0.97)_0%,rgba(242,235,225,0.94)_45%,rgba(236,228,218,0.96)_100%)] shadow-[0_50px_140px_rgba(10,9,8,0.4),0_0_0_1px_rgba(255,255,255,0.24)_inset] sm:m-6 sm:h-auto sm:max-h-[calc(100vh-3rem)] sm:rounded-[28px]",
              className
            )}
            initial={{ y: 30, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: 30, scale: 0.98, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(255,255,255,0.6)_0%,transparent_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/70 to-transparent" />
            {children}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

