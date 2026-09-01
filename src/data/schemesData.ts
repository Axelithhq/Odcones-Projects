export interface SchemeItem {
  id: string;
  name: string;
  name_or: string;
  slug: string;
  sector: string;
  subsidyPct: string;
  maxGrant: string;
  nodalAgency: string;
  eligibility: string;
  eligibility_or: string;
}

export const SCHEMES: SchemeItem[] = [
  {
    id: "scheme-pmmsy",
    name: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    name_or: "ପ୍ରଧାନମନ୍ତ୍ରୀ ମତ୍ସ୍ୟ ସମ୍ପଦ ଯୋଜନା (PMMSY)",
    slug: "pmmsy",
    sector: "Fisheries & Aquaculture",
    subsidyPct: "40% - 60%",
    maxGrant: "₹50 Lakhs",
    nodalAgency: "Department of Fisheries (Govt. of India / Odisha)",
    eligibility: "Individual fishers, FPOs, SHGs, and aquaculture entrepreneurs for Biofloc, RAS, and cage culture.",
    eligibility_or: "ବାୟୋଫ୍ଲୋକ୍, RAS, ଓ କେଜ୍ ଚାଷ ପାଇଁ ବ୍ୟକ୍ତିଗତ ମତ୍ସ୍ୟଜୀବୀ, FPO, SHG ଓ ଉଦ୍ୟୋଗୀ।"
  },
  {
    id: "scheme-midh",
    name: "Mission for Integrated Development of Horticulture (MIDH)",
    name_or: "ସମନ୍ୱିତ ଉଦ୍ୟାନ ବିକାଶ ମିଶନ (MIDH)",
    slug: "midh",
    sector: "Horticulture & Greenhouse",
    subsidyPct: "50%",
    maxGrant: "₹35 Lakhs",
    nodalAgency: "National Horticulture Board / State Directorate",
    eligibility: "Polyhouse construction, shade-net nurseries, tissue culture, and mushroom cultivation units.",
    eligibility_or: "ପଲିହାଉସ ନିର୍ମାଣ, ଶେଡ୍-ନେଟ୍ ନର୍ସରୀ, ଟିସୁ କଲଚର ଓ ଛତୁ ଚାଷ ୟୁନିଟ୍।"
  },
  {
    id: "scheme-aif",
    name: "Agriculture Infrastructure Fund (AIF)",
    name_or: "କୃଷି ଭିତ୍ତିଭୂମି ପାଣ୍ଠି (AIF)",
    slug: "aif",
    sector: "Agriculture & Cold Chain",
    subsidyPct: "3% Interest Subvention",
    maxGrant: "₹2 Crores Loan Limit",
    nodalAgency: "Ministry of Agriculture & Farmers Welfare",
    eligibility: "Post-harvest infrastructure including cold storage, warehouses, pack houses, and custom hiring centers.",
    eligibility_or: "କୋଲ୍ଡ ଷ୍ଟୋରେଜ୍, ଗୋଦାମ, ପ୍ୟାକ୍ ହାଉସ୍ ଓ କଷ୍ଟମ୍ ହାୟରିଂ ସେଣ୍ଟର ସହିତ ଅମଳ ପରବର୍ତ୍ତୀ ଭିତ୍ତିଭୂମି।"
  },
  {
    id: "scheme-pmfme",
    name: "PM Formalisation of Micro Food Processing Enterprises (PM-FME)",
    name_or: "ପ୍ରଧାନମନ୍ତ୍ରୀ କ୍ଷୁଦ୍ର ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ ଯୋଜନା (PM-FME)",
    slug: "pm-fme",
    sector: "Food Processing & Feed",
    subsidyPct: "35% Credit-Linked",
    maxGrant: "₹10 Lakhs",
    nodalAgency: "Ministry of Food Processing Industries (MoFPI)",
    eligibility: "Micro food processing units, pulse mills, oil expellers, and spice grinding enterprises.",
    eligibility_or: "କ୍ଷୁଦ୍ର ଖାଦ୍ୟ ପ୍ରସଂସ୍କରଣ ୟୁନିଟ୍, ଡାଲି ମିଲ୍, ତେଲ ପେଡ଼ା ଓ ମସଲା ଗୁଣ୍ଡ ଶିଳ୍ପ।"
  },
  {
    id: "scheme-mkuy",
    name: "Mukhyamantri Krushi Udyog Yojana (MKUY)",
    name_or: "ମୁଖ୍ୟମନ୍ତ୍ରୀ କୃଷି ଉଦ୍ୟୋଗ ଯୋଜନା (MKUY)",
    slug: "mkuy",
    sector: "Allied MSME & Agri",
    subsidyPct: "40% - 50%",
    maxGrant: "₹50 Lakhs",
    nodalAgency: "APICOL / Agriculture Dept., Govt. of Odisha",
    eligibility: "Agri-entrepreneurs in Odisha setting up commercial farming, dairy, poultry, and agro-processing units.",
    eligibility_or: "ଓଡ଼ିଶାରେ ବାଣିଜ୍ୟିକ ଚାଷ, ଦୁଗ୍ଧ, କୁକୁଡ଼ା ଓ କୃଷି-ପ୍ରସଂସ୍କରଣ ୟୁନିଟ୍ ସ୍ଥାପନ କରୁଥିବା କୃଷି ଉଦ୍ୟୋଗୀ।"
  }
];
