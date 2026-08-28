import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, locales } from "@/lib/i18n-config";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://odcons.com";
  const isOr = lang === "or";

  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${baseUrl}/${locale}`])
  ) as Record<string, string>;

  return {
    title: isOr
      ? "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ | ସ୍ଥାୟୀ କୃଷି ଓ ବ୍ଲୁ ଇକୋନୋମି"
      : "ODCONS PROJECTS | Sustainable Agriculture & Blue Economy",
    description: isOr
      ? "ଓଡକୋନ୍ସ ପ୍ରୋଜେକ୍ଟସ: କୃଷି, ଉଦ୍ୟାନ କୃଷି, ମତ୍ସ୍ୟ, ଜଳଚର ଚାଷ, ପଶୁପାଳନ ଓ ଗ୍ରାମୀଣ ବିକାଶର ଅଗ୍ରଣୀ ଡିଜିଟାଲ ପ୍ଲାଟଫର୍ମ।"
      : "ODCONS PROJECTS: Leading Agriculture, Horticulture, Fisheries, Aquaculture, Animal Husbandry & Rural Development Digital Platform.",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages,
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isValidLocale(lang)) {
    notFound();
  }
  return <>{children}</>;
}
