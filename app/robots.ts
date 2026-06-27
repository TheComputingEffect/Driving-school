import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kpriyadharshinidrivingschool.in";
  
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/",
        "/api/",
        "/sanity/",
        "/admin/"
      ]
    },
    sitemap: `${siteUrl}/sitemap.xml`
  };
}
