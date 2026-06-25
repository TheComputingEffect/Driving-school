// In phase 5, this will import { createClient } from "@sanity/client"
// For now, we mock the client to safely return content for sitemaps and blog listings.
import { faqs } from "@/content/faq";
import { testimonials } from "@/content/testimonials";
import { courses } from "@/content/courses";
import { services } from "@/content/services";

export const sanityClient = {
  fetch: async <T>(query: string, params: Record<string, any> = {}): Promise<T> => {
    console.log("Fetching via Sanity mock client:", query, params);
    
    // Simple dynamic queries mapping
    if (query.includes("faq")) {
      return faqs as unknown as T;
    }
    if (query.includes("testimonial") || query.includes("review")) {
      return testimonials as unknown as T;
    }
    if (query.includes("course")) {
      return courses as unknown as T;
    }
    if (query.includes("service")) {
      return services as unknown as T;
    }
    if (query.includes("post") || query.includes("blog")) {
      // Mock blog posts
      const mockPosts = [
        {
          id: "post-1",
          title: "How to Clear Coimbatore Driving License Test in 1st Attempt",
          slug: { current: "clear-coimbatore-driving-license-test" },
          publishedAt: "2026-06-01T10:00:00Z",
          excerpt: "Useful tips, RTO road regulations, and test track guidance to clear your driving test in Coimbatore.",
          body: "Learn the secrets to passing your driving test on the first try..."
        },
        {
          id: "post-2",
          title: "Ladies Driving Classes in Coimbatore: Why Safe Training Environments Matter",
          slug: { current: "ladies-driving-classes-coimbatore-benefits" },
          publishedAt: "2026-06-10T12:00:00Z",
          excerpt: "Explore the growing demand for female driving instructors and how specialized coaching builds road confidence.",
          body: "A safe, supportive environment is essential when learning to drive..."
        },
        {
          id: "post-3",
          title: "Decoding RTO Services in Coimbatore: Hypothecation, Renewal, and Transposition",
          slug: { current: "rto-services-coimbatore-explained" },
          publishedAt: "2026-06-20T08:00:00Z",
          excerpt: "A comprehensive guide on handling vehicle documentation, address changes, and license renewals in Tamil Nadu.",
          body: "RTO regulations can seem complex, but with our simple breakdown..."
        }
      ];
      
      if (params.slug) {
        const found = mockPosts.find(p => p.slug.current === params.slug);
        return found as unknown as T;
      }
      return mockPosts as unknown as T;
    }
    
    return [] as unknown as T;
  }
};
export default sanityClient;
