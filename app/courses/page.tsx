import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import CoursesSection from "@/components/sections/CoursesSection";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import CTAButton from "@/components/shared/CTAButton";
import { Calendar } from "lucide-react";

export const metadata = constructMetadata({
  title: "Driving Courses in Coimbatore | K. Priyadharshini Driving School",
  description:
    "Explore our structured driving training packages: manual car sessions, automatic car classes, ladies-only batches, and student special discounts in Coimbatore.",
  path: "/courses",
  keywords: ["Driving Classes Coimbatore", "Ladies Driving Classes Coimbatore", "Automatic Car Training Coimbatore"],
});

export default function CoursesPage() {
  const crumbs = [{ name: "Courses", url: "/courses" }];

  return (
    <div className="flex-1 bg-brand-bg pb-16">
      <BreadcrumbSchema items={crumbs} />
      
      {/* Visual H1 Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
          Driving Courses in Coimbatore
        </h1>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          From absolute beginners to advanced highway driving, pick a course that fits your skill levels and schedule.
        </p>
      </div>

      {/* Renders the full Courses grid */}
      <CoursesSection />

      {/* Call to action center */}
      <div className="max-w-[800px] mx-auto px-4 md:px-6 text-center mt-12">
        <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-brand-text mb-3 font-heading">
            Need a Customized Learning Package?
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed mb-6 max-w-xl mx-auto">
            We provide custom hour-based schedules, special group rates, and campus pickup packages. Reserve a free trial demo session to map out your curriculum.
          </p>
          <div className="flex justify-center">
            <CTAButton href="/contact" variant="primary" className="gap-2 font-semibold">
              <Calendar className="w-4 h-4" />
              Book Free Trial Session
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
