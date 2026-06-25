"use client";

import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "whatsapp" | "outline" | "link";
  className?: string;
  external?: boolean;
}

export default function CTAButton({
  children,
  href,
  variant = "primary",
  className = "",
  external = false
}: CTAButtonProps) {
  const baseStyle = "inline-flex items-center justify-center font-medium rounded-xl px-6 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-brand-red text-white hover:bg-red-700 shadow-sm hover:shadow-md focus:ring-brand-red",
    secondary: "bg-brand-blue-light text-brand-blue hover:bg-blue-100 focus:ring-brand-blue",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20ba56] shadow-sm hover:shadow-md focus:ring-[#25D366]",
    outline: "border border-brand-border text-brand-text bg-white hover:bg-brand-bg focus:ring-brand-muted",
    link: "text-brand-blue hover:text-blue-800 underline px-0 py-0 rounded-none active:scale-100"
  };

  const currentClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={currentClass}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={currentClass}>
      {children}
    </Link>
  );
}
