import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import LocationsGrid from "@/components/sections/LocationsGrid";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Areas We Serve in Coimbatore | K. Priyadharshini Driving School",
  description:
    "Explore our training coverage zones across Coimbatore. Serving Kovaipudur, Sivananda Colony, Kuniamuthur, Sundarapuram, RS Puram, and all major neighborhoods.",
  path: "/locations",
  keywords: ["Driving School Coimbatore Areas", "Driving School Near Me Coimbatore", "Best Driving Academy Coimbatore"],
});

export default function LocationsPage() {
  const crumbs = [{ name: "Locations", url: "/locations" }];

  return (
    <div className="flex-1 bg-brand-bg pb-12">
      <BreadcrumbSchema items={crumbs} />

      {/* Visual H1 Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
          Our Coverage Locations in Coimbatore
        </h1>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Find your nearest training ground. We operate across all suburban and city sectors with convenient door-to-door shuttle training.
        </p>
      </div>

      {/* Renders real Locations Grid */}
      <LocationsGrid />
    </div>
  );
}
