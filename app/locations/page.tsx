import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import MapSection from "@/components/sections/MapSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Driving School Locations | KPD",
  description:
    "Find driving school locations across Coimbatore. We serve Kovaipudur, Sivananda Colony, Kuniamuthur, Sundarapuram, RS Puram, and nearby areas.",
  path: "/locations",
  keywords: ["Driving School Coimbatore Areas", "Driving School Near Me Coimbatore", "Best Driving Academy Coimbatore"],
});

export default function LocationsPage() {
  const crumbs = [{ name: "Locations", url: "/locations" }];

  return (
    <div className="flex-1 bg-brand-bg pb-12">
      <BreadcrumbSchema items={crumbs} />

      {/* Map Section */}
      <MapSection />
    </div>
  );
}
