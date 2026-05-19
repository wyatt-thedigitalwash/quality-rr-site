import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Quality Restoration & Renovations serves Hillsborough, Pinellas, and Pasco Counties across the Tampa Bay region.",
  alternates: { canonical: "https://quality-rr.com/service-area" },
  openGraph: {
    title: "Service Area | Quality Restoration & Renovations",
    description: "Quality Restoration & Renovations serves Hillsborough, Pinellas, and Pasco Counties across the Tampa Bay region.",
    url: "https://quality-rr.com/service-area",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Area | Quality Restoration & Renovations",
    description: "Quality Restoration & Renovations serves Hillsborough, Pinellas, and Pasco Counties across the Tampa Bay region.",
    images: ["/og-image.png"],
  },
};

const counties = [
  {
    num: "01",
    name: "Hillsborough County",
    description:
      "The firm's home county and the largest concentration of residential and commercial work.",
    cities: [
      "Apollo Beach",
      "Brandon",
      "Carrollwood",
      "Lutz",
      "Plant City",
      "Riverview",
      "Tampa",
      "Valrico",
    ],
  },
  {
    num: "02",
    name: "Pinellas County",
    description:
      "Beach communities, established residential neighborhoods, and commercial corridors across the western Tampa Bay area.",
    cities: [
      "Clearwater",
      "Dunedin",
      "Largo",
      "Palm Harbor",
      "Pinellas Park",
      "St. Petersburg",
      "Tarpon Springs",
    ],
  },
  {
    num: "03",
    name: "Pasco County",
    description:
      "Fast-growing residential communities and expanding commercial development north of Tampa.",
    cities: [
      "Land O' Lakes",
      "New Port Richey",
      "Trinity",
      "Wesley Chapel",
      "Zephyrhills",
    ],
  },
];

export default function ServiceAreaPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Service Area
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Tampa Bay, top to bottom.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Quality Restoration & Renovations serves three counties across the
            Tampa Bay region. Residential and commercial work, end-to-end, from
            the firm's home base in Tampa.
          </p>
        </div>
      </section>

      {/* Section 2: Service Region Overview */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[5/4] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d225000!2d-82.5!3d28.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tampa Bay service area covering Hillsborough, Pinellas, and Pasco counties"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Region
              </p>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl leading-tight tracking-[-0.025em] text-navy mb-6">
                Three counties. One firm. The same standard everywhere.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mb-10">
                From Tampa to Clearwater to Wesley Chapel, the team handles
                projects across the full Tampa Bay region. Same crews, same
                process, same finish quality regardless of where the project
                sits on the map.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-sans font-extrabold text-3xl md:text-4xl text-navy tracking-[-0.03em] leading-none">
                    3
                  </p>
                  <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mt-2">
                    Counties
                  </p>
                </div>
                <div>
                  <p className="font-sans font-extrabold text-3xl md:text-4xl text-navy tracking-[-0.03em] leading-none">
                    20+
                  </p>
                  <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mt-2">
                    Cities
                  </p>
                </div>
                <div>
                  <p className="font-sans font-extrabold text-3xl md:text-4xl text-navy tracking-[-0.03em] leading-none">
                    25
                  </p>
                  <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mt-2">
                    Years Local
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Counties + Cities */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Coverage
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-4">
            Where the firm works, city by city.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mt-2 mb-16">
            The team handles projects across Hillsborough, Pinellas, and Pasco
            Counties. If a city is not listed here, send a note. Coverage may
            still apply.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
            {counties.map((county) => (
              <div key={county.num} className="border-t border-taupe/20 pt-8">
                <p className="font-sans font-extrabold text-5xl md:text-6xl text-taupe tracking-[-0.04em] leading-none mb-6">
                  {county.num}
                </p>
                <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy leading-tight tracking-[-0.025em] mb-4">
                  {county.name}
                </h3>
                <p className="font-sans text-base text-ink leading-relaxed max-w-sm mb-8">
                  {county.description}
                </p>
                <div className="flex flex-col gap-2">
                  {county.cities.map((city) => (
                    <p key={city} className="font-sans text-base text-ink">
                      {city}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* City Pages */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            City Pages
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-4xl leading-tight tracking-[-0.025em] text-navy mb-12">
            Detailed guides for the cities we serve most.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/locations/tampa"
              className="group border-t border-taupe/20 pt-6"
            >
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy tracking-[-0.025em] leading-tight group-hover:text-taupe-dark transition-colors">
                Tampa
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-3 max-w-md">
                Hyde Park, South Tampa, Westchase, Carrollwood, Seminole Heights, Brandon, and beyond. Neighborhood-specific renovation context, permitting, and historic district guidance.
              </p>
              <span className="inline-flex items-center gap-2 mt-4 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy group-hover:text-taupe-dark transition-colors">
                View Tampa page
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
            <Link
              href="/locations/st-petersburg"
              className="group border-t border-taupe/20 pt-6"
            >
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy tracking-[-0.025em] leading-tight group-hover:text-taupe-dark transition-colors">
                St. Petersburg
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-3 max-w-md">
                Old Northeast, Snell Isle, Shore Acres, downtown, and coastal neighborhoods. Flood zone expertise, FEMA 50% rule, and post-hurricane permitting guidance.
              </p>
              <span className="inline-flex items-center gap-2 mt-4 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy group-hover:text-taupe-dark transition-colors">
                View St. Petersburg page
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Outside the Area */}
      <section data-bg="bone" className="bg-bone py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-3xl">
            <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
              Outside the Area
            </p>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl leading-tight tracking-[-0.025em] text-navy mb-6">
              Outside Tampa Bay? It is worth asking.
            </h2>
            <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-2xl">
              The firm occasionally takes on projects beyond the standard service
              area, depending on scope, timeline, and existing client
              relationships. Send a note with the project details. The team
              responds within one business day either way.
            </p>
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
            Have a project in the area?
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
        { name: "Service Area", url: "https://quality-rr.com/service-area" },
      ]} />
    </>
  );
}
