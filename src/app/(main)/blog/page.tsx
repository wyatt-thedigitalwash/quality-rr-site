import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tampa Bay renovation guides, neighborhood insights, and local authority content from Quality Restoration & Renovations.",
  alternates: { canonical: "https://quality-rr.com/blog" },
  openGraph: {
    title: "Blog | Quality Restoration & Renovations",
    description:
      "Tampa Bay renovation guides, neighborhood insights, and local authority content from Quality Restoration & Renovations.",
    url: "https://quality-rr.com/blog",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Quality Restoration & Renovations",
    description:
      "Tampa Bay renovation guides, neighborhood insights, and local authority content.",
    images: ["/og-image.png"],
  },
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section
        data-bg="light"
        className="bg-white py-20 md:py-24"
      >
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Blog
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Renovation insights from the team.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Local authority content on Tampa Bay renovation, code,
            neighborhoods, and project execution. Written by Quality Restoration
            & Renovations.
          </p>
        </div>
      </section>

      {/* Posts grid */}
      <section data-bg="bone" className="bg-bone py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          {posts.length === 0 ? (
            <p className="font-sans text-lg text-taupe text-center py-20">
              Posts coming soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {posts.map((post) => (
                <article key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="relative aspect-[16/10]">
                      <Image
                        src={post.featuredImage}
                        alt={post.featuredImageAlt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>
                  <div className="pt-6">
                    <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe">
                      {post.category}
                    </p>
                    <h2 className="mt-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="font-sans font-bold text-2xl md:text-3xl text-navy leading-tight tracking-[-0.02em] hover:text-taupe-dark transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="font-sans text-base text-ink leading-relaxed mt-4">
                      {post.excerpt}
                    </p>
                    <p className="font-sans font-medium text-xs tracking-[0.1em] uppercase text-taupe mt-6">
                      {formatDate(post.date)} &middot; {post.readingTime} min
                      read
                    </p>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section data-bg="light" className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Start
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Planning a renovation?
          </h2>
          <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-xl mx-auto mb-10">
            The team is happy to discuss your project, walk the space, and
            provide a free no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block font-sans font-medium uppercase text-xs tracking-[0.15em] bg-navy text-white px-8 py-4 rounded-[2px] hover:bg-taupe-dark transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://quality-rr.com" },
          { name: "Blog", url: "https://quality-rr.com/blog" },
        ]}
      />
    </>
  );
}
