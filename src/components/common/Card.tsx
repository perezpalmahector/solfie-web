import type { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={clsx(
        "rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl",
        className
      )}
    >
      {children}
    </div>
  );
}