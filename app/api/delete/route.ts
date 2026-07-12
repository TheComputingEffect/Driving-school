import { NextResponse } from "next/server";
import { deleteMedia } from "@/backend/mediaDb";
import { deleteFromCloudinary } from "@/backend/cloudinary";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { rateLimit, getIp } from "@/backend/rateLimit";

const getSecretKey = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) return null;
  return new TextEncoder().encode(secret);
};

export async function POST(request: Request) {
  try {
    // Secondary Auth Check (Defense in Depth)
    const cookieStore = await cookies();
    const token = cookieStore.get("kpd-admin-session")?.value;
    if (!token) return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    const secret = getSecretKey();
    if (!secret) return NextResponse.json({ success: false, message: "Server configuration error" }, { status: 500 });
    try {
      await jwtVerify(token, secret);
    } catch (e) {
      return NextResponse.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    // Rate Limiting
    const ip = getIp(request);
    if (!rateLimit(`delete_${ip}`, 20, 60000)) {
      return NextResponse.json({ success: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }

    const body = await request.json();
    const id = body.id;

    if (!id || typeof id !== "string" || id.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Invalid or missing id" }, { status: 400 });
    }

    const deletedEntry = await deleteMedia(id);

    // Delete from Cloudinary if it exists
    if (deletedEntry && deletedEntry.public_id) {
      const resourceType = deletedEntry.type === "video" ? "video" : "image";
      await deleteFromCloudinary(deletedEntry.public_id, resourceType);
    }

    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
