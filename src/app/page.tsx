import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IntroAnimation } from "@/components/hero/IntroAnimation";
import { ExpandableHero } from "@/components/hero/ExpandableHero";
import { IntroSection } from "@/components/home/IntroSection";
import { InteractiveEcosystem } from "@/components/home/InteractiveEcosystem";
import { DayInFieldStory } from "@/components/home/DayInFieldStory";
import { PeopleStories } from "@/components/home/PeopleStories";
import { FounderSection } from "@/components/home/FounderSection";
import { InteractiveFieldMap } from "@/components/home/InteractiveFieldMap";
import { PlatformTeaser } from "@/components/home/PlatformTeaser";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CustomCursor } from "@/components/layout/CustomCursor";

export const metadata = {
  title: "ODCONES PROJECTS | Where Land, Water & People Meet",
  description: "ODCONES PROJECTS: Leading Agriculture, Horticulture, Fisheries, Aquaculture, Animal Husbandry & Rural Development Digital Platform.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden">
      <CustomCursor />
      <IntroAnimation />
      <Header />

      {/* 02. Six-Sector Immersive Hero ("WHERE LAND, WATER & PEOPLE MEET") */}
      <ExpandableHero />

      {/* 04. Introduction ("WE WORK WHERE LIFE GROWS") */}
      <IntroSection />

      {/* 03. Agricultural Ecosystem Network */}
      <InteractiveEcosystem />

      {/* 05. A Day in the Field Storytelling Timeline */}
      <DayInFieldStory />

      {/* 12. Technology as an Enabler (FieldOS Platform Teaser) */}
      <PlatformTeaser />

      {/* 13. The People Behind the Systems (Human Stories) */}
      <PeopleStories />

      {/* 14. Interactive Field Map (Odisha & Eastern India Footprint) */}
      <InteractiveFieldMap />

      {/* 16. Impact Statistics & Live Counters */}
      <ImpactCounters />

      {/* 17. Founder & Vision (Anshuman Mohapatra — Founder) */}
      <FounderSection />

      {/* 18. Start A Project & Final CTA */}
      <FinalCTA />

      <Footer />
    </main>
  );
}
