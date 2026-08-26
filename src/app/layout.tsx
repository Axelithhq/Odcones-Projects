import type { Metadata } from "next";
import "./globals.css";
import { TranslationProvider } from "@/lib/i18n";
import { ThemeProvider } from "@/lib/theme";

export const metadata: Metadata = {
  title: "ODCONS PROJECTS | Turning Ideas into Bankable & Sustainable Projects",
  description: "ODCONS PROJECTS: Premier project consultancy & technical services across Agriculture, Fisheries, Aquaculture, Horticulture, Food Processing, Cold Chain, and Rural Infrastructure.",
  keywords: ["ODCONS PROJECTS", "DPR Consultancy", "Feasibility Study", "Agriculture Projects", "Fisheries Consultancy", "Aquaculture", "Anshuman Mohapatra"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark-mode" data-theme="dark">
      <body className="antialiased min-h-screen bg-forest-950 text-sand-100">
        <ThemeProvider>
          <TranslationProvider>
            {children}
          </TranslationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
