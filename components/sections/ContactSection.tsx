import React from "react";
import { contactInfo } from "@/content/contactInfo";
import { Phone, MessageSquare, Mail, MapPin, Clock, Navigation } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function ContactSection() {
  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Info with rich microdata formatting */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-blue bg-brand-blue-light px-3 py-1 rounded-full mb-3 inline-block">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text font-heading">
                Start Your Journey With {contactInfo.businessName}
              </h2>
            </div>
            
            <p className="text-brand-muted text-base leading-relaxed">
              Have questions about batch timings, fee structures, or licensing documents? Our friendly coaching advisors are here to help. Reach out to us via any of our support channels below.
            </p>

            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text mb-0.5">Academy Address</h4>
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                    {contactInfo.branches.main.address}
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text mb-0.5">Direct Phone Line</h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-xs md:text-sm text-brand-blue font-semibold hover:underline"
                  >
                    {contactInfo.phoneFormatted}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text mb-0.5">Email Support</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-xs md:text-sm text-brand-blue font-semibold hover:underline break-all"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex gap-3.5 items-start">
                <div className="w-10 h-10 rounded-xl bg-white border border-brand-border flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-text mb-0.5">Operating Hours</h4>
                  <p className="text-xs text-brand-muted leading-normal">
                    {contactInfo.operatingHours.weekdays} <br />
                    {contactInfo.operatingHours.sunday}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Action-driven CTA block */}
          <div className="lg:col-span-6 premium-card p-8 flex flex-col space-y-4">
            <h3 className="text-xl font-bold text-brand-text font-heading mb-2">
              Quick Contact Options
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed mb-4">
              Click any of the primary actions below to connect directly with K. Priyadharshini Driving School advisers.
            </p>

            {/* Red button, tel: link */}
            <a
              href={`tel:${contactInfo.phone}`}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-brand-red hover:bg-red-700 text-white font-bold text-sm shadow-sm transition-all active:scale-98 select-none"
            >
              <Phone className="w-5 h-5 fill-white/10" />
              <span>Call Us Now</span>
            </a>

            {/* Green button, wa.me link */}
            <a
              href={contactInfo.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba56] text-white font-bold text-sm shadow-sm transition-all active:scale-98 select-none"
            >
              <MessageSquare className="w-5 h-5 fill-white/10" />
              <span>WhatsApp Chat Advisor</span>
            </a>

            {/* Blue button, mailto: link */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-brand-blue hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition-all active:scale-98 select-none"
            >
              <Mail className="w-5 h-5" />
              <span>Email Support Desk</span>
            </a>

            {/* Gray outline Google Maps link */}
            <a
              href={contactInfo.branches.main.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-brand-border hover:bg-brand-bg text-brand-text font-bold text-sm transition-all active:scale-98 select-none"
            >
              <Navigation className="w-5 h-5 text-brand-blue" />
              <span>Get GPS Navigation Directions</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
