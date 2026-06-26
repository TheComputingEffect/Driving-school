/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, 
  Car, 
  MapPin, 
  Users, 
  Calendar, 
  GraduationCap, 
  Clock, 
  Building2, 
  FileText 
} from "lucide-react";

interface MarqueeItem {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function MarqueeSection() {
  const items: MarqueeItem[] = [
    { text: "Govt Approved Driving School", icon: Shield },
    { text: "Lady Trainers Available", icon: Users },
    { text: "Home Pickup & Drop", icon: MapPin },
    { text: "Weekend Classes Available", icon: Calendar },
    { text: "Special Student Discounts", icon: GraduationCap },
    { text: "Driving Licence Assistance", icon: FileText },
    { text: "Flexible Batches & Timings", icon: Clock },
    { text: "RTO Services Support", icon: Building2 },
    { text: "Beginner Friendly Training", icon: Car }
  ];

  // Double the list to ensure a seamless infinite wrapping loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <section className="bg-[#F8FAFC] py-6 overflow-hidden select-none">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 relative">
        {/* Soft fading overlays on left and right borders to reduce harshness */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none" />

        {/* Scrolling wrapper */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: [0, "-33.33%"] }}
            transition={{
              ease: "linear",
              duration: 28,
              repeat: Infinity,
            } as any}
            // Pause on hover
            whileHover={{ animationPlayState: "paused" } as any}
            className="flex gap-4 whitespace-nowrap"
          >
            {duplicatedItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-brand-border/40 rounded-xl shadow-xs"
                >
                  <Icon className="w-4 h-4 text-brand-blue shrink-0" />
                  <span className="text-xs md:text-sm font-semibold text-brand-text">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
