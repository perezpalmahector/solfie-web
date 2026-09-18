import { motion } from "framer-motion";
import {
  Calculator,
  FileCheck2,
  Landmark,
  Building2,
  BadgeCheck,
} from "lucide-react";

import Container from "../../components/common/Container";
import di from "../../assets/images/nuevo_di.png";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden scroll-mt-24 bg-gradient-to-br from-slate-50 via-white to-red-50"
    >
      {/* Background */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-24 -top-20 -z-10 h-72 w-72 rounded-full bg-red-100 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-20 -right-24 -z-10 h-72 w-72 rounded-full bg-red-50 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-10 pt-8 pb-14 lg:grid-cols-2 lg:pt-12 lg:pb-16">
          {/* LEFT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 lg:space-y-4 lg:pl-12 xl:pl-16"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1 text-[10px] font-semibold uppercase text-[#B3202D]"
            >
              <BadgeCheck size={14} />
              Despacho contable digital
            </motion.span>

            <motion.h1
              variants={itemVariants}
              className="text-3xl font-black leading-tight text-slate-900 lg:text-[38px] xl:text-[44px]"
            >
              Impulsamos el crecimiento financiero de tu empresa
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-lg text-sm leading-6 text-slate-600 lg:text-[14px]"
            >
              Contabilidad, impuestos, nómina y planeación fiscal para empresas
              que buscan crecer con orden y cumplimiento.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="#contacto"
                className="rounded-lg bg-[#B3202D] px-4 py-2 text-sm font-medium text-white transition"
              >
                Agenda tu cita
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                href="#servicios"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium transition hover:bg-slate-100"
              >
                Servicios
              </motion.a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-2 sm:grid-cols-4"
            >
              <Stat title="+10" text="Años experiencia" />
              <Stat title="200+" text="Empresas atendidas" />
              <Stat title="2500+" text="Declaraciones" />
              <Stat title="100%" text="Cumplimiento fiscal" />
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-1"
            >
              <Badge icon={<Landmark size={10} />} text="SAT" />
              <Badge icon={<Building2 size={10} />} text="Hacienda" />
              <Badge icon={<FileCheck2 size={10} />} text="IMSS" />
              <Badge icon={<Calculator size={10} />} text="Fiscal" />
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.5 },
              x: { duration: 0.5 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="relative flex justify-center overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
              <div className="h-60 w-60 rounded-full bg-[#B3202D]/10 blur-3xl" />
            </div>

            <img
              src={di}
              className="relative w-[260px] drop-shadow-2xl sm:w-[330px] lg:w-[430px] xl:w-[470px]"
              alt="Asesora contable"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
function Stat({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
        scale: 1.05,
        boxShadow: "0 18px 35px rgba(179,32,45,.15)",
      }}
      transition={{
        duration: 0.35,
      }}
      className="rounded-lg border border-slate-200 bg-white px-2 py-1.5 text-center shadow-sm"
    >
      <motion.p
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{
          delay: 0.2,
          type: "spring",
          stiffness: 250,
        }}
        className="text-sm font-black text-[#B3202D]"
      >
        {title}
      </motion.p>

      <p className="text-[9px] leading-tight text-slate-500">
        {text}
      </p>
    </motion.div>
  );
}

function Badge({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{ once: true }}
      whileHover={{
        y: -2,
        scale: 1.08,
        backgroundColor: "#fff7f7",
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-[2px] text-[9px] text-slate-600 shadow-sm"
    >
      <motion.span
        animate={{
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
        className="text-[#B3202D]"
      >
        {icon}
      </motion.span>

      {text}
    </motion.div>
  );
}