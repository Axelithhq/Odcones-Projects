import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email address required" }, { status: 400 });
    }

    // Send Welcome Email
    await sendEmail({
      to: email,
      subject: "Welcome to ODCONS PROJECTS Newsletter",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1A251E;">
          <h2 style="color: #40916C;">STAY CONNECTED WITH ODCONS PROJECTS</h2>
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
