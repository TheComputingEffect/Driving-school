import React from "react";
import { Phone, MessageSquare, Calendar } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";
import Link from "next/link";

export default function StickyBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-white border-t border-brand-border z-20 flex items-center shadow-lg safe-bottom">
      <div className="grid grid-cols-3 w-full h-full divide-x divide-brand-border">
        {/* Call Button */}
        <a
          href={`tel:${contactInfo.phone}`}
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-brand-text hover:bg-brand-bg transition-colors active:bg-zinc-100"
        >
          <Phone className="w-5 h-5 text-brand-blue" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={contactInfo.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-[#25D366] hover:bg-brand-bg transition-colors active:bg-zinc-100"
        >
          <MessageSquare className="w-5 h-5 fill-[#25D366]/10" />
          <span>WhatsApp</span>
        </a>

        {/* Enquire Now Button */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-brand-red hover:bg-brand-bg transition-colors active:bg-zinc-100"
        >
          <Calendar className="w-5 h-5" />
          <span>Enquire Now</span>
        </Link>
      </div>
    </div>
  );
}
