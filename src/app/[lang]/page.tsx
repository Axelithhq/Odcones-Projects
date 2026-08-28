import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IntroAnimation } from "@/components/hero/IntroAnimation";
import { ExpandableHero } from "@/components/hero/ExpandableHero";
import { IntroSection } from "@/components/home/IntroSection";
import { FromFieldToFuture } from "@/components/home/FromFieldToFuture";
import { DayInFieldStory } from "@/components/home/DayInFieldStory";
import { FieldKit } from "@/components/home/FieldKit";
import { DigitalField } from "@/components/home/DigitalField";
import { OneEcosystem } from "@/components/home/OneEcosystem";
import { PeopleStories } from "@/components/home/PeopleStories";
import { FounderSection } from "@/components/home/FounderSection";
import { InteractiveFieldMap } from "@/components/home/InteractiveFieldMap";
import { PlatformTeaser } from "@/components/home/PlatformTeaser";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { generateLangParams, requireLang } from "@/lib/page-utils";

export const metadata = {
  title: "ODCONS PROJECTS | Where Land, Water & People Meet",
  description: "ODCONS PROJECTS: Leading Agriculture, Horticulture, Fisheries, Aquaculture, Animal Husbandry & Rural Development Digital Platform.",
};

export function generateStaticParams() {
  return generateLangParams();
}

export default async function HomePage(props: { params: Promise<{ lang: string }> }) {
  requireLang((await props.params).lang);

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor overflow-x-hidden">
      <CustomCursor />
      <IntroAnimation />
      <Header />

      {/* 01. Six-Sector Immersive Hero ("WHERE LAND, WATER & PEOPLE MEET") */}
      <ExpandableHero />

      {/* 02. Introduction ("WE WORK WHERE LIFE GROWS") */}
      <IntroSection />

      {/* 04. FROM THE FIELD TO THE FUTURE (Interactive 3D Composition & Sector Switcher) */}
      <FromFieldToFuture />

      {/* 05. A Day in the Field Storytelling Timeline */}
      <DayInFieldStory />

      {/* 06. WHAT MOVES THE FIELD (3D Equipment Kit Arrangement) */}
      <FieldKit />

      {/* 07. ONE CONNECTED ECOSYSTEM (Pipeline Visualizer) */}
      <OneEcosystem />

      {/* 08. ODCONS FIELDOS (3D Spatial Device Showcase) */}
      <DigitalField />

      {/* 10. REAL FIELD → DIGITAL FIELD (Telemetry & Advisory Preview) */}
      <PlatformTeaser />

      {/* 12. PEOPLE OF THE FIELD (Documentary Human Stories) */}
      <PeopleStories />

      {/* 13. INTERACTIVE FIELD MAP (Regional Footprint) */}
      <InteractiveFieldMap />

      {/* 14. MEASURABLE IMPACT (Audited Statistics) */}
      <ImpactCounters />

      {/* 15. FOUNDER & VISION (Anshuman Mohapatra — Founder) */}
      <FounderSection />

      {/* 16. START A PROJECT & FOOTER */}
      <FinalCTA />

      <Footer />
    </main>
  );
}
