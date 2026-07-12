import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";

export const metadata = constructMetadata({
  title: "Terms and Conditions | K. Priyadharshini Driving School",
  description: "Read the terms and conditions governing the driving lessons and RTO services at K. Priyadharshini Driving School.",
  path: "/terms-and-conditions",
});

export default function TermsAndConditionsPage() {
  return (
    <div className="py-16 md:py-24 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-brand-text font-heading mb-8">
          Terms &amp; Conditions
        </h1>
        <div className="prose prose-slate max-w-none text-brand-muted space-y-6">
          <p className="text-sm font-medium">Last updated: October 2026</p>
          
          <p>
            Welcome to K. Priyadharshini Driving School. By enrolling in our training courses or using our services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">1. Training and Scheduling</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Students must carry a valid Learner&apos;s Licence (LLR) during all practical driving sessions.</li>
            <li>Class timings must be scheduled in advance. Cancellations or rescheduling requests must be made at least 24 hours prior to the scheduled slot.</li>
            <li>Doorstep pickup and drop services are provided within our designated coverage areas in Coimbatore.</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">2. Fees and Payments</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>All fees must be paid according to the chosen package terms. Initial deposit or full payment is required prior to commencing practical training.</li>
            <li>Government RTO fees for licence testing, renewals, and other documentation are subject to government regulations and are paid directly or as specified in our services packages.</li>
            <li>Fees paid for driving classes and RTO processing are non-refundable.</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">3. RTO and Licence Assistance</h2>
          <p>
            While we provide complete documentation and slots booking assistance for Learner&apos;s Licences (LLR), Permanent Licences, and renewals, passing the final practical driving test is subject to the candidate&apos;s performance and the RTO inspector&apos;s assessment. We cannot guarantee passing results but will provide comprehensive guidance.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">4. Liability</h2>
          <p>
            Our training vehicles are equipped with dual control systems and are fully insured for training purposes. Students must follow all traffic rules, safety protocols, and instructor guidance at all times.
          </p>

          <h2 className="text-xl font-bold text-brand-text mt-8 mb-4">5. Contact Information</h2>
          <p>
            If you have any questions or feedback regarding these terms, please contact us at:
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
