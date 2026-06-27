import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
// Premium Service Sections
import ServicesHero from "@/components/sections/ServicesHero";
import DetailedServices from "@/components/sections/DetailedServices";
import ServicePackages from "@/components/sections/ServicePackages";
import FleetShowcase from "@/components/sections/FleetShowcase";

export const metadata = constructMetadata({
  title: "Driving Courses & RTO Services Coimbatore | K. Priyadharshini",
  description:
    "Explore our premium driving courses for beginners, refreshers, and ladies. Professional RTO assistance in Coimbatore for LLR, Licence Renewals, and Address Changes.",
  path: "/services",
  keywords: ["Driving Courses Coimbatore", "Driving Licence Services Coimbatore", "RTO Services Coimbatore", "Licence Renewal Coimbatore", "Driving School Packages"],
});

export default function ServicesPage() {
  const crumbs = [{ name: "Services", url: "/services" }];

  return (
    <div className="flex flex-col w-full bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />

      {/* 1. Hero Section */}
      <ServicesHero />

      {/* 2. Detailed Breakdown of Core Services */}
      <DetailedServices />

      {/* 3. Pricing & Training Packages */}
      <ServicePackages />

      {/* 5. Vehicle Fleet Showcase */}
      <FleetShowcase />

    </div>
  );
}
