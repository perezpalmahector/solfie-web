import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/pagination";

import { heroSlides } from "./HeroSlides";

import solfieLogo from "../../assets/images/logo.png";

export default function HeroCarousel() {
  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden"
    >
      {/* BARRA DE PROGRESO */}
      <div className="absolute left-0 top-0 z-50 h-1 w-full bg-white/20">
        <div
          id="hero-progress"
          className="h-full bg-[#800000] transition-[width] duration-100"
          style={{ width: "0%" }}
        />
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        onAutoplayTimeLeft={(_, __, progress) => {
          const bar = document.getElementById("hero-progress");

          if (bar) {
            bar.style.width = `${(1 - progress) * 100}%`;
          }
        }}
        className="h-[calc(100dvh-80px)] min-h-[650px] overflow-hidden"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="h-full"
          >
            <div className="relative h-[calc(100dvh-80px)] min-h-[650px] overflow-hidden bg-slate-900">

              {/* IMAGEN COMPLETA - SIN RECORTE */}
              <div
                className="absolute inset-0 overflow-hidden"
                onContextMenu={(e) => e.preventDefault()}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  draggable="false"
                  onDragStart={(e) => e.preventDefault()}
                  className="absolute inset-0 h-full w-full select-none object-contain object-center"
                />

                {/* MARCA DE AGUA SOLFIE */}
                <div
                  className="pointer-events-none absolute left-[12%] top-[35%] z-10 w-[120px] select-none opacity-[0.09]"
                  aria-hidden="true"
                >
                  <img
                    src={solfieLogo}
                    alt=""
                    draggable="false"
                    className="block h-auto w-full select-none"
                  />
                </div>
              </div>

              {/* OSCURECIMIENTO */}
              <div className="pointer-events-none absolute inset-0 bg-black/40" />

              {/* BRILLO INFERIOR */}
              <motion.div
                className="pointer-events-none absolute bottom-6 right-10 h-[220px] w-[220px] rounded-full bg-white/15 blur-[60px]"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.12, 0.2, 0.12],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* BRILLO SUPERIOR */}
              <motion.div
                className="pointer-events-none absolute right-56 top-8 h-[120px] w-[120px] rounded-full bg-white/15 blur-[40px]"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.1, 0.18, 0.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* CONTENIDO */}
              <div className="relative z-20 flex h-full w-full items-center">

                <motion.div
                  animate={{
                    y: [0, -6, 0],
                    scale: [1, 1.01, 1],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    relative
                    w-full
                    overflow-hidden
                    border-y
                    border-white/10
                    bg-[#800000]/65
                    px-6
                    py-5
                    shadow-2xl
                    md:px-10
                    md:py-6
                    lg:px-16
                  "
                >

                  {/* REFLEJO */}
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 20%, rgba(255,220,220,.12) 50%, transparent 80%)",
                    }}
                    animate={{
                      x: ["-150%", "150%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: -60,
                      scale: 0.94,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "easeOut",
                    }}
                    className="
                      relative
                      z-10
                      mx-auto
                      w-full
                      max-w-7xl
                      space-y-3
                      text-white
                    "
                  >

                    {/* TÍTULO */}
                    <h2
                      className="
                        relative
                        z-10
                        text-3xl
                        font-black
                        leading-tight
                        text-white
                        md:text-4xl
                        lg:text-5xl
                      "
                    >
                      {slide.title}
                    </h2>

                    {/* DESCRIPCIÓN */}
                    <p
                      className="
                        relative
                        z-10
                        w-full
                        text-sm
                        leading-6
                        text-white/90
                        md:text-base
                        lg:max-w-4xl
                        lg:text-lg
                      "
                    >
                      {slide.description}
                    </p>

                    {/* CUMPLIMIENTO */}
                    <div className="relative z-10 text-sm font-semibold text-orange-200 md:text-base">
                      ✔ 100% Cumplimiento fiscal
                    </div>

                    {/* BOTONES */}
                    <div className="relative z-10 flex flex-wrap gap-3 pt-1">

                      {/* AGENDA TU CITA */}
                      <a
                        href="#contacto"
                        className="
                          group
                          relative
                          isolate
                          overflow-hidden
                          rounded-lg
                          border-2
                          border-white
                          bg-white
                          px-4
                          py-2
                          text-sm
                          font-semibold
                          text-[#800000]
                          shadow-md
                          transition-all
                          duration-300
                          hover:shadow-xl
                        "
                      >
                        {/* FONDO ANIMADO */}
                        <span
                          className="
                            absolute
                            inset-0
                            z-0
                            origin-left
                            scale-x-0
                            bg-[#800000]
                            transition-transform
                            duration-500
                            ease-out
                            group-hover:scale-x-100
                          "
                        />

                        {/* TEXTO */}
                        <span
                          className="
                            relative
                            z-10
                            block
                            whitespace-nowrap
                            text-[#800000]
                            transition-colors
                            duration-300
                            group-hover:text-white
                          "
                        >
                          Agenda tu cita
                        </span>
                      </a>

                      {/* SERVICIOS */}
                      <a
                        href="#servicios"
                        className="
                          rounded-lg
                          border
                          border-white/70
                          bg-white/10
                          px-4
                          py-2
                          text-sm
                          font-medium
                          text-white
                          backdrop-blur-sm
                          transition-all
                          duration-300
                          hover:bg-white
                          hover:text-[#800000]
                        "
                      >
                        Servicios
                      </a>

                    </div>

                    {/* ESTADÍSTICAS */}
                    <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-4">

                      {[
                        ["20+", "Años"],
                        ["200+", "Empresas"],
                        ["2500+", "Declaraciones"],
                        ["100%", "Cumplimiento"],
                      ].map(([number, label]) => (
                        <div
                          key={label}
                          className="
                            rounded-lg
                            border
                            border-white/20
                            bg-white
                            px-2
                            py-2
                            text-center
                            shadow
                          "
                        >
                          <div className="text-sm font-black text-[#800000]">
                            {number}
                          </div>

                          <div className="text-[9px] text-slate-500">
                            {label}
                          </div>
                        </div>
                      ))}

                    </div>

                  </motion.div>
                </motion.div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
