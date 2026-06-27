import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import PremiumLocationTemplate from "@/components/locations/PremiumLocationTemplate";

export const metadata = constructMetadata({
  title: "Driving School in Kovaipudur, Coimbatore | K. Priyadharshini",
  description:
    "Looking for a driving school in Kovaipudur? K. Priyadharshini Driving School offers expert car training, ladies classes, and RTO services near Kovaipudur, Coimbatore.",
  path: "/locations/driving-school-kovaipudur",
  keywords: ["Driving School Kovaipudur", "Best Driving Class Kovaipudur", "Ladies Driving Kovaipudur"],
});

export default function KovaipudurLocationPage() {
  const localFaqs = [
    {
      id: "kovai-faq-1",
      question: "Where is your driving school located in Kovaipudur?",
      answer: "Our main branch is located at 24/A, Main Road, Kovaipudur, Coimbatore. We are situated in a highly accessible zone."
    },
    {
      id: "kovai-faq-2",
      question: "Do you offer door-to-door pickup in Kovaipudur?",
      answer: "Yes, we provide door-to-door pick-up and drop-off facility spanning all avenues and residential blocks throughout Kovaipudur."
    }
  ];

  return (
    <PremiumLocationTemplate
      title="Driving School Kovaipudur"
      description="Looking for a professional driving school in Kovaipudur? Learn driving on dual-control hatchback and sedan cars with certified male and female tutors."
      areaName="Kovaipudur"
      slug="driving-school-kovaipudur"
      faqs={localFaqs}
    />
  );
}
