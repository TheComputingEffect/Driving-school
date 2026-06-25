import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Academy Gallery | K. Priyadharshini Driving School Coimbatore",
  description:
    "View photos of our dual-control training cars, practice sessions, student celebrations, and RTO licensing ceremonies in Coimbatore.",
  path: "/gallery",
  keywords: ["Driving Academy Coimbatore Gallery", "Dual Control Cars Coimbatore"],
});

export default function GalleryPage() {
  const crumbs = [{ name: "Gallery", url: "/gallery" }];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="K. Priyadharshini Driving School Gallery"
        description="Browse through our photo archives showing our modern fleet of manual and automatic training vehicles, practical classroom theory sessions, and students celebrating getting their driving licences."
        keyword="Driving School Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
