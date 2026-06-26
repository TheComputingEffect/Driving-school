"use client";

import React, { useEffect, useRef, useState } from "react";
import { MotionValue, useMotionValueEvent } from "framer-motion";

interface MovingCarProps {
  progress: MotionValue<number>;
}

export default function MovingCar({ progress }: MovingCarProps) {
  const carRef = useRef<SVGGElement>(null);
  const [pathElement, setPathElement] = useState<SVGPathElement | null>(null);
  const [pathLength, setPathLength] = useState(0);

  useEffect(() => {
    // Timeout ensures SVG path is in DOM before tracking
    const timeout = setTimeout(() => {
      const path = document.getElementById("road-path") as SVGPathElement;
      if (path) {
        setPathElement(path);
        setPathLength(path.getTotalLength());
        
        const point = path.getPointAtLength(0);
        const nextPoint = path.getPointAtLength(1);
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);
        if (carRef.current) {
          carRef.current.setAttribute("transform", `translate(${point.x}, ${point.y}) rotate(${angle + 90})`);
        }
      }
    }, 150);
    return () => clearTimeout(timeout);
  }, []);

  useMotionValueEvent(progress, "change", (latest) => {
    if (!pathElement || !carRef.current || pathLength === 0) return;

    const clampedProgress = Math.min(Math.max(latest, 0), 0.9999);
    const currentLength = clampedProgress * pathLength;
    const point = pathElement.getPointAtLength(currentLength);
    
    const nextLength = Math.min(currentLength + 2, pathLength);
    const nextPoint = pathElement.getPointAtLength(nextLength);

    const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

    // Apply exact positioning mapped to the 1200x4000 SVG coordinate space
    carRef.current.setAttribute(
      "transform",
      `translate(${point.x}, ${point.y}) rotate(${angle + 90})`
    );
  });

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-[20] flex justify-center">
      <svg
        viewBox="0 0 1200 4000"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full max-w-[1200px]"
      >
        <g ref={carRef}>
          {/* Top-down Car Graphic */}
          <g transform="translate(-16, -32)">
            <rect x="2" y="4" width="28" height="60" rx="10" fill="rgba(0,0,0,0.3)" filter="blur(4px)" />
            <rect x="0" y="0" width="32" height="64" rx="12" fill="#ef4444" />
            <path d="M 4 20 L 28 20 Q 28 12 16 12 Q 4 12 4 20 Z" fill="#1e293b" />
            <path d="M 6 48 L 26 48 Q 26 54 16 54 Q 6 54 6 48 Z" fill="#1e293b" />
            <rect x="4" y="2" width="6" height="4" rx="2" fill="#fef08a" />
            <rect x="22" y="2" width="6" height="4" rx="2" fill="#fef08a" />
            <rect x="4" y="58" width="6" height="4" rx="2" fill="#991b1b" />
            <rect x="22" y="58" width="6" height="4" rx="2" fill="#991b1b" />
          </g>
        </g>
      </svg>
    </div>
  );
}
