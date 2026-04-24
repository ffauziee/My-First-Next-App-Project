import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middleware/withAuth";

function mainMiddleware(request: NextRequest) {
  return NextResponse.next();
}

export default withAuth(mainMiddleware, ["/profile"]);

export const config = {
  matcher: ["/profile", "/products", "/about", "/products/:path*"],
};