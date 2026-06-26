"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Karthik Subramanian",
      role: "Beginner Driver",
      review: "Excellent driving school in Coimbatore. The trainers are very patient, especially with beginners. I had zero experience and was very scared of city traffic, but they slowly built my confidence. Highly recommended!",
      rating: 5,
    },
    {
      id: 2,
      name: "Deepa Raman",
      role: "Student",
      review: "As a college student, the weekend batches were perfect for me. The lady trainer was incredibly supportive and friendly. They taught me parallel parking and slope driving very clearly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Suresh Kumar",
      role: "IT Professional",
      review: "The pickup and drop facility is a lifesaver. The cars are well maintained and the dual control gave me a lot of peace of mind during my first few days on the road.",
      rating: 5,
    },
    {
      id: 4,
      name: "Priya Rajendran",
      role: "Homemaker",
      review: "I was looking for a lady trainer in Kovaipudur, and K. Priyadharshini Driving School was the perfect choice. Very professional, punctual, and safe environment to learn.",
      rating: 5,
    },
    {
      id: 5,
      name: "Manoj Vijay",
      role: "Business Owner",
      review: "They helped me not just with driving, but completely handled my RTO license process. Everything was smooth and hassle-free. Thanks to the whole team.",
      rating: 4,
    },
    {
      id: 6,
      name: "Anitha Krishnan",
      role: "Software Engineer",
      review: "The theory classes were actually very useful. They taught basic mechanics and traffic rules which most other schools skip. I feel much more responsible on the road now.",
      rating: 5,
    },
    {
      id: 7,
      name: "Ramesh Kannan",
      role: "Student",
      review: "Completed the 15-day course. The instructor was very knowledgeable and corrected my mistakes without getting angry. Best driving school experience.",
      rating: 5,
    },
    {
      id: 8,
      name: "Lakshmi Narayanan",
      role: "Teacher",
      review: "I took the refresher course since I hadn't driven in 5 years. In just 5 days, I regained my confidence. The city traffic practice was very intense but exactly what I needed.",
      rating: 5,
    },
    {
      id: 9,
      name: "Vignesh G",
      role: "Student",
      review: "Affordable fees compared to others in Coimbatore, and the quality of teaching is top-notch. I passed my driving test on the first attempt effortlessly.",
      rating: 5,
    },
    {
      id: 10,
      name: "Geetha Selvam",
      role: "Bank Employee",
      review: "Very respectful trainers. I appreciated the flexibility when I had to reschedule a couple of classes due to my work. A very accommodating and professional school.",
      rating: 5,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight font-heading">
            Our <span className="text-brand-red">Success Stories</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 z-10">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-md hover:bg-gray-50 text-gray-700 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 z-10">
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-gray-200 shadow-md hover:bg-gray-50 text-gray-700 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 md:p-10 border border-gray-100 relative min-h-[250px] flex items-center justify-center">
            <Quote className="absolute top-4 left-4 w-10 h-10 text-brand-red/10" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center max-w-2xl mx-auto"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-brand-yellow text-brand-yellow" />
                  ))}
                  {[...Array(5 - current.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-gray-300" />
                  ))}
                </div>

                <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed mb-6">
                  &quot;{current.review}&quot;
                </p>

                <div>
                  <h4 className="text-base font-bold text-gray-900">{current.name}</h4>
                  <p className="text-gray-500 text-xs mt-0.5">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx ? "w-8 h-2 bg-brand-red" : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
