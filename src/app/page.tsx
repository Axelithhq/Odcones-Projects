import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CinematicProjectHero } from "@/components/hero/CinematicProjectHero";
import { FieldToFinance } from "@/components/home/FieldToFinance";
import { EngineeringBlueprints } from "@/components/home/EngineeringBlueprints";
import { SectorExplorer } from "@/components/home/SectorExplorer";
import { EditorialServices } from "@/components/home/EditorialServices";
import { FieldKit } from "@/components/home/FieldKit";
import { DigitalField } from "@/components/home/DigitalField";
import { FounderSection } from "@/components/home/FounderSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { NewsletterModal } from "@/components/layout/NewsletterModal";

export const metadata = {
  title: "ODCONS PROJECTS | Turning Ideas into Bankable & Sustainable Projects",
  description: "ODCONS PROJECTS: Premier project consultancy & technical services across Agriculture, Fisheries, Aquaculture, Horticulture, Food Processing, Cold Chain, and Rural Infrastructure.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-theme-base text-sand-100 relative has-custom-cursor overflow-x-hidden">
      <CustomCursor />
      <NewsletterModal />
      <Header />

      {/* 01. Cinematic Project Hero ("TURNING IDEAS INTO BANKABLE & SUSTAINABLE PROJECTS") */}
      <CinematicProjectHero />

      {/* 02. FROM FIELD TO FINANCE (Signature 7-Stage Pipeline Storytelling) */}
      <FieldToFinance />

      {/* 03. FULL-SCREEN SECTOR EXPLORER (Agriculture, Fisheries, Food Processing, Cold Chain) */}
      <SectorExplorer />

      {/* 04. ANIMATED ENGINEERING BLUEPRINTS & CAD DRAWINGS */}
      <EngineeringBlueprints />

      {/* 05. EDITORIAL SERVICE SYSTEM (DPR, Feasibility, Engineering, Financial Modeling) */}
      <EditorialServices />

      {/* 06. WHAT MOVES THE FIELD (3D Equipment Kit Arrangement) */}
      <FieldKit />

      {/* 07. ODCONS FIELDOS (3D Spatial Device Showcase) */}
      <DigitalField />

      {/* 08. FOUNDER & VISION (Anshuman Mohapatra — Founder) */}
      <FounderSection />

      {/* 09. START A PROJECT & FINAL CTA */}
      <FinalCTA />

      <Footer />
    </main>
  );
}
