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
  const message = String(body.message ?? "").trim();
  const role = String(body.role ?? "").trim();
  const roleId = String(body.roleId ?? "").trim();

  if (!name || !email || !roleId) {
    return NextResponse.json({ success: false, error: t(lang, "api.invalidInput") }, { status: 400 });
  }

  const demo = !isSupabaseConfigured();

  if (isSupabaseConfigured()) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const client = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );
      await client.from("career_applications").insert([
        {
          name,
          email,
          phone,
          message: message || null,
          role_id: roleId,
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
      subject: `[ODCONS] Career Application from ${name}`,
      html: `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Role:</strong> ${escapeHtml(role)} (${escapeHtml(roleId)})</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });
  }

  return NextResponse.json({ success: true, demo });
}

export async function GET() {
  return NextResponse.json({ success: false, error: t("en", "api.invalidMethod") }, { status: 405 });
}
