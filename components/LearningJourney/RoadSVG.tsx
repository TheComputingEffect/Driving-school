"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";
import { ROAD_PATH } from "./roadPath";

interface RoadSVGProps {
  progress: MotionValue<number>;
}

export default function RoadSVG({ progress }: RoadSVGProps) {
  const roadPath = ROAD_PATH;

  const pinnedMarkers = [
    { id: 1, cx: 1120, cy: 250 },
    { id: 3, cx: 1120, cy: 1000 },
    { id: 2, cx: 1120, cy: 1750 },
    { id: 4, cx: 80, cy: 250 },
    { id: 5, cx: 80, cy: 1000 },
    { id: 6, cx: 80, cy: 1750 },
  ];

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[1] flex justify-center">
      <svg
        viewBox="0 0 1200 2000"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-w-[1200px]"
      >
        <defs>
          <filter id="shadow-road" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodOpacity="0.2" />
          </filter>
        </defs>

        {/* 1. Shadow */}
        <path
          d={roadPath}
          stroke="#00000020"
          strokeWidth="140"
          fill="none"
          strokeLinecap="round"
          filter="url(#shadow-road)"
          className="translate-y-2"
        />

        {/* 2. Kerb/shoulder */}
        <path
          d={roadPath}
          stroke="#94a3b8"
          strokeWidth="130"
          fill="none"
          strokeLinecap="round"
        />

        {/* 3. Asphalt */}
        <path
          d={roadPath}
          stroke="#1e293b"
          strokeWidth="118"
          fill="none"
          strokeLinecap="round"
        />

        {/* 4. Lane edge lines LEFT */}
        <path
          d={roadPath}
          stroke="#f59e0b"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          transform="translate(-59, 0)"
        />

        {/* 5. Lane edge lines RIGHT */}
        <path
          d={roadPath}
          stroke="#f59e0b"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          transform="translate(59, 0)"
        />

        {/* 6. Center dashes */}
        <path
          id="road-path"
          d={roadPath}
          stroke="white"
          strokeWidth="5"
          strokeDasharray="40 30"
          fill="none"
          strokeLinecap="round"
        />

        {/* 7. Progress fill */}
        <motion.path
          d={roadPath}
          stroke="#ef4444"
          strokeWidth="118"
          fill="none"
          strokeLinecap="round"
          style={{ pathLength: progress }}
          opacity="0.85"
        />

        {/* 8. Pinned Markers */}
        {pinnedMarkers.map((marker) => (
          <g key={marker.id} className="z-[30]">
            <circle cx={marker.cx} cy={marker.cy} r="36" fill="#1e293b" stroke="#ffffff" strokeWidth="6" />
            <circle cx={marker.cx} cy={marker.cy} r="28" fill="#ffffff" />
            <text
              x={marker.cx}
              y={marker.cy}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#1e293b"
              fontSize="32"
              fontWeight="900"
              fontFamily="sans-serif"
            >
              {marker.id}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
