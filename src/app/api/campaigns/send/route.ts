import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get("odcons_admin_session")?.value;
    if (!session) {
      return NextResponse.json({ error: "Unauthorized — admin session required" }, { status: 401 });
    }

    const { subject, bodyHtml, recipientEmails } = await req.json();

    if (!subject || !bodyHtml || !recipientEmails || recipientEmails.length === 0) {
      return NextResponse.json({ error: "Campaign subject, content, and recipient list required" }, { status: 400 });
    }

    if (!Array.isArray(recipientEmails) || recipientEmails.length > 500) {
      return NextResponse.json({ error: "Recipient list must be an array with max 500 entries" }, { status: 400 });
    }

    let sentCount = 0;
    for (const email of recipientEmails) {
      const res = await sendEmail({
        to: email,
        subject: subject,
        html: bodyHtml,
      });
      if (res.success) sentCount++;
    }

    return NextResponse.json({
      success: true,
      sentCount,
      totalRecipients: recipientEmails.length,
      message: `Dispatched ${sentCount}/${recipientEmails.length} campaign emails successfully.`,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to dispatch email campaign" }, { status: 500 });
  }
}
