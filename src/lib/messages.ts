import enMessages from "@/messages/en.json";
import orMessages from "@/messages/or.json";
import { type Language } from "./i18n-config";

export type Messages = Record<string, string>;

export function flattenMessages(obj: Record<string, unknown>, prefix = ""): Messages {
  const out: Messages = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object") {
      Object.assign(out, flattenMessages(value as Record<string, unknown>, fullKey));
    } else if (typeof value === "string") {
      out[fullKey] = value;
    }
  }
  return out;
}

const CACHE: Record<Language, Messages> = {
  en: flattenMessages(enMessages),
  or: flattenMessages(orMessages),
};

export function getDictionary(locale: Language): Messages {
  return CACHE[locale];
}

export function translate(dict: Messages, key: string, fallback?: string): string {
  return dict[key] ?? fallback ?? key;
}
