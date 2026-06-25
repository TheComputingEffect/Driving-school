import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Car Driving Lessons Coimbatore | K. Priyadharshini Driving School",
  description:
    "Learn car driving from scratch in Coimbatore. RTO-approved syllabus, dual-control safe practice vehicles, flexible timing, and expert personal trainers.",
  path: "/courses/car-driving",
  keywords: ["Car Driving Lessons Coimbatore", "Driving School Coimbatore", "Learn Car Driving Coimbatore"],
});

export default function CarDrivingPage() {
  const crumbs = [
    { name: "Courses", url: "/courses" },
    { name: "Car Driving Lessons", url: "/courses/car-driving" }
  ];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="Car Driving Lessons in Coimbatore"
        description="Our beginner-friendly car driving course is structured to teach you vehicle dynamics, controls, and safe steering methods. We use RTO-aligned dual-control cars so you can practice securely on real Coimbatore streets."
        keyword="Car Driving Lessons Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
