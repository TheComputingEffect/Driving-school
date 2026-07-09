import { NextResponse } from "next/server";
import { deleteMedia } from "@/backend/mediaDb";
import { deleteFromCloudinary } from "@/backend/cloudinary";

export async function POST(request: Request) {
  try {
    const { id, public_id } = await request.json();

    if (!id) {
      return NextResponse.json({ success: false, message: "Missing id" }, { status: 400 });
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
