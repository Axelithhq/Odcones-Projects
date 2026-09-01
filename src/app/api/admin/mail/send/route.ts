import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { to, subject, message, attachments } = await req.json();

    if (!to || !subject || !message) {
      return NextResponse.json({ error: "Recipient email, subject, and message body are required." }, { status: 400 });
    }

    const recipients = typeof to === "string" 
      ? to.split(",").map((e: string) => e.trim()).filter(Boolean)
      : to;

    if (recipients.length === 0) {
      return NextResponse.json({ error: "No valid recipient email address provided." }, { status: 400 });
    }

    // Format attachments for Resend API
    const formattedAttachments = Array.isArray(attachments)
      ? attachments.map((att: any) => {
          let base64Data = att.content || "";
          if (base64Data.includes(",")) {
            base64Data = base64Data.split(",")[1];
          }
          return {
            filename: att.filename || "attachment",
            content: base64Data
          };
        })
      : [];

    const resendApiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "ODCONS Projects <onboarding@resend.dev>";

    // Branded HTML body template
    const formattedHtml = `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #061910; padding: 24px; text-align: center;">
          <h1 style="color: #4ade80; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase;">ODCONS PROJECTS</h1>
          <p style="color: #94a3b8; margin: 4px 0 0 0; font-size: 11px; letter-spacing: 1px;">TECHNICAL CONSULTANCY & FIELD OPERATIONS</p>
        </div>
        <div style="padding: 28px; color: #1e293b; font-size: 14px; line-height: 1.7;">
          ${message.replace(/\n/g, "<br/>")}
        </div>
        ${
          formattedAttachments.length > 0
            ? `<div style="padding: 12px 28px; background-color: #f1f5f9; border-top: 1px solid #e2e8f0; font-size: 12px; color: #475569;">
                <strong>📎 Attachments (${formattedAttachments.length}):</strong> ${formattedAttachments.map((a: any) => a.filename).join(", ")}
               </div>`
            : ""
        }
        <div style="background-color: #f8fafc; padding: 16px 28px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 11px; color: #64748b;">
          <p style="margin: 0;">Sent by ODCONS PROJECTS PVT LTD • Bhubaneswar, Odisha</p>
          <p style="margin: 4px 0 0 0;">Website: <a href="https://odconsprojects.org" style="color: #16a34a; text-decoration: none;">odconsprojects.org</a></p>
        </div>
      </div>
    `;

    if (resendApiKey) {
      const payload: any = {
        from: fromEmail,
        to: recipients,
        subject: subject,
        text: message,
        html: formattedHtml
      };

      if (formattedAttachments.length > 0) {
        payload.attachments = formattedAttachments;
      }

      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${resendApiKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const resendJson = await resendRes.json();

      if (!resendRes.ok) {
        console.error("[RESEND ERROR]", resendJson);
        return NextResponse.json({ 
          error: resendJson.message || "Failed to send email via Resend API" 
        }, { status: resendRes.status });
      }

      return NextResponse.json({
        success: true,
        message: `Email with ${formattedAttachments.length} attachment(s) successfully sent to ${recipients.join(", ")} via Resend!`,
        resendId: resendJson.id
      });
    }

    // Local / Dev Fallback mode if RESEND_API_KEY is not set in environment yet
    console.log("=========================================");
    console.log("[ADMIN MAIL COMPOSER - WITH ATTACHMENTS]");
    console.log("Recipients:", recipients);
    console.log("Subject:", subject);
    console.log("Attachments:", formattedAttachments.map((a: any) => a.filename));
    console.log("Message:", message);
    console.log("=========================================");

    return NextResponse.json({
      success: true,
      demo: true,
      message: `Mail with ${formattedAttachments.length} attachment(s) queued for ${recipients.join(", ")}! (Note: Configure RESEND_API_KEY in Vercel ENV for live delivery)`
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Failed to dispatch email" }, { status: 500 });
  }
}
