import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
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
    width="20"
    height="20"
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
    <footer className="bg-[#0B1121] text-gray-300 pt-12 pb-6 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div
        className="max-w-[1050px] mx-auto px-4 md:px-6 relative z-10"
        itemScope
        itemType="https://schema.org/DrivingSchool"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-x-6 mb-8">
          {/* Column 1 – Logo and Description */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2.5 w-fit">
              <Image
                src="/logo_KPD_transparent.png"
                alt="K. Priyadharshini Driving School Logo"
                width={150}
                height={38}
                className="h-9 w-auto object-contain hover:scale-[1.03] transition-transform duration-300"
              />
            </Link>

            <p className="text-gray-400 leading-relaxed text-xs">
              Coimbatore’s premium government-approved driving academy. We focus on building confident, responsible drivers through dual-control vehicles and patient, professional trainers.
            </p>

            {/* Social Links */}
            <div className="flex gap-2.5 pt-1">
              {contactInfo.socialLinks.facebook && (
                <a
                  href={contactInfo.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 hover:border-brand-red/50 hover:bg-brand-red/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label="Facebook Page"
                >
                  <FacebookIcon className="w-3.5 h-3.5" />
                </a>
              )}
              {contactInfo.socialLinks.instagram && (
                <a
                  href={contactInfo.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 hover:border-brand-red/50 hover:bg-brand-red/10 flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2 – Explore */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h3 className="text-white font-bold tracking-wide uppercase text-xs">
              Explore
            </h3>

            <ul className="space-y-2 text-xs">
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

          {/* Column 3 – Address and Phone Numbers */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-white font-bold tracking-wide uppercase text-xs">
              Address &amp; Phone
            </h3>

            <div className="space-y-4 text-xs">
              {/* Kovaipudur Branch */}
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs">Kovaipudur Branch</span>
                  <a
                    href={contactInfo.branches.main.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 leading-normal hover:text-white hover:underline transition-all block text-xs mt-0.5"
                  >
                    Near TV Sekaran School, Kovaipudur, Coimbatore – 641042
                  </a>
                  <a
                    href="tel:+919843407878"
                    className="text-gray-400 hover:text-white transition-colors text-xs font-semibold mt-1 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>+91 98434 07878</span>
                  </a>
                </div>
              </div>

              {/* Sivananda Colony Branch */}
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs">Sivananda Colony Branch</span>
                  <a
                    href={contactInfo.branches.branch2.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 leading-normal hover:text-white hover:underline transition-all block text-xs mt-0.5"
                  >
                    15, Sivananda Colony, Tatabad, Coimbatore, Tamil Nadu 641012
                  </a>
                  <a
                    href="tel:+919345145678"
                    className="text-gray-400 hover:text-white transition-colors text-xs font-semibold mt-1 flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-red shrink-0" />
                    <span>+91 93451 45678</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4 – Email and Working Hours */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h3 className="text-white font-bold tracking-wide uppercase text-xs">
              Email &amp; Hours
            </h3>

            <div className="space-y-4 text-xs">
              {/* Email */}
              <div className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs">Email</span>
                  <a
                    href="mailto:kpriyadharshinidrivingschool@gmail.com"
                    className="text-gray-400 hover:text-white transition-colors text-xs mt-0.5"
                    itemProp="email"
                  >
                    kpriyadharshinidrivingschool@gmail.com
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-bold text-white text-xs">Working Hours</span>
                  <div className="text-gray-400 text-xs leading-normal mt-0.5">
                    <span className="block text-gray-300">
                      Monday–Saturday: 6:00 AM – 5:30 PM
                    </span>
                    <span className="block">
                      Sunday: 8:00 AM – 2:00 PM
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span>
              © {currentYear} K. Priyadharshini Driving School. All rights reserved.
            </span>

            <span className="text-gray-600">
              Designed &amp; Developed by The Computing Effect
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