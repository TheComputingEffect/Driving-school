"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Compass, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { contactInfo } from "@/content/contactInfo";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import JsonLd from "@/components/seo/JsonLd";
import FAQSchema from "@/components/seo/FAQSchema";
import { getBranchLocalBusinessSchema } from "@/lib/schema/localBusiness";
import { locations } from "@/content/locations";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface PremiumLocationTemplateProps {
  title: string;
  description: string;
  areaName: string;
  slug: string;
  faqs: FAQ[];
}

export default function PremiumLocationTemplate({
  title,
  description,
  areaName,
  slug,
  faqs
}: PremiumLocationTemplateProps) {
  const crumbs = [
    { name: "Locations", url: "/locations" },
    { name: title, url: `/locations/${slug}` }
  ];

  const localBusinessSchema = getBranchLocalBusinessSchema("main");
  
  // Find location data from content/locations.ts if it exists to get the map URL
  const locationData = locations.find(l => l.slug === slug);
  const mapUrl = locationData?.mapUrl || contactInfo.branches.main.mapUrl;

  return (
    <div className="flex-1 bg-brand-bg pb-20">
      <BreadcrumbSchema items={crumbs} />
      <JsonLd schema={localBusinessSchema} />
      <FAQSchema items={faqs} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[#0B1120] border-b border-white/10">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/10 to-transparent pointer-events-none" />
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 bg-brand-red/10 text-brand-red text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6 border border-brand-red/20"
            >
              <MapPin className="w-4 h-4" />
              Serving {areaName}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white font-heading leading-tight mb-6"
            >
              Driving School in <span className="text-brand-red">{areaName}</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl"
            >
              {description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold py-3.5 px-8 rounded-full transition-all shadow-lg shadow-brand-red/20"
              >
                Enquire Now
              </Link>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-bold py-3.5 px-8 rounded-full transition-all border border-white/10"
              >
                WhatsApp Chat &rarr;
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="max-w-[1200px] mx-auto px-4 md:px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text font-heading mb-6">
              Why Choose Us in {areaName}?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                "Doorstep Pickup & Drop",
                "Dual-Control Training Cars",
                "Dedicated Lady Instructors",
                "Flexible Batch Timings"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />
                  <span className="text-brand-text font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <hr className="border-gray-100 mb-10" />

            <h3 className="text-2xl font-bold text-brand-text font-heading mb-6">
              Frequently Asked Questions
            </h3>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-brand-bg rounded-2xl p-6 border border-brand-border">
                  <h4 className="font-bold text-brand-text mb-2 text-lg">{faq.question}</h4>
                  <p className="text-brand-muted leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#0F172A] rounded-3xl p-8 shadow-xl border border-white/10 text-white">
              <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
                <Compass className="w-5 h-5 text-brand-red" />
                Service Quick Details
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Operational Office</span>
                  <span className="font-medium">Kovaipudur Main Road, Coimbatore</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Contact</span>
                  <span className="font-medium">{contactInfo.phoneFormatted}</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-xs text-gray-500 uppercase tracking-wider font-bold">Pickup Zone</span>
                  <span className="font-medium">Door-to-door shuttle in {areaName}</span>
                </li>
              </ul>
              
              <a 
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full bg-white text-[#0F172A] hover:bg-gray-100 font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                Get Directions
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="bg-brand-red rounded-3xl p-8 shadow-xl text-white text-center">
              <Phone className="w-10 h-10 mx-auto mb-4 opacity-80" />
              <h3 className="font-heading font-bold text-2xl mb-2">Ready to Start?</h3>
              <p className="text-white/80 text-sm mb-6">Call us directly to book your first training session.</p>
              <a href={`tel:${contactInfo.phone}`} className="inline-block bg-white text-brand-red font-extrabold text-xl py-3 px-6 rounded-full w-full hover:bg-gray-50 transition-colors">
                {contactInfo.phoneFormatted}
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
