import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const scroll = () => setShow(window.scrollY > 400);

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="fixed bottom-28 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#B3202D] text-white shadow-xl transition hover:scale-110"
    >
      <ChevronUp />
    </button>
  );
}