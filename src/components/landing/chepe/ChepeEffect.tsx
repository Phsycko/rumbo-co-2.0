"use client";

import { createContext, useCallback, useContext, useMemo, useState, type PropsWithChildren } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Train, MapPin } from "lucide-react";

type ChepeEffectApi = {
  trigger: (_reason?: "wizard" | "packages" | "hero") => void;
};

const Ctx = createContext<ChepeEffectApi | null>(null);

export function useChepeEffect() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    throw new Error("useChepeEffect must be used within ChepeEffectProvider");
  }
  return ctx;
}

export function ChepeEffectProvider({ children }: PropsWithChildren) {
  const [pulse, setPulse] = useState<{ id: string } | null>(null);

  const trigger = useCallback((_reason?: "wizard" | "packages" | "hero") => {
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    setPulse({ id });
    window.setTimeout(() => setPulse(null), 1200);
  }, []);

  const value = useMemo(() => ({ trigger }), [trigger]);

  return (
    <Ctx.Provider value={value}>
      {children}
      <ChepeEffectOverlay pulse={pulse} />
    </Ctx.Provider>
  );
}

function ChepeEffectOverlay({ pulse }: { pulse: { id: string } | null }) {
  return (
    <AnimatePresence>
      {pulse ? (
        <motion.div
          key={pulse.id}
          className="pointer-events-none fixed inset-0 z-[10050]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_65%_30%,rgba(184,115,74,0.22),transparent_55%)]" />

          <motion.div
            className="absolute left-1/2 top-[18%] w-[min(920px,92vw)] -translate-x-1/2"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 20 }}
          >
            <div className="border border-cream/15 bg-ink/80 p-5 backdrop-blur-md shadow-[0_40px_90px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cream/70">
                    Chepe Express
                  </p>
                  <p className="mt-1 font-serif text-lg text-cream">Una ruta que se dibuja en el mapa.</p>
                </div>
                <div className="flex items-center gap-2 text-cream/80">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-semibold">Barrancas del Cobre</span>
                </div>
              </div>

              <div className="mt-4">
                <div className="relative h-12 overflow-hidden rounded-2xl border border-cream/10 bg-cream/5">
                  <motion.div
                    className="absolute left-5 top-1/2 h-[2px] w-[calc(100%-2.5rem)] -translate-y-1/2 bg-gradient-to-r from-terracotta/20 via-terracotta/80 to-terracotta/20"
                    initial={{ scaleX: 0, opacity: 0.6 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    style={{ transformOrigin: "0% 50%" }}
                  />

                  <motion.div
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-cream"
                    initial={{ x: 0, opacity: 0 }}
                    animate={{ x: "calc(100% - 2.5rem)", opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.85, ease: [0.2, 0.8, 0.2, 1] }}
                  >
                    <div className="flex items-center gap-2 border border-cream/15 bg-ink/55 px-3 py-2 backdrop-blur-md">
                      <Train className="h-4 w-4" />
                      <span className="text-xs font-semibold tracking-wide">CHEPE</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

