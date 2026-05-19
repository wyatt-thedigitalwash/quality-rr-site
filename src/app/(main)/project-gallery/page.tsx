import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Project Gallery",
  description: "Recent residential and commercial renovation projects across Tampa Bay. Kitchens, bathrooms, offices, and full property work.",
  alternates: { canonical: "https://quality-rr.com/project-gallery" },
  openGraph: {
    title: "Project Gallery | Quality Restoration & Renovations",
    description: "Recent residential and commercial renovation projects across Tampa Bay. Kitchens, bathrooms, offices, and full property work.",
    url: "https://quality-rr.com/project-gallery",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | Quality Restoration & Renovations",
    description: "Recent residential and commercial renovation projects across Tampa Bay. Kitchens, bathrooms, offices, and full property work.",
    images: ["/og-image.png"],
  },
};

export default function ProjectGalleryPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Project Gallery
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Work that speaks for itself.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            A selection of recent residential and commercial work across Tampa
            Bay. Kitchens, bathrooms, full home renovations, office build-outs,
            multi-housing, and disaster restoration. Every project handled by
            the same licensed crews, finished to the same standard.
          </p>
        </div>
      </section>

      {/* Section 2: Main Project Grid */}
      <section data-bg="light" className="bg-white pt-0 pb-24 md:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <GalleryGrid />
        </div>
      </section>

      {/* Section 3: Before / During / After */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Before / During / After
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-6">
            A patio renovation, start to finish.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mb-16">
            A Tampa outdoor space renovation captured at three stages: the
            original condition, mid-construction, and the finished result. Same
            space, three months apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div>
              <div className="relative aspect-[4/3]">
                <Image src="/images/patio-remodel-before.jpg" alt="Tampa patio before renovation" fill className="object-cover" />
              </div>
              <h3 className="font-sans font-bold text-xl text-navy tracking-[-0.02em] mt-5">
                Before
              </h3>
              <p className="font-sans text-sm text-ink leading-relaxed mt-2">
                Empty exterior space with limited function and no designated outdoor living area.
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3]">
                <Image src="/images/patio-remodel-during.jpg" alt="Tampa patio during construction" fill className="object-cover" />
              </div>
              <h3 className="font-sans font-bold text-xl text-navy tracking-[-0.02em] mt-5">
                During
              </h3>
              <p className="font-sans text-sm text-ink leading-relaxed mt-2">
                Frame and structure installation underway, preparing for the covered patio extension.
              </p>
            </div>
            <div>
              <div className="relative aspect-[4/3]">
                <Image src="/images/patio-remodel-after.jpg" alt="Completed Tampa patio renovation" fill className="object-cover" />
              </div>
              <h3 className="font-sans font-bold text-xl text-navy tracking-[-0.02em] mt-5">
                After
              </h3>
              <p className="font-sans text-sm text-ink leading-relaxed mt-2">
                Newly finished patio with overhead cover, enhanced seating space, and a clean, modern look.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Featured Project — Kate Jackson Center */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Featured Project
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-6">
            Kate Jackson Center Remodel
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mb-16">
            A community center renovation focused on durable materials, modern
            lighting, and finish quality that holds up to daily use by the
            public. Completed across multiple phases with the building remaining
            operational throughout the work.
          </p>

          {/* 2x2 Before/After Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Image src="/images/kate-jackson/kate-jackson-center-before-after-sign.jpg" alt="Kate Jackson Center sign before and after renovation" width={800} height={1000} className="w-full h-auto" />
            <Image src="/images/kate-jackson/kate-jackson-center-before-after-entrance.jpg" alt="Kate Jackson Center front entrance before and after" width={800} height={1000} className="w-full h-auto" />
            <Image src="/images/kate-jackson/kate-jackson-center-before-after-siding.jpg" alt="Kate Jackson Center siding before and after" width={800} height={1000} className="w-full h-auto" />
            <Image src="/images/kate-jackson/kate-jackson-center-before-after-pergola.jpg" alt="Kate Jackson Center pergola before and after" width={800} height={1000} className="w-full h-auto" />
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 gap-y-6 mt-16">
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-2">
                Category
              </p>
              <p className="font-sans font-bold text-base md:text-lg text-navy leading-tight">
                Commercial / Community Facility
              </p>
            </div>
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-2">
                Scope
              </p>
              <p className="font-sans font-bold text-base md:text-lg text-navy leading-tight">
                Full Interior Renovation
              </p>
            </div>
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-2">
                Location
              </p>
              <p className="font-sans font-bold text-base md:text-lg text-navy leading-tight">
                Tampa, FL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CTA Band */}
      <section data-bg="bone" className="bg-bone py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Start
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Have a project in mind?
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
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://quality-rr.com" },
        { name: "Project Gallery", url: "https://quality-rr.com/project-gallery" },
      ]} />
    </>
  );
}
