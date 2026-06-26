import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1121] text-gray-300 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-red/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div 
        className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10"
        itemScope
        itemType="https://schema.org/DrivingSchool"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div className="w-10 h-10 rounded-xl bg-brand-red flex items-center justify-center shrink-0 shadow-lg shadow-brand-red/20">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span 
                  className="font-heading font-extrabold text-xl leading-none text-white tracking-tight"
                  itemProp="name"
                >
                  K. Priyadharshini
                </span>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">
                  Driving School
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm pr-4">
              Coimbatore&apos;s premium Govt. approved driving academy. We focus on building confident, responsible drivers through dual-control vehicles and patient, professional trainers.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              {contactInfo.socialLinks.facebook && (
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all"
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
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-red hover:border-brand-red hover:text-white transition-all"
                  aria-label="Instagram Profile"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Coverage Areas
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/services/driving-licence" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Driving Classes
                </Link>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer">
                  Lady Trainers
                </span>
              </li>
              <li>
                <Link href="/services/licence-renewal" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  RTO Assistance
                </Link>
              </li>
              <li>
                <span className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all cursor-pointer">
                  License Renewal
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">Get In Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div 
                  itemProp="address" 
                  itemScope 
                  itemType="https://schema.org/PostalAddress" 
                  className="text-gray-400 leading-relaxed"
                >
                  <span itemProp="streetAddress">{contactInfo.branches.main.address}</span>
                </div>
              </li>
              <li className="flex gap-3 items-center group">
                <Phone className="w-5 h-5 text-brand-red shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href={`tel:${contactInfo.phone}`} 
                  className="text-gray-400 hover:text-white transition-colors"
                  itemProp="telephone"
                >
                  {contactInfo.phoneFormatted}
                </a>
              </li>
              <li className="flex gap-3 items-center group">
                <Mail className="w-5 h-5 text-brand-red shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href={`mailto:${contactInfo.email}`} 
                  className="text-gray-400 hover:text-white transition-colors break-all"
                  itemProp="email"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex gap-3 items-start group">
                <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-gray-400 text-xs leading-relaxed">
                  <span className="block font-medium text-gray-300">{contactInfo.operatingHours.weekdays}</span>
                  <span className="block">{contactInfo.operatingHours.sunday}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div>
            © {currentYear} K. Priyadharshini Driving School. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link href="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
