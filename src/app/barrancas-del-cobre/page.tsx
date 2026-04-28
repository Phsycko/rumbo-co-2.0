import Link from "next/link";
import { marketingMetadata } from "@/lib/seo";

export const metadata = marketingMetadata({
  title: "Barrancas del Cobre · Viajes premium desde Chihuahua y Los Mochis | Rumbo Co",
  description:
    "Conoce Barrancas del Cobre con una experiencia premium: Creel, Divisadero y Chepe Express. Diseñamos tu viaje con hospedaje, tren, tours y traslados."
});

export default function Page() {
  return (
    <main className="pt-[96px]">
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta/80">
          Landing SEO (stub)
        </p>
        <h1 className="mt-4 font-serif text-4xl text-charcoal">Barrancas del Cobre</h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/70">
          Página preparada para una landing dedicada. Por ahora, la experiencia premium vive en la Home.
        </p>
        <div className="mt-8">
          <Link className="text-sm font-semibold text-terracotta underline underline-offset-4" href="/">
            Volver a Home
          </Link>
        </div>
      </section>
    </main>
  );
}

