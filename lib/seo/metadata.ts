import { Metadata } from "next";

interface ConstructMetadataProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/og/homepage.jpg",
  keywords = [],
  noIndex = false
}: ConstructMetadataProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kpriyadharshinidrivingschool.com";
  const canonicalUrl = `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`.replace(/\/$/, "");

  const defaultKeywords = [
    "Driving School Coimbatore",
    "Ladies Driving Classes Coimbatore",
    "Driving Licence Services Coimbatore",
    "Driving School Kovaipudur",
    "Driving School Sivananda Colony",
    "RTO Services Coimbatore"
  ];

  const mergedKeywords = Array.from(new Set([...defaultKeywords, ...keywords]));

  return {
    title: {
      default: title,
      template: `%s | K. Priyadharshini Driving School`
    },
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-IN": `${canonicalUrl}?lang=en`,
        "ta-IN": `${canonicalUrl}?lang=ta`
      }
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "K. Priyadharshini Driving School",
      images: [
        {
          url: image.startsWith("http") ? image : `${siteUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : `${siteUrl}${image}`],
      creator: "@kpdrivingschool"
    },
    metadataBase: new URL(siteUrl)
  };
}
