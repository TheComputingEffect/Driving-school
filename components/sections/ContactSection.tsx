"use client";

import React from "react";
import { contactInfo } from "@/content/contactInfo";
import { Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-brand-red py-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Ready to start driving?</h2>
            <p className="text-gray-600">Give us a call and book your free demo session today.</p>
          </div>
          <a
            href={`tel:${contactInfo.phone}`}
            className="shrink-0 flex items-center justify-center gap-3 bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-xl transition-colors shadow-md text-lg"
          >
            <Phone className="w-5 h-5 fill-white/10" />
            <span>Call {contactInfo.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
