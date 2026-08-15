import { ProjectItem } from "@/lib/supabase";

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "Hirakud Reservoir Floating Cage Aquaculture Project",
    title_or: "ହିରାକୁଦ ଜଳାଶୟ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ମତ୍ସ୍ୟଚାଷ ପ୍ରକଳ୍ପ",
    slug: "hirakud-reservoir-cage-aquaculture",
    sector: "Aquaculture",
    sector_or: "ଜଳଚର ପାଳନ",
    location: "Sambalpur, Odisha",
    year: "2024 - 2025",
    client: "Directorate of Fisheries & World Bank",
    status: "Completed",
    featured: true,
    description: "Installation of 240 heavy-duty HDPE floating cages in Hirakud reservoir, integrating automated feeding systems, solar security surveillance, and fingerling stocking for 350 local primary fishermens' cooperatives.",
    description_or: "ହିରାକୁଦ ଜଳାଶୟରେ ୨୪୦ଟି ହାଇ-ଡେନ୍ସିଟି HDPE ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ସଂସ୍ଥାପନ, ସ୍ୱୟଂଚାଳିତ ଖାଦ୍ୟ ବ୍ୟବସ୍ଥା, ସୌର ନିରାପତ୍ତା ସର୍ଭେଲାନ୍ସ ଏବଂ ୩୫୦ ସ୍ଥାନୀୟ ପ୍ରାଥମିକ ମତ୍ସ୍ୟଜୀବୀ ସମବାୟ ସମିତି ପାଇଁ ମାଛ ପୋଷା ଭରଣ ସମନ୍ୱିତ।",
    challenge: "Traditional fishing in the reservoir suffered from declining catch volumes, seasonal displacement, and lack of controlled fish growth conditions.",
    challenge_or: "ଜଳାଶୟରେ ପାରମ୍ପରିକ ମାଛ ଧରା ମାଛ ଅମଳ ହ୍ରାସ, ଋତୁଗତ ବିସ୍ଥାପନ ଏବଂ ନିୟନ୍ତ୍ରିତ ମାଛ ବୃଦ୍ଧି ସୁବିଧାର ଅଭାବ ଭୋଗୁଥିଲା।",
    solution: "ODCONES engineered circular HDPE floating cages resistant to wave surges, deployed solar-powered aeration systems, and trained cooperative members in high-density Pangasius and Tilapia cultivation.",
    solution_or: "ODCONES ତରଙ୍ଗ ପ୍ରତିରୋଧକ ବୃତ୍ତାକାର HDPE ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ଇଞ୍ଜିନିୟରିଂ କଲା, ସୌର ଚାଳିତ ଏରେସନ୍ ବ୍ୟବସ୍ଥା ସଂସ୍ଥାପନ କଲା ଏବଂ ସମବାୟ ସଦସ୍ୟମାନଙ୍କୁ ଉଚ୍ଚ-ଘନତ୍ୱ ପାଙ୍ଗାସିୟସ୍ ଓ ତିଲାପିଆ ଚାଷରେ ପ୍ରଶିକ୍ଷଣ ଦେଲା।",
    impact_metrics: {
      "Biomass Harvested": "1,400 MT / Year",
      "Cooperatives Impacted": "350 Fishermen",
      "Average Income Rise": "+280%"
    },
    impact_metrics_or: {
      "ବାର୍ଷିକ ବାୟୋମାସ ଅମଳ": "୧,୪୦୦ ମେଟ୍ରିକ୍ ଟନ୍",
      "ପ୍ରଭାବିତ ସମବାୟ ସମିତି": "୩୫୦ ଜଣ ମତ୍ସ୍ୟଜୀବୀ",
      "ହାରାହାରି ଆୟ ବୃଦ୍ଧି": "+୨୮୦%"
    },
    images: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-2",
    title: "Koraput Tribal Horticulture & Polyhouse Cluster",
    title_or: "କୋରାପୁଟ ଆଦିବାସୀ ଉଦ୍ୟାନ କୃଷି ଓ ପଲିହାଉସ କ୍ଲଷ୍ଟର",
    slug: "koraput-tribal-horticulture-cluster",
    sector: "Horticulture",
    sector_or: "ଉଦ୍ୟାନ କୃଷି",
    location: "Koraput, Odisha",
    year: "2023 - 2024",
    client: "Department of Agriculture & Farmers' Empowerment",
    status: "Completed",
    featured: true,
    description: "Construction of 120 climate-controlled naturally ventilated polyhouses and drip fertigation networks across high-altitude tribal villages for exotic vegetable and strawberry cultivation.",
    description_or: "ଉଚ୍ଚ ପର୍ବତୀୟ ଆଦିବାସୀ ଗାଁଗୁଡ଼ିକରେ ବିଦେଶୀ ପନିପରିବା ଓ ଷ୍ଟ୍ରବେରୀ ଚାଷ ପାଇଁ ୧୨୦ଟି ଜଳବାୟୁ ନିୟନ୍ତ୍ରିତ ପ୍ରାକୃତିକ ଭେଣ୍ଟିଲେସନ୍ ପଲିହାଉସ ଓ ଡ୍ରିପ୍ ଫର୍ଟିଗେସନ୍ ନେଟୱାର୍କ ନିର୍ମାଣ।",
    challenge: "High frost in winter and erratic downpours in monsoon ruined open-field vegetable crops, leading to seasonal migration of tribal youth.",
    challenge_or: "ଶୀତରେ ଅଧିକ ତୁଷାରପାତ ଓ ବର୍ଷାରେ ଅନିୟମିତ ବୃଷ୍ଟିପାତ ଖୋଲା ପଡ଼ିଆର ପନିପରିବା ଶସ୍ୟ ନଷ୍ଟ କରୁଥିଲା, ଯାହା ଆଦିବାସୀ ଯୁବକମାନଙ୍କର ଋତୁଗତ ପ୍ରବାସନର କାରଣ ହେଉଥିଲା।",
    solution: "Designed hurricane-resistant polyhouse structures, introduced drip micro-fertigation, built 2 solar-powered packhouses with cold storage, and linked FPOs to urban retail chains in Bhubaneswar and Vizag.",
    solution_or: "ବାତସହନଶୀଳ ପଲିହାଉସ ସଂରଚନା ଡିଜାଇନ୍, ଡ୍ରିପ୍ ମାଇକ୍ରୋ-ଫର୍ଟିଗେସନ୍ ପ୍ରଚଳନ, କୋଲ୍ଡ ଷ୍ଟୋରେଜ ସହିତ ୨ଟି ସୌର ପ୍ୟାକ୍ ହାଉସ୍ ନିର୍ମାଣ ଏବଂ ଭୁବନେଶ୍ୱର ଓ ବିଶାଖାପାଟଣା ଖୁଚୁରା ବଜାର ସହିତ FPO ଗୁଡ଼ିକୁ ସଂଯୋଗ।",
    impact_metrics: {
      "Polyhouses Commissioned": "120 Units",
      "Beneficiary Families": "480 Tribal Households",
      "Crop Yield Increase": "3.5x"
    },
    impact_metrics_or: {
      "କମିସନ୍ ହୋଇଥିବା ପଲିହାଉସ": "୧୨୦ ୟୁନିଟ୍",
      "ଲାଭବାନ ପରିବାର": "୪୮୦ ଆଦିବାସୀ ପରିବାର",
      "ଶସ୍ୟ ଉତ୍ପାଦନ ବୃଦ୍ଧି": "୩.୫ ଗୁଣ"
    },
    images: [
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-3",
    title: "Ganjam Coastal Saline Land Soil Reclamation & Watershed",
    title_or: "ଗଞ୍ଜାମ ଉପକୂଳବର୍ତ୍ତୀ ଲୁଣାକ୍ତ ଜମି ମାଟି ପୁନରୁଦ୍ଧାର ଓ ଜଳଛାୟା",
    slug: "ganjam-coastal-saline-reclamation",
    sector: "Water & Soil Conservation",
    sector_or: "ମୃତ୍ତିକା ଓ ଜଳ ସଂରକ୍ଷଣ",
    location: "Ganjam, Odisha",
    year: "2024",
    client: "Soil Conservation & Watershed Development Directorate",
    status: "Completed",
    featured: true,
    description: "Sub-surface perforated tile drainage grid installation across 2,400 hectares of cyclone-damaged coastal land, coupled with check dams and bio-char soil conditioning.",
    description_or: "ବାତ୍ୟା କ୍ଷୟକ୍ଷତି ହୋଇଥିବା ୨,୪୦୦ ହେକ୍ଟର ଉପକୂଳବର୍ତ୍ତୀ ଜମିରେ ଭୂତଳ ପର୍ଫୋରେଟେଡ୍ ଟାଇଲ୍ ଡ୍ରେନେଜ୍ ଗ୍ରିଡ୍ ସଂସ୍ଥାପନ, ଚେକ୍ ଡ୍ୟାମ୍ ଓ ବାୟୋ-ଚାର୍ ମାଟି ପ୍ରସ୍ତୁତି ସହିତ।",
    challenge: "Repeated storm surges had salinized topsoil, rendering paddy fields barren and lowering groundwater quality.",
    challenge_or: "ବାରମ୍ବାର ବାତ୍ୟା ଝଡ଼ ମାଟିର ଉପର ସ୍ତରକୁ ଲୁଣିଆ କରି ଦେଉଥିଲା, ଯାହା ଧାନ କ୍ଷେତ୍ରକୁ ଅନୁର୍ବର ଏବଂ ଭୂଜଳର ଗୁଣବତ୍ତାକୁ ଖରାପ କରୁଥିଲା।",
    solution: "Laid sub-surface clay and PVC perforated pipe networks that wash excess salt out during monsoons, constructed 18 check dams, and applied green manure crops to restore organic carbon.",
    solution_or: "ବର୍ଷାରେ ଅତିରିକ୍ତ ଲୁଣ ଧୋଇବା ପାଇଁ ଭୂତଳ କ୍ଲେ ଓ PVC ପର୍ଫୋରେଟେଡ୍ ପାଇପ୍ ନେଟୱାର୍କ ସଂସ୍ଥାପନ, ୧୮ଟି ଚେକ୍ ଡ୍ୟାମ୍ ନିର୍ମାଣ ଏବଂ ଜୈବିକ କାର୍ବନ ପୁନରୁଦ୍ଧାର ପାଇଁ ହରିତ ସାର ଫସଲ ପ୍ରୟୋଗ।",
    impact_metrics: {
      "Reclaimed Paddy Land": "2,400 Hectares",
      "Soil Salinity Reduction": "-65%",
      "Check Dams Constructed": "18 Units"
    },
    impact_metrics_or: {
      "ପୁନରୁଦ୍ଧାର ହୋଇଥିବା ଧାନ ଜମି": "୨,୪୦୦ ହେକ୍ଟର",
      "ମାଟି ଲୁଣତ୍ୱ ହ୍ରାସ": "-୬୫%",
      "ନିର୍ମିତ ଚେକ୍ ଡ୍ୟାମ୍": "୧୮ ୟୁନିଟ୍"
    },
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-4",
    title: "Mayurbhanj Integrated Dairy & Fodder Park",
    title_or: "ମୟୂରଭଞ୍ଜ ସମନ୍ୱିତ ଦୁଗ୍ଧ ଓ ପଶୁଖାଦ୍ୟ ପାର୍କ",
    slug: "mayurbhanj-integrated-dairy-fodder-park",
    sector: "Animal Husbandry",
    sector_or: "ପଶୁପାଳନ",
    location: "Mayurbhanj, Odisha",
    year: "2023 - 2025",
    client: "Odisha State Poultry & Dairy Development Federation",
    status: "In Progress",
    featured: false,
    description: "Establishment of a 500-head high-yielding Gir & Sahiwal dairy farm, 50-tonne bulk milk chilling center, and 100-acre perennial green fodder cultivation park.",
    description_or: "୫୦୦ ମୁଣ୍ଡ ଉଚ୍ଚ ଉତ୍ପାଦନକ୍ଷମ ଗୀର ଓ ସାହିୱାଲ ଦୁଗ୍ଧ ଚାଷ, ୫୦ ଟନ୍ ବଲ୍କ କ୍ଷୀର ଥଣ୍ଡା କେନ୍ଦ୍ର ଏବଂ ୧୦୦ ଏକର ବର୍ଷସାରା ହରିତ ପଶୁଖାଦ୍ୟ ଚାଷ ପାର୍କ ସ୍ଥାପନ।",
    challenge: "Local dairy farmers lacked access to milk chilling facilities within 2 hours of milking, leading to spoilage and low price realization.",
    challenge_or: "ଦୁଇ ଘଣ୍ଟା ମଧ୍ୟରେ କ୍ଷୀର ଥଣ୍ଡା କରିବାର ସୁବିଧା ନଥିବାରୁ ସ୍ଥାନୀୟ ଦୁଗ୍ଧଚାଷୀମାନେ କ୍ଷୀର ନଷ୍ଟ ଏବଂ କମ୍ ମୂଲ୍ୟ ପାଇବାର ସମସ୍ୟାର ସମ୍ମୁଖୀନ ହେଉଥିଲେ।",
    solution: "Built a centralized automated milking parlor, installed 4 village-level bulk milk coolers (BMC), and launched a hydroponic fodder distribution scheme.",
    solution_or: "କେନ୍ଦ୍ରୀୟ ସ୍ୱୟଂଚାଳିତ ଦୁଗ୍ଧ ଦୋହନ ପାର୍ଲର ନିର୍ମାଣ, ଗ୍ରାମ ସ୍ତରରେ ୪ଟି ବଲ୍କ ମିଲ୍କ କୁଲର୍ (BMC) ସଂସ୍ଥାପନ ଏବଂ ହାଇଡ୍ରୋପୋନିକ୍ ପଶୁଖାଦ୍ୟ ବିତରଣ ଯୋଜନା ଆରମ୍ଭ।",
    impact_metrics: {
      "Milk Aggregated": "12,000 L / Day",
      "Farmer Members": "850 Dairy Farmers",
      "Spoilage Rate": "< 0.2%"
    },
    impact_metrics_or: {
      "ସଂଗୃହୀତ କ୍ଷୀର": "ଦୈନିକ ୧୨,୦୦୦ ଲିଟର",
      "ଚାଷୀ ସଦସ୍ୟ": "୮୫୦ ଦୁଗ୍ଧ ଚାଷୀ",
      "କ୍ଷୟ ହାର": "< ୦.୨%"
    },
    images: [
      "https://images.unsplash.com/photo-1570042707220-410a563f8d9b?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-5",
    title: "Kalamunda Biofloc Shrimp & Tilapia Tech Complex",
    title_or: "କାଳାମୁଣ୍ଡା ବାୟୋଫ୍ଲୋକ୍ ଚିଙ୍ଗୁଡ଼ି ଓ ତିଲାପିଆ ଟେକ୍ କମ୍ପ୍ଲେକ୍ସ",
    slug: "kalamunda-biofloc-shrimp-complex",
    sector: "Aquaculture",
    sector_or: "ଜଳଚର ପାଳନ",
    location: "Bhadrak, Odisha",
    year: "2024",
    client: "Private Agritech Enterprise & State Fisheries",
    status: "Completed",
    featured: false,
    description: "Construction of 60 high-density circular Biofloc tanks (10m diameter) with automated micro-bubble aerators and IoT water telemetry units.",
    description_or: "ସ୍ୱୟଂଚାଳିତ ମାଇକ୍ରୋ-ବବଲ୍ ଏରେଟର ଏବଂ IoT ଜଳ ଟେଲିମେଟ୍ରି ୟୁନିଟ୍ ସହିତ ୬୦ଟି ଉଚ୍ଚ-ଘନତ୍ୱ ବୃତ୍ତାକାର ବାୟୋଫ୍ଲୋକ୍ ଟ୍ୟାଙ୍କ (୧୦ ମିଟର ବ୍ୟାସ) ନିର୍ମାଣ।",
    challenge: "Open pond shrimp farming in Bhadrak suffered high viral outbreak risks and heavy water discharge environmental penalties.",
    challenge_or: "ଭଦ୍ରକରେ ଖୋଲା ପୋଖରୀ ଚିଙ୍ଗୁଡ଼ି ଚାଷ ଉଚ୍ଚ ଭୂତାଣୁ ରୋଗ ଆଶଙ୍କା ଏବଂ ଅଧିକ ଜଳ ନିଷ୍କାସନ ପରିବେଶ ଜରିମାନାର ସମ୍ମୁଖୀନ ହେଉଥିଲା।",
    solution: "Implemented zero-water exchange Biofloc technology with microbial protein recycling and real-time oxygen/pH sensors hooked up to ODCONES FieldOS.",
    solution_or: "ମାଇକ୍ରୋବିଆଲ୍ ପ୍ରୋଟିନ୍ ପୁନଃଚକ୍ରଣ ସହିତ ଶୂନ୍ୟ-ଜଳ ବିନିମୟ ବାୟୋଫ୍ଲୋକ୍ ଟେକ୍ନୋଲୋଜି ଏବଂ ODCONES ଫିଲ୍ଡଓଏସ୍ ସହିତ ସଂଯୁକ୍ତ ରିୟଲ-ଟାଇମ୍ ଅମ୍ଳଜାନ/ପିଏଚ୍ ସେନ୍ସର କାର୍ଯ୍ୟକାରୀ କରାଗଲା।",
    impact_metrics: {
      "Tank Yield": "4.5 MT per Tank/Cycle",
      "Water Saved": "92%",
      "FCR Ratio": "1.12"
    },
    impact_metrics_or: {
      "ଟ୍ୟାଙ୍କ ଉତ୍ପାଦନ": "ପ୍ରତି ଟ୍ୟାଙ୍କ/ଚକ୍ରରେ ୪.୫ ମେଟ୍ରିକ୍ ଟନ୍",
      "ଜଳ ସଞ୍ଚୟ": "୯୨%",
      "FCR ଅନୁପାତ": "୧.୧୨"
    },
    images: [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "proj-6",
    title: "Bargarh Smart Canal Micro-Irrigation Modernization",
    title_or: "ବରଗଡ଼ ସ୍ମାର୍ଟ କେନାଲ ମାଇକ୍ରୋ-ସେଚନ ଆଧୁନିକୀକରଣ",
    slug: "bargarh-smart-canal-micro-irrigation",
    sector: "Agriculture",
    sector_or: "କୃଷି",
    location: "Bargarh, Odisha",
    year: "2024 - 2026",
    client: "Water Resources Department",
    status: "In Progress",
    featured: false,
    description: "Automation of canal sluice gates and installation of solar-powered micro-drip networks across 5,000 acres of paddy and pulse fields.",
    description_or: "କେନାଲ ସ୍ଲୁଇସ ଗେଟ୍ ଗୁଡ଼ିକର ସ୍ୱୟଂଚାଳିତକରଣ ଏବଂ ୫,୦୦୦ ଏକର ଧାନ ଓ ଡାଲି କ୍ଷେତ୍ରରେ ସୌର ଚାଳିତ ମାଇକ୍ରୋ-ଡ୍ରିପ୍ ନେଟୱାର୍କ ସଂସ୍ଥାପନ।",
    challenge: "Tail-end farmers along the canal system received inadequate water while head-end farmers over-irrigated, leading to waterlogging.",
    challenge_or: "କେନାଲ ବ୍ୟବସ୍ଥାର ଶେଷ ମୁଣ୍ଡର ଚାଷୀମାନେ ପର୍ଯ୍ୟାପ୍ତ ଜଳ ପାଉନଥିଲେ, ଆରମ୍ଭ ମୁଣ୍ଡର ଚାଷୀମାନେ ଅତ୍ୟଧିକ ସେଚନ କରି ଜଳ ଜମା ସମସ୍ୟା ସୃଷ୍ଟି କରୁଥିଲେ।",
    solution: "Deployed IoT solar sluice actuators, telemetry water level gauges, and underground pressurized pipe networks to deliver equitable water to tail-end farms.",
    solution_or: "IoT ସୌର ସ୍ଲୁଇସ ଆକ୍ଚୁଏଟର, ଟେଲିମେଟ୍ରି ଜଳସ୍ତର ଗେଜ୍ ଏବଂ ଭୂତଳ ଚାପଯୁକ୍ତ ପାଇପ୍ ନେଟୱାର୍କ ସଂସ୍ଥାପନ କରି ଶେଷ ମୁଣ୍ଡର ଚାଷକୁ ସମାନ ଜଳ ଯୋଗାଣ କରାଗଲା।",
    impact_metrics: {
      "Irrigation Efficiency": "From 38% to 82%",
      "Tail-End Acres Reached": "2,100 Acres",
      "Water Saved": "3.8 Million m³"
    },
    impact_metrics_or: {
      "ସେଚନ ଦକ୍ଷତା": "୩୮%ରୁ ୮୨%",
      "ଶେଷ ମୁଣ୍ଡରେ ପହଞ୍ଚିଥିବା ଏକର": "୨,୧୦୦ ଏକର",
      "ଜଳ ସଞ୍ଚୟ": "୩.୮ ନିୟୁତ ଘନମିଟର"
    },
    images: [
      "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];
