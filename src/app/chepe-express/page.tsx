import Link from "next/link";
import { marketingMetadata } from "@/lib/seo";

export const metadata = marketingMetadata({
  title: "Chepe Express · Rutas y clases (Turista, Ejecutiva, Primera) | Rumbo Co",
  description:
    "Chepe Express en Barrancas del Cobre: clases, rutas y cómo diseñar la experiencia perfecta desde Chihuahua o Los Mochis."
});

export default function Page() {
  return (
    <main className="pt-[96px]">
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta/80">
          Landing SEO (stub)
        </p>
        <h1 className="mt-4 font-serif text-4xl text-charcoal">Chepe Express</h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/70">
          Página lista para incluir guía completa de clases, rutas y recomendaciones por temporada.
        </p>
        <div className="mt-8">
          <Link className="text-sm font-semibold text-terracotta underline underline-offset-4" href="/#paquetes">
            Comparar clases en Home
          </Link>
        </div>
      </section>
    </main>
  );
}

