"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { allServedLocations } from "@/content/locations";
import { MapPin } from "lucide-react";

export default function LocationsGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.04 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="bg-brand-bg py-16 md:py-24 border-b border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* SEO Critical H2 element: "Driving School Near You — Serving All of Coimbatore" */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text">
            Driving School Near You — Serving All of Coimbatore
          </h2>
          <p className="mt-4 text-lg text-brand-muted font-normal max-w-2xl mx-auto leading-relaxed">
            We provide convenient dual-control driving coaching with home pick-up and drop-off spanning all neighborhoods in Coimbatore.
          </p>
        </div>

        {/* 4-column pill grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {allServedLocations.map((loc) => {
            const slug = loc.toLowerCase().replace(/\s+/g, "-");
            return (
              <motion.div key={loc} variants={itemVariants}>
                <Link
                  href={`/locations/driving-school-${slug}`}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-brand-border rounded-xl text-sm font-semibold text-brand-blue hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all duration-200 select-none cursor-pointer group"
                >
                  <MapPin className="w-4 h-4 text-brand-blue group-hover:text-white shrink-0 transition-colors" />
                  <span className="truncate">{loc}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
