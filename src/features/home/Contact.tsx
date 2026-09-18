import { useState } from "react";

import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { motion } from "framer-motion";

import Button from "../../components/common/Button";
import Section from "../../components/common/Section";

import contactoImg from "../../assets/images/IMG_0137.jpg";
import solfieLogo from "../../assets/images/logo.png";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    empresa: "",
    mensaje: "",
  });

  const enviarWhatsApp = () => {
    const texto = `
  * Nueva solicitud desde SOLFIE *

👤 * Nombre:* ${form.nombre}
📧 * Correo:* ${form.correo}
🏢 * Empresa:* ${form.empresa}

📝 * Mensaje:*
  ${form.mensaje}
`;

    const url = `https://wa.me/5214421214785?text=${encodeURIComponent(
      texto
    )}`;

    window.open(url, "_blank");
  };

  return (
    <Section id="contacto">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">

        {/* IZQUIERDA */}
        <div>

          {/* FOTO PROTEGIDA */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
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
            className="group mb-8 overflow-hidden rounded-3xl shadow-xl"
          >
            <div
              className="relative w-full overflow-hidden"
              onContextMenu={(e) => e.preventDefault()}
            >
              {/* FOTO ORIGINAL */}
              <img
                src={contactoImg}
                alt="Director de SOLFIE"
                draggable="false"
                onDragStart={(e) => e.preventDefault()}
                className="block h-[300px] w-full select-none object-cover object-center transition duration-700 group-hover:scale-105 sm:h-[350px]"
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
            </div>
          </motion.div>

          {/* ETIQUETA */}
          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B3202D]">
            Contacto
          </span>

          {/* TITULO */}
          <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
            Agenda una asesoría
          </h2>

          {/* DESCRIPCIÓN */}
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ponte en contacto con nosotros para conocer cómo podemos
            ayudarte a mejorar la administración financiera de tu empresa.
          </p>

          {/* DATOS DE CONTACTO */}
          <div className="mt-10 space-y-6">

            {/* TELÉFONO */}
            <div className="flex items-center gap-5">
              <Phone
                className="shrink-0 text-[#B3202D]"
                size={22}
              />

              <span>
                +52 1 442 121 4785
              </span>
            </div>

            {/* CORREO */}
            <div className="flex items-center gap-5">
              <Mail
                className="shrink-0 text-[#B3202D]"
                size={22}
              />

              <span>
                contacto@solfie.com.mx
              </span>
            </div>

            {/* UBICACIÓN */}
            <div className="flex items-center gap-5">
              <MapPin
                className="shrink-0 text-[#B3202D]"
                size={22}
              />

              <span>
                México
              </span>
            </div>

          </div>
        </div>

        {/* FORMULARIO */}
        <motion.form
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
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:p-10"
          onSubmit={(e) => {
            e.preventDefault();
            enviarWhatsApp();
          }}
        >
          <div className="space-y-6">

            {/* NOMBRE */}
            <input
              type="text"
              placeholder="Nombre"
              value={form.nombre}
              onChange={(e) =>
                setForm({
                  ...form,
                  nombre: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#B3202D]/10"
            />

            {/* CORREO */}
            <input
              type="email"
              placeholder="Correo electrónico"
              value={form.correo}
              onChange={(e) =>
                setForm({
                  ...form,
                  correo: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#B3202D]/10"
            />

            {/* EMPRESA */}
            <input
              type="text"
              placeholder="Empresa"
              value={form.empresa}
              onChange={(e) =>
                setForm({
                  ...form,
                  empresa: e.target.value,
                })
              }
              className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#B3202D]/10"
            />

            {/* MENSAJE */}
            <textarea
              rows={5}
              placeholder="Cuéntanos cómo podemos ayudarte..."
              value={form.mensaje}
              onChange={(e) =>
                setForm({
                  ...form,
                  mensaje: e.target.value,
                })
              }
              className="w-full resize-none rounded-xl border border-gray-200 p-4 outline-none transition focus:border-[#800000] focus:ring-2 focus:ring-[#B3202D]/10"
            />

            {/* BOTÓN */}
            <Button className="w-full">
              Enviar mensaje
            </Button>

          </div>
        </motion.form>

      </div>
    </Section>
  );
}
