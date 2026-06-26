"use client";

import React, { useState, useRef } from "react";
import { Upload, Trash2, Image as ImageIcon, Loader2, Video, Link as LinkIcon, Plus } from "lucide-react";
import Image from "next/image";
import type { MediaEntry } from "@/backend/mediaDb";

export default function GalleryManager({ initialMedia }: { initialMedia: MediaEntry[] }) {
  const [media, setMedia] = useState<MediaEntry[]>(initialMedia);
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");
  
  const [isUploading, setIsUploading] = useState(false);
  const [deletingIds, setDeletingIds] = useState<Set<string>>(new Set());
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [linkInput, setLinkInput] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
      if (data.success && data.entry) {
        setMedia((prev) => [data.entry, ...prev]);
        // Switch to the correct tab automatically
        setActiveTab(data.entry.type === "image" ? "photos" : "videos");
      } else {
        alert(data.message || "Failed to upload file");
      }
    } catch (err) {
      alert("Error uploading file");
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  const handleLinkUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!linkInput.trim()) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append("link", linkInput.trim());

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success && data.entry) {
        setMedia((prev) => [data.entry, ...prev]);
        setActiveTab("videos");
        setLinkInput("");
        setShowLinkInput(false);
      } else {
        alert(data.message || "Failed to add link");
      }
    } catch (err) {
      alert("Error adding link");
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string, public_id: string | null) => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    setDeletingIds((prev) => new Set(prev).add(id));
    try {
      const res = await fetch("/api/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, public_id }),
      });
      const data = await res.json();
      if (data.success) {
        setMedia((prev) => prev.filter((m) => m.id !== id));
      } else {
        alert(data.message || "Failed to delete item");
      }
    } catch (err) {
      alert("Error deleting item");
    } finally {
      setDeletingIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    }
  };

  const photos = media.filter((m) => m.type === "image");
  const videos = media.filter((m) => m.type !== "image"); // video, youtube, drive

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">
      <div className="border-b border-gray-200 px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex gap-4">
          <button
            onClick={() => setActiveTab("photos")}
            className={`font-semibold pb-4 -mb-[17px] border-b-2 transition-colors ${
              activeTab === "photos" ? "border-brand-blue text-brand-blue" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Photos ({photos.length})
          </button>
          <button
            onClick={() => setActiveTab("videos")}
            className={`font-semibold pb-4 -mb-[17px] border-b-2 transition-colors ${
              activeTab === "videos" ? "border-brand-blue text-brand-blue" : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Videos ({videos.length})
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* File Upload Button */}
          <div>
            <input
              type="file"
              accept={activeTab === "photos" ? "image/png, image/jpeg, image/webp" : "video/mp4, video/webm"}
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileUpload}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
              className="flex items-center gap-2 bg-brand-blue hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors disabled:opacity-50 text-sm"
            >
              {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
              {activeTab === "photos" ? "Upload Photo" : "Upload Video File"}
            </button>
          </div>

          {/* Add Link Button (Only on Videos Tab) */}
          {activeTab === "videos" && (
            <button
              onClick={() => setShowLinkInput(!showLinkInput)}
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
            >
              <LinkIcon className="w-4 h-4" />
              Add Link
            </button>
          )}
        </div>
      </div>

      {showLinkInput && activeTab === "videos" && (
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <form onSubmit={handleLinkUpload} className="flex gap-2 max-w-2xl">
            <input
              type="url"
              placeholder="Paste YouTube or Google Drive link here..."
              value={linkInput}
              onChange={(e) => setLinkInput(e.target.value)}
              required
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue text-sm"
            />
            <button
              type="submit"
              disabled={isUploading}
              className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-black transition-colors disabled:opacity-50 text-sm flex items-center gap-2"
            >
              {isUploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
              Add
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2">Example: https://youtube.com/watch?v=... or https://drive.google.com/file/d/...</p>
        </div>
      )}

      <div className="p-6">
        {activeTab === "photos" && (
          photos.length === 0 ? (
            <EmptyState icon={ImageIcon} message="No photos uploaded yet." />
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {photos.map((item) => (
                <MediaCard 
                  key={item.id} 
                  item={item} 
                  isDeleting={deletingIds.has(item.id)} 
                  onDelete={() => handleDelete(item.id, item.public_id)} 
                />
              ))}
            </div>
          )
        )}

        {activeTab === "videos" && (
          videos.length === 0 ? (
            <EmptyState icon={Video} message="No videos or links added yet." />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((item) => (
                <MediaCard 
                  key={item.id} 
                  item={item} 
                  isDeleting={deletingIds.has(item.id)} 
                  onDelete={() => handleDelete(item.id, item.public_id)} 
                />
              ))}
            </div>
          )
        )}
      </div>
    </div>
  );
}

function EmptyState({ icon: Icon, message }: { icon: React.ElementType, message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-gray-400 border-2 border-dashed border-gray-100 rounded-xl bg-gray-50/50">
      <Icon className="w-12 h-12 mb-3 opacity-20" />
      <p>{message}</p>
    </div>
  );
}

function MediaCard({ item, isDeleting, onDelete }: { item: MediaEntry, isDeleting: boolean, onDelete: () => void }) {
  return (
    <div className="relative group bg-gray-100 rounded-lg overflow-hidden border border-gray-200 flex flex-col h-full shadow-sm">
      <div className={`relative ${item.type === 'image' ? 'aspect-square' : 'aspect-video'} bg-gray-900 w-full`}>
        
        {item.type === "image" && (
          <Image src={item.url} alt="Gallery item" fill className={`object-cover transition-opacity ${isDeleting ? 'opacity-50' : ''}`} sizes="(max-width: 768px) 50vw, 33vw" />
        )}
        
        {item.type === "video" && (
          <video src={item.url} className={`w-full h-full object-cover ${isDeleting ? 'opacity-50' : ''}`} controls={false} muted />
        )}

        {item.type === "youtube" && (
          <div className="w-full h-full flex items-center justify-center bg-red-50 text-red-600 font-medium">
            YouTube Link
          </div>
        )}

        {item.type === "drive" && (
          <div className="w-full h-full flex items-center justify-center bg-blue-50 text-brand-blue font-medium">
            Google Drive Link
          </div>
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <button
            onClick={onDelete}
            disabled={isDeleting}
            className="p-2 bg-white text-red-500 hover:text-white hover:bg-red-500 rounded-full transition-colors shadow-lg disabled:opacity-50"
            title="Delete Item"
          >
            {isDeleting ? <Loader2 className="w-5 h-5 animate-spin text-white" /> : <Trash2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
      
      {/* Footer Info for videos */}
      {item.type !== "image" && (
        <div className="p-3 bg-white text-xs border-t border-gray-100">
          <div className="font-medium text-gray-900 mb-1 capitalize flex items-center gap-1.5">
            {item.type === "youtube" ? <LinkIcon className="w-3.5 h-3.5" /> : null}
            {item.type === "drive" ? <LinkIcon className="w-3.5 h-3.5" /> : null}
            {item.type === "video" ? <Video className="w-3.5 h-3.5" /> : null}
            {item.type === "youtube" ? "YouTube Video" : item.type === "drive" ? "Google Drive" : "Cloudinary Video"}
          </div>
          <div className="text-gray-500 truncate" title={item.url}>{item.url}</div>
        </div>
      )}
    </div>
  );
}
