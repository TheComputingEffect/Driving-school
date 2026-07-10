import { NextResponse } from "next/server";
import cloudinary from "@/backend/cloudinary";

export async function GET() {
  try {
    const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
    const apiKey = process.env.CLOUDINARY_API_KEY;
    const apiSecret = process.env.CLOUDINARY_API_SECRET;

    let connectionStatus = "Unknown";
    let errorDetails = "";
    
    try {
      // Test the Cloudinary API connection using a ping
      const result = await cloudinary.api.ping();
      connectionStatus = result.status === "ok" ? "Connected successfully" : "Ping failed: " + JSON.stringify(result);
    } catch (err: any) {
      connectionStatus = "Failed to connect";
      errorDetails = err.message || String(err);
    }

    return NextResponse.json({
      success: true,
      env: {
        CLOUDINARY_CLOUD_NAME: cloudName ? `Set (length: ${cloudName.length})` : "Not Set",
        CLOUDINARY_API_KEY: apiKey ? `Set (length: ${apiKey.length})` : "Not Set",
        CLOUDINARY_API_SECRET: apiSecret ? `Set (length: ${apiSecret.length})` : "Not Set",
        ADMIN_EMAIL: process.env.ADMIN_EMAIL ? "Set" : "Not Set",
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD ? "Set" : "Not Set",
      },
      connectionStatus,
      errorDetails,
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message || String(error) });
  }
}
