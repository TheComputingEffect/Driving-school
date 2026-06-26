import React from "react";
import Link from "next/link";
import CTAButton from "./CTAButton";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

interface ComingSoonProps {
  title: string;
  description: string;
  keyword?: string;
  breadcrumbs?: { name: string; url: string }[];
}

export default function ComingSoon({
  title,
  description,
  keyword = "Driving School Coimbatore",
  breadcrumbs = []
}: ComingSoonProps) {
  return (
    <div className="bg-brand-bg py-20 px-4 sm:px-6 lg:px-8 min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-2xl mx-auto text-center">
        {/* Navigation Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex justify-center items-center gap-2 text-sm text-brand-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-blue transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <span>/</span>
                {idx === breadcrumbs.length - 1 ? (
                  <span className="text-brand-text font-medium truncate max-w-[150px]">{crumb.name}</span>
                ) : (
                  <Link href={crumb.url} className="hover:text-brand-blue transition-colors truncate max-w-[150px]">{crumb.name}</Link>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red-light px-3 py-1 rounded-full mb-4">
          Services Expanding
        </span>
        
        {/* SEO Required H1 */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-brand-text tracking-tight mb-4">
          {title}
        </h1>
        
        <div className="w-16 h-1 bg-brand-red mx-auto rounded-full mb-8"></div>
        
        {/* SEO rich contextual paragraph */}
        <p className="text-lg text-brand-muted leading-relaxed mb-6">
          {description}
        </p>
        
        <p className="text-sm text-brand-muted italic mb-10">
          We are upgrading our curriculum and digital portal to provide the best training resources for our students seeking a <strong className="text-brand-text not-italic font-semibold">{keyword}</strong>.
        </p>

        {/* Three Internal backlinks required */}
        <div className="bg-white rounded-2xl p-6 border border-brand-border mb-10 text-left">
          <h3 className="text-base font-semibold text-brand-text mb-4 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-brand-blue" />
            Quick Resources & Navigation:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <li>
              <Link href="/" className="text-brand-blue hover:underline font-medium block">
                &rarr; Home Directory
              </Link>
              <span className="text-xs text-brand-muted">Explore classes and locations</span>
            </li>

            <li>
              <Link href="/contact" className="text-brand-blue hover:underline font-medium block">
                &rarr; Contact Center
              </Link>
              <span className="text-xs text-brand-muted">Book a demo in Coimbatore</span>
            </li>
          </ul>
        </div>

        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <CTAButton href="/contact" variant="primary">
            Book Free Demo Class
          </CTAButton>
          <Link href="/" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-text hover:text-brand-blue transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
