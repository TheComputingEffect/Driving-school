import { v2 as cloudinary } from "cloudinary";

// Ensure cloudinary is configured only once
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;

/**
 * Utility to upload a raw file stream (e.g., from FormData) to Cloudinary
 */
export async function uploadToCloudinary(fileBuffer: Buffer, folder: string = "kpds"): Promise<{ url: string; public_id: string; type: string; format: string }> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: folder, resource_type: "auto" },
      (error, result) => {
        if (error) return reject(error);
        if (!result) return reject(new Error("No result returned from Cloudinary"));
        
        resolve({
          url: result.secure_url,
          public_id: result.public_id,
          type: result.resource_type, // 'image' or 'video'
          format: result.format,
        });
      }
    );

    uploadStream.end(fileBuffer);
  });
}

/**
 * Utility to delete an asset from Cloudinary
 */
export async function deleteFromCloudinary(publicId: string, resourceType: "image" | "video" | "raw" | "auto" = "image"): Promise<boolean> {
  try {
    const result = await cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
    return result.result === "ok";
  } catch (error) {
    console.error("Cloudinary deletion error:", error);
    return false;
  }
}
