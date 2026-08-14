export interface ServiceInfo {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  deliverables: string[];
  image: string;
}

export const SERVICES: ServiceInfo[] = [
  {
    id: "project-planning",
    slug: "project-planning",
    title: "1. Comprehensive Project Planning & DPR Preparation",
    category: "Strategic Consultancy",
    shortDesc: "Feasibility studies, Detailed Project Reports (DPR), financial modeling, and environmental impact assessments for government and corporate agri-projects.",
    fullDesc: "ODCONES provides rigorous macro and micro-level project planning for mega agricultural, fisheries, and rural infrastructure projects. Our team prepares DPRs aligned with NABARD, World Bank, and Ministry guidelines.",
    iconName: "FileText",
    deliverables: [
      "GIS-based Land & Water Feasibility Reports",
      "Financial IRR & Benefit-Cost Analysis Models",
      "Environmental & Social Impact Assessments (ESIA)",
      "Detailed Engineering Drawings & DPRs"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "agricultural-development",
    slug: "agricultural-development",
    title: "2. Agricultural Ecosystem Development",
    category: "Field Implementation",
    shortDesc: "End-to-end execution of climate-smart farming models, seed production hubs, and high-tech agricultural clusters.",
    fullDesc: "We design and execute integrated farming systems that transform low-yield agricultural zones into high-output productive hubs through superior seed varieties, drip irrigation networks, and mechanization.",
    iconName: "Sprout",
    deliverables: [
      "Custom Hiring Mechanization Centers",
      "Seed Multiplication & Processing Units",
      "Drip & Micro-Sprinkler Irrigation Grids",
      "Climate-Resilient Crop Rotations"
    ],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "fisheries-development",
    slug: "fisheries-development",
    title: "3. Fisheries Ecosystem & Landing Infrastructure",
    category: "Blue Economy",
    shortDesc: "Reservoir cage culture installations, modern fish landing centers, auction halls, and riverine ecosystem enhancement.",
    fullDesc: "ODCONES modernized capture fisheries through floating cage setups in major water reservoirs and state-of-the-art landing docks equipped with solar ice plants and insulated transport vehicles.",
    iconName: "Fish",
    deliverables: [
      "High-Density Reservoir Floating Cages",
      "Solar Ice Plant & Processing Centers",
      "Riverine & Wetland Stocking Programs",
      "Fishermen Cooperative Capacity Building"
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "aquaculture-development",
    slug: "aquaculture-development",
    title: "4. Commercial Aquaculture & Biofloc Engineering",
    category: "Blue Economy",
    shortDesc: "Turn-key fish & shrimp farm development, Biofloc systems, RAS units, automated aerators, and high-health seed hatcheries.",
    fullDesc: "We build modern aquaculture setups engineered for maximum feed conversion efficiency and zero mortality. Includes Biofloc circular tanks, automated water quality monitoring, and aeration systems.",
    iconName: "Waves",
    deliverables: [
      "Turn-key Commercial Fish Farm Construction",
      "Biofloc & RAS High-Density Setup",
      "IoT Automated Aeration & Telemetry",
      "SPF Fish Seed Hatchery Construction"
    ],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "horticulture-projects",
    slug: "horticulture-projects",
    title: "5. High-Value Horticulture & Protected Cultivation",
    category: "High-Value Agriculture",
    shortDesc: "Naturally ventilated polyhouses, hi-tech shade nets, hydroponics, and high-density fruit orchards.",
    fullDesc: "Expanding farmer profitability through high-density polyhouse structures for capsicum, cucumber, floriculture, and exotic fruits with precise micro-climate management.",
    iconName: "Flower2",
    deliverables: [
      "Polyhouse & Net-house Construction",
      "Automated Drip & Fertigation Systems",
      "Hi-tech Tissue Culture Nurseries",
      "High-Density Fruit Plantation Setup"
    ],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "rural-infrastructure",
    slug: "rural-infrastructure",
    title: "6. Agri-Logistics & Rural Infrastructure Construction",
    category: "Infrastructure",
    shortDesc: "Solar cold storages, grain silos, rural connectivity, packhouses, and community aggregation sheds.",
    fullDesc: "Connecting rural producers directly to high-margin supply chains by constructing durable post-harvest infrastructure, solar packhouses, and rural storage facilities.",
    iconName: "Building2",
    deliverables: [
      "Off-Grid Solar Cold Storage Units",
      "Grain Storage Silos & Processing Warehouses",
      "Rural Agri Market Sheds (Haat Infrastructure)",
      "Farm-to-Market Access Roads"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "water-resource-management",
    slug: "water-resource-management",
    title: "7. Water Resource & Watershed Engineering",
    category: "Sustainability",
    shortDesc: "Check dam construction, contour bunding, farm ponds, groundwater injection, and sub-surface agricultural drainage.",
    fullDesc: "Restoring water-stressed agricultural lands through community check dams, percolation tanks, rainwater harvesting, and subsurface soil salt drainage.",
    iconName: "Droplets",
    deliverables: [
      "Check Dam & Masonry Weir Construction",
      "Community Farm Pond Excavation",
      "Sub-surface Tile Drainage Installation",
      "Aquifer Recharge Shaft Engineering"
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "technical-consultancy",
    slug: "technical-consultancy",
    title: "8. Institutional & Government Advisory",
    category: "Strategic Consultancy",
    shortDesc: "Policy framing, sector studies, scheme implementation support, and institutional capacity building.",
    fullDesc: "Providing domain expertise to State Government departments, NABARD, CSR foundations, and multi-lateral agencies in designing and executing large-scale rural interventions.",
    iconName: "Briefcase",
    deliverables: [
      "Government Scheme Implementation Architecture",
      "CSR Rural Development Frameworks",
      "Institutional Policy & DPR Audits",
      "State-level Agri-Masterplanning"
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "project-implementation",
    slug: "project-implementation",
    title: "9. Turnkey Field Execution & Contracting",
    category: "Field Implementation",
    shortDesc: "On-ground EPC (Engineering, Procurement, Construction) delivery of mega agricultural and aquaculture projects.",
    fullDesc: "We take 100% execution ownership—from earthmoving, civil construction, equipment installation, seed stocking, and commissioning.",
    iconName: "Hammer",
    deliverables: [
      "EPC Contracting for Mega Agri Parks",
      "Civil & Hydraulic Structure Construction",
      "Equipment Sourcing & Commissioning",
      "Trial Run & Operational Handover"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "monitoring-evaluation",
    slug: "monitoring-evaluation",
    title: "10. Third-Party Monitoring & Impact Evaluation (M&E)",
    category: "Analytics & Governance",
    shortDesc: "Real-time GIS monitoring, field audits, baseline vs endline impact assessments, and data analytics.",
    fullDesc: "Ensuring accountability and transparency through independent third-party monitoring, remote sensing verification, and impact reporting for donor funded projects.",
    iconName: "BarChart3",
    deliverables: [
      "GIS & Satellite Imagery Change Detection",
      "Digital Field Enumeration & Survey Apps",
      "Baseline, Midterm & Impact Reports",
      "Real-time Executive Dashboards"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "capacity-building",
    slug: "capacity-building",
    title: "11. Community Training & FPO Capacity Building",
    category: "Community Development",
    shortDesc: "Farmer field schools, Women Self-Help Group (SHG) training, FPO business plan creation, and managerial coaching.",
    fullDesc: "Building community resilience by training farmers in modern package of practices, financial literacy, FPO governance, and value addition.",
    iconName: "Users",
    deliverables: [
      "Hands-on Farmer Field Schools",
      "FPO Governance & Accounting Training",
      "Women SHG Micro-Enterprise Workshops",
      "Exposure Visits & Demonstration Plots"
    ],
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "technology-integration",
    slug: "technology-integration",
    title: "12. Agritech, IoT & FieldOS Integration",
    category: "Analytics & Governance",
    shortDesc: "Custom deployment of IoT soil sensors, automated water quality units, GIS mapping, and FieldOS digital management.",
    fullDesc: "Injecting cutting-edge technology into rural management—from real-time pond water oxygen telemetries to field officer GPS tracking and crop disease diagnosis.",
    iconName: "Cpu",
    deliverables: [
      "ODCONES FieldOS Platform Deployment",
      "IoT Sensor & Gateway Installation",
      "Custom Mobile Survey Apps",
      "Automated SMS/WhatsApp Farmer Advisory"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
  }
];
