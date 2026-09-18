import {
  Building2,
  BriefcaseBusiness,
  Clock3,
  Users,
} from "lucide-react";

import Section from "../../components/common/Section";

const stats = [
  {
    value: "+15",
    label: "Años de experiencia",
    icon: Clock3,
  },
  {
    value: "+500",
    label: "Empresas atendidas",
    icon: Building2,
  },
  {
    value: "+2500",
    label: "Declaraciones presentadas",
    icon: BriefcaseBusiness,
  },
  {
    value: "100%",
    label: "Atención personalizada",
    icon: Users,
  },
];

export default function Stats() {
  return (
    <Section>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">

                <Icon
                  size={30}
                  className="text-[#B3202D]"
                />

              </div>

              <h3 className="text-5xl font-black text-[#B3202D]">
                {item.value}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.label}
              </p>

            </div>
          );
        })}

      </div>

    </Section>
  );
}