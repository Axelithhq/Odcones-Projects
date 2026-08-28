export interface ServiceInfo {
  id: string;
  slug: string;
  title: string;
  title_or?: string;
  category: string;
  category_or?: string;
  shortDesc: string;
  shortDesc_or?: string;
  fullDesc: string;
  fullDesc_or?: string;
  iconName: string;
  deliverables: string[];
  deliverables_or?: string[];
  image: string;
}

export const SERVICES: ServiceInfo[] = [
  {
    id: "project-planning",
    slug: "project-planning",
    title: "1. Comprehensive Project Planning & DPR Preparation",
    title_or: "୧। ବ୍ୟାପକ ପ୍ରକଳ୍ପ ନିୟୋଜନ ଓ DPR ପ୍ରସ୍ତୁତି",
    category: "Strategic Consultancy",
    category_or: "କୌଶଳଗତ ପରାମର୍ଶ",
    shortDesc: "Feasibility studies, Detailed Project Reports (DPR), financial modeling, and environmental impact assessments for government and corporate agri-projects.",
    shortDesc_or: "ସରକାରୀ ଏବଂ କର୍ପୋରେଟ୍ କୃଷି ପ୍ରକଳ୍ପ ପାଇଁ ସମ୍ଭାବ୍ୟତା ଅଧ୍ୟୟନ, ବିସ୍ତୃତ ପ୍ରକଳ୍ପ ରିପୋର୍ଟ (DPR), ଆର୍ଥିକ ମଡେଲିଂ ଓ ପରିବେଶ ପ୍ରଭାବ ମୂଲ୍ୟାଙ୍କନ।",
    fullDesc: "ODCONS provides rigorous macro and micro-level project planning for mega agricultural, fisheries, and rural infrastructure projects. Our team prepares DPRs aligned with NABARD, World Bank, and Ministry guidelines.",
    fullDesc_or: "ODCONS କୃଷି, ମତ୍ସ୍ୟଚାଷ ଓ ଗ୍ରାମୀଣ ଭିତ୍ତିଭୂମି ପ୍ରକଳ୍ପ ପାଇଁ କଠୋର ମାକ୍ରୋ ଓ ମାଇକ୍ରୋ ସ୍ତରୀୟ ପ୍ରକଳ୍ପ ନିୟୋଜନ କରେ। ଆମ ଟିମ୍ NABARD, ବିଶ୍ୱ ବ୍ୟାଙ୍କ ଓ ମନ୍ତ୍ରଣାଳୟର ନିର୍ଦ୍ଦେଶାବଳୀ ସହିତ ସମନ୍ୱିତ DPR ପ୍ରସ୍ତୁତ କରେ।",
    iconName: "FileText",
    deliverables: [
      "GIS-based Land & Water Feasibility Reports",
      "Financial IRR & Benefit-Cost Analysis Models",
      "Environmental & Social Impact Assessments (ESIA)",
      "Detailed Engineering Drawings & DPRs"
    ],
    deliverables_or: [
      "GIS ଭିତ୍ତିକ ଭୂମି ଓ ଜଳ ସମ୍ଭାବ୍ୟତା ରିପୋର୍ଟ",
      "ଆର୍ଥିକ IRR ଓ ଲାଭ-ବ୍ୟୟ ବିଶ୍ଳେଷଣ ମଡେଲ",
      "ପରିବେଶ ଓ ସାମାଜିକ ପ୍ରଭାବ ମୂଲ୍ୟାଙ୍କନ (ESIA)",
      "ବିସ୍ତୃତ ଯାନ୍ତ୍ରିକ ଚିତ୍ର ଓ DPR"
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "agricultural-development",
    slug: "agricultural-development",
    title: "2. Agricultural Ecosystem Development",
    title_or: "୨। କୃଷି ଇକୋସିଷ୍ଟମ୍ ଉନ୍ନୟନ",
    category: "Field Implementation",
    category_or: "କ୍ଷେତ୍ର କାର୍ଯ୍ୟକାରିତା",
    shortDesc: "End-to-end execution of climate-smart farming models, seed production hubs, and high-tech agricultural clusters.",
    shortDesc_or: "ଜଳବାୟୁ-ସ୍ମାର୍ଟ ଚାଷ ମଡେଲ, ବୀଜ ଉତ୍ପାଦନ କେନ୍ଦ୍ର ଓ ହାଇ-ଟେକ୍ କୃଷି କ୍ଲଷ୍ଟରର ସମ୍ପୂର୍ଣ୍ଣ କାର୍ଯ୍ୟକାରିତା।",
    fullDesc: "We design and execute integrated farming systems that transform low-yield agricultural zones into high-output productive hubs through superior seed varieties, drip irrigation networks, and mechanization.",
    fullDesc_or: "ଆମେ ସମନ୍ୱିତ ଚାଷ ବ୍ୟବସ୍ଥା ଡିଜାଇନ୍ ଓ କାର୍ଯ୍ୟକାରୀ କରୁ, ଯାହା କମ୍ ଉତ୍ପାଦନଶୀଳ ଅଞ୍ଚଳକୁ ଉନ୍ନତ ବୀଜ, ଡ୍ରିପ୍ ସେଚନ ନେଟୱାର୍କ ଓ ଯାନ୍ତ୍ରୀକରଣ ମାଧ୍ୟମରେ ଉଚ୍ଚ ଉତ୍ପାଦନ କେନ୍ଦ୍ରରେ ପରିଣତ କରେ।",
    iconName: "Sprout",
    deliverables: [
      "Custom Hiring Mechanization Centers",
      "Seed Multiplication & Processing Units",
      "Drip & Micro-Sprinkler Irrigation Grids",
      "Climate-Resilient Crop Rotations"
    ],
    deliverables_or: [
      "କଷ୍ଟମ୍ ହାୟାରିଂ ଯାନ୍ତ୍ରୀକରଣ କେନ୍ଦ୍ର",
      "ବୀଜ ବୃଦ୍ଧି ଓ ସଂସ୍କରଣ ୟୁନିଟ୍",
      "ଡ୍ରିପ୍ ଓ ମାଇକ୍ରୋ-ସ୍ପ୍ରିଙ୍କଲର୍ ସେଚନ ଗ୍ରିଡ୍",
      "ଜଳବାୟୁ ସହନଶୀଳ ଶସ୍ୟ ଚକ୍ର"
    ],
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "fisheries-development",
    slug: "fisheries-development",
    title: "3. Fisheries Ecosystem & Landing Infrastructure",
    title_or: "୩। ମତ୍ସ୍ୟ ଇକୋସିଷ୍ଟମ୍ ଓ ଲ୍ୟାଣ୍ଡିଂ ଭିତ୍ତିଭୂମି",
    category: "Blue Economy",
    category_or: "ବ୍ଲୁ ଇକୋନୋମି",
    shortDesc: "Reservoir cage culture installations, modern fish landing centers, auction halls, and riverine ecosystem enhancement.",
    shortDesc_or: "ଜଳାଶୟ କେଜ୍ ସଂସ୍ଥାପନ, ଆଧୁନିକ ମାଛ ଉତାରିବା କେନ୍ଦ୍ର, ନିଲାମ ହଲ୍ ଓ ନଦୀ ଇକୋସିଷ୍ଟମ୍ ଉନ୍ନୟନ।",
    fullDesc: "ODCONS modernized capture fisheries through floating cage setups in major water reservoirs and state-of-the-art landing docks equipped with solar ice plants and insulated transport vehicles.",
    fullDesc_or: "ODCONS ପ୍ରମୁଖ ଜଳାଶୟଗୁଡ଼ିକରେ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ଏବଂ ସୌର ବରଫ କାରଖାନା ଓ ଇନସୁଲେଟେଡ୍ ପରିବହନ ଯାନ ସହିତ ଅତ୍ୟାଧୁନିକ ଲ୍ୟାଣ୍ଡିଂ ଡକ୍ ନିର୍ମାଣ କରି ମତ୍ସ୍ୟଜୀବୀମାନଙ୍କ ଜୀବିକାକୁ ଆଧୁନିକୀକରଣ କଲା।",
    iconName: "Fish",
    deliverables: [
      "High-Density Reservoir Floating Cages",
      "Solar Ice Plant & Processing Centers",
      "Riverine & Wetland Stocking Programs",
      "Fishermen Cooperative Capacity Building"
    ],
    deliverables_or: [
      "ଉଚ୍ଚ-ଘନତ୍ୱ ଜଳାଶୟ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍",
      "ସୌର ବରଫ କାରଖାନା ଓ ସଂସ୍କରଣ କେନ୍ଦ୍ର",
      "ନଦୀ ଓ ଜଳାଶୟ ମାଛ ପୁନର୍ଭରଣ କାର୍ଯ୍ୟକ୍ରମ",
      "ମତ୍ସ୍ୟଜୀବୀ ସମବାୟ ସମିତି ସମର୍ଥା ନିର୍ମାଣ"
    ],
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "aquaculture-development",
    slug: "aquaculture-development",
    title: "4. Commercial Aquaculture & Biofloc Engineering",
    title_or: "୪। ବାଣିଜ୍ୟିକ ଜଳଚର ପାଳନ ଓ ବାୟୋଫ୍ଲୋକ୍ ଯାନ୍ତ୍ରିକ ଇଞ୍ଜିନିୟରିଂ",
    category: "Blue Economy",
    category_or: "ବ୍ଲୁ ଇକୋନୋମି",
    shortDesc: "Turn-key fish & shrimp farm development, Biofloc systems, RAS units, automated aerators, and high-health seed hatcheries.",
    shortDesc_or: "ଟର୍ନ-କି ମାଛ ଓ ଚିଙ୍ଗୁଡ଼ି ଚାଷ, ବାୟୋଫ୍ଲୋକ୍ ବ୍ୟବସ୍ଥା, RAS ୟୁନିଟ୍, ସ୍ୱୟଂଚାଳିତ ଏରେଟର ଓ ଉଚ୍ଚ-ସ୍ୱାସ୍ଥ୍ୟ ବୀଜ ହ୍ୟାଚେରୀ।",
    fullDesc: "We build modern aquaculture setups engineered for maximum feed conversion efficiency and zero mortality. Includes Biofloc circular tanks, automated water quality monitoring, and aeration systems.",
    fullDesc_or: "ଆମେ ଅତ୍ୟଧିକ ଖାଦ୍ୟ ରୂପାନ୍ତର କ୍ଷମତା ଓ ଶୂନ୍ୟ ମୃତ୍ୟୁହାର ପାଇଁ ଆଧୁନିକ ଜଳଚର ପାଳନ ବ୍ୟବସ୍ଥା ନିର୍ମାଣ କରୁ। ବାୟୋଫ୍ଲୋକ୍ ବୃତ୍ତାକାର ଟ୍ୟାଙ୍କ, ସ୍ୱୟଂଚାଳିତ ଜଳ ଗୁଣବତ୍ତା ନିରୀକ୍ଷଣ ଓ ଏରେସନ୍ ବ୍ୟବସ୍ଥା ଅନ୍ତର୍ଭୁକ୍ତ।",
    iconName: "Waves",
    deliverables: [
      "Turn-key Commercial Fish Farm Construction",
      "Biofloc & RAS High-Density Setup",
      "IoT Automated Aeration & Telemetry",
      "SPF Fish Seed Hatchery Construction"
    ],
    deliverables_or: [
      "ଟର୍ନ-କି ବାଣିଜ୍ୟିକ ମାଛ ଚାଷ ନିର୍ମାଣ",
      "ବାୟୋଫ୍ଲୋକ୍ ଓ RAS ଉଚ୍ଚ-ଘନତ୍ୱ ସେଟଅପ୍",
      "IoT ସ୍ୱୟଂଚାଳିତ ଏରେସନ୍ ଓ ଟେଲିମେଟ୍ରି",
      "SPF ମାଛ ବୀଜ ହ୍ୟାଚେରୀ ନିର୍ମାଣ"
    ],
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "horticulture-projects",
    slug: "horticulture-projects",
    title: "5. High-Value Horticulture & Protected Cultivation",
    title_or: "୫। ଉଚ୍ଚ ମୂଲ୍ୟଯୁକ୍ତ ଉଦ୍ୟାନ କୃଷି ଓ ସଂରକ୍ଷିତ ଚାଷ",
    category: "High-Value Agriculture",
    category_or: "ଉଚ୍ଚ ମୂଲ୍ୟଯୁକ୍ତ କୃଷି",
    shortDesc: "Naturally ventilated polyhouses, hi-tech shade nets, hydroponics, and high-density fruit orchards.",
    shortDesc_or: "ପ୍ରାକୃତିକ ଭେଣ୍ଟିଲେସନ୍ ପଲିହାଉସ, ହାଇ-ଟେକ୍ ସେଡ ନେଟ୍, ହାଇଡ୍ରୋପୋନିକ୍ସ ଓ ଉଚ୍ଚ-ଘନତ୍ୱ ଫଳ ବଗିଚା।",
    fullDesc: "Expanding farmer profitability through high-density polyhouse structures for capsicum, cucumber, floriculture, and exotic fruits with precise micro-climate management.",
    fullDesc_or: "କ୍ୟାପ୍ସିକମ୍, କାକୁଡ଼ି, ପୁଷ୍ପ ଚାଷ ଓ ବିଦେଶୀ ଫଳ ପାଇଁ ଉଚ୍ଚ-ଘନତ୍ୱ ପଲିହାଉସ ସଂରଚନା ଓ ସଠିକ୍ ମାଇକ୍ରୋ-କ୍ଲାଇମେଟ୍ ପରିଚାଳନା ମାଧ୍ୟମରେ ଚାଷୀଙ୍କ ଲାଭ ବୃଦ୍ଧି।",
    iconName: "Flower2",
    deliverables: [
      "Polyhouse & Net-house Construction",
      "Automated Drip & Fertigation Systems",
      "Hi-tech Tissue Culture Nurseries",
      "High-Density Fruit Plantation Setup"
    ],
    deliverables_or: [
      "ପଲିହାଉସ୍ ଓ ନେଟ-ହାଉସ୍ ନିର୍ମାଣ",
      "ସ୍ୱୟଂଚାଳିତ ଡ୍ରିପ୍ ଓ ଫର୍ଟିଗେସନ୍ ବ୍ୟବସ୍ଥା",
      "ହାଇ-ଟେକ୍ ଟିସୁ କଲ୍ଚର ନର୍ସରୀ",
      "ଉଚ୍ଚ-ଘନତ୍ୱ ଫଳ ଚାଷ ସେଟଅପ୍"
    ],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "rural-infrastructure",
    slug: "rural-infrastructure",
    title: "6. Agri-Logistics & Rural Infrastructure Construction",
    title_or: "୬। କୃଷି-ଲଜିଷ୍ଟିକ୍ସ ଓ ଗ୍ରାମୀଣ ଭିତ୍ତିଭୂମି ନିର୍ମାଣ",
    category: "Infrastructure",
    category_or: "ଭିତ୍ତିଭୂମି",
    shortDesc: "Solar cold storages, grain silos, rural connectivity, packhouses, and community aggregation sheds.",
    shortDesc_or: "ସୌର ଶକ୍ତି ଚାଳିତ କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍, ଶସ୍ୟ ସାଇଲୋ, ଗ୍ରାମୀଣ ସଂଯୋଗ, ପ୍ୟାକ୍ ହାଉସ୍ ଓ ସାମୂହିକ ସଂଗ୍ରହ ଶେଡ୍।",
    fullDesc: "Connecting rural producers directly to high-margin supply chains by constructing durable post-harvest infrastructure, solar packhouses, and rural storage facilities.",
    fullDesc_or: "ସ୍ଥାୟୀ ଅମଳ-ପରବର୍ତ୍ତୀ ଭିତ୍ତିଭୂମି, ସୌର ପ୍ୟାକ୍ ହାଉସ୍ ଓ ଗ୍ରାମୀଣ ଷ୍ଟୋରେଜ୍ ସୁବିଧା ନିର୍ମାଣ କରି ଗ୍ରାମୀଣ ଉତ୍ପାଦକଙ୍କୁ ସିଧାସଳଖ ଉଚ୍ଚ-ଲାଭ ସରବରାହ ଶୃଙ୍ଖଳା ସହ ଯୋଡ଼ିବା।",
    iconName: "Building2",
    deliverables: [
      "Off-Grid Solar Cold Storage Units",
      "Grain Storage Silos & Processing Warehouses",
      "Rural Agri Market Sheds (Haat Infrastructure)",
      "Farm-to-Market Access Roads"
    ],
    deliverables_or: [
      "ଅଫ୍-ଗ୍ରିଡ୍ ସୌର କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍ ୟୁନିଟ୍",
      "ଶସ୍ୟ ଭଣ୍ଡାର ସାଇଲୋ ଓ ସଂସ୍କରଣ ୱେରହାଉସ୍",
      "ଗ୍ରାମୀଣ କୃଷି ବଜାର ଶେଡ୍ (ହାଟ ଭିତ୍ତିଭୂମି)",
      "କ୍ଷେତରୁ ବଜାର ପର୍ଯ୍ୟନ୍ତ ପ୍ରବେଶ ପଥ"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "water-resource-management",
    slug: "water-resource-management",
    title: "7. Water Resource & Watershed Engineering",
    title_or: "୭। ଜଳ ସମ୍ପଦ ଓ ଜଳଛାୟା ଇଞ୍ଜିନିୟରିଂ",
    category: "Sustainability",
    category_or: "ସ୍ଥାୟୀତ୍ୱ",
    shortDesc: "Check dam construction, contour bunding, farm ponds, groundwater injection, and sub-surface agricultural drainage.",
    shortDesc_or: "ଚେକ୍ ଡ୍ୟାମ୍ ନିର୍ମାଣ, ସୋପାନ ସୀମା ବନ୍ଧ, ଫାର୍ମ ପୋଣ୍ଡ, ଭୂଜଳ ପୁନର୍ଭରଣ ଓ ଭୂତଳ କୃଷି ନିଷ୍କାସନ।",
    fullDesc: "Restoring water-stressed agricultural lands through community check dams, percolation tanks, rainwater harvesting, and subsurface soil salt drainage.",
    fullDesc_or: "ସାମୁହିକ ଚେକ୍ ଡ୍ୟାମ୍, ପର୍କୋଲେସନ୍ ଟ୍ୟାଙ୍କ, ବର୍ଷା ଜଳ ସଂଗ୍ରହ ଓ ଭୂତଳ ମାଟି ଲୁଣ ନିଷ୍କାସନ ମାଧ୍ୟମରେ ଜଳ ସଙ୍କଟଗ୍ରସ୍ତ କୃଷି ଭୂମିର ପୁନରୁଦ୍ଧାର।",
    iconName: "Droplets",
    deliverables: [
      "Check Dam & Masonry Weir Construction",
      "Community Farm Pond Excavation",
      "Sub-surface Tile Drainage Installation",
      "Aquifer Recharge Shaft Engineering"
    ],
    deliverables_or: [
      "ଚେକ୍ ଡ୍ୟାମ୍ ଓ ପଥର ବନ୍ଧ ନିର୍ମାଣ",
      "ସାମୁହିକ ଫାର୍ମ ପୋଣ୍ଡ ଖନନ",
      "ଭୂତଳ ଟାଇଲ୍ ନିଷ୍କାସନ ସଂସ୍ଥାପନ",
      "ଜଳସ୍ତର ପୁନର୍ଭରଣ ଶାଫ୍ଟ ଇଞ୍ଜିନିୟରିଂ"
    ],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "technical-consultancy",
    slug: "technical-consultancy",
    title: "8. Institutional & Government Advisory",
    title_or: "୮। ଅନୁଷ୍ଠାନିକ ଓ ସରକାରୀ ପରାମର୍ଶ",
    category: "Strategic Consultancy",
    category_or: "କୌଶଳଗତ ପରାମର୍ଶ",
    shortDesc: "Policy framing, sector studies, scheme implementation support, and institutional capacity building.",
    shortDesc_or: "ନୀତି ପ୍ରସ୍ତୁତି, କ୍ଷେତ୍ର ଅଧ୍ୟୟନ, ଯୋଜନା କାର୍ଯ୍ୟକାରିତା ସହାୟତା ଓ ଅନୁଷ୍ଠାନିକ ସାମର୍ଥ୍ୟ ନିର୍ମାଣ।",
    fullDesc: "Providing domain expertise to State Government departments, NABARD, CSR foundations, and multi-lateral agencies in designing and executing large-scale rural interventions.",
    fullDesc_or: "ରାଜ୍ୟ ସରକାରୀ ବିଭାଗ, NABARD, CSR ଫାଉଣ୍ଡେସନ୍ ଓ ବହୁପକ୍ଷୀୟ ଏଜେନ୍ସିମାନଙ୍କୁ ବୃହତ ଗ୍ରାମୀଣ ପ୍ରକଳ୍ପ ଡିଜାଇନ୍ ଓ କାର୍ଯ୍ୟକାରିତାରେ କ୍ଷେତ୍ରଗତ ବିଶେଷଜ୍ଞତା ପ୍ରଦାନ।",
    iconName: "Briefcase",
    deliverables: [
      "Government Scheme Implementation Architecture",
      "CSR Rural Development Frameworks",
      "Institutional Policy & DPR Audits",
      "State-level Agri-Masterplanning"
    ],
    deliverables_or: [
      "ସରକାରୀ ଯୋଜନା କାର୍ଯ୍ୟକାରିତା ଆର୍କିଟେକ୍ଚର",
      "CSR ଗ୍ରାମୀଣ ଉନ୍ନୟନ ଢାଞ୍ଚା",
      "ଅନୁଷ୍ଠାନିକ ନୀତି ଓ DPR ଅଡିଟ୍",
      "ରାଜ୍ୟ ସ୍ତରୀୟ କୃଷି ମାଷ୍ଟରପ୍ଲାନିଂ"
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "project-implementation",
    slug: "project-implementation",
    title: "9. Turnkey Field Execution & Contracting",
    title_or: "୯। ଟର୍ନକି କ୍ଷେତ୍ର କାର୍ଯ୍ୟକାରିତା ଓ ଚୁକ୍ତି",
    category: "Field Implementation",
    category_or: "କ୍ଷେତ୍ର କାର୍ଯ୍ୟକାରିତା",
    shortDesc: "On-ground EPC (Engineering, Procurement, Construction) delivery of mega agricultural and aquaculture projects.",
    shortDesc_or: "ମେଗା କୃଷି ଓ ଜଳଚର ପାଳନ ପ୍ରକଳ୍ପର କ୍ଷେତ୍ର ସ୍ତରୀୟ EPC (ଇଞ୍ଜିନିୟରିଂ, ପ୍ରୋକ୍ୟୁରମେଣ୍ଟ, କନଷ୍ଟ୍ରକ୍ସନ) କାର୍ଯ୍ୟକାରିତା।",
    fullDesc: "We take 100% execution ownership—from earthmoving, civil construction, equipment installation, seed stocking, and commissioning.",
    fullDesc_or: "ଆମେ ମାଟି କାମ, ସିଭିଲ୍ ନିର୍ମାଣ, ଯନ୍ତ୍ରପାତି ସଂସ୍ଥାପନ, ବୀଜ ଭରଣ ଓ କମିସନିଂ ପର୍ଯ୍ୟନ୍ତ ୧୦୦% ନିର୍ବାହକ ଦାୟିତ୍ୱ ନେଉ।",
    iconName: "Hammer",
    deliverables: [
      "EPC Contracting for Mega Agri Parks",
      "Civil & Hydraulic Structure Construction",
      "Equipment Sourcing & Commissioning",
      "Trial Run & Operational Handover"
    ],
    deliverables_or: [
      "ମେଗା କୃଷି ପାର୍କ ପାଇଁ EPC ଚୁକ୍ତି",
      "ସିଭିଲ୍ ଓ ହାଇଡ୍ରୋଲିକ୍ ସଂରଚନା ନିର୍ମାଣ",
      "ଯନ୍ତ୍ରପାତି ଉତ୍ସ ଓ କମିସନିଂ",
      "ପରୀକ୍ଷାମୂଳକ ଚାଳନା ଓ ହସ୍ତାନ୍ତର"
    ],
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "monitoring-evaluation",
    slug: "monitoring-evaluation",
    title: "10. Third-Party Monitoring & Impact Evaluation (M&E)",
    title_or: "୧୦। ତୃତୀୟ ପକ୍ଷ ନିରୀକ୍ଷଣ ଓ ପ୍ରଭାବ ମୂଲ୍ୟାଙ୍କନ (M&E)",
    category: "Analytics & Governance",
    category_or: "ଆନାଲିଟିକ୍ସ ଓ ଶାସନ",
    shortDesc: "Real-time GIS monitoring, field audits, baseline vs endline impact assessments, and data analytics.",
    shortDesc_or: "ରିୟଲ-ଟାଇମ୍ GIS ନିରୀକ୍ଷଣ, କ୍ଷେତ୍ର ଅଡିଟ୍, ବେସଲାଇନ୍-ଏଣ୍ଡଲାଇନ୍ ପ୍ରଭାବ ମୂଲ୍ୟାଙ୍କନ ଓ ଡାଟା ଆନାଲିଟିକ୍ସ।",
    fullDesc: "Ensuring accountability and transparency through independent third-party monitoring, remote sensing verification, and impact reporting for donor funded projects.",
    fullDesc_or: "ଦାତୃବାଦୀ ପ୍ରକଳ୍ପ ପାଇଁ ସ୍ୱାଧୀନ ତୃତୀୟ ପକ୍ଷ ନିରୀକ୍ଷଣ, ରିମୋଟ ସେନ୍ସିଂ ଯାଞ୍ଚ ଓ ପ୍ରଭାବ ରିପୋର୍ଟିଂ ମାଧ୍ୟମରେ ଜବାବଦେହୀତା ଓ ସ୍ୱଚ୍ଛତା ନିଶ୍ଚିତ କରିବା।",
    iconName: "BarChart3",
    deliverables: [
      "GIS & Satellite Imagery Change Detection",
      "Digital Field Enumeration & Survey Apps",
      "Baseline, Midterm & Impact Reports",
      "Real-time Executive Dashboards"
    ],
    deliverables_or: [
      "GIS ଓ ସାଟେଲାଇଟ୍ ଚିତ୍ର ପରିବର୍ତ୍ତନ ଚିହ୍ନଟ",
      "ଡିଜିଟାଲ୍ କ୍ଷେତ୍ର ସର୍ବେକ୍ଷଣ ଓ ସର୍ଭେ ଆପ୍",
      "ବେସଲାଇନ୍, ମଧ୍ୟବର୍ତ୍ତୀ ଓ ପ୍ରଭାବ ରିପୋର୍ଟ",
      "ରିୟଲ-ଟାଇମ୍ ନିର୍ବାହୀ ଡ୍ୟାସବୋର୍ଡ"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "capacity-building",
    slug: "capacity-building",
    title: "11. Community Training & FPO Capacity Building",
    title_or: "୧୧। ସମୁଦାୟ ପ୍ରଶିକ୍ଷଣ ଓ FPO ସାମର୍ଥ୍ୟ ନିର୍ମାଣ",
    category: "Community Development",
    category_or: "ସମୁଦାୟ ଉନ୍ନୟନ",
    shortDesc: "Farmer field schools, Women Self-Help Group (SHG) training, FPO business plan creation, and managerial coaching.",
    shortDesc_or: "ଚାଷୀ କ୍ଷେତ୍ର ବିଦ୍ୟାଳୟ, ମହିଳା ସ୍ୱୟଂ ସହାୟକ ଗୋଷ୍ଠୀ (SHG) ପ୍ରଶିକ୍ଷଣ, FPO ବ୍ୟବସାୟ ଯୋଜନା ପ୍ରସ୍ତୁତି ଓ ପରିଚାଳନା ପ୍ରଶିକ୍ଷଣ।",
    fullDesc: "Building community resilience by training farmers in modern package of practices, financial literacy, FPO governance, and value addition.",
    fullDesc_or: "ଆଧୁନିକ ଚାଷ ପଦ୍ଧତି, ଆର୍ଥିକ ସାକ୍ଷରତା, FPO ଶାସନ ଓ ମୂଲ୍ୟଯୋଗ ବିଷୟରେ ଚାଷୀଙ୍କୁ ପ୍ରଶିକ୍ଷଣ ଦେଇ ସମୁଦାୟ ସହନଶୀଳତା ଗଠନ।",
    iconName: "Users",
    deliverables: [
      "Hands-on Farmer Field Schools",
      "FPO Governance & Accounting Training",
      "Women SHG Micro-Enterprise Workshops",
      "Exposure Visits & Demonstration Plots"
    ],
    deliverables_or: [
      "ହାତେକାମ ଚାଷୀ କ୍ଷେତ୍ର ବିଦ୍ୟାଳୟ",
      "FPO ଶାସନ ଓ ହିସାବରଖା ପ୍ରଶିକ୍ଷଣ",
      "ମହିଳା SHG କ୍ଷୁଦ୍ର ଉଦ୍ୟୋଗ କର୍ମଶାଳା",
      "ପ୍ରଦର୍ଶନ ଭ୍ରମଣ ଓ ପ୍ରାତ୍ୟକ୍ଷ ପ୍ଲଟ୍"
    ],
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "technology-integration",
    slug: "technology-integration",
    title: "12. Agritech, IoT & FieldOS Integration",
    title_or: "୧୨। ଆଗ୍ରିଟେକ୍, IoT ଓ ଫିଲ୍ଡଓଏସ୍ ସମନ୍ୱୟ",
    category: "Analytics & Governance",
    category_or: "ଆନାଲିଟିକ୍ସ ଓ ଶାସନ",
    shortDesc: "Custom deployment of IoT soil sensors, automated water quality units, GIS mapping, and FieldOS digital management.",
    shortDesc_or: "IoT ମୃତ୍ତିକା ସେନ୍ସର, ସ୍ୱୟଂଚାଳିତ ଜଳ ଗୁଣବତ୍ତା ୟୁନିଟ୍, GIS ମ୍ୟାପିଂ ଓ ଫିଲ୍ଡଓଏସ୍ ଡିଜିଟାଲ ପରିଚାଳନାର ବିଶେଷ କାର୍ଯ୍ୟନିର୍ବାହ।",
    fullDesc: "Injecting cutting-edge technology into rural management—from real-time pond water oxygen telemetries to field officer GPS tracking and crop disease diagnosis.",
    fullDesc_or: "ପୋଖରୀ ଜଳ ଅମ୍ଳଜାନ ଟେଲିମେଟ୍ରିରୁ ଆରମ୍ଭ କରି କ୍ଷେତ୍ର କର୍ମଚାରୀ GPS ଟ୍ରାକିଂ ଓ ଶସ୍ୟ ରୋଗ ନିର୍ଣ୍ଣୟ ପର୍ଯ୍ୟନ୍ତ ଗ୍ରାମୀଣ ପରିଚାଳନାରେ ଅତ୍ୟାଧୁନିକ ଟେକ୍ନୋଲୋଜି ପ୍ରୟୋଗ।",
    iconName: "Cpu",
    deliverables: [
      "ODCONS FieldOS Platform Deployment",
      "IoT Sensor & Gateway Installation",
      "Custom Mobile Survey Apps",
      "Automated SMS/WhatsApp Farmer Advisory"
    ],
    deliverables_or: [
      "ODCONS ଫିଲ୍ଡଓଏସ୍ ପ୍ଲାଟଫର୍ମ କାର୍ଯ୍ୟନିର୍ବାହ",
      "IoT ସେନ୍ସର ଓ ଗେଟ୍ୱେ ସଂସ୍ଥାପନ",
      "ବିଶେଷ ମୋବାଇଲ୍ ସର୍ଭେ ଆପ୍",
      "ସ୍ୱୟଂଚାଳିତ SMS/WhatsApp ଚାଷୀ ପରାମର୍ଶ"
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200"
  }
];
