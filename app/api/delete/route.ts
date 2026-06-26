import { NextResponse } from "next/server";
import { unlink } from "fs/promises";
import path from "path";
import fs from "fs";

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || !url.startsWith("/uploads/")) {
      return NextResponse.json({ success: false, message: "Invalid URL" }, { status: 400 });
    }

    const filename = url.replace("/uploads/", "");
    const filepath = path.join(process.cwd(), "public", "uploads", filename);

    if (fs.existsSync(filepath)) {
      await unlink(filepath);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting file:", error);
    return NextResponse.json({ success: false, message: "Error deleting file" }, { status: 500 });
  }
}
