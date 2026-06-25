import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import JsonLd from "@/components/seo/JsonLd";
import { getBranchLocalBusinessSchema } from "@/lib/schema/localBusiness";
import FAQSchema from "@/components/seo/FAQSchema";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { MapPin, Compass } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";

export const metadata = constructMetadata({
  title: "Driving School in RS Puram, Coimbatore | K. Priyadharshini",
  description:
    "Looking for a driving school in RS Puram? K. Priyadharshini Driving School offers premium car training, ladies classes, and RTO services in RS Puram.",
  path: "/locations/driving-school-rs-puram",
  keywords: ["Driving School RS Puram", "Best Driving Class RS Puram", "Driving School RS Puram Coimbatore"],
});

export default function RsPuramLocationPage() {
  const crumbs = [
    { name: "Locations", url: "/locations" },
    { name: "Driving School RS Puram", url: "/locations/driving-school-rs-puram" }
  ];

  const localFaqs = [
    {
      id: "rs-faq-1",
      question: "Do you offer door pickup in RS Puram?",
      answer: "Yes, we provide door-to-door pick-up and drop-off facility spanning all areas in RS Puram."
    },
    {
      id: "rs-faq-2",
      question: "Which branch coordinates RS Puram classes?",
      answer: "RS Puram student bookings and coordination are managed via our Sivananda Colony branch office."
    }
  ];

  const localBusinessSchema = getBranchLocalBusinessSchema("branch2");

  return (
    <div className="flex-1 bg-brand-bg pb-16">
      <BreadcrumbSchema items={crumbs} />
      <JsonLd schema={localBusinessSchema} />
      <FAQSchema items={localFaqs} />

      {/* Hero Section */}
      <section className="bg-white border-b border-brand-border py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-flex items-center gap-1 bg-brand-blue-light text-brand-blue text-xs font-bold uppercase px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              Serving RS Puram
            </span>
            
            {/* H1 Title with Area Keyword */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
              Driving School in RS Puram, Coimbatore
            </h1>
            
            <p className="text-lg text-brand-muted leading-relaxed">
              Looking for a premium driving school in RS Puram? We offer expert manual and automatic driving courses with certified instructors. Learn safety techniques, parallel parking grid mastery, and city traffic navigation. Pickup and drop facilities are fully available.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <CTAButton href="/contact" variant="primary">
                Book Free Demo
              </CTAButton>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-brand-border rounded-xl px-6 py-3 font-semibold text-[#25D366] bg-white hover:bg-brand-bg transition-all"
              >
                WhatsApp Chat &rarr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-brand-bg rounded-2xl border border-brand-border p-6 space-y-4">
            <h3 className="font-heading font-bold text-lg text-brand-text flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-blue" />
              Service Quick Details
            </h3>
            <ul className="space-y-3.5 text-xs text-brand-muted">
              <li>
                <strong>Operational Office:</strong> Tatabad / Sivananda Colony, Coimbatore
              </li>
              <li>
                <strong>Phone:</strong> {contactInfo.phoneFormatted}
              </li>
              <li>
                <strong>Pickup Zone:</strong> Door-to-door shuttle in RS Puram
              </li>
              <li>
                <strong>Packages:</strong> Manual, Automatic &amp; Ladies Batches
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Local Content Body */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-8">
          <div className="bg-white border border-brand-border rounded-2xl p-6 md:p-8 space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-heading">
              Premium Parallel Parking &amp; Safety Coaching
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              We make learning to drive highly convenient for students and professionals in RS Puram. Our instructors pick you up directly from your doorstep, drive to our dedicated training ground in Kovaipudur, guide you through structured learning modules, and drop you back.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              We specialize in ladies driving classes in RS Puram, featuring patient female coaches and dual-control cars to build safe driving habits.
            </p>
          </div>

          {/* Local Q&A Accordion */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-heading">
              Frequently Asked Questions (RS Puram Zone)
            </h2>
            <div className="bg-white border border-brand-border rounded-2xl divide-y divide-brand-border overflow-hidden">
              {localFaqs.map((faq) => (
                <div key={faq.id} className="p-5">
                  <h4 className="font-heading font-semibold text-brand-text text-sm md:text-base mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar - Related Locations Internal backlinking */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-brand-border rounded-2xl p-6">
            <h3 className="font-heading font-bold text-base text-brand-text mb-4">
              Nearby Service Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/locations/driving-school-sivananda-colony" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; Sivananda Colony Branch
                </Link>
              </li>
              <li>
                <Link href="/locations/driving-school-gandhipuram" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; Gandhipuram Driving School
                </Link>
              </li>
              <li>
                <Link href="/locations/driving-school-kovaipudur" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; Kovaipudur Head Office
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-brand-border rounded-2xl p-6 space-y-4">
            <h3 className="font-heading font-bold text-base text-brand-text">
              RTO Service Signal
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Our documentation team assists with Learner Licence (LLR) and driving test filings at the local Coimbatore West RTO office directory.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
