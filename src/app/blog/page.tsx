import Link from "next/link";
import { marketingMetadata } from "@/lib/seo";

export const metadata = marketingMetadata({
  title: "Blog · Barrancas del Cobre, Creel y Chepe Express | Rumbo Co",
  description:
    "Guías premium, rutas y recomendaciones para viajar a Barrancas del Cobre, Creel y Chepe Express."
});

export default function Page() {
  return (
    <main className="pt-[96px]">
      <section className="mx-auto w-full max-w-5xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta/80">
          Blog (stub)
        </p>
        <h1 className="mt-4 font-serif text-4xl text-charcoal">Blog</h1>
        <p className="mt-4 text-base leading-relaxed text-charcoal/70">
          Lista para conectar CMS o MDX. Ideal para posicionar: Barrancas del Cobre, Chepe Express, Creel Chihuahua, paquetes desde Chihuahua/Los Mochis.
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

