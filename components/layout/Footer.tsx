import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-brand-border pt-16 pb-24 lg:pb-12 text-sm text-brand-text">
      {/* Schema Microdata wrapper for LocalBusiness SEO signals */}
      <div 
        className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        itemScope
        itemType="https://schema.org/DrivingSchool"
      >
        {/* Col 1: Brand Profile */}
        <div className="flex flex-col space-y-4">
          <div className="flex items-center gap-2">
            <svg
              className="w-8 h-8 text-brand-red shrink-0"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="22" fill="var(--color-brand-red)" />
              <path
                d="M32 70V30H46C55 30 60 35 60 41C60 47 55 51 46 51H39V70H32ZM39 44H45C49 44 52 42.5 52 40.5C52 38.5 49 37 45 37H39V44Z"
                fill="white"
              />
              <path
                d="M62 70V51H69C75 51 78 54 78 58C78 62 75 70 69 70H62ZM69 64C72 64 74 61 74 59.5C74 58 72 57 69 57H67V64H69Z"
                fill="white"
              />
            </svg>
            <div className="flex flex-col">
              <span 
                className="font-heading font-extrabold text-sm leading-tight text-brand-text"
                itemProp="name"
              >
                K. Priyadharshini
              </span>
              <span className="text-[9px] font-bold text-brand-muted uppercase tracking-widest leading-none">
                Driving School
              </span>
            </div>
          </div>
          <p className="text-brand-muted leading-relaxed">
            Coimbatore&apos;s leading RTO-approved driving academy. Providing professional, safe, and ladies-focused driver education with certified trainers.
          </p>
          <div className="flex items-center space-x-3 pt-2">
            {contactInfo.socialLinks.facebook && (
              <a
                href={contactInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-bg hover:bg-brand-blue-light hover:text-brand-blue text-brand-muted transition-colors"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            )}
            {contactInfo.socialLinks.instagram && (
              <a
                href={contactInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-bg hover:bg-brand-blue-light hover:text-brand-blue text-brand-muted transition-colors"
                aria-label="Instagram Profile"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            )}
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-heading font-bold text-base text-brand-text">Quick Links</h3>
          <ul className="space-y-2.5">
            <li>
              <Link href="/" className="text-brand-muted hover:text-brand-blue transition-colors">
                Home Directory
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-brand-muted hover:text-brand-blue transition-colors">
                About Academy
              </Link>
            </li>
            <li>
              <Link href="/courses" className="text-brand-muted hover:text-brand-blue transition-colors">
                Driving Courses
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-brand-muted hover:text-brand-blue transition-colors">
                RTO Assistance
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-brand-muted hover:text-brand-blue transition-colors">
                Tips & Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-brand-muted hover:text-brand-blue transition-colors">
                Enrollment Center
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Services Offered */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-heading font-bold text-base text-brand-text">Our Programs</h3>
          <ul className="space-y-2.5">
            <li>
              <Link href="/courses/car-driving" className="text-brand-muted hover:text-brand-blue transition-colors">
                Car Driving Lessons
              </Link>
            </li>
            <li>
              <Link href="/courses/ladies-driving" className="text-brand-muted hover:text-brand-blue transition-colors">
                Ladies Driving Classes
              </Link>
            </li>
            <li>
              <Link href="/courses/manual-car" className="text-brand-muted hover:text-brand-blue transition-colors">
                Manual Gear Training
              </Link>
            </li>
            <li>
              <Link href="/courses/automatic-car" className="text-brand-muted hover:text-brand-blue transition-colors">
                Automatic Car Training
              </Link>
            </li>
            <li>
              <Link href="/services/driving-licence" className="text-brand-muted hover:text-brand-blue transition-colors">
                Driving Licence Apply
              </Link>
            </li>
            <li>
              <Link href="/services/licence-renewal" className="text-brand-muted hover:text-brand-blue transition-colors">
                Licence Renewal Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: NAP (Name, Address, Phone) */}
        <div className="flex flex-col space-y-4">
          <h3 className="font-heading font-bold text-base text-brand-text">Head Office</h3>
          <ul className="space-y-3">
            <li className="flex gap-2.5 items-start">
              <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div 
                itemProp="address" 
                itemScope 
                itemType="https://schema.org/PostalAddress" 
                className="text-brand-muted leading-normal"
              >
                <span itemProp="streetAddress">{contactInfo.branches.main.address}</span>
              </div>
            </li>
            <li className="flex gap-2.5 items-center">
              <Phone className="w-5 h-5 text-brand-blue shrink-0" />
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="text-brand-muted hover:text-brand-blue transition-colors font-medium"
                itemProp="telephone"
              >
                {contactInfo.phoneFormatted}
              </a>
            </li>
            <li className="flex gap-2.5 items-center">
              <Mail className="w-5 h-5 text-brand-blue shrink-0" />
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="text-brand-muted hover:text-brand-blue transition-colors break-all"
                itemProp="email"
              >
                {contactInfo.email}
              </a>
            </li>
            <li className="flex gap-2.5 items-start">
              <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div className="text-brand-muted text-xs leading-normal">
                <span className="block font-semibold">{contactInfo.operatingHours.weekdays}</span>
                <span className="block">{contactInfo.operatingHours.sunday}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-brand-border flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-muted">
        <div>
          © {currentYear} K. Priyadharshini Driving School. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <Link href="/about" className="hover:text-brand-text transition-colors">Privacy Policy</Link>
          <span>·</span>
          <Link href="/contact" className="hover:text-brand-text transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
