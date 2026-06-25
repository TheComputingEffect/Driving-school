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
  title: "Driving School in Sivananda Colony, Coimbatore | K. Priyadharshini",
  description:
    "Looking for a driving school in Sivananda Colony? K. Priyadharshini Driving School offers professional car driving lessons, ladies batches, and RTO help.",
  path: "/locations/driving-school-sivananda-colony",
  keywords: ["Driving School Sivananda Colony", "Best Driving Class Sivananda Colony", "Driving School Sivananda Colony Coimbatore"],
});

export default function SivanandaColonyLocationPage() {
  const crumbs = [
    { name: "Locations", url: "/locations" },
    { name: "Driving School Sivananda Colony", url: "/locations/driving-school-sivananda-colony" }
  ];

  const localFaqs = [
    {
      id: "siva-faq-1",
      question: "Where is your driving school branch in Sivananda Colony?",
      answer: "Our city branch is situated at 15, Sivananda Colony, Tatabad, Coimbatore. It is positioned near Gandhipuram, making it highly convenient."
    },
    {
      id: "siva-faq-2",
      question: "Do you train students on busy city roads?",
      answer: "Yes, our Sivananda Colony curriculum is specifically structured to cover heavy traffic navigation, bumper-to-bumper controls, and signal junctions."
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
              Sivananda Colony Branch
            </span>
            
            {/* H1 Title with Area Keyword */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
              Driving School in Sivananda Colony, Coimbatore
            </h1>
            
            <p className="text-lg text-brand-muted leading-relaxed">
              Master the art of navigating busy urban traffic at our Sivananda Colony training branch. Ideally located to cover central Coimbatore, Tatabad, and Gandhipuram routes, this branch focuses on clutch balancing in gridlocks, junction signals, and defensive highway steering.
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
                <strong>Address:</strong> {contactInfo.branches.branch2.address}
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
              City Traffic Driving Experts
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed">
              Driving inside Coimbatore city calls for special reflexes. Our trainers take you through peak hour traffic along Gandhipuram and 100 feet road with dual-control assistance, teaching you defensive habits, bumper-to-bumper deceleration, and smooth parking transitions.
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              Our branch offers dedicated ladies driving classes in Sivananda Colony, with flexible timings designed for homemakers, college students, and office professionals.
            </p>
          </div>

          {/* Local Q&A Accordion */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-text font-heading">
              Frequently Asked Questions (Sivananda Colony Branch)
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
                <Link href="/locations/driving-school-gandhipuram" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; Gandhipuram Driving School
                </Link>
              </li>
              <li>
                <Link href="/locations/driving-school-rs-puram" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; RS Puram Driving School
                </Link>
              </li>
              <li>
                <Link href="/locations/driving-school-kovaipudur" className="text-brand-blue hover:underline flex items-center gap-1">
                  &rarr; Kovaipudur Main Academy
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-brand-border rounded-2xl p-6 space-y-4">
            <h3 className="font-heading font-bold text-base text-brand-text">
              RTO Service Signal
            </h3>
            <p className="text-xs text-brand-muted leading-relaxed">
              Our Sivananda Colony team coordinates Learner Licence (LLR) filings and permanent licence driving tests at the local Central Coimbatore RTO office directories.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
