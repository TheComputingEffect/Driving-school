import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import PremiumLocationTemplate from "@/components/locations/PremiumLocationTemplate";

export const metadata = constructMetadata({
  title: "Driving School in Kuniamuthur | KPD",
  description:
    "Enroll at our driving school in Kuniamuthur. We offer comprehensive car training, dedicated ladies classes, and RTO support in Kuniamuthur, Coimbatore.",
  path: "/locations/driving-school-kuniamuthur",
  keywords: ["Driving School Kuniamuthur", "Best Driving Class Kuniamuthur", "Driving School Kuniamuthur Coimbatore"],
});

export default function KuniamuthurLocationPage() {
  const localFaqs = [
    {
      id: "kunia-faq-1",
      question: "Do you offer doorstep pickup in Kuniamuthur?",
      answer: "Yes, we provide door-to-door pick-up and drop-off facility spanning all avenues and residential blocks throughout Kuniamuthur."
    },
    {
      id: "kunia-faq-2",
      question: "Which branch handles Kuniamuthur students?",
      answer: "Kuniamuthur students are trained via our Kovaipudur head office branch, which is situated just 10 minutes away."
    }
  ];

  return (
    <PremiumLocationTemplate
      title="Driving School Kuniamuthur"
      description="Looking for a professional driving school in Kuniamuthur? Learn driving on dual-control hatchback and sedan cars with certified male and female tutors."
      areaName="Kuniamuthur"
      slug="driving-school-kuniamuthur"
      faqs={localFaqs}
    />
  );
}
