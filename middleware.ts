import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const getSecretKey = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect /admin/dashboard and all its sub-routes
  // Protect /api/upload and /api/delete
  const isProtectedAdminRoute = pathname.startsWith("/admin/dashboard");
  const isProtectedApiRoute = pathname.startsWith("/api/upload") || pathname.startsWith("/api/delete");

  if (isProtectedAdminRoute || isProtectedApiRoute) {
    const token = request.cookies.get("admin-session")?.value;

    if (!token) {
      if (isProtectedApiRoute) {
        return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    const secret = getSecretKey();
    if (!secret) {
      console.error("JWT_SECRET is missing");
      if (isProtectedApiRoute) {
        return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
      }
      return NextResponse.redirect(new URL("/admin", request.url));
    }

    try {
      // Verify the JWT token
      await jwtVerify(token, secret);
      return NextResponse.next();
    } catch (error) {
      // Invalid token
      if (isProtectedApiRoute) {
        return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
      }
      const response = NextResponse.redirect(new URL("/admin", request.url));
      response.cookies.delete("admin-session"); // Clear the invalid cookie
      return response;
    }
  }

  // Prevent logged-in admins from seeing the login page again
  if (pathname === "/admin") {
    const token = request.cookies.get("admin-session")?.value;
    if (token) {
      const secret = getSecretKey();
      if (secret) {
        try {
          await jwtVerify(token, secret);
          // If valid token exists, redirect to dashboard
          return NextResponse.redirect(new URL("/admin/dashboard/gallery", request.url));
        } catch (error) {
          // Token invalid, do nothing and let them see the login page
        }
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/upload",
    "/api/delete",
  ],
};
