import { contactInfo } from "@/content/contactInfo";

export function getDrivingSchoolSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kpriyadharshinidrivingschool.in";
  
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "DrivingSchool"],
    "name": contactInfo.businessName,
    "image": `${siteUrl}/og/homepage.jpg`,
    "url": siteUrl,
    "telephone": contactInfo.phone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": contactInfo.branches.main.address,
      "addressLocality": contactInfo.branches.main.locality,
      "addressRegion": contactInfo.branches.main.region,
      "postalCode": contactInfo.branches.main.postalCode,
      "addressCountry": contactInfo.branches.main.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": contactInfo.branches.main.latitude,
      "longitude": contactInfo.branches.main.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": contactInfo.operatingHours.weekdaysOpens,
        "closes": contactInfo.operatingHours.weekdaysCloses
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": contactInfo.operatingHours.sundayOpens,
        "closes": contactInfo.operatingHours.sundayCloses
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "247",
      "bestRating": "5"
    },
    "priceRange": "INR",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "areaServed": [
      "Kovaipudur", 
      "Sivananda Colony", 
      "Kuniamuthur",
      "Sundarapuram", 
      "Gandhipuram", 
      "RS Puram", 
      "Coimbatore"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Driving Courses",
      "itemListElement": [
        { 
          "@type": "Offer", 
          "itemOffered": { 
            "@type": "Service", 
            "name": "Car Driving Lessons" 
          }
        },
        { 
          "@type": "Offer", 
          "itemOffered": { 
            "@type": "Service", 
            "name": "Ladies Driving Classes" 
          }
        },
        { 
          "@type": "Offer", 
          "itemOffered": { 
            "@type": "Service", 
            "name": "Driving Licence Assistance" 
          }
        }
      ]
    }
  };
}

export function getBranchLocalBusinessSchema(branchKey: "main" | "branch2") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kpriyadharshinidrivingschool.in";
  const branch = contactInfo.branches[branchKey];
  
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "DrivingSchool"],
    "name": `${contactInfo.businessName} - ${branch.name}`,
    "image": `${siteUrl}/og/homepage.jpg`,
    "url": `${siteUrl}/locations/driving-school-${branch.locality.toLowerCase().replace(/\s+/g, "-")}`,
    "telephone": branch.phone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": branch.address,
      "addressLocality": branch.locality,
      "addressRegion": branch.region,
      "postalCode": branch.postalCode,
      "addressCountry": branch.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": branch.latitude,
      "longitude": branch.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": contactInfo.operatingHours.weekdaysOpens,
        "closes": contactInfo.operatingHours.weekdaysCloses
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": contactInfo.operatingHours.sundayOpens,
        "closes": contactInfo.operatingHours.sundayCloses
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": branchKey === "main" ? "152" : "95",
      "bestRating": "5"
    },
    "priceRange": "INR"
  };
}
