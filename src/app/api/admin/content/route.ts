import { NextResponse } from "next/server";
import { FEATURED_PROJECTS } from "@/data/projectsData";
import { SERVICES } from "@/data/servicesData";
import { ARTICLES } from "@/data/insightsData";
import { SCHEMES } from "@/data/schemesData";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  switch (type) {
    case "projects":
      return NextResponse.json({ success: true, data: FEATURED_PROJECTS });
    case "services":
      return NextResponse.json({ success: true, data: SERVICES });
    case "insights":
      return NextResponse.json({ success: true, data: ARTICLES });
    case "schemes":
      return NextResponse.json({ success: true, data: SCHEMES });
    default:
      return NextResponse.json({
        success: true,
        data: {
          projects: FEATURED_PROJECTS,
          services: SERVICES,
          insights: ARTICLES,
          schemes: SCHEMES,
        },
      });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type, entity } = body;

    if (!type || !entity) {
      return NextResponse.json({ success: false, error: "Type and entity required" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `Entity created/updated successfully in ${type}`,
      data: entity,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    const id = searchParams.get("id");

    if (!type || !id) {
      return NextResponse.json({ success: false, error: "Type and id required" }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: `Entity ${id} deleted successfully from ${type}`,
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
