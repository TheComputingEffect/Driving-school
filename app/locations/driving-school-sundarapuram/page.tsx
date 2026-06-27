import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import PremiumLocationTemplate from "@/components/locations/PremiumLocationTemplate";

export const metadata = constructMetadata({
  title: "Driving School in Sundarapuram, Coimbatore | K. Priyadharshini",
  description:
    "Looking for a driving school in Sundarapuram? K. Priyadharshini Driving School offers professional car training, ladies classes, and RTO help.",
  path: "/locations/driving-school-sundarapuram",
  keywords: ["Driving School Sundarapuram", "Best Driving Class Sundarapuram", "Driving School Sundarapuram Coimbatore"],
});

export default function SundarapuramLocationPage() {
  const localFaqs = [
    {
      id: "sunda-faq-1",
      question: "Do you offer pick and drop services in Sundarapuram?",
      answer: "Yes, we provide doorstep pick-up and drop-off facility spanning all avenues and residential blocks throughout Sundarapuram."
    },
    {
      id: "sunda-faq-2",
      question: "Which RTO handles Sundarapuram applications?",
      answer: "All driving licence applications for Sundarapuram are routed through the Coimbatore South RTO office directory."
    }
  ];

  return (
    <PremiumLocationTemplate
      title="Driving School Sundarapuram"
      description="Looking for a professional driving school in Sundarapuram? Learn driving on dual-control hatchback and sedan cars with certified male and female tutors."
      areaName="Sundarapuram"
      slug="driving-school-sundarapuram"
      faqs={localFaqs}
    />
  );
}
