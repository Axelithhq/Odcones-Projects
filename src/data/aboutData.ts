export type ApproachStage = {
  step: string;
  stage: [string, string];
  title: string;
  title_or: string;
  desc: string;
  desc_or: string;
};

export const APPROACH_STAGES: ApproachStage[] = [
  {
    step: "01",
    stage: ["CONCEPT & LAND", "ଧାରଣା ଓ ଜମି"],
    title: "Entrepreneur Concept & Land Assessment",
    title_or: "ଉଦ୍ୟୋଗୀଙ୍କ ଧାରଣା ଓ ଜମି ଆକଳନ",
    desc: "Understanding the promoter's business concept, land availability, topography, and site suitability.",
    desc_or: "ଉଦ୍ୟୋଗୀଙ୍କ ବ୍ୟବସାୟ ଧାରଣା, ଜମିର ଉପଲବ୍ଧତା, ସ୍ଥାନୀୟ ବୈଶିଷ୍ଟ୍ୟ ଓ ସୁବିଧାର ଆକଳନ।"
  },
  {
    step: "02",
    stage: ["CAPACITY & TECH", "କ୍ଷମତା ଓ ପ୍ରଯୁକ୍ତି"],
    title: "Proposed Capacity & Technology Selection",
    title_or: "ପ୍ରସ୍ତାବିତ କ୍ଷମତା ଓ ପ୍ରଯୁକ୍ତି ନିର୍ବାଚନ",
    desc: "Determining target production capacity, suitable technology, and required operational processes.",
    desc_or: "ଲକ୍ଷ୍ୟ ଉତ୍ପାଦନ କ୍ଷମତା, ଉପଯୁକ୍ତ ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ଓ ଆବଶ୍ୟକ ପରିଚାଳନା ପଦ୍ଧତି ନିରୂପଣ।"
  },
  {
    step: "03",
    stage: ["INFRA & MACHINERY", "ଭିତ୍ତିଭୂମି ଓ ମେସିନାରି"],
    title: "Infrastructure & Machinery Planning",
    title_or: "ଭିତ୍ତିଭୂମି ଓ ମେସିନାରି ଯୋଜନା",
    desc: "Planning civil structures, sheds, processing plants, utilities, electrical installations, and plant & machinery specifications.",
    desc_or: "ସିଭିଲ୍ ସଂରଚନା, ସେଡ୍, ପ୍ରସେସିଂ ପ୍ଲାଣ୍ଟ, ବିଦ୍ୟୁତ୍ ସଂଯୋଗ ଓ ମେସିନାରି ବିବରଣୀ ଯୋଜନା।"
  },
  {
    step: "04",
    stage: ["INVESTMENT & COST", "ନିବେଶ ଓ ଖର୍ଚ୍ଚ"],
    title: "Project Cost & Working Capital Estimation",
    title_or: "ପ୍ରକଳ୍ପ ମୂଲ୍ୟ ଓ କାର୍ଯ୍ୟକାରୀ ମୂଳଧନ ଆକଳନ",
    desc: "Comprehensive assessment of land development, civil construction, machinery, preliminary expenses, and working capital.",
    desc_or: "ଜମି ବିକାଶ, ସିଭିଲ୍ ନିର୍ମାଣ, ମେସିନ, ପ୍ରାରମ୍ଭିକ ଖର୍ଚ୍ଚ ଓ କାର୍ଯ୍ୟକାରୀ ମୂଳଧନର ସମ୍ପୂର୍ଣ୍ଣ ଆକଳନ।"
  },
  {
    step: "05",
    stage: ["MARKET & FINANCE", "ବଜାର ଓ ଆର୍ଥିକ ଯୋଜନା"],
    title: "Market Assessment & Financial Modeling",
    title_or: "ବଜାର ସର୍ବେକ୍ଷଣ ଓ ଆର୍ଥିକ ଯୋଜନା",
    desc: "Evaluating demand-supply dynamics, preparing projected P&L, cash flow statements, DSCR, break-even analysis, and repayment schedules.",
    desc_or: "ଚାହିଦା-ଯୋଗାଣ ସର୍ବେକ୍ଷଣ, ଲାଭ-କ୍ଷତି ହିସାବ, କ୍ୟାଶ୍ ଫ୍ଲୋ, DSCR ଓ ଋଣ ପରିଶୋଧ ସୂଚୀ ପ୍ରସ୍ତୁତି।"
  },
  {
    step: "06",
    stage: ["SCHEME & IMPLEMENTATION", "ଯୋଜନା ଓ କାର୍ଯ୍ୟକାରିତା"],
    title: "Government Assistance & Implementation Support",
    title_or: "ସରକାରୀ ଯୋଜନା ଓ କାର୍ଯ୍ୟକାରିତା ସହାୟତା",
    desc: "Assessing eligible government subsidy schemes, preparing documentation dossiers, and technical coordination during project rollout.",
    desc_or: "ସରକାରୀ ସବସିଡି ଯୋଜନା ମୂଲ୍ୟାଙ୍କନ, ଦସ୍ତାବେଜ ପ୍ରସ୍ତୁତି ଓ ପ୍ରକଳ୍ପ କାର୍ଯ୍ୟକାରିତାରେ ବୈଷୟିକ ସହାୟତା।"
  }
];
