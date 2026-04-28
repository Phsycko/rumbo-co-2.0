import Link from "next/link";
import { marketingMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/contact";

export const metadata = marketingMetadata({
  title: "Términos y condiciones del servicio | Rumbo Co",
  description:
    "Condiciones generales de uso del sitio y contratación de servicios de travel design de Rumbo Co. Enlace al aviso de privacidad integral.",
  canonical: "https://www.rumbo.co/terminos"
});

const p = "mt-4 leading-relaxed text-ink/85";
const h2 = "mt-10 scroll-mt-24 font-serif text-2xl text-ink sm:mt-12";
const ul = "mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink/85";

export default function Page() {
  return (
    <main id="contenido-principal" className="pt-[96px]">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 text-ink/85 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">Legal</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-[2.75rem]">
          Términos y condiciones del servicio
        </h1>
        <p className="mt-2 text-sm text-ink/55">Última actualización: 27 de abril de 2026.</p>

        <section>
          <h2 className={h2}>1. Aceptación</h2>
          <p className={p}>
            Al utilizar el sitio web de Rumbo Co o solicitar cotizaciones y servicios, usted acepta estos términos. Si no
            está de acuerdo, absténgase de usar el sitio o contratar.
          </p>
        </section>

        <section>
          <h2 className={h2}>2. Naturaleza del servicio</h2>
          <p className={p}>
            Rumbo Co ofrece servicios de <strong className="text-ink">travel design</strong>, asesoría y coordinación de
            itinerarios. Muchos componentes del viaje son prestados por <strong className="text-ink">terceros</strong>{" "}
            (hoteles, transporte, operadores, ferrocarril, etc.) bajo sus propias condiciones. Rumbo Co actúa como
            intermediario o coordinador salvo que se pacte lo contrario por escrito.
          </p>
        </section>

        <section>
          <h2 className={h2}>3. Información y exactitud</h2>
          <p className={p}>
            Usted es responsable de la veracidad de los datos que proporciona. Los itinerarios, precios y disponibilidad
            pueden cambiar por factores externos; la información del sitio es orientativa hasta confirmación en
            propuesta o contrato.
          </p>
        </section>

        <section>
          <h2 className={h2}>4. Propiedad intelectual</h2>
          <p className={p}>
            Contenidos del sitio (textos, marca, diseño) son propiedad de Rumbo Co o de sus licenciantes, salvo
            indicación en contrario. No se permite copia o uso comercial no autorizado.
          </p>
        </section>

        <section>
          <h2 className={h2}>5. Limitación de responsabilidad</h2>
          <p className={p}>
            En la medida permitida por la ley aplicable, Rumbo Co no será responsable por daños indirectos, lucro
            cesante o hechos de terceros fuera de su control razonable (incluidos retrasos, cancelaciones o cambios por
            clima, autoridad o proveedores). Las responsabilidades específicas se rigen por el contrato o propuesta
            aceptada.
          </p>
        </section>

        <section>
          <h2 className={h2}>6. Privacidad, reservaciones y cancelaciones</h2>
          <p className={p}>
            El tratamiento de datos personales, la política de reservación, la política de cancelación y el compromiso de
            buenas prácticas se rigen por el{" "}
            <Link
              className="font-medium text-copper underline underline-offset-2 hover:text-ink"
              href="/aviso-de-privacidad"
            >
              Aviso de privacidad integral
            </Link>
            . Para ejercer derechos ARCO o consultas:{" "}
            <a className="text-copper underline underline-offset-2 hover:text-ink" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className={h2}>7. Ley y jurisdicción</h2>
          <p className={p}>
            Salvo pacto distinto por escrito, estos términos se interpretan conforme a las leyes de los{" "}
            <strong className="text-ink">Estados Unidos Mexicanos</strong>. Las partes se someten a la competencia de los
            tribunales del Estado de <strong className="text-ink">Chihuahua</strong>, renunciando a cualquier otro fuero
            que pudiera corresponderles.
          </p>
        </section>

        <section>
          <h2 className={h2}>8. Modificaciones</h2>
          <p className={p}>
            Rumbo Co puede actualizar estos términos. La versión vigente se publicará en esta URL; el uso continuado del
            sitio después de cambios implica aceptación salvo que la ley exija procedimiento distinto.
          </p>
        </section>

        <section>
          <h2 className={h2}>9. Contacto</h2>
          <ul className={ul}>
            <li>
              Correo:{" "}
              <a className="text-copper underline underline-offset-2 hover:text-ink" href={`mailto:${CONTACT.email}`}>
                {CONTACT.email}
              </a>
            </li>
            <li>WhatsApp: +52 {CONTACT.whatsAppDisplay}</li>
            <li>Teléfono: +52 {CONTACT.phoneDisplay}</li>
          </ul>
        </section>

        <p className="mt-12 border-t border-ink/10 pt-8 text-sm text-ink/55">
          <Link className="font-medium text-copper underline underline-offset-2 hover:text-ink" href="/">
            Volver al inicio
          </Link>
          {" · "}
          <Link className="font-medium text-copper underline underline-offset-2 hover:text-ink" href="/aviso-de-privacidad">
            Aviso de privacidad integral
          </Link>
        </p>
      </article>
    </main>
  );
}
