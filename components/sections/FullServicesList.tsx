"use client";

import React from "react";
import { services } from "@/content/services";
import { FileText, RefreshCw, UserCog, MapPin, FileCheck, Building2 } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

export default function FullServicesList() {
  const getIcon = (slug: string) => {
    switch (slug) {
      case "driving-licence": return FileText;
      case "licence-renewal": return RefreshCw;
      case "name-change": return UserCog;
      case "address-change": return MapPin;
      case "vehicle-fc": return FileCheck;
      case "rto-services":
      default: return Building2;
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <SectionHeader
          title="All Licence & RTO Services"
          subtitle="Comprehensive details on the administrative support we provide at the Coimbatore RTO."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = getIcon(service.slug);
            return (
              <div
                key={service.id}
                className="bg-brand-bg rounded-2xl p-8 border border-brand-border flex flex-col h-full"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-brand-blue" />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-brand-muted leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                
                <ul className="space-y-3 mt-auto pt-6 border-t border-brand-border/50">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-brand-text font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
