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
    duration: "",
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
    duration: "",
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
    duration: "",
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
    duration: "",
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
    duration: "",
    level: "Beginner",
    features: [
      "Special College Student Discount",
      "Exam-Friendly Timing Slots",
      "LLR & Licence Assistance",
      "Group Booking Discounts"
    ]
  }
];
