import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Enrollment & Contact Center | K. Priyadharshini Driving School",
  description:
    "Get in touch with K. Priyadharshini Driving School in Coimbatore. Dial our support numbers, WhatsApp our team, locate our main branch or book your free demo.",
  path: "/contact",
  keywords: ["Contact Driving School Coimbatore", "K. Priyadharshini Driving School Phone Number", "Kovaipudur Driving School Location"],
});

export default function ContactPage() {
  const crumbs = [{ name: "Contact", url: "/contact" }];

  return (
    <div className="flex-1 bg-brand-bg pb-12">
      <BreadcrumbSchema items={crumbs} />

      {/* Visual H1 Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
          Enrollment &amp; Support Directory
        </h1>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Book your first trial slot or get assistance with LLR document processing files. Our support team is active daily.
        </p>
      </div>

      {/* Contact buttons and microdata card listings */}
      <ContactSection />

      {/* Interactive Google maps branch visual selection */}
      <MapSection />
    </div>
  );
}
