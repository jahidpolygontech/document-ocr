import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const GuestRoutes = ["/login", "/forgot-password", "/reset-password"];

export function middleware(request: NextRequest) {

  const { pathname } = request.nextUrl;
  if (isStaticFile(pathname)) return;

  const isLogged =
    hasValidRefreshToken(request) || process.env.NODE_ENV === "development";
  const isGuestRoute = GuestRoutes.includes(pathname);
  const isBaseRoute = pathname == "/";

  if (isLogged && (isGuestRoute || isBaseRoute)) {
    return NextResponse.redirect(new URL("/dashboard", request.nextUrl));
  }

  if (!isLogged) {
    request.cookies.delete('logged_id');
    if (!isGuestRoute || isBaseRoute) {
      return NextResponse.redirect(new URL("/login", request.nextUrl));
    }
  }
}

const isStaticFile = (pathname: string) => {
  return pathname.endsWith('.png') || pathname.endsWith('.svg') || pathname.endsWith('.jpg');
} 

const hasValidRefreshToken = (request: NextRequest) => {
  if (!request.cookies.has("logged_id")) {
    return false;
  }

  const cookie = request.cookies.get("logged_id")?.value;
  const token = cookie ? JSON.parse(cookie).refreshToken : undefined;

  if (token == undefined) return false;

  const decoded = jwtDecode(token);
  if (Date.now() >= (decoded.exp ?? 0) * 1000) {
    return false;
  }

  return true;
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
