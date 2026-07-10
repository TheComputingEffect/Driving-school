"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ServicesFAQ() {
  const faqs = [
    {
      question: "Do I need a Learner's Licence (LLR) before joining?",
      answer: "No, you don't need one! As part of our Beginner's Course, we handle the entire LLR application process for you. You can start your simulator and practical training while the LLR is being processed."
    },
    {
      question: "Do you have female instructors for ladies?",
      answer: "Yes, we have certified and experienced female driving instructors specifically available for our female learners upon request. Just mention it when submitting your enquiry!"
    },
    {
      question: "How long does it take to learn driving?",
      answer: "Our beginner course is designed to provide comprehensive, thorough practical sessions. Everyone learns at a different pace, and we will extend support until you are completely confident behind the wheel."
    },
    {
      question: "Do you provide pick-up and drop services?",
      answer: "Yes! We provide convenient door-to-door pick-up and drop-off services for your driving sessions across Coimbatore, making it easy to fit lessons into your busy schedule."
    },
    {
      question: "Can you help with just the RTO paperwork if I already know driving?",
      answer: "Absolutely. We offer standalone RTO assistance services including licence renewal, address change, and vehicle FC processing, even if you don't take driving lessons with us."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-gray-50 border-t border-brand-border">
      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-light px-3 py-1 rounded-full mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-brand-muted leading-relaxed">
            Everything you need to know about our driving courses and RTO services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl border transition-colors duration-300 overflow-hidden ${
                  isOpen ? "border-brand-blue shadow-md" : "border-gray-200 hover:border-gray-300 shadow-sm"
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className={`font-bold text-lg pr-4 ${isOpen ? "text-brand-blue" : "text-brand-text"}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-brand-blue-light text-brand-blue" : "bg-gray-100 text-gray-500"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-brand-muted leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
