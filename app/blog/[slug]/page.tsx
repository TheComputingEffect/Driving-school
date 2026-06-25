import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { sanityClient } from "@/lib/sanity/client";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: string;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata dynamically based on post contents
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await sanityClient.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | K. Priyadharshini Driving School`,
    description: post.excerpt,
    path: `/blog/${slug}`,
    keywords: [post.title, "Driving School Coimbatore Tips"],
  });
}

// Map dynamic paths for static generation compile checks
export async function generateStaticParams() {
  const posts = await sanityClient.fetch<Post[]>(`*[_type == "post"]`);
  return posts.map((post) => ({
    slug: post.slug.current
  }));
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await sanityClient.fetch<Post | null>(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  const crumbs = [
    { name: "Blog", url: "/blog" },
    { name: post.title, url: `/blog/${slug}` }
  ];

  const dateFormatted = new Date(post.publishedAt).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <div className="flex-1 bg-brand-bg pb-20">
      <BreadcrumbSchema items={crumbs} />

      <article className="max-w-[800px] mx-auto px-4 md:px-6 mt-8">
        {/* Back Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-muted hover:text-brand-blue mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        {/* Date and Author */}
        <div className="flex items-center gap-3 text-xs text-brand-muted mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {dateFormatted}
          </span>
          <span>&middot;</span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            Coimbatore Instructors Team
          </span>
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-text font-heading leading-tight tracking-tight mb-6">
          {post.title}
        </h1>

        {/* Excerpt Summary */}
        <p className="text-base text-brand-muted italic leading-relaxed border-l-4 border-brand-blue pl-4 mb-8">
          {post.excerpt}
        </p>

        {/* Body Text */}
        <div className="bg-white border border-brand-border rounded-2xl p-6 md:p-10 prose max-w-none text-brand-text leading-relaxed text-sm md:text-base space-y-6">
          <p>{post.body}</p>
          
          <h2 className="text-xl font-bold font-heading pt-4 text-brand-text">Safety Protocol &amp; Guidelines</h2>
          <p>
            Coimbatore roads call for steady deceleration skills. Ensure your foot transitions smoothly to brakes during unexpected traffic stops near major bus junctions. Learn steering control from certified dual-control coaches at K. Priyadharshini Driving School to practice defensive maneuvers safely.
          </p>

          <h2 className="text-xl font-bold font-heading pt-4 text-brand-text">Need Professional Driving Coaching?</h2>
          <p>
            We provide structured morning and evening batches with home pick-up spanning Kovaipudur, Sivananda Colony, and surrounding Coimbatore sectors. Speak to our coordination desk to reserve a free trail session.
          </p>
        </div>
      </article>
    </div>
  );
}
