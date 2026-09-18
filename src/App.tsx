import { useEffect } from "react";
import AppRouter from "./router/AppRouter";

export default function App() {
  useEffect(() => {
    const disableRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    const disableDrag = (event: DragEvent) => {
      // Si el usuario intenta arrastrar una imagen, lo bloqueamos
      if ((event.target as HTMLElement).tagName === "IMG") {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("dragstart", disableDrag); // Escucha el arrastre

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("dragstart", disableDrag); // Limpia el evento
    };
  }, []);

  return <AppRouter />;
}