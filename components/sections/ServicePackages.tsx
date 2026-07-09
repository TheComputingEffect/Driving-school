"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function ServicePackages() {
  const packages = [
    {
      title: "Beginner's Course",
      description: "Perfect for those with zero driving experience.",
      price: "Most Popular",
      popular: true,
      features: [
        "Comprehensive Practical Training",
        "Simulator Sessions Included",
        "LLR & Permanent Licence Processing",
        "City Traffic & Highway Driving",
        "Doorstep Pickup & Drop"
      ]
    },
    {
      title: "Refresher Course",
      description: "For licensed drivers who lack confidence.",
      price: "Quick Fix",
      popular: false,
      features: [
        "Targeted Practical Training",
        "Focus on Weak Areas (Parking, etc.)",
        "Heavy Traffic Exposure",
        "Use your own car or our dual-control car",
        "Flexible Timings"
      ]
    },
    {
      title: "LMV + Two Wheeler",
      description: "Comprehensive combo course for both vehicles.",
      price: "Best Value",
      popular: false,
      features: [
        "Car + Gearless Scooter Training",
        "Combined Licence Processing",
        "Dedicated Female Instructors",
        "RTO Test Assistance",
        "Complete Traffic Rules Theory"
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 md:py-32 bg-gray-50 border-t border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red-light px-3 py-1 rounded-full mb-4">
            Training Packages
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight mb-4">
            Choose Your Learning Path
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            We offer customized training programs tailored to your current skill level. Transparent pricing, no hidden RTO charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative flex flex-col h-full bg-white rounded-3xl p-8 border ${
                pkg.popular 
                  ? "border-brand-red shadow-2xl shadow-brand-red/10 scale-100 md:scale-105 z-10" 
                  : "border-gray-200 shadow-md"
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-red text-white text-xs font-bold uppercase tracking-widest py-1.5 px-4 rounded-full">
                  Highly Recommended
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-brand-text mb-2 font-heading">{pkg.title}</h3>
                <p className="text-sm text-brand-muted mb-4">{pkg.description}</p>
                <div className="text-xl font-bold text-brand-blue">{pkg.price}</div>
              </div>

              <ul className="space-y-4">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm font-medium text-gray-700">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.popular ? "text-brand-red" : "text-brand-blue"}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <CTAButton 
                  href="/contact" 
                  variant={pkg.popular ? "primary" : "outline"} 
                  className="w-full justify-center"
                >
                  Enroll Now
                </CTAButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
