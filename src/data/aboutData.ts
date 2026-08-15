export type TimelineStage = {
  stage: [string, string];
  title: string;
  title_or: string;
  year: string;
  desc: string;
  desc_or: string;
};

export const TIMELINE: TimelineStage[] = [
  {
    stage: ["IDEA", "ଧାରଣା"],
    title: "Conceptualization & Ground Research",
    title_or: "ଧାରଣା ଗଠନ ଓ କ୍ଷେତ୍ର ଗବେଷଣା",
    year: "2018",
    desc: "Identification of critical systemic gaps in Eastern Indian inland fisheries, smallholder soil carbon depletion and fragmented market access.",
    desc_or: "ପୂର୍ବ ଭାରତର ଅନ୍ତଃସ୍ଥଳ ମତ୍ସ୍ୟ, କ୍ଷୁଦ୍ର ଚାଷୀଙ୍କ ମୃତ୍ତିକା କାର୍ବନ ହ୍ରାସ ଓ ବିଖଣ୍ଡିତ ବଜାର ପ୍ରବେଶରେ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ବ୍ୟାପକ ତୃଟି ଚିହ୍ନଟ।",
  },
  {
    stage: ["DEVELOPMENT", "ବିକାଶ"],
    title: "Tech Architecture & Field Pilots",
    title_or: "ଟେକ୍ ଆର୍କିଟେକ୍ଚର ଓ କ୍ଷେତ୍ର ପରୀକ୍ଷା",
    year: "2020",
    desc: "Design of HDPE reservoir floating cage frameworks, Biofloc circular tanks and ODCONES FieldOS IoT telemetry algorithms.",
    desc_or: "ଏଚଡିପିଇ ଜଳାଶୟ ଫ୍ଲୋଟିଙ୍ଗ କେଜ୍ ଢାଞ୍ଚା, ବାୟୋଫ୍ଲୋକ୍ ବୃତ୍ତାକାର ଟ୍ୟାଙ୍କ ଓ ଓଡକୋନ୍ସ ଫିଲ୍ଡଓଏସ୍ ଆଇଓଟି ଟେଲିମେଟ୍ରି ଆଲଗୋରିଦମ ଡିଜାଇନ।",
  },
  {
    stage: ["IMPLEMENTATION", "କାର୍ଯ୍ୟକାରିତା"],
    title: "Institutional & EPC Execution",
    title_or: "ଅନୁଷ୍ଠାନିକ ଓ ଇପିସି ନିର୍ବାହ",
    year: "2022",
    desc: "Execution of government DPRs, World Bank supported reservoir cage installations and coastal saline land drainage grids.",
    desc_or: "ସରକାରୀ ଡିପିଆର, ବିଶ୍ୱବ୍ୟାଙ୍କ ସମର୍ଥିତ ଜଳାଶୟ କେଜ୍ ସ୍ଥାପନା ଓ ଉପକୂଳ ଲୁଣାକ୍ତ ଭୂମି ନିଷ୍କାସନ ଗ୍ରୀଡ ନିର୍ବାହ।",
  },
  {
    stage: ["IMPACT", "ପ୍ରଭାବ"],
    title: "Community Verification & Scale",
    title_or: "ସମୁଦାୟ ଯାଞ୍ଚ ଓ ବିସ୍ତାର",
    year: "2024",
    desc: "Metrics below are shown as editable placeholders until verified by ODCONES PROJECTS.",
    desc_or: "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ ଦ୍ୱାରା ଯାଞ୍ଚ ନହେବା ପର୍ଯ୍ୟନ୍ତ ପରିସଂଖ୍ୟାନଗୁଡ଼ିକ ସମ୍ପାଦନଯୋଗ୍ୟ ପ୍ଲେସହୋଲ୍ଡର୍ ଭାବେ ଦେଖାଯାଇଛି।",
  },
  {
    stage: ["SCALE", "ବିସ୍ତାର"],
    title: "Pan-India Expansion & Export Links",
    title_or: "ସର୍ବଭାରତ ସ୍ତରରେ ବିସ୍ତାର ଓ ରପ୍ତାନି ସଂଯୋଗ",
    year: "2026+",
    desc: "Scaling digital platform monitoring and cold-chain value addition networks across national and international markets.",
    desc_or: "ଜାତୀୟ ଓ ଅନ୍ତର୍ଜାତୀୟ ବଜାରରେ ଡିଜିଟାଲ ପ୍ଲାଟଫର୍ମ ନିରୀକ୍ଷଣ ଓ କୋଲ୍ଡ-ଚେନ ମୂଲ୍ୟ ସଂଯୋଜନ ନେଟୱାର୍କ ବିସ୍ତାର।",
  },
];
