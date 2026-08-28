"use client";

import React from "react";
import { Users, Sprout, Fish, Flower2, ShieldCheck } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import { pickOr } from "@/lib/localize";

interface PersonStory {
  name: string;
  roleKey: string;
  location: string;
  image: string;
  quote: [string, string];
  impact: [string, string];
}

const PEOPLE_STORIES: PersonStory[] = [
  {
    name: "Subash Sahoo",
    roleKey: "people.roleFisher",
    location: "Hirakud Reservoir, Sambalpur",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=600",
    quote: [
      "Floating HDPE cage farming changed our lives. Instead of hoping for wild fish, we manage 24 cages that produce predictable harvests every 6 months.",
      "ଫ୍ଲୋଟିଙ୍ଗ ଏଚଡିପିଇ କେଜ୍ ଚାଷ ଆମ ଜୀବନ ବଦଳାଇ ଦେଇଛି। ଜଙ୍ଗଲୀ ମାଛ ଆଶା କରିବା ବଦଳରେ, ଆମେ ୨୪ଟି କେଜ୍ ପରିଚାଳନା କରୁଛୁ ଯାହା ପ୍ରତି ୬ ମାସରେ ଆନୁମାନିକ ଫସଲ ଉତ୍ପାଦନ କରେ।"
    ],
    impact: ["+280% Household Income", "+୨୮୦% ଘରୋଇ ଆୟ"]
  },
  {
    name: "Kamala Pujari",
    roleKey: "people.roleGrower",
    location: "Koraput, Odisha",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=600",
    quote: [
      "Our polyhouses protect crops from heavy summer heat and frost. We now cultivate yellow capsicum and strawberries sold directly to retail buyers.",
      "ଆମର ପଲିହାଉସ ଫସଲକୁ ପ୍ରବଳ ଗ୍ରୀଷ୍ମ ପ୍ରବାହ ଓ କାକରରୁ ରକ୍ଷା କରେ। ଏବେ ଆମେ ହଳଦିଆ କ୍ୟାପ୍ସିକମ୍ ଓ ଷ୍ଟ୍ରବେରୀ ଚାଷ କରୁଛୁ ଯାହା ସିଧାସଳଖ ଖୁଚୁରା କ୍ରେତାଙ୍କୁ ବିକ୍ରି ହୁଏ।"
    ],
    impact: ["Year-Round Crop Income", "ବର୍ଷସାରା ଫସଲ ଆୟ"]
  },
  {
    name: "Dharmananda Jena",
    roleKey: "people.roleOperator",
    location: "Bhadrak, Odisha",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600",
    quote: [
      "With IoT oxygen sensors and zero-water exchange Biofloc tanks, we achieve superior fish growth with zero pathogen outbreaks.",
      "ଆଇଓଟି ଅମ୍ଳଜାନ ସେନ୍ସର ଓ ଶୂନ୍ୟ-ଜଳ ବିନିମୟ ବାୟୋଫ୍ଲୋକ୍ ଟାଙ୍କି ଦ୍ୱାରା, ଆମେ କୌଣସି ରୋଗଜୀବାଣୁ ଆକ୍ରମଣ ବିନା ଉତ୍ତମ ମାଛ ବୃଦ୍ଧି ହାସଲ କରୁ।"
    ],
    impact: ["92% Water Conserved", "୯୨% ଜଳ ସଂରକ୍ଷିତ"]
  }
];

export function PeopleStories() {
  const { t, language } = useTranslation();
  const pick = (pair: [string, string]) => pickOr(pair[0], pair[1], language);

  return (
    <section className="py-24 bg-theme-base text-sand-50 relative border-b border-forest-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Users className="w-3.5 h-3.5" />
            <span>{t("people.badge")}</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            {t("people.title")}
          </h2>
          <p className="text-sand-200/70 text-sm leading-relaxed">
            {t("people.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PEOPLE_STORIES.map((person, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-forest-900/40 border border-forest-800 space-y-5 hover:border-forest-600/50 transition-all flex flex-col justify-between"
              data-cursor-text="STORY"
            >
              <div className="space-y-4">
                <div className="h-40 rounded-2xl overflow-hidden relative">
                  <img src={person.image} alt={`Field scene: ${t(person.roleKey)} — ${person.location}`} className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-theme-base/80 backdrop-blur-md text-[10px] font-bold text-harvest-400">
                    {person.location}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-sand-50">{person.name}</h3>
                  <span className="text-xs text-forest-300 font-semibold block">{t(person.roleKey)}</span>
                </div>

                <p className="text-xs text-sand-200/80 leading-relaxed italic font-light">
                  "{pick(person.quote)}"
                </p>
              </div>

              <div className="pt-4 border-t border-forest-800/60 flex items-center justify-between text-xs">
                <span className="text-[10px] font-bold text-sand-200/60 uppercase">{t("people.outcome")}:</span>
                <span className="font-bold text-harvest-400 font-display">{pick(person.impact)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto pt-2">
          <p className="text-xs text-sand-200/50 leading-relaxed">{t("people.note")}</p>
        </div>
      </div>
    </section>
  );
}
