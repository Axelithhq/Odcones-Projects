"use client";

import React from "react";
import { Users, Sprout, Fish, Flower2, ShieldCheck } from "lucide-react";

interface PersonStory {
  name: string;
  role: string;
  location: string;
  image: string;
  quote: string;
  impact: string;
}

const PEOPLE_STORIES: PersonStory[] = [
  {
    name: "Subash Sahoo",
    role: "Inland Fishermen Cooperative Lead",
    location: "Hirakud Reservoir, Sambalpur",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    quote: "Floating HDPE cage farming changed our lives. Instead of hoping for wild fish, we manage 24 cages that produce predictable harvests every 6 months.",
    impact: "+280% Household Income"
  },
  {
    name: "Kamala Pujari",
    role: "Tribal Polyhouse Horticulture Grower",
    location: "Koraput, Odisha",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
    quote: "Our polyhouses protect crops from heavy summer heat and frost. We now cultivate yellow capsicum and strawberries sold directly to retail buyers.",
    impact: "Year-Round Crop Income"
  },
  {
    name: "Dharmananda Jena",
    role: "Biofloc Aquaculture Operator",
    location: "Bhadrak, Odisha",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=1200",
    quote: "With IoT oxygen sensors and zero-water exchange Biofloc tanks, we achieve superior fish growth with zero pathogen outbreaks.",
    impact: "92% Water Conserved"
  }
];

export function PeopleStories() {
  return (
    <section className="py-24 bg-forest-950 text-sand-50 relative border-b border-forest-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/80 border border-forest-500/30 text-xs font-bold uppercase tracking-widest text-harvest-400">
            <Users className="w-3.5 h-3.5" />
            <span>HUMAN STORIES FROM THE FIELD</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight">
            The People Behind The Systems
          </h2>
          <p className="text-sand-200/70 text-sm leading-relaxed">
            Real voices from the farmers, fisherfolk, aquaculture operators, and community leaders who sustain our agricultural and aquatic ecosystems.
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
                <div className="h-56 rounded-2xl overflow-hidden relative">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-forest-950/80 backdrop-blur-md text-[10px] font-bold text-harvest-400">
                    {person.location}
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg text-sand-50">{person.name}</h3>
                  <span className="text-xs text-forest-300 font-semibold block">{person.role}</span>
                </div>

                <p className="text-xs text-sand-200/80 leading-relaxed italic font-light">
                  "{person.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-forest-800/60 flex items-center justify-between text-xs">
                <span className="text-[10px] font-bold text-sand-200/60 uppercase">OUTCOME:</span>
                <span className="font-bold text-harvest-400 font-display">{person.impact}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
