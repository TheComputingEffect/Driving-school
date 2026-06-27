"use client";
import React, { useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import { ROAD_PATH } from "./roadPath";

interface MovingCarProps {
  progress: MotionValue<number>;
}

export default function MovingCar({ progress }: MovingCarProps) {
  const carRef = useRef<SVGGElement>(null);
  const pathLengthRef = useRef(0);
  const pathElRef = useRef<SVGPathElement | null>(null);

  const roadPath = ROAD_PATH;

  useEffect(() => {
    const path = pathElRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    pathLengthRef.current = len;

    // Place car at start immediately
    const pt = path.getPointAtLength(0);
    const pt2 = path.getPointAtLength(2);
    const angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * (180 / Math.PI);
    if (carRef.current) {
      carRef.current.setAttribute(
        "transform",
        `translate(${pt.x}, ${pt.y}) rotate(${angle + 90}) scale(1.8)`
      );
    }
  }, []);

  useMotionValueEvent(progress, "change", (latest) => {
    const path = pathElRef.current;
    if (!path || !carRef.current || pathLengthRef.current === 0) return;
    const clamped = Math.min(Math.max(latest, 0), 0.9999);
    const dist = clamped * pathLengthRef.current;
    const pt = path.getPointAtLength(dist);
    const pt2 = path.getPointAtLength(Math.min(dist + 3, pathLengthRef.current));
    const angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * (180 / Math.PI);
    carRef.current.setAttribute(
      "transform",
      `translate(${pt.x}, ${pt.y}) rotate(${angle + 90}) scale(1.8)`
    );
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[20] flex justify-center">
      <svg
        viewBox="0 0 1200 2000"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-w-[1200px]"
      >
        {/* Hidden path for car positioning */}
        <path
          ref={pathElRef}
          d={roadPath}
          stroke="none"
          fill="none"
        />

        {/* Car group */}
        <g ref={carRef}>
          {/* Centered car design. Original was 56 wide x 104 tall. With scale 1.8 it's roughly 100x180. */}
          <g transform="translate(-32, -56)">
            {/* Drop shadow */}
            <ellipse cx="32" cy="100" rx="30" ry="12" fill="rgba(0,0,0,0.4)" filter="blur(4px)" />
            
            {/* Big Knobby Wheels */}
            {/* Front Left */}
            <rect x="-6" y="16" width="16" height="28" rx="6" fill="#0f172a" />
            <path d="M -6 20 L 10 20 M -6 26 L 10 26 M -6 32 L 10 32 M -6 38 L 10 38" stroke="#334155" strokeWidth="2" />
            {/* Front Right */}
            <rect x="54" y="16" width="16" height="28" rx="6" fill="#0f172a" />
            <path d="M 54 20 L 70 20 M 54 26 L 70 26 M 54 32 L 70 32 M 54 38 L 70 38" stroke="#334155" strokeWidth="2" />
            {/* Rear Left */}
            <rect x="-6" y="68" width="16" height="28" rx="6" fill="#0f172a" />
            <path d="M -6 72 L 10 72 M -6 78 L 10 78 M -6 84 L 10 84 M -6 90 L 10 90" stroke="#334155" strokeWidth="2" />
            {/* Rear Right */}
            <rect x="54" y="68" width="16" height="28" rx="6" fill="#0f172a" />
            <path d="M 54 72 L 70 72 M 54 78 L 70 78 M 54 84 L 70 84 M 54 90 L 70 90" stroke="#334155" strokeWidth="2" />

            {/* Chassis/Body */}
            <path d="M 12 12 L 52 12 L 56 30 L 56 80 L 50 96 L 14 96 L 8 80 L 8 30 Z" fill="#dc2626" />
            
            {/* Front Bumper / Grill */}
            <rect x="20" y="8" width="24" height="6" rx="2" fill="#1e293b" />
            
            {/* Headlights */}
            <circle cx="16" cy="14" r="4" fill="#fef08a" />
            <circle cx="48" cy="14" r="4" fill="#fef08a" />
            
            {/* Roll Cage (Dark bars over the open cabin) */}
            <rect x="14" y="32" width="36" height="40" rx="6" fill="#1e293b" opacity="0.9" />
            {/* Inner cabin floor */}
            <rect x="18" y="36" width="28" height="32" rx="4" fill="#334155" />
            {/* Driver Seat */}
            <rect x="24" y="44" width="16" height="18" rx="4" fill="#ef4444" />
            {/* Steering Wheel */}
            <path d="M 28 38 Q 32 34 36 38" stroke="#1e293b" strokeWidth="3" fill="none" />
            
            {/* Roll Cage Bars */}
            <path d="M 14 32 L 50 32 M 14 72 L 50 72 M 14 32 L 14 72 M 50 32 L 50 72 M 14 32 L 50 72 M 50 32 L 14 72" stroke="#dc2626" strokeWidth="3" fill="none" />

            {/* Spare Tire on the back */}
            <circle cx="32" cy="86" r="14" fill="#0f172a" />
            <circle cx="32" cy="86" r="6" fill="#334155" />
            
            {/* Rear lights */}
            <rect x="12" y="92" width="8" height="4" rx="2" fill="#fca5a5" />
            <rect x="44" y="92" width="8" height="4" rx="2" fill="#fca5a5" />
          </g>
        </g>
      </svg>
    </div>
  );
}
