import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Tampa",
  description: "Bathroom remodeling in Tampa, FL. Custom vanities, shower enclosures, tile work, plumbing, and full layout renovation. Licensed.",
  alternates: { canonical: "https://quality-rr.com/services/bathroom-remodeling" },
  openGraph: {
    title: "Bathroom Remodeling Tampa | Quality Restoration & Renovations",
    description: "Bathroom remodeling in Tampa, FL. Custom vanities, shower enclosures, tile work, plumbing, and full layout renovation. Licensed.",
    url: "https://quality-rr.com/services/bathroom-remodeling",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Remodeling Tampa | Quality Restoration & Renovations",
    description: "Bathroom remodeling in Tampa, FL. Custom vanities, shower enclosures, tile work, plumbing, and full layout renovation. Licensed.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Flooring Installation",
    description:
      "Tile, vinyl, and waterproof laminate flooring installed with proper waterproofing and subfloor prep. Built to handle moisture and daily use.",
  },
  {
    title: "Cabinets & Vanities",
    description:
      "Custom-built vanities and bathroom cabinetry that maximize storage and match the design direction. Soft-close hardware, finished surfaces, and proper sealing.",
  },
  {
    title: "Countertops, Sinks & Faucets",
    description:
      "Stone, quartz, and solid surface countertops paired with high-quality sinks and fixtures. Beautiful daily surfaces that hold up.",
  },
  {
    title: "Tubs & Whirlpool Tubs",
    description:
      "Garden tubs, freestanding soaking tubs, and whirlpool installations. Plumbing rerouted as needed for proper layout and function.",
  },
  {
    title: "Plumbing & Electrical",
    description:
      "Licensed plumbing reroutes, electrical updates, ventilation, and code-compliant wiring. All trades coordinated under one contract.",
  },
  {
    title: "Shower Enclosures",
    description:
      "Framed and frameless glass shower enclosures, custom tile showers, and built-in benches. Sealed and finished for long-term durability.",
  },
  {
    title: "Drywall, Texture & Wall Prep",
    description:
      "Moisture-resistant drywall, smooth finishes, and proper wall prep behind tile and fixtures. The work that matters and never gets seen.",
  },
  {
    title: "Doors, Windows & Trim",
    description:
      "Pocket doors, glass windows for natural light, decorative trim, and finish carpentry that ties the whole room together.",
  },
];

export default function BathroomRemodelingPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services / Bathroom Remodeling
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Beautiful bathrooms, built to last.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Bathroom remodeling that turns outdated rooms into spa-inspired
            retreats. Expert layout, premium fixtures, and finish quality that
            holds up to daily use. From powder rooms to full master suites.
          </p>
        </div>
      </section>

      {/* Section 2: Intro / Overview */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Overview
              </p>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
                Bathrooms that hold up to daily use and still feel like a
                retreat.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md">
                Bathrooms get the hardest use of any room in the house. They
                need to be beautiful and functional, but they also need to
                handle moisture, traffic, and constant cleaning without falling
                apart. The team builds for both.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-6">
                Florida General Contractor License CGC1523357. Licensed, bonded,
                and insured for residential and commercial work.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Start a bathroom project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full"><Image src="/images/bathroom-freestanding-tub-dual-vanity-chandelier-tampa.jpg" alt="Bathroom with freestanding tub, dual vanity, and chandelier in Tampa" fill className="object-cover" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            What We Do
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-4">
            Complete bathroom renovation services.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mt-2 mb-16">
            From powder room refreshes to full master suite renovations, every
            part of the bathroom remodel handled by one licensed team.
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

      {/* Section 4: Selected Work */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Selected Work
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            Recent bathroom work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] w-full"><Image src="/images/correct/bathroom-blue-marble-walk-in-shower-brass-fixtures-tampa.jpg" alt="Blue marble walk-in shower with brass fixtures" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/correct/bathroom-vanity-stacked-stone-tile-round-mirror-tampa.jpg" alt="Bathroom with round mirror and stacked tile" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/correct/bathroom-white-vanity-gold-mirror-glass-shower-tampa.jpg" alt="Bathroom with white vanity and glass shower enclosure" fill className="object-cover" /></div>
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

      {/* Section 5: CTA Band */}
      <section data-bg="light" className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Start
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Planning a bathroom project?
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
        { name: "Services", url: "https://quality-rr.com/services" },
        { name: "Bathroom Remodeling", url: "https://quality-rr.com/services/bathroom-remodeling" },
      ]} />
      <ServiceJsonLd name="Bathroom Remodeling" description="Custom vanities, shower enclosures, tile work, plumbing, and full layout renovation in Tampa, FL." url="https://quality-rr.com/services/bathroom-remodeling" />
    </>
  );
}
