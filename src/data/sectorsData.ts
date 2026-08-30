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
  odconsApproach: string[];
  odconsApproach_or?: string[];
}

export const SECTORS: SectorInfo[] = [
  {
    id: "agriculture",
    slug: "agriculture",
    name: "AGRICULTURE",
    name_or: "କୃଷି ଉନ୍ନୟନ",
    tagline: "From soil health to harvest, building resilient & high-yield agricultural systems.",
    tagline_or: "ମାଟିରୁ ଅମଳ ପର୍ଯ୍ୟନ୍ତ, ସୁସ୍ଥିର ଓ ଉଚ୍ଚ ଉତ୍ପାଦନକ୍ଷମ କୃଷି ବ୍ୟବସ୍ଥା।",
    heroImage: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=1600",
    iconName: "Sprout",
    accentColor: "#40916C",
    badgeBg: "rgba(64, 145, 108, 0.15)",
    shortDesc: "Transforming smallholder farming through climate-resilient practices, soil carbon enhancement, GIS micro-zoning, and high-yield crop planning.",
    shortDesc_or: "କ୍ଷୁଦ୍ର ଓ ନାମମାତ୍ର ଚାଷୀମାନଙ୍କ ପାଇଁ ଜଳବାୟୁ ସହନଶୀଳ କୃଷି, ମୃତ୍ତିକା ସ୍ୱାସ୍ଥ୍ୟ ସୁରକ୍ଷା ଓ ଆଧୁନିକ କୃଷି ଭିତ୍ତିଭୂମି।",
    longDesc: "ODCONS PROJECTS delivers end-to-end agricultural engineering interventions designed for climate vulnerability, low seed-replacement rates, and fragmented landholdings.",
    longDesc_or: "ODCONS PROJECTS ଜଳବାୟୁ ସହନଶୀଳତା, କମ୍ ବୀଜ ବଦଳ ହାର ଓ ଛିନ୍ନଭିନ୍ନ ଜମି ବିଭାଜନ ପାଇଁ ଉପଯୁକ୍ତ ଏଣ୍ଡ-ଟୁ-ଏଣ୍ଡ କୃଷି ଇଞ୍ଜିନିୟରିଂ ପ୍ରଦାନ କରେ।",
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
    odconsApproach: ["Site-specific micro-climatic zoning", "Community water harvesting structures"],
    odconsApproach_or: ["ସ୍ଥାନୀୟ ମାଇକ୍ରୋ-କ୍ଲାଇମେଟିକ୍ ଜୋନିଂ", "ସାମୁହିକ ଜଳ ସଂଗ୍ରହ ସଂରଚନା"]
  },
  {
    id: "fisheries",
    slug: "fisheries",
    name: "FISHERIES & AQUACULTURE",
    name_or: "ମତ୍ସ୍ୟଚାଷ ଓ ଜଳଚର ପାଳନ",
    tagline: "Technology-driven inland & marine aquaculture for a thriving blue economy.",
    tagline_or: "ବ୍ଲୁ-ଇକୋନୋମି ପାଇଁ ବୈଜ୍ଞାନିକ ମାଛ ଚାଷ, ବାୟୋଫ୍ଲୋକ୍ ଓ HDPE କେଜ୍।",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1600",
    iconName: "Fish",
    accentColor: "#006680",
    badgeBg: "rgba(0, 102, 128, 0.15)",
    shortDesc: "Inland fishery restoration, Biofloc circular tanks, HDPE reservoir cages, RAS recirculating systems, and solar ice plants.",
    shortDesc_or: "ମତ୍ସ୍ୟ ସମବାୟ ସମିତି ସଶକ୍ତିକରଣ, HDPE ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍, ବାୟୋଫ୍ଲୋକ୍ ଟ୍ୟାଙ୍କ ଓ ସୌର ବରଫ କେନ୍ଦ୍ର।",
    longDesc: "ODCONS works across inland reservoirs, rivers, and coastal estuaries to modernize traditional capture and culture fisheries under PMMSY and State schemes.",
    longDesc_or: "ODCONS PMMSY ଓ ସରକାରୀ ଯୋଜନା ଅଧୀନରେ ନଦୀ, ଜଳାଶୟ ଓ ଉପକୂଳିଆ ମୁହାଣରେ ମତ୍ସ୍ୟ ଚାଷର ଆଧୁନିକୀକରଣ କରେ।",
    keyPillars: [
      { title: "Reservoir Cage Culture", desc: "HDPE floating cages for high-density commercial fish production." },
      { title: "Biofloc & RAS Units", desc: "Zero-water exchange circular tanks for urban and small-footprint aquaculture." }
    ],
    keyPillars_or: [
      { title: "ଜଳାଶୟ କେଜ୍ ଚାଷ", desc: "ଉଚ୍ଚ ଘନତା ବାଣିଜ୍ୟିକ ମାଛ ଉତ୍ପାଦନ ପାଇଁ HDPE ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍।" },
      { title: "ବାୟୋଫ୍ଲୋକ୍ ଓ RAS ୟୁନିଟ୍", desc: "କମ୍ ଜମିରେ ସ୍ୱଳ୍ପ ଜଳ ବ୍ୟବହାରରେ ସ୍ମାର୍ଟ ମାଛ ଚାଷ।" }
    ],
    stats: [
      { value: "1,200+", label: "Floating Cages Deployed" },
      { value: "18,000", label: "Fisherfolk Impacted" }
    ],
    stats_or: [
      { value: "୧,୨୦୦+", label: "କାର୍ଯ୍ୟରତ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍" },
      { value: "୧୮,୦୦୦", label: "ପ୍ରଭାବିତ ମତ୍ସ୍ୟଜୀବୀ" }
    ],
    technologies: ["IoT Dissolved Oxygen Telemetry", "Microbubble Aerators", "Solar Cold Storage"],
    technologies_or: ["IoT ଦ୍ରବୀଭୂତ ଅମ୍ଳଜାନ ଟେଲିମେଟ୍ରି", "ମାଇକ୍ରୋବବଲ୍ ଏରେଟର", "ସୌର କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍"],
    challenges: [{ title: "Nocturnal Oxygen Crash", desc: "Sudden dissolved oxygen drops causing fish mortality." }],
    challenges_or: [{ title: "ରାତ୍ରିକାଳୀନ ଅମ୍ଳଜାନ ହ୍ରାସ", desc: "ରାତିରେ ହଠାତ୍ ଅମ୍ଳଜାନ ହ୍ରାସ ଯୋଗୁଁ ମାଛ ମରଣ।" }],
    odconsApproach: ["24/7 telemetry oxygen monitoring with auto-aerators"],
    odconsApproach_or: ["ସ୍ୱୟଂଚାଳିତ ଏରେଟର ଟ୍ରିଗର ସହିତ ୨୪/୭ ଟେଲିମେଟ୍ରି ଅମ୍ଳଜାନ ନିରୀକ୍ଷଣ"]
  },
  {
    id: "dairy",
    slug: "dairy",
    name: "DAIRY & ANIMAL HUSBANDRY",
    name_or: "ଦୁଗ୍ଧ ଓ ପଶୁସମ୍ପଦ",
    tagline: "Modern dairy hubs, cattle breeding, poultry & hydroponic fodder systems.",
    tagline_or: "ସ୍ମାର୍ଟ ଦୁଗ୍ଧ ସଂଗ୍ରହ କେନ୍ଦ୍ର, ଗୋପାଳନ, କୁକୁଡ଼ା ପାଳନ ଓ ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ।",
    heroImage: "https://images.unsplash.com/photo-1570042707220-410a563f8d9b?auto=format&fit=crop&q=80&w=1600",
    iconName: "ShieldCheck",
    accentColor: "#D4A373",
    badgeBg: "rgba(212, 163, 115, 0.15)",
    shortDesc: "Commercial dairy shed design, Bulk Milk Chilling (BMC) hubs, hydroponic green fodder trays, poultry layer units, and tele-veterinary support.",
    shortDesc_or: "ଆଧୁନିକ ଗୋଶାଳା ଡିଜାଇନ୍, ବଲ୍କ ମିଲ୍କ ଚିଲର, ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ଉତ୍ପାଦନ ଓ ପଶୁ ଚିକିତ୍ସା।",
    longDesc: "Livestock represents a critical daily cash flow vector for rural households. ODCONS designs bankable dairy infrastructure and fodder security solutions.",
    longDesc_or: "ଗୃହପାଳିତ ପଶୁ ଗ୍ରାମୀଣ ପରିବାର ପାଇଁ ଏକ ନିୟମିତ ଆୟର ମାଧ୍ୟମ। ODCONS ବ୍ୟାଙ୍କଯୋଗ୍ୟ ଦୁଗ୍ଧ ଭିତ୍ତିଭୂମି ଡିଜାଇନ୍ କରେ।",
    keyPillars: [
      { title: "Smart Dairy Hubs", desc: "Automated milking parlors, BMC units, and RFID herd health tracking." },
      { title: "Hydroponic Fodder Security", desc: "Year-round green fodder trays reducing feeding costs by 35%." }
    ],
    keyPillars_or: [
      { title: "ସ୍ମାର୍ଟ ଦୁଗ୍ଧ କେନ୍ଦ୍ର", desc: "ସ୍ୱୟଂଚାଳିତ ଦୋହନ ପାର୍ଲର, ବଲ୍କ ମିଲ୍କ ଚିଲର ଓ ପଶୁ ଟ୍ରାକିଂ।" },
      { title: "ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ସୁରକ୍ଷା", desc: "ଖାଦ୍ୟ ଖର୍ଚ୍ଚ ୩୫% କମାଉଥିବା ବର୍ଷସାରା ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ।" }
    ],
    stats: [
      { value: "28,000+", label: "Cattle & Livestock Managed" },
      { value: "140+", label: "BMC Hubs Established" }
    ],
    stats_or: [
      { value: "୨୮,୦୦୦+", label: "ପରିଚାଳିତ ପଶୁ" },
      { value: "୧୪୦+", label: "ସ୍ଥାପିତ ଦୁଗ୍ଧ ଚିଲର କେନ୍ଦ୍ର" }
    ],
    technologies: ["RFID Cattle Tags", "Hydroponic Fodder Racks", "Solar BMC Chilling"],
    technologies_or: ["RFID ପଶୁ ଟ୍ୟାଗ୍", "ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ରାକ୍", "ସୌର ଦୁଗ୍ଧ ଚିଲର"],
    challenges: [{ title: "Summer Fodder Deficit", desc: "Scarcity of green fodder in hot summer months lowering milk yield." }],
    challenges_or: [{ title: "ଗ୍ରୀଷ୍ମକାଳୀନ ଘାସ ଅଭାବ", desc: "ଖରାଦିନେ ସବୁଜ ଘାସ ଅଭାବରୁ କ୍ଷୀର ଉତ୍ପାଦନ କମିଯାଏ।" }],
    odconsApproach: ["Controlled-environment hydroponic fodder units with solar backup"],
    odconsApproach_or: ["ସୌର ବ୍ୟାକଅପ୍ ସହ ହାଇଡ୍ରୋପୋନିକ୍ ଘାସ ୟୁନିଟ୍"]
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
    shortDesc: "Naturally ventilated polyhouses, shade-net nurseries, exotic vegetable farming, mushroom units, and floriculture.",
    shortDesc_or: "ପଲିହାଉସ, ସେଡନେଟ୍ ନର୍ସରୀ, ଉଚ୍ଚ ମୂଲ୍ୟଯୁକ୍ତ ପନିପରିବା ଚାଷ, ଛତୁ ଚାଷ ଓ ଫୁଲ ଚାଷ।",
    longDesc: "Horticulture delivers high revenue per acre for progressive farmers. ODCONS designs MIDH-compliant polyhouse blueprints and automated fertigation systems.",
    longDesc_or: "ଉଦ୍ୟାନ କୃଷି ପ୍ରତି ଏକରରେ ସର୍ବାଧିକ ଆୟ ଆଣିଥାଏ। ODCONS MIDH ଅନୁମୋଦିତ ପଲିହାଉସ ବ୍ଲୁପ୍ରିଣ୍ଟ ପ୍ରସ୍ତୁତ କରେ।",
    keyPillars: [
      { title: "Protected Polyhouses", desc: "Climate-controlled greenhouses for off-season capsicum, tomato, and cucumber." },
      { title: "Precision Drip & Fertigation", desc: "Automated nutrient dosing directly to root zones." }
    ],
    keyPillars_or: [
      { title: "ସଂରକ୍ଷିତ ପଲିହାଉସ", desc: "ଅଫ୍-ସିଜନ୍ ପନିପରିବା ଉତ୍ପାଦନ ପାଇଁ ଜଳବାୟୁ ନିୟନ୍ତ୍ରିତ ଗ୍ରୀନ୍ ହାଉସ୍।" },
      { title: "ସଠିକ୍ ଡ୍ରିପ୍ ଓ ଫର୍ଟିଗେସନ୍", desc: "ଚେର ନିକଟରେ ସ୍ୱୟଂଚାଳିତ ପୋଷକ ତତ୍ତ୍ୱ ପ୍ରଦାନ।" }
    ],
    stats: [
      { value: "520+", label: "Polyhouse Units Designed" },
      { value: "3.5x", label: "Income Multiplier" }
    ],
    stats_or: [
      { value: "୫୨୦+", label: "ଡିଜାଇନ୍ ହୋଇଥିବା ପଲିହାଉସ" },
      { value: "୩.୫x", label: "ଆୟ ବୃଦ୍ଧି" }
    ],
    technologies: ["Automated Fertigation", "Shade Net Actuators", "Soil EC Sensors"],
    technologies_or: ["ସ୍ୱୟଂଚାଳିତ ଫର୍ଟିଗେସନ୍", "ସେଡନେଟ୍ ଆକ୍ଚୁଏଟର", "ମୃତ୍ତିକା EC ସେନ୍ସର"],
    challenges: [{ title: "Extreme Heatwaves", desc: "High summer ambient temperatures stressing greenhouse crops." }],
    challenges_or: [{ title: "ଅତ୍ୟଧିକ ତାପମାତ୍ରା", desc: "ଗ୍ରୀଷ୍ମଦିନେ ପ୍ରବଳ ଖରା ପଲିହାଉସ ଫସଲକୁ କ୍ଷତିପହଞ୍ଚାଏ।" }],
    odconsApproach: ["Dual-layer shade screens with micro-fogger cooling system"],
    odconsApproach_or: ["ମାଇକ୍ରୋ-ଫଗର ଥଣ୍ଡା ବ୍ୟବସ୍ଥା ସହ ଡୁଆଲ୍-ଲେୟାର ସେଡସ୍କ୍ରିନ୍"]
  },
  {
    id: "food-processing",
    slug: "food-processing",
    name: "FOOD PROCESSING",
    name_or: "ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ",
    tagline: "Primary & secondary agro-processing units to eliminate post-harvest waste.",
    tagline_or: "ଅମଳ ପରବର୍ତ୍ତୀ କ୍ଷତି ରୋକିବା ପାଇଁ ଆଗ୍ରୋ-ପ୍ରସେସିଂ ଓ ମୂଲ୍ୟ ବୃଦ୍ଧି।",
    heroImage: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1600",
    iconName: "Utensils",
    accentColor: "#E9C46A",
    badgeBg: "rgba(233, 196, 106, 0.15)",
    shortDesc: "Rice mills, oil extraction plants, spice grinding complexes, dal processing units, and PM-FME micro-food enterprises.",
    shortDesc_or: "ଧାନ ମିଲ୍, ତେଲ ପେଡ଼ା ୟୁନିଟ୍, ମସଲା ଗୁଣ୍ଡ କାରଖାନା ଓ PM-FME ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ।",
    longDesc: "Adding value to raw agricultural produce captures maximum retail margins locally. ODCONS prepares bankable DPRs and plant machinery layouts for food processing hubs.",
    longDesc_or: "କଚ୍ଚା କୃଷି ଜାତ ଦ୍ରବ୍ୟର ମୂଲ୍ୟ ବୃଦ୍ଧି ଗ୍ରାମୀଣ ଆୟ ବଢ଼ାଏ। ODCONS ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ ପାଇଁ DPR ଓ ପ୍ଲାଣ୍ଟ ଲେ-ଆଉଟ୍ ପ୍ରସ୍ତୁତ କରେ।",
    keyPillars: [
      { title: "Agro-Processing Clusters", desc: "Integrated industrial layouts combining cleaning, grading, sorting, and packaging." },
      { title: "FSSAI & Quality Labs", desc: "Quality assurance and sanitary processing standards compliance." }
    ],
    keyPillars_or: [
      { title: "ଆଗ୍ରୋ-ପ୍ରସେସିଂ କ୍ଲଷ୍ଟର", desc: "ସଫେଇ, ଗ୍ରେଡିଂ, ବାଛବାଚ ଓ ପ୍ୟାକେଜିଂ ସହ ଏକତ୍ରିତ ଶିଳ୍ପ ଲେ-ଆଉଟ୍।" },
      { title: "FSSAI ଓ ଗୁଣବତ୍ତା ଲ୍ୟାବ୍", desc: "ଖାଦ୍ୟ ନିରାପତ୍ତା ଓ ଗୁଣବତ୍ତା ପରୀକ୍ଷା ସୁବିଧା।" }
    ],
    stats: [
      { value: "180+", label: "Food Processing Units Built" },
      { value: "₹45 Cr+", label: "Capital Expenditure Financed" }
    ],
    stats_or: [
      { value: "୧୮୦+", label: "ନିର୍ମିତ ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ ୟୁନିଟ୍" },
      { value: "₹୪୫ କୋଟି+", label: "ମଞ୍ଜୁରୀପ୍ରାପ୍ତ ଋଣ" }
    ],
    technologies: ["Color Sorter Machines", "Cold Press Oil Expellers", "Modified Atmosphere Packaging"],
    technologies_or: ["କଲର ସର୍ଟର ମେସିନ୍", "କୋଲ୍ଡ ପ୍ରେସ୍ ଅଏଲ୍ ଏକ୍ସପେଲର", "ପ୍ୟାକେଜିଂ ସିଷ୍ଟମ୍"],
    challenges: [{ title: "High Raw Material Seasonality", desc: "Surge harvesting requiring rapid throughput capacity." }],
    challenges_or: [{ title: "ଋତୁକାଳୀନ ଅମଳ", desc: "ଅମଳ ସମୟରେ ପ୍ରଚୁର କଚ୍ଚା ମାଲ୍ ସାଙ୍ଗେ ସାଙ୍ଗେ ପ୍ରସେସିଂ ଆବଶ୍ୟକ।" }],
    odconsApproach: ["Modular processing lines adaptable to seasonal crop variations"],
    odconsApproach_or: ["ବିଭିନ୍ନ ଋତୁର ଫସଲ ପାଇଁ ଉପଯୁକ୍ତ ମଡ୍ୟୁଲାର୍ ପ୍ରସେସିଂ ଲାଇନ୍"]
  },
  {
    id: "cold-chain",
    slug: "cold-chain",
    name: "COLD CHAIN & STORAGE",
    name_or: "କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ଓ କୋଲ୍ଡ-ଚେନ୍",
    tagline: "Zero post-harvest degradation through temperature-controlled logistics.",
    tagline_or: "ତାପମାତ୍ରା ନିୟନ୍ତ୍ରିତ ଷ୍ଟୋରେଜ୍ ଓ ଶୀତଳ ଭଣ୍ଡାର ମାଧ୍ୟମରେ ଫସଲ ସୁରକ୍ଷା।",
    heroImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1600",
    iconName: "Snowflake",
    accentColor: "#0D879F",
    badgeBg: "rgba(13, 135, 159, 0.15)",
    shortDesc: "Integrated Packhouses, PUF panel cold rooms, pre-cooling chambers, refrigerated vans, and ripening chambers.",
    shortDesc_or: "ଇଣ୍ଟିଗ୍ରେଟେଡ୍ ପ୍ୟାକହାଉସ୍, PUF କୋଲ୍ଡ ରୁମ୍, ପ୍ରି-କୁଲିଂ ଚାମ୍ବର ଓ ରିଫର ଭ୍ୟାନ୍।",
    longDesc: "India loses up to 30% of fresh fruits and vegetables due to cold chain breaks. ODCONS engineers energy-efficient, solar-assisted cold storage facilities.",
    longDesc_or: "ଶୀତଳ ଭଣ୍ଡାର ଅଭାବରୁ ୩୦% ଫଳ ଓ ପନିପରିବା ନଷ୍ଟ ହୁଏ। ODCONS ସୌର ଚାଳିତ କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ଡିଜାଇନ୍ କରେ।",
    keyPillars: [
      { title: "Integrated Packhouses", desc: "Washing, sorting, pre-cooling, and palletized cold holding under one roof." },
      { title: "Multi-Commodity Cold Rooms", desc: "Dual-zone temperature and humidity control for diverse produce." }
    ],
    keyPillars_or: [
      { title: "ଇଣ୍ଟିଗ୍ରେଟେଡ୍ ପ୍ୟାକହାଉସ୍", desc: "ଧୋଇବା, ଗ୍ରେଡିଂ, ପ୍ରି-କୁଲିଂ ଓ କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ଏକାଠି।" },
      { title: "ମଲ୍ଟି-କମୋଡିଟି କୋଲ୍ଡ ରୁମ୍", desc: "ବିଭିନ୍ନ ଫଳ-ପନିପରିବା ପାଇଁ ତାପମାତ୍ରା ନିୟନ୍ତ୍ରିତ ରୁମ୍।" }
    ],
    stats: [
      { value: "95,000 MT", label: "Cold Capacity Designed" },
      { value: "85%", label: "Post-Harvest Loss Reduction" }
    ],
    stats_or: [
      { value: "୯୫,୦୦୦ MT", label: "ଡିଜାଇନ୍ ହୋଇଥିବା କୋଲ୍ଡ କ୍ଷମତା" },
      { value: "୮୫%", label: "ଅମଳ ପରବର୍ତ୍ତୀ କ୍ଷତି ହ୍ରାସ" }
    ],
    technologies: ["PUF Insulation Panels", "VFD Screw Compressors", "Remote Thermal Telemetry"],
    technologies_or: ["PUF ଇନସୁଲେସନ୍ ପ୍ୟାନେଲ୍", "ସ୍କ୍ରୁ କମ୍ପ୍ରେସର", "ରିମୋଟ୍ ଟେମ୍ପରେଚର୍ ଟ୍ରାକିଂ"],
    challenges: [{ title: "Grid Power Outages", desc: "Unreliable rural grid power threatening thermal maintenance." }],
    challenges_or: [{ title: "ବିଦ୍ୟୁତ୍ କାଟ", desc: "ଗ୍ରାମାଞ୍ଚଳରେ ବିଦ୍ୟୁତ୍ ସମସ୍ୟା କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍କୁ ପ୍ରଭାବିତ କରେ।" }],
    odconsApproach: ["Thermal energy storage & solar hybrid inverter setups"],
    odconsApproach_or: ["ଥର୍ମାଲ ଏନର୍ଜି ଷ୍ଟୋରେଜ୍ ଓ ସୌର ହାଇବ୍ରିଡ୍ ଇନଭର୍ଟର"]
  },
  {
    id: "rural-infrastructure",
    slug: "rural-infrastructure",
    name: "RURAL INFRASTRUCTURE",
    name_or: "ଗ୍ରାମୀଣ ଭିତ୍ତିଭୂମି",
    tagline: "Civil & watershed engineering empowering connected rural communities.",
    tagline_or: "ଚେକ୍ ଡ୍ୟାମ୍, ଫାର୍ମ ପୋଣ୍ଡ, ଗ୍ରାମୀଣ ରାସ୍ତା ଓ ସୁସଂଗଠିତ କୃଷି ଭିତ୍ତିଭୂମି।",
    heroImage: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1600",
    iconName: "Building2",
    accentColor: "#0A3A40",
    badgeBg: "rgba(10, 58, 64, 0.2)",
    shortDesc: "Check dams, farm ponds, sub-surface drainage, rural connectivity structures, grain godowns, and renewable micro-grids.",
    shortDesc_or: "ଚେକ୍ ଡ୍ୟାମ୍, ଫାର୍ମ ପୋଣ୍ଡ, ଶସ୍ୟ ଗୋଦାମ, ବର୍ଷାଜଳ ଅମଳ ଓ ମାଟି ସଂରକ୍ଷଣ।",
    longDesc: "Robust rural civil infrastructure underpins agricultural productivity and logistics. ODCONS designs durable civil structures engineered for severe weather resilient lifespans.",
    longDesc_or: "ଗ୍ରାମୀଣ ସିଭିଲ୍ ଭିତ୍ତିଭୂମି କୃଷି ଉତ୍ପାଦନ ଓ ପରିବହନକୁ ସୁଦୃଢ଼ କରେ। ODCONS ସ୍ଥାୟୀ ସିଭିଲ୍ ସଂରଚନା ଡିଜାଇନ୍ କରେ।",
    keyPillars: [
      { title: "Watershed Check Dams", desc: "Masonry and RCC check dams for groundwater recharge and flood control." },
      { title: "Scientific Grain Godowns", desc: "Scientific moisture-proof storage warehouses for AIF and CWC norms." }
    ],
    keyPillars_or: [
      { title: "ଜଳଛାୟା ଚେକ୍ ଡ୍ୟାମ୍", desc: "ଭୂତଳ ଜଳ ରିଚାର୍ଜ ଓ ବନ୍ୟା ନିୟନ୍ତ୍ରଣ ପାଇଁ ଚେକ୍ ଡ୍ୟାମ୍।" },
      { title: "ବୈଜ୍ଞାନିକ ଶସ୍ୟ ଗୋଦାମ", desc: "ଶସ୍ୟ ସୁରକ୍ଷା ପାଇଁ ଆଦ୍ରତା-ରୋଧୀ ସାଇଣ୍ଟିଫିକ୍ ଗୋଦାମ।" }
    ],
    stats: [
      { value: "310+", label: "Civil Infrastructure Works" },
      { value: "2.4M Sq.Ft", label: "Warehouse Capacity Planned" }
    ],
    stats_or: [
      { value: "୩୧୦+", label: "ନିର୍ମିତ ସିଭିଲ୍ ପ୍ରକଳ୍ପ" },
      { value: "୨୪ ଲକ୍ଷ ବର୍ଗଫୁଟ", label: "ଗୋଦାମ କ୍ଷମତା" }
    ],
    technologies: ["GIS Hydrological Topography", "RCC Structural Frame Blueprints", "Soil Drainage Pipe Grids"],
    technologies_or: ["GIS ଜଳବିଜ୍ଞାନ ଟୋପୋଗ୍ରାଫି", "RCC ସ୍ଥାପତ୍ୟ ବ୍ଲୁପ୍ରିଣ୍ଟ", "ମାଟି ନିଷ୍କାସନ ନେଟୱାର୍କ"],
    challenges: [{ title: "Flash Flooding Erosion", desc: "Monsoon floods damaging rural embankment walls." }],
    challenges_or: [{ title: "ବନ୍ୟା କ୍ଷୟ", desc: "ପ୍ରବଳ ବର୍ଷା ଓ ବନ୍ୟାରେ ନଦୀବନ୍ଧ ନଷ୍ଟ ହେବା।" }],
    odconsApproach: ["Gabion wire mesh reinforcement with vegetative root binding"],
    odconsApproach_or: ["ଗାବିୟନ୍ ୱାୟାର୍ ମେଶ୍ ସହ ଉଦ୍ଭିଦ ଚେର ସୁରକ୍ଷା"]
  },
  {
    id: "msme-projects",
    slug: "msme-projects",
    name: "ALLIED MSME PROJECTS",
    name_or: "ଆନୁଷଙ୍ଗିକ MSME ପ୍ରକଳ୍ପ",
    tagline: "Micro & small industrial enterprise incubators for rural entrepreneurs.",
    tagline_or: "ଗ୍ରାମୀଣ ଉଦ୍ୟୋଗୀମାନଙ୍କ ପାଇଁ MSME, କ୍ଷୁଦ୍ର ଶିଳ୍ପ, PMEGP ଓ PM-FME ପ୍ରକଳ୍ପ।",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1600",
    iconName: "Factory",
    accentColor: "#246C41",
    badgeBg: "rgba(36, 108, 65, 0.15)",
    shortDesc: "PMEGP, PM-FME, and MKUY micro-industrial projects including bio-pellet units, bio-pesticide labs, custom hiring centers, and feed mills.",
    shortDesc_or: "PMEGP, PM-FME, MKUY ଅଧୀନରେ ବାୟୋ-ପେଲେଟ୍, ଜୈବ କୀଟନାଶକ, କୃଷି ଯନ୍ତ୍ରପାତି କେନ୍ଦ୍ର ଓ ଦୁଗ୍ଧ/ମାଛ ଦାଣା କାରଖାନା।",
    longDesc: "Rural industrialization creates high-margin non-farm employment. ODCONS turns rural entrepreneurial visions into bankable DPRs and turnkey operational MSMEs.",
    longDesc_or: "ଗ୍ରାମୀଣ ଶିଳ୍ପାୟନ ନୂତନ ରୋଜଗାର ସୃଷ୍ଟି କରେ। ODCONS ଗ୍ରାମୀଣ ଉଦ୍ୟୋଗୀମାନଙ୍କ ପାଇଁ ବ୍ୟାଙ୍କଯୋଗ୍ୟ DPR ଓ MSME ପ୍ରକଳ୍ପ ଗଠନ କରେ।",
    keyPillars: [
      { title: "Custom Hiring Centers (CHC)", desc: "High-value farm machinery pooling centers for smallholder access." },
      { title: "Feed & Bio-Pellet Mills", desc: "Floating fish feed, cattle feed, and biomass pellet manufacturing units." }
    ],
    keyPillars_or: [
      { title: "କୃଷି ଯନ୍ତ୍ରପାତି କେନ୍ଦ୍ର (CHC)", desc: "ଚାଷୀମାନଙ୍କ ପାଇଁ ଆଧୁନିକ ଟ୍ରାକ୍ଟର ଓ ହାର୍ଭେଷ୍ଟର ସୁବିଧା।" },
      { title: "ମାଛ/ଦୁଗ୍ଧ ଦାଣା କାରଖାନା", desc: "ଉଚ୍ଚ ଗୁଣବତ୍ତା ମାଛ ଦାଣା, ଗୋ-ଖାଦ୍ୟ ଓ ବାୟୋ-ପେଲେଟ୍ ଉତ୍ପାଦନ।" }
    ],
    stats: [
      { value: "240+", label: "MSME Units Financed" },
      { value: "100%", label: "Bank DPR Approval Rate" }
    ],
    stats_or: [
      { value: "୨୪୦+", label: "ମଞ୍ଜୁରୀପ୍ରାପ୍ତ MSME ୟୁନିଟ୍" },
      { value: "୧୦୦%", label: "ବ୍ୟାଙ୍କ DPR ମଞ୍ଜୁରୀ ହାର" }
    ],
    technologies: ["Extruder Pellet Feed Mills", "Biomass Compaction Presses", "CNC Machinery Fabrication"],
    technologies_or: ["ଏକ୍ସଟ୍ରୁଡର ଦାଣା ମିଲ୍", "ବାୟୋମାସ ପେଲେଟ୍ ପ୍ରେସ୍", "CNC ମେସିନାରୀ ଫାବ୍ରିକେସନ୍"],
    challenges: [{ title: "Bank Credit Rejection", desc: "Inadequate technical justification in promoter project proposals." }],
    challenges_or: [{ title: "ବ୍ୟାଙ୍କ ଋଣ ପ୍ରତ୍ୟାଖ୍ୟାନ", desc: "ଅନୁପଯୁକ୍ତ ବୈଷୟିକ ରିପୋର୍ଟ ଯୋଗୁଁ ଋଣ ନମିଳିବା।" }],
    odconsApproach: ["Bankable DSCR modeling with scheme subsidy structuring"],
    odconsApproach_or: ["ସରକାରୀ ସବସିଡି ସହ ସଠିକ୍ ବ୍ୟାଙ୍କଯୋଗ୍ୟ DSCR ମଡେଲିଂ"]
  }
];
