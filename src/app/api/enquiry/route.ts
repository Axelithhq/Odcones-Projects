import { NextRequest, NextResponse } from "next/server";
import { getDictionary, translate } from "@/lib/messages";
import { isValidLocale } from "@/lib/i18n-config";
import { isEmailConfigured, isSupabaseConfigured, sendEmail, escapeHtml } from "@/lib/email";

export const runtime = "nodejs";

function t(lang: string, key: string, fallback?: string): string {
  return translate(getDictionary(isValidLocale(lang) ? lang : "en"), key, fallback);
}

export async function POST(req: NextRequest) {
  const lang = "en";
  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: t(lang, "api.invalidInput") }, { status: 400 });
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

  if (!name || !email || !problemStatement) {
    return NextResponse.json({ success: false, error: t(lang, "api.invalidInput") }, { status: 400 });
  }

  const demo = !isSupabaseConfigured();

  // Persist to Supabase only when a real project is configured.
  if (isSupabaseConfigured()) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      await client.from("enquiries").insert([
        {
          name,
          email,
          phone,
          organization: organization || null,
          sector: sector || null,
          problem_statement: problemStatement,
          location: location || null,
          timeline: timeline || null,
          budget: budget || null,
          status: "New",
        },
      ]);
    } catch {
      // Persistence failure should not block the response.
    }
  }

  if (isEmailConfigured()) {
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: `[ODCONES] New Project Enquiry from ${name}`,
      html: `
        <h2>New Project Enquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Organization:</strong> ${escapeHtml(organization)}</p>
        <p><strong>Sector:</strong> ${escapeHtml(sector)}</p>
        <p><strong>Location:</strong> ${escapeHtml(location)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget)}</p>
        <p><strong>Problem Statement:</strong></p>
        <p>${escapeHtml(problemStatement).replace(/\n/g, "<br/>")}</p>
      `,
    });
  }

  return NextResponse.json({ success: true, demo });
}

export async function GET() {
  return NextResponse.json({ success: false, error: t("en", "api.invalidMethod") }, { status: 405 });
}
