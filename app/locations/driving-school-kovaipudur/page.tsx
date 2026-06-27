import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import JsonLd from "@/components/seo/JsonLd";
import { getBranchLocalBusinessSchema } from "@/lib/schema/localBusiness";
import { getFAQPageSchema } from "@/lib/schema/faqSchema";
import FAQSchema from "@/components/seo/FAQSchema";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";
import { MapPin, Phone, ShieldCheck, Compass, Navigation } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";

export const metadata = constructMetadata({
  title: "Driving School in Kovaipudur, Coimbatore | K. Priyadharshini",
  description:
    "Looking for a driving school in Kovaipudur? K. Priyadharshini Driving School offers expert car training, ladies classes, and RTO services near Kovaipudur, Coimbatore.",
  path: "/locations/driving-school-kovaipudur",
  keywords: ["Driving School Kovaipudur", "Best Driving Class Kovaipudur", "Ladies Driving Kovaipudur"],
});

export default function KovaipudurLocationPage() {
  const crumbs = [
    { name: "Locations", url: "/locations" },
    { name: "Driving School Kovaipudur", url: "/locations/driving-school-kovaipudur" }
  ];

  const localFaqs = [
    {
      id: "kovai-faq-1",
      question: "Where is your driving school located in Kovaipudur?",
      answer: "Our main branch is located at 24/A, Main Road, Kovaipudur, Coimbatore. We are situated in a highly accessible zone ."
    },
    {
      id: "kovai-faq-2",
      question: "Do you offer door-to-door pickup in Kovaipudur?",
      answer: "Yes, we provide door-to-door pick-up and drop-off facility spanning all avenues and residential blocks throughout Kovaipudur."
    }
  ];

  const localBusinessSchema = getBranchLocalBusinessSchema("main");

  return (
    <div className="flex-1 bg-brand-bg pb-16">
      <BreadcrumbSchema items={crumbs} />
      <JsonLd schema={localBusinessSchema} />
      <FAQSchema items={localFaqs} />

      {/* Hero Section */}
      <section className="bg-white border-b border-brand-border py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="inline-flex items-center gap-1 bg-brand-red-light text-brand-red text-xs font-bold uppercase px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" />
              Main Branch &amp; Head Office
            </span>
            
            {/* H1 Title with Area Keyword */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
              Driving School in Kovaipudur, Coimbatore
            </h1>
            
            <p className="text-lg text-brand-muted leading-relaxed">
              Welcome to the main training hub of K. Priyadharshini Driving School. Kovaipudur&apos;s calm, tree-lined residential avenues offer the perfect environment for beginners to master clutch synchronization, steering control, and fundamental vehicle operations without the stress of heavy traffic.
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
              Branch Quick Details
            </h3>
            <ul className="space-y-3.5 text-xs text-brand-muted">
              <li>
                <strong>Address:</strong> {contactInfo.branches.main.address}
              </li>
              <li>
                <strong>Phone:</strong> {contactInfo.phoneFormatted}
              </li>
              <li>
                <strong>Batches:</strong> Morning (6 AM - 10 AM) &amp; Evening (4 PM - 8 PM)
              </li>
              <li>
                <strong>Instructors:</strong> Certified Male &amp; Female Coaches
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
              Why Learn Driving with Us in Kovaipudur?
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Our training program combines theoretical concepts with extensive practical sessions. Beginners start their first 3 days on empty service roads learning basic gear shifts, before progressing to narrow curves, slope balancing, and parallel parking mock grids. Our dual-control cars ensure your safety, allowing instructors to intervene whenever necessary.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              We specialize in ladies driving classes in Kovaipudur, featuring dedicated female coaches and a safe, comfortable learning layout.
            </p>
          </div>

          {/* Local Q&A Accordion */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-heading">
              Frequently Asked Questions (Kovaipudur Branch)
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
                <Link href="/locations/driving-school-kuniamuthur" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; Kuniamuthur Driving Academy
                </Link>
              </li>
              <li>
                <Link href="/locations/driving-school-sundarapuram" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; Sundarapuram Driving Academy
                </Link>
              </li>
              <li>
                <Link href="/locations/driving-school-sivananda-colony" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; Sivananda Colony Branch
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-brand-border rounded-2xl p-6 space-y-4">
            <h3 className="font-heading font-bold text-base text-brand-text">
              RTO Service Signal
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              We assist with Learner Licence (LLR) and permanent driving licence application filings at the local West/South Coimbatore RTO office directories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
