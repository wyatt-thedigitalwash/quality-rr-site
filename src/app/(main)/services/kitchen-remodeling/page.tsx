import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Kitchen Remodeling Tampa",
  description: "Kitchen remodeling in Tampa, FL. Custom cabinetry, countertops, lighting, and full layout reconfiguration. Licensed and insured.",
  alternates: { canonical: "https://quality-rr.com/services/kitchen-remodeling" },
  openGraph: {
    title: "Kitchen Remodeling Tampa | Quality Restoration & Renovations",
    description: "Kitchen remodeling in Tampa, FL. Custom cabinetry, countertops, lighting, and full layout reconfiguration. Licensed and insured.",
    url: "https://quality-rr.com/services/kitchen-remodeling",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kitchen Remodeling Tampa | Quality Restoration & Renovations",
    description: "Kitchen remodeling in Tampa, FL. Custom cabinetry, countertops, lighting, and full layout reconfiguration. Licensed and insured.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Custom Cabinets & Storage",
    description:
      "Professionally designed cabinetry that maximizes space and matches the aesthetic. Built to last, organized to actually work.",
  },
  {
    title: "Countertops & Backsplash",
    description:
      "Stone, quartz, butcher block, and tile surfaces installed with precision. Materials that hold up to daily use and look right with the rest of the kitchen.",
  },
  {
    title: "Lighting & Fixtures",
    description:
      "Under-cabinet lighting, pendants, recessed lighting, and energy-efficient solutions. Designed to layer task, ambient, and accent light correctly.",
  },
  {
    title: "Appliance Installation",
    description:
      "Seamless integration of new appliances with proper electrical, plumbing, and ventilation hookups. Finished cleanly to match the cabinetry.",
  },
  {
    title: "Flooring Replacement",
    description:
      "Durable, water-resistant flooring in tile, hardwood, vinyl, or laminate. Installed with proper subfloor prep for long-term performance.",
  },
  {
    title: "Wall Removal & Layout Changes",
    description:
      "Load-bearing walls, openings, and full reconfigurations that open up the space or reshape the flow. Structural work handled correctly.",
  },
];

export default function KitchenRemodelingPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services / Kitchen Remodeling
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Where style meets function in every kitchen.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Kitchen remodeling that blends design, storage, and smart
            functionality. From galley updates to full open-concept
            reconfigurations, every project is built around how the kitchen
            actually gets used.
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
                Kitchens built around how the space actually gets used.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md">
                Every kitchen has a flow: prep, cook, gather, clean. The team
                designs around those flows first, then layers in cabinetry,
                surfaces, lighting, and finishes that match how the home
                actually runs.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-6">
                Florida General Contractor License CGC1523357. Licensed, bonded,
                and insured for residential and commercial work.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Start a kitchen project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/5] w-full"><Image src="/images/kitchen-gray-cabinets-island-bar-stools-tampa.jpg" alt="Tampa kitchen remodel with gray cabinets, island, and bar stools" fill className="object-cover" /></div>
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
            Complete kitchen remodeling services.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mt-2 mb-16">
            Every part of the kitchen remodel, handled by one licensed team.
            From a single cabinet replacement to a full layout reconfiguration.
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
            Recent kitchen work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] w-full"><Image src="/images/kitchen-remodel-marble-countertops-gray-island-tampa.jpg" alt="Kitchen remodel with marble countertops and gray island in Tampa" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/kitchen-remodel-white-cabinets-range-hood-double-oven-tampa.jpg" alt="Kitchen remodel with white cabinets, range hood, and double oven in Tampa" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/kitchen-remodel-white-cabinets-stainless-appliances-pantry-tampa.jpg" alt="Kitchen remodel with white cabinets and stainless steel appliances in Tampa" fill className="object-cover" /></div>
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
            Planning a kitchen project?
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
        { name: "Kitchen Remodeling", url: "https://quality-rr.com/services/kitchen-remodeling" },
      ]} />
      <ServiceJsonLd name="Kitchen Remodeling" description="Custom cabinetry, countertops, lighting, appliance installation, and full layout reconfiguration in Tampa, FL." url="https://quality-rr.com/services/kitchen-remodeling" />
    </>
  );
}
