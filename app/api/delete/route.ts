import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { deleteMedia } from "@/backend/mediaDb";

export async function POST(request: Request) {
  try {
    const { id, public_id } = await request.json();

    if (!id) {
      return NextResponse.json({ success: false, message: "Missing id" }, { status: 400 });
    }

    const deletedEntry = await deleteMedia(id);

    // Delete local file if it exists
    if (deletedEntry && deletedEntry.public_id) {
      try {
        const filePath = path.join(process.cwd(), "public", "uploads", deletedEntry.public_id);
        await fs.unlink(filePath);
      } catch (err) {
        console.error("Failed to delete local file:", err);
        // Continue even if local file is missing so it gets removed from JSON
      }
    }

    return NextResponse.json({ success: true, message: "Deleted successfully" });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
