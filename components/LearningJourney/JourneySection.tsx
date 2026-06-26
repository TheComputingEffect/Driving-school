"use client";

import React, { useRef } from "react";
import RoadSVG from "./RoadSVG";
import MovingCar from "./MovingCar";
import JourneyCard from "./JourneyCard";
import { useScrollProgress } from "./useScrollProgress";
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

interface JourneySectionProps {
  sectionId: string;
  roadPath: string;
  steps: Step[];
  checkpoints: number[];
  topOffsets: string[];
  isLeftFirst: boolean;
}

export default function JourneySection({
  sectionId,
  roadPath,
  steps,
  checkpoints,
  topOffsets,
  isLeftFirst,
}: JourneySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useScrollProgress(containerRef);

  return (
    <div
      id={sectionId}
      ref={containerRef}
      className="relative h-[200vh] w-full snap-start"
    >
      <div className="sticky top-0 h-screen w-full flex justify-center overflow-hidden">
        
        {/* The SVG Road */}
        <RoadSVG pathId={`path-${sectionId}`} roadPath={roadPath} />

        {/* The Car */}
        <MovingCar progress={progress} pathId={`path-${sectionId}`} />

        {/* The Cards */}
        <div className="absolute inset-0 max-w-[1000px] w-full mx-auto pointer-events-none z-30">
          <div className="relative w-full h-full">
            {steps.map((step, idx) => (
              <JourneyCard
                key={step.id}
                step={step}
                checkpoint={checkpoints[idx]}
                progress={progress}
                isLeft={idx === 0 ? isLeftFirst : !isLeftFirst}
                topOffset={topOffsets[idx]}
              />
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}
