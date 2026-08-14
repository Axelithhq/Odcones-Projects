import { ArticleItem } from "@/lib/supabase";

export const ARTICLES: ArticleItem[] = [
  {
    id: "art-1",
    title: "Scaling Reservoir Cage Aquaculture in Eastern India: Operational & Technical Lessons",
    slug: "scaling-reservoir-cage-aquaculture-eastern-india",
    category: "Aquaculture",
    excerpt: "How HDPE floating cage installations are unlocking multi-fold productivity for reservoir fisherfolk while protecting wild aquatic biodiversity.",
    content: `
      ### The Blue Economy Imperative

      Inland reservoirs in India represent over 3.15 million hectares of underutilized water surface. Historically, harvest yields averaged less than 50 kg/hectare/year under extensive stocking regimes. The introduction of high-density floating cage culture has fundamentally transformed this economic dynamic.

      #### Key Engineering Considerations:
      1. **Frame Resilience**: Using 100% virgin High-Density Polyethylene (HDPE) frame pipes capable of handling wave heights of up to 1.5 meters during monsoons.
      2. **Aeration Dynamics**: Deploying solar-hybrid venturi aerators to prevent oxygen crashes during summer water thermal stratification.
      3. **Cooperative Governance**: Transitioning local fisherfolk from individual netters to cage management cooperative shareholders.

      #### Results from Hirakud Reservoir Field Trials:
      Over a 14-month study period across 240 cages, average stocking densities achieved 35 kg/m³ with a Feed Conversion Ratio (FCR) of 1.14. Mortality dropped from 22% in open water stocking to under 4.2% in controlled cages.
    `,
    read_time: "6 min read",
    image_url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1200",
    author: "Dr. S. K. Mahapatra, Head of Blue Economy Research",
    published_at: "2024-11-12"
  },
  {
    id: "art-2",
    title: "Climate-Smart Micro-Irrigation & Sub-Surface Tile Drainage in Coastal Saline Lands",
    slug: "climate-smart-micro-irrigation-coastal-saline-lands",
    category: "Water & Soil",
    excerpt: "Restoring cyclone-affected coastal agricultural fields through subsurface salt leaching and solar-powered drip fertigation.",
    content: `
      ### Reclaiming Saline Degraded Coastal Soils

      Coastal agrarian zones frequently face dual threats: seawater intrusion during cyclones and seasonal drought during summer. Soil salinity levels exceeding 8 dS/m render traditional rice varieties unproductive.

      #### Solution Architecture:
      - **Sub-Surface Drainage (SSD)**: Perforated corrugated PVC pipes wrapped in synthetic filter envelopes laid at 1.2m depth with 15m lateral spacing.
      - **Leaching Protocols**: Trapping monsoon rainwater in farm ponds and using it to flush soluble salts into drainage collectors.
      - **Bio-char Soil Conditioners**: Incorporating paddy-husk biochar to increase soil cation exchange capacity (CEC).

      #### Economic Outcomes:
      Yields of local paddy restored from 1.2 MT/ha to 4.4 MT/ha in 2 seasons, while cropping intensity expanded from single-crop to double-crop with pulses.
    `,
    read_time: "8 min read",
    image_url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200",
    author: "Er. Ramesh Chandra Das, Lead Hydrologist",
    published_at: "2024-10-28"
  },
  {
    id: "art-3",
    title: "High-Density Polyhouse Horticulture: Optimizing Micro-Climate for Tribal Smallholders",
    slug: "high-density-polyhouse-horticulture-tribal-smallholders",
    category: "Horticulture",
    excerpt: "How protected cultivation structures are helping tribal farmers in hilly terrains earn year-round steady cash flow from high-value crops.",
    content: `
      ### Bridging the High-Value Market Gap

      Tribal farmers in high-altitude zones often suffer from poor market access and vulnerability to extreme weather. By introducing 500 sq. meter naturally ventilated polyhouses combined with solar micro-chillers, farmers can produce high-demand capsicum, Dutch roses, and seedless cucumbers.

      #### Technical Highlights:
      - 200 micron UV-stabilized polyethylene films with anti-drip and anti-dust coatings.
      - Automated fertigation injection manifolds based on real-time soil electrical conductivity (EC) sensors.
      - Direct FPO aggregation models eliminating up to 4 layers of middleman margins.
    `,
    read_time: "5 min read",
    image_url: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200",
    author: "Priyanka Naik, Agronomy Specialist",
    published_at: "2024-09-15"
  }
];
