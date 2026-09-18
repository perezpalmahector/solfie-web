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

import equipo from "../../assets/images/IMG_0114.jpg";
import directorVertical from "../../assets/images/IMG_0144.jpg";
import solfieLogo from "../../assets/images/logo.png";

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
    text: "Brindar soluciones contables, fiscales y financieras que impulsen el crecimiento y cumplimiento de nuestros clientes.",
    icon: Target,
  },
  {
    title: "Visión",
    text: "Ser un despacho contable líder a nivel nacional, reconocido por su innovación, confianza y excelencia en el servicio.",
    icon: Eye,
  },
  {
    title: "Valores",
    text: "Integridad, responsabilidad, transparencia, compromiso y orientación al cliente.",
    icon: HeartHandshake,
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="nosotros">

      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}

      <div className="mx-auto max-w-3xl text-center">

        <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B3202D]">
          Nosotros
        </span>

        <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
          ¿Por qué elegir SOLFIE?
        </h2>

        <p className="mt-6 text-lg text-gray-600">
          Combinamos experiencia, conocimiento fiscal y tecnología para
          ofrecer un servicio cercano y de alta calidad.
        </p>

      </div>


      {/* ============================= */}
      {/* FOTO INSTITUCIONAL */}
      {/* ============================= */}

      <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">

        {/* FOTO IMG_0114 */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="overflow-hidden rounded-3xl shadow-xl"
        >

          <div
            className="relative w-full overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
          >

            {/* FOTO ORIGINAL */}

            <img
              src={equipo}
              alt="Equipo de SOLFIE durante una reunión"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              className="block h-auto w-full select-none"
            />

            {/* MARCA DE AGUA INSTITUCIONAL */}

            <div
              className="
                pointer-events-none
                absolute
                left-[12%]
                top-[35%]
                z-10
                w-[120px]
                select-none
                opacity-[0.06]
              "
              aria-hidden="true"
            >
              <img
                src={solfieLogo}
                alt=""
                draggable="false"
                className="
                  block
                  h-auto
                  w-full
                  select-none
                  brightness-0
                  invert
                "
              />
            </div>

          </div>

        </motion.div>


        {/* TEXTO */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="lg:px-6"
        >

          <span className="text-sm font-semibold uppercase tracking-[3px] text-[#B3202D]">
            Experiencia que respalda
          </span>

          <h3 className="mt-4 text-3xl font-bold text-slate-900">
            Un equipo que entiende las necesidades de tu empresa
          </h3>

          <p className="mt-5 leading-8 text-gray-600">
            En SOLFIE combinamos experiencia contable, conocimiento fiscal
            y atención personalizada para acompañar a nuestros clientes
            en cada etapa de su crecimiento.
          </p>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#B3202D]" />

        </motion.div>

      </div>


      {/* ============================= */}
      {/* PRINCIPALES */}
      {/* ============================= */}

      <div className="mt-16 grid gap-8 md:grid-cols-2">

        {items.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 18,
              }}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                transition-all
                duration-300
                hover:border-[#800000]
                hover:shadow-2xl
              "
            >

              {/* ICONO */}

              <motion.div
                whileHover={{
                  rotate: 8,
                  scale: 1.12,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                }}
                className="mb-6 inline-flex rounded-2xl bg-red-50 p-4"
              >

                <Icon
                  size={34}
                  className="text-[#B3202D]"
                />

              </motion.div>


              {/* TITULO */}

              <motion.h3
                whileHover={{
                  color: "#800000",
                  x: 6,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="text-2xl font-bold"
              >
                {item.title}
              </motion.h3>


              {/* TEXTO */}

              <p className="mt-4 leading-8 text-gray-600">
                {item.text}
              </p>

            </motion.div>

          );

        })}

      </div>


      {/* ============================= */}
      {/* MENSAJE DEL SOCIO FUNDADOR */}
      {/* ============================= */}

      <div className="mt-20 grid items-center gap-10 lg:grid-cols-5">

        {/* ============================= */}
        {/* FOTO DEL DIRECTOR */}
        {/* ============================= */}

        <motion.div
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
            duration: 0.6,
          }}
          className="
            overflow-hidden
            rounded-3xl
            shadow-xl
            lg:col-span-2
          "
        >

          <div
            className="relative w-full overflow-hidden"
            onContextMenu={(e) => e.preventDefault()}
          >

            {/* FOTO ORIGINAL */}

            <img
              src={directorVertical}
              alt="Director y Socio Fundador de SOLFIE"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              className="block h-auto w-full select-none"
            />

            {/* MARCA DE AGUA INSTITUCIONAL */}

            <div
              className="
                pointer-events-none
                absolute
                left-[12%]
                top-[35%]
                z-10
                w-[120px]
                select-none
                opacity-[0.06]
              "
              aria-hidden="true"
            >
              <img
                src={solfieLogo}
                alt=""
                draggable="false"
                className="
                  block
                  h-auto
                  w-full
                  select-none
                  brightness-0
                  invert
                "
              />
            </div>

          </div>

        </motion.div>


        {/* ============================= */}
        {/* MENSAJE DEL FUNDADOR */}
        {/* ============================= */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="lg:col-span-3 lg:px-4"
        >

          {/* ETIQUETA */}

          <span className="text-sm font-semibold uppercase tracking-[3px] text-[#B3202D]">
            Mensaje del Socio Fundador
          </span>


          {/* TITULO */}

          <h3 className="mt-4 text-3xl font-bold leading-tight text-slate-900 lg:text-4xl">
            Estrategias financieras con visión, experiencia y compromiso
          </h3>


          {/* FRASE DESTACADA */}

          <div className="relative mt-7 border-l-4 border-[#B3202D] pl-6">

            <p className="text-lg font-medium leading-8 text-slate-700">
              Detrás de cada estrategia financiera exitosa hay un compromiso
              absoluto con la tranquilidad de nuestros clientes.
            </p>

          </div>


          {/* MENSAJE */}

          <p className="mt-6 leading-8 text-gray-600">
            Como Socio Fundador de SOLFIE, mi objetivo ha sido consolidar una
            firma contable en Querétaro donde los empresarios no solo
            encuentren el cumplimiento estricto de sus obligaciones fiscales,
            sino un aliado estratégico para proteger y hacer crecer su
            patrimonio.
          </p>


          <p className="mt-5 leading-8 text-gray-600">
            Con más de 20 años de experiencia en consultoría contable y fiscal,
            diseñamos soluciones a la medida que transforman la complejidad de
            los impuestos en certeza financiera para tu empresa.
          </p>


          {/* FIRMA / IDENTIDAD */}

          <div className="mt-7">

            <div className="h-1 w-20 rounded-full bg-[#B3202D]" />

            <p className="mt-4 text-sm font-semibold uppercase tracking-[2px] text-slate-900">
              Socio Fundador · SOLFIE
            </p>

          </div>

        </motion.div>

      </div>


      {/* ============================= */}
      {/* MISIÓN / VISIÓN / VALORES */}
      {/* ============================= */}

      <div className="mt-20 grid gap-6 lg:grid-cols-3">

        {philosophy.map((item) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              whileHover={{
                y: -5,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 18,
              }}
              className="
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-7
                transition-all
                duration-300
                hover:border-[#B3202D]
                hover:shadow-xl
              "
            >

              <div className="flex items-start gap-5">

                {/* ICONO */}

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="shrink-0 rounded-2xl bg-red-50 p-4"
                >

                  <Icon
                    size={30}
                    className="text-[#B3202D]"
                  />

                </motion.div>


                {/* TEXTO */}

                <div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-600">
                    {item.text}
                  </p>

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

    </Section>
  );
}
