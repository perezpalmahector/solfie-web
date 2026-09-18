import { useNavigate } from "react-router-dom";
import Container from "../common/Container";
import { useEffect } from "react";

export default function PrivacyPolicy() {
  const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // o "auto" si no quieres animación
    });
  }, []);
  return (
        
    <section className="py-16 bg-gray-50">
      <Container>
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center text-[#800000] hover:text-[#600000] font-medium"
        >
          ← Regresar
        </button>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          {/* Todo tu contenido */}
        </div>
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 lg:p-12">

          <h1 className="text-4xl font-bold text-[#800000] mb-2">
            Aviso de Privacidad
          </h1>

          <p className="text-gray-500 mb-10">
            Última actualización: 01 de enero de {new Date().getFullYear()}
          </p>
          <div className="space-y-8 text-gray-700 leading-8">

            <section>
              <p>
                <strong>SOLUCIONES FINANCIERAS EMPRESARIALES, S.C. (SOLFIE)</strong>,
                con domicilio en <strong>Calle Cerro de la Luz No. 132,
                Col. Colinas del Cimatario, Querétaro, Querétaro,
                C.P. 76090</strong>, es responsable del tratamiento y protección
                de sus datos personales conforme a la Ley Federal de Protección
                de Datos Personales en Posesión de los Particulares.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#800000] mb-3">
                ¿Para qué utilizaremos sus datos personales?
              </h2>

              <p>
                Los datos personales recabados serán utilizados para las
                siguientes finalidades necesarias para la prestación de nuestros
                servicios:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Registrar los asientos contables derivados de su actividad económica.</li>
                <li>Preparar estados financieros e información contable.</li>
                <li>Calcular contribuciones y obligaciones fiscales.</li>
              </ul>

              <p className="mt-6">
                Adicionalmente podremos utilizar su información para brindar un
                seguimiento personalizado al cumplimiento de obligaciones ante:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Servicio de Administración Tributaria (SAT).</li>
                <li>Instituto Mexicano del Seguro Social (IMSS).</li>
                <li>INFONAVIT.</li>
                <li>Secretaría de Finanzas del Estado de Querétaro.</li>
              </ul>

              <p className="mt-6">
                La negativa para el tratamiento de sus datos con estas
                finalidades adicionales no será motivo para negar los servicios
                contratados.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#800000] mb-3">
                Datos personales que recabamos
              </h2>

              <p>
                Para cumplir con las finalidades descritas podremos solicitar
                datos personales de:
              </p>

              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Identificación.</li>
                <li>Contacto.</li>
                <li>Información laboral.</li>
                <li>Información patrimonial.</li>
              </ul>

              <p className="mt-6">
                No recabamos datos personales sensibles para la prestación de
                nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#800000] mb-3">
                Transferencia de datos personales
              </h2>

              <p>
                Sus datos podrán compartirse con las autoridades fiscales
                mexicanas cuando sea necesario para el cumplimiento de las
                obligaciones legales derivadas de los servicios contratados.
              </p>

              <p className="mt-4">
                Si usted no manifiesta su negativa para dichas transferencias,
                entenderemos que nos ha otorgado su consentimiento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#800000] mb-3">
                Derechos ARCO
              </h2>

              <p>
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse
                al tratamiento de sus datos personales (Derechos ARCO).
              </p>

              <p className="mt-4">
                Para ejercer cualquiera de estos derechos deberá enviar su
                solicitud a:
              </p>

              <div className="mt-5 bg-gray-100 rounded-xl p-6">

                <p><strong>Carlos Bautista Sánchez</strong></p>

                <p>Director General</p>

                <p>Calle Cerro de la Luz  No. 132</p>

                <p>Col. Colinas del Cimatario</p>

                <p>Querétaro, Querétaro, C.P. 76090</p>

                <p className="mt-2 font-semibold">
                  cbautista@solfie.com.mx
                </p>

              </div>

              <p className="mt-6">
                La respuesta será emitida en un plazo máximo de tres días
                hábiles posteriores a la recepción de la solicitud.
              </p>

            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#800000] mb-3">
                Revocación del consentimiento
              </h2>

              <p>
                Usted podrá revocar el consentimiento otorgado para el
                tratamiento de sus datos personales mediante solicitud escrita o
                por correo electrónico. No obstante, en algunos casos podremos
                continuar tratándolos cuando exista una obligación legal.
              </p>

            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#800000] mb-3">
                Limitación del uso de sus datos
              </h2>

              <p>
                Puede limitar el uso o divulgación de su información
                inscribiéndose en el Registro Público para Evitar Publicidad de
                PROFECO.
              </p>

            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#800000] mb-3">
                Cambios al presente aviso
              </h2>

              <p>
                Este aviso podrá modificarse para cumplir nuevos requerimientos
                legales o por cambios en nuestros servicios. Las modificaciones
                serán notificadas mediante correo electrónico o por escrito.
              </p>

            </section>

            <section className="border-t pt-8">

              <h2 className="text-2xl font-bold text-[#800000] mb-4">
                Consentimiento
              </h2>

              <p>
                El titular manifiesta haber leído y comprendido el presente
                Aviso de Privacidad y otorga su consentimiento para el
                tratamiento de sus datos personales conforme a lo aquí
                establecido.
              </p>

              <div className="mt-16">
                <div className="border-b border-gray-500 w-72"></div>
                <p className="mt-2 text-sm">
                  Nombre y firma del titular
                </p>
              </div>

            </section>

          </div>

        </div>

      </Container>
    </section>
  );
}