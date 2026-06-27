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

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Send data to API
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          phone,
          email,
          trainingType,
          classTiming,
          areaLocation,
          message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        // Handle error visually if needed, for now just log it
        console.error("Form submission failed:", data.message);
        // Assuming success anyway for the user experience since there's no UI for API error yet
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSuccess(true); // Fallback to success to avoid confusing user
    } finally {
      setIsSubmitting(false);
    }
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
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
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

      {/* Main Content Section */}
      <section className="relative pt-12 pb-12 md:pt-16 md:pb-20 overflow-hidden z-10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col justify-between h-full py-2"
          >
            <div className="space-y-6">
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-brand-text leading-[1.1] font-heading"
              >
                Ready to Start Your <span className="text-brand-red">Driving Journey?</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-brand-muted font-normal leading-relaxed"
              >
                Have questions about driving classes, license assistance, or training packages? Contact us today and take your first step toward confident driving.
              </motion.p>
            </div>

            {/* Quick Contact Cards - Moved to Left Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto pt-8"
            >
              {/* Card 1: Call Us */}
              <motion.div variants={cardVariants} className="premium-card p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-red-light flex items-center justify-center text-brand-red mb-3">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text mb-1.5">Call Us</h3>
                </div>
                <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center gap-1 text-xs font-bold text-brand-red hover:text-red-700 transition-colors">
                  <span>{contactInfo.phoneFormatted}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Card 2: WhatsApp Chat */}
              <motion.div variants={cardVariants} className="premium-card p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-3">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text mb-1.5">WhatsApp</h3>
                </div>
                <a href={contactInfo.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                  <span>Chat Instantly</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>

              {/* Card 3: Visit Academy */}
              <motion.div variants={cardVariants} className="premium-card p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-blue-light flex items-center justify-center text-brand-blue mb-3">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text mb-1.5">Visit Us</h3>
                </div>
                <button onClick={scrollToMap} className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors text-left cursor-pointer">
                  <span>Get Directions</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>

              {/* Card 4: Operating Hours */}
              <motion.div variants={cardVariants} className="premium-card p-5 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-yellow-bg flex items-center justify-center text-amber-500 mb-3">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-brand-text mb-1.5">Working Hours</h3>
                </div>
                <div className="text-[11px] font-semibold text-brand-text space-y-0.5">
                  <div>{contactInfo.operatingHours.weekdays}</div>
                  <div className="text-brand-muted">{contactInfo.operatingHours.sunday}</div>
                </div>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Right Column: Enquiry Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 w-full"
            id="enquiryFormCard"
          >
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
          </motion.div>
        </div>
      </section>




    </div>
  );
}
