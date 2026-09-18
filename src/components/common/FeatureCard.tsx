import type { ReactNode } from "react";

type Props = {
  title: string;
  subtitle: string;
  icon: ReactNode;
};

export default function FeatureCard({
  title,
  subtitle,
  icon,
}: Props) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-lg">

      <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-slate-500">
          {subtitle}
        </p>
      </div>

    </div>
  );
}