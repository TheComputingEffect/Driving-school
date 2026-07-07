import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Apply for Driving Licence | KPD",
  description:
    "Need help with your driving licence application in Coimbatore? We assist with LLR, permanent smart-card licences, document prep, and slot booking.",
  path: "/services/driving-licence",
  keywords: ["Driving Licence Services Coimbatore", "Apply for Driving Licence Coimbatore", "LLR Smart Card Coimbatore"],
});

export default function DrivingLicencePage() {
  const crumbs = [
    { name: "Services", url: "/services" },
    { name: "Driving Licence Application", url: "/services/driving-licence" }
  ];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="Driving Licence Application Assistance in Coimbatore"
        description="Get professional assistance with fresh LLR registrations, driving test slots scheduling, documentation files, and practical mock tests to clear your driving exam track in Coimbatore."
        keyword="Driving Licence Services Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
