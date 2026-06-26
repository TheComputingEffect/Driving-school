/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import { PhoneCall, CalendarRange, Car, Award } from "lucide-react";

interface StepItem {
  number: number;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function HowItWorks() {
  const steps: StepItem[] = [
    {
      number: 1,
      label: "Contact Us / Book Demo",
      description: "Submit a request online or call us directly to book your free trial demo session.",
      icon: PhoneCall
    },
    {
      number: 2,
      label: "Choose Timing & Batch",
      description: "Pick your vehicle preference and select slots from early morning to late evening.",
      icon: CalendarRange
    },
    {
      number: 3,
      label: "Driving Practice Sessions",
      description: "Get certified 1-on-1 on-road training with dual-control cars and simulator prep.",
      icon: Car
    },
    {
      number: 4,
      label: "Appear for Test & Get Licence",
      description: "Complete your practical RTO driving test easily under our instructors' guidance.",
      icon: Award
    }
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <SectionHeader
          badge="Learning Path"
          title="How It Works — Your Road to Licensing"
          subtitle="We make the entire journey of learning to drive and securing your licence transparent and hassle-free."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative grid grid-cols-1 lg:grid-cols-4 gap-8 pt-6"
        >
          {/* Horizontal dotted connector for desktop */}
          <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] border-t-2 border-dashed border-brand-border z-0" />

          {/* Steps */}
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Step Node Icon circle */}
                <div className="w-16 h-16 rounded-full bg-white border-3 border-brand-red flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6 text-brand-red" />
                </div>
                
                {/* Step Label (Step Number + Title) */}
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue mb-1">
                  Step 0{step.number}
                </span>
                
                <h3 className="text-base font-bold text-brand-text mb-3 font-heading leading-tight px-4">
                  {step.label}
                </h3>
                
                {/* Step Description */}
                <p className="text-sm text-brand-muted leading-relaxed max-w-[250px] px-2">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
