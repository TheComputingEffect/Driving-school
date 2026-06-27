export interface CourseItem {
  id: string;
  title: string;
  description: string;
  slug: string;
  tag?: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "All Levels";
  features: string[];
}

export const courses: CourseItem[] = [
  {
    id: "course-car-driving",
    title: "Car Driving Lessons",
    description: "Comprehensive package for beginners covering the absolute fundamentals of driving, traffic rules, and basic mechanics.",
    slug: "car-driving",
    duration: "15 Days (1 hour daily)",
    level: "Beginner",
    features: [
      "Basic Vehicle Handling",
      "Clutch & Gear Synchronization",
      "Steering Control Techniques",
      "Govt Approved Syllabus"
    ]
  },
  {
    id: "course-manual-car",
    title: "Manual Car Training",
    description: "Master the art of manual transmission driving, gear shifting, hill starts, and smooth clutch controls in Coimbatore.",
    slug: "manual-car",
    duration: "20 Days (1 hour daily)",
    level: "Beginner",
    features: [
      "Dual Control Practice Vehicles",
      "Hill Start & Slope Controls",
      "Bumper-to-Bumper Traffic Training",
      "Reverse & Parallel Parking Mastery"
    ]
  },
  {
    id: "course-automatic-car",
    title: "Automatic Car Training",
    description: "Learn to drive modern automatic transmission cars easily. Perfect for effortless city driving and stress-free commutes.",
    slug: "automatic-car",
    duration: "10 Days (1 hour daily)",
    level: "Beginner",
    features: [
      "Automatic Gear Selector Guide",
      "Creep Control in City Traffic",
      "Eco & Power Mode Operation",
      "Narrow Road Navigation"
    ]
  },
  {
    id: "course-ladies-driving",
    title: "Ladies Driving Classes",
    description: "Specialized, highly popular driving classes for female students, taught exclusively by certified female instructors.",
    slug: "ladies-driving",
    tag: "Popular",
    duration: "15-20 Days (Flexible Batches)",
    level: "All Levels",
    features: [
      "1-on-1 Female Instructor",
      "Safe, Comfortable Environment",
      "Flexible Timing Slots",
      "Highway driving exposure"
    ]
  },
  {
    id: "course-student-packages",
    title: "Student Packages",
    description: "Affordable driving packages designed specifically for college students in Coimbatore with custom schedules.",
    slug: "student-packages",
    duration: "15 Days (Flexible)",
    level: "Beginner",
    features: [
      "Special College Student Discount",
      "Exam-Friendly Timing Slots",
      "LLR & Licence Assistance",
      "Group Booking Discounts"
    ]
  },
  {
    id: "course-corporate-training",
    title: "Corporate Training",
    description: "Professional defensive driving courses and assessment packages tailored for employees and corporate teams.",
    slug: "corporate-training",
    duration: "3-5 Days Workshops",
    level: "Advanced",
    features: [
      "Defensive Driving Techniques",
      "Highway Safety Protocol",
      "Fuel Efficiency Optimization",
      "Post-Training Assessment Report"
    ]
  }
];
