import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  text: string;
}

export default function FloatingCard({
  icon,
  title,
  text,
}: Props) {
  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 4,
      }}
      className="rounded-2xl border bg-white p-5 shadow-xl"
    >
      <div className="mb-4 text-blue-600">
        {icon}
      </div>

      <h3 className="font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        {text}
      </p>
    </motion.div>
  );
}