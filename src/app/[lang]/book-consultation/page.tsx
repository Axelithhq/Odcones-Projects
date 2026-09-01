import React from "react";
import { BookConsultationClient } from "@/components/consultation/BookConsultationClient";
import { generateLangParams, requireLang } from "@/lib/page-utils";
import type { Language } from "@/lib/i18n-config";

export const metadata = {
  title: "Book Technical Consultation | ODCONS PROJECTS",
  description: "Schedule a 1-on-1 project planning session with Founder Anshuman Mohapatra & ODCONS engineering team.",
};

export function generateStaticParams() {
  return generateLangParams();
}

export default async function BookConsultationPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = requireLang(params.lang) as Language;

  return <BookConsultationClient lang={lang} />;
}
