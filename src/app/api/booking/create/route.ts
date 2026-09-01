import { NextResponse } from "next/server";
import { readCollection, writeCollection, ConsultationBookingDB } from "@/lib/serverDb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { serviceId, serviceName, date, time, name, mobile, email, org, sector, location, investment, amount, couponCode } = body;

    if (!name || !email || !mobile || !date || !time) {
      return NextResponse.json({ error: "Required booking fields missing" }, { status: 400 });
    }

    const bookingId = `ODC-${Date.now()}-${Math.floor(100 + Math.random() * 900)}`;

    const newBooking: ConsultationBookingDB = {
      id: bookingId,
      serviceId,
      serviceName,
      date,
      time,
      name,
      email,
      mobile,
      org: org || "",
      sector: sector || "",
      location: location || "",
      investment: investment || "",
      amount: amount || 0,
      couponCode: couponCode || "",
      status: "Confirmed",
      created_at: new Date().toISOString()
    };

    // Save to local filesystem database with zero data loss
    const currentBookings = readCollection<ConsultationBookingDB[]>("consultation_bookings", []);
    const updatedBookings = [newBooking, ...currentBookings];
    writeCollection("consultation_bookings", updatedBookings);

    return NextResponse.json({
      success: true,
      booking: newBooking
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create booking" }, { status: 500 });
  }
}
