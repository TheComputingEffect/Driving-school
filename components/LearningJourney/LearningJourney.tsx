"use client";

import React, { useRef } from "react";
import { BookOpen, Monitor, Car, Map, Mountain, FileCheck, Flag } from "lucide-react";
import { useReducedMotion } from "framer-motion";

import RoadSVG from "./RoadSVG";
import MovingCar from "./MovingCar";
import JourneyCard from "./JourneyCard";
import { useAutoProgress } from "./useAutoProgress";

const steps = [
  { id: 1, title: "Theory & Traffic Rules", description: "Learn road safety, signs, and vehicle mechanics.", icon: BookOpen, color: "bg-blue-500", lightColor: "bg-blue-100", textColor: "text-blue-500" },
  { id: 2, title: "Simulator Training", description: "Experience realistic driving scenarios virtually.", icon: Monitor, color: "bg-purple-500", lightColor: "bg-purple-100", textColor: "text-purple-500" },
  { id: 3, title: "Ground Practice", description: "Master steering and clutch-gear synchronization.", icon: Car, color: "bg-red-500", lightColor: "bg-red-100", textColor: "text-red-500" },
  { id: 4, title: "City Traffic Driving", description: "Navigate real-world bumper-to-bumper traffic.", icon: Map, color: "bg-emerald-500", lightColor: "bg-emerald-100", textColor: "text-emerald-500" },
  { id: 5, title: "Ghats / Hill Drive", description: "Learn advanced techniques like hill starts.", icon: Mountain, color: "bg-orange-500", lightColor: "bg-orange-100", textColor: "text-orange-500" },
  { id: 6, title: "Licence Assistance", description: "We handle the RTO paperwork and test procedures.", icon: FileCheck, color: "bg-blue-600", lightColor: "bg-blue-100", textColor: "text-blue-600" }
];

// 3 explicit rows mapped to the 6 phases.
const rowTops = ["4%", "15%", "40%", "48%", "83%", "83%"];
// Stagger checkpoints slightly so they reveal sequentially in their rows.
const checkpoints = [0.05, 0.15, 0.42, 0.55, 0.82, 0.92];
const isLeftArray = [true, false, false, true, true, false];

export default function LearningJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useAutoProgress(containerRef);
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <StaticLearningPath />;
  }

  return (
    <section className="w-full bg-slate-50 pt-8 md:pt-12 pb-12 overflow-hidden">
      <div 
        ref={containerRef} 
        className="relative w-full"
      >
        <div className="relative w-full flex flex-col items-center overflow-hidden" style={{ minHeight: '100vh' }}>
          
          {/* Header Area */}
          <div className="z-[30] w-full text-center px-4 pt-4 shrink-0 h-[80px] md:h-[100px]">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
              Your <span className="text-red-500">Learning Journey</span>
            </h2>
            <p className="mt-2 text-gray-500 max-w-2xl mx-auto text-sm md:text-base hidden md:block">
              Watch your journey unfold.
            </p>
          </div>

          {/* Interactive Road Container */}
          <div className="relative w-full flex-1 flex flex-col md:block">
            
            {/* The SVG Road (Layer 1) and Car (Layer 20) */}
            <div className="relative w-full h-[50vh] md:absolute md:inset-0 md:h-full z-[1]">
               <RoadSVG progress={progress} />
               <div className="absolute inset-0 z-[20] pointer-events-none">
                 <MovingCar progress={progress} />
               </div>
            </div>

            {/* The Cards (Layer 10) */}
            <div className="relative w-full flex-1 md:absolute md:inset-0 max-w-[1400px] mx-auto z-[10] flex flex-col justify-start pt-4 px-4 md:px-0 md:pt-0 overflow-y-auto md:overflow-visible">
                {steps.map((step, idx) => (
                  <JourneyCard 
                    key={step.id} 
                    step={step} 
                    checkpoint={checkpoints[idx]} 
                    progress={progress}
                    isLeft={isLeftArray[idx]} 
                    rowTop={rowTops[idx]}
                  />
                ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function StaticLearningPath() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight font-heading">
            Your <span className="text-red-500">Learning Path</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-full hidden md:block" />
          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`flex flex-col md:flex-row items-center justify-between w-full ${isEven ? "md:flex-row-reverse" : ""}`}>
                  <div className="hidden md:block w-5/12" />
                  <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-white shadow-md bg-white shrink-0 my-4 md:my-0">
                    <div className={`w-8 h-8 rounded-full ${step.lightColor} flex items-center justify-center`}>
                      <span className={`font-bold text-sm ${step.textColor}`}>{step.id}</span>
                    </div>
                  </div>
                  <div className="w-full md:w-5/12">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg ${step.lightColor}`}>
                          <Icon className={`w-5 h-5 ${step.textColor}`} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
