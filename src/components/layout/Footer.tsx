import Container from "../common/Container";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#202020] text-white">
      <Container>

        <div className="grid gap-12 py-16 lg:grid-cols-4">

          {/* LOGO */}
          <div>
            <h2 className="text-3xl font-bold">SOLFIE</h2>

            <p className="mt-5 text-gray-300 leading-8">
              Soluciones Financieras Empresariales.
              Contabilidad, impuestos, nómina y consultoría.
            </p>
          </div>

          {/* ENLACES */}
          <div>
            <h3 className="text-xl font-semibold">Enlaces</h3>

            <div className="mt-5 space-y-2">
              <a
                href="#inicio"
                className="block text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="block text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Servicios
              </a>

              <a
                href="#nosotros"
                className="block text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Nosotros
              </a>

              <a
                href="#proceso"
                className="block text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Proceso
              </a>

              <a
                href="#calculadora"
                className="block text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Calculadora
              </a>

              <a
                href="#faq"
                className="block text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Faq
              </a>

              <a
                href="#contacto"
                className="block text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Contacto
              </a>
            </div>

            <h4 className="mt-8 text-lg font-semibold text-white">
              Enlaces útiles
            </h4>

            <div className="mt-4 space-y-3">

              <a
                href="https://www.sat.gob.mx/home"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm leading-6 text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Servicio de Administración Tributaria (SAT)
              </a>

              <a
                href="https://www.gob.mx/hacienda"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm leading-6 text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Secretaría de Hacienda y Crédito Público (SHCP)
              </a>

              <a
                href="https://www.imss.gob.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm leading-6 text-gray-300 transition-colors duration-300 hover:text-white"
              >
                Instituto Mexicano del Seguro Social (IMSS)
              </a>

            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-xl font-semibold">Contacto</h3>

            <div className="mt-5 space-y-3 text-gray-300">
              <a href="tel:4422546046" className="flex items-center gap-2">
                <Phone size={16} /> 442 254 60 46
              </a>

              <a href="mailto:cbautista@solfie.com.mx" className="flex items-center gap-2">
                <Mail size={16} /> cbautista@solfie.com.mx
              </a>

              <a
                href="https://wa.me/5214421214785"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>

<div className="flex gap-4 mt-5">

  <a href="https://facebook.com/solfieoficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#800000] transition-colors">
    <FaFacebook size={22}/>
  </a>

  <a href="https://instagram.com/solfie" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#800000] transition-colors">
    <FaInstagram size={22}/>
  </a>

  <a href="https://linkedin.com/company/solfie" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#800000] transition-colors">
    <FaLinkedin size={22}/>
  </a>

  <a href="https://youtube.com/solfie" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#800000] transition-colors">
    <FaYoutube size={22}/>
  </a>

</div>
          
          </div>

          {/* MAPA */}
          <div>
            <h3 className="text-xl font-semibold">Ubicación</h3>

            <div className="mt-5 space-y-1 text-gray-300 text-sm leading-7">
              <p className="font-semibold text-white">Oficinas</p>

              <p>Calle Cerro de la Luz No. 132</p>
              <p>Col. Colinas del Cimatario</p>
              <p>Querétaro, Qro. México</p>
              <p>C.P. 76090</p>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden border border-gray-700">

              <iframe
                title="Mapa SOLFIE"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14941.837237927108!2d-100.3695942!3d20.5692922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d345afc0128da3%3A0xd0fe525ad726740d!2sSOLFIE.%20Contadores%20y%20Abogados!5e0!3m2!1ses-419!2smx!4v1702167800223!5m2!1ses-419!2smx"
                width="100%"
                height="180"
                loading="lazy"
                className="w-full"
              />

            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-400">

        <span>
          © {new Date().getFullYear()} SOLFIE. Todos los derechos reservados.
        </span>

        <Link
    to="/aviso-de-privacidad"
    className="hover:text-white transition-colors"
>
    Aviso de Privacidad
</Link>

      </div>

      </Container>
    </footer>
  );
}