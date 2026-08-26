import { NextResponse } from "next/server";
import { sendEmail, isSupabaseConfigured, escapeHtml } from "@/lib/email";
import { createClient } from "@supabase/supabase-js";

function getSupabaseAdmin() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createClient(url, key, { auth: { autoRefreshToken: false, persistSession: false } });
}

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address required" }, { status: 400 });
    }

    const cleanEmail = email.trim().toLowerCase();
    const cleanName = (name || "").trim();

    if (isSupabaseConfigured()) {
      const supabase = getSupabaseAdmin();
      if (supabase) {
        const { error } = await supabase
          .from("newsletter_subscribers")
          .upsert(
            { email: cleanEmail, name: cleanName || null, source: "popup", active: true },
            { onConflict: "email", ignoreDuplicates: false }
          );
        if (error) {
          console.error("[SUBSCRIBE] DB insert failed:", error.message);
        }
      }
    }

    await sendEmail({
      to: cleanEmail,
      subject: "Welcome to ODCONS PROJECTS Newsletter",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1A251E;">
          <h2 style="color: #40916C;">STAY CONNECTED WITH ODCONS PROJECTS</h2>
          <p>Dear ${cleanName ? escapeHtml(cleanName) : "Subscriber"},</p>
          <p>Thank you for subscribing to our project consultancy updates and technical insights across Agriculture, Fisheries, Aquaculture, and Agribusiness.</p>
          <hr/>
          <p>Warm regards,<br/><strong>Anshuman Mohapatra — Founder</strong><br/>ODCONS PROJECTS</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
