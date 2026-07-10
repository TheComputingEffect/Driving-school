"use client";

import React, { useState } from "react";
import { contactInfo, BranchInfo } from "@/content/contactInfo";
import { MapPin, Phone, Compass, Info } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

export default function MapSection() {
  const [activeBranchKey, setActiveBranchKey] = useState<"main" | "branch2">("main");
  const activeBranch: BranchInfo = contactInfo.branches[activeBranchKey];

  return (
    <section id="locationSection" className="bg-[#F8FAFC] py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <SectionHeader
          title="Our Training Locations &amp; Branches"
          subtitle="Visit our RTO-approved training academy branches in Coimbatore. Learn in real road environments under professional guidance."
        />

        {/* Location selector toggle cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Main Branch Card */}
          <button
            onClick={() => setActiveBranchKey("main")}
            className={`text-left p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer rounded-2xl border-2 ${
              activeBranchKey === "main"
                ? "bg-white border-brand-red shadow-[0_0_20px_rgba(239,68,68,0.15)] scale-[1.02]"
                : "bg-gray-50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <h3 className="font-heading font-bold text-base text-brand-text">
                  {contactInfo.branches.main.name}
                </h3>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                {contactInfo.branches.main.address}
              </p>
            </div>
            
            <div className="flex items-center justify-between text-xs pt-3 border-t border-brand-border w-full">
              <span className="text-brand-blue font-bold flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                Primary Training Ground
              </span>
              <span className="text-brand-muted font-medium">Kovaipudur Zone</span>
            </div>
          </button>

          {/* Branch 2 Card */}
          <button
            onClick={() => setActiveBranchKey("branch2")}
            className={`text-left p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer rounded-2xl border-2 ${
              activeBranchKey === "branch2"
                ? "bg-white border-brand-blue shadow-[0_0_20px_rgba(59,130,246,0.15)] scale-[1.02]"
                : "bg-gray-50 border-transparent hover:bg-white hover:border-gray-200 hover:shadow-md"
            }`}
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-brand-blue shrink-0" />
                <h3 className="font-heading font-bold text-base text-brand-text">
                  {contactInfo.branches.branch2.name}
                </h3>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed mb-4">
                {contactInfo.branches.branch2.address}
              </p>
            </div>
            
            <div className="flex items-center justify-between text-xs pt-3 border-t border-brand-border w-full">
              <span className="text-brand-blue font-bold flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                City Traffic Center
              </span>
              <span className="text-brand-muted font-medium">Tatabad / Gandhipuram</span>
            </div>
          </button>
        </div>

        {/* Embedded Iframe Container */}
        <div className="relative rounded-2xl border border-brand-border overflow-hidden shadow-sm h-[400px] w-full mb-6 select-none bg-zinc-100">
          <iframe
            title={`${activeBranch.name} Maps Location`}
            src={activeBranch.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[10%] contrast-[110%] absolute inset-0"
          />
        </div>

        {/* SEO schema formatted address block underneath map */}
        <div className="bg-brand-bg rounded-xl p-4 border border-brand-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
          <div className="flex items-center gap-2 text-brand-muted">
            <Info className="w-4 h-4 text-brand-blue shrink-0" />
            <span>
              <strong>Local Signal NAP:</strong> {activeBranch.name} &middot; {activeBranch.address} &middot; Tel: {contactInfo.phoneFormatted}
            </span>
          </div>
          <a
            href={activeBranch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-blue font-bold hover:underline shrink-0"
          >
            Get Directions via Google Maps &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
