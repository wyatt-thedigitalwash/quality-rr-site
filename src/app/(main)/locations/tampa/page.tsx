import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tampa General Contractor",
  description:
    "Tampa general contractor with 25+ years serving Hyde Park, South Tampa, Westchase, Carrollwood, and beyond. Kitchen, bathroom, and full home renovations. Licensed CGC1523357.",
  alternates: { canonical: "https://quality-rr.com/locations/tampa" },
  openGraph: {
    title: "Tampa General Contractor | Quality Restoration & Renovations",
    description:
      "Tampa general contractor with 25+ years serving Hyde Park, South Tampa, Westchase, Carrollwood, and beyond. Kitchen, bathroom, and full home renovations.",
    url: "https://quality-rr.com/locations/tampa",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tampa General Contractor | Quality Restoration & Renovations",
    description:
      "Tampa general contractor with 25+ years serving Hyde Park, South Tampa, Westchase, Carrollwood, and beyond.",
    images: ["/og-image.png"],
  },
};

const neighborhoods = [
  {
    name: "Hyde Park",
    description:
      "Historic 1920s bungalows and craftsman homes. Renovations here often involve preserving original character while modernizing kitchens, bathrooms, and mechanical systems. Lath-and-plaster walls, original hardwood, and period-correct finishes are the norm.",
  },
  {
    name: "South Tampa",
    description:
      "Mid-century homes, custom builds, and waterfront properties from Davis Islands to Bayshore. Coastal considerations, hurricane-rated improvements, and high-end finish work are common scopes here.",
  },
  {
    name: "Westchase",
    description:
      "Suburban homes from the 1990s and 2000s. Common projects include open-concept conversions, kitchen and bathroom updates, outdoor living additions, and full home refreshes of dated builder finishes.",
  },
  {
    name: "Carrollwood & New Tampa",
    description:
      "Established suburban neighborhoods with a mix of mid-century and newer construction. Renovations range from cosmetic updates to full reconfigurations, especially in homes built before modern open-floor-plan standards.",
  },
  {
    name: "East Tampa & Seminole Heights",
    description:
      "Historic bungalows undergoing wave of restoration and modernization. Adaptive reuse, period-respectful renovations, and structural modernization are core services here.",
  },
  {
    name: "Brandon & Riverview",
    description:
      "Growing eastern suburbs with newer construction and active expansion. Common scopes include outdoor living additions, kitchen and bathroom updates, and converting builder-grade finishes to custom work.",
  },
];

const considerations = [
  {
    label: "Permitting",
    headline: "Tampa permits move at their own pace.",
    description:
      "The City of Tampa permit process can be slow during peak periods. The team plans schedules around realistic permit timelines, including pre-submission consultations with the building department on complex projects to avoid surprises.",
  },
  {
    label: "Hurricane Code",
    headline: "Florida Building Code, Tampa edition.",
    description:
      "Hurricane-rated improvements (windows, doors, roof attachments) are required on substantial renovations. The team handles code compliance as part of the standard scope, including coordinating with the city's building department on inspections.",
  },
  {
    label: "Historic Districts",
    headline: "Hyde Park, Seminole Heights, and Tampa Heights have rules.",
    description:
      "Historic district renovations require architectural review board approval for exterior changes. The team is familiar with the review process and designs renovations that respect district guidelines while modernizing what matters inside.",
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
    question: "How long does it take to get a Tampa permit?",
    answer:
      "Standard residential permits in Tampa typically issue in 2 to 4 weeks for straightforward renovations. Larger structural or commercial projects can run 6 to 12 weeks. The team plans schedules around realistic permit timelines and handles all submission and follow-up directly.",
  },
  {
    question: "Do you work in historic districts like Hyde Park and Seminole Heights?",
    answer:
      "Yes. The team has handled renovations in Tampa's historic districts and is familiar with the architectural review board process. Designs respect district guidelines for exterior changes while modernizing interior systems and finishes.",
  },
  {
    question: "How far do you travel for projects?",
    answer:
      "The office is in East Tampa, and most projects across Hillsborough County are within a 30-minute drive. The team handles Hillsborough, Pinellas, and Pasco Counties. Outside that range, send a note and the team will confirm coverage.",
  },
  {
    question: "Can you handle hurricane-rated windows and doors?",
    answer:
      "Yes. Hurricane-rated impact windows and doors are a standard part of any substantial renovation. The team coordinates with licensed window installers and the city's building department on code compliance.",
  },
];

export default function TampaLocationPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Locations / Tampa
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            General contracting in Tampa, FL.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Quality Restoration & Renovations has served Tampa homeowners and
            businesses for over 25 years. From historic Hyde Park bungalows to
            South Tampa custom builds and Westchase suburban remodels, the team
            handles full-scope residential and commercial work across every
            neighborhood in the city.
          </p>
        </div>
      </section>

      {/* Section 2: Local Intro */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Tampa, Florida
              </p>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
                A Tampa contractor that knows the city, the code, and the
                neighborhoods.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md">
                Tampa is not one market. Hyde Park bungalows from the 1920s have
                different needs than Westchase homes from the 2000s. South Tampa
                coastal properties face different code than New Tampa inland
                builds. The team has worked across all of it.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-6">
                The office is at 1907 N 40th Street, in East Tampa. Most
                projects across Hillsborough County are within a 30-minute
                drive, which means responsive consultations, on-site
                supervision, and faster turnaround than contractors based outside
                the area.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Start a Tampa project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/kitchen-gray-cabinets-island-bar-stools-tampa.jpg"
                  alt="Modern Tampa kitchen renovation with gray cabinets and large island"
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
            Tampa neighborhoods served.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl mt-2 mb-16">
            The team takes projects across the full city. These are the
            neighborhoods where the firm has the deepest project history.
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
            What renovating in Tampa actually looks like.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed">
                Tampa's housing stock spans more than a century. Hyde Park and
                Seminole Heights have homes from the 1910s and 1920s with quirks
                that newer contractors rarely encounter: knob-and-tube
                electrical, lath-and-plaster walls, original wood flooring
                underneath layers of subsequent updates. Renovations here
                require knowing what to preserve and what to replace.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed mt-6">
                Newer Tampa neighborhoods like Westchase, New Tampa, and Brandon
                were largely built in the 1990s and 2000s. The most common
                projects there are modernizing dated finishes, opening up walls
                between kitchens and living rooms, and adding outdoor living
                spaces that take advantage of Florida weather year-round.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed mt-6">
                Hurricane-rated improvements, energy-efficient windows, and
                modern mechanical systems matter across all of Tampa. The team
                handles these as part of any renovation scope, not as add-ons.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/entryway-staircase-iron-chandelier.jpg"
                  alt="Tampa home renovation with custom staircase and iron chandelier"
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
            Selected Tampa Work
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy tracking-[-0.03em] leading-tight mb-16">
            Recent Tampa projects.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/5]">
              <Image src="/images/kitchen-island-with-banquette-seating.jpg" alt="Tampa kitchen renovation with island and banquette seating" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/5]">
              <Image src="/images/kate-jackson/kate-jackson-center-before-after-exterior.jpg" alt="Kate Jackson Center community renovation in West Tampa, before and after" fill className="object-cover" />
            </div>
            <div className="relative aspect-[4/5]">
              <Image src="/images/master-bedroom-mirrored-furniture-tray-ceiling.jpg" alt="Tampa master bedroom renovation with tray ceiling" fill className="object-cover" />
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
            What Tampa Homeowners Should Know
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-navy tracking-[-0.025em] leading-tight mb-12">
            A few things specific to renovating in Tampa.
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
            Services available across Tampa.
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
                Tampa Questions
              </p>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em]">
                Common questions from Tampa homeowners.
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
            Planning a Tampa project?
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
          { name: "Locations", url: "https://quality-rr.com/locations/tampa" },
          { name: "Tampa", url: "https://quality-rr.com/locations/tampa" },
        ]}
      />
      <ServiceJsonLd
        name="General Contracting in Tampa, FL"
        description="Licensed general contractor serving Tampa homeowners and businesses for over 25 years. Kitchen, bathroom, and full home renovations across Hyde Park, South Tampa, Westchase, and beyond."
        url="https://quality-rr.com/locations/tampa"
      />
    </>
  );
}
