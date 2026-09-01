import fs from "fs";
import path from "path";

const DB_DIR = path.join(process.cwd(), "data", "db");

function ensureDbDir() {
  if (!fs.existsSync(DB_DIR)) {
    fs.mkdirSync(DB_DIR, { recursive: true });
  }
}

function getCollectionPath(collectionName: string): string {
  ensureDbDir();
  return path.join(DB_DIR, `${collectionName}.json`);
}

export function readCollection<T>(collectionName: string, defaultValue: T): T {
  try {
    const filePath = getCollectionPath(collectionName);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(defaultValue, null, 2), "utf-8");
      return defaultValue;
    }
    const content = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(content) as T;
  } catch (error) {
    console.error(`Error reading database collection ${collectionName}:`, error);
    return defaultValue;
  }
}

export function writeCollection<T>(collectionName: string, data: T): void {
  try {
    const filePath = getCollectionPath(collectionName);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error(`Error writing database collection ${collectionName}:`, error);
  }
}

// Initial Default Consultation Services
export const INITIAL_CONSULTATION_SERVICES = [
  {
    id: "dpr-prep",
    name: "Detailed Project Report (DPR) Consultancy",
    name_or: "ବିସ୍ତୃତ ପ୍ରକଳ୍ପ ରିପୋର୍ଟ (DPR) ପରାମର୍ଶ",
    price: 2500,
    duration: "45 Mins",
    desc: "Bankable DPR preparation for bank loans, World Bank, PMMSY, AIF, and MIDH schemes.",
    desc_or: "ବ୍ୟାଙ୍କ ଋଣ ଓ ସରକାରୀ ସବସିଡି ମଞ୍ଜୁରୀ ପାଇଁ ବୈଷୟିକ, ବାଣିଜ୍ୟିକ ଓ ଆର୍ଥିକ ତଥ୍ୟ ସମ୍ବଳିତ DPR ପ୍ରସ୍ତୁତି।",
    timeSlots: ["10:00 AM", "11:30 AM", "02:30 PM", "04:00 PM", "05:30 PM"],
    active: true
  },
  {
    id: "feasibility",
    name: "Techno-Economic Feasibility Audit",
    name_or: "ତ୍ରାକ୍ନୋ-ଇକୋନୋମିକ ସମ୍ଭାବ୍ୟତା ସର୍ବେକ୍ଷଣ",
    price: 3000,
    duration: "60 Mins",
    desc: "Land suitability, water quality parameters, financial DSCR modeling, and market assessment.",
    desc_or: "ଜମି ଉପଯୁକ୍ତତା, ଜଳ ଗୁଣବତ୍ତା, ଆର୍ଥିକ DSCR ମଡେଲିଂ ଓ ବଜାର ଆକଳନ।",
    timeSlots: ["10:00 AM", "11:30 AM", "02:30 PM", "04:00 PM"],
    active: true
  },
  {
    id: "layout-3d",
    name: "2D & 3D Architectural Project Layout",
    name_or: "୨D ଓ ୩D ସିଭିଲ୍ ଓ ଇଞ୍ଜିନିୟରିଂ ଲେ-ଆଉଟ୍",
    price: 3500,
    duration: "60 Mins",
    desc: "Civil engineering layouts, machinery arrangements, biofloc tank placement, and PEB structural plans.",
    desc_or: "ସିଭିଲ ନିର୍ମାଣ ଆକଳନ, ମେସିନାରୀ ମୂଲ୍ୟ ନିର୍ଦ୍ଧାରଣ, ବ୍ଲୁପ୍ରିଣ୍ଟ ଓ ସଂରଚନାତ୍ମକ BOQ ପ୍ରସ୍ତୁତି।",
    timeSlots: ["11:30 AM", "02:30 PM", "05:30 PM"],
    active: true
  },
  {
    id: "scheme-subsidies",
    name: "Government Scheme & Subsidy Advisory",
    name_or: "ସରକାରୀ ଯୋଜନା ଓ ସବସିଡି ପରାମର୍ଶ",
    price: 2000,
    duration: "45 Mins",
    desc: "Eligibility assessment and application documentation for State & Central subsidy schemes.",
    desc_or: "PMMSY, MIDH, AIF, PM-FME, PMEGP, MKUY ଯୋଜନା ଚିହ୍ନଟ ଓ ସବସିଡି ନଥିପତ୍ର ସହାୟତା।",
    timeSlots: ["10:00 AM", "02:30 PM", "04:00 PM"],
    active: true
  }
];

export interface CouponDB {
  id: string;
  code: string;
  type: "fixed" | "percentage";
  value: number;
  minAmount?: number;
  desc: string;
  desc_or?: string;
  active: boolean;
}

export const INITIAL_COUPONS: CouponDB[] = [
  {
    id: "cp-1",
    code: "ODCONS1000",
    type: "fixed",
    value: 1000,
    minAmount: 2000,
    desc: "₹1,000 Flat Discount on Detailed Project Reports & Feasibility Audits",
    desc_or: "DPR ଓ ସମ୍ଭାବ୍ୟତା ସର୍ବେକ୍ଷଣ ପାଇଁ ₹୧,୦୦୦ ସବସିଡି ରିହାତି",
    active: true
  },
  {
    id: "cp-2",
    code: "FARMER20",
    type: "percentage",
    value: 20,
    minAmount: 1500,
    desc: "20% Off for Farmer Producer Organizations (FPOs) & Agri Entrepreneurs",
    desc_or: "FPO ଓ କୃଷି ଉଦ୍ୟୋଗୀଙ୍କ ପାଇଁ ୨୦% ରିହାତି",
    active: true
  },
  {
    id: "cp-3",
    code: "LAUNCH500",
    type: "fixed",
    value: 500,
    minAmount: 1000,
    desc: "₹500 Launch Offer for New Agribusiness Projects",
    desc_or: "ନୂତନ ପ୍ରକଳ୍ପ ପାଇଁ ₹୫୦୦ ରିହାତି",
    active: true
  }
];

export interface ConsultationBookingDB {
  id: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  name: string;
  email: string;
  mobile: string;
  org?: string;
  sector?: string;
  location?: string;
  investment?: string;
  amount: number;
  couponCode?: string;
  status: "New" | "Confirmed" | "In Progress" | "Completed" | "Cancelled";
  created_at: string;
}

export interface ProjectInquiryDB {
  id: string;
  name: string;
  email: string;
  phone: string;
  organization?: string;
  sector: string;
  location?: string;
  budget?: string;
  timeline?: string;
  problem_statement?: string;
  status: "New" | "Contacted" | "In Progress" | "Completed" | "Cancelled";
  created_at: string;
}
