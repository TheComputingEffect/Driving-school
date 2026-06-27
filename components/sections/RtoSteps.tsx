"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, CalendarCheck, FileCheck, CheckCircle2 } from "lucide-react";

export default function RtoSteps() {
  const steps = [
    {
      icon: FileText,
      title: "1. Document Collection",
      description: "We collect your basic KYC documents (Aadhaar, Photos) right from your doorstep or via WhatsApp."
    },
    {
      icon: CalendarCheck,
      title: "2. Slot Booking & Filing",
      description: "Our experts file the application online and book the earliest available RTO slot that fits your schedule."
    },
    {
      icon: FileCheck,
      title: "3. RTO Visit & Approval",
      description: "We accompany you to the RTO office, guiding you through the biometric or test process instantly."
    },
    {
      icon: CheckCircle2,
      title: "4. Licence Delivered",
      description: "Your smart card driving licence is processed and dispatched directly to your registered home address."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-blue text-white overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold font-heading leading-tight mb-4">
            How Our RTO Assistance Works
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Getting your paperwork sorted has never been easier. We eliminate the confusion and long wait times.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-blue-400/30 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="relative text-center group"
                >
                  {/* Icon Circle */}
                  <div className="w-24 h-24 mx-auto bg-brand-blue border-4 border-blue-400/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-white transition-all duration-300 shadow-xl">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 font-heading">{step.title}</h3>
                  <p className="text-sm text-blue-100 leading-relaxed px-4 md:px-0">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
