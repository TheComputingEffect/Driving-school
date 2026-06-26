import fs from "fs";
import path from "path";
import GalleryManager from "./GalleryManager";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  let images: string[] = [];

  try {
    if (fs.existsSync(uploadDir)) {
      const files = fs.readdirSync(uploadDir);
      images = files
        .filter(file => !file.startsWith(".")) // Ignore hidden files like .DS_Store
        .sort((a, b) => {
          // Sort by creation time (most recent first based on our timestamp naming convention)
          const timeA = Number(a.split("_")[0]) || 0;
          const timeB = Number(b.split("_")[0]) || 0;
          return timeB - timeA;
        })
        .map(file => `/uploads/${file}`);
    }
  } catch (error) {
    console.error("Error reading uploads directory:", error);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-6">
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 font-heading">Admin Dashboard</h1>
          <p className="text-gray-500 mt-2">Manage your website content here.</p>
        </div>

        <GalleryManager initialImages={images} />
      </div>
    </div>
  );
}
