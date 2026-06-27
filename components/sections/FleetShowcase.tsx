"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldAlert, Car, Settings } from "lucide-react";

export default function FleetShowcase() {
  const cars = [
    {
      name: "Maruti Suzuki Swift",
      type: "Hatchback",
      features: ["Power Steering", "AC", "Dual-Control Pedals"],
      image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2070&auto=format&fit=crop" 
    },
    {
      name: "Maruti Suzuki Alto",
      type: "Compact Hatchback",
      features: ["Easy to maneuver", "Perfect for Beginners", "Dual-Control"],
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop" 
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white border-t border-brand-border">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-red bg-brand-red-light px-3 py-1 rounded-full mb-4">
            Our Training Vehicles
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight mb-4">
            Learn in Safe, Modern Cars
          </h2>
          <p className="text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
            All our training vehicles are equipped with dual-control clutch and brake systems, ensuring the instructor can intervene instantly for your absolute safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {cars.map((car, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-red-light mb-1">{car.type}</div>
                  <h3 className="text-2xl font-bold font-heading">{car.name}</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <ShieldAlert className="w-5 h-5 text-brand-blue" />
                    <span>{car.features[2]}</span>
                  </li>
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <Settings className="w-5 h-5 text-brand-blue" />
                    <span>{car.features[0]}</span>
                  </li>
                  <li className="flex items-center gap-3 text-brand-text font-medium">
                    <Car className="w-5 h-5 text-brand-blue" />
                    <span>{car.features[1]}</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
