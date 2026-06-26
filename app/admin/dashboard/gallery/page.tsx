import { getMedia } from "@/backend/mediaDb";
import GalleryManager from "./GalleryManager";

export const dynamic = "force-dynamic";

export default async function AdminGalleryPage() {
  const media = await getMedia();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-900 font-heading">Gallery Manager</h1>
        <p className="text-gray-500 mt-2">Upload and manage photos and videos for your public gallery.</p>
      </div>

      <GalleryManager initialMedia={media} />
    </div>
  );
}
