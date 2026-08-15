import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isValidLocale, locales } from "@/lib/i18n-config";

const LOCALE_PATTERN = /^\/(en|or)(\/|$)/;

function isStaticRequest(pathname: string): boolean {
  return (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname === "/favicon.ico" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    /\.(png|jpe?g|svg|gif|webp|avif|ico|woff2?|ttf|otf|eot|css|js|json|txt|xml)$/i.test(pathname)
  );
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isStaticRequest(pathname)) {
    return NextResponse.next();
  }

  if (LOCALE_PATTERN.test(pathname)) {
    const locale = pathname.split("/")[1];
    if (isValidLocale(locale)) {
      const response = NextResponse.next();
      response.cookies.set("odcones_locale", locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
      response.headers.set("x-odcones-locale", locale);
      return response;
    }
  }

  const savedLocale = request.cookies.get("odcones_locale")?.value;
  const targetLocale = isValidLocale(savedLocale) ? savedLocale : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|gif|webp|avif|ico|woff2?|ttf|otf|eot|css|js|json|txt|xml)$).*)",
  ],
};
