import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kpriyadharshinidrivingschool.com";
  
  const routes = [
    "",
    "/about",

    "/services",
    "/services/driving-licence",
    "/services/licence-renewal",
    "/services/rto-services",
    "/locations",
    "/locations/driving-school-kovaipudur",
    "/locations/driving-school-sivananda-colony",
    "/locations/driving-school-kuniamuthur",
    "/locations/driving-school-sundarapuram",
    "/locations/driving-school-rs-puram",
    "/locations/driving-school-gandhipuram",

    "/gallery",

    "/contact"
  ];

  return routes.map((route) => {
    // Map priorities based on SEO value
    let priority = 0.7;
    if (route === "") priority = 1.0;
    else if (route.includes("/locations/driving-school-")) priority = 0.9;
    else if (["/about", "/services", "/locations", "/contact"].includes(route)) priority = 0.8;

    return {
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "daily" : "weekly",
      priority
    };
  });
}
