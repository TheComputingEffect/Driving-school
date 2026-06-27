export interface LocationItem {
  name: string;
  slug: string;
  description: string;
  isPrimaryBranch: boolean;
  nearAreas: string[];
}

export const locations: LocationItem[] = [
  {
    name: "Kovaipudur",
    slug: "kovaipudur",
    description: "Our main branch and premium driving training hub. Providing structured car driving lessons and lady trainers across the calm avenues of Kovaipudur, Coimbatore.",
    isPrimaryBranch: true,
    nearAreas: ["Perur", "Kuniamuthur", "Sundarapuram", "Ukkadam", "Madukkarai", "Palakkad Road", "Sugunapuram", "BK Pudur"]
  },
  {
    name: "Sivananda Colony",
    slug: "sivananda-colony",
    description: "Our second branch catering to Tatabad, Gandhipuram, and Central Coimbatore. Specially designed for city traffic navigation and bumper-to-bumper driving mastery.",
    isPrimaryBranch: true,
    nearAreas: ["Gandhipuram", "RS Puram", "Saibaba Colony", "Race Course", "Tatabad", "Cross Cut Road", "100 Feet Road", "Rathinapuri"]
  },
  {
    name: "Kuniamuthur",
    slug: "kuniamuthur",
    description: "Serving students and residents in Kuniamuthur with flexible timing schedules. Contact us to find a batch that works for you.",
    isPrimaryBranch: false,
    nearAreas: ["Kovaipudur", "Sundarapuram", "Ukkadam", "Podanur"]
  },
  {
    name: "Sundarapuram",
    slug: "sundarapuram",
    description: "Offering premium manual and automatic driving courses to Sundarapuram residents, with integrated LLR guidance and licence services at nearby RTO offices.",
    isPrimaryBranch: false,
    nearAreas: ["Kuniamuthur", "Podanur", "Singanallur", "Ukkadam"]
  },
  {
    name: "Gandhipuram",
    slug: "gandhipuram",
    description: "Convenient batch timings for business professionals and students near Coimbatore's commercial center. Intensive traffic simulation courses available.",
    isPrimaryBranch: false,
    nearAreas: ["Sivananda Colony", "RS Puram", "Peelamedu", "Saravanampatti"]
  },
  {
    name: "RS Puram",
    slug: "rs-puram",
    description: "Serving the upscale neighborhood of RS Puram with premium automated driving lessons, customized for comfortable commuting and defensive safety.",
    isPrimaryBranch: false,
    nearAreas: ["Saibaba Colony", "Gandhipuram", "Race Course", "Perur"]
  },
  {
    name: "Singanallur",
    slug: "singanallur",
    description: "Professional driving coaching along Trichy Road. Safe dual-control cars and structured syllabus to help you drive with absolute confidence.",
    isPrimaryBranch: false,
    nearAreas: ["Peelamedu", "Sundarapuram", "Ukkadam", "Podanur"]
  },
  {
    name: "Saibaba Colony",
    slug: "saibaba-colony",
    description: "Exclusive ladies batches and morning/evening shifts available for students and homemakers in Saibaba Colony, Coimbatore.",
    isPrimaryBranch: false,
    nearAreas: ["RS Puram", "Sivananda Colony", "Gandhipuram", "Perur"]
  }
];

export const allServedLocations = [
  "Kovaipudur",
  "Sivananda Colony",
  "Kuniamuthur",
  "Sundarapuram",
  "Gandhipuram",
  "RS Puram",
  "Singanallur",
  "Saibaba Colony",
  "Podanur",
  "Perur",
  "Ukkadam",
  "Race Course",
  "Peelamedu",
  "Saravanampatti"
];
