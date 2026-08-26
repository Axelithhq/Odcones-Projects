export interface ImpactMetric {
  id: string;
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
    label: "End-to-End DPR Preparation",
    label_or: "ସମ୍ପୂର୍ଣ୍ଣ DPR ପ୍ରସ୍ତୁତି",
    category: "Technical Consultancy",
    category_or: "ବୈଷୟିକ ପରାମର୍ଶ",
    description: "Detailed Project Reports tailored for bank finance, government schemes, and enterprise expansion.",
    description_or: "ବ୍ୟାଙ୍କ ଋଣ, ସରକାରୀ ଯୋଜନା ଓ ବ୍ୟବସାୟ ସମ୍ପ୍ରସାରଣ ପାଇଁ ବ୍ୟକ୍ତିଗତ DPR ପ୍ରସ୍ତୁତି।"
  },
  {
    id: "m-2",
    label: "Techno-Economic Feasibility Audits",
    label_or: "ତ୍ରାକ୍ନୋ-ଇକୋନୋମିକ ସମ୍ଭାବ୍ୟତା ସର୍ବେକ୍ଷଣ",
    category: "Project Assessment",
    category_or: "ପ୍ରକଳ୍ପ ଆକଳନ",
    description: "Rigorous technical feasibility, production potential, and operating economics evaluation.",
    description_or: "କଠୋର ବୈଷୟିକ ସମ୍ଭାବ୍ୟତା, ଉତ୍ପାଦନ କ୍ଷମତା ଓ ପରିଚାଳନା ଅର୍ଥନୀତି ମୂଲ୍ୟାଙ୍କନ।"
  },
  {
    id: "m-3",
    label: "2D & 3D Engineering Layouts",
    label_or: "୨D ଓ ୩D ଇଞ୍ଜିନିୟରିଂ ଲେ-ଆଉଟ୍",
    category: "Engineering & Design",
    category_or: "ଇଞ୍ଜିନିୟରିଂ ଓ ଡିଜାଇନ୍",
    description: "Functional site blueprints, civil estimates, machinery placement, and 3D architectural visualization.",
    description_or: "କାର୍ଯ୍ୟକ୍ଷମ ସାଇଟ୍ ନକ୍ସା, ସିଭିଲ୍ ଆକଳନ, ମେସିନ ସ୍ଥାପନ ଓ ୩D ଭିଜୁଆଲାଇଜେସନ୍।"
  },
  {
    id: "m-4",
    label: "Financial Modeling & Viability",
    label_or: "ଆର୍ଥିକ ଯୋଜନା ଓ ସୁସ୍ଥତା",
    category: "Financial Planning",
    category_or: "ଆର୍ଥିକ ଯୋଜନା",
    description: "Comprehensive profit & loss projections, cash flow analysis, DSCR calculation, and repayment schedules.",
    description_or: "ଲାଭ-କ୍ଷତି ଆକଳନ, କ୍ୟାଶ୍ ଫ୍ଲୋ, DSCR ଗଣନା ଓ ଋଣ ପରିଶୋଧ ସୂଚୀ।"
  },
  {
    id: "m-5",
    label: "Government Scheme Advisory",
    label_or: "ସରକାରୀ ଯୋଜନା ପରାମର୍ଶ",
    category: "Scheme Advisory",
    category_or: "ଯୋଜନା ପରାମର୍ଶ",
    description: "Identification of applicable government programs and project documentation according to scheme guidelines.",
    description_or: "ଯୋଗ୍ୟ ସରକାରୀ ଯୋଜନା ଚିହ୍ନଟ ଓ ପ୍ରକଳ୍ପ ଦସ୍ତାବେଜ୍ ପ୍ରସ୍ତୁତି।"
  }
];
