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

  const email = String(body.email ?? "").trim();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
      await client.from("newsletter_subscribers").insert([{ email }]);
    } catch {
      // Persistence failure should not block the response.
    }
  }

  if (isEmailConfigured()) {
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: "[ODCONES] New Newsletter Subscriber",
      html: `<p>A new subscriber joined the ODCONES Insights newsletter: <strong>${escapeHtml(email)}</strong></p>`,
    });
  }

  return NextResponse.json({ success: true, demo });
}

export async function GET() {
  return NextResponse.json({ success: false, error: t("en", "api.invalidMethod") }, { status: 405 });
}
