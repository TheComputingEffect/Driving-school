"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface StatItem {
  id: string;
  value: string;
  label: string;
  hasStars?: boolean;
}

export default function TrustStats() {
  const stats: StatItem[] = [
    { id: "stat-1", value: "5000+", label: "Students Trained" },
    { id: "stat-2", value: "10+", label: "Years Experience" },
    { id: "stat-3", value: "4.9/5", label: "Google Rating", hasStars: true },
    { id: "stat-4", value: "2", label: "Branches in Coimbatore" },
    { id: "stat-5", value: "100%", label: "Govt Approved" }
  ];

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-12 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center divide-y md:divide-y-0 md:divide-x-0 lg:divide-x lg:divide-brand-border"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className={`flex flex-col items-center justify-center p-4 ${idx >= 2 ? "col-span-1" : "col-span-1"}`}
            >
              {/* Stat Value */}
              <div className="flex items-center gap-1">
                <span className="text-3xl md:text-4xl font-extrabold text-brand-red tracking-tight font-heading">
                  {stat.value}
                </span>
                {stat.hasStars && (
                  <div className="flex items-center text-brand-yellow shrink-0">
                    <Star className="w-5 h-5 fill-brand-yellow" />
                  </div>
                )}
              </div>
              {/* Stat Label */}
              <span className="mt-2 text-xs md:text-sm font-semibold text-brand-muted uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
