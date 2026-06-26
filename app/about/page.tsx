import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "About Our Academy | K. Priyadharshini Driving School Coimbatore",
  description:
    "Learn about Coimbatore's premier driving training academy. Over 10 years of experience, certified lady trainers, high test pass rates, and custom courses.",
  path: "/about",
  keywords: ["About K. Priyadharshini Driving School", "Best Driving School Coimbatore"],
});

export default function AboutPage() {
  const crumbs = [{ name: "About", url: "/about" }];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="About K. Priyadharshini Driving School Coimbatore"
        description="Established with a commitment to road safety, we are Coimbatore's trusted driving academy. We provide premium driving instructions, simulator sessions, and certified coaches with deep experience."
        keyword="Driving School Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
