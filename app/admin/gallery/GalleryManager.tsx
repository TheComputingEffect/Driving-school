"use client";

import React, { useState, useRef } from "react";
import { Upload, Trash2, Image as ImageIcon, Loader2 } from "lucide-react";
import Image from "next/image";

export default function GalleryManager({ initialImages }: { initialImages: string[] }) {
  const [images, setImages] = useState<string[]>(initialImages);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingUrls, setDeletingUrls] = useState<Set<string>>(new Set());
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setImages((prev) => [data.url, ...prev]);
      } else {
        alert(data.message || "Failed to upload image");
      }
    } catch (err) {
      alert("Error uploading image");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleDelete = async (url: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    setDeletingUrls((prev) => new Set(prev).add(url));
    try {
      const res = await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      const data = await res.json();
      if (data.success) {
        setImages((prev) => prev.filter((img) => img !== url));
      } else {
        alert(data.message || "Failed to delete image");
      }
    } catch (err) {
      alert("Error deleting image");
    } finally {
      setDeletingUrls((prev) => {
        const next = new Set(prev);
        next.delete(url);
        return next;
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Manage Gallery</h2>
          <p className="text-gray-500 text-sm">Upload and remove images from your public gallery.</p>
        </div>
        <div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleUpload}
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {isUploading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Upload className="w-5 h-5" />}
            {isUploading ? "Uploading..." : "Upload Image"}
          </button>
        </div>
      </div>

      {images.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-gray-400 border-2 border-dashed border-gray-200 rounded-xl">
          <ImageIcon className="w-12 h-12 mb-3 opacity-20" />
          <p>No images in your gallery yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((url) => {
            const isDeleting = deletingUrls.has(url);
            return (
              <div key={url} className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
                <Image src={url} alt="Gallery image" fill className={`object-cover transition-opacity ${isDeleting ? 'opacity-50' : ''}`} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => handleDelete(url)}
                    disabled={isDeleting}
                    className="p-2 bg-white text-red-500 hover:text-white hover:bg-red-500 rounded-full transition-colors shadow-lg"
                    title="Delete Image"
                  >
                    {isDeleting ? <Loader2 className="w-5 h-5 animate-spin text-white" /> : <Trash2 className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
