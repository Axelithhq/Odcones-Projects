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
  const { pathname } = request.nextUrl;

  if (isStaticRequest(pathname)) {
    return NextResponse.next();
  }

  const isAdminRoute =
    pathname.includes("/admin/leads") ||
    pathname.includes("/admin/campaigns") ||
    (pathname.includes("/admin") && pathname !== "/en/admin" && pathname !== "/or/admin" && pathname !== "/admin");

  if (isAdminRoute) {
    const session = request.cookies.get("odcons_admin_session")?.value;
    if (!session) {
      const locale = extractLocale(pathname) || defaultLocale;
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = `/${locale}/admin`;
      return NextResponse.redirect(loginUrl);
    }
  }

  if (LOCALE_PATTERN.test(pathname)) {
    const locale = pathname.split("/")[1];
    if (isValidLocale(locale)) {
      const response = NextResponse.next();
      response.cookies.set("odcons_locale", locale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
        sameSite: "lax",
      });
      response.headers.set("x-odcons-locale", locale);
      return response;
    }
  }

  const savedLocale = request.cookies.get("odcons_locale")?.value;
  const targetLocale = isValidLocale(savedLocale) ? savedLocale : defaultLocale;

  const url = request.nextUrl.clone();
  url.pathname = `/${targetLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

function extractLocale(pathname: string): string | null {
  const match = pathname.match(LOCALE_PATTERN);
  return match ? match[1] : null;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|svg|gif|webp|avif|ico|woff2?|ttf|otf|eot|css|js|json|txt|xml)$).*)",
  ],
};
