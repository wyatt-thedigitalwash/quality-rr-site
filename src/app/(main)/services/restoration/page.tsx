import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Fire & Flood Restoration Tampa",
  description:
    "Fire, flood, and storm damage restoration in Tampa, FL. Licensed general contractor handling demolition, rebuild, and insurance coordination.",
  alternates: {
    canonical: "https://quality-rr.com/services/restoration",
  },
  openGraph: {
    title:
      "Fire & Flood Restoration Tampa | Quality Restoration & Renovations",
    description:
      "Fire, flood, and storm damage restoration in Tampa, FL. Licensed general contractor handling demolition, rebuild, and insurance coordination.",
    url: "https://quality-rr.com/services/restoration",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Fire & Flood Restoration Tampa | Quality Restoration & Renovations",
    description:
      "Fire, flood, and storm damage restoration in Tampa, FL. Licensed general contractor handling demolition, rebuild, and insurance coordination.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Water & Flood Damage",
    description:
      "Full demolition, dry-out coordination, framing, drywall, flooring, and finish work after water intrusion. The team rebuilds from the studs out.",
  },
  {
    title: "Fire & Smoke Damage",
    description:
      "Structural repair, smoke remediation, and complete interior rebuild after fire damage. Every trade coordinated under one license.",
  },
  {
    title: "Storm & Wind Damage",
    description:
      "Roof repairs, exterior restoration, window and door replacement, and structural stabilization after hurricane or severe weather events.",
  },
  {
    title: "Insurance Coordination",
    description:
      "Xactimate-based estimates that align with insurance adjuster expectations. The team works directly with carriers to keep claims moving.",
  },
  {
    title: "Structural Rebuild",
    description:
      "Load-bearing wall repair, framing replacement, foundation stabilization, and code-compliant structural work after catastrophic damage.",
  },
  {
    title: "Exterior Restoration",
    description:
      "Siding, stucco, roofing, windows, doors, and weather barrier installation. The building envelope rebuilt to current code.",
  },
];

export default function RestorationPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services / Restoration
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Damage happens. The rebuild is what matters.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Fire, flood, and storm restoration handled by a licensed general
            contractor with 25 years in Tampa Bay. From emergency stabilization
            through final finishes, the full rebuild runs under one contract.
          </p>
        </div>
      </section>

      {/* Section 2: Overview */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Overview
              </p>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
                One team from demolition through final walkthrough.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md">
                Most restoration jobs involve multiple contractors, conflicting
                timelines, and months of delays. Quality Restoration &
                Renovations handles the entire scope under one license. Demo,
                framing, mechanical, finishes, and punch list. The homeowner or
                property manager deals with one point of contact, one schedule,
                and one standard of quality.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-6">
                Florida General Contractor License CGC1523357. Licensed, bonded,
                and insured for residential and commercial restoration.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Discuss a restoration project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/new/flood-restoration-interior-framing-gutted-tampa.jpg"
                  alt="Flood restoration interior framing after gutting in Tampa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Before, During, After */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Project Timeline
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            From damage to finished. One project, three phases.
          </h2>

          {/* Before */}
          <div className="mb-16">
            <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-navy mb-6">
              Before
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/new/carport-roof-damage-before-repair-tampa.jpg"
                  alt="Carport roof damage before restoration in Tampa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/new/carport-roof-fascia-damage-before-repair-tampa.jpg"
                  alt="Carport roof and fascia damage before repair in Tampa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* During */}
          <div className="mb-16">
            <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-navy mb-6">
              During
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/new/carport-renovation-construction-in-progress-tampa.jpg"
                  alt="Carport renovation construction in progress in Tampa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/new/carport-renovation-white-columns-completed-tampa.jpg"
                  alt="Carport renovation with white columns during construction in Tampa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* After */}
          <div>
            <p className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-navy mb-6">
              After
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] w-full md:col-span-2 md:max-w-[calc(50%-12px)]">
                <Image
                  src="/images/new/carport-renovation-wide-angle-completed-tampa.jpg"
                  alt="Completed carport renovation wide angle view in Tampa"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Services */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            What We Handle
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-4">
            Full-scope restoration services.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mt-2 mb-16">
            Every phase of restoration, from emergency response through final
            finishes. All trades coordinated under one licensed contractor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {services.map((service) => (
              <div
                key={service.title}
                className="border-t border-taupe/20 pt-6"
              >
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

      {/* Section 5: More Restoration Work */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Selected Work
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            Recent restoration projects.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/new/flood-restoration-crew-demolition-in-progress-tampa.jpg"
                alt="Restoration crew performing flood damage demolition in Tampa"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/new/flood-restoration-framing-electrical-rough-in-tampa.jpg"
                alt="Flood restoration framing and electrical rough-in in Tampa"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/new/exterior-window-installation-water-barrier-tampa.jpg"
                alt="Exterior window installation with water barrier in Tampa"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/new/commercial-storm-restoration-walkway-clearance-tampa.jpg"
                alt="Commercial storm restoration walkway clearance in Tampa"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/new/commercial-storm-restoration-sand-removal-tampa.jpg"
                alt="Commercial storm restoration sand removal in Tampa"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/new/exterior-door-window-installation-weather-wrap-tampa.jpg"
                alt="Exterior door and window installation with weather wrap in Tampa"
                fill
                className="object-cover"
              />
            </div>
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
            Dealing with property damage?
          </h2>
          <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-xl mx-auto mb-10">
            Call the team directly or send a note about the damage. Quality
            Restoration & Renovations responds within one business day with
            next steps.
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
          { name: "Services", url: "https://quality-rr.com/services" },
          {
            name: "Restoration",
            url: "https://quality-rr.com/services/restoration",
          },
        ]}
      />
      <ServiceJsonLd
        name="Fire & Flood Restoration"
        description="Fire, flood, and storm damage restoration in Tampa, FL. Demolition, structural rebuild, and full interior finish under one licensed general contractor."
        url="https://quality-rr.com/services/restoration"
      />
    </>
  );
}
