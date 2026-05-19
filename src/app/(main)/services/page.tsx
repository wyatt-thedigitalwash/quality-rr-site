import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Services",
  description: "Residential and commercial contracting services in Tampa, FL. Kitchens, bathrooms, offices, renovations, and restoration.",
  alternates: { canonical: "https://quality-rr.com/services" },
  openGraph: {
    title: "Services | Quality Restoration & Renovations",
    description: "Residential and commercial contracting services in Tampa, FL. Kitchens, bathrooms, offices, renovations, and restoration.",
    url: "https://quality-rr.com/services",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Quality Restoration & Renovations",
    description: "Residential and commercial contracting services in Tampa, FL. Kitchens, bathrooms, offices, renovations, and restoration.",
    images: ["/og-image.png"],
  },
};

const residentialServices = [
  "Full Home Renovation",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Patio & Outdoor Living",
  "Doors, Windows & Ceilings",
  "Structural Modifications",
  "Flooring & Trim",
  "Drywall & Painting",
];

const commercialServices = [
  "Office Remodeling",
  "Commercial Build-Outs",
  "Multi-Housing Renovations",
  "Property Rehabs",
  "Stair, Landing & Balcony",
  "Concrete, Stucco & Siding",
  "HVAC & Wall Relocation",
  "Drywall, Texture & Paint",
];

export default function ServicesPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Residential and commercial work, delivered with the same standards.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Quality Restoration & Renovations handles full-scope renovation,
            remodeling, and restoration across Tampa Bay. Every project, from a
            single bathroom to a full commercial build-out, runs on the same
            disciplined process and the same finish standards.
          </p>
        </div>
      </section>

      {/* Section 2: Two-Category Split */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Categories
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            Two practices. One standard.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/master-bedroom-mirrored-furniture-tray-ceiling.jpg" alt="Residential master bedroom renovation in Tampa" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Residential
                </p>
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mt-3">
                  Homes built and remodeled for the way you live.
                </h3>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-5">
                  Full home renovations, kitchen and bathroom remodels, custom
                  additions, outdoor living, structural modifications, and fire
                  and flood restoration. Delivered with the materials, finishes,
                  and finish quality the home deserves.
                </p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-6 mt-8">
                  {residentialServices.map((service) => (
                    <p key={service} className="font-sans text-sm text-ink">
                      {service}
                    </p>
                  ))}
                </div>
                <Link
                  href="/services/residential"
                  className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Explore residential work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Commercial */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/bathroom-blue-marble-double-vanity-led-mirror.jpg" alt="Blue marble bathroom with double vanity and LED mirror" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Commercial
                </p>
                <h3 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mt-3">
                  Commercial spaces built to perform.
                </h3>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-5">
                  Office remodels, tenant build-outs, multi-housing renovations,
                  retail interiors, and full property rehabs. Delivered with
                  clean execution and the schedule discipline commercial projects
                  demand.
                </p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-6 mt-8">
                  {commercialServices.map((service) => (
                    <p key={service} className="font-sans text-sm text-ink">
                      {service}
                    </p>
                  ))}
                </div>
                <Link
                  href="/services/commercial"
                  className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Explore commercial work
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Specialty Services */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Specialties
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-4">
            Specialty services with their own pages.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl mt-2 mb-16">
            Some projects come up often enough to warrant a deeper look. These
            four have dedicated pages with scope details and example work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <p className="font-sans font-extrabold text-5xl text-taupe leading-none tracking-[-0.04em]">
                01
              </p>
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-tight">
                Kitchen Remodeling
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-4">
                Custom cabinetry, new countertops, lighting, and full layout
                reconfiguration. Built around how the kitchen actually gets
                used, from prep to gathering to everyday flow.
              </p>
              <Link
                href="/services/kitchen-remodeling"
                className="inline-flex items-center gap-2 mt-6 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div>
              <p className="font-sans font-extrabold text-5xl text-taupe leading-none tracking-[-0.04em]">
                02
              </p>
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-tight">
                Bathroom Remodeling
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-4">
                Spa-inspired layouts, premium fixtures, custom vanities, and
                precision tile work. Built for daily comfort, from compact
                powder rooms to full master suite renovations.
              </p>
              <Link
                href="/services/bathroom-remodeling"
                className="inline-flex items-center gap-2 mt-6 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div>
              <p className="font-sans font-extrabold text-5xl text-taupe leading-none tracking-[-0.04em]">
                03
              </p>
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-tight">
                Office Remodeling
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-4">
                Layout reconfiguration, custom millwork, modern lighting, and
                finishes for offices, suites, and full commercial floors. Built
                for the way the team actually works.
              </p>
              <Link
                href="/services/office-remodeling"
                className="inline-flex items-center gap-2 mt-6 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div>
              <p className="font-sans font-extrabold text-5xl text-taupe leading-none tracking-[-0.04em]">
                04
              </p>
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-tight">
                Restoration
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-4">
                Fire, flood, and storm damage restoration. Full demolition
                through final finishes, with insurance coordination via
                Xactimate. One contractor, one contract.
              </p>
              <Link
                href="/services/restoration"
                className="inline-flex items-center gap-2 mt-6 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Process */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Process
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            How a project actually runs.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe">
                Step 01
              </p>
              <p className="font-sans font-extrabold text-6xl text-navy leading-none tracking-[-0.04em] mt-2">
                01
              </p>
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-tight">
                Consultation & Planning
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-4 max-w-sm">
                It starts with a free consultation. The team listens, walks the
                space, and learns the goals, budget, and timeline. From there
                comes a clear scope and an honest schedule.
              </p>
            </div>
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe">
                Step 02
              </p>
              <p className="font-sans font-extrabold text-6xl text-navy leading-none tracking-[-0.04em] mt-2">
                02
              </p>
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-tight">
                Construction & Execution
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-4 max-w-sm">
                Licensed crews handle the work, from demo and framing through
                finish. Job sites stay clean. Updates come consistently. Quality
                control happens at every stage, not just at the end.
              </p>
            </div>
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe">
                Step 03
              </p>
              <p className="font-sans font-extrabold text-6xl text-navy leading-none tracking-[-0.04em] mt-2">
                03
              </p>
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-tight">
                Final Walkthrough
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed mt-4 max-w-sm">
                Before the job is closed, a final walkthrough confirms every
                detail meets the standard. The team does not leave until the
                work meets both its own bar and the client's.
              </p>
            </div>
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
            A look at recent work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] w-full"><Image src="/images/kitchen-gray-cabinets-island-bar-stools-tampa.jpg" alt="Tampa kitchen renovation with gray cabinets" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/doctors-office-renovation.jpg" alt="Commercial doctor's office renovation" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/correct/bathroom-stacked-stone-tub-surround-white-vanity-tampa.jpg" alt="Bathroom with stacked gray tile tub surround" fill className="object-cover" /></div>
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
            Ready to start a project?
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
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://quality-rr.com" },
        { name: "Services", url: "https://quality-rr.com/services" },
      ]} />
    </>
  );
}
