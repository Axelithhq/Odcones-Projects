export interface ImpactMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  category: string;
  description: string;
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "m-1",
    value: 10000,
    suffix: "+",
    label: "Farmers & Communities Impacted",
    category: "Social Impact",
    description: "Direct training, input distribution, and yield optimization provided to rural households across Odisha and neighboring regions."
  },
  {
    id: "m-2",
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    category: "Execution Excellence",
    description: "High-impact interventions executed across Agriculture, Aquaculture, Horticulture, and Soil Conservation."
  },
  {
    id: "m-3",
    value: 25,
    suffix: "+",
    label: "Districts Reached",
    category: "Geographic Coverage",
    description: "Active footprints across coastal, inland reservoir, and high-altitude tribal agrarian belts."
  },
  {
    id: "m-4",
    value: 500,
    suffix: "+",
    label: "Aquaculture & Agri Infrastructure Systems",
    category: "Infrastructure",
    description: "HDPE floating cage units, Biofloc circular tanks, polyhouses, and cold storage packhouses installed."
  },
  {
    id: "m-5",
    value: 50000,
    suffix: "+",
    label: "Acres / Hectares Impacted",
    category: "Environmental Restoration",
    description: "Farmlands modernized through precision drip irrigation, watershed check dams, and saline soil reclamation."
  }
];
