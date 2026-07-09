"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { courses } from "@/content/courses";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted) return null;
  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          trainingType: formData.course || "General Inquiry",
          classTiming: "Quick Booking (Demo)",
          areaLocation: "Contact customer",
          message: formData.message,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert("Demo request submitted! We will contact you shortly.");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          course: "",
          message: ""
        });
        onClose();
      } else {
        alert(data.message || "Failed to submit demo request.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Book Free Demo</h2>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-1">
            <label htmlFor="fullName" className="text-sm font-semibold text-gray-700">Full name *</label>
            <input 
              type="text" 
              id="fullName"
              name="fullName"
              required
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="email" className="text-sm font-semibold text-gray-700">Enter your email *</label>
            <input 
              type="email" 
              id="email"
              name="email"
              required
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="phone" className="text-sm font-semibold text-gray-700">Enter phone number *</label>
            <input 
              type="tel" 
              id="phone"
              name="phone"
              required
              placeholder="9876543210"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none text-sm text-gray-800 placeholder:text-gray-400"
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="course" className="text-sm font-semibold text-gray-700">Select Course *</label>
            <select 
              id="course"
              name="course"
              required
              value={formData.course}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none text-sm text-gray-800 bg-white"
            >
              <option value="" disabled>Select a course</option>
              {courses.map(course => (
                <option key={course.id} value={course.title}>{course.title}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message (Optional)</label>
            <textarea 
              id="message"
              name="message"
              rows={3}
              placeholder="Write us a message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors outline-none text-sm text-gray-800 placeholder:text-gray-400 resize-none"
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#00B159] hover:bg-[#009E4F] text-white font-bold py-3.5 px-4 rounded-lg transition-colors uppercase tracking-wide text-sm flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <span className="w-5 h-5 border-3 border-white/20 border-t-white rounded-full animate-spin shrink-0" />
                  Sending...
                </>
              ) : (
                "SEND MESSAGE"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
