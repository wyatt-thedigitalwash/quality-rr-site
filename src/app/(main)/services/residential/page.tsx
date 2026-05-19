import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Residential Remodeling Tampa",
  description: "Residential general contracting in Tampa, FL. Full home renovations, kitchen and bathroom remodels, outdoor living, and restoration.",
  alternates: { canonical: "https://quality-rr.com/services/residential" },
  openGraph: {
    title: "Residential Remodeling Tampa | Quality Restoration & Renovations",
    description: "Residential general contracting in Tampa, FL. Full home renovations, kitchen and bathroom remodels, outdoor living, and restoration.",
    url: "https://quality-rr.com/services/residential",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Remodeling Tampa | Quality Restoration & Renovations",
    description: "Residential general contracting in Tampa, FL. Full home renovations, kitchen and bathroom remodels, outdoor living, and restoration.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Full Home Renovation",
    description:
      "Comprehensive renovations that touch every room. New layouts, finishes, mechanical systems, and finish quality across the entire home.",
  },
  {
    title: "Interior & Exterior Remodeling",
    description:
      "Curb appeal and interior comfort handled together. Siding, paint, flooring, walls, and trim, inside and out.",
  },
  {
    title: "Patio & Outdoor Living",
    description:
      "Patios, lanais, pool decks, and outdoor kitchens built for the way the home gets used outside, year-round in Florida.",
  },
  {
    title: "Doors, Windows & Ceilings",
    description:
      "Energy-efficient windows, exterior and interior doors, ceiling treatments, and finish carpentry that ties the home together.",
  },
  {
    title: "Fire & Flood Restoration",
    description:
      "Certified restoration after fire, smoke, water, and storm damage. Insurance claims coordinated through Xactimate for streamlined processing.",
  },
  {
    title: "Structural Modifications",
    description:
      "Wall removals, openings, ductwork relocations, and load-bearing changes that make a floor plan finally work the way it should.",
  },
  {
    title: "Flooring & Trim Work",
    description:
      "Hardwood, tile, vinyl, and laminate flooring with precision trim, baseboards, and molding. Installed to last, finished cleanly.",
  },
  {
    title: "Drywall & Painting",
    description:
      "Smooth drywall installation, repair, and texture matching. Interior and exterior paint applied with the prep and finish quality that holds up.",
  },
];

export default function ResidentialPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services / Residential
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Home renovations that reflect the way you live.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Quality Restoration & Renovations builds homes around how the people
            who live there actually use them. Full renovations, custom additions,
            kitchen and bathroom remodels, outdoor living, and disaster
            restoration. Delivered with 25 years of licensed, bonded, and
            insured experience across Tampa Bay.
          </p>
        </div>
      </section>

      {/* Section 2: Intro / Overview */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Overview
              </p>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy">
                Built for how the home actually gets used.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="max-w-2xl">
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed">
                  The home should reflect the lifestyle inside it. That means
                  kitchens designed around how a family actually cooks, bathrooms
                  that hold up to daily use, outdoor living that gets used
                  year-round, and structural changes that make the floor plan
                  finally work.
                </p>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed mt-6">
                  Every project runs the same disciplined process: clear scope,
                  honest schedule, clean job sites, and finished work that holds
                  up under scrutiny. Florida General Contractor License
                  CGC1523357.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Start a residential project
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Featured Specialties */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Featured
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            Kitchens and bathrooms with their own pages.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Kitchen */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/kitchen-gray-cabinets-island-bar-stools-tampa.jpg" alt="Kitchen remodel with gray cabinets and island" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Kitchen Remodeling
                </p>
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mt-3">
                  Where style meets function in every kitchen.
                </h3>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-5">
                  Custom cabinetry, new countertops, modern lighting, and full
                  layout reconfiguration. Built around how the kitchen actually
                  gets used.
                </p>
                <Link
                  href="/services/kitchen-remodeling"
                  className="inline-flex items-center gap-2 mt-8 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Explore kitchen remodeling
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Bathroom */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/correct/bathroom-white-vanity-gold-mirror-glass-shower-tampa.jpg" alt="Bathroom remodel with white vanity and glass shower" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Bathroom Remodeling
                </p>
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mt-3">
                  Beautiful bathrooms, built to last.
                </h3>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-5">
                  Spa-inspired layouts, premium fixtures, custom vanities, and
                  precision tile work. Built for daily comfort, from powder rooms
                  to master suites.
                </p>
                <Link
                  href="/services/bathroom-remodeling"
                  className="inline-flex items-center gap-2 mt-8 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Explore bathroom remodeling
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Full Service List */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Full Service List
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-4">
            The full range of residential work.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mt-2 mb-16">
            Every residential service the firm handles, from full renovations to
            specific finish work. All licensed, bonded, and insured.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {services.map((service) => (
              <div key={service.title} className="border-t border-taupe/20 pt-6">
                <h3 className="font-sans font-bold text-xl md:text-2xl text-navy leading-tight tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="font-sans text-base text-ink leading-relaxed mt-3 max-w-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Selected Work Preview */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Selected Work
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            Recent residential work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/5] w-full"><Image src="/images/granite-backsplash-renovation.jpg" alt="Kitchen granite backsplash detail" fill className="object-cover" /></div>
            <div className="relative aspect-[4/5] w-full"><Image src="/images/correct/bathroom-vanity-stacked-stone-tile-round-mirror-tampa.jpg" alt="Bathroom with round mirror and stacked tile" fill className="object-cover" /></div>
            <div className="relative aspect-[4/5] w-full"><Image src="/images/blue-daybed-reading-nook.jpg" alt="Custom reading nook with blue daybed" fill className="object-cover" /></div>
          </div>
          <div className="mt-16 text-center">
            <Link
              href="/project-gallery"
              className="inline-flex items-center gap-2 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
            >
              View Full Project Gallery
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Band */}
      <section data-bg="bone" className="bg-bone py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Start
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Planning a home project?
          </h2>
          <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-xl mx-auto mb-10">
            Send a quick note about the project. The team responds within one
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
        { name: "Services", url: "https://quality-rr.com/services" },
        { name: "Residential", url: "https://quality-rr.com/services/residential" },
      ]} />
      <ServiceJsonLd name="Residential Remodeling" description="Full home renovations, kitchen and bathroom remodels, outdoor living, structural modifications, and disaster restoration in Tampa, FL." url="https://quality-rr.com/services/residential" />
    </>
  );
}
