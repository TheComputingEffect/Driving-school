import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ComingSoon from "@/components/shared/ComingSoon";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Driving Licence Renewal | KPD",
  description:
    "Quickly renew your expired driving licence in Coimbatore. We handle Form 1A medical certificates, online Sarathi portal filings, and RTO processing.",
  path: "/services/licence-renewal",
  keywords: ["Licence Renewal Coimbatore", "Renew Driving Licence Coimbatore", "RTO Services Coimbatore"],
});

export default function LicenceRenewalPage() {
  const crumbs = [
    { name: "Services", url: "/services" },
    { name: "Licence Renewal", url: "/services/licence-renewal" }
  ];

  return (
    <div className="flex-1 bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />
      <ComingSoon
        title="Driving Licence Renewal Services in Coimbatore"
        description="Avoid driving with an expired licence. We help with online applications, medical certificate preparations, Vahan database updates, and tracking smart card shipments."
        keyword="Licence Renewal Coimbatore"
        breadcrumbs={crumbs}
      />
    </div>
  );
}
