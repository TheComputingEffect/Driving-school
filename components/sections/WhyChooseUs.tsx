"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, ShieldCheck, MapPin, Clock, BadgePercent, FileSpreadsheet } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export default function WhyChooseUs() {
  const cards: FeatureCard[] = [
    {
      icon: GraduationCap,
      title: "Experienced Trainers",
      description: "Certified professional instructors with 10+ years of active field training experience."
    },
    {
      icon: ShieldCheck,
      title: "Ladies Taught By Ladies",
      description: "Female students are trained exclusively by certified female instructors for maximum comfort."
    },
    {
      icon: MapPin,
      title: "Pickup & Drop Facility",
      description: "Convenient door-to-door pickup and drop services across your home or college in Coimbatore."
    },
    {
      icon: Clock,
      title: "Flexible Timing",
      description: "Morning, evening, and weekend batches customized to fit your work or college schedule."
    },
    {
      icon: BadgePercent,
      title: "Student Discounts",
      description: "Special pricing packages for college students, group enrolments, and corporate bookings."
    },
    {
      icon: FileSpreadsheet,
      title: "Licence Assistance",
      description: "End-to-end support for LLR filings, licence applications, tests, and standard RTO services."
    }
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 20 },
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
          badge="Why Choose Us"
          title="The Most Trusted Driving Academy in Coimbatore"
          subtitle="We combine decade-long teaching expertise with flexible learning routines to deliver a premium driving education experience."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="premium-card premium-card-hover p-8 group"
              >
                {/* Icon Wrapper in Blue */}
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <IconComponent className="w-6 h-6 text-brand-blue" />
                </div>
                {/* Title */}
                <h3 className="text-lg font-bold text-brand-text mb-3 font-heading">
                  {card.title}
                </h3>
                {/* Description */}
                <p className="text-sm text-brand-muted leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
