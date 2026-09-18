import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import Button from "../../components/common/Button";
import Section from "../../components/common/Section";

export default function Contact() {
  const [form, setForm] = useState({
  nombre: "",
  correo: "",
  empresa: "",
  mensaje: "",
});
const enviarWhatsApp = () => {
  const texto = `
*Nueva solicitud desde SOLFIE*

👤 *Nombre:* ${form.nombre}
📧 *Correo:* ${form.correo}
🏢 *Empresa:* ${form.empresa}

📝 *Mensaje:*
${form.mensaje}
`;

  const url = `https://wa.me/5214421214785?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
};
  return (
    <Section id="contacto">

      <div className="grid gap-16 lg:grid-cols-2">

        <div>

          <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold uppercase tracking-[4px] text-[#B3202D]">
            Contacto
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            Agenda una asesoría

          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">

            Ponte en contacto con nosotros para conocer
            cómo podemos ayudarte a mejorar la administración
            financiera de tu empresa.

          </p>

          <div className="mt-10 space-y-6">

            <div className="flex gap-5">

              <Phone className="text-[#B3202D]" />

              <span>+52 1 442 121 4785</span>

            </div>

            <div className="flex gap-5">

              <Mail className="text-[#B3202D]" />

              <span>contacto@solfie.com.mx</span>

            </div>

            <div className="flex gap-5">

              <MapPin className="text-[#B3202D]" />

              <span>México</span>

            </div>

          </div>

        </div>

        <form
  className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg"
  onSubmit={(e) => {
    e.preventDefault();
    enviarWhatsApp();
  }}
>

          <div className="space-y-6">

            <input
  placeholder="Nombre"
  value={form.nombre}
  onChange={(e) =>
    setForm({ ...form, nombre: e.target.value })
  }
  className="w-full rounded-xl border p-4 outline-none focus:border-[#800000]"
/>

            <input
  placeholder="Correo electrónico"
  value={form.correo}
  onChange={(e) =>
    setForm({ ...form, correo: e.target.value })
  }
  className="w-full rounded-xl border p-4 outline-none focus:border-[#800000]"
/>

            <input
  placeholder="Empresa"
  value={form.empresa}
  onChange={(e) =>
    setForm({ ...form, empresa: e.target.value })
  }
  className="w-full rounded-xl border p-4 outline-none focus:border-[#800000]"
/>

            <textarea
  rows={5}
  placeholder="Cuéntanos cómo podemos ayudarte..."
  value={form.mensaje}
  onChange={(e) =>
    setForm({ ...form, mensaje: e.target.value })
  }
  className="w-full rounded-xl border p-4 outline-none focus:border-[#800000]"
/>  

            <Button className="w-full">

              Enviar mensaje

            </Button>

          </div>

        </form>

      </div>

    </Section>
  );
}