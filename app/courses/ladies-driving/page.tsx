import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Ladies Driving Classes Coimbatore | K. Priyadharshini Driving School",
  description:
    "Premium ladies-only driving classes in Coimbatore taught exclusively by patient, certified female instructors. Safe learning and home pickup.",
  path: "/courses/ladies-driving",
  keywords: ["Ladies Driving Classes Coimbatore", "Female Driving Instructor Coimbatore", "Safe Driving Classes for Women"],
});

export default function LadiesDrivingPage() {
  const crumbs = [
    { name: "Courses", url: "/courses" },
    { name: "Ladies Driving Classes", url: "/courses/ladies-driving" }
  ];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="Ladies Driving Classes in Coimbatore"
        description="We offer specialized, highly comfortable driving classes for female students. Be trained exclusively by our certified, patient female instructors who help you master road confidence at your own pace."
        keyword="Ladies Driving Classes Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
