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
    icon: ShieldCheck,
    title: "Experiencia",
    description:
      "Más de una década apoyando empresas de diferentes sectores.",
  },
  {
    icon: Laptop,
    title: "Tecnología",
    description:
      "Herramientas digitales para agilizar procesos contables.",
  },
  {
    icon: TrendingUp,
    title: "Planeación",
    description:
      "Estrategias financieras enfocadas en el crecimiento.",
  },
  {
    icon: Users,
    title: "Acompañamiento",
    description:
      "Atención personalizada durante todo el año.",
  },
];

const philosophy = [
  {
    icon: Target,
    title: "Misión",
    description:
      "Brindar soluciones contables, fiscales y financieras que impulsen el crecimiento y cumplimiento de nuestros clientes.",
  },
  {
    icon: Eye,
    title: "Visión",
    description:
      "Ser un despacho contable líder a nivel nacional, reconocido por su innovación, confianza y excelencia en el servicio.",
  },
  {
    icon: HeartHandshake,
    title: "Valores",
    description:
      "Integridad, responsabilidad, transparencia, compromiso y orientación al cliente.",
  },
];

export default function WhyChooseUs() {
  return (
    <Section id="nosotros">
      {/* ENCABEZADO */}
      <div className="mx-auto max-w-3xl text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mb-3
            inline-block
            text-sm
            font-semibold
            uppercase
            tracking-[0.2em]
            text-[#B3202D]
          "
        >
          Nosotros
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            text-3xl
            font-bold
            tracking-tight
            text-slate-900
            sm:text-4xl
            lg:text-5xl
          "
        >
          Experiencia que se transforma en
          <span className="text-[#B3202D]"> confianza</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-base leading-7 text-slate-600 sm:text-lg"
        >
          En SOLFIE combinamos experiencia, tecnología y estrategia para
          brindar soluciones contables y fiscales que acompañen el crecimiento
          de cada empresa.
        </motion.p>
      </div>

      {/* EXPERIENCIA */}
      <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* FOTO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-2xl
              shadow-xl
            "
            onContextMenu={(e) => e.preventDefault()}
          >
            {/* FOTO ORIGINAL */}
            <img
              src={equipo}
              alt="Equipo profesional de SOLFIE"
              draggable="false"
              onDragStart={(e) => e.preventDefault()}
              className="
                block
                h-auto
                w-full
                select-none
              "
            />

            {/* MARCA DE AGUA SOLFIE */}
            <div
              className="
                pointer-events-none
                absolute
                left-[12%]
                top-[35%]
                z-10
                w-[120px]
                select-none
                opacity-[0.09]
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
                "
              />
            </div>
          </div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.18em]
              text-[#B3202D]
            "
          >
            Más de 20 años de experiencia
          </span>

          <h3
            className="
              mt-3
              text-3xl
              font-bold
              leading-tight
              text-slate-900
              sm:text-4xl
            "
          >
            Un aliado estratégico para tu empresa
          </h3>

          <p className="mt-6 text-base leading-8 text-slate-600">
            En SOLFIE entendemos que detrás de cada empresa existen decisiones,
            proyectos y personas que necesitan certeza financiera.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Nuestro trabajo va más allá del cumplimiento contable y fiscal.
            Buscamos convertir la información financiera en una herramienta
            para tomar mejores decisiones y construir empresas más sólidas.
          </p>

          <div className="mt-8 h-px w-20 bg-[#B3202D]" />
        </motion.div>
      </div>

      {/* PRINCIPALES FORTALEZAS */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
                group
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#B3202D]/20
                hover:shadow-xl
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-[#B3202D]/10
                  text-[#B3202D]
                  transition-all
                  duration-300
                  group-hover:bg-[#B3202D]
                  group-hover:text-white
                "
              >
                <Icon size={24} />
              </div>

              <h4 className="mt-6 text-xl font-bold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* MENSAJE DEL SOCIO FUNDADOR */}
      <div className="mt-24">
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-slate-950
            shadow-2xl
          "
        >
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            {/* FOTO VERTICAL */}
            <motion.div
              initial={{ opacity: 0, scale: 1.03 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative min-h-[480px] overflow-hidden"
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* FOTO ORIGINAL */}
              <img
                src={directorVertical}
                alt="Socio Fundador de SOLFIE"
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  select-none
                  object-cover
                "
              />

              {/* MARCA DE AGUA SOLFIE */}
              <div
                className="
                  pointer-events-none
                  absolute
                  left-[12%]
                  top-[35%]
                  z-10
                  w-[120px]
                  select-none
                  opacity-[0.09]
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
                  "
                />
              </div>

              {/* DEGRADADO */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-slate-950/70
                  via-transparent
                  to-transparent
                "
              />
            </motion.div>

            {/* MENSAJE */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="
                flex
                flex-col
                justify-center
                p-8
                sm:p-10
                lg:p-14
              "
            >
              <span
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#D85A65]
                "
              >
                Mensaje del Socio Fundador
              </span>

              <h3
                className="
                  mt-4
                  text-3xl
                  font-bold
                  leading-tight
                  text-white
                  sm:text-4xl
                "
              >
                Estrategias financieras con visión,
                <span className="text-[#D85A65]">
                  {" "}
                  experiencia y compromiso
                </span>
              </h3>

              <div className="mt-7 border-l-2 border-[#B3202D] pl-5">
                <p className="text-lg font-medium leading-8 text-slate-200">
                  Detrás de cada estrategia financiera exitosa hay un
                  compromiso absoluto con la tranquilidad de nuestros clientes.
                </p>
              </div>

              <p className="mt-7 text-base leading-8 text-slate-300">
                Como Socio Fundador de SOLFIE, mi objetivo ha sido consolidar
                una firma contable en Querétaro donde los empresarios no solo
                encuentren el cumplimiento estricto de sus obligaciones
                fiscales, sino un aliado estratégico para proteger y hacer
                crecer su patrimonio.
              </p>

              <p className="mt-4 text-base leading-8 text-slate-300">
                Con más de 20 años de experiencia en consultoría contable y
                fiscal, diseñamos soluciones a la medida que transforman la
                complejidad de los impuestos en certeza financiera para tu
                empresa.
              </p>

              <div className="mt-8">
                <div className="h-px w-16 bg-[#B3202D]" />

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-white">
                  Socio Fundador · SOLFIE
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* MISIÓN, VISIÓN Y VALORES */}
      <div className="mt-24">
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#B3202D]
            "
          >
            Nuestra filosofía
          </span>

          <h3
            className="
              mt-3
              text-3xl
              font-bold
              text-slate-900
              sm:text-4xl
            "
          >
            Principios que guían nuestro trabajo
          </h3>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {philosophy.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                <div
                  className="
                    mx-auto
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B3202D]/10
                    text-[#B3202D]
                  "
                >
                  <Icon size={27} />
                </div>

                <h4 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
