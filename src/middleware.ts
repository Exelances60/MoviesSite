// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "tr"],
  defaultLocale: "en",
});

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get("user")?.value;
  if (!cookies) {
    return NextResponse.rewrite(`${request.nextUrl.origin}/en`);
  }

  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
