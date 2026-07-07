import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import PremiumLocationTemplate from "@/components/locations/PremiumLocationTemplate";

export const metadata = constructMetadata({
  title: "Driving School in Gandhipuram | KPD",
  description:
    "Looking for a driving school in Gandhipuram? We offer professional car training, lady instructors, and end-to-end RTO services in Gandhipuram, Coimbatore.",
  path: "/locations/driving-school-gandhipuram",
  keywords: ["Driving School Gandhipuram", "Best Driving Class Gandhipuram", "Driving School Gandhipuram Coimbatore"],
});

export default function GandhipuramLocationPage() {
  const localFaqs = [
    {
      id: "gan-faq-1",
      question: "Do you offer doorstep pickup in Gandhipuram?",
      answer: "Yes, we provide door-to-door pick-up and drop-off facility spanning all avenues and blocks in Gandhipuram."
    },
    {
      id: "gan-faq-2",
      question: "Which RTO office covers Gandhipuram?",
      answer: "Gandhipuram is routed under the Central Coimbatore RTO office directory."
    }
  ];

  return (
    <PremiumLocationTemplate
      title="Driving School Gandhipuram"
      description="Looking for a professional driving school in Gandhipuram? Learn driving on dual-control hatchback and sedan cars with certified male and female tutors."
      areaName="Gandhipuram"
      slug="driving-school-gandhipuram"
      faqs={localFaqs}
    />
  );
}
