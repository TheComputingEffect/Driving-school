import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Info, MapPin } from "lucide-react";
import CTAButton from "@/components/shared/CTAButton";

export default function NotFound() {
  return (
    <div className="flex-1 bg-brand-bg flex flex-col justify-center items-center py-20 px-4 text-center">
      <div className="max-w-md w-full">
        {/* Visual 404 badge */}
        <span className="inline-block text-sm font-extrabold uppercase tracking-widest text-brand-red bg-brand-red-light px-4.5 py-2 rounded-full mb-6">
          Error 404
        </span>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-brand-text font-heading tracking-tight mb-4">
          Page Not Found
        </h1>

        <p className="text-sm md:text-base text-brand-muted leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
        </p>

        {/* Navigation fallback directory list */}
        <div className="bg-white border border-brand-border rounded-2xl p-6 text-left mb-8 shadow-sm">
          <h3 className="text-sm font-bold text-brand-text mb-4 flex items-center gap-2">
            <Compass className="w-4.5 h-4.5 text-brand-blue" />
            Quick Navigation Links
          </h3>
          <ul className="space-y-3 text-xs md:text-sm font-medium text-brand-blue">
            <li>
              <Link href="/" className="hover:underline flex items-center gap-1.5">
                &rarr; Home Directory (Explore all details)
              </Link>
            </li>

            <li>
              <Link href="/locations" className="hover:underline flex items-center gap-1.5">
                &rarr; Areas Served (Find locations near you)
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline flex items-center gap-1.5">
                &rarr; Contact Center (Book trial sessions)
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton href="/" variant="primary">
            Return to Homepage
          </CTAButton>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 text-xs font-bold text-brand-text hover:text-brand-blue transition-colors"
          >
            <Info className="w-4 h-4 text-brand-blue" />
            Need Support Help?
          </Link>
        </div>
      </div>
    </div>
  );
}
