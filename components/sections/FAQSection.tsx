"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/content/faq";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";
import FAQSchema from "../seo/FAQSchema";

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section className="bg-white py-16 md:py-24 border-b border-brand-border">
      {/* Inject FAQ Structured Schema onto page */}
      <FAQSchema items={faqs} />

      <div className="max-w-[800px] mx-auto px-4 md:px-6">
        <SectionHeader
          badge="Got Questions?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our driving packages, pickup services, licensing support, and batch timing schedules in Coimbatore."
        />

        {/* Accordion list */}
        <div className="bg-white border border-brand-border rounded-2xl divide-y divide-brand-border overflow-hidden">
          {faqs.map((faq) => {
            const isOpen = activeIndex === faq.id;
            return (
              <div key={faq.id} className="transition-all duration-200">
                {/* Question trigger button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between text-left p-5 md:p-6 focus:outline-none hover:bg-brand-bg/50 transition-colors group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex gap-3.5 items-start">
                    <HelpCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="font-heading font-semibold text-sm md:text-base text-brand-text group-hover:text-brand-blue transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Rotating arrow icon in blue */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" } as any}
                    className="shrink-0 text-brand-blue"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                {/* Collapsible Answer block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" } as any}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-8 text-sm text-brand-muted leading-relaxed pl-[46px] border-t border-brand-bg/30">
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
