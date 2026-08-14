import { ProjectItem } from "@/lib/supabase";

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Hirakud Reservoir Floating Cage Aquaculture Project",
    slug: "hirakud-reservoir-cage-aquaculture",
    sector: "Aquaculture",
    location: "Sambalpur, Odisha",
    year: "2024 - 2025",
    client: "Directorate of Fisheries & World Bank",
    status: "Completed",
    featured: true,
    description: "Installation of 240 heavy-duty HDPE floating cages in Hirakud reservoir, integrating automated feeding systems, solar security surveillance, and fingerling stocking for 350 local primary fishermens' cooperatives.",
    challenge: "Traditional fishing in the reservoir suffered from declining catch volumes, seasonal displacement, and lack of controlled fish growth conditions.",
    solution: "ODCONES engineered circular HDPE floating cages resistant to wave surges, deployed solar-powered aeration systems, and trained cooperative members in high-density Pangasius and Tilapia cultivation.",
    impact_metrics: {
      "Biomass Harvested": "1,400 MT / Year",
      "Cooperatives Impacted": "350 Fishermen",
      "Average Income Rise": "+280%"
    },
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-2",
    title: "Koraput Tribal Horticulture & Polyhouse Cluster",
    slug: "koraput-tribal-horticulture-cluster",
    sector: "Horticulture",
    location: "Koraput, Odisha",
    year: "2023 - 2024",
    client: "Department of Agriculture & Farmers' Empowerment",
    status: "Completed",
    featured: true,
    description: "Construction of 120 climate-controlled naturally ventilated polyhouses and drip fertigation networks across high-altitude tribal villages for exotic vegetable and strawberry cultivation.",
    challenge: "High frost in winter and erratic downpours in monsoon ruined open-field vegetable crops, leading to seasonal migration of tribal youth.",
    solution: "Designed hurricane-resistant polyhouse structures, introduced drip micro-fertigation, built 2 solar-powered packhouses with cold storage, and linked FPOs to urban retail chains in Bhubaneswar and Vizag.",
    impact_metrics: {
      "Polyhouses Commissioned": "120 Units",
      "Beneficiary Families": "480 Tribal Households",
      "Crop Yield Increase": "3.5x"
    },
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-3",
    title: "Ganjam Coastal Saline Land Soil Reclamation & Watershed",
    slug: "ganjam-coastal-saline-reclamation",
    sector: "Water & Soil Conservation",
    location: "Ganjam, Odisha",
    year: "2024",
    client: "Soil Conservation & Watershed Development Directorate",
    status: "Completed",
    featured: true,
    description: "Sub-surface perforated tile drainage grid installation across 2,400 hectares of cyclone-damaged coastal land, coupled with check dams and bio-char soil conditioning.",
    challenge: "Repeated storm surges had salinized topsoil, rendering paddy fields barren and lowering groundwater quality.",
    solution: "Laid sub-surface clay and PVC perforated pipe networks that wash excess salt out during monsoons, constructed 18 check dams, and applied green manure crops to restore organic carbon.",
    impact_metrics: {
      "Reclaimed Paddy Land": "2,400 Hectares",
      "Soil Salinity Reduction": "-65%",
      "Check Dams Constructed": "18 Units"
    },
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-4",
    title: "Mayurbhanj Integrated Dairy & Fodder Park",
    slug: "mayurbhanj-integrated-dairy-fodder-park",
    sector: "Animal Husbandry",
    location: "Mayurbhanj, Odisha",
    year: "2023 - 2025",
    client: "Odisha State Poultry & Dairy Development Federation",
    status: "In Progress",
    featured: false,
    description: "Establishment of a 500-head high-yielding Gir & Sahiwal dairy farm, 50-tonne bulk milk chilling center, and 100-acre perennial green fodder cultivation park.",
    challenge: "Local dairy farmers lacked access to milk chilling facilities within 2 hours of milking, leading to spoilage and low price realization.",
    solution: "Built a centralized automated milking parlor, installed 4 village-level bulk milk coolers (BMC), and launched a hydroponic fodder distribution scheme.",
    impact_metrics: {
      "Milk Aggregated": "12,000 L / Day",
      "Farmer Members": "850 Dairy Farmers",
      "Spoilage Rate": "< 0.2%"
    },
    images: [
      "https://images.unsplash.com/photo-1570042707220-410a563f8d9b?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-5",
    title: "Kalamunda Biofloc Shrimp & Tilapia Tech Complex",
    slug: "kalamunda-biofloc-shrimp-complex",
    sector: "Aquaculture",
    location: "Bhadrak, Odisha",
    year: "2024",
    client: "Private Agritech Enterprise & State Fisheries",
    status: "Completed",
    featured: false,
    description: "Construction of 60 high-density circular Biofloc tanks (10m diameter) with automated micro-bubble aerators and IoT water telemetry units.",
    challenge: "Open pond shrimp farming in Bhadrak suffered high viral outbreak risks and heavy water discharge environmental penalties.",
    solution: "Implemented zero-water exchange Biofloc technology with microbial protein recycling and real-time oxygen/pH sensors hooked up to ODCONES FieldOS.",
    impact_metrics: {
      "Tank Yield": "4.5 MT per Tank/Cycle",
      "Water Saved": "92%",
      "FCR Ratio": "1.12"
    },
    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-6",
    title: "Bargarh Smart Canal Micro-Irrigation Modernization",
    slug: "bargarh-smart-canal-micro-irrigation",
    sector: "Agriculture",
    location: "Bargarh, Odisha",
    year: "2024 - 2026",
    client: "Water Resources Department",
    status: "In Progress",
    featured: false,
    description: "Automation of canal sluice gates and installation of solar-powered micro-drip networks across 5,000 acres of paddy and pulse fields.",
    challenge: "Tail-end farmers along the canal system received inadequate water while head-end farmers over-irrigated, leading to waterlogging.",
    solution: "Deployed IoT solar sluice actuators, telemetry water level gauges, and underground pressurized pipe networks to deliver equitable water to tail-end farms.",
    impact_metrics: {
      "Irrigation Efficiency": "From 38% to 82%",
      "Tail-End Acres Reached": "2,100 Acres",
      "Water Saved": "3.8 Million m³"
    },
    images: [
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];
