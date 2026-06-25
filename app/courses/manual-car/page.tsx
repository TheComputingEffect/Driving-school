import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Manual Car Training Coimbatore | K. Priyadharshini Driving School",
  description:
    "Master clutch control, gear shifting, and slope starts with manual car training in Coimbatore. Dual-control practice cars and experienced trainers.",
  path: "/courses/manual-car",
  keywords: ["Manual Car Training Coimbatore", "Clutch Control Practice Coimbatore", "Driving School Coimbatore"],
});

export default function ManualCarPage() {
  const crumbs = [
    { name: "Courses", url: "/courses" },
    { name: "Manual Car Training", url: "/courses/manual-car" }
  ];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="Manual Car Training in Coimbatore"
        description="Master the art of manual transmission driving. Learn clutch and gear synchronization, steep slope starts, bumper-to-bumper traffic navigation, and parallel parking rules in Coimbatore."
        keyword="Manual Car Training Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
