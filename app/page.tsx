import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";

// Section imports
import HeroSection from "@/components/sections/HeroSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import TrustStats from "@/components/sections/TrustStats";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import LocationsGrid from "@/components/sections/LocationsGrid";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LearningJourney from "@/components/LearningJourney/LearningJourney";
import CourseWheelSection from "@/components/sections/CourseWheelSection";
import HomeLocations from "@/components/sections/HomeLocations";

// Static metadata conforming to Next.js metadata guidelines
export const metadata = constructMetadata({
  title: "Best Driving School in Coimbatore | KPD",
  description:
    "Join the best driving school in Coimbatore for expert car training, lady instructors, and comprehensive RTO licence services. Book a demo today.",
  path: "/",
  keywords: [
    "Driving School Coimbatore",
    "Ladies Driving Classes Coimbatore",
    "Driving Licence Services Coimbatore",
    "Driving School Kovaipudur",
    "RTO Services Coimbatore",
  ],
});

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* TOP VIEWPORT CONTAINER: Hero + Marquee */}
      <div className="flex flex-col w-full">
        {/* SECTION 1 - HERO */}
        <HeroSection />

        {/* NEW SECTION - PREMIUM MARQUEE */}
        <MarqueeSection />
      </div>

      {/* SECTION 2 - TRUST STATISTICS */}
      <TrustStats />

      {/* NEW SECTION - LEARNING PATH */}
      <LearningJourney />

      {/* SECTION 3 - WHY CHOOSE US */}
      <WhyChooseUs />

      {/* NEW SECTION - COURSES WHEEL */}
      <CourseWheelSection />


      {/* SECTION 6 - HOW IT WORKS */}
      <HowItWorks />

      {/* SECTION 8 - TESTIMONIALS */}
      <TestimonialsSection />

      {/* NEW SECTION - HOME LOCATIONS */}
      <HomeLocations />
    </div>
  );
}
