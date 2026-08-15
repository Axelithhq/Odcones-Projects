export type Language = "en" | "or";

export const locales: Language[] = ["en", "or"];

export const defaultLocale: Language = "en";

export function isValidLocale(value: string | undefined): value is Language {
  return value === "en" || value === "or";
}

export function getLocaleFromPath(pathname: string): Language | null {
  const segment = pathname.split("/")[1];
  return isValidLocale(segment) ? segment : null;
}

export function getPathWithLocale(pathname: string, locale: Language): string {
  const segment = pathname.split("/")[1];
  if (isValidLocale(segment)) {
    return `/${locale}${pathname.slice(segment.length + 1)}`;
  }
  const rest = pathname === "/" ? "" : pathname;
  return `/${locale}${rest}`;
}

export function stripLocale(pathname: string): string {
  const segment = pathname.split("/")[1];
  if (isValidLocale(segment)) {
    const rest = pathname.slice(segment.length + 1);
    return rest === "" ? "/" : rest;
  }
  return pathname;
}
