import type { Metadata } from "next";
import "./globals.css";
import { TranslationProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "ODCONES PROJECTS | Sustainable Agriculture & Blue Economy",
  description: "ODCONES PROJECTS: Leading Agriculture, Horticulture, Fisheries, Aquaculture, Animal Husbandry & Rural Development Digital Platform.",
  keywords: ["Agriculture", "Fisheries", "Aquaculture", "Horticulture", "Animal Husbandry", "Water Conservation", "Odisha", "Agritech", "FieldOS"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-forest-950 text-sand-100">
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
