import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ServicesSection from "@/components/sections/ServicesSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import CTAButton from "@/components/shared/CTAButton";
import { FileText } from "lucide-react";

export const metadata = constructMetadata({
  title: "Driving Licence & RTO Services Coimbatore | K. Priyadharshini",
  description:
    "Professional RTO assistance in Coimbatore. Apply for new driving licence (LLR), licence renewals, address changes, vehicle fitness certificates, and hypothecation removals.",
  path: "/services",
  keywords: ["Driving Licence Services Coimbatore", "RTO Services Coimbatore", "Licence Renewal Coimbatore"],
});

export default function ServicesPage() {
  const crumbs = [{ name: "Services", url: "/services" }];

  return (
    <div className="flex-1 bg-brand-bg pb-16">
      <BreadcrumbSchema items={crumbs} />

      {/* Visual H1 Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
          Driving Licence &amp; RTO Services
        </h1>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Skip long RTO queue files. We handle complete documentation filings, slots booking, and processing for licences and vehicle certificates.
        </p>
      </div>

      {/* Renders real Services Grid */}
      <ServicesSection />

      {/* Assistance callout */}
      <div className="max-w-[800px] mx-auto px-4 md:px-6 text-center mt-12">
        <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-brand-text mb-3 font-heading">
            Need Direct Support with Local RTO Offices?
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed mb-6 max-w-xl mx-auto">
            Our documentation team works closely with local transport departments to facilitate quick processing. Call us or send WhatsApp details for immediate guidance.
          </p>
          <div className="flex justify-center">
            <CTAButton href="/contact" variant="primary" className="gap-2 font-semibold">
              <FileText className="w-4 h-4" />
              Get RTO Help Online
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
