import {
  ShieldCheck,
  TrendingUp,
  Laptop,
  Users,
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";

import { motion } from "framer-motion";
import Section from "../../components/common/Section";

const items = [
  {
    title: "Experiencia",
    text: "Más de una década apoyando empresas de diferentes sectores.",
    icon: ShieldCheck,
  },
  {
    title: "Tecnología",
    text: "Herramientas digitales para agilizar procesos contables.",
    icon: Laptop,
  },
  {
    title: "Planeación",
    text: "Estrategias financieras enfocadas en el crecimiento.",
    icon: TrendingUp,
  },
  {
    title: "Acompañamiento",
    text: "Atención personalizada durante todo el año.",
    icon: Users,
  },
];

const philosophy = [
  {
    title: "Misión",
    text:
      "Brindar soluciones contables, fiscales y financieras que impulsen el crecimiento y cumplimiento de nuestros clientes.",
    icon: Target,
  },
  {
    title: "Visión",
    text:
      "Ser un despacho contable líder a nivel nacional, reconocido por su innovación, confianza y excelencia en el servicio.",
    icon: Eye,
  },
  {
    title: "Valores",
    text:
      "Integridad, responsabilidad, transparencia, compromiso y orientación al cliente.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="nosotros">

      {/* HEADER */}
      <div className="mx-auto max-w-3xl text-center">

        <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B3202D]">
          Nosotros
        </span>

        <h2 className="mt-6 text-4xl lg:text-5xl font-bold">
          ¿Por qué elegir SOLFIE?
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Combinamos experiencia, conocimiento fiscal y tecnología para
          ofrecer un servicio cercano y de alta calidad.
        </p>

      </div>

      {/* PRINCIPALES */}
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
  key={item.title}
  whileHover={{
    y: -10,
    scale: 1.02
  }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 18
  }}
  className="group rounded-3xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-[#800000] hover:shadow-2xl"
>
              <motion.div
    whileHover={{
        rotate: 8,
        scale: 1.12
    }}
    transition={{
        type: "spring",
        stiffness: 300
    }}
    className="mb-6 inline-flex rounded-2xl bg-red-50 p-4"
>
                <Icon size={34} className="text-[#B3202D]" />
              </motion.div>

             <motion.h3
    whileHover={{
        color: "#800000",
        x: 6
    }}
    transition={{ duration: .25 }}
    className="text-2xl font-bold"
>
    {item.title}
</motion.h3>

              <p className="mt-4 leading-8 text-gray-600">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* MISIÓN / VISIÓN / VALORES */}
      <div className="mt-20 grid gap-8 md:grid-cols-3">

        {philosophy.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-[#B3202D] hover:shadow-xl"
            >
              <div className="mx-auto mb-6 inline-flex rounded-2xl bg-red-50 p-4">
                <Icon size={34} className="text-[#B3202D]" />
              </div>

              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="mt-4 text-gray-600 leading-7">
                {item.text}
              </p>
            </div>
          );
        })}

      </div>

    </Section>
  );
}