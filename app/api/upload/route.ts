import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { addMedia, MediaType } from "@/backend/mediaDb";

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
        public_id: null, // No local file
        uploaded_at: new Date().toISOString().split('T')[0],
      };
      
      await addMedia(entry);
      return NextResponse.json({ success: true, entry });
    }

    // Check if it's a file upload
    const file = formData.get("file") as File;
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const isVideo = file.type.startsWith("video/");
      
      // Save locally for the client meeting
      const ext = path.extname(file.name) || (isVideo ? ".mp4" : ".jpg");
      const filename = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}${ext}`;
      const uploadDir = path.join(process.cwd(), "public", "uploads");
      const filePath = path.join(uploadDir, filename);

      // Ensure directory exists
      try {
        await fs.mkdir(uploadDir, { recursive: true });
      } catch (e) {}

      await fs.writeFile(filePath, buffer);

      const entry = {
        id: Date.now().toString() + Math.random().toString(36).substring(2, 9),
        type: (isVideo ? "video" : "image") as MediaType,
        url: `/uploads/${filename}`,
        public_id: filename, // We'll use public_id to store the local filename for deletion
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
