"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { locations } from "@/content/locations";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { contactInfo } from "@/content/contactInfo";

export default function HomeLocations() {
  const primaryLocations = locations.filter(l => l.isPrimaryBranch);
  const [activeLocationId, setActiveLocationId] = useState(primaryLocations[0].slug);

  const activeLocation = primaryLocations.find(l => l.slug === activeLocationId) || primaryLocations[0];

  return (
    <section className="py-24 bg-[#111827] overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-blue/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-white tracking-tight font-heading"
          >
            Our <span className="text-brand-red">Training Hubs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-xl text-lg"
          >
            Find a training center near you in Coimbatore. We currently operate from two main premium hubs with pick-up & drop facilities.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left: Map Graphic Area */}
          <div className="w-full lg:w-3/5 relative h-[400px] md:h-[500px] bg-[#1F2937] rounded-3xl border border-gray-700 overflow-hidden shadow-2xl">
            {/* Winding Road SVG */}
            <svg 
              className="absolute inset-0 w-full h-full text-gray-600 opacity-30" 
              viewBox="0 0 800 600" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              <path 
                d="M-50 150 C 200 150, 200 450, 400 450 C 600 450, 600 150, 850 150" 
                stroke="currentColor" 
                strokeWidth="40" 
                strokeLinecap="round" 
              />
              <path 
                d="M-50 150 C 200 150, 200 450, 400 450 C 600 450, 600 150, 850 150" 
                stroke="#1F2937" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeDasharray="10 10" 
              />
            </svg>

            {/* Location Pins */}
            {primaryLocations.map((loc, idx) => {
              // Hardcoded positions for visual effect along the SVG path
              const positions = [
                { top: "25%", left: "30%" },
                { top: "70%", left: "60%" }
              ];
              const pos = positions[idx % positions.length];
              const isActive = activeLocationId === loc.slug;

              return (
                <button
                  key={loc.slug}
                  onClick={() => setActiveLocationId(loc.slug)}
                  className="absolute transform -translate-x-1/2 -translate-y-full group z-20 focus:outline-none"
                  style={pos}
                >
                  <motion.div 
                    animate={isActive ? { y: [0, -10, 0] } : { y: 0 }}
                    transition={{ repeat: isActive ? Infinity : 0, duration: 2, ease: "easeInOut" }}
                    className="relative flex flex-col items-center"
                  >
                    <div className={`p-3 rounded-full shadow-lg border-2 transition-all ${
                      isActive 
                        ? "bg-brand-red border-white shadow-brand-red/50 scale-110" 
                        : "bg-gray-800 border-gray-600 hover:border-brand-red hover:bg-gray-700"
                    }`}>
                      <MapPin className={`w-6 h-6 ${isActive ? "text-white" : "text-gray-400"}`} />
                    </div>
                    
                    {/* Pin tail */}
                    <div className={`w-1 h-4 ${isActive ? "bg-white" : "bg-gray-600"}`} />
                    
                    {/* Label */}
                    <div className={`absolute top-full mt-2 px-3 py-1.5 rounded-md whitespace-nowrap text-xs font-bold tracking-wide transition-colors ${
                      isActive ? "bg-white text-gray-900" : "bg-gray-800 text-gray-300"
                    }`}>
                      {loc.name}
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Right: Address Card details */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.slug}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8"
              >
                <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center mb-6 border border-brand-red/30">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{activeLocation.name} Branch</h3>
                
                <p className="text-gray-400 leading-relaxed mb-6">
                  {activeLocation.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                    <p className="text-sm font-semibold text-gray-300 leading-snug">
                      Main Hub, {activeLocation.name}, <br/>
                      Coimbatore, Tamil Nadu, INDIA.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-500 shrink-0" />
                    <p className="text-sm font-semibold text-gray-300 leading-snug">
                      {contactInfo.phoneFormatted}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3 block">
                    Areas Served
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeLocation.nearAreas.slice(0, 4).map((area, idx) => (
                      <span key={idx} className="bg-gray-800 border border-gray-700 text-gray-300 text-xs px-3 py-1.5 rounded-full font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Link 
                    href={`/locations/${activeLocation.slug}`}
                    className="flex-1 bg-brand-red hover:bg-red-700 text-white font-bold py-3.5 px-4 rounded-xl transition-colors uppercase tracking-wider text-xs text-center flex items-center justify-center gap-2"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
