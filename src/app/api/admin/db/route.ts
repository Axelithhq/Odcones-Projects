import { NextResponse } from "next/server";
import {
  readCollection,
  writeCollection,
  INITIAL_CONSULTATION_SERVICES,
  INITIAL_COUPONS,
  INITIAL_LIBRARY_RESOURCES,
  ConsultationBookingDB,
  ProjectInquiryDB,
  CouponDB,
  LibraryResourceDB
} from "@/lib/serverDb";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  try {
    if (type === "consultation_services") {
      const services = readCollection("consultation_services", INITIAL_CONSULTATION_SERVICES);
      return NextResponse.json({ success: true, data: services });
    }

    if (type === "coupons") {
      const coupons = readCollection<CouponDB[]>("coupons", INITIAL_COUPONS);
      return NextResponse.json({ success: true, data: coupons });
    }

    if (type === "library_resources") {
      const library = readCollection<LibraryResourceDB[]>("library_resources", INITIAL_LIBRARY_RESOURCES);
      return NextResponse.json({ success: true, data: library });
    }

    if (type === "consultation_bookings") {
      const bookings = readCollection<ConsultationBookingDB[]>("consultation_bookings", []);
      return NextResponse.json({ success: true, data: bookings });
    }

    if (type === "project_inquiries") {
      const inquiries = readCollection<ProjectInquiryDB[]>("project_inquiries", []);
      return NextResponse.json({ success: true, data: inquiries });
    }

    // Default: Return all DB statistics and collections
    return NextResponse.json({
      success: true,
      data: {
        consultation_services: readCollection("consultation_services", INITIAL_CONSULTATION_SERVICES),
        coupons: readCollection<CouponDB[]>("coupons", INITIAL_COUPONS),
        library_resources: readCollection<LibraryResourceDB[]>("library_resources", INITIAL_LIBRARY_RESOURCES),
        consultation_bookings: readCollection<ConsultationBookingDB[]>("consultation_bookings", []),
        project_inquiries: readCollection<ProjectInquiryDB[]>("project_inquiries", [])
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, type, data } = body;

    if (type === "consultation_services") {
      let currentServices = readCollection("consultation_services", INITIAL_CONSULTATION_SERVICES);

      if (action === "save") {
        const index = currentServices.findIndex((s: any) => s.id === data.id);
        if (index >= 0) {
          currentServices[index] = data;
        } else {
          currentServices.push(data);
        }
        writeCollection("consultation_services", currentServices);
        return NextResponse.json({ success: true, data: currentServices });
      }

      if (action === "delete") {
        currentServices = currentServices.filter((s: any) => s.id !== data.id);
        writeCollection("consultation_services", currentServices);
        return NextResponse.json({ success: true, data: currentServices });
      }
    }

    if (type === "coupons") {
      let currentCoupons = readCollection<CouponDB[]>("coupons", INITIAL_COUPONS);

      if (action === "save") {
        const index = currentCoupons.findIndex((c) => c.id === data.id || c.code.toUpperCase() === data.code.toUpperCase());
        if (index >= 0) {
          currentCoupons[index] = data;
        } else {
          currentCoupons.push(data);
        }
        writeCollection("coupons", currentCoupons);
        return NextResponse.json({ success: true, data: currentCoupons });
      }

      if (action === "delete") {
        currentCoupons = currentCoupons.filter((c) => c.id !== data.id && c.code.toUpperCase() !== data.code.toUpperCase());
        writeCollection("coupons", currentCoupons);
        return NextResponse.json({ success: true, data: currentCoupons });
      }
    }

    if (type === "library_resources") {
      let currentLib = readCollection<LibraryResourceDB[]>("library_resources", INITIAL_LIBRARY_RESOURCES);

      if (action === "save") {
        const index = currentLib.findIndex((item) => item.id === data.id || item.slug === data.slug);
        if (index >= 0) {
          currentLib[index] = data;
        } else {
          currentLib.unshift(data);
        }
        writeCollection("library_resources", currentLib);
        return NextResponse.json({ success: true, data: currentLib });
      }

      if (action === "delete") {
        currentLib = currentLib.filter((item) => item.id !== data.id && item.slug !== data.slug);
        writeCollection("library_resources", currentLib);
        return NextResponse.json({ success: true, data: currentLib });
      }
    }

    if (type === "consultation_bookings") {
      let currentBookings = readCollection<ConsultationBookingDB[]>("consultation_bookings", []);

      if (action === "update_status") {
        currentBookings = currentBookings.map((b) => (b.id === data.id ? { ...b, status: data.status } : b));
        writeCollection("consultation_bookings", currentBookings);
        return NextResponse.json({ success: true, data: currentBookings });
      }

      if (action === "delete") {
        currentBookings = currentBookings.filter((b) => b.id !== data.id);
        writeCollection("consultation_bookings", currentBookings);
        return NextResponse.json({ success: true, data: currentBookings });
      }
    }

    if (type === "project_inquiries") {
      let currentInquiries = readCollection<ProjectInquiryDB[]>("project_inquiries", []);

      if (action === "update_status") {
        currentInquiries = currentInquiries.map((iq) => (iq.id === data.id ? { ...iq, status: data.status } : iq));
        writeCollection("project_inquiries", currentInquiries);
        return NextResponse.json({ success: true, data: currentInquiries });
      }

      if (action === "delete") {
        currentInquiries = currentInquiries.filter((iq) => iq.id !== data.id);
        writeCollection("project_inquiries", currentInquiries);
        return NextResponse.json({ success: true, data: currentInquiries });
      }
    }

    return NextResponse.json({ success: false, error: "Invalid action or type" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
