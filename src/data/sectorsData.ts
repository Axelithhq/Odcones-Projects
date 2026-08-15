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
  longDesc_or?: string;
  keyPillars: { title: string; desc: string }[];
  keyPillars_or?: { title: string; desc: string }[];
  stats: { value: string; label: string }[];
  stats_or?: { value: string; label: string }[];
  technologies: string[];
  technologies_or?: string[];
  challenges: { title: string; desc: string }[];
  challenges_or?: { title: string; desc: string }[];
  odconesApproach: string[];
  odconesApproach_or?: string[];
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
    longDesc_or: "ODCONES PROJECTS ଜଳବାୟୁ ଭୁଷ୍କୋଣତା, କମ୍ ବୀଜ ବଦଳ ହାର ଓ ଛିନ୍ନଭିନ୍ନ ଜମି ବିଭାଜନ ପାଇଁ ଉପଯୁକ୍ତ ଏଣ୍ଡ-ଟୁ-ଏଣ୍ଡ କୃଷି ପ୍ରତିଷେଧକ କାର୍ଯ୍ୟକ୍ରମ ପ୍ରଦାନ କରେ।",
    keyPillars: [
      { title: "Precision Crop Planning", desc: "AI and GIS-backed micro-climate land mapping for targeted crop choices." },
      { title: "Soil Regeneration", desc: "Organic carbon enhancement, micro-nutrient conditioning, and bio-fertilization." }
    ],
    keyPillars_or: [
      { title: "ସଠିକ୍ ଶସ୍ୟ ନିୟୋଜନ", desc: "ଲକ୍ଷ୍ୟଭିତ୍ତିକ ଶସ୍ୟ ବାଛବାଚ ପାଇଁ AI ଓ GIS ସମର୍ଥିତ ମାଇକ୍ରୋ-କ୍ଲାଇମେଟ୍ ଭୂମି ମ୍ୟାପିଂ।" },
      { title: "ମାଟି ପୁନରୁଦ୍ଧାର", desc: "ଜୈବିକ କାର୍ବନ ବୃଦ୍ଧି, ସୂକ୍ଷ୍ମ ପୋଷକ ତତ୍ତ୍ୱ ପ୍ରସ୍ତୁତି ଓ ଜୈବ ସାର।" }
    ],
    stats: [
      { value: "35,000+", label: "Farmers Empowered" },
      { value: "42%", label: "Average Yield Increase" }
    ],
    stats_or: [
      { value: "୩୫,୦୦୦+", label: "ସଶକ୍ତ ଚାଷୀ" },
      { value: "୪୨%", label: "ହାରାହାରି ଉତ୍ପାଦନ ବୃଦ୍ଧି" }
    ],
    technologies: ["GIS Crop Mapping", "IoT Soil Moisture Sensors", "Drone Spraying"],
    technologies_or: ["GIS ଶସ୍ୟ ମ୍ୟାପିଂ", "IoT ମାଟି ଆର୍ଦ୍ରତା ସେନ୍ସର", "ଡ୍ରୋନ୍ କୀଟନାଶକ ସିଞ୍ଚନ"],
    challenges: [{ title: "Monsoon Dependency", desc: "Uncertain rain cycles impacting traditional sowing schedules." }],
    challenges_or: [{ title: "ମୌସୁମୀ ନିର୍ଭରଶୀଳତା", desc: "ଅନିଶ୍ଚିତ ବର୍ଷା ଚକ୍ର ପାରମ୍ପରିକ ବୁଣା ସମୟସୂଚୀକୁ ପ୍ରଭାବିତ କରେ।" }],
    odconesApproach: ["Site-specific micro-climatic zoning", "Community water harvesting structures"],
    odconesApproach_or: ["ସ୍ଥାନୀୟ ମାଇକ୍ରୋ-କ୍ଲାଇମେଟିକ୍ ଜୋନିଂ", "ସାମୁହିକ ଜଳ ସଂଗ୍ରହ ସଂରଚନା"]
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
    longDesc_or: "କ୍ଷୁଦ୍ର ଓ ମଧ୍ୟମ ଚାଷୀମାନଙ୍କ ପାଇଁ ଉଦ୍ୟାନ କୃଷି ପ୍ରତି ଏକରରେ ସର୍ବାଧିକ ଆୟର ମାଧ୍ୟମ।",
    keyPillars: [
      { title: "Protected Cultivation", desc: "Polyhouse architectures designed for year-round crop production." }
    ],
    keyPillars_or: [
      { title: "ସଂରକ୍ଷିତ ଚାଷ", desc: "ବର୍ଷସାରା ଶସ୍ୟ ଉତ୍ପାଦନ ପାଇଁ ଡିଜାଇନ୍ ହୋଇଥିବା ପଲିହାଉସ ସ୍ଥାପତ୍ୟ।" }
    ],
    stats: [{ value: "450+", label: "Polyhouses Installed" }],
    stats_or: [{ value: "୪୫୦+", label: "ସଂସ୍ଥାପିତ ପଲିହାଉସ" }],
    technologies: ["Climate Control Sensors", "Automated Fertigation Controllers"],
    technologies_or: ["ଜଳବାୟୁ ନିୟନ୍ତ୍ରଣ ସେନ୍ସର", "ସ୍ୱୟଂଚାଳିତ ଫର୍ଟିଗେସନ୍ କଣ୍ଟ୍ରୋଲର"],
    challenges: [{ title: "High Perishability", desc: "Up to 35% crop loss post-harvest due to lack of immediate cooling." }],
    challenges_or: [{ title: "ଅଧିକ କ୍ଷୟଶୀଳତା", desc: "ତୁରନ୍ତ ଥଣ୍ଡା ବ୍ୟବସ୍ଥା ଅଭାବରୁ ଅମଳ ପରେ ୩୫% ପର୍ଯ୍ୟନ୍ତ ଶସ୍ୟ କ୍ଷତି।" }],
    odconesApproach: ["Precision greenhouse ventilation controls"],
    odconesApproach_or: ["ସଠିକ୍ ଗ୍ରୀନ୍ ହାଉସ ଭେଣ୍ଟିଲେସନ୍ ନିୟନ୍ତ୍ରଣ"]
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
    longDesc_or: "ODCONES ପାରମ୍ପରିକ ମତ୍ସ୍ୟ ଅମଳକୁ ଆଧୁନିକୀକରଣ କରିବା ପାଇଁ ନଦୀ, ମୁହାଣ ଓ ଜଳାଶୟ ଜଳ ନିକ୍ଷେତ୍ରରେ କାର୍ଯ୍ୟ କରେ।",
    keyPillars: [{ title: "Fisherman Cooperatives", desc: "Empowering local fishing societies with modern boats and net gear." }],
    keyPillars_or: [{ title: "ମତ୍ସ୍ୟଜୀବୀ ସମବାୟ", desc: "ଆଧୁନିକ ଡଙ୍ଗା ଓ ଜାଲ ଯନ୍ତ୍ର ସହିତ ସ୍ଥାନୀୟ ମତ୍ସ୍ୟ ସମିତିମାନଙ୍କୁ ସଶକ୍ତିକରଣ।" }],
    stats: [{ value: "14,000", label: "Fisherfolk Impacted" }],
    stats_or: [{ value: "୧୪,୦୦୦", label: "ପ୍ରଭାବିତ ମତ୍ସ୍ୟଜୀବୀ" }],
    technologies: ["Echo Sounder Bathymetry", "Solar Ice Generators"],
    technologies_or: ["ଇକୋ ସାଉଣ୍ଡର ବାଥିମେଟ୍ରି", "ସୌର ବରଫ ଜେନେରେଟର"],
    challenges: [{ title: "Over-exploitation", desc: "Depletion of wild fish stocks from unmonitored harvesting." }],
    challenges_or: [{ title: "ଅତ୍ୟଧିକ ଦୋହନ", desc: "ଅନିୟନ୍ତ୍ରିତ ଅମଳରୁ ବନ୍ୟ ମାଛ ସଂଖ୍ୟା ହ୍ରାସ।" }],
    odconesApproach: ["Community-led fishing cooperative management"],
    odconesApproach_or: ["ସମୁଦାୟ ନେତୃତ୍ୱାଧୀନ ମତ୍ସ୍ୟ ସମବାୟ ପରିଚାଳନା"]
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
    longDesc_or: "ଆଧୁନିକ ଜଳଚର ପାଳନ ପାଇଁ ଜଳ ଗୁଣବତ୍ତାର ସମ୍ପୂର୍ଣ୍ଣ ସଠିକତା ଓ ଜୈବ ସୁରକ୍ଷା ଆବଶ୍ୟକ।",
    keyPillars: [{ title: "Reservoir Cage Culture", desc: "HDPE floating cages for commercial fish rearing in reservoirs." }],
    keyPillars_or: [{ title: "ଜଳାଶୟ କେଜ୍ ଚାଷ", desc: "ଜଳାଶୟରେ ବାଣିଜ୍ୟିକ ମାଛ ପାଳନ ପାଇଁ HDPE ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍।" }],
    stats: [{ value: "1,200+", label: "Floating Cages Deployed" }],
    stats_or: [{ value: "୧,୨୦୦+", label: "କାର୍ଯ୍ୟରତ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍" }],
    technologies: ["IoT Dissolved Oxygen Sensors", "Microbubble Aerators"],
    technologies_or: ["IoT ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ ସେନ୍ସର", "ମାଇକ୍ରୋବବଲ୍ ଏରେଟର"],
    challenges: [{ title: "Oxygen Crashes", desc: "Sudden nocturnal dissolved oxygen drops causing mass mortality." }],
    challenges_or: [{ title: "ଅମ୍ଳଜାନ ସଙ୍କଟ", desc: "ରାତିରେ ହଠାତ୍ ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ ହ୍ରାସ ଯୋଗୁଁ ମାଛ ମରଣ।" }],
    odconesApproach: ["24/7 telemetry oxygen monitoring with auto-aerator triggers"],
    odconesApproach_or: ["ସ୍ୱୟଂଚାଳିତ ଏରେଟର ଟ୍ରିଗର ସହିତ ୨୪/୭ ଟେଲିମେଟ୍ରି ଅମ୍ଳଜାନ ନିରୀକ୍ଷଣ"]
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
    longDesc_or: "ଗୃହପାଳିତ ପଶୁ ଗ୍ରାମୀଣ ପରିବାର ପାଇଁ ଏକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଆର୍ଥିକ ସୁରକ୍ଷା କବଚ।",
    keyPillars: [{ title: "Smart Dairy Hubs", desc: "Automated milking parlors, bulk milk chillers, and herd health tracking." }],
    keyPillars_or: [{ title: "ସ୍ମାର୍ଟ ଦୁଗ୍ଧ କେନ୍ଦ୍ର", desc: "ସ୍ୱୟଂଚାଳିତ ଦୋହନ ପାର୍ଲର, ବଲ୍କ ମିଲ୍କ ଚିଲର ଓ ପଶୁ ସ୍ୱାସ୍ଥ୍ୟ ଟ୍ରାକିଂ।" }],
    stats: [{ value: "22,000+", label: "Cattle Managed" }],
    stats_or: [{ value: "୨୨,୦୦୦+", label: "ପରିଚାଳିତ ପଶୁ" }],
    technologies: ["RFID Cattle Identification", "Hydroponic Fodder Trays"],
    technologies_or: ["RFID ପଶୁ ପରିଚୟ", "ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ଟ୍ରେ"],
    challenges: [{ title: "Fodder Shortage", desc: "Lack of green fodder in dry summer months reducing milk yield." }],
    challenges_or: [{ title: "ପଶୁଖାଦ୍ୟ ଅଭାବ", desc: "ଶୁଖିଲା ଗ୍ରୀଷ୍ମ ମାସରେ ହରିତ ଘାସ ଅଭାବରୁ କ୍ଷୀର ଉତ୍ପାଦନ ହ୍ରାସ।" }],
    odconesApproach: ["Year-round hydroponic fodder production units"],
    odconesApproach_or: ["ବର୍ଷସାରା ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ଉତ୍ପାଦନ ୟୁନିଟ୍"]
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
    longDesc_or: "ସୁସ୍ଥ ମାଟି ଓ ଜଳ ସୁରକ୍ଷା ବିନା କୃଷି ଉନ୍ନୟନ ସ୍ଥାୟୀ ହୋଇପାରିବ ନାହିଁ।",
    keyPillars: [{ title: "Watershed Management", desc: "Ridge-to-valley soil treatment preventing runoff and topsoil erosion." }],
    keyPillars_or: [{ title: "ଜଳଛାୟା ପରିଚାଳନା", desc: "ପ୍ରବାହ ଓ ଉପର ସ୍ତର କ୍ଷୟ ରୋକୁଥିବା ପାହାଡ଼ରୁ ଉପତ୍ୟକା ମାଟି ପ୍ରତିକାର।" }],
    stats: [{ value: "250+", label: "Check Dams & Ponds Built" }],
    stats_or: [{ value: "୨୫୦+", label: "ନିର୍ମିତ ଚେକ୍ ଡ୍ୟାମ୍ ଓ ପୋଣ୍ଡ" }],
    technologies: ["GIS Hydrological Modeling", "Sub-surface Drainage Pipe Networks"],
    technologies_or: ["GIS ଜଳବିଜ୍ଞାନ ମଡେଲିଂ", "ଭୂତଳ ନିଷ୍କାସନ ପାଇପ୍ ନେଟୱାର୍କ"],
    challenges: [{ title: "Topsoil Erosion", desc: "Heavy rain washes away fertile topsoil into rivers." }],
    challenges_or: [{ title: "ଉପର ସ୍ତର କ୍ଷୟ", desc: "ପ୍ରବଳ ବର୍ଷାରେ ଉର୍ବର ଉପର ସ୍ତର ନଦୀକୁ ଭାସିଯାଏ।" }],
    odconesApproach: ["Contour trenching & vegetative bunding along hillsides"],
    odconesApproach_or: ["ପାହାଡ଼ କୂଳରେ ସୋପାନ ଟ୍ରେଞ୍ଚିଂ ଓ ଉଦ୍ଭିଦ ବନ୍ଧ"]
  }
];
