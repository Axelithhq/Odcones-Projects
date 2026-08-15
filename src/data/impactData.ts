export interface ImpactMetric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  label_or?: string;
  category: string;
  category_or?: string;
  description: string;
  description_or?: string;
}

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: "m-1",
    value: 10000,
    suffix: "+",
    label: "Farmers & Communities Impacted",
    label_or: "ପ୍ରଭାବିତ ଚାଷୀ ଓ ସମୁଦାୟ",
    category: "Social Impact",
    category_or: "ସାମାଜିକ ପ୍ରଭାବ",
    description: "Direct training, input distribution, and yield optimization provided to rural households across Odisha and neighboring regions.",
    description_or: "ଓଡ଼ିଶା ଓ ପଡ଼ୋଶୀ ଅଞ୍ଚଳର ଗ୍ରାମୀଣ ପରିବାରଗୁଡ଼ିକୁ ସିଧାସଳଖ ପ୍ରଶିକ୍ଷଣ, ସାମଗ୍ରୀ ବିତରଣ ଓ ଉତ୍ପାଦନ ଅପ୍ଟିମାଇଜେସନ୍ ପ୍ରଦାନ।"
  },
  {
    id: "m-2",
    value: 150,
    suffix: "+",
    label: "Projects Completed",
    label_or: "ସମ୍ପୂର୍ଣ୍ଣ ହୋଇଥିବା ପ୍ରକଳ୍ପ",
    category: "Execution Excellence",
    category_or: "ନିର୍ବାହ ଉତ୍କର୍ଷତା",
    description: "High-impact interventions executed across Agriculture, Aquaculture, Horticulture, and Soil Conservation.",
    description_or: "କୃଷି, ଜଳଚର ପାଳନ, ଉଦ୍ୟାନ କୃଷି ଓ ମାଟି ସଂରକ୍ଷଣ କ୍ଷେତ୍ରରେ ଉଚ୍ଚ-ପ୍ରଭାବ କାର୍ଯ୍ୟକ୍ରମ ନିର୍ବାହ।"
  },
  {
    id: "m-3",
    value: 25,
    suffix: "+",
    label: "Districts Reached",
    label_or: "ପହଞ୍ଚୁଥିବା ଜିଲ୍ଲା",
    category: "Geographic Coverage",
    category_or: "ଭୌଗୋଳିକ ପରିସୀମା",
    description: "Active footprints across coastal, inland reservoir, and high-altitude tribal agrarian belts.",
    description_or: "ଉପକୂଳବର୍ତ୍ତୀ, ଆଭ୍ୟନ୍ତରୀଣ ଜଳାଶୟ ଓ ଉଚ୍ଚ ପର୍ବତୀୟ ଆଦିବାସୀ କୃଷି ଅଞ୍ଚଳରେ ସକ୍ରିୟ ଉପସ୍ଥିତି।"
  },
  {
    id: "m-4",
    value: 500,
    suffix: "+",
    label: "Aquaculture & Agri Infrastructure Systems",
    label_or: "ଜଳଚର ପାଳନ ଓ କୃଷି ଭିତ୍ତିଭୂମି ବ୍ୟବସ୍ଥା",
    category: "Infrastructure",
    category_or: "ଭିତ୍ତିଭୂମି",
    description: "HDPE floating cage units, Biofloc circular tanks, polyhouses, and cold storage packhouses installed.",
    description_or: "HDPE ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ୟୁନିଟ୍, ବାୟୋଫ୍ଲୋକ୍ ବୃତ୍ତାକାର ଟ୍ୟାଙ୍କ, ପଲିହାଉସ ଓ କୋଲ୍ଡ ଷ୍ଟୋରେଜ ପ୍ୟାକ୍ ହାଉସ ସଂସ୍ଥାପିତ।"
  },
  {
    id: "m-5",
    value: 50000,
    suffix: "+",
    label: "Acres / Hectares Impacted",
    label_or: "ପ୍ରଭାବିତ ଏକର / ହେକ୍ଟର",
    category: "Environmental Restoration",
    category_or: "ପରିବେଶ ପୁନରୁଦ୍ଧାର",
    description: "Farmlands modernized through precision drip irrigation, watershed check dams, and saline soil reclamation.",
    description_or: "ସଠିକ୍ ଡ୍ରିପ୍ ସେଚନ, ଜଳଛାୟା ଚେକ୍ ଡ୍ୟାମ୍ ଓ ଲୁଣାକ୍ତ ମାଟି ପୁନରୁଦ୍ଧାର ମାଧ୍ୟମରେ ଆଧୁନିକୀକରଣ ହୋଇଥିବା କୃଷି ଭୂମି।"
  }
];
