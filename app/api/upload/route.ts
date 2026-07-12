import { NextResponse } from "next/server";
import { addMedia, MediaType } from "@/backend/mediaDb";
import { uploadToCloudinary } from "@/backend/cloudinary";
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
    if (!rateLimit(`upload_${ip}`, 20, 60000)) {
      return NextResponse.json({ success: false, message: "Too many requests. Please try again later." }, { status: 429 });
    }

    const formData = await request.formData();
    
    // Check if it's a link submission
    const link = formData.get("link") as string;
    if (link) {
      const type: MediaType = link.includes("youtube.com") || link.includes("youtu.be") ? "youtube" : "drive";
      const entry = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        type,
        url: link,
        public_id: null, // No Cloudinary asset
        uploaded_at: new Date().toISOString().split('T')[0],
      };
      
      await addMedia(entry);
      return NextResponse.json({ success: true, entry });
    }

    // Check if it's a file upload
    const file = formData.get("file") as File;
    if (file) {
      const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
      const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50MB
      
      const isImage = file.type.startsWith("image/");
      const isVideo = file.type.startsWith("video/");
      
      if (!isImage && !isVideo) {
        return NextResponse.json({ success: false, message: "Invalid file type. Only images and videos are allowed." }, { status: 400 });
      }

      if (isImage && file.size > MAX_IMAGE_SIZE) {
        return NextResponse.json({ success: false, message: "Image size exceeds 5MB limit." }, { status: 400 });
      }

      if (isVideo && file.size > MAX_VIDEO_SIZE) {
        return NextResponse.json({ success: false, message: "Video size exceeds 50MB limit." }, { status: 400 });
      }

      const buffer = Buffer.from(await file.arrayBuffer());
      
      // Upload directly to Cloudinary
      const cloudinaryResult = await uploadToCloudinary(buffer, "kpds");

      const entry = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        type: (cloudinaryResult.type === "video" ? "video" : "image") as MediaType,
        url: cloudinaryResult.url,
        public_id: cloudinaryResult.public_id,
        uploaded_at: new Date().toISOString().split('T')[0],
      };
      
      await addMedia(entry);
      return NextResponse.json({ success: true, entry });
    }

    return NextResponse.json({ success: false, message: "No file or link provided" }, { status: 400 });

  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
