import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import ContactPageClient from "./ContactPageClient";

export const metadata = constructMetadata({
  title: "Contact K. Priyadharshini Driving School",
  description:
    "Get in touch with K. Priyadharshini Driving School in Coimbatore. Contact us via phone or WhatsApp, locate our branches, or book your training session.",
  path: "/contact",
  keywords: [
    "Contact Driving School Coimbatore",
    "K. Priyadharshini Driving School Phone Number",
    "Kovaipudur Driving School Location",
    "Priyadharshini Driving School Contact Us",
    "Enroll driving school Coimbatore",
    "Driving training enquiry Coimbatore",
    "Sivananda Colony Driving School Support"
  ],
});

export default function ContactPage() {
  return <ContactPageClient />;
}
