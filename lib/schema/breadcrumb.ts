export interface BreadcrumbItemType {
  name: string;
  url: string;
}

export function getBreadcrumbSchema(items: BreadcrumbItemType[]) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kpriyadharshinidrivingschool.in";
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`
    }))
  };
}
