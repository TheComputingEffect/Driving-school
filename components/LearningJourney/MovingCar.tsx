"use client";
import React, { useEffect, useRef } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";
import { CAR_PATH } from "./roadPath";

interface MovingCarProps {
  progress: MotionValue<number>;
}

export default function MovingCar({ progress }: MovingCarProps) {
  const carRef = useRef<SVGGElement>(null);
  const pathLengthRef = useRef(0);
  const pathElRef = useRef<SVGPathElement | null>(null);

  const roadPath = CAR_PATH;

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
        className="w-full h-full max-w-[1200px] overflow-visible"
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
          {/* Professional Driving School Hatchback. Scaled appropriately. */}
          <g transform="translate(-32, -56)">
            {/* Drop shadow */}
            <ellipse cx="32" cy="60" rx="32" ry="54" fill="rgba(0,0,0,0.25)" filter="blur(4px)" />
            
            {/* Side Mirrors */}
            <rect x="0" y="38" width="8" height="12" rx="3" fill="#b91c1c" />
            <rect x="56" y="38" width="8" height="12" rx="3" fill="#b91c1c" />

            {/* Main Body (Sleek Red) */}
            <rect x="4" y="4" width="56" height="104" rx="18" fill="#ef4444" />
            <rect x="8" y="8" width="48" height="96" rx="14" fill="#dc2626" />
            
            {/* Hood styling lines */}
            <path d="M 16 8 L 18 32 M 48 8 L 46 32" stroke="#b91c1c" strokeWidth="1.5" fill="none" opacity="0.6"/>

            {/* Windshield */}
            <path d="M 10 36 Q 32 26 54 36 L 48 52 L 16 52 Z" fill="#0f172a" />
            
            {/* Glass reflections */}
            <path d="M 18 38 L 46 38 L 44 42 L 20 42 Z" fill="#1e293b" />

            {/* Roof */}
            <rect x="14" y="52" width="36" height="30" rx="6" fill="#ef4444" />
            
            {/* Driving School "L" Board on Roof */}
            <g transform="translate(24, 57)">
              <rect x="0" y="0" width="16" height="20" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1"/>
              <path d="M 5 4 L 5 15 L 12 15" stroke="#ef4444" strokeWidth="2.5" fill="none" strokeLinecap="square" strokeLinejoin="miter"/>
            </g>

            {/* Rear Window */}
            <path d="M 14 82 L 50 82 L 54 94 Q 32 98 10 94 Z" fill="#0f172a" />
            
            {/* Rear Trunk line */}
            <path d="M 12 100 Q 32 96 52 100" stroke="#b91c1c" strokeWidth="1.5" fill="none" />

            {/* Headlights (Modern LEDs) */}
            <path d="M 8 16 Q 12 8 18 10 L 16 18 Q 12 18 8 16 Z" fill="#fef08a" />
            <path d="M 56 16 Q 52 8 46 10 L 48 18 Q 52 18 56 16 Z" fill="#fef08a" />
            
            {/* Front grill */}
            <rect x="22" y="4" width="20" height="4" rx="1" fill="#1e293b" />

            {/* Taillights */}
            <path d="M 6 98 Q 12 102 18 98 L 16 94 L 8 94 Z" fill="#fca5a5" />
            <path d="M 58 98 Q 52 102 46 98 L 48 94 L 56 94 Z" fill="#fca5a5" />
          </g>
        </g>
      </svg>
    </div>
  );
}
