"use client";

import { useState } from "react";

export function useToast() {
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const ToastComponent = () => {
    if (!toast) return null;
    return (
      <div className="fixed bottom-6 right-6 z-[10000] rounded-2xl bg-white border-2 border-terracotta px-6 py-4 shadow-2xl">
        <p className="text-sm font-semibold text-charcoal">{toast.message}</p>
      </div>
    );
  };

  return { showToast, ToastComponent };
}
