"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/content/testimonials";
import { Star, Quote } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

export default function TestimonialsSection() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#F3F4F6] py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <SectionHeader
          badge="Success Stories"
          title="What Our Licensed Drivers Say"
          subtitle="Read honest reviews and ratings from our students who passed their driving tests and got their licences."
        />

        {/* Horizontal scroll container on mobile, 3-column grid on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex overflow-x-auto pb-4 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-x-visible snap-x scrollbar-thin md:pb-0"
        >
          {testimonials.map((review) => {
            const initials = review.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase();

            return (
              <motion.div
                key={review.id}
                variants={cardVariants}
                className="min-w-[290px] sm:min-w-[340px] md:min-w-0 premium-card premium-card-hover p-6 snap-start flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars (Yellow) */}
                  <div className="flex items-center gap-1 text-brand-yellow mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-brand-yellow text-brand-yellow shrink-0" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-brand-text italic leading-relaxed mb-6 font-normal line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                {/* Profile card metadata footer */}
                <div className="flex items-center justify-between pt-4 border-t border-brand-border mt-auto">
                  <div className="flex items-center gap-3">
                    {/* Circle avatar with initials and soft yellow background */}
                    <div className="w-10 h-10 rounded-full bg-brand-yellow-bg border border-brand-yellow/30 flex items-center justify-center text-brand-text font-bold text-xs shrink-0 select-none">
                      {initials}
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-brand-text leading-tight">
                        {review.name}
                      </h4>
                      <span className="text-[11px] text-brand-muted font-normal block mt-0.5">
                        {review.location}
                      </span>
                    </div>
                  </div>

                  {/* Google Verified Review label */}
                  <span className="text-[10px] font-bold text-[#4285F4] bg-[#4285F4]/5 border border-[#4285F4]/10 px-2 py-1 rounded-md uppercase tracking-wider select-none shrink-0">
                    via Google
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
