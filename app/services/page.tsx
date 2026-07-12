import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
// Premium Service Sections
import ServicesHero from "@/components/sections/ServicesHero";
import ServicePackages from "@/components/sections/ServicePackages";
import DetailedServices from "@/components/sections/DetailedServices";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = constructMetadata({
  title: "Driving Licence & RTO Services | KPD",
  description:
    "Discover premium driving courses and professional RTO services in Coimbatore, including LLR applications, licence renewals, and address changes.",
  path: "/services",
  keywords: ["Driving Courses Coimbatore", "Driving Licence Services Coimbatore", "RTO Services Coimbatore", "Licence Renewal Coimbatore", "Driving School Packages"],
});

export default function ServicesPage() {
  const crumbs = [{ name: "Services", url: "/services" }];

  return (
    <div className="flex flex-col w-full bg-brand-bg">
      <BreadcrumbSchema items={crumbs} />

      {/* 1. Page heading and introduction */}
      <ServicesHero />

      {/* 2. Training Packages section */}
      <ServicePackages />

      {/* 3. Five alternating service sections */}
      <DetailedServices />

      {/* 4. Enquiry or contact call-to-action section */}
      <ContactSection />
    </div>
  );
}
