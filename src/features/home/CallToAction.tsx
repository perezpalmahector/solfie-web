import Section from "../../components/common/Section";

export default function CallToAction() {
  return (
    <Section>

      <div className="overflow-hidden rounded-[40px] bg-[#800000] px-10 py-20 text-center text-white">

        <h2 className="text-5xl font-black">

          ¿Listo para hacer crecer tu empresa?

        </h2>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-red-100">

          Agenda una asesoría y descubre cómo podemos ayudarte
          a optimizar tu contabilidad, cumplir con tus obligaciones
          fiscales y tomar mejores decisiones financieras.

        </p>

        <div className="mt-12">

<a
  href="#contacto"
  className="
    inline-flex
    items-center
    justify-center
    rounded-xl
    border-2
    border-white
    bg-[#800000]
    px-7
    py-4
    font-semibold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:bg-transparent
    hover:text-white
  "
>
  Solicitar asesoría
</a>

        </div>

      </div>

    </Section>
  );
}