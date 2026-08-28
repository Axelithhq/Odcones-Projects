export interface SendEmailPayload {
  to: string;
  subject: string;
  html: string;
}

export function escapeHtml(str: string): string {
  return String(str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
    process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder-project.supabase.co"
  );
}

export async function sendEmail({ to, subject, html }: SendEmailPayload): Promise<{ success: boolean; id?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL || "contact@odcons.com";
  const fromName = process.env.RESEND_FROM_NAME || "ODCONS PROJECTS";

  // If no Resend API Key is set, log email payload cleanly in development
  if (!apiKey) {
    console.log(`[EMAIL DISPATCH MOCK] To: ${to} | Subject: ${subject}`);
    return { success: true, id: `mock_mail_${Date.now()}` };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: `${fromName} <${fromEmail}>`,
        to: [to],
        subject: subject,
        html: html,
      }),
    });

    const data = await res.json();
    if (res.ok) {
      return { success: true, id: data.id };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
}
