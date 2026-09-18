import Section from "../../components/common/Section";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Analizamos la situación fiscal y financiera de tu empresa.",
  },
  {
    number: "02",
    title: "Planeación",
    text: "Definimos la mejor estrategia para cumplir tus objetivos.",
  },
  {
    number: "03",
    title: "Implementación",
    text: "Ejecutamos los procesos contables y fiscales acordados.",
  },
  {
    number: "04",
    title: "Seguimiento",
    text: "Monitoreamos resultados y brindamos asesoría continua.",
  },
];

export default function Process() {
  return (
    <Section id="proceso">

      <div className="mx-auto max-w-3xl text-center">

        <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B3202D]">
          Proceso
        </span>

        <h2 className="mt-6 text-5xl font-bold">
          Cómo trabajamos
        </h2>

      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-4">

        {steps.map((step) => (

          <div
            key={step.number}
            className="rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >

            <span className="text-5xl font-black text-[#B3202D]">
              {step.number}
            </span>

            <h3 className="mt-6 text-2xl font-bold">
              {step.title}
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              {step.text}
            </p>

          </div>

        ))}

      </div>

    </Section>
  );
}