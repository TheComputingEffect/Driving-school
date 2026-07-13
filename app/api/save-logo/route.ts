import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  try {
    const { image } = await request.json();
    if (!image) {
      return NextResponse.json({ error: "No image data provided" }, { status: 400 });
    }

    // Extract base64 content
    const base64Data = image.replace(/^data:image\/png;base64,/, "");
    const buffer = Buffer.from(base64Data, "base64");

    const filePath = path.join(process.cwd(), "public", "logo_KPD_transparent.png");
    fs.writeFileSync(filePath, buffer);

    console.log("Successfully saved transparent logo to:", filePath);
    return NextResponse.json({ success: true, path: "/logo_KPD_transparent.png" });
  } catch (error: any) {
    console.error("Error saving logo:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
