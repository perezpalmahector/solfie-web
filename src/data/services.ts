export interface Service {
  id: number;
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Contabilidad",
    description: "Control financiero preciso para empresas y profesionistas.",
  },
  {
    id: 2,
    title: "Asesoría Fiscal",
    description:
      "Cumplimiento tributario con estrategias enfocadas en tu negocio.",
  },
  {
    id: 3,
    title: "Nómina",
    description: "Administración de nómina, IMSS e INFONAVIT.",
  },
  {
    id: 4,
    title: "Auditoría",
    description:
      "Evaluación financiera para brindar confianza y transparencia.",
  },
  {
    id: 5,
    title: "Consultoría Financiera",
    description: "Indicadores para mejorar la rentabilidad de tu empresa.",
  },
  {
    id: 6,
    title: "Transformación Digital",
    description: "Automatización y tecnología para optimizar procesos.",
  },
];
