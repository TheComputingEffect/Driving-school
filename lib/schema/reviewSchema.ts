import { TestimonialItem } from "@/content/testimonials";

export function getReviewsSchema(reviews: TestimonialItem[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kpriyadharshinidrivingschool.in";
  
  return reviews.map((review) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "DrivingSchool",
      "name": "K. Priyadharshini Driving School",
      "image": `${siteUrl}/og/homepage.jpg`
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toString(),
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "reviewBody": review.text,
    "publisher": {
      "@type": "Organization",
      "name": "Google Maps"
    }
  }));
}
