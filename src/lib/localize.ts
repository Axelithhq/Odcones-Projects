export type Locale = "en" | "or";

export function pickOr(en: string, or?: string, lang?: string): string {
  if (lang === "or" && or) return or;
  return en;
}

export function pickOrArray<T>(en: T[], or?: T[], lang?: string): T[] {
  if (lang === "or" && or) return or;
  return en;
}

export function pickOrRecord(
  en: Record<string, string>,
  or?: Record<string, string>,
  lang?: string
): Record<string, string> {
  if (lang === "or" && or) return or;
  return en;
}
