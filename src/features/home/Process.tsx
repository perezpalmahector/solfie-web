import { motion } from "framer-motion";

import Section from "../../components/common/Section";

import diagnostico from "../../assets/images/IMG_0263.jpg";
import planeacion from "../../assets/images/IMG_0264.jpg";
import implementacion from "../../assets/images/IMG_0265.jpg";
import seguimiento from "../../assets/images/IMG_0266.jpg";
import solfieLogo from "../../assets/images/logo.png";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    text: "Analizamos la situación fiscal y financiera de tu empresa.",
    image: diagnostico,
  },
  {
    number: "02",
    title: "Planeación",
    text: "Definimos la mejor estrategia para cumplir tus objetivos.",
    image: planeacion,
  },
  {
    number: "03",
    title: "Implementación",
    text: "Ejecutamos los procesos contables y fiscales acordados.",
    image: implementacion,
  },
  {
    number: "04",
    title: "Seguimiento",
    text: "Monitoreamos resultados y brindamos asesoría continua.",
    image: seguimiento,
  },
];

export default function Process() {
  return (
    <Section id="proceso">

      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">

        <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B3202D]">
          Proceso
        </span>

        <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
          Cómo trabajamos
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Te acompañamos de manera ordenada durante cada etapa del proceso.
        </p>

      </div>

      {/* STEPS */}
      <div className="mt-16 grid gap-8 lg:grid-cols-4">

        {steps.map((step, index) => (

          <motion.div
            key={step.number}
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{
              y: -8,
            }}
            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
          >

            {/* FOTO */}
            <div
              className="relative overflow-hidden"
              onContextMenu={(e) => e.preventDefault()}
            >

              {/* FOTO ORIGINAL */}
              <img
                src={step.image}
                alt={`${step.title} - proceso SOLFIE`}
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                className="h-48 w-full select-none object-cover transition duration-700 group-hover:scale-105"
              />

              {/* MARCA DE AGUA SOLFIE */}
              <div
                className="pointer-events-none absolute left-[12%] top-[35%] w-[120px] select-none opacity-[0.09]"
                aria-hidden="true"
              >
                <img
                  src={solfieLogo}
                  alt=""
                  draggable="false"
                  className="block h-auto w-full select-none"
                />
              </div>

              {/* Número sobre la imagen */}
              <div className="pointer-events-none absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#B3202D] text-sm font-black text-white shadow-lg">
                {step.number}
              </div>

            </div>

            {/* CONTENIDO */}
            <div className="p-8">

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                {step.text}
              </p>

            </div>

          </motion.div>

        ))}

      </div>

    </Section>
  );
}
