import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import PremiumLocationTemplate from "@/components/locations/PremiumLocationTemplate";

export const metadata = constructMetadata({
  title: "Driving School in RS Puram | KPD",
  description:
    "Top-rated driving school in RS Puram. We deliver premium car training, ladies driving classes, and seamless RTO services in RS Puram, Coimbatore.",
  path: "/locations/driving-school-rs-puram",
  keywords: ["Driving School RS Puram", "Best Driving Class RS Puram", "Driving School RS Puram Coimbatore"],
});

export default function RsPuramLocationPage() {
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

  return (
    <PremiumLocationTemplate
      title="Driving School RS Puram"
      description="Looking for a professional driving school in RS Puram? Learn driving on dual-control hatchback and sedan cars with certified male and female tutors."
      areaName="RS Puram"
      slug="driving-school-rs-puram"
      faqs={localFaqs}
    />
  );
}
