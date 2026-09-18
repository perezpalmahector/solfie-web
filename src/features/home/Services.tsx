import {
  Calculator,
  Landmark,
  Users,
  Scale,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";

import { motion } from "framer-motion";
import Section from "../../components/common/Section";

const services = [
  {
    title: "Contabilidad General",
    description:
      "Mantenemos la claridad financiera de su negocio a través de nuestros servicios de contabilidad en general. Nuestro equipo reduce la fricción burocrática y administrativa, asegurando que su información financiera sea precisa y cumpla con las normativas vigentes. Esto le permite enfocarse con total seguridad en la operación y crecimiento de su empresa.",
    icon: Calculator,
  },
  {
    title: "Estrategias Fiscales dentro del marco de la Ley",
    description:
      "Como especialistas en materia fiscal, ofrecemos una rigurosa planificación de impuestos individuales y para empresas. Navegamos las complejidades del panorama fiscal para diseñar estrategias que garantizan el cumplimiento normativo estricto, mientras optimizamos la salud financiera de su patrimonio dentro del marco legal.",
    icon: Landmark,
  },
  {
    title: "Derecho Corporativo",
    description:
      "Con nuestra especialización en materia corporativa, proveemos la estructura y el asesoramiento comercial necesarios para su éxito. Desde servicios integrales para iniciar una empresa hasta el mantenimiento normativo continuo, aseguramos que su entidad opere con total transparencia y rectitud en el mercado corporativo.",
    icon: Scale,
  },
  {
    title: "Prevención de Lavado de Dinero (PLD)",
    description:
      "Destacamos por nuestra alta especialización en la prevención de lavado de dinero. Implementamos auditorías estratégicas y controles de cumplimiento para proteger a su organización frente a riesgos legales, brindándole la tranquilidad operativa que requieren los entornos de alto nivel regulatorio.",
    icon: ShieldCheck,
  },
  {
    title: "Beneficiario Controlador (Fiscal y PLD)",
    description:
      "Apoyados en nuestra experiencia técnica sobre los marcos legales, le asistimos en el cumplimiento, identificación y resguardo de la información del beneficiario controlador. Reducimos la carga cognitiva asociada a esta compleja legislación, asegurando la integridad regulatoria y evitando contingencias legales para su empresa.",
    icon: BadgeDollarSign,
  },
  {
    title: "Nóminas y Seguridad Social",
    description:
      "Con sólido conocimiento en materia laboral, gestionamos de manera metódica la contabilidad de nóminas salariales. Garantizamos el cálculo exacto y el cumplimiento puntual de todas sus obligaciones obrero-patronales y de seguridad social, ofreciendo certeza jurídica tanto a la empresa como a sus colaboradores.",
    icon: Users,
  },
];

export default function Services() {

  const handleKnowMore = (targetId: string) => {
    const el = document.getElementById(targetId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <Section>

      <div id="servicios">

        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B3202D]">
            Servicios
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#222]">
            Soluciones integrales para impulsar su empresa
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Brindamos servicios contables, fiscales, corporativos y de cumplimiento
            regulatorio con un enfoque profesional, estratégico y personalizado.
          </p>

        </div>


        {/* GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#B3202D] hover:shadow-2xl"
              >

                {/* ICON */}
                <div className="mb-6 inline-flex rounded-2xl bg-red-50 p-4">
                  <Icon
                    size={34}
                    className="text-[#B3202D]"
                  />
                </div>


                {/* TITLE */}
                <motion.h3
                  className="text-2xl font-bold text-[#222]"
                  whileHover={{
                    x: 8,
                    color: "#800000",
                    textShadow:
                      "0px 0px 10px rgba(128,0,0,.25)",
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  {service.title}
                </motion.h3>


                {/* DESCRIPTION */}
                <p className="mt-4 leading-8 text-justify text-gray-600">
                  {service.description}
                </p>


                {/* BUTTON */}
                <button
                  onClick={() => handleKnowMore("contacto")}
                  className="mt-8 font-semibold text-[#B3202D] transition group-hover:translate-x-2"
                >
                  Conocer más →
                </button>

              </div>
            );

          })}

        </div>

      </div>

    </Section>
  );
}