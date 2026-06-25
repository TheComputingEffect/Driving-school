import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Automatic Car Training Coimbatore | K. Priyadharshini Driving School",
  description:
    "Learn automatic car driving easily in Coimbatore. Stress-free lessons, professional coaching, modern vehicles, and license test guidance.",
  path: "/courses/automatic-car",
  keywords: ["Automatic Car Training Coimbatore", "Automatic Driving Lessons Coimbatore", "Driving School Coimbatore"],
});

export default function AutomaticCarPage() {
  const crumbs = [
    { name: "Courses", url: "/courses" },
    { name: "Automatic Car Training", url: "/courses/automatic-car" }
  ];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="Automatic Car Training in Coimbatore"
        description="Learn to operate modern automatic transmission gearboxes smoothly. Master crawling controls in heavy traffic, lane changing protocols, and narrow road steering techniques easily."
        keyword="Automatic Car Training Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
