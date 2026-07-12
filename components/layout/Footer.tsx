import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Car } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

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
              <Image
                src="/logo_KPD.png"
                alt="K. Priyadharshini Driving School Logo"
                width={180}
                height={45}
                className="h-10 md:h-12 w-auto object-contain hover:scale-[1.03] transition-transform duration-300 bg-white/90 p-1.5 rounded-lg"
              />
            </Link>

            <p className="text-gray-400 leading-relaxed text-sm pr-4">
              Coimbatore&apos;s premium Govt. approved driving academy. We
              focus on building confident, responsible drivers through
              dual-control vehicles and patient, professional trainers.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {contactInfo.socialLinks.facebook && (
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-brand-red/50 hover:bg-brand-red/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label="Facebook Page"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {contactInfo.socialLinks.instagram && (
                <a
                  href={contactInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:border-brand-red/50 hover:bg-brand-red/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 lg:col-start-6 flex flex-col space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Our Services
                </Link>
              </li>

              <li>
                <Link
                  href="/locations"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Coverage Areas
                </Link>
              </li>

              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Photo Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">
              Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/driving-licence"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Driving Licence Application
                </Link>
              </li>

              <li>
                <Link
                  href="/services/licence-renewal"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Licence Renewal
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Name Change
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Address Change
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  Vehicle FC Upgrade
                </Link>
              </li>

              <li>
                <Link
                  href="/services/rto-services"
                  className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all"
                >
                  RTO Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-3 flex flex-col space-y-6">
            <h3 className="text-white font-bold tracking-wide uppercase text-sm">
              Get In Touch
            </h3>

            <ul className="space-y-6 text-sm">
              {/* Kovaipudur Branch */}
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs uppercase tracking-wide">Kovaipudur Branch (Main)</span>
                  <a
                    href={contactInfo.branches.main.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 leading-relaxed hover:text-white hover:underline transition-all block text-xs mt-1"
                  >
                    {contactInfo.branches.main.address}
                  </a>
                  <a
                    href="tel:+919843407878"
                    className="text-gray-400 hover:text-white transition-colors text-xs font-semibold mt-1 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>98434 07878</span>
                  </a>
                </div>
              </li>

              {/* Sivananda Colony Branch */}
              <li className="flex gap-3 items-start group">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs uppercase tracking-wide">Sivananda Colony Branch</span>
                  <a
                    href={contactInfo.branches.branch2.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 leading-relaxed hover:text-white hover:underline transition-all block text-xs mt-1"
                  >
                    {contactInfo.branches.branch2.address}
                  </a>
                  <a
                    href="tel:+919345145678"
                    className="text-gray-400 hover:text-white transition-colors text-xs font-semibold mt-1 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>93451 45678</span>
                  </a>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-3 items-center group">
                <Mail className="w-5 h-5 text-brand-red shrink-0 group-hover:scale-110 transition-transform" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-gray-400 hover:text-white transition-colors break-all text-xs"
                  itemProp="email"
                >
                  {contactInfo.email}
                </a>
              </li>

              {/* Operating Hours */}
              <li className="flex gap-3 items-start group">
                <Clock className="w-5 h-5 text-brand-red shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div className="text-gray-400 text-xs leading-relaxed">
                  <span className="block font-medium text-gray-300">
                    {contactInfo.operatingHours.weekdays}
                  </span>
                  <span className="block">
                    {contactInfo.operatingHours.sunday}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span>
              © {currentYear} K. Priyadharshini Driving School. All rights
              reserved.
            </span>

            <span className="text-gray-600">
              Designed & Developed by The Computing Effect
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}