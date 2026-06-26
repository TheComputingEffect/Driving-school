import React from "react";
import fs from "fs";
import path from "path";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo/metadata";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const dynamic = "force-dynamic";

export const metadata = constructMetadata({
  title: "Academy Gallery | K. Priyadharshini Driving School Coimbatore",
  description:
    "View photos of our dual-control training cars, practice sessions, student celebrations, and RTO licensing ceremonies in Coimbatore.",
  path: "/gallery",
  keywords: ["Driving Academy Coimbatore Gallery", "Dual Control Cars Coimbatore"],
});

export default async function GalleryPage() {
  const crumbs = [{ name: "Gallery", url: "/gallery" }];
  
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  let images: string[] = [];

  try {
    if (fs.existsSync(uploadDir)) {
      const files = fs.readdirSync(uploadDir);
      images = files
        .filter(file => !file.startsWith("."))
        .sort((a, b) => {
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
    <div className="bg-gray-50 min-h-screen py-24">
      <BreadcrumbSchema items={crumbs} />
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
            Our <span className="text-brand-red">Gallery</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg">
            Glimpses of our training sessions, fleet of vehicles, and happy students who learned to drive with confidence.
          </p>
        </div>

        {images.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-gray-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-2">No Images Yet</h3>
            <p className="text-gray-500">Check back later for photos of our driving school.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((url, idx) => (
              <div 
                key={url} 
                className="relative aspect-square rounded-2xl overflow-hidden shadow-sm group bg-gray-200"
              >
                <Image 
                  src={url} 
                  alt={`Gallery Image ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
