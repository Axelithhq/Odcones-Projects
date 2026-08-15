import { notFound } from "next/navigation";
import { isValidLocale, locales, type Language } from "./i18n-config";
import { getDictionary, translate } from "./messages";

export function generateLangParams() {
  return locales.map((lang) => ({ lang }));
}

export function requireLang(lang: string): Language {
  if (!isValidLocale(lang)) {
    notFound();
  }
  return lang;
}

export function getServerT(lang: Language) {
  const dict = getDictionary(lang);
  return (key: string, params?: Record<string, string>) => {
    const value = translate(dict, key);
    if (!params) return value;
    return Object.entries(params).reduce(
      (acc, [k, v]) => acc.replaceAll(`{${k}}`, v),
      value
    );
  };
}
