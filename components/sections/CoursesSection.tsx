/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { courses } from "@/content/courses";
import { Check, Flame, ChevronRight } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import Link from "next/link";

export default function CoursesSection() {
  const containerVariants = {
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
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* SEO constraint: H2 must contain "Driving Classes Coimbatore" */}
        <SectionHeader
          badge="Our Curriculums"
          title="Premium Driving Classes Coimbatore"
          subtitle="Explore our comprehensive driving lessons, structured to transform nervous beginners into licensed, confident drivers."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => {
            const isPopular = course.tag === "Popular";
            return (
              <motion.div
                key={course.id}
                variants={cardVariants}
                className={`premium-card premium-card-hover p-6 flex flex-col justify-between relative ${
                  isPopular 
                    ? "border-brand-yellow ring-2 ring-brand-yellow/20" 
                    : ""
                }`}
              >
                {/* Popular highlight pill in Yellow */}
                {isPopular && (
                  <span className="absolute -top-3 right-6 inline-flex items-center gap-1 bg-brand-yellow-bg border border-brand-yellow/50 text-[10px] font-bold text-brand-text px-3 py-1 rounded-full uppercase tracking-wider">
                    <Flame className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
                    Popular Choice
                  </span>
                )}

                <div>
                  {/* Meta (Duration · Level) */}
                  <span className="text-xs font-semibold text-brand-blue block mb-2">
                    {course.duration} · {course.level}
                  </span>
                  
                  {/* Course Name */}
                  <h3 className="text-xl font-bold text-brand-text mb-3 font-heading">
                    {course.title}
                  </h3>

                  {/* 1-Line Description */}
                  <p className="text-sm text-brand-muted leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Features Bullet List */}
                  <ul className="space-y-2.5 mb-8">
                    {course.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-brand-text">
                        <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Coming Soon Button (gray outline) */}
                <Link
                  href={`/courses/${course.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-brand-border text-xs font-semibold text-brand-muted hover:text-brand-text hover:bg-brand-bg hover:border-brand-text transition-colors"
                >
                  <span>Coming Soon</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
