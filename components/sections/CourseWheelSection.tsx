"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { courses } from "@/content/courses";
import { Car, ChevronRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CourseWheelSection() {
  const [activeCourseId, setActiveCourseId] = useState(courses[0].id);

  const activeCourse = courses.find((c) => c.id === activeCourseId) || courses[0];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading"
          >
            Our <span className="text-brand-red">Driving Courses</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-gray-500 max-w-2xl mx-auto text-lg"
          >
            Explore our range of comprehensive courses designed for all levels of experience.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          
          {/* Wheel / Selection Area (Desktop) */}
          <div className="hidden lg:flex relative w-[500px] h-[500px] items-center justify-center">
            {/* Center Circle */}
            <div className="absolute w-40 h-40 bg-gray-50 border border-gray-200 rounded-full flex flex-col items-center justify-center shadow-inner z-10">
              <Car className="w-12 h-12 text-brand-red mb-2" />
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Select</span>
            </div>
            
            {/* Dashed outer ring */}
            <div className="absolute w-[400px] h-[400px] rounded-full border border-dashed border-gray-300 pointer-events-none" />

            {/* Course Nodes */}
            {courses.slice(0, 6).map((course, idx) => {
              const total = Math.min(courses.length, 6);
              const angle = (idx * (360 / total)) - 90; // -90 to start at top
              const radius = 200; // Radius from center
              const x = Math.cos(angle * (Math.PI / 180)) * radius;
              const y = Math.sin(angle * (Math.PI / 180)) * radius;
              const isActive = activeCourseId === course.id;

              return (
                <button
                  key={course.id}
                  onClick={() => setActiveCourseId(course.id)}
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                  className={`absolute flex flex-col items-center justify-center w-32 h-32 rounded-full transition-all duration-300 z-20 shadow-md border-4 ${
                    isActive 
                      ? "bg-brand-red border-red-200 text-white scale-110" 
                      : "bg-white border-white text-gray-700 hover:bg-gray-50 hover:border-gray-100"
                  }`}
                >
                  <span className={`text-sm font-bold text-center px-3 ${isActive ? "text-white" : "text-gray-800"}`}>
                    {course.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Selection List */}
          <div className="lg:hidden w-full flex overflow-x-auto gap-3 pb-4 snap-x no-scrollbar">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveCourseId(course.id)}
                className={`flex-shrink-0 snap-center px-5 py-3 rounded-xl text-sm font-bold transition-colors ${
                  activeCourseId === course.id 
                    ? "bg-brand-red text-white shadow-md" 
                    : "bg-gray-100 text-gray-700 border border-gray-200"
                }`}
              >
                {course.title}
              </button>
            ))}
          </div>

          {/* Details Area */}
          <div className="w-full lg:w-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCourse.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl relative overflow-hidden"
              >
                {/* Decorative background element */}
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-red-50 rounded-full blur-2xl pointer-events-none" />

                {activeCourse.tag && (
                  <span className="inline-block bg-brand-yellow-bg text-zinc-800 text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-4">
                    {activeCourse.tag}
                  </span>
                )}
                
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{activeCourse.title}</h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium">
                  <span className="bg-gray-100 px-3 py-1 rounded-md">{activeCourse.duration}</span>
                  <span className="bg-gray-100 px-3 py-1 rounded-md">{activeCourse.level} Level</span>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  {activeCourse.description}
                </p>

                <div className="space-y-3 mb-8">
                  {activeCourse.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                      <span className="text-sm font-semibold text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors uppercase tracking-wider text-sm"
                >
                  Book This Course
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
