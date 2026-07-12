import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Privacy Policy | K. Priyadharshini Driving School",
  description: "Read our privacy policy to understand how we collect, use, and protect your personal information at K. Priyadharshini Driving School.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand-text font-heading mb-8">
          Privacy Policy
        </h1>
        <div className="prose prose-slate max-w-none text-brand-muted space-y-6">
          <p className="text-sm font-medium">Last updated: October 2026</p>
          
          <p>
            At K. Priyadharshini Driving School, we value your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, enroll in our courses, or use our services.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We collect personal information that you provide to us directly, such as when you fill out a contact form, register for driving classes, or call our branches. This information may include:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Name, email address, and phone number</li>
            <li>Address and preferred training location</li>
            <li>Driving licence or LLR details (for RTO and licencing support)</li>
            <li>Message content and feedback</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Process your enrollment and schedule driving lessons</li>
            <li>Provide customer support and respond to your enquiries</li>
            <li>Submit RTO documentation on your behalf for licence services</li>
            <li>Send important updates, class confirmations, and reminders</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">3. Data Sharing and Protection</h2>
          <p>
            We do not sell, trade, or share your personal data with third parties except as necessary to provide our services (such as submitting documents to government RTO portals) or as required by law. We implement appropriate technical security measures to prevent unauthorized access or disclosure of your information.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="font-semibold text-brand-text">
            Email: kpriyadharshinidrivingschool@gmail.com<br />
            Kovaipudur Branch: 98434 07878<br />
            Sivananda Colony Branch: 93451 45678
          </p>
        </div>
      </div>
    </div>
  );
}
