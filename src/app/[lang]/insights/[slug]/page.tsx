import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ARTICLES } from "@/data/insightsData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { requireLang, getServerT } from "@/lib/page-utils";
import { getPathWithLocale } from "@/lib/i18n-config";
import { pickOr } from "@/lib/localize";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";

export async function generateStaticParams() {
  const langParams = [
    { lang: "en" as const },
    { lang: "or" as const },
  ];
  return ARTICLES.flatMap((article) =>
    langParams.map((lang) => ({ ...lang, slug: article.slug }))
  );
}

export default async function ArticleDetailPage(props: { params: Promise<{ lang: string; slug: string }> }) {
  const params = await props.params;
  const lang = requireLang(params.lang);
  const t = getServerT(lang);
  const article = ARTICLES.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const title = pickOr(article.title, article.title_or, lang);
  const content = pickOr(article.content, article.content_or, lang);

  return (
    <main className="min-h-screen bg-theme-base text-theme-text relative has-custom-cursor overflow-x-hidden pt-20">
      <CustomCursor />
      <Header />

      <section className="py-20 bg-theme-base border-b border-forest-800/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link href={getPathWithLocale("/insights", lang)} className="inline-flex items-center gap-2 text-xs font-bold text-forest-300 hover:text-sand-50 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>{t("insights.backToInsights")}</span>
          </Link>

          <span className="px-3 py-1 rounded-full bg-harvest-500/20 border border-harvest-400/40 text-xs font-bold text-harvest-300 uppercase font-display inline-block">
            {article.category}
          </span>

          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-sand-50 tracking-tight leading-tight">
            {title}
          </h1>

          <div className="flex items-center gap-6 text-xs text-theme-text-muted border-t border-forest-800/40 pt-4">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-harvest-400" /> {article.author}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-harvest-400" /> {article.read_time}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-harvest-400" /> {article.published_at}</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-theme-base">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="h-96 rounded-3xl overflow-hidden border border-forest-800">
            <img src={article.image_url} alt={title} className="w-full h-full object-cover" />
          </div>

          <div className="p-8 rounded-3xl bg-forest-900/40 border border-forest-800/60 prose prose-invert max-w-none text-xs sm:text-sm text-theme-text-muted leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
