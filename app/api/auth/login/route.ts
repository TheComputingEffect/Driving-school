import { NextResponse } from "next/server";
import { rateLimit, getIp } from "@/backend/rateLimit";
import { signToken } from "@/backend/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const ip = getIp(request);
    if (!rateLimit(`login_${ip}`, 5, 60000)) {
      return NextResponse.json({ success: false, message: "Too many login attempts. Please try again later." }, { status: 429 });
    }

    const { password } = await request.json();

    if (!password) {
      return NextResponse.json({ success: false, message: "Password is required" }, { status: 400 });
    }

    const isValid = password === process.env.ADMIN_PASSWORD;

    if (isValid) {
      const token = await signToken({ admin: true });
      
      const cookieStore = await cookies();
      cookieStore.set("kpd-admin-session", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
      });

      return NextResponse.json({ success: true, message: "Login successful" });
    }

    return NextResponse.json({ success: false, message: "Incorrect password." }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
