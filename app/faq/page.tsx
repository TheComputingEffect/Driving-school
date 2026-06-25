import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import FAQSection from "@/components/sections/FAQSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = constructMetadata({
  title: "Frequently Asked Questions | K. Priyadharshini Driving School",
  description:
    "Got questions about fees, pickup routes, ladies trainers, automatic gear options, and RTO files in Coimbatore? Read our extensive FAQ listings.",
  path: "/faq",
  keywords: ["Driving School Coimbatore FAQ", "Ladies Driving Class Cost Coimbatore", "LLR Application Fees Coimbatore"],
});

export default function FAQPage() {
  const crumbs = [{ name: "FAQ", url: "/faq" }];

  return (
    <div className="flex-1 bg-brand-bg pb-12">
      <BreadcrumbSchema items={crumbs} />
      
      {/* Visual H1 Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
          Academy Help &amp; FAQs
        </h1>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Find quick answers to common questions about schedules, licenses, dual control safety, and pricing details.
        </p>
      </div>

      {/* Renders real FAQ accordion listings and injects schema */}
      <FAQSection />
    </div>
  );
}
