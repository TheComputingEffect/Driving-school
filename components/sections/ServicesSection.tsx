/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { services } from "@/content/services";
import { 
  FileText, 
  RefreshCw, 
  UserCog, 
  MapPin, 
  FileCheck, 
  Building2,
  ChevronRight 
} from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import Link from "next/link";

export default function ServicesSection() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Helper to map dynamic icons to service items based on slug
  const getIcon = (slug: string) => {
    switch (slug) {
      case "driving-licence":
        return FileText;
      case "licence-renewal":
        return RefreshCw;
      case "name-change":
        return UserCog;
      case "address-change":
        return MapPin;
      case "vehicle-fc":
        return FileCheck;
      case "rto-services":
      default:
        return Building2;
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* SEO H2 constraints check: must include Driving Licence Services Coimbatore and RTO Services Coimbatore */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text">
            Licence &amp; RTO Services
          </h2>
          <p className="mt-4 text-lg text-brand-muted font-normal max-w-3xl mx-auto leading-relaxed">
            From fresh smart-card licenses to vehicle fitness certifications, we handle all administrative documentation at local RTOs on your behalf.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = getIcon(service.slug);
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                className="premium-card premium-card-hover group cursor-pointer"
              >
                <Link href="/services" className="p-6 flex flex-col justify-between h-full w-full">
                  <div>
                    {/* Accent blue icon */}
                    <div className="w-10 h-10 rounded-xl bg-brand-blue-light flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-brand-blue" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-brand-text mb-2.5 font-heading">
                      {service.title}
                    </h3>
                  </div>

                  {/* Info backlink */}
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue group-hover:text-blue-800 transition-colors pt-4 select-none">
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
