import { NextRequest, NextResponse } from "next/server";
import { readCollection, writeCollection, ProjectInquiryDB } from "@/lib/serverDb";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid input" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const organization = String(body.organization ?? "").trim();
  const sector = String(body.sector ?? "").trim();
  const problemStatement = String(body.problemStatement ?? "").trim();
  const location = String(body.location ?? "").trim();
  const timeline = String(body.timeline ?? "").trim();
  const budget = String(body.budget ?? "").trim();

  if (!name || !email) {
    return NextResponse.json({ success: false, error: "Name and email are required" }, { status: 400 });
  }

  const inquiryId = `INQ-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;

  const newInquiry: ProjectInquiryDB = {
    id: inquiryId,
    name,
    email,
    phone: phone || "Not Provided",
    organization: organization || "",
    sector: sector || "General Agribusiness",
    location: location || "",
    budget: budget || "",
    timeline: timeline || "",
    problem_statement: problemStatement || "Direct Project Enquiry",
    status: "New",
    created_at: new Date().toISOString()
  };

  // Save to local filesystem database with zero data loss
  const currentInquiries = readCollection<ProjectInquiryDB[]>("project_inquiries", []);
  const updatedInquiries = [newInquiry, ...currentInquiries];
  writeCollection("project_inquiries", updatedInquiries);

  return NextResponse.json({ success: true, inquiry: newInquiry });
}

export async function GET() {
  const inquiries = readCollection<ProjectInquiryDB[]>("project_inquiries", []);
  return NextResponse.json({ success: true, data: inquiries });
}
