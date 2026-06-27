"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { locations } from "@/content/locations";
import { MapPin, ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { contactInfo } from "@/content/contactInfo";

export default function HomeLocations() {
  // Only the two primary branches are interactive
  const primaryLocations = locations.filter(l => l.isPrimaryBranch);
  const [activeLocationId, setActiveLocationId] = useState(primaryLocations[0].slug);
  const activeLocation = primaryLocations.find(l => l.slug === activeLocationId) || primaryLocations[0];

  // Static areas in Coimbatore for geographical context
  const staticAreas = [
    { name: "Saravanampatti", top: "15%", left: "60%" },
    { name: "Kalapatti", top: "20%", left: "75%" },
    { name: "Thudiyalur", top: "15%", left: "40%" },
    { name: "Kavundampalayam", top: "25%", left: "35%" },
    { name: "Vadavalli", top: "25%", left: "20%" },
    { name: "Saibaba Colony", top: "35%", left: "35%" },
    { name: "Gandhipuram", top: "45%", left: "55%" },
    { name: "RS Puram", top: "45%", left: "40%" },
    { name: "Town Hall", top: "55%", left: "50%" },
    { name: "Peelamedu", top: "50%", left: "70%" },
    { name: "Ramanathapuram", top: "55%", left: "65%" },
    { name: "Ondipudur", top: "60%", left: "80%" },
    { name: "Ukkadam", top: "60%", left: "45%" },
    { name: "Singanallur", top: "65%", left: "65%" },
    { name: "Perur", top: "60%", left: "25%" },
    { name: "Kuniamuthur", top: "75%", left: "40%" },
    { name: "Sundarapuram", top: "85%", left: "45%" },
    { name: "Podanur", top: "80%", left: "55%" },
  ];

  // Coordinates for the 2 primary branches
  const branchCoordinates: Record<string, { top: string; left: string }> = {
    "sivananda-colony": { top: "30%", left: "50%" }, // North-central
    "kovaipudur": { top: "65%", left: "30%" }        // Moved inward so it doesn't look outside the city
  };

  return (
    <section className="py-24 bg-[#0B1120] overflow-hidden relative border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-brand-red/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl">
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
              className="mt-4 text-gray-400 text-lg leading-relaxed"
            >
              We cover all major zones in Coimbatore. Select a primary hub on the map to see where we offer dedicated door-step pickup, dual-control cars, and lady trainer facilities.
            </motion.p>
          </div>
          <Link
            href="/locations"
            className="hidden lg:flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors"
          >
            View All Coverage Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Coimbatore Map Area */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[600px] bg-[#0F172A] rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl p-6">
            
            {/* Realistic Coimbatore Vector Map Background */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none" 
              viewBox="0 0 1000 800" 
              fill="none" 
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Map Base */}
              <rect width="1000" height="800" fill="#0B1120" opacity="0.6" />

              {/* Water Bodies (Lakes) */}
              <path d="M450,550 Q480,520 520,530 T530,580 Q480,600 450,550 Z" fill="#0284c7" opacity="0.2"/> 
              <path d="M750,650 Q780,620 830,640 T810,700 Q760,680 750,650 Z" fill="#0284c7" opacity="0.2"/> 
              <path d="M250,450 Q280,420 310,440 T290,500 Q260,480 250,450 Z" fill="#0284c7" opacity="0.2"/> 

              {/* Parks / Forest Reserves */}
              <path d="M0,0 L150,0 Q180,300 100,500 Q50,700 0,800 Z" fill="#166534" opacity="0.15"/> 

              {/* Dense Local Street Grid */}
              <g stroke="#1e293b" strokeWidth="1.5" opacity="0.4">
                {Array.from({ length: 40 }).map((_, i) => (
                  <path key={`h-${i}`} d={`M${(i * 17) % 200},${i * 20 + 50} Q${(i * 23) % 500 + 300},${i * 20 + (i * 7) % 100} 1000,${i * 20 + (i * 11) % 50}`} />
                ))}
                {Array.from({ length: 50 }).map((_, i) => (
                  <path key={`v-${i}`} d={`M${i * 20 + 50},${(i * 31) % 200} Q${i * 20 + (i * 13) % 100},${(i * 19) % 400 + 200} ${i * 20 + (i * 17) % 50},800`} />
                ))}
              </g>

              {/* Premium Layered Ring Roads (Inner & Outer) */}
              <g fill="none">
                {/* Outer Ring Road */}
                <ellipse cx="500" cy="450" rx="350" ry="300" transform="rotate(-15 500 450)" stroke="#0f172a" strokeWidth="8" />
                <ellipse cx="500" cy="450" rx="350" ry="300" transform="rotate(-15 500 450)" stroke="#1e293b" strokeWidth="4" />
                <ellipse cx="500" cy="450" rx="350" ry="300" transform="rotate(-15 500 450)" stroke="#38bdf8" strokeWidth="1" strokeDasharray="15 20" opacity="0.15" />
                
                {/* Inner Ring Road */}
                <ellipse cx="500" cy="420" rx="200" ry="160" transform="rotate(-10 500 420)" stroke="#0f172a" strokeWidth="8" />
                <ellipse cx="500" cy="420" rx="200" ry="160" transform="rotate(-10 500 420)" stroke="#334155" strokeWidth="4" opacity="0.7" />
              </g>

              {/* Major Arterial Roads - Shadow / Base Layer */}
              <g stroke="#0f172a" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" fill="none">
                <path d="M500,400 Q650,350 950,200" />
                <path d="M500,400 Q480,200 450,-50" />
                <path d="M500,400 Q700,550 900,750" />
                <path d="M500,400 Q300,600 150,800" />
                <path d="M500,400 Q520,600 550,850" />
                <path d="M500,400 Q350,350 200,250" />
                <path d="M500,400 Q650,450 850,450" />
              </g>

              {/* Major Arterial Roads - Main Surface Layer */}
              <g stroke="#334155" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" fill="none">
                <path id="road1" d="M500,400 Q650,350 950,200" />
                <path id="road2" d="M500,400 Q480,200 450,-50" />
                <path id="road3" d="M500,400 Q700,550 900,750" />
                <path id="road4" d="M500,400 Q300,600 150,800" />
                <path id="road5" d="M500,400 Q520,600 550,850" />
                <path id="road6" d="M500,400 Q350,350 200,250" />
                <path id="road7" d="M500,400 Q650,450 850,450" />
              </g>

              {/* Central Junction Hub */}
              <circle cx="500" cy="400" r="16" fill="#0B1120" stroke="#334155" strokeWidth="4" />
              <circle cx="500" cy="400" r="6" fill="#475569" />

              {/* Road Highlights (Glowing High-Tech Center Lines) */}
              <g stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="12 18" opacity="0.35" fill="none">
                <path d="M500,400 Q650,350 950,200" />
                <path d="M500,400 Q480,200 450,-50" />
                <path d="M500,400 Q700,550 900,750" />
                <path d="M500,400 Q300,600 150,800" />
                <path d="M500,400 Q520,600 550,850" />
                <path d="M500,400 Q350,350 200,250" />
                <path d="M500,400 Q650,450 850,450" />
              </g>

              {/* Animated Traffic (Moving dots along curved roads) */}
              <circle r="3" fill="#ef4444" filter="blur(1px)">
                <animateMotion dur="6s" repeatCount="indefinite" path="M500,400 Q650,350 950,200" />
              </circle>
              <circle r="3" fill="#3b82f6" filter="blur(1px)">
                <animateMotion dur="8s" repeatCount="indefinite" path="M950,200 Q650,350 500,400" />
              </circle>
              <circle r="3" fill="#ef4444" filter="blur(1px)">
                <animateMotion dur="5s" repeatCount="indefinite" path="M500,400 Q700,550 900,750" />
              </circle>
              <circle r="3" fill="#10b981" filter="blur(1px)">
                <animateMotion dur="7s" repeatCount="indefinite" path="M450,-50 Q480,200 500,400" />
              </circle>
              <circle r="3" fill="#f59e0b" filter="blur(1px)">
                <animateMotion dur="6.5s" repeatCount="indefinite" path="M500,400 Q300,600 150,800" />
              </circle>
              <circle r="3" fill="#3b82f6" filter="blur(1px)">
                <animateMotion dur="5.5s" repeatCount="indefinite" path="M200,250 Q350,350 500,400" />
              </circle>

            </svg>
            
            {/* Soft glow in the center for focus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,transparent_0%,transparent_30%,rgba(11,17,32,0.6)_60%,rgba(11,17,32,1)_100%)] pointer-events-none" />

            {/* Static Area Names (Non-interactive) */}
            {staticAreas.map((area, idx) => (
              <div 
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 flex flex-col items-center"
                style={{ top: area.top, left: area.left }}
              >
                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mb-1.5 shadow-[0_0_8px_rgba(255,255,255,0.5)]"></div>
                <span className="text-[10px] md:text-xs font-semibold text-gray-300 tracking-wider bg-[#0B1120]/80 border border-white/10 backdrop-blur-md px-2 py-0.5 rounded-md shadow-lg">
                  {area.name}
                </span>
              </div>
            ))}

            {/* Interactive Primary Locations */}
            {primaryLocations.map((loc) => {
              const pos = branchCoordinates[loc.slug] || { top: "50%", left: "50%" };
              const isActive = activeLocationId === loc.slug;

              return (
                <button
                  key={loc.slug}
                  onClick={() => setActiveLocationId(loc.slug)}
                  className="absolute transform -translate-x-1/2 -translate-y-full group z-20 focus:outline-none"
                  style={pos}
                >
                  <motion.div 
                    animate={isActive ? { y: [0, -8, 0] } : { y: 0 }}
                    transition={{ repeat: isActive ? Infinity : 0, duration: 2, ease: "easeInOut" }}
                    className="relative flex flex-col items-center"
                  >
                    {/* Active Glow/Ping animation */}
                    {isActive && (
                      <span className="absolute flex h-full w-full top-0 left-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
                      </span>
                    )}

                    <div className={`p-2.5 rounded-full shadow-lg border-2 transition-all duration-300 relative ${
                      isActive 
                        ? "bg-brand-red border-white shadow-[0_0_20px_rgba(239,68,68,0.8)] scale-125 z-30" 
                        : "bg-brand-red/40 border-brand-red/50 hover:bg-brand-red/70 z-20"
                    }`}>
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-white transition-all" />
                    </div>
                    
                    {/* Pin tail */}
                    <div className={`w-0.5 transition-all ${isActive ? "h-4 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" : "h-3 bg-brand-red/50"}`} />
                    
                    {/* Label */}
                    <div className={`absolute top-full mt-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-bold tracking-wide transition-all duration-300 shadow-xl ${
                      isActive 
                        ? "bg-white text-brand-red scale-110 z-30 ring-2 ring-brand-red/20" 
                        : "bg-[#0B1120]/80 border border-white/10 text-gray-400 z-20"
                    }`}>
                      {loc.name}
                    </div>
                  </motion.div>
                </button>
              );
            })}
          </div>

          {/* Right: Address Card details */}
          <div className="lg:col-span-5 flex flex-col justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden"
              >
                {/* Accent glow inside card */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/20 blur-[50px] rounded-full pointer-events-none" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-brand-red rounded-2xl flex items-center justify-center shadow-lg shadow-brand-red/30 shrink-0">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">{activeLocation.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-[15px]">
                  {activeLocation.description}
                </p>
                
                <div className="bg-black/20 rounded-2xl p-5 mb-8 border border-white/5 transition-colors hover:border-brand-red/50 hover:bg-black/40">
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-4 group cursor-pointer">
                    <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-brand-red/20 flex items-center justify-center transition-colors">
                      <Phone className="w-5 h-5 text-emerald-400 group-hover:text-brand-red transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Direct Support</p>
                      <p className="text-lg font-bold text-gray-300 group-hover:text-white mt-0.5 transition-colors">{contactInfo.phoneFormatted}</p>
                    </div>
                  </a>
                </div>

                <div className="mb-8">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-3 block">
                    Near by areas
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeLocation.nearAreas.map((area, idx) => (
                      <span key={idx} className="bg-white/5 border border-white/10 text-gray-300 text-xs px-3.5 py-1.5 rounded-full font-medium cursor-default">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <Link 
                  href={`/locations/driving-school-${activeLocation.slug}`}
                  className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl transition-all uppercase tracking-wider text-sm text-center flex items-center justify-center gap-2 group shadow-lg shadow-brand-red/20 hover:shadow-brand-red/40"
                >
                  Explore Location Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="mt-8 text-center lg:hidden">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium transition-colors text-sm"
          >
            View All Coverage Areas <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
