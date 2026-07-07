import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Professional RTO Services | KPD",
  description:
    "Reliable RTO coordination in Coimbatore. Get assistance with address changes, hypothecation termination (HP), duplicate licences, and vehicle FCs.",
  path: "/services/rto-services",
  keywords: ["RTO Services Coimbatore", "Hypothecation Termination Coimbatore", "Vehicle Registration Coimbatore"],
});

export default function RtoServicesPage() {
  const crumbs = [
    { name: "Services", url: "/services" },
    { name: "RTO Services", url: "/services/rto-services" }
  ];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="Comprehensive RTO Services in Coimbatore"
        description="Get professional, legal support for Hypothecation (HP) removals, duplicate licence retrievals, road tax payments, registration transfers, and Fitness Certificates in Coimbatore."
        keyword="RTO Services Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
