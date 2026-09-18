// HeroCarousel_V3.jsx
// Base with requested changes: white blobs, horizontal maroon band,
// glass CTA, larger image. Merge with your project as needed.
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import { heroSlides } from "./HeroSlides";
export default function HeroCarousel(){
return(<section id="inicio" className="scroll-mt-24">
  <div className="absolute top-0 left-0 z-50 h-1 w-full bg-white/20">
    <div
        id="hero-progress"
        className="h-full bg-[#800000] transition-[width] duration-100"
        style={{ width: "0%" }}
    />
</div>
<Swiper modules={[Autoplay,Pagination]} 
autoplay={{delay:5000,disableOnInteraction:false}} 
pagination={{clickable:true}} 
loop 
onAutoplayTimeLeft={(_, __, progress) => {
    const bar = document.getElementById("hero-progress");
    if (bar) {
        bar.style.width = `${(1 - progress) * 100}%`;
    }
}}
className="h-[calc(100dvh-80px)] overflow-hidden"
>
{heroSlides.map((slide,index)=><SwiperSlide key={index} className="h-full">
  
<div className="relative h-[calc(100dvh-80px)] overflow-hidden">
  <img
    src={slide.image}
    alt={slide.title}
    className="absolute inset-0 w-full h-full object-cover object-center"
/>
<div className="absolute inset-0 bg-black/45"></div>
<motion.div
  className="absolute right-10 bottom-6 h-[220px] w-[220px] rounded-full bg-white/15 blur-[60px]"
  animate={{
    scale: [1, 1.05, 1],
    opacity: [0.12, 0.20, 0.12]
  }}
  transition={{
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>

<motion.div
  className="absolute right-56 top-8 h-[120px] w-[120px] rounded-full bg-white/15 blur-[40px]"
  animate={{
    scale: [1, 1.08, 1],
    opacity: [0.10, 0.18, 0.10]
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut"
  }}
/>
<div className="relative z-20 flex h-full w-full items-center">
    <motion.div
    animate={{
        y: [0, -6, 0],
        scale: [1, 1.01, 1]
    }}
    transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut"
    }}
className="
relative
overflow-hidden
w-full
bg-[#800000]/60
rounded-none
px-6
md:px-10
lg:px-16
py-2 md:py-3
border-y
border-white/10
shadow-2xl
"
>
  <motion.div
    className="absolute inset-0 rounded-2xl pointer-events-none"
    style={{
        background:
            "linear-gradient(120deg, transparent 20%, rgba(255,220,220,.12) 50%, transparent 80%)"
    }}
    animate={{
        x: ["-150%", "150%"]
    }}
    transition={{
        duration: 5,
        repeat: Infinity,
        ease: "linear"
    }}
/>
<motion.div
    initial={{
        opacity: 0,
        x: -60,
        scale: 0.94
    }}
    animate={{
        opacity: 1,
        x: 0,
        scale: 1
    }}
    transition={{
        duration: 0.9,
        ease: "easeOut"
    }}
    className="w-full max-w-7xl mx-auto space-y-2 md:space-y-3 text-white"
>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white">{slide.title}</h2>
<p className="text-base lg:text-lg text-white/90 w-full lg:max-w-4xl">{slide.description}</p>
<div className="text-orange-200 text-base font-semibold">✔ 100% Cumplimiento fiscal garantizado</div>
<div className="flex flex-wrap gap-2">
  <a
    href="#contacto"
    className="
      group
      relative
      overflow-hidden
      rounded-lg
      border-2
      border-[#800000]
      bg-[#800000]
      px-3 py-1.5 text-xs
      font-semibold
      text-black
      shadow-md
      transition-all
      duration-300
      hover:border-[#600000]
      hover:shadow-xl
    "
  >
    <span
      className="
        absolute
        inset-0
        origin-left
        scale-x-0
        bg-gradient-to-r
        from-[#5c0000]
        via-[#800000]
        to-[#a00000]
        transition-transform
        duration-500
        ease-out
        group-hover:scale-x-100
      "
    />
    <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
      Agenda tu cita
    </span>
  </a>

  <a
    href="#servicios"
    className="rounded-lg border border-slate-300 bg-[#800000] px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-[#800000] hover:text-[#800000] hover:shadow-md"
  >
    Servicios
  </a>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-1 pt-2">{[['20+','Años'],['200+','Empresas'],['2500+','Declaraciones'],['100%','Cumplimiento']].map(s=><div key={s[1]} className="text-center border rounded-lg bg-white py-1 shadow"><div className="text-[#800000] font-black text-xs">{s[0]}</div><div className="text-[9px] text-slate-500">{s[1]}</div></div>)}</div>
</motion.div>
</motion.div>
</div>
</div></SwiperSlide>)}
</Swiper></section>)}
