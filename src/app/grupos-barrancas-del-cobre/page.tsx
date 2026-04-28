import { marketingMetadata } from "@/lib/seo";
import { GruposSeoStub } from "./GruposSeoStub";

export const metadata = marketingMetadata({
  title: "Grupos · Barrancas del Cobre y Chepe Express | Rumbo Co",
  description:
    "Viajes grupales personalizados a Barrancas del Cobre: amigos, empresas, escuelas, familias grandes y grupos privados. Sin precio público: cotización a medida."
});

export default function Page() {
  return (
    <main className="pt-[96px]">
      <GruposSeoStub />
    </main>
  );
}
