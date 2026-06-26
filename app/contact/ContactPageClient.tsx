"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  Mail,
  ArrowRight,
  Shield,
  CheckCircle2,
  Compass,
  Info,
  ChevronRight,
} from "lucide-react";
import { contactInfo, BranchInfo } from "@/content/contactInfo";
import { courses } from "@/content/courses";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export default function ContactPageClient() {
  const crumbs = [{ name: "Contact", url: "/contact" }];

  // Active Branch Map Selector
  const [activeBranchKey, setActiveBranchKey] = useState<"main" | "branch2">("main");
  const activeBranch: BranchInfo = contactInfo.branches[activeBranchKey];

  // Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [trainingType, setTrainingType] = useState("");
  const [classTiming, setClassTiming] = useState("");
  const [areaLocation, setAreaLocation] = useState("");
  const [message, setMessage] = useState("");

  // Error States
  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    email: "",
    trainingType: "",
    classTiming: "",
    areaLocation: "",
  });

  // Submission States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form element refs for smooth focusing
  const nameRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const trainingRef = useRef<HTMLSelectElement>(null);
  const timingRef = useRef<HTMLSelectElement>(null);
  const locationRef = useRef<HTMLInputElement>(null);

  // Form Validation
  const validateForm = () => {
    const newErrors = {
      fullName: "",
      phone: "",
      email: "",
      trainingType: "",
      classTiming: "",
      areaLocation: "",
    };
    let isValid = true;

    if (!fullName.trim()) {
      newErrors.fullName = "Please enter your name";
      isValid = false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    const sanitizedPhone = phone.replace(/[\s-()]/g, "").replace(/^\+91/, "");
    if (!sanitizedPhone) {
      newErrors.phone = "Please enter a valid 10-digit number";
      isValid = false;
    } else if (!phoneRegex.test(sanitizedPhone)) {
      newErrors.phone = "Please enter a valid 10-digit number starting with 6-9";
      isValid = false;
    }

    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    if (!trainingType) {
      newErrors.trainingType = "Please select a course type";
      isValid = false;
    }

    if (!classTiming) {
      newErrors.classTiming = "Please select a timing preference";
      isValid = false;
    }

    if (!areaLocation.trim()) {
      newErrors.areaLocation = "Please enter your location/area";
      isValid = false;
    }

    setErrors(newErrors);

    // Focus first invalid element
    if (!isValid) {
      if (newErrors.fullName) nameRef.current?.focus();
      else if (newErrors.phone) phoneRef.current?.focus();
      else if (newErrors.trainingType) trainingRef.current?.focus();
      else if (newErrors.classTiming) timingRef.current?.focus();
      else if (newErrors.areaLocation) locationRef.current?.focus();
    }

    return isValid;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Mock API Submission call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const resetForm = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setTrainingType("");
    setClassTiming("");
    setAreaLocation("");
    setMessage("");
    setErrors({
      fullName: "",
      phone: "",
      email: "",
      trainingType: "",
      classTiming: "",
      areaLocation: "",
    });
    setIsSuccess(false);
  };

  // Scroll Helpers
  const scrollToForm = () => {
    document.getElementById("enquiryFormCard")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToMap = () => {
    document.getElementById("locationSection")?.scrollIntoView({ behavior: "smooth" });
  };

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
    },
  };

  return (
    <div className="flex-1 bg-brand-bg pb-16">
      {/* Self-contained CSS rules for road background */}
      <style dangerouslySetInnerHTML={{ __html: `
        .road-perspective-light {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(to bottom, var(--color-brand-bg) 0%, transparent 20%, transparent 80%, var(--color-brand-bg) 100%),
            repeating-linear-gradient(to top, transparent, transparent 40px, var(--color-brand-border) 40px, var(--color-brand-border) 42px);
          mask-image: polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%);
          -webkit-mask-image: polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%);
          opacity: 0.25;
          pointer-events: none;
        }
      `}} />

      {/* Dynamic SEO breadcrumbs list schema & visual indicators */}
      <BreadcrumbSchema items={crumbs} />

      {/* Decorative subtle perspective grid */}
      <div className="absolute top-[80px] left-0 w-full h-[400px] overflow-hidden select-none pointer-events-none z-0">
        <div className="road-perspective-light" />
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden border-b border-brand-border/40">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 relative z-10"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-100 w-fit select-none"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              Govt Certified Instructors
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-brand-text leading-[1.1] font-heading"
            >
              Ready to Start Your <span className="text-brand-red">Driving Journey?</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-brand-muted font-normal leading-relaxed max-w-xl"
            >
              Have questions about driving classes, license assistance, or training packages? Contact us today and take your first step toward confident driving.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 text-sm font-bold py-3.5 px-6 rounded-xl bg-brand-red text-white hover:bg-red-700 transition-all uppercase tracking-wider shadow-md hover:shadow-lg cursor-pointer"
              >
                Book a Trial Class
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 text-sm font-bold py-3.5 px-6 rounded-xl bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all uppercase tracking-wider"
              >
                <Phone className="w-4.5 h-4.5" />
                Call Now
              </a>
            </motion.div>
          </motion.div>

          {/* Right Steering Wheel Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative w-full"
          >
            {/* Ambient glows */}
            <div className="absolute w-48 h-48 bg-brand-blue/5 filter blur-[60px] rounded-full top-[10%] left-[20%] pointer-events-none" />
            <div className="absolute w-48 h-48 bg-brand-red/5 filter blur-[60px] rounded-full bottom-[10%] right-[10%] pointer-events-none" />

            {/* Rotating container */}
            <motion.div
              animate={{ rotate: [-6, 6] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 6,
                ease: "easeInOut",
              }}
              className="w-full max-w-[280px] md:max-w-[320px] aspect-square relative select-none"
            >
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-[0_10px_25px_rgba(37,99,235,0.06)]"
              >
                {/* Outer dashed steering wheel rim outline */}
                <circle
                  cx="100"
                  cy="100"
                  r="85"
                  stroke="var(--color-brand-blue)"
                  strokeWidth="4"
                  strokeDasharray="16 10"
                  className="opacity-40"
                />
                {/* Inner dashboard rim ring */}
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  stroke="var(--color-brand-blue)"
                  strokeWidth="2"
                  className="opacity-20"
                />
                {/* Visual road alignment guides */}
                <path
                  d="M100 15 A85 85 0 0 1 185 100 L140 100 A40 40 0 0 0 100 60 Z"
                  fill="rgba(37, 99, 235, 0.03)"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="30"
                  stroke="var(--color-brand-blue)"
                  strokeWidth="3.5"
                  className="opacity-70"
                />
                {/* Steering wheel spokes */}
                <path
                  d="M100 15 L100 70M15 100 L70 100M185 100 L130 100M100 130 L100 185"
                  stroke="var(--color-brand-blue)"
                  strokeWidth="4"
                  className="opacity-70"
                />
                {/* Safety emblem (Shield) */}
                <path
                  d="M100 85 L115 90 V105 C115 113 108 118 100 120 C92 118 85 113 85 105 V90 Z"
                  fill="var(--color-brand-red)"
                />
                {/* Safety checkmark */}
                <path
                  d="M93 102 L97 106 L107 96"
                  stroke="#ffffff"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            {/* Floating Visual Badges */}
            <div className="absolute top-[18%] left-[2%] bg-white border border-brand-border/50 rounded-xl p-2.5 shadow-sm flex items-center gap-2 select-none animate-float-slow hidden sm:flex">
              <div className="w-6 h-6 rounded-lg bg-brand-red-light flex items-center justify-center">
                <Shield className="w-3.5 h-3.5 text-brand-red" />
              </div>
              <span className="text-[10px] font-bold text-brand-text">Dual Control Cars</span>
            </div>

            <div className="absolute bottom-[20%] left-[-2%] bg-white border border-brand-border/50 rounded-xl p-2.5 shadow-sm flex items-center gap-2 select-none animate-float-medium hidden sm:flex">
              <div className="w-6 h-6 rounded-lg bg-brand-blue-light flex items-center justify-center">
                <MapPin className="w-3.5 h-3.5 text-brand-blue" />
              </div>
              <span className="text-[10px] font-bold text-brand-text">Doorstep Pickup</span>
            </div>

            <div className="absolute top-[12%] right-[2%] bg-white border border-brand-border/50 rounded-xl p-2.5 shadow-sm flex items-center gap-2 select-none animate-float-slow hidden sm:flex">
              <div className="w-6 h-6 rounded-lg bg-brand-yellow-bg flex items-center justify-center">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
              </div>
              <span className="text-[10px] font-bold text-brand-text">Flexible Timings</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Contact Cards Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {/* Card 1: Call Us */}
            <motion.div
              variants={cardVariants}
              className="premium-card premium-card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-red-light flex items-center justify-center text-brand-red mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">Call Us</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  Get immediate answers on batch slot availability and fee packages.
                </p>
              </div>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-red hover:text-red-700 transition-colors"
              >
                <span>{contactInfo.phoneFormatted}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Card 2: WhatsApp Chat */}
            <motion.div
              variants={cardVariants}
              className="premium-card premium-card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-4">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">WhatsApp Us</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  Share your documents or chat directly with our course coordinator.
                </p>
              </div>
              <a
                href={contactInfo.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <span>Chat Instantly</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Card 3: Visit Academy */}
            <motion.div
              variants={cardVariants}
              className="premium-card premium-card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center text-brand-blue mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">Visit Our School</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  Located near the main RTO-associated lanes in Coimbatore city.
                </p>
              </div>
              <button
                onClick={scrollToMap}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-blue hover:text-blue-700 transition-colors text-left cursor-pointer"
              >
                <span>Get Directions</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Card 4: Operating Hours */}
            <motion.div
              variants={cardVariants}
              className="premium-card premium-card-hover p-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-brand-yellow-bg flex items-center justify-center text-amber-500 mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-brand-text mb-2">Working Hours</h3>
                <p className="text-sm text-brand-muted leading-relaxed mb-4">
                  Flexible batches tailored for students, working professionals &amp; homemakers.
                </p>
              </div>
              <div className="text-xs font-semibold text-brand-text space-y-1">
                <div>{contactInfo.operatingHours.weekdays}</div>
                <div className="text-brand-muted">{contactInfo.operatingHours.sunday}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Main Section: Trust checklist & Enquiry Form */}
      <section className="py-12 md:py-20 bg-[#FBFDFE] border-t border-b border-brand-border/40">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Trust points */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-light w-fit select-none">
              <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
              Drive with Priyadharshini
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text leading-tight font-heading">
              Learn Driving with <span className="text-brand-red">Confidence</span>
            </h2>

            <p className="text-brand-muted leading-relaxed">
              Our certified instructors, flexible class timings, and practical road training help beginners become confident and responsible drivers. We emphasize safety precautions, defensive training, and comprehensive license assistance in Tamil Nadu.
            </p>

            {/* Checklist */}
            <div className="flex flex-col space-y-4 pt-4">
              {[
                {
                  title: "Certified driving instructors",
                  desc: "Learn from government-licensed, highly experienced trainers who prioritize patient teaching.",
                },
                {
                  title: "Two-wheeler and four-wheeler training",
                  desc: "Step-by-step master classes for geared/automatic bikes, scooters, and light motor vehicles.",
                },
                {
                  title: "Flexible morning and evening batches",
                  desc: "Batches starting as early as 6:00 AM and ending late evening to fit busy office schedules.",
                },
                {
                  title: "License guidance and support",
                  desc: "We handle all documentation, LL test preparation, and direct track practice for your DL test.",
                },
                {
                  title: "Safe and beginner-friendly training",
                  desc: "Dual-controlled training cars and specialized lessons in real traffic for nervous beginners.",
                },
              ].map((bullet, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-text">{bullet.title}</h4>
                    <p className="text-sm text-brand-muted mt-0.5 leading-relaxed">{bullet.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Enquiry Form Card */}
          <div className="lg:col-span-6 w-full" id="enquiryFormCard">
            <div className="premium-card relative p-6 md:p-8 shadow-xl bg-white border border-brand-border/60 overflow-hidden rounded-3xl">
              {/* Colored top gradient stripe */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-red via-brand-yellow to-brand-blue" />

              {/* Success State Overlay */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-500 text-emerald-500 flex items-center justify-center mb-6 shadow-md shadow-emerald-100">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-text mb-2">Enquiry Submitted!</h4>
                    <p className="text-brand-muted text-sm max-w-sm mb-8 leading-relaxed">
                      Thank you for choosing K. Priyadharshini Driving School. Our representative will contact you via phone or WhatsApp shortly to schedule your session.
                    </p>
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center justify-center gap-2 text-sm font-bold py-3 px-6 rounded-xl bg-brand-blue text-white hover:bg-blue-700 transition-colors shadow-md cursor-pointer"
                    >
                      Send Another Enquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Title */}
              <h3 className="text-xl font-extrabold text-brand-text mb-6 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-red" />
                Course Enquiry
              </h3>

              <form onSubmit={handleFormSubmit} className="space-y-5" noValidate>
                {/* Full Name */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-brand-text">
                    Full Name
                  </label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="E.g., Anbarasan"
                    className={`w-full bg-[#FAFBFD] border rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-muted outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all ${
                      errors.fullName ? "border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-red-500" : "border-brand-border"
                    }`}
                  />
                  {errors.fullName && <span className="text-[11px] font-semibold text-red-500">{errors.fullName}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone Number */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-brand-text">
                      Phone Number
                    </label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="E.g., 9842212345"
                      className={`w-full bg-[#FAFBFD] border rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-muted outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all ${
                        errors.phone ? "border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-red-500" : "border-brand-border"
                      }`}
                    />
                    {errors.phone && <span className="text-[11px] font-semibold text-red-500">{errors.phone}</span>}
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-brand-text">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E.g., name@email.com"
                      className={`w-full bg-[#FAFBFD] border rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-muted outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all ${
                        errors.email ? "border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-red-500" : "border-brand-border"
                      }`}
                    />
                    {errors.email && <span className="text-[11px] font-semibold text-red-500">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Training Type dropdown */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="trainingType" className="text-xs font-bold uppercase tracking-wider text-brand-text">
                      Training Type
                    </label>
                    <div className="relative">
                      <select
                        ref={trainingRef}
                        id="trainingType"
                        value={trainingType}
                        onChange={(e) => setTrainingType(e.target.value)}
                        className={`w-full bg-[#FAFBFD] border rounded-xl px-4 py-3 text-sm text-brand-text outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none cursor-pointer ${
                          errors.trainingType ? "border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-red-500" : "border-brand-border"
                        }`}
                      >
                        <option value="" disabled>Select Course</option>
                        {courses.map((course) => (
                          <option key={course.id} value={course.title}>
                            {course.title}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                        <svg className="fill-current h-4 w-4 text-brand-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {errors.trainingType && <span className="text-[11px] font-semibold text-red-500">{errors.trainingType}</span>}
                  </div>

                  {/* Preferred Class Timing dropdown */}
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="classTiming" className="text-xs font-bold uppercase tracking-wider text-brand-text">
                      Preferred Class Timing
                    </label>
                    <div className="relative">
                      <select
                        ref={timingRef}
                        id="classTiming"
                        value={classTiming}
                        onChange={(e) => setClassTiming(e.target.value)}
                        className={`w-full bg-[#FAFBFD] border rounded-xl px-4 py-3 text-sm text-brand-text outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all appearance-none cursor-pointer ${
                          errors.classTiming ? "border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-red-500" : "border-brand-border"
                        }`}
                      >
                        <option value="" disabled>Select Timing</option>
                        <option value="Morning Batch">Morning (6 AM - 10 AM)</option>
                        <option value="Afternoon Batch">Afternoon (12 PM - 4 PM)</option>
                        <option value="Evening Batch">Evening (4 PM - 8 PM)</option>
                        <option value="Flexible Timings">Flexible Slots</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-brand-muted">
                        <svg className="fill-current h-4 w-4 text-brand-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    {errors.classTiming && <span className="text-[11px] font-semibold text-red-500">{errors.classTiming}</span>}
                  </div>
                </div>

                {/* Location / Area */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="areaLocation" className="text-xs font-bold uppercase tracking-wider text-brand-text">
                    Location / Area
                  </label>
                  <input
                    ref={locationRef}
                    type="text"
                    id="areaLocation"
                    value={areaLocation}
                    onChange={(e) => setAreaLocation(e.target.value)}
                    placeholder="E.g., Kovaipudur, Sivananda Colony"
                    className={`w-full bg-[#FAFBFD] border rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-muted outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all ${
                      errors.areaLocation ? "border-red-500 bg-red-50/10 focus:border-red-500 focus:ring-red-500" : "border-brand-border"
                    }`}
                  />
                  {errors.areaLocation && <span className="text-[11px] font-semibold text-red-500">{errors.areaLocation}</span>}
                </div>

                {/* Message (Optional) */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-brand-text">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter any specific requests, vehicle preferences, or RTO queries..."
                    rows={3}
                    className="w-full bg-[#FAFBFD] border border-brand-border rounded-xl px-4 py-3 text-sm text-brand-text placeholder-brand-muted outline-hidden focus:border-brand-blue focus:ring-1 focus:ring-brand-blue transition-all resize-y"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 text-sm font-bold py-3.5 px-6 rounded-xl bg-brand-red text-white hover:bg-red-700 focus:ring-2 focus:ring-brand-red/50 transition-all uppercase tracking-wider shadow-md disabled:pointer-events-none disabled:opacity-85 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin shrink-0" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <ArrowRight className="w-4.5 h-4.5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Location Section with Switchable Map */}
      <section className="py-16 md:py-24" id="locationSection">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue-light mb-3 select-none">
              <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0" />
              Headquarters
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text font-heading">
              Find Our Driving School Near You
            </h2>
            <p className="mt-4 text-lg text-brand-muted font-normal leading-relaxed">
              We operate two fully equipped branch locations in Coimbatore, strategically positioned near training zones and registration tracks.
            </p>
          </div>

          <div className="premium-card bg-white p-6 md:p-8 rounded-3xl border border-brand-border/60 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Column: Switcher & Map */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              {/* Branch Selector Tabs */}
              <div className="flex bg-slate-100 p-1.5 rounded-xl gap-1">
                <button
                  onClick={() => setActiveBranchKey("main")}
                  className={`flex-1 text-center py-2 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeBranchKey === "main" ? "bg-white text-brand-red shadow-xs" : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  {contactInfo.branches.main.name}
                </button>
                <button
                  onClick={() => setActiveBranchKey("branch2")}
                  className={`flex-1 text-center py-2 px-3 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                    activeBranchKey === "branch2" ? "bg-white text-brand-blue shadow-xs" : "text-brand-muted hover:text-brand-text"
                  }`}
                >
                  {contactInfo.branches.branch2.name}
                </button>
              </div>

              {/* Map Iframe */}
              <div className="relative rounded-2xl border border-brand-border overflow-hidden h-[360px] bg-zinc-100 shadow-inner">
                <iframe
                  title={`${activeBranch.name} Maps Location`}
                  src={activeBranch.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

            {/* Right Column: Contact details of active branch */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6 py-2">
              {/* Address detail */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-brand-red-light text-brand-red flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-text">Academy Address</h4>
                  <p className="text-sm text-brand-muted leading-relaxed mt-1">{activeBranch.address}</p>
                </div>
              </div>

              {/* Phone detail */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-brand-blue-light text-brand-blue flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-text">Phone Enquiries</h4>
                  <p className="text-sm text-brand-muted mt-1">
                    <a href={`tel:${activeBranch.phone}`} className="hover:text-brand-blue font-semibold transition-colors">
                      {contactInfo.phoneFormatted}
                    </a>
                  </p>
                </div>
              </div>

              {/* Email detail */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-brand-yellow-bg text-amber-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-text">Email Support</h4>
                  <p className="text-sm text-brand-muted mt-1">
                    <a href={`mailto:${contactInfo.email}`} className="hover:text-brand-blue font-semibold transition-colors">
                      {contactInfo.email}
                    </a>
                  </p>
                </div>
              </div>

              {/* WhatsApp details */}
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-brand-text">WhatsApp Support</h4>
                  <p className="text-sm mt-1">
                    <a
                      href={contactInfo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-1 transition-colors"
                    >
                      Start Chat with Coordinator
                      <ChevronRight className="w-4.5 h-4.5" />
                    </a>
                  </p>
                </div>
              </div>

              {/* Google Maps link block */}
              <div className="pt-4 border-t border-brand-border/60">
                <a
                  href={activeBranch.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-blue-700 hover:underline"
                >
                  <Compass className="w-4 h-4" />
                  <span>Open Directions in Google Maps</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Section */}
      <section className="pb-16 pt-8">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-r from-brand-blue/[0.02] via-brand-red/[0.01] to-brand-blue/[0.02] bg-white border border-brand-border/60 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden shadow-lg">
            {/* Top dividing accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-red" />
            
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-text mb-4 font-heading">
              Start Driving with Confidence Today
            </h2>
            
            <p className="text-sm md:text-base text-brand-muted max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you are a beginner or need a refresher course, our team is ready to guide you safely from your first lesson to your license.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold py-3 px-6 rounded-xl bg-brand-red text-white hover:bg-red-700 transition-colors uppercase tracking-wider shadow-md cursor-pointer"
              >
                Book Your Class
              </button>
              <button
                onClick={scrollToMap}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-bold py-3 px-6 rounded-xl bg-white border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all uppercase tracking-wider cursor-pointer"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
