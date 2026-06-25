import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { sanityClient } from "@/lib/sanity/client";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Driving School Blog & Safety Tips | K. Priyadharshini",
  description:
    "Read driving safety tips, RTO licence guides, and practical test preparation guides written by our certified Coimbatore coaching experts.",
  path: "/blog",
  keywords: ["Coimbatore Driving School Tips", "RTO Test Preparation Coimbatore", "How to drive a manual car"],
});

interface Post {
  id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
}

export default async function BlogIndexPage() {
  const crumbs = [{ name: "Blog", url: "/blog" }];
  
  // Fetch posts from mock client
  const posts = await sanityClient.fetch<Post[]>(`*[_type == "post"]`);

  return (
    <div className="flex-1 bg-brand-bg pb-16">
      <BreadcrumbSchema items={crumbs} />

      {/* Page Header */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 pt-8 pb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight">
          Driving Safety Tips &amp; RTO Guides
        </h1>
        <p className="mt-4 text-lg text-brand-muted max-w-2xl mx-auto leading-relaxed">
          Stay informed with regular insights from our certified driving instructors. Learn rules, preparation guidelines, and vehicle maintenance.
        </p>
      </div>

      {/* Grid listing */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => {
          const dateFormatted = new Date(post.publishedAt).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "short",
            year: "numeric"
          });

          return (
            <article 
              key={post.id}
              className="bg-white border border-brand-border rounded-2xl p-6 flex flex-col justify-between hover:shadow-sm transition-shadow duration-300"
            >
              <div>
                {/* Meta details */}
                <div className="flex items-center gap-3 text-xs text-brand-muted mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {dateFormatted}
                  </span>
                  <span>&middot;</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    Instructors Team
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-brand-text mb-3 font-heading leading-snug hover:text-brand-blue transition-colors">
                  <Link href={`/blog/${post.slug.current}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-sm text-brand-muted leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Read button */}
              <Link
                href={`/blog/${post.slug.current}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-blue-800 transition-colors pt-2 select-none group"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
