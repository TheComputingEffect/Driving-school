"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Eye } from "lucide-react";
import type { MediaEntry } from "@/backend/mediaDb";

interface GalleryBentoProps {
  initialMedia: MediaEntry[];
}

export default function GalleryBento({ initialMedia }: GalleryBentoProps) {
  const [filter, setFilter] = useState<"all" | "photos" | "videos">("all");
  const [selectedItem, setSelectedItem] = useState<MediaEntry | null>(null);

  // Filter media based on selection
  const filteredMedia = initialMedia.filter((item) => {
    if (filter === "all") return true;
    if (filter === "photos") return item.type === "image";
    if (filter === "videos") return item.type !== "image"; // video, youtube, drive
    return true;
  });

  // Helper to extract YouTube ID
  const getYouTubeId = (url: string) => {
    const match = url.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Helper to get Google Drive embed URL
  const getDriveEmbed = (url: string) => url.replace("/view", "/preview");

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedItem]);

  // Bento logic: assigns col-span and row-span classes based on index
  const getBentoClasses = (index: number) => {
    // Pattern that repeats every 8 items to create an asymmetrical editorial look
    const pattern = index % 8;
    
    switch (pattern) {
      case 0:
        return "col-span-2 md:col-span-2 md:row-span-2 aspect-video md:aspect-auto"; // Full width horizontal on mobile, large square on desktop
      case 3:
        return "col-span-2 md:col-span-2 md:row-span-1 aspect-video md:aspect-auto"; // Wide horizontal on both
      case 6:
        return "col-span-1 md:col-span-1 md:row-span-2 aspect-square md:aspect-[1/2] md:aspect-auto"; // Square on mobile, tall vertical on desktop
      default:
        return "col-span-1 md:col-span-1 md:row-span-1 aspect-square"; // Standard square on both
    }
  };

  return (
    <div className="w-full">
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {(["all", "photos", "videos"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
              filter === f
                ? "bg-brand-red text-white shadow-lg shadow-brand-red/20 scale-105"
                : "bg-white text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-300"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredMedia.length === 0 ? (
        <div className="text-center py-24 text-gray-500 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-lg">No media matches this filter.</p>
        </div>
      ) : (
        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(150px,250px)] md:auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredMedia.map((item, index) => {
              const isVideoType = item.type !== "image";
              
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`relative group rounded-3xl overflow-hidden cursor-pointer bg-gray-900 shadow-sm hover:shadow-xl transition-shadow ${getBentoClasses(index)}`}
                  onClick={() => setSelectedItem(item)}
                >
                  {/* Media Content preview */}
                  {item.type === "image" && (
                    <Image 
                      src={item.url} 
                      alt="Gallery item" 
                      fill 
                      className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out" 
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  )}
                  {item.type === "video" && (
                    <video src={item.url} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" muted playsInline />
                  )}
                  {item.type === "youtube" && (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-800 text-white">
                       {/* Try to show youtube thumbnail if possible */}
                       {getYouTubeId(item.url) ? (
                         <Image src={`https://img.youtube.com/vi/${getYouTubeId(item.url)}/hqdefault.jpg`} fill alt="YouTube Thumbnail" className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                       ) : (
                         <Play className="w-12 h-12 text-brand-red opacity-80" />
                       )}
                    </div>
                  )}
                  {item.type === "drive" && (
                    <div className="w-full h-full bg-blue-900/20 flex items-center justify-center">
                       <Play className="w-12 h-12 text-brand-blue opacity-50" />
                    </div>
                  )}

                  {/* Glassmorphism Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {isVideoType ? <Play className="w-6 h-6 text-white fill-white" /> : <Eye className="w-6 h-6 text-white" />}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      )}

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full max-w-6xl max-h-[85vh] aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
            >
              {selectedItem.type === "image" && (
                <Image src={selectedItem.url} alt="Full screen view" fill className="object-contain" />
              )}
              {selectedItem.type === "video" && (
                <video src={selectedItem.url} className="w-full h-full outline-none" controls autoPlay playsInline />
              )}
              {selectedItem.type === "youtube" && getYouTubeId(selectedItem.url) && (
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${getYouTubeId(selectedItem.url)}?autoplay=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
              {selectedItem.type === "drive" && (
                <iframe src={getDriveEmbed(selectedItem.url)} className="w-full h-full border-none" allow="autoplay" allowFullScreen></iframe>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
