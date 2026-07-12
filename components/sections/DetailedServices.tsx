"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import CTAButton from "../shared/CTAButton";

export default function DetailedServices() {
  const details = [
    {
      title: "Experienced Trainers",
      badge: "Expert Coaching",
      description: "Our certified professional instructors have over 10+ years of active field training experience. They are patient, friendly, and dedicated to teaching defensive driving skills that keep you safe for life.",
      features: [
        "10+ Years of active field training experience",
        "Patient, friendly, and stress-free coaching style",
        "Specialized defensive driving techniques",
        "1-on-1 personalized attention for every student"
      ],
      image: "https://images.unsplash.com/photo-1549317336-206569e8475c?q=80&w=2070&auto=format&fit=crop",
      flipped: false
    },
    {
      title: "Ladies Taught by Ladies",
      badge: "Empowered Learning",
      description: "We offer specialized driving training for female students, taught exclusively by certified female instructors. Learn in a comfortable, supportive environment designed to build your confidence on the road.",
      features: [
        "1-on-1 female instructor matching",
        "Comfortable and supportive learning environment",
        "Step-by-step guidance for absolute beginners",
        "Flexible morning and evening training slots"
      ],
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
      flipped: true
    },
    {
      title: "Flexible Batches & Timings",
      badge: "Convenient Scheduling",
      description: "We offer flexible morning, evening, and weekend training batches designed to fit work, college, and personal schedules. Learn to drive at your own pace without disrupting your daily routine.",
      features: [
        "Early morning sessions starting from 6:00 AM",
        "Evening and weekend training options",
        "Easy rescheduling of classes with prior notice",
        "Custom-paced learning curriculum for busy schedules"
      ],
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=2070&auto=format&fit=crop",
      flipped: false
    },
    {
      title: "Student Discounts",
      badge: "Affordable Education",
      description: "Special pricing packages designed specifically for college students in Coimbatore. Get premium quality driving training and licence processing at pocket-friendly rates.",
      features: [
        "Exclusive discounts for college students",
        "Special group booking offers for friends/classmates",
        "Exam-friendly timing adjustments",
        "Easy installment payment options"
      ],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
      flipped: true
    },
    {
      title: "Licence Assistance",
      badge: "RTO Support",
      description: "Complete, end-to-end guidance for obtaining your Learner's Licence (LLR) and Permanent Driving Licence. We handle all paperwork, document filings, and scheduling at local RTOs.",
      features: [
        "Online document upload and RTO filing",
        "LLR preparation material and test slot booking",
        "Practical RTO driving test coordination",
        "Hassle-free smart card licence delivery tracking"
      ],
      image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop",
      flipped: false
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
              
              <CTAButton href={`/contact?service=${encodeURIComponent(detail.title)}`} variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                Enquire Now
              </CTAButton>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
