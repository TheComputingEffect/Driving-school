"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import DemoModal from "../shared/DemoModal";
import CTAButton from "../shared/CTAButton";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
  { name: "Admin", href: "/admin" }
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/85 backdrop-blur-md border-b border-brand-border z-30 flex items-center transition-all duration-200">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo SVG monogram + text */}
          <Link href="/" className="flex items-center gap-2.5 select-none shrink-0 group">
            <svg
              className="w-9 h-9 text-brand-red group-hover:scale-105 transition-transform"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="100" height="100" rx="22" fill="var(--color-brand-red)" />
              <path
                d="M32 70V30H46C55 30 60 35 60 41C60 47 55 51 46 51H39V70H32ZM39 44H45C49 44 52 42.5 52 40.5C52 38.5 49 37 45 37H39V44Z"
                fill="white"
              />
              <path
                d="M62 70V51H69C75 51 78 54 78 58C78 62 75 70 69 70H62ZM69 64C72 64 74 61 74 59.5C74 58 72 57 69 57H67V64H69Z"
                fill="white"
              />
            </svg>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm leading-tight tracking-tight text-brand-text">
                K. Priyadharshini
              </span>
              <span className="text-[9px] font-bold text-brand-muted uppercase tracking-widest leading-none">
                Driving School
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-text hover:text-brand-blue transition-colors relative group py-1.5"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-blue transition-all group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:block">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="px-5 py-2 text-xs rounded-lg bg-brand-red text-white hover:bg-red-700 font-bold tracking-wide uppercase transition-colors"
            >
              Book Free Demo
            </button>
          </div>

          {/* Mobile Toggler */}
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="lg:hidden p-2 rounded-lg text-brand-text hover:bg-brand-bg transition-colors focus:outline-none"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Spacing Offset for fixed header */}
      <div className="h-16 w-full" />

      {/* Drawer */}
      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navLinks={navLinks}
      />

      {/* Demo Modal */}
      <DemoModal 
        isOpen={isDemoModalOpen} 
        onClose={() => setIsDemoModalOpen(false)} 
      />
    </>
  );
}
