import { NextResponse } from "next/server";
import { addMedia, MediaType } from "@/backend/mediaDb";
import { uploadToCloudinary } from "@/backend/cloudinary";

export async function POST(request: Request) {
  try {
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
