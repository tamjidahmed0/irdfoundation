
import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

 
  if (pathname === "/" ) {
    const url = request.nextUrl.clone();
    url.pathname = "/duas";
    url.search = "?cat=1";
    return NextResponse.redirect(url);
  }

  // Allow other paths to proceed as normal
  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: "/",
};
