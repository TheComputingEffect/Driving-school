import React from "react";
import Link from "next/link";
import Image from "next/image";
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
              <Image src="/logo_KPD-footer.png" alt="K. Priyadharshini Driving School Logo" width={160} height={40} className="h-10 w-auto object-contain grayscale brightness-200 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all" />
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm pr-4">
              Coimbatore&apos;s premium Govt. approved driving academy. We focus on building confident, responsible drivers through dual-control vehicles and patient, professional trainers.
            </p>

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
                <Link href="/services/driving-licence" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  Lady Trainers
                </Link>
              </li>
              <li>
                <Link href="/services/rto-services" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  RTO Assistance
                </Link>
              </li>
              <li>
                <Link href="/services/licence-renewal" className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all">
                  License Renewal
                </Link>
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
              <li className="flex gap-3 items-start group">
                <Phone className="w-5 h-5 text-brand-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col gap-1">
                  <a 
                    href={`tel:${contactInfo.branches.main.phone}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +91 98434 07878 <span className="text-gray-500 text-xs ml-1">(Kovaipudur)</span>
                  </a>
                  <a 
                    href={`tel:${contactInfo.branches.branch2.phone}`} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    +91 93451 45678 <span className="text-gray-500 text-xs ml-1">(Sivananda Colony)</span>
                  </a>
                </div>
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
          <div className="flex flex-col items-center md:items-start gap-1">
            <span>© {currentYear} K. Priyadharshini Driving School. All rights reserved.</span>
            <span className="text-gray-600">Designed & Developed by The Computing Effect</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
