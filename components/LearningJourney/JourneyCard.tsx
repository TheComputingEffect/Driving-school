"use client";

import React, { useState } from "react";
import { motion, useMotionValueEvent, MotionValue } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  lightColor: string;
  textColor: string;
}

interface JourneyCardProps {
  step: Step;
  checkpoint: number;
  progress: MotionValue<number>;
  isLeft: boolean;
  rowTop: string;
}

export default function JourneyCard({
  step,
  checkpoint,
  progress,
  isLeft,
  rowTop,
}: JourneyCardProps) {
  const [hasRevealed, setHasRevealed] = useState(false);
  const Icon = step.icon;

  useMotionValueEvent(progress, "change", (latest) => {
    if (!hasRevealed && latest >= checkpoint) {
      setHasRevealed(true);
    }
  });

  return (
    <div
      className={`
        w-full flex justify-center mb-4 md:mb-0
        relative md:absolute md:w-[320px] pointer-events-auto z-[10]
        ${isLeft ? "md:right-[calc(50%+160px)] md:justify-end" : "md:left-[calc(50%+160px)] md:justify-start"}
      `}
      style={{
        top: rowTop,
      } as React.CSSProperties}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={hasRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[90%] md:w-[320px] md:h-[140px] bg-white/90 backdrop-blur-xl p-[20px] rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-100 relative hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 flex flex-col justify-center"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className={`w-10 h-10 rounded-xl ${step.lightColor} flex items-center justify-center shrink-0 shadow-sm`}>
            <Icon className={`w-5 h-5 ${step.textColor}`} />
          </div>
          <div>
            <div className="text-[9px] font-extrabold uppercase tracking-widest text-gray-400 mb-0.5">
              Phase {step.id}
            </div>
            <h3 className="text-sm font-bold text-gray-900 leading-tight line-clamp-1">
              {step.title}
            </h3>
          </div>
        </div>
        <p className="text-gray-500 leading-snug text-xs font-medium line-clamp-2">
          {step.description}
        </p>
      </motion.div>

      <style>{`
        @media (min-width: 768px) {
          div[style*="--md-top"] {
            top: var(--md-top) !important;
            margin-bottom: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
