export interface SectorInfo {
  id: string;
  slug: string;
  name: string;
  name_or?: string;
  tagline: string;
  tagline_or?: string;
  heroImage: string;
  iconName: string;
  accentColor: string;
  badgeBg: string;
  shortDesc: string;
  shortDesc_or?: string;
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
    name_or: "କୃଷି",
    tagline: "From soil to harvest, building productive and resilient agricultural systems.",
    tagline_or: "ମାଟିରୁ ଅମଳ ପର୍ଯ୍ୟନ୍ତ, ସୁସ୍ଥିର ଓ ଉଚ୍ଚ ଉତ୍ପାଦନକ୍ଷମ କୃଷି ବ୍ୟବସ୍ଥା।",
    heroImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1600",
    iconName: "Sprout",
    accentColor: "#40916C",
    badgeBg: "rgba(64, 145, 108, 0.15)",
    shortDesc: "Transforming smallholder farming through climate-resilient practices, soil carbon enhancement, and high-yield agricultural infrastructure.",
    shortDesc_or: "କ୍ଷୁଦ୍ର ଓ ନାମମାତ୍ର ଚାଷୀମାନଙ୍କ ପାଇଁ ଜଳବାୟୁ ସହନଶୀଳ କୃଷି, ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ ସୁରକ୍ଷା ଓ ଆଧୁନିକ କୃଷି ଭିତ୍ତିଭୂମି।",
    longDesc: "ODCONES PROJECTS delivers end-to-end agricultural interventions designed for climate vulnerability, low seed-replacement rates, and fragmented landholdings.",
    keyPillars: [
      { title: "Precision Crop Planning", desc: "AI and GIS-backed micro-climate land mapping for targeted crop choices." },
      { title: "Soil Regeneration", desc: "Organic carbon enhancement, micro-nutrient conditioning, and bio-fertilization." }
    ],
    stats: [
      { value: "35,000+", label: "Farmers Empowered" },
      { value: "42%", label: "Average Yield Increase" }
    ],
    technologies: ["GIS Crop Mapping", "IoT Soil Moisture Sensors", "Drone Spraying"],
    challenges: [{ title: "Monsoon Dependency", desc: "Uncertain rain cycles impacting traditional sowing schedules." }],
    odconesApproach: ["Site-specific micro-climatic zoning", "Community water harvesting structures"]
  },
  {
    id: "horticulture",
    slug: "horticulture",
    name: "HORTICULTURE",
    name_or: "ଉଦ୍ୟାନ କୃଷି",
    tagline: "High-value crop production under protected greenhouse cultivation.",
    tagline_or: "ସଂରକ୍ଷିତ ପଲିହାଉସ ଚାଷ ମାଧ୍ୟମରେ ଉଚ୍ଚ ମୂଲ୍ୟଯୁକ୍ତ ଫସଲ ଉତ୍ପାଦନ।",
    heroImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1600",
    iconName: "Flower2",
    accentColor: "#52B788",
    badgeBg: "rgba(82, 183, 136, 0.15)",
    shortDesc: "Naturally ventilated polyhouses, shade-net nurseries, exotic vegetable farming, and cold-chain integrated harvest systems.",
    shortDesc_or: "ପଲିହାଉସ, ସେଡନେଟ୍ ନର୍ସରୀ, ଉଚ୍ଚ ମୂଲ୍ୟଯୁକ୍ତ ପନିପରିବା ଚାଷ ଓ କୋଲ୍ଡ-ଚେନ୍ ସଂଯୋଗ।",
    longDesc: "Horticulture represents the highest income-per-acre vector for small and medium farmers.",
    keyPillars: [
      { title: "Protected Cultivation", desc: "Polyhouse architectures designed for year-round crop production." }
    ],
    stats: [{ value: "450+", label: "Polyhouses Installed" }],
    technologies: ["Climate Control Sensors", "Automated Fertigation Controllers"],
    challenges: [{ title: "High Perishability", desc: "Up to 35% crop loss post-harvest due to lack of immediate cooling." }],
    odconesApproach: ["Precision greenhouse ventilation controls"]
  },
  {
    id: "fisheries",
    slug: "fisheries",
    name: "FISHERIES",
    name_or: "ମତ୍ସ୍ୟଚାଷ",
    tagline: "Supporting aquatic livelihoods, riverine fisherfolk, and natural water bodies.",
    tagline_or: "ନଦୀ, ହ୍ରଦ ଓ ଜଳାଶୟର ସୁରକ୍ଷା ସହ ମତ୍ସ୍ୟଜୀବୀମାନଙ୍କ ଜୀବିକା ଉନ୍ନୟନ।",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600",
    iconName: "Fish",
    accentColor: "#006680",
    badgeBg: "rgba(0, 102, 128, 0.15)",
    shortDesc: "Inland fishery restoration, fisherman cooperative support, hygienic landing docks, and riverine ecosystem preservation.",
    shortDesc_or: "ମତ୍ସ୍ୟ ସମବାୟ ସମିତି ସଶକ୍ତିକରଣ, ସୌର ପାଳିତ ବରଫ କେନ୍ଦ୍ର ଓ ମାଛ ଉତାରିବା ନିଲାମ କେନ୍ଦ୍ର।",
    longDesc: "ODCONES works across riverine, estuarine, and reservoir water bodies to modernize traditional capture fisheries.",
    keyPillars: [{ title: "Fisherman Cooperatives", desc: "Empowering local fishing societies with modern boats and net gear." }],
    stats: [{ value: "14,000", label: "Fisherfolk Impacted" }],
    technologies: ["Echo Sounder Bathymetry", "Solar Ice Generators"],
    challenges: [{ title: "Over-exploitation", desc: "Depletion of wild fish stocks from unmonitored harvesting." }],
    odconesApproach: ["Community-led fishing cooperative management"]
  },
  {
    id: "aquaculture",
    slug: "aquaculture",
    name: "AQUACULTURE",
    name_or: "ଜଳଚର ପାଳନ",
    tagline: "Technology-driven fish production for a growing blue economy.",
    tagline_or: "ବ୍ଲୁ-ଇକୋନୋମି ପାଇଁ ବୈଜ୍ଞାନିକ ମାଛ ଚାଷ ଓ ବାୟୋଫ୍ଲୋକ୍ ଟେକ୍ନୋଲୋଜି।",
    heroImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1600",
    iconName: "Waves",
    accentColor: "#149ECA",
    badgeBg: "rgba(20, 158, 202, 0.15)",
    shortDesc: "Scientific fish & shrimp farming, HDPE floating cages, Biofloc circular tanks, RAS units, and bio-secure hatcheries.",
    shortDesc_or: "ଏଚଡିପିଇ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍, ବାୟୋଫ୍ଲୋକ୍ ଟ୍ୟାଙ୍କ ଓ ୨୪/୭ ଜଳର ଗୁଣବତ୍ତା ନିରୀକ୍ଷଣ।",
    longDesc: "Modern aquaculture demands absolute water quality precision and bio-security.",
    keyPillars: [{ title: "Reservoir Cage Culture", desc: "HDPE floating cages for commercial fish rearing in reservoirs." }],
    stats: [{ value: "1,200+", label: "Floating Cages Deployed" }],
    technologies: ["IoT Dissolved Oxygen Sensors", "Microbubble Aerators"],
    challenges: [{ title: "Oxygen Crashes", desc: "Sudden nocturnal dissolved oxygen drops causing mass mortality." }],
    odconesApproach: ["24/7 telemetry oxygen monitoring with auto-aerator triggers"]
  },
  {
    id: "animal-husbandry",
    slug: "animal-husbandry",
    name: "ANIMAL HUSBANDRY",
    name_or: "ପଶୁପାଳନ",
    tagline: "Supporting healthier livestock systems and rural livelihoods.",
    tagline_or: "ଗୋପାଳନ, ଛେଳି ଚାଷ, କୁକୁଡ଼ା ପାଳନ ଓ ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ଉତ୍ପାଦନ।",
    heroImage: "https://images.unsplash.com/photo-1570042707220-410a563f8d9b?auto=format&fit=crop&q=80&w=1600",
    iconName: "ShieldCheck",
    accentColor: "#D4A373",
    badgeBg: "rgba(212, 163, 115, 0.15)",
    shortDesc: "Dairy herd improvement, bulk milk chilling hubs, perennial fodder security, and veterinary tele-care.",
    shortDesc_or: "ଆଧୁନିକ ଦୁଗ୍ଧ ସଂଗ୍ରହ କେନ୍ଦ୍ର, ସୌର ଚାଳିତ କ୍ଷୀର ଥଣ୍ଡା ଯନ୍ତ୍ର ଓ ପଶୁ ଚିକିତ୍ସା।",
    longDesc: "Livestock represents an essential financial cushion for rural households.",
    keyPillars: [{ title: "Smart Dairy Hubs", desc: "Automated milking parlors, bulk milk chillers, and herd health tracking." }],
    stats: [{ value: "22,000+", label: "Cattle Managed" }],
    technologies: ["RFID Cattle Identification", "Hydroponic Fodder Trays"],
    challenges: [{ title: "Fodder Shortage", desc: "Lack of green fodder in dry summer months reducing milk yield." }],
    odconesApproach: ["Year-round hydroponic fodder production units"]
  },
  {
    id: "water-soil",
    slug: "water-soil",
    name: "WATER & SOIL CONSERVATION",
    name_or: "ମୃତ୍ତିକା ଓ ଜଳ ସଂରକ୍ଷଣ",
    tagline: "Protecting soil health and regenerating watershed landscapes.",
    tagline_or: "ଚେକ୍ ଡ୍ୟାମ୍, ଫାର୍ମ ପୋଣ୍ଡ ଓ କୂଳବର୍ତ୍ତୀ ଲବଣାକ୍ତ ଜମିର ପୁନରୁଦ୍ଧାର।",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1600",
    iconName: "Droplets",
    accentColor: "#0A3A40",
    badgeBg: "rgba(10, 58, 64, 0.2)",
    shortDesc: "Watershed restoration, check dams, rainwater harvesting, sub-surface drainage, and saline land reclamation.",
    shortDesc_or: "ଜଳଛାୟା ପ୍ରକଳ୍ପ, ବର୍ଷାଜଳ ଅମଳ, ଭୂତଳ ଜଳ ରିଚାର୍ଜ ଓ ମାଟି ସଂରକ୍ଷଣ।",
    longDesc: "Without healthy soil and water security, agricultural development cannot endure.",
    keyPillars: [{ title: "Watershed Management", desc: "Ridge-to-valley soil treatment preventing runoff and topsoil erosion." }],
    stats: [{ value: "250+", label: "Check Dams & Ponds Built" }],
    technologies: ["GIS Hydrological Modeling", "Sub-surface Drainage Pipe Networks"],
    challenges: [{ title: "Topsoil Erosion", desc: "Heavy rain washes away fertile topsoil into rivers." }],
    odconesApproach: ["Contour trenching & vegetative bunding along hillsides"]
  }
];
