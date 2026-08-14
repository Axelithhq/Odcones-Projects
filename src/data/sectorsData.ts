export interface SectorInfo {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  heroImage: string;
  iconName: string;
  shortDesc: string;
  longDesc: string;
  keyPillars: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  technologies: string[];
  challenges: { title: string; desc: string }[];
  odconesApproach: string[];
}

export const SECTORS: SectorInfo[] = [
  {
    id: "agriculture",
    slug: "agriculture",
    name: "AGRICULTURE",
    tagline: "Building productive, resilient and sustainable agricultural ecosystems.",
    heroImage: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1600",
    iconName: "Sprout",
    shortDesc: "Transforming smallholder farming through climate-resilient practices, precision inputs, and high-yield agricultural infrastructure.",
    longDesc: "ODCONES PROJECTS delivers end-to-end agricultural interventions designed for climate vulnerability, low seed-replacement rates, and fragmented landholdings. We integrate soil health management, high-efficiency irrigation, crop diversification, and value-chain integration to build self-sustaining rural agricultural hubs.",
    keyPillars: [
      { title: "Precision Crop Planning", desc: "AI and GIS-backed micro-climate land mapping for targeted crop choices." },
      { title: "Soil Regeneration", desc: "Organic carbon enhancement, micro-nutrient conditioning, and bio-fertilization." },
      { title: "Smart Mechanization", desc: "Custom hiring centers for drone spraying, automated seeders, and smart harvesters." },
      { title: "Market Aggregation", desc: "Farmer Producer Organization (FPO) linkages directly to institutional buyers." }
    ],
    stats: [
      { value: "35,000+", label: "Farmers Empowered" },
      { value: "42%", label: "Average Yield Increase" },
      { value: "18,000+", label: "Hectares Cultivated" }
    ],
    technologies: ["GIS Crop Mapping", "IoT Soil Moisture Sensors", "Drone Spraying", "Smart Weather Stations"],
    challenges: [
      { title: "Monsoon Dependency", desc: "Uncertain rain cycles impacting traditional sowing schedules." },
      { title: "Soil Degradation", desc: "Over-reliance on chemical fertilizers depleting organic soil carbon." }
    ],
    odconesApproach: [
      "Site-specific micro-climatic zoning",
      "Community water harvesting structures",
      "Integrated Pest Management (IPM) packages",
      "FPO capacity building & direct buyback agreements"
    ]
  },
  {
    id: "horticulture",
    slug: "horticulture",
    name: "HORTICULTURE",
    tagline: "Growing high-value crops through smarter cultivation systems.",
    heroImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1600",
    iconName: "Flower2",
    shortDesc: "High-density orchards, polyhouse cultivation, exotic vegetable farming, and cold-chain integrated harvest systems.",
    longDesc: "Horticulture represents the highest income-per-acre vector for small and medium farmers. ODCONES designs state-of-the-art climate-controlled polyhouses, shade-net structures, micro-drip fertigation units, and post-harvest packhouses tailored for high-value fruits, vegetables, and floriculture.",
    keyPillars: [
      { title: "Protected Cultivation", desc: "Polyhouse & net-house architectures designed for year-round crop production." },
      { title: "High-Density Orchards", desc: "Dwarf tree varieties maximizing fruit yield per square meter." },
      { title: "Micro-Fertigation", desc: "Targeted liquid fertilizer dosing automated directly to plant root zones." },
      { title: "Cold Chain Logistics", desc: "Solar-powered micro-chillers preserving freshness from farm gate to market." }
    ],
    stats: [
      { value: "450+", label: "Polyhouses Installed" },
      { value: "3.2x", label: "Income Enhancement" },
      { value: "12,000 MT", label: "Horticulture Produce Harvested" }
    ],
    technologies: ["Climate Control Sensors", "Automated Fertigation Controllers", "Hydroponic Channels", "Solar Cold Storage"],
    challenges: [
      { title: "High Perishability", desc: "Up to 35% crop loss post-harvest due to lack of immediate cooling." },
      { title: "Temperature Extremes", desc: "Summer heat spikes scorching delicate vegetable shoots." }
    ],
    odconesApproach: [
      "Precision greenhouse ventilation controls",
      "Solar powered on-farm pre-cooling units",
      "Contract cultivation with retail chains",
      "Sub-surface drip fertigation networks"
    ]
  },
  {
    id: "fisheries",
    slug: "fisheries",
    name: "FISHERIES",
    tagline: "Strengthening livelihoods through sustainable aquatic ecosystems.",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600",
    iconName: "Fish",
    shortDesc: "Inland fishery restoration, reservoir cage culture, marine community support, and modern landing center infrastructure.",
    longDesc: "ODCONES works across riverine, estuarine, and inland water bodies to modernize capture and culture fisheries. We establish floating cage culture installations in large reservoirs, stock indigenous major carps, and deploy hygienic fish processing facilities for coastal fishing communities.",
    keyPillars: [
      { title: "Reservoir Cage Culture", desc: "HDPE floating cages for commercial fish rearing in inland reservoirs." },
      { title: "Fisherman Cooperatives", desc: "Empowering local fishing societies with modern boats, nets, and insurance." },
      { title: "Hygienic Landing Hubs", desc: "Solar illuminated, ice-equipped auction and processing platforms." },
      { title: "Aquatic Biodiversity", desc: "Restoration of natural breeding grounds and riverine ecosystem health." }
    ],
    stats: [
      { value: "1,200+", label: "Floating Cages Deployed" },
      { value: "85+", label: "Water Bodies Managed" },
      { value: "14,000", label: "Fisherfolk Impacted" }
    ],
    technologies: ["Echo Sounder Bathymetry", "Water Quality Telemetry", "Floating HDPE Cages", "Solar Ice Generators"],
    challenges: [
      { title: "Over-exploitation", desc: "Depletion of wild fish stocks from unmonitored harvesting." },
      { title: "Poor Post-Harvest Value", desc: "Spoilage due to inadequate icing facilities at landing docks." }
    ],
    odconesApproach: [
      "Community-led cage aquaculture in reservoir backwaters",
      "Integrated ice plant & solar chill vehicle delivery",
      "Fingerling stocking in natural tanks & wetlands",
      "Traceability systems for premium fish markets"
    ]
  },
  {
    id: "aquaculture",
    slug: "aquaculture",
    name: "AQUACULTURE",
    tagline: "Technology-driven fish production for a growing blue economy.",
    heroImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1600",
    iconName: "Waves",
    shortDesc: "Scientific fish & shrimp farming, Biofloc systems, RAS (Recirculating Aquaculture Systems), and bio-secure hatcheries.",
    longDesc: "Modern aquaculture demands absolute water quality precision and bio-security. ODCONES designs turn-key commercial fish farms, high-density Biofloc tanks, Recirculating Aquaculture Systems (RAS), and automated feeding systems that maximize feed conversion ratio (FCR) while minimizing environmental footprint.",
    keyPillars: [
      { title: "Biofloc Technology", desc: "Zero-water exchange tanks utilizing microbial protein to feed fish." },
      { title: "RAS (Recirculating)", desc: "Indoor water filtration systems recycling 95%+ of water for urban fish farming." },
      { title: "Bio-Secure Hatcheries", desc: "High-health SPF seed production for Pangasius, Tilapia, and Vannamei." },
      { title: "Automated Feeding", desc: "Acoustic sensor-triggered demand feeders reducing feed waste by 30%." }
    ],
    stats: [
      { value: "800+", label: "Aquaculture Ponds Built" },
      { value: "1.15", label: "Industry-Leading FCR" },
      { value: "18,000 MT", label: "Annual Biomass Yield" }
    ],
    technologies: ["IoT Dissolved Oxygen Sensors", "Automated Bio-Feeders", "Microbubble Aerators", "Probiotic Water Conditioners"],
    challenges: [
      { title: "Oxygen Crashes", desc: "Sudden nocturnal dissolved oxygen drops causing mass mortality." },
      { title: "Disease Outbreaks", desc: "Bacterial pathogen propagation in unmonitored pond water." }
    ],
    odconesApproach: [
      "24/7 telemetry oxygen monitoring with auto-aerator triggers",
      "Probiotic bio-remediation of sludge bottoms",
      "High-protein floating feed protocols",
      "Bio-security fencing and water filtration inlets"
    ]
  },
  {
    id: "animal-husbandry",
    slug: "animal-husbandry",
    name: "ANIMAL HUSBANDRY",
    tagline: "Supporting healthier livestock systems and rural livelihoods.",
    heroImage: "https://images.unsplash.com/photo-1570042707220-410a563f8d9b?auto=format&fit=crop&q=80&w=1600",
    iconName: "ShieldCheck",
    shortDesc: "Dairy herd improvement, bio-secure poultry clusters, goat farming initiatives, and telemedicine veterinary care.",
    longDesc: "Livestock represents a essential financial cushion for rural households. ODCONES implements scientific dairy farm management, artificial insemination programs for indigenous breeds, green fodder production plots, and community-led goat and poultry micro-enterprises.",
    keyPillars: [
      { title: "Smart Dairy Hubs", desc: "Automated milking parlors, bulk milk chillers, and herd health tracking." },
      { title: "Green Fodder Security", desc: "Hydroponic fodder units and perennial Napier grass cultivation." },
      { title: "Poultry Micro-Clusters", desc: "Backyard poultry units empowering women self-help groups." },
      { title: "Veterinary Tele-Care", desc: "Mobile veterinary clinics equipped with diagnostic ultrasound and vaccines." }
    ],
    stats: [
      { value: "22,000+", label: "Cattle & Goats Managed" },
      { value: "65,000 L", label: "Daily Milk Aggregation" },
      { value: "3,500+", label: "Women Farmers Trained" }
    ],
    technologies: ["RFID Cattle Identification", "Hydroponic Fodder Trays", "Bulk Milk Cooling Units", "Mobile Vet Apps"],
    challenges: [
      { title: "Fodder Shortage", desc: "Lack of green fodder in dry summer months reducing milk yield." },
      { title: "Disease Outbreaks", desc: "Lack of timely vaccination causing livestock losses." }
    ],
    odconesApproach: [
      "Year-round hydroponic fodder production units",
      "Doorstep artificial insemination & vaccination drives",
      "Cold-chain integrated milk collection centers",
      "Community Goat Banking model for landless families"
    ]
  },
  {
    id: "water-soil",
    slug: "water-soil",
    name: "WATER & SOIL CONSERVATION",
    tagline: "Protecting the foundations of sustainable agriculture.",
    heroImage: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1600",
    iconName: "Droplets",
    shortDesc: "Watershed restoration, check-dam construction, rainwater harvesting, sub-surface drainage, and soil carbon enhancement.",
    longDesc: "Without healthy soil and water security, agricultural development cannot endure. ODCONES executes catchment treatment, farm pond creation, gully plugging, check dam construction, and saline soil reclamation to regenerate degraded landscapes and recharge aquifer systems.",
    keyPillars: [
      { title: "Watershed Management", desc: "Ridge-to-valley soil treatment preventing runoff and topsoil erosion." },
      { title: "Farm Ponds & Check Dams", desc: "Percolation pits and check dams trapping surface runoff water." },
      { title: "Saline Land Reclamation", desc: "Sub-surface drainage networks leaching salts out of coastal soils." },
      { title: "Aquifer Recharge", desc: "Deep borehole recharge injection keeping groundwater tables healthy." }
    ],
    stats: [
      { value: "250+", label: "Check Dams & Ponds Built" },
      { value: "4.5M m³", label: "Rainwater Harvested" },
      { value: "15,000 Ha", label: "Degraded Land Restored" }
    ],
    technologies: ["GIS Hydrological Modeling", "Sub-surface Drainage Pipe Networks", "Laser Land Levelers", "Soil Carbon Scanners"],
    challenges: [
      { title: "Topsoil Erosion", desc: "Heavy rain washes away fertile topsoil into rivers." },
      { title: "Aquifer Depletion", desc: "Over-extraction of groundwater causing borewells to dry up." }
    ],
    odconesApproach: [
      "Contour trenching & vegetative bunding along hillsides",
      "Recharge shafts connected to farm ponds",
      "Bio-char amendment for sandy and degraded soils",
      "Community Water User Associations (WUAs)"
    ]
  }
];
