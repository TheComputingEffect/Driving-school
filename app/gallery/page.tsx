import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { getMedia } from "@/backend/mediaDb";
import GalleryBento from "@/components/sections/GalleryBento";

export const dynamic = "force-dynamic";

export const metadata = constructMetadata({
  title: "Academy Gallery | K. Priyadharshini Driving School Coimbatore",
  description:
    "View photos and videos of our dual-control training cars, practice sessions, student celebrations, and RTO licensing ceremonies in Coimbatore.",
  path: "/gallery",
  keywords: ["Driving Academy Coimbatore Gallery", "Dual Control Cars Coimbatore", "Driving Videos"],
});

export default async function GalleryPage() {
  const crumbs = [{ name: "Gallery", url: "/gallery" }];
  
  const mediaItems = await getMedia();

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

        {/* Dynamic Bento Gallery Client Component */}
        <GalleryBento initialMedia={mediaItems} />
      </div>
    </div>
  );
}
