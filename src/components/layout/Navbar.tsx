import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logo from "../../assets/images/logo.png";
import Button from "../common/Button";
import Container from "../common/Container";
import { navigation } from "../../config/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ FIX TIPO (ESTO QUITA EL ERROR)
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 80;

    const top =
      el.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 bg-white shadow-md"
          : "bg-white/90 backdrop-blur"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
          <button
            onClick={() => scrollToSection("inicio")}
            className="flex items-center"
          >
            <img src={logo} alt="SOLFIE" className="h-14 w-auto" />
          </button>

          {/* NAV */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.label}
                onClick={() =>
                  scrollToSection(item.href.replace("#", ""))
                }
                className="font-medium text-gray-700 transition hover:text-[#B3202D]"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* BOTÓN */}
          <div className="hidden lg:block">
        <Button onClick={() => scrollToSection("contacto")}>
          Agenda una asesoría
          </Button>
          </div>

          {/* MOBILE */}
          <button onClick={() => setOpen(!open)} className="lg:hidden">
            {open ? <X /> : <Menu />}
          </button>

        </div>

        {open && (
          <div className="border-t py-5 lg:hidden">
            <div className="flex flex-col gap-5">

              {navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.href.replace("#", ""));
                    setOpen(false);
                  }}
                  className="text-left font-medium text-gray-700"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => {
                  scrollToSection("contacto");
                  setOpen(false);
                }}
              >
                <Button>Agenda una asesoría</Button>
              </button>

            </div>
          </div>
        )}

      </Container>
    </header>
  );
}