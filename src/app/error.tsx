"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[app/error]", error);
  }, [error]);

  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-4 bg-parchment px-6 py-20 text-ink">
      <h1 className="font-serif text-2xl">No se pudo cargar esta vista</h1>
      <p className="max-w-md text-center text-sm text-ink/70">
        Si acabas de cambiar código o dependencias, detén el servidor, ejecuta de nuevo el arranque del proyecto y espera a que termine el primer compile.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full border border-ink/20 bg-ink px-6 py-2.5 text-sm font-medium text-cream transition hover:bg-ink-soft"
      >
        Reintentar
      </button>
    </main>
  );
}
