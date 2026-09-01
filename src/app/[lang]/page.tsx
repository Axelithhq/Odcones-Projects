import React from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { IntroAnimation } from "@/components/hero/IntroAnimation";
import { ExpandableHero } from "@/components/hero/ExpandableHero";
import { IntroSection } from "@/components/home/IntroSection";
import { FromFieldToFuture } from "@/components/home/FromFieldToFuture";
import { AttractiveConsultingSection } from "@/components/home/AttractiveConsultingSection";
import { DigitalField } from "@/components/home/DigitalField";
import { ImpactCounters } from "@/components/home/ImpactCounters";
import { FinalCTA } from "@/components/home/FinalCTA";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { generateLangParams, requireLang } from "@/lib/page-utils";

export const metadata = {
  title: "ODCONS PROJECTS | Premier Agriculture & Agribusiness Consultancy",
  description: "ODCONS PROJECTS: Premier project consultancy & technical services across Agriculture, Fisheries, Aquaculture, Horticulture, Food Processing, Cold Chain, and Rural Infrastructure.",
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

      {/* 01. Six-Sector Immersive Hero */}
      <ExpandableHero />

      {/* 02. Introduction */}
      <IntroSection />

      {/* 03. FROM THE FIELD TO THE FUTURE (8 Integrated Sector Slides & Composition) */}
      <FromFieldToFuture />

      {/* 04. NEW ATTRACTIVE CONSULTING SECTION (Core Services, 13 Industries, Lifecycle & Why ODCONS) */}
      <AttractiveConsultingSection />

      {/* 05. AQUA BANDHU 3D SPATIAL DEVICE SHOWCASE */}
      <DigitalField />

      {/* 06. MEASURABLE IMPACT STATISTICS */}
      <ImpactCounters />

      {/* 07. START A PROJECT CTA & FOOTER */}
      <FinalCTA />

      <Footer />
    </main>
  );
}
