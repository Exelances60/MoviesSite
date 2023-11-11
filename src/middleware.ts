import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest, res: NextResponse) {
  let cookie = request.cookies.get("user");
  if (cookie === undefined) {
    return NextResponse.redirect(`${request.nextUrl.origin}`);
  }
}

export const config = {
  matcher: "/MoviePage/:path*",
};
