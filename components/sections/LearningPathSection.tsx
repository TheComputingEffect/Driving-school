"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Monitor, Car, Map, Mountain, FileCheck } from "lucide-react";

export default function LearningPathSection() {
  const steps = [
    {
      id: 1,
      title: "Theory & Traffic Rules",
      description: "Learn the fundamentals of road safety, signs, and vehicle mechanics in our modern classrooms.",
      icon: BookOpen,
      color: "bg-blue-500",
      lightColor: "bg-blue-100",
      textColor: "text-blue-500",
    },
    {
      id: 2,
      title: "Simulator Training",
      description: "Experience realistic driving scenarios in a safe, stress-free virtual environment before hitting the road.",
      icon: Monitor,
      color: "bg-purple-500",
      lightColor: "bg-purple-100",
      textColor: "text-purple-500",
    },
    {
      id: 3,
      title: "Ground Practice",
      description: "Master basic controls, steering, and clutch-gear synchronization in our private practice ground.",
      icon: Car,
      color: "bg-brand-red",
      lightColor: "bg-red-100",
      textColor: "text-brand-red",
    },
    {
      id: 4,
      title: "City Traffic Driving",
      description: "Navigate real-world bumper-to-bumper traffic confidently with our dual-control cars.",
      icon: Map,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-100",
      textColor: "text-emerald-500",
    },
    {
      id: 5,
      title: "Ghats / Hill Drive",
      description: "Learn advanced techniques like hill starts, slope control, and navigating winding mountain roads.",
      icon: Mountain,
      color: "bg-orange-500",
      lightColor: "bg-orange-100",
      textColor: "text-orange-500",
    },
    {
      id: 6,
      title: "Licence Assistance",
      description: "We handle the RTO paperwork, LLR, and final driving test procedures so you get your licence hassle-free.",
      icon: FileCheck,
      color: "bg-brand-blue",
      lightColor: "bg-blue-100",
      textColor: "text-brand-blue",
    }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading"
          >
            Your <span className="text-brand-red">Learning Path</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg"
          >
            A structured, step-by-step roadmap to transform you from a beginner to a confident driver.
          </motion.p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty Space for the other side */}
                  <div className="hidden md:block w-5/12" />

                  {/* Center Node */}
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-md bg-white shrink-0 my-4 md:my-0 relative">
                    <div className={`w-8 h-8 rounded-full ${step.lightColor} flex items-center justify-center`}>
                      <span className={`font-bold text-sm ${step.textColor}`}>{step.id}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full md:w-5/12">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${step.lightColor}`}>
                          <Icon className={`w-5 h-5 ${step.textColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
