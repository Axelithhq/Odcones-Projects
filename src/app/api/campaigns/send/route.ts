import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { subject, bodyHtml, recipientEmails } = await req.json();

    if (!subject || !bodyHtml || !recipientEmails || recipientEmails.length === 0) {
      return NextResponse.json({ error: "Campaign subject, content, and recipient list required" }, { status: 400 });
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
