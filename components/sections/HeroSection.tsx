/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Star, Shield, MapPin, Phone } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";
import DemoModal from "../shared/DemoModal";

export default function HeroSection({ className = "" }: { className?: string }) {
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className={`bg-gradient-to-b from-[#FAFAFA] to-[#F5F7FA] py-12 md:py-20 flex items-center overflow-hidden border-b border-brand-border ${className}`}>
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-6"
        >
          {/* Social Proof rating card */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 bg-white border border-brand-border/40 rounded-full px-4 py-2 w-fit shadow-xs select-none">
            <div className="flex items-center text-brand-yellow shrink-0">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-yellow text-brand-yellow shrink-0" />
              ))}
            </div>
            <div className="h-4.5 w-px bg-brand-border" />
            <span className="text-xs font-semibold text-brand-text">
              4.9 rating on Google &middot; 5000+ Happy Learners
            </span>
          </motion.div>

          {/* Heading with embedded keywords */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.1] font-heading"
          >
            Best <span className="text-brand-red">Driving School</span> in Coimbatore
          </motion.h1>

          {/* Subheading with naturally embedded locations */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-brand-muted font-normal leading-relaxed max-w-xl"
          >
            Expert instructors. Dual-control safe vehicles. Ladies special training by certified female coaches. Flexible morning and weekend batches. Servicing <span className="text-brand-text font-semibold">Kovaipudur</span>, <span className="text-brand-text font-semibold">Sivananda Colony</span>, and all major areas.
          </motion.p>

          {/* Mini Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-3 max-w-md pt-2 select-none">
            <div className="flex items-center gap-2 bg-white border border-brand-border/40 rounded-xl p-2.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red shrink-0" />
              <span className="text-xs font-semibold text-brand-text">10+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-brand-border/40 rounded-xl p-2.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
              <span className="text-xs font-semibold text-brand-text">Govt Approved School</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-brand-border/40 rounded-xl p-2.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
              <span className="text-xs font-semibold text-brand-text">Ladies Trainers Team</span>
            </div>
            <div className="flex items-center gap-2 bg-white border border-brand-border/40 rounded-xl p-2.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
              <span className="text-xs font-semibold text-brand-text">Flexible Batch Timing</span>
            </div>
          </motion.div>

          {/* Call to Actions (Red primary, Green WhatsApp) */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4"
          >
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold py-3.5 px-6 rounded-lg bg-brand-red text-white hover:bg-red-700 transition-colors uppercase tracking-wide"
            >
              <Calendar className="w-4.5 h-4.5" />
              Book Free Demo &rarr;
            </button>
            
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold py-3.5 px-6 rounded-lg bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-colors uppercase tracking-wide"
            >
              <Phone className="w-4.5 h-4.5" />
              Call Us
            </a>
          </motion.div>
        </motion.div>

        {/* Right illustration column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } as any}
          className="lg:col-span-5 flex justify-center items-center relative w-full h-[400px] lg:h-auto"
        >
          {/* Soft blur backgrounds */}
          <div className="absolute w-56 h-56 bg-brand-blue/8 filter blur-[70px] rounded-full top-[10%] left-[20%] z-0 pointer-events-none" />
          <div className="absolute w-44 h-44 bg-brand-red/5 filter blur-[60px] rounded-full bottom-[15%] right-[10%] z-0 pointer-events-none" />

          {/* Abstract circles decoration */}
          <div className="absolute w-[440px] h-[440px] border border-brand-border/40 rounded-full z-0 pointer-events-none hidden sm:block" />
          <div className="absolute w-[360px] h-[360px] border border-dashed border-brand-border/25 rounded-full z-0 pointer-events-none hidden sm:block" />

          {/* Floating Card 1: Dual Control */}
          <div className="absolute top-[18%] left-[2%] bg-white border border-brand-border/50 rounded-xl p-2.5 shadow-xs flex items-center gap-2 z-10 select-none animate-float-slow hidden sm:flex">
            <div className="w-6 h-6 rounded-lg bg-brand-red-light flex items-center justify-center">
              <Shield className="w-3.5 h-3.5 text-brand-red" />
            </div>
            <span className="text-[10px] font-bold text-brand-text">Dual Control Cars</span>
          </div>

          {/* Floating Card 2: Pickup Available */}
          <div className="absolute bottom-[20%] left-[-2%] bg-white border border-brand-border/50 rounded-xl p-2.5 shadow-xs flex items-center gap-2 z-10 select-none animate-float-medium hidden sm:flex">
            <div className="w-6 h-6 rounded-lg bg-brand-blue-light flex items-center justify-center">
              <MapPin className="w-3.5 h-3.5 text-brand-blue" />
            </div>
            <span className="text-[10px] font-bold text-brand-text">Top Rated</span>
          </div>

          {/* Floating Card 3: Weekend Classes */}
          <div className="absolute top-[12%] right-[2%] bg-white border border-brand-border/50 rounded-xl p-2.5 shadow-xs flex items-center gap-2 z-10 select-none animate-float-slow hidden sm:flex">
            <div className="w-6 h-6 rounded-lg bg-brand-yellow-bg flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-zinc-700" />
            </div>
            <span className="text-[10px] font-bold text-brand-text">Weekend Batches</span>
          </div>

          {/* Animated SVG car illustration using brand blue and light gray */}
          <svg
            className="w-full max-w-[400px] h-auto drop-shadow-sm select-none relative z-10"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background elements */}
            <circle cx="250" cy="250" r="180" fill="var(--color-brand-blue-light)" opacity="0.4" />
            <circle cx="250" cy="250" r="140" fill="var(--color-brand-blue-light)" opacity="0.6" />
            
            {/* Road path */}
            <path
              d="M100 370H400M70 395H430"
              stroke="#E5E7EB"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="12 8"
            />
            <path
              d="M130 382.5H370"
              stroke="var(--color-brand-blue)"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.3"
            />

            {/* Steer/Compass dial outline */}
            <circle
              cx="250"
              cy="210"
              r="75"
              stroke="var(--color-brand-blue)"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              opacity="0.5"
            />
            
            {/* Car body drawing */}
            <g id="car-illustration">
              {/* Wheels */}
              <circle cx="180" cy="330" r="28" fill="#111827" />
              <circle cx="180" cy="330" r="12" fill="#E5E7EB" />
              <circle cx="180" cy="330" r="5" fill="var(--color-brand-blue)" />
              
              <circle cx="320" cy="330" r="28" fill="#111827" />
              <circle cx="320" cy="330" r="12" fill="#E5E7EB" />
              <circle cx="320" cy="330" r="5" fill="var(--color-brand-blue)" />

              {/* Main silhouette chassis */}
              <path
                d="M130 330H152C152 300 170 290 190 290C210 290 220 300 220 330H280C280 300 290 290 310 290C330 290 348 300 348 330H370C385 330 390 320 390 305V280C390 265 375 255 350 255C335 255 320 225 305 210C290 195 260 190 215 190C180 190 160 210 145 235C135 250 120 265 120 285V305C120 320 125 330 130 330Z"
                fill="var(--color-brand-white)"
                stroke="var(--color-brand-blue)"
                strokeWidth="5"
                strokeLinejoin="round"
              />

              {/* Windows */}
              <path
                d="M210 205C185 205 170 220 160 240H220V205H210Z"
                fill="var(--color-brand-blue-light)"
                stroke="var(--color-brand-blue)"
                strokeWidth="4"
                strokeLinejoin="round"
              />
              <path
                d="M232 205V240H290C280 225 270 205 250 205H232Z"
                fill="var(--color-brand-blue-light)"
                stroke="var(--color-brand-blue)"
                strokeWidth="4"
                strokeLinejoin="round"
              />

              {/* Headlights and handles */}
              <circle cx="380" cy="275" r="7" fill="var(--color-brand-yellow)" />
              <rect x="220" y="265" width="12" height="4" rx="2" fill="var(--color-brand-blue)" />
              
              {/* Dual controls icon indicator flag */}
              <rect x="210" y="140" width="80" height="28" rx="8" fill="var(--color-brand-white)" stroke="var(--color-brand-blue)" strokeWidth="2.5" />
              <text x="250" y="158" fill="var(--color-brand-red)" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">
                DUAL CONTROL
              </text>
              <line x1="250" y1="168" x2="250" y2="190" stroke="var(--color-brand-blue)" strokeWidth="2.5" />
            </g>
          </svg>
        </motion.div>
      </div>

      <DemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
}
