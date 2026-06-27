"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function DetailedServices() {
  const details = [
    {
      title: "Comprehensive Driving Training",
      badge: "Our Core Service",
      description: "Learn to drive confidently in real traffic conditions. Our structured curriculum takes you from basic vehicle control to advanced defensive driving techniques.",
      features: [
        "Dedicated Female Instructors available",
        "Dual-control modern cars for maximum safety",
        "City traffic, highway, and night driving exposure",
        "Doorstep pickup and drop facility"
      ],
      image: "https://images.unsplash.com/photo-1549317336-206569e8475c?q=80&w=2070&auto=format&fit=crop",
      flipped: false
    },
    {
      title: "Hassle-Free RTO Assistance",
      badge: "Save Time",
      description: "Skip the long queues and confusing paperwork. We provide end-to-end support for all your Regional Transport Office requirements in Coimbatore.",
      features: [
        "New LLR and Permanent Licence filing",
        "Licence Renewal and Address Change",
        "Vehicle Fitness Certificate (FC) processing",
        "Hypothecation removal and name transfers"
      ],
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
      flipped: true
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 space-y-24 md:space-y-32">
        {details.map((detail, index) => (
          <div 
            key={index} 
            className={`flex flex-col gap-12 lg:gap-20 items-center ${
              detail.flipped ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            {/* Image side */}
            <motion.div 
              initial={{ opacity: 0, x: detail.flipped ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image 
                  src={detail.image} 
                  alt={detail.title} 
                  fill 
                  className="object-cover" 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Decorative overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Floating element */}
              <div className={`absolute -bottom-6 ${detail.flipped ? '-left-6' : '-right-6'} bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px] hidden md:block`}>
                <div className="flex gap-2 text-yellow-400 mb-2">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  ))}
                </div>
                <p className="text-xs font-bold text-gray-900 leading-tight">Highly Rated by Coimbatore Drivers</p>
              </div>
            </motion.div>

            {/* Content side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="w-full lg:w-1/2"
            >
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-light px-3 py-1 rounded-full mb-4">
                {detail.badge}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text font-heading leading-tight mb-6">
                {detail.title}
              </h2>
              <p className="text-lg text-brand-muted leading-relaxed mb-8">
                {detail.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {detail.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-brand-text font-medium">
                    <CheckCircle2 className="w-6 h-6 text-brand-red shrink-0" />
                    <span className="pt-0.5">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <CTAButton href="/contact" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                Learn More
              </CTAButton>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
