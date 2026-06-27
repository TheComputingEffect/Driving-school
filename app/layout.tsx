import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyBar from "@/components/layout/StickyBar";
import JsonLd from "@/components/seo/JsonLd";
import { getDrivingSchoolSchema } from "@/lib/schema/localBusiness";
import React from "react";

// Load Google Fonts using display:swap for performance optimization
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Root site-wide fallback metadata
export const metadata: Metadata = {
  title: {
    default: "Best Driving School in Coimbatore | K. Priyadharshini Driving School",
    template: "%s | K. Priyadharshini Driving School",
  },
  description:
    "Learn driving with expert instructors in Coimbatore. Certified ladies training, student discounts, and flexible hours. Serving Kovaipudur & Sivananda Colony.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getDrivingSchoolSchema();
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX";

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        {/* Google Analytics 4 Integration */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-brand-bg text-brand-text">
        {/* Global Organization & DrivingSchool schema injection */}
        <JsonLd schema={orgSchema} />

        {/* Global Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Sticky Call & WhatsApp Navigation Bar (Mobile Only) */}
        <StickyBar />
      </body>
    </html>
  );
}
