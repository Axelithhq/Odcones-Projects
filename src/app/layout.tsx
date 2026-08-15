import type { Metadata } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { isValidLocale, type Language } from "@/lib/i18n-config";
import { TranslationProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "ODCONES PROJECTS | Sustainable Agriculture & Blue Economy",
  description: "ODCONES PROJECTS: Leading Agriculture, Horticulture, Fisheries, Aquaculture, Animal Husbandry & Rural Development Digital Platform.",
  keywords: ["Agriculture", "Fisheries", "Aquaculture", "Horticulture", "Animal Husbandry", "Water Conservation", "Odisha", "Agritech", "FieldOS"],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get("odcones_locale")?.value;
  const lang = (isValidLocale(localeCookie) ? localeCookie : "en") as Language;

  return (
    <html lang={lang}>
      <body className="antialiased bg-forest-950 text-sand-100">
        <TranslationProvider locale={lang}>{children}</TranslationProvider>
      </body>
    </html>
  );
}
