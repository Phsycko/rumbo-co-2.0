import Link from "next/link";
import { marketingMetadata } from "@/lib/seo";

export const metadata = marketingMetadata({
  title: "Paquetes desde Chihuahua · Barrancas del Cobre y Chepe Express | Rumbo Co",
  description:
    "Paquetes a Barrancas del Cobre saliendo desde Chihuahua: rutas a Creel, Divisadero y Chepe Express con hospedaje, traslados y tours."
});

export default function Page() {
  return (
    <main className="pt-[96px]">
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta/80">
          Landing SEO (stub)
        </p>
        <h1 className="mt-4 font-serif text-4xl text-charcoal">Paquetes desde Chihuahua</h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/70">
          Lista para construir una landing dedicada por origen, con rutas recomendadas y calendarios.
        </p>
        <div className="mt-8">
          <Link className="text-sm font-semibold text-terracotta underline underline-offset-4" href="/#rutas">
            Ver rutas en Home
          </Link>
        </div>
      </section>
    </main>
  );
}

