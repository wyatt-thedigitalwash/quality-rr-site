import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "St. Petersburg General Contractor",
  description:
    "St. Petersburg general contractor specializing in Old Northeast, Snell Isle, Shore Acres, and downtown renovations. Flood zone expertise, FEMA compliance, kitchen and bathroom remodeling. Licensed CGC1523357.",
  alternates: { canonical: "https://quality-rr.com/locations/st-petersburg" },
  openGraph: {
    title: "St. Petersburg General Contractor | Quality Restoration & Renovations",
    description:
      "St. Petersburg general contractor specializing in Old Northeast, Snell Isle, Shore Acres, and downtown renovations. Flood zone expertise and FEMA compliance.",
    url: "https://quality-rr.com/locations/st-petersburg",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "St. Petersburg General Contractor | Quality Restoration & Renovations",
    description:
      "St. Petersburg general contractor. Flood zone expertise, FEMA compliance, kitchen and bathroom remodeling across St. Pete neighborhoods.",
    images: ["/og-image.png"],
  },
};

const neighborhoods = [
  {
    name: "Old Northeast",
    description:
      "Historic 1910s-1930s bungalows along brick-paved streets. Renovations here balance preservation with modernization: keeping original architecture while updating kitchens, bathrooms, electrical, and mechanical systems.",
  },
  {
    name: "Snell Isle",
    description:
      "Waterfront homes from the 1920s onward, ranging from Mediterranean Revival originals to mid-century rebuilds. Flood zone considerations, hurricane-rated improvements, and high-end finish work define the scope here.",
  },
  {
    name: "Shore Acres",
    description:
      "Mid-century canal-front ranches in northeast St. Pete. Most properties sit in AE flood zones, which shapes every renovation decision. The team has experience with elevation requirements and FEMA-compliant construction.",
  },
  {
    name: "Downtown St. Petersburg",
    description:
      "Loft conversions, condo renovations, and historic building restorations across the urban core. Coordinating with HOAs, building management, and downtown construction logistics is a core part of the work.",
  },
  {
    name: "Crescent Heights & Historic Kenwood",
    description:
      "Established residential neighborhoods with bungalows and craftsman homes from the 1920s. Renovations here often involve historic preservation considerations and detailed finish work.",
  },
  {
    name: "Pinellas Park & Largo",
    description:
      "Suburban neighborhoods with mid-century and newer construction. Common scopes include open-concept conversions, kitchen and bathroom updates, and bringing dated builder finishes up to current standards.",
  },
];

const considerations = [
  {
    label: "Flood Zones",
    headline: "AE, VE, and X zones change everything.",
    description:
      "If the property is in an AE or VE flood zone, the renovation plan must address elevation, foundation systems, and flood-resistant materials. The team checks flood zone status as part of every initial consultation and builds scope accordingly.",
  },
  {
    label: "The 50% Rule",
    headline: "Renovation budgets have a hard ceiling.",
    description:
      "St. Petersburg enforces a 49% threshold: if renovation costs exceed 49% of the structure's depreciated value, the entire home must be brought into current flood code. The team scopes projects with this rule in mind upfront, not after permitting starts.",
  },
  {
    label: "Post-Storm Permitting",
    headline: "Every repair requires a permit.",
    description:
      "Since Hurricanes Helene and Milton in 2024, the City of St. Petersburg requires permits on all repair work, including drywall, flooring, cabinetry, and finishes. The team handles every permit submission and inspection so homeowners are not navigating compliance alone.",
  },
];

const services = [
  { name: "Kitchen Remodeling", href: "/services/kitchen-remodeling", description: "Custom cabinets, countertops, lighting, and full layout reconfiguration." },
  { name: "Bathroom Remodeling", href: "/services/bathroom-remodeling", description: "Spa-inspired layouts, premium fixtures, custom vanities, and tile work." },
  { name: "Office Remodeling", href: "/services/office-remodeling", description: "Layout reconfiguration, custom millwork, and commercial finishes." },
  { name: "Full Home Renovation", href: "/services/residential", description: "Comprehensive renovations that touch every room in the home." },
  { name: "Commercial Work", href: "/services/commercial", description: "Office remodels, tenant build-outs, and multi-housing renovations." },
  { name: "Fire & Flood Restoration", href: "/services/residential", description: "Certified restoration with Xactimate insurance coordination." },
];

const faqItems = [
  {
    question: "Do I need an elevation certificate for my renovation?",
    answer:
      "If the property is in an AE or VE flood zone, an elevation certificate is typically required to determine whether the structure sits above Base Flood Elevation. The team can help arrange an elevation survey through licensed local surveyors as part of project planning.",
  },
  {
    question: "What is the 50% rule and how does it affect my renovation budget?",
    answer:
      "St. Petersburg enforces a 49% threshold: if cumulative renovation costs exceed 49% of the structure's depreciated value, the entire home must be brought into current FEMA flood code, including potential elevation. The team builds project budgets around this rule from the start, not after work has begun.",
  },
  {
    question: "Can you handle FEMA-compliant construction?",
    answer:
      "Yes. The team has experience with elevation requirements, breakaway walls, flood vents, and the substantial improvement compliance process. Every St. Pete project that triggers flood zone requirements is scoped with FEMA compliance built into the plan.",
  },
  {
    question: "How long do St. Pete permits take?",
    answer:
      "Standard renovations in St. Petersburg typically permit in 3 to 6 weeks. Projects involving flood compliance, historic district review, or coastal construction can take longer. The team plans schedules around realistic permit timelines and submits all paperwork directly.",
  },
];

export default function StPetersburgLocationPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Locations / St. Petersburg
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            General contracting in St. Petersburg, FL.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Quality Restoration & Renovations serves St. Petersburg homeowners
            across Old Northeast, Snell Isle, Shore Acres, downtown, and the
            surrounding coastal neighborhoods. With over 25 years of Tampa Bay
            renovation experience, the team knows St. Pete's housing stock,
            flood zone requirements, and the realities of renovating in a
            coastal city.
          </p>
        </div>
      </section>

      {/* Section 2: Local Intro */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                St. Petersburg, Florida
              </p>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
                A St. Pete contractor that understands coastal renovation.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md">
                St. Petersburg is unlike anywhere else in Tampa Bay. Historic
                bungalows in Old Northeast, mid-century waterfront homes in
                Shore Acres, downtown condos, and 1950s ranches across the city
                each have their own renovation considerations.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-6">
                Flood zones, FEMA compliance, and the 50% rule shape every
                substantial renovation here. The team has experience navigating
                City of St. Petersburg permitting, including post-Hurricane
                Helene rebuilds and flood-compliant construction.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Start a St. Pete project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/correct/bathroom-blue-marble-freestanding-tub-glass-shower-tampa.jpg"
                  alt="St. Petersburg bathroom renovation with blue marble and freestanding tub"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Neighborhoods */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Neighborhoods
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy tracking-[-0.03em] leading-tight mb-4">
            St. Petersburg neighborhoods served.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl mt-2 mb-16">
            Renovation projects across St. Pete's distinct neighborhoods, from
            historic districts to waterfront communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {neighborhoods.map((n) => (
              <div key={n.name} className="border-t border-taupe/20 pt-6">
                <h3 className="font-sans font-bold text-xl md:text-2xl text-navy leading-tight tracking-[-0.02em]">
                  {n.name}
                </h3>
                <p className="font-sans text-base text-ink leading-relaxed mt-3 max-w-sm">
                  {n.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Local Context */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Local Context
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy tracking-[-0.03em] leading-tight mb-16">
            What renovating in St. Pete actually involves.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed">
                St. Petersburg's housing stock is older than most realize. About
                46% of the city's housing was built between the 1940s and 1960s,
                much of it sitting at or near current Base Flood Elevation. Many
                of these homes predate flood zone requirements entirely.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed mt-6">
                The City of St. Petersburg enforces FEMA's substantial
                improvement rule strictly. If a renovation exceeds 49% of the
                structure's depreciated value, the entire structure must be
                brought into current flood code, which can mean elevation,
                structural changes, and significant scope expansion. The team
                builds project budgets with this rule in mind, before quotes go
                out.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed mt-6">
                After Hurricanes Helene and Milton in 2024, St. Pete's permit
                and inspection process tightened significantly. Permits are
                required for all repairs, including drywall, flooring, and
                finishes. The team handles every permit and inspection directly
                so homeowners are not navigating the bureaucracy alone.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/bathroom-blue-marble-double-vanity-led-mirror.jpg"
                  alt="St. Petersburg bathroom remodel with double vanity"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Featured Projects */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Selected St. Pete Work
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy tracking-[-0.03em] leading-tight mb-16">
            Recent St. Petersburg projects.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/5]">
              <Image src="/images/correct/bathroom-blue-marble-freestanding-tub-glass-shower-tampa.jpg" alt="St. Petersburg bathroom remodel with freestanding tub" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/5]">
              <Image src="/images/blue-daybed-reading-nook.jpg" alt="St. Petersburg residential renovation reading nook" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/5]">
              <Image src="/images/home-bar-remodel.jpg" alt="St. Petersburg home bar custom renovation" fill className="object-cover" />
            </div>
          </div>
          <div className="mt-12 text-center">
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

      {/* Section 6: Local Considerations */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            What St. Pete Homeowners Should Know
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-navy tracking-[-0.025em] leading-tight mb-12">
            Three things every St. Pete renovation should account for.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {considerations.map((c) => (
              <div key={c.label}>
                <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-3">
                  {c.label}
                </p>
                <h3 className="font-sans font-bold text-xl md:text-2xl text-navy tracking-[-0.02em] leading-tight mb-3">
                  {c.headline}
                </h3>
                <p className="font-sans text-base text-ink leading-relaxed max-w-sm">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Services */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mb-12">
            Services available across St. Petersburg.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link
                key={s.name}
                href={s.href}
                className="group border-t border-taupe/20 pt-6"
              >
                <h3 className="font-sans font-bold text-lg md:text-xl text-navy tracking-[-0.02em] leading-tight group-hover:text-taupe-dark transition-colors">
                  {s.name}
                </h3>
                <p className="font-sans text-sm text-ink leading-relaxed mt-2">
                  {s.description}
                </p>
                <span className="inline-flex items-center gap-2 mt-4 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy group-hover:text-taupe-dark transition-colors">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Local FAQ */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                St. Pete Questions
              </p>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em]">
                Common questions from St. Petersburg homeowners.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: CTA */}
      <section data-bg="light" className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Start
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Planning a St. Petersburg project?
          </h2>
          <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-xl mx-auto mb-10">
            Send a quick note about the scope and timeline. The team responds
            within one business day with next steps and a free, no-obligation
            consultation.
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
          { name: "Locations", url: "https://quality-rr.com/locations/st-petersburg" },
          { name: "St. Petersburg", url: "https://quality-rr.com/locations/st-petersburg" },
        ]}
      />
      <ServiceJsonLd
        name="General Contracting in St. Petersburg, FL"
        description="Licensed general contractor serving St. Petersburg homeowners across Old Northeast, Snell Isle, Shore Acres, and downtown. Flood zone expertise, FEMA compliance, kitchen and bathroom remodeling."
        url="https://quality-rr.com/locations/st-petersburg"
      />
    </>
  );
}
