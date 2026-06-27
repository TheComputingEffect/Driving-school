export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  source: string;
  date: string;
}

export const testimonials: TestimonialItem[] = [
  {
    id: "review-1",
    name: "Aparna Krishnan",
    location: "Kovaipudur, Coimbatore",
    rating: 5,
    text: "Being a working professional, I needed flexible timings and a female instructor. K. Priyadharshini Driving School provided both! My trainer was extremely patient, explaining clutch control and bumper-to-bumper traffic navigation beautifully. Highly recommended for ladies!",
    source: "Google Reviews",
    date: "2026-04-12"
  },
  {
    id: "review-2",
    name: "Senthil Kumar",
    location: "Sivananda Colony, Coimbatore",
    rating: 5,
    text: "Excellent training program. They didn't just teach me how to pass the RTO driving test, but also how to handle highway driving, defensive driving, and parallel parking. The instructors were very professional.",
    source: "Google Reviews",
    date: "2026-05-02"
  },
  {
    id: "review-3",
    name: "Priya Dharshini",
    location: "Kuniamuthur, Coimbatore",
    rating: 5,
    text: "I was extremely anxious about driving on busy Coimbatore roads. The ladies' driving classes here are top-notch. My female instructor made me feel safe, and I cleared my driving licence test in the first attempt. End-to-end RTO services were also handled by them.",
    source: "Google Reviews",
    date: "2026-05-18"
  },
  {
    id: "review-4",
    name: "Rahul Ramaswamy",
    location: "RS Puram, Coimbatore",
    rating: 5,
    text: "Best driving school in Coimbatore. The trainers are certified professionals with years of experience. The pricing is transparent, and there were no hidden charges for RTO files. Got my licence within a month without any hassle.",
    source: "Google Reviews",
    date: "2026-05-29"
  },
  {
    id: "review-5",
    name: "Deepa Ramakrishnan",
    location: "Sundarapuram, Coimbatore",
    rating: 5,
    text: "Highly recommended for students! I took their manual car package. The student discount made it very affordable. The dual-control cars were in clean, brand-new condition.",
    source: "Google Reviews",
    date: "2026-06-10"
  }
];
