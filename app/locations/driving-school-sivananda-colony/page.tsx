import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import PremiumLocationTemplate from "@/components/locations/PremiumLocationTemplate";

export const metadata = constructMetadata({
  title: "Driving School in Sivananda Colony | KPD",
  description:
    "Professional driving school in Sivananda Colony. Experience quality car driving lessons, ladies batches, and RTO assistance in Sivananda Colony.",
  path: "/locations/driving-school-sivananda-colony",
  keywords: ["Driving School Sivananda Colony", "Best Driving Class Sivananda Colony", "Driving School Sivananda Colony Coimbatore"],
});

export default function SivanandaColonyLocationPage() {
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

  return (
    <PremiumLocationTemplate
      title="Driving School Sivananda Colony"
      description="Looking for a professional driving school in Sivananda Colony? Learn driving on dual-control hatchback and sedan cars with certified male and female tutors."
      areaName="Sivananda Colony"
      slug="driving-school-sivananda-colony"
      faqs={localFaqs}
    />
  );
}
