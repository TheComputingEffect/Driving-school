"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, Phone, MessageSquare, Calendar, ShieldCheck } from "lucide-react";
import { contactInfo } from "@/content/contactInfo";
import { motion, AnimatePresence } from "framer-motion";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export default function MobileDrawer({ isOpen, onClose, navLinks }: MobileDrawerProps) {
  // Prevent page scroll when open
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

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-xs bg-white shadow-xl z-50 flex flex-col p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-6 border-b border-brand-border">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-brand-red flex items-center justify-center text-white font-bold text-sm tracking-tighter">
                  KP
                </span>
                <span className="font-heading font-bold text-xs leading-none text-brand-text">
                  Priyadharshini<br />
                  <span className="text-[10px] text-brand-muted font-semibold tracking-wide">DRIVING SCHOOL</span>
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-lg text-brand-muted hover:text-brand-text hover:bg-brand-bg transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation links */}
            <nav className="flex flex-col space-y-4 py-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  className="text-lg font-medium text-brand-text hover:text-brand-blue transition-colors px-2 py-1 rounded-lg hover:bg-brand-bg"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Contact details & CTAs */}
            <div className="mt-auto pt-6 border-t border-brand-border space-y-4">
              <div className="flex items-center gap-2 text-xs text-brand-muted">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Govt Approved Driving Training Center</span>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-brand-border font-medium text-brand-text hover:bg-brand-bg transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-blue" />
                  <span>Call: {contactInfo.phoneFormatted}</span>
                </a>
                <a
                  href={contactInfo.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 font-medium text-[#25D366] hover:bg-[#25D366]/10 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-red text-white font-medium hover:bg-red-700 transition-colors"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Free Demo</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
