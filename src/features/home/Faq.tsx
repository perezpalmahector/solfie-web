import { useState } from "react";
import { ChevronDown } from "lucide-react";

import Section from "../../components/common/Section";

const questions = [
  {
    question: "¿Qué tipo de empresas atienden?",
    answer:
      "Trabajamos con personas físicas con actividad empresarial, PyMES y empresas de distintos sectores.",
  },
  {
    question: "¿Pueden llevar toda mi contabilidad en línea?",
    answer:
      "Sí. Utilizamos herramientas digitales para que puedas enviar documentación y consultar información desde cualquier lugar.",
  },
  {
    question: "¿También realizan declaraciones mensuales y anuales?",
    answer:
      "Sí. Nos encargamos del cumplimiento de las obligaciones fiscales y del seguimiento correspondiente.",
  },
  {
    question: "¿Brindan asesoría fiscal?",
    answer:
      "Sí. Analizamos tu situación y proponemos estrategias fiscales dentro del marco legal.",
  },
];

export default function Faq() {
  const [selected, setSelected] = useState<number | null>(0);

  return (
    <Section id="faq">

      <div className="mx-auto max-w-4xl">

        <div className="text-center">

          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B3202D]">
            Preguntas Frecuentes
          </span>

          <h2 className="mt-6 text-5xl font-bold">
            Resolvemos tus dudas
          </h2>

        </div>

        <div className="mt-16 space-y-5">

          {questions.map((item, index) => (

            <div
              key={item.question}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white"
            >

              <button
                className="flex w-full items-center justify-between p-7 text-left"
                onClick={() =>
                  setSelected(selected === index ? null : index)
                }
              >

                <span className="text-lg font-semibold">
                  {item.question}
                </span>

                <ChevronDown
                  className={`transition ${
                    selected === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {selected === index && (

                <div className="border-t px-7 py-6 text-gray-600 leading-8">

                  {item.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </Section>
  );
}