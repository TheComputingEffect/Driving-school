"use client";

import React from "react";
import { motion } from "framer-motion";
import CTAButton from "../shared/CTAButton";
import { ShieldCheck, Sparkles, MapPin } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-bg pt-24 pb-16 md:pt-32 md:pb-24 border-b border-brand-border">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red-light/40 to-transparent opacity-50 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand-blue-light/50 to-transparent opacity-50 blur-3xl" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red-light px-3 py-1.5 rounded-full mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Premium Driving & RTO Services
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text font-heading leading-[1.1] mb-6">
            Master the Road with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-blue">
              Confidence & Ease
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed mb-10">
            From comprehensive dual-control driving lessons to hassle-free RTO documentation. We handle everything so you can focus purely on learning to drive safely.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton href="/contact" variant="primary" className="w-full sm:w-auto h-14 text-base px-8 shadow-xl shadow-brand-red/20">
              Book a Free Demo Class
            </CTAButton>
            <CTAButton href="#packages" variant="outline" className="w-full sm:w-auto h-14 text-base px-8 bg-white">
              View Training Packages
            </CTAButton>
          </div>
          
          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-70">
            <div className="flex items-center gap-2 text-sm font-medium text-brand-text">
              <ShieldCheck className="w-5 h-5 text-brand-blue" />
              Govt. Approved Academy
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-brand-text">
              <MapPin className="w-5 h-5 text-brand-blue" />
              Serving All Coimbatore
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
