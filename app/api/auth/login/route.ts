import { NextResponse } from "next/server";
import { signToken } from "@/backend/auth";
import { verifyAdminCredentials } from "@/backend/adminDb";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, message: "Email and password are required" }, { status: 400 });
    }

    const isValid = await verifyAdminCredentials(email, password);

    if (isValid) {
      const token = await signToken({ email });
      
      const cookieStore = await cookies();
      cookieStore.set("admin-session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      return NextResponse.json({ success: true, message: "Login successful" });
    }

    return NextResponse.json({ success: false, message: "Invalid email or password" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
