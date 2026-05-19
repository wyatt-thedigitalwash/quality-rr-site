import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Remodeling Tampa",
  description: "Commercial general contracting in Tampa, FL. Office remodels, tenant build-outs, multi-housing renovations, and property rehabs.",
  alternates: { canonical: "https://quality-rr.com/services/commercial" },
  openGraph: {
    title: "Commercial Remodeling Tampa | Quality Restoration & Renovations",
    description: "Commercial general contracting in Tampa, FL. Office remodels, tenant build-outs, multi-housing renovations, and property rehabs.",
    url: "https://quality-rr.com/services/commercial",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Remodeling Tampa | Quality Restoration & Renovations",
    description: "Commercial general contracting in Tampa, FL. Office remodels, tenant build-outs, multi-housing renovations, and property rehabs.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Interior & Exterior Renovations",
    description:
      "Modern finishes, durable materials, and clean execution for both interior spaces and exterior facades.",
  },
  {
    title: "Complete Property Rehabs",
    description:
      "Aging buildings restored to like-new condition. Full-scope rehabilitation for renewed functionality and curb appeal.",
  },
  {
    title: "Fire & Flood Restoration",
    description:
      "Fast, certified restoration for commercial properties after fire, smoke, water, or storm damage. Insurance coordination included.",
  },
  {
    title: "Stair, Landing & Balcony Repairs",
    description:
      "Structural repairs to stairs, landings, balconies, and entryways. Safety and appearance, handled by licensed crews.",
  },
  {
    title: "Concrete, Stucco & Siding",
    description:
      "Durable exterior finishes installed and repaired with care. Concrete, stucco, siding, and pavers for properties built to last.",
  },
  {
    title: "Wall Relocation & HVAC Modifications",
    description:
      "Layout reconfigurations that change how a space flows, including wall moves and HVAC duct relocations.",
  },
  {
    title: "Doors, Windows & Ceilings",
    description:
      "Commercial-grade doors, energy-efficient windows, and ceiling treatments that upgrade comfort, light, and efficiency.",
  },
  {
    title: "Drywall, Texture & Paint",
    description:
      "Clean walls, smooth finishes, and high-quality interior or exterior paint that holds up to commercial use.",
  },
  {
    title: "Commercial Flooring",
    description:
      "Durable commercial flooring installation across tile, vinyl, polished concrete, and other high-traffic finishes.",
  },
  {
    title: "Lighting & Electrical",
    description:
      "Modern lighting design and electrical installation handled in coordination with licensed electrical subcontractors.",
  },
  {
    title: "Tenant Improvements",
    description:
      "Build-outs, partial renovations, and improvements designed around tenant needs, lease timelines, and landlord requirements.",
  },
];

export default function CommercialPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services / Commercial
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Commercial spaces built to perform.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Quality Restoration & Renovations handles commercial work with the
            same discipline that defines its residential practice. Office
            remodels, tenant build-outs, multi-housing renovations, property
            rehabs, and restoration across Tampa Bay. Florida General Contractor
            License CGC1523357.
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
                Built for businesses that need it done right and done on
                schedule.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="max-w-2xl">
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed">
                  Commercial work has its own constraints: tenants, schedules,
                  code, and stakeholders who need clear communication. The firm
                  handles all of it. Build-outs that close on time, renovations
                  that minimize downtime, and finish work that holds up to
                  commercial traffic.
                </p>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed mt-6">
                  From single-tenant office suites to multi-building apartment
                  complexes, every project runs on the same scope, schedule, and
                  quality controls. Florida General Contractor License
                  CGC1523357.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Start a commercial project
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
            Three commercial specialties.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Office Remodeling */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/office-remodel.jpg" alt="Commercial office remodel with modern finishes" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Office Remodeling
                </p>
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mt-3">
                  Modern workspaces designed for real performance.
                </h3>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-5">
                  Layout reconfiguration, custom millwork, modern lighting, and
                  finishes for offices, suites, and full commercial floors.
                </p>
                <Link
                  href="/services/office-remodeling"
                  className="inline-flex items-center gap-2 mt-8 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Explore office remodeling
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Build-Outs */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/office-renovation.jpg" alt="Commercial office renovation in progress" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Build-Outs
                </p>
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mt-3">
                  Tenant build-outs from empty shell to open doors.
                </h3>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-5">
                  Full tenant improvement work, from raw shell space through
                  complete fit-out. Coordinated with landlords, stakeholders, and
                  inspections.
                </p>
              </div>
            </div>

            {/* Multi-Housing */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/doctors-office-renovation.jpg" alt="Doctor's office commercial renovation" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Multi-Housing
                </p>
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mt-3">
                  Apartment, condo, and multi-family renovations at scale.
                </h3>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-5">
                  Unit-by-unit renovations, common area updates, exterior work,
                  and full property rehabs for apartment complexes, condos, and
                  HOA-managed properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Full Service List */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Full Service List
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-4">
            The full range of commercial work.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mt-2 mb-16">
            Every commercial service the firm handles, from full property rehabs
            to specific finish work. All licensed, bonded, and insured.
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

      {/* Section 5: CTA Band */}
      <section data-bg="bone" className="bg-bone py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Start
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Planning a commercial project?
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
        { name: "Commercial", url: "https://quality-rr.com/services/commercial" },
      ]} />
      <ServiceJsonLd name="Commercial Remodeling" description="Office remodels, tenant build-outs, multi-housing renovations, property rehabs, and restoration in Tampa, FL." url="https://quality-rr.com/services/commercial" />
    </>
  );
}
