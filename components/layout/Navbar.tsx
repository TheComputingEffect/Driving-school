"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import MobileDrawer from "./MobileDrawer";
import CTAButton from "../shared/CTAButton";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Locations", href: "/locations" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/85 backdrop-blur-md border-b border-brand-border z-30 flex items-center transition-all duration-200">
        <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo SVG monogram + text */}
          <Link href="/" className="flex items-center gap-2.5 select-none shrink-0 group">
            <Image src="/logo_KPD.png" alt="K. Priyadharshini Driving School Logo" width={160} height={40} className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" priority />
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
            <Link 
              href="/contact"
              className="px-5 py-2 text-xs rounded-lg bg-brand-red text-white hover:bg-red-700 font-bold tracking-wide uppercase transition-colors flex items-center justify-center"
            >
              Enquire Now
            </Link>
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

    </>
  );
}
