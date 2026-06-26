"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";

interface RoadSVGProps {
  progress: MotionValue<number>;
}

export default function RoadSVG({ progress }: RoadSVGProps) {
  // A clean, continuous winding path spanning 4000 units vertically.
  const roadPath = `
    M 600 100
    C 200 400, 200 800, 600 1100
    S 1000 1700, 600 2000
    S 200 2600, 600 2900
    S 1000 3500, 600 3800
    S 600 3900, 600 4000
  `;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[1] flex justify-center">
      <svg
        viewBox="0 0 1200 4000"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-w-[1200px]"
      >
        <defs>
          <filter id="shadow-road" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Road Base (Shadow) */}
        <path
          d={roadPath}
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="84"
          fill="none"
          strokeLinecap="round"
          filter="url(#shadow-road)"
          className="translate-y-2"
        />

        {/* Road Surface (Dark Gray) */}
        <path
          d={roadPath}
          stroke="#1e293b" // slate-800
          strokeWidth="80"
          fill="none"
          strokeLinecap="round"
        />

        {/* Completed Road Highlight (Brand Red) */}
        <motion.path
          d={roadPath}
          stroke="#ef4444" // red-500
          strokeWidth="80"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: progress }}
          className="opacity-90"
        />

        {/* Center Dashed Line */}
        <path
          id="road-path"
          d={roadPath}
          stroke="#ffffff"
          strokeWidth="6"
          strokeDasharray="32 32"
          fill="none"
          strokeLinecap="round"
          className="opacity-80"
        />
      </svg>
    </div>
  );
}
