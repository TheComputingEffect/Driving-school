import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";

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
    <div className="flex-1 bg-brand-bg pb-16">
      <BreadcrumbSchema items={crumbs} />

      {/* Visual H1 Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 pb-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight mb-4">
          About <span className="text-brand-red">K. Priyadharshini</span> Driving School
        </h1>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Established with a commitment to road safety, we are Coimbatore's trusted driving academy. We provide premium driving instructions, simulator sessions, and certified coaches with deep experience.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-brand-text">
            Over 10 Years of Excellence
          </h2>
          <p className="text-brand-muted leading-relaxed">
            Since our inception, we have successfully trained over 5000+ happy learners, earning a 4.9-star rating on Google. As a Government Approved School, we take pride in our high test pass rates and customized courses tailored to each student's learning pace.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="flex items-center gap-3 text-brand-text font-medium">
              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
              Certified Lady Trainers for Female Learners
            </li>
            <li className="flex items-center gap-3 text-brand-text font-medium">
              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
              Dual-Control Safe Vehicles
            </li>
            <li className="flex items-center gap-3 text-brand-text font-medium">
              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
              Flexible Morning & Weekend Batches
            </li>
            <li className="flex items-center gap-3 text-brand-text font-medium">
              <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0" />
              Home Pickup and Drop Services
            </li>
          </ul>
        </div>
        
        <div className="bg-white border border-brand-border rounded-2xl p-8 shadow-sm">
          <h3 className="text-xl font-bold text-brand-text mb-6 font-heading text-center">
            Start Your Driving Journey Today
          </h3>
          <div className="flex flex-col gap-4">
            <CTAButton href="/contact" variant="primary" className="w-full justify-center">
              Book a Free Demo Class
            </CTAButton>
            <CTAButton href="/services" variant="outline" className="w-full justify-center">
              View Our Services
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
}
