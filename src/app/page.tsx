import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IntroAnimation } from "@/components/hero/IntroAnimation";
import { ExpandableHero } from "@/components/hero/ExpandableHero";
import { IntroSection } from "@/components/home/IntroSection";
import { InteractiveEcosystem } from "@/components/home/InteractiveEcosystem";
import { PlatformTeaser } from "@/components/home/PlatformTeaser";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CustomCursor } from "@/components/layout/CustomCursor";

export const metadata = {
  title: "ODCONES PROJECTS | Premium Agriculture, Fisheries & Rural Development Platform",
  description: "ODCONES PROJECTS is an engineering and rural development organization advancing Agriculture, Horticulture, Fisheries, Aquaculture, Animal Husbandry, and Soil & Water Conservation.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-forest-950 text-sand-100 relative has-custom-cursor overflow-x-hidden">
      <CustomCursor />
      <IntroAnimation />
      <Header />
      <ExpandableHero />
      <IntroSection />
      <InteractiveEcosystem />
      <PlatformTeaser />
      <ImpactCounters />
      <FinalCTA />
      <Footer />
    </main>
  );
}
