import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    return {
      title: post.title,
      description: post.description,
      alternates: { canonical: `https://quality-rr.com/blog/${slug}` },
      openGraph: {
        title: `${post.title} | Quality Restoration & Renovations`,
        description: post.description,
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.updatedDate || post.date,
        url: `https://quality-rr.com/blog/${slug}`,
        siteName: "Quality Restoration & Renovations",
        images: [
          { url: post.featuredImage, alt: post.featuredImageAlt },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${post.title} | Quality Restoration & Renovations`,
        description: post.description,
        images: [post.featuredImage],
      },
    };
  });
}

const mdxComponents = {
  h1: (props: React.ComponentProps<"h2">) => (
    <h2
      className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-[-0.025em] leading-tight mt-16 mb-6"
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="font-sans font-bold text-3xl md:text-4xl text-navy tracking-[-0.025em] leading-tight mt-16 mb-6"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="font-sans font-bold text-2xl text-navy tracking-[-0.02em] leading-tight mt-12 mb-4"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p
      className="font-sans text-lg text-ink leading-[1.7] mb-6"
      {...props}
    />
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a
      className="text-navy underline underline-offset-4 hover:text-taupe-dark transition-colors"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="list-disc list-outside ml-6 mb-6 font-sans text-lg text-ink leading-[1.7]"
      {...props}
    />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol
      className="list-decimal list-outside ml-6 mb-6 font-sans text-lg text-ink leading-[1.7]"
      {...props}
    />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li className="mb-2" {...props} />
  ),
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="border-l-[3px] border-taupe pl-6 italic text-xl text-ink mt-8 mb-8"
      {...props}
    />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  em: (props: React.ComponentProps<"em">) => (
    <em className="italic" {...props} />
  ),
  hr: () => <hr className="border-t border-taupe/20 my-12" />,
};

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [`https://quality-rr.com${post.featuredImage}`],
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://quality-rr.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Quality Restoration & Renovations",
      logo: {
        "@type": "ImageObject",
        url: "https://quality-rr.com/branding/quality-restoration-renovations-favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://quality-rr.com/blog/${slug}`,
    },
  };

  return (
    <>
      {/* Post Header */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            <Link
              href="/blog"
              className="hover:text-navy transition-colors"
            >
              Blog
            </Link>
          </p>
          <h1 className="font-sans font-extrabold text-3xl md:text-4xl lg:text-5xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            {post.title}
          </h1>
          <p className="font-sans font-medium text-sm tracking-[0.05em] text-taupe mt-8">
            {post.author} &middot; {formatDate(post.date)} &middot;{" "}
            {post.readingTime} min read
            {post.updatedDate && (
              <> &middot; Updated {formatDate(post.updatedDate)}</>
            )}
          </p>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="relative aspect-[16/9]">
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Post Content */}
      <section className="bg-white py-16 md:py-24">
        <article className="max-w-[1100px] mx-auto px-6 md:px-10">
          <MDXRemote source={post.content} components={mdxComponents} />
        </article>
      </section>

      {/* Continue Exploring */}
      {post.internalLinks && post.internalLinks.length > 0 && (
        <section className="bg-white pb-16 md:pb-24">
          <div className="max-w-[1100px] mx-auto px-6 md:px-10 border-t border-taupe/20 pt-12">
            <h2 className="font-sans font-bold text-xl text-navy mb-6">
              Continue exploring
            </h2>
            <div className="flex flex-col gap-4">
              {post.internalLinks.map((link) => (
                <Link
                  key={link}
                  href={link}
                  className="inline-flex items-center gap-2 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  {link.replace(/^\//, "").replace(/\//g, " / ")}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section data-bg="bone" className="bg-bone py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Ready to Start?
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Planning a project?
          </h2>
          <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-xl mx-auto mb-10">
            Send a quick note about the scope. The team responds within one
            business day with next steps and a free, no-obligation consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block font-sans font-medium uppercase text-xs tracking-[0.15em] bg-navy text-white px-8 py-4 rounded-[2px] hover:bg-taupe-dark transition-colors"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://quality-rr.com" },
          { name: "Blog", url: "https://quality-rr.com/blog" },
          {
            name: post.title,
            url: `https://quality-rr.com/blog/${slug}`,
          },
        ]}
      />
    </>
  );
}
