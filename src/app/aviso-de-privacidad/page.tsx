import Link from "next/link";
import { marketingMetadata } from "@/lib/seo";
import { CONTACT } from "@/lib/contact";

export const metadata = marketingMetadata({
  title: "Aviso de privacidad, reservaciones y cancelaciones | Rumbo Co",
  description:
    "Aviso de privacidad integral, política de reservación, política de cancelación y compromisos de protección de datos personales de Rumbo Co.",
  canonical: "https://www.rumbo.co/aviso-de-privacidad"
});

const p = "mt-4 leading-relaxed text-ink/85";
const h2 = "mt-10 scroll-mt-24 font-serif text-2xl text-ink sm:mt-12";
const h3 = "mt-8 font-sans text-sm font-semibold uppercase tracking-[0.12em] text-ink/70";
const ul = "mt-4 list-disc space-y-2 pl-5 leading-relaxed text-ink/85";

export default function Page() {
  return (
    <main id="contenido-principal" className="pt-[96px]">
      <article className="mx-auto w-full max-w-3xl px-6 py-16 text-ink/85 sm:px-8 sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">Legal</p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink sm:text-[2.75rem]">
          Aviso de privacidad integral
        </h1>
        <p className="mt-2 text-sm text-ink/55">
          Última actualización: 27 de abril de 2026. Incluye políticas de reservación y cancelación.
        </p>

        <section aria-labelledby="intro">
          <h2 id="intro" className={h2}>
            1. Identidad del responsable
          </h2>
          <p className={p}>
            <strong className="text-ink">Rumbo Co</strong> (“Rumbo Co”, “nosotros”), en cumplimiento de la Ley Federal
            de Protección de Datos Personales en Posesión de los Particulares (“LFPDPPP”) y su Reglamento, pone a su
            disposición el presente <strong className="text-ink">aviso de privacidad integral</strong>, así como las{" "}
            <strong className="text-ink">políticas de reservación y cancelación</strong> aplicables a los servicios de
            diseño, asesoría y coordinación de viajes que ofrecemos.
          </p>
          <p className={p}>
            Para cualquier asunto relacionado con datos personales o el ejercicio de sus derechos, puede contactarnos
            en:{" "}
            <a className="text-copper underline underline-offset-2 hover:text-ink" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>
            , WhatsApp +52 {CONTACT.whatsAppDisplay}, o al teléfono +52 {CONTACT.phoneDisplay}.
          </p>
          <p className={`${p} text-sm text-ink/60`}>
            Este documento tiene fines informativos y de transparencia. No sustituye asesoría jurídica individual; si lo
            requiere, consulte a un abogado.
          </p>
        </section>

        <section aria-labelledby="datos">
          <h2 id="datos" className={h2}>
            2. Datos personales que podemos tratar
          </h2>
          <p className={p}>Según el servicio contratado o solicitado, podemos tratar, entre otros:</p>
          <ul className={ul}>
            <li>
              <strong className="text-ink">Identificación y contacto:</strong> nombre completo, teléfono, correo
              electrónico, ciudad o país de residencia.
            </li>
            <li>
              <strong className="text-ink">Datos del viaje:</strong> fechas, número de personas, preferencias de ruta,
              alergias o restricciones relevantes para la logística, documentación necesaria para reservas (por ejemplo,
              nombres para boletos o hoteles cuando un tercero lo exija).
            </li>
            <li>
              <strong className="text-ink">Datos de pago indirectos:</strong> comprobantes o referencias que usted nos
              envíe; los datos completos de tarjeta suelen ser tratados directamente por instituciones financieras o
              pasarelas de pago, no por nosotros.
            </li>
            <li>
              <strong className="text-ink">Datos técnicos del sitio:</strong> dirección IP, tipo de navegador, páginas
              visitadas y cookies, conforme a la sección 7.
            </li>
          </ul>
        </section>

        <section aria-labelledby="finalidades">
          <h2 id="finalidades" className={h2}>
            3. Finalidades del tratamiento
          </h2>
          <h3 className={h3}>3.1 Finalidades primarias (necesarias)</h3>
          <ul className={ul}>
            <li>Responder solicitudes de información, cotizaciones y seguimiento comercial previo al servicio.</li>
            <li>
              Operar reservas, itinerarios, transporte, pernocta y experiencias turísticas coordinadas por Rumbo Co.
            </li>
            <li>Cumplir obligaciones contractuales y legales aplicables.</li>
            <li>Atender dudas, cambios, reclamaciones o soporte durante el viaje.</li>
          </ul>
          <h3 className={h3}>3.2 Finalidades secundarias (opcionales)</h3>
          <ul className={ul}>
            <li>Enviar comunicaciones promocionales o newsletters sobre destinos y servicios similares.</li>
            <li>Realizar encuestas de satisfacción o mejora de servicio.</li>
          </ul>
          <p className={p}>
            Las finalidades secundarias requieren su <strong className="text-ink">consentimiento</strong>, salvo que la
            ley permita otro supuesto. Puede negarse sin que ello implique una relación negativa con las finalidades
            primarias, salvo donde exista una relación previa que lo justifique conforme a la ley.
          </p>
        </section>

        <section aria-labelledby="transferencias">
          <h2 id="transferencias" className={h2}>
            4. Transferencias y encargados
          </h2>
          <p className={p}>
            Para operar su viaje podemos compartir datos necesarios con <strong className="text-ink">proveedores</strong>{" "}
            (por ejemplo, hoteles, transportistas, operadores de tours, ferrocarril u otros prestadores). En la medida de
            lo posible procuramos que dichos terceros traten los datos conforme a sus propios avisos de privacidad y
            únicamente para fines vinculados al servicio contratado.
          </p>
          <p className={p}>
            No vendemos listas de contacto. Cualquier transferencia nacional o internacional se realizará en los términos
            del artículo 37 y demás aplicables de la LFPDPPP.
          </p>
        </section>

        <section aria-labelledby="arco">
          <h2 id="arco" className={h2}>
            5. Derechos ARCO y derechos adicionales
          </h2>
          <p className={p}>Usted puede ejercer, conforme a la ley, los derechos de:</p>
          <ul className={ul}>
            <li>
              <strong className="text-ink">Acceso</strong> a sus datos personales y conocer el tratamiento que les damos.
            </li>
            <li>
              <strong className="text-ink">Rectificación</strong> cuando sean inexactos o incompletos.
            </li>
            <li>
              <strong className="text-ink">Cancelación</strong> respecto de sus datos personales cuando considere que
              no se requieren para alguna de las finalidades del aviso, o el tratamiento no es conforme a la ley (derecho
              ARCO; distinto de la política de cancelación de servicios turísticos en la sección 10).
            </li>
            <li>
              <strong className="text-ink">Oposición</strong> al tratamiento para fines específicos.
            </li>
            <li>
              <strong className="text-ink">Revocación del consentimiento</strong> en los casos aplicables, sin efectos
              retroactivos.
            </li>
          </ul>
          <p className={p}>
            Para ejercer estos derechos, envíe solicitud al correo{" "}
            <a className="text-copper underline underline-offset-2 hover:text-ink" href={`mailto:${CONTACT.email}`}>
              {CONTACT.email}
            </a>{" "}
            indicando nombre completo, medio de contacto, copia simple de identificación y descripción clara de su
            solicitud. Le responderemos en los plazos legales.
          </p>
        </section>

        <section aria-labelledby="conservacion">
          <h2 id="conservacion" className={h2}>
            6. Conservación y seguridad
          </h2>
          <p className={p}>
            Conservamos datos personales el tiempo necesario para cumplir las finalidades descritas, las obligaciones
            legales o contractuales, y los plazos de prescripción aplicables. Posteriormente los bloqueamos o suprimimos
            conforme a procedimientos internos.
          </p>
          <p className={p}>
            Implementamos medidas de seguridad{" "}
            <strong className="text-ink">administrativas, técnicas y físicas</strong> proporcionales al riesgo (control de
            accesos, uso de canales cifrados cuando corresponde, minimización de datos, copias de respaldo razonables).
            Ningún sistema es infalible; si detectamos un incidente que afecte sus datos, daremos seguimiento conforme a
            la normatividad aplicable.
          </p>
        </section>

        <section aria-labelledby="cookies">
          <h2 id="cookies" className={h2}>
            7. Cookies y tecnologías similares
          </h2>
          <p className={p}>
            El sitio puede usar cookies o tecnologías similares para operación básica, analítica o preferencias. Puede
            configurar su navegador para rechazar cookies; algunas funciones del sitio podrían verse limitadas.
          </p>
        </section>

        <section aria-labelledby="cambios">
          <h2 id="cambios" className={h2}>
            8. Cambios al aviso
          </h2>
          <p className={p}>
            Podemos actualizar este aviso para reflejar cambios legales, operativos o de servicio. Publicaremos la versión
            vigente en esta misma URL con fecha de actualización. Le recomendamos revisarlo periódicamente.
          </p>
        </section>

        <section aria-labelledby="reservacion">
          <h2 id="reservacion" className={h2}>
            9. Política de reservación
          </h2>
          <p className={p}>
            Las reservaciones de servicios turísticos y de transporte suelen depender de{" "}
            <strong className="text-ink">disponibilidad</strong> de terceros (ferrocarril, hoteles, operadores). Una
            solicitud de cotización no garantiza disponibilidad hasta confirmación expresa por Rumbo Co y, en su caso,
            pago de anticipos o liquidación según se acuerde por escrito.
          </p>
          <p className={p}>
            Los <strong className="text-ink">anticipos o depósitos</strong> quedan{" "}
            <strong className="text-ink">sujetos en todo momento a las políticas del proveedor</strong> que opera el
            servicio (hotel, transporte, ferrocarril, tour, etc.). Rumbo Co canaliza pagos conforme a lo acordado; el
            eventual reembolso o retención depende de lo que ese proveedor permita contractual y operativamente.
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-ink">Confirmación:</strong> la reserva queda sujeta a confirmación por escrito
              (correo o mensaje acordado) y a los términos del proveedor final.
            </li>
            <li>
              <strong className="text-ink">Anticipos y depósitos:</strong> cuando aplique, los montos y calendarios de
              pago se indicarán en la propuesta o contrato. El incumplimiento de pagos en fecha puede liberar la
              disponibilidad sin responsabilidad para Rumbo Co más allá de lo que marque la ley o el contrato.{" "}
              <strong className="text-ink">
                Si el proveedor no devuelve el dinero al cancelar o modificar, no habrá reembolso por parte de Rumbo Co
              </strong>{" "}
              por montos que el proveedor haya retenido o no haya devuelto.
            </li>
            <li>
              <strong className="text-ink">Documentación:</strong> el cliente es responsable de contar con identificación
              vigente, permisos o visas requeridas. Ciertos servicios pueden requerir datos adicionales con anticipación
              razonable.
            </li>
            <li>
              <strong className="text-ink">Itinerarios sujetos a operación:</strong> horarios de tren, clima, cierres de
              sitios o decisiones de autoridad pueden modificar el itinerario; en esos casos procuraremos alternativas
              razonables.
            </li>
          </ul>
        </section>

        <section aria-labelledby="cancelacion">
          <h2 id="cancelacion" className={h2}>
            10. Política de cancelación
          </h2>
          <p className={p}>
            Las políticas de reembolso o penalización dependen en gran medida de{" "}
            <strong className="text-ink">proveedores terceros</strong> (políticas de hotel, boletos no reembolsables,
            etc.). Por ello, las condiciones específicas se comunicarán en su cotización o contrato. A falta de acuerdo
            escrito particular, aplican las siguientes reglas generales:
          </p>
          <p className={p}>
            <strong className="text-ink">Depósitos y reembolsos:</strong> todo depósito o anticipo queda sujeto a lo que
            cada proveedor permita devolver o retener.{" "}
            <strong className="text-ink">
              Si el proveedor no devuelve el dinero, Rumbo Co no realizará reembolso alguno por ese concepto
            </strong>
            ; solo podrá gestionarse devolución en la medida en que el tercero efectivamente la libere a favor del
            cliente o de Rumbo Co, según corresponda al flujo contractual acordado.
          </p>
          <ul className={ul}>
            <li>
              <strong className="text-ink">Cancelación por el cliente:</strong> notifique por escrito lo antes posible.
              Pueden aplicarse penalidades conforme a lo ya pagado a proveedores y a los plazos de cancelación de cada
              prestador.
            </li>
            <li>
              <strong className="text-ink">Cancelación o cambio por Rumbo Co:</strong> si por causas imputables a Rumbo
              Co no pudiéramos prestar un servicio esencial acordado, procuraremos reprogramación o reembolso de lo
              razonablemente recuperable de terceros, sin perjuicio de lo establecido en el contrato aplicable.
            </li>
            <li>
              <strong className="text-ink">Fuerza mayor o caso fortuito:</strong> (incluidos fenómenos naturales, cierres
              gubernamentales, huelgas, fallas de infraestructura, pandemias, etc.) pueden impedir o limitar el servicio
              en la fecha prevista. En esos supuestos,{" "}
              <strong className="text-ink">
                Rumbo Co procederá a una reprogramación de fechas del itinerario
              </strong>
              , sujeta a disponibilidad de los mismos u otros proveedores y a las condiciones que estos impongan. No se
              garantiza reembolso en dinero salvo que el proveedor lo autorice conforme a sus políticas y a la ley
              aplicable.
            </li>
            <li>
              <strong className="text-ink">No presentación (no show):</strong> si el cliente no se presenta en tiempo y
              forma a un servicio sin aviso previo acordado,{" "}
              <strong className="text-ink">
                no habrá devolución de depósito ni anticipo, ni cambio de fecha
              </strong>{" "}
              por parte de Rumbo Co respecto de ese servicio, sin perjuicio de lo que un proveedor específico documente
              por escrito en contra de esta regla general.
            </li>
          </ul>
        </section>

        <section aria-labelledby="cumplimiento">
          <h2 id="cumplimiento" className={h2}>
            11. Compromiso de cumplimiento y buenas prácticas
          </h2>
          <p className={p}>
            Rumbo Co adopta un enfoque de <strong className="text-ink">responsabilidad proactiva</strong> en materia de
            datos personales y servicio al cliente. Como referencia de buenas prácticas (sin perjuicio de auditorías o
            requisitos adicionales que la ley o un contrato puedan imponer), manifestamos que:
          </p>
          <ul className={ul}>
            <li>
              Mantenemos este <strong className="text-ink">aviso de privacidad publicado y accesible</strong> desde el
              sitio web, con lenguaje claro y actualizado.
            </li>
            <li>
              Aplicamos principios de{" "}
              <strong className="text-ink">
                licitud, consentimiento, información, calidad, finalidad, lealtad, proporcionalidad y responsabilidad
              </strong>{" "}
              en el tratamiento de datos personales.
            </li>
            <li>
              Practicamos la <strong className="text-ink">minimización</strong>: solo solicitamos datos razonablemente
              necesarios para cotizar y operar el viaje.
            </li>
            <li>
              Capacitamos de forma continua al personal en <strong className="text-ink">confidencialidad</strong> y uso
              adecuado de la información de clientes.
            </li>
            <li>
              Conservamos evidencia razonable de{" "}
              <strong className="text-ink">instrucciones y acuerdos comerciales</strong> (correos, mensajes, propuestas)
              para dar trazabilidad a reservas y cancelaciones.
            </li>
            <li>
              Revisamos periódicamente este aviso y las políticas operativas para alinearlas con cambios normativos o de
              negocio.
            </li>
          </ul>
          <p className={p}>
            Esta sección documenta el <strong className="text-ink">esfuerzo de cumplimiento</strong> y la cultura de
            transparencia de Rumbo Co. No constituye certificación oficial ante autoridad alguna, salvo que en el futuro
            se obtenga expresamente.
          </p>
        </section>

        <p className="mt-12 border-t border-ink/10 pt-8 text-sm text-ink/55">
          <Link className="font-medium text-copper underline underline-offset-2 hover:text-ink" href="/">
            Volver al inicio
          </Link>
          {" · "}
          <Link className="font-medium text-copper underline underline-offset-2 hover:text-ink" href="/terminos">
            Términos y condiciones del servicio
          </Link>
        </p>
      </article>
    </main>
  );
}
