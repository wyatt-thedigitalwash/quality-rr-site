import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Office Remodeling Tampa",
  description: "Office remodeling in Tampa, FL. Layout reconfiguration, custom millwork, lighting, and commercial finishes. Licensed and insured.",
  alternates: { canonical: "https://quality-rr.com/services/office-remodeling" },
  openGraph: {
    title: "Office Remodeling Tampa | Quality Restoration & Renovations",
    description: "Office remodeling in Tampa, FL. Layout reconfiguration, custom millwork, lighting, and commercial finishes. Licensed and insured.",
    url: "https://quality-rr.com/services/office-remodeling",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Remodeling Tampa | Quality Restoration & Renovations",
    description: "Office remodeling in Tampa, FL. Layout reconfiguration, custom millwork, lighting, and commercial finishes. Licensed and insured.",
    images: ["/og-image.png"],
  },
};

const services = [
  {
    title: "Layout Reconfiguration",
    description:
      "Open up the workspace or carve out private offices. Designed for collaboration, focus, or both, depending on how the team actually works.",
  },
  {
    title: "Wall & Duct Relocation",
    description:
      "Move walls, reroute HVAC, and reconfigure the floorplate. Coordinated with mechanical and electrical trades for clean execution.",
  },
  {
    title: "Flooring & Paint",
    description:
      "Durable commercial flooring and finish-quality paint. Built to handle traffic, cleaning, and the daily wear of a working office.",
  },
  {
    title: "Doors & Windows",
    description:
      "Commercial-grade doors and energy-efficient windows. Better insulation, better light, and a more polished overall feel.",
  },
  {
    title: "Lighting Installation",
    description:
      "Modern lighting design with proper task, ambient, and accent layering. Energy-efficient fixtures coordinated with the existing electrical.",
  },
  {
    title: "Breakrooms & Kitchenettes",
    description:
      "Functional shared spaces with clean design, proper plumbing, and the right finishes for daily team use.",
  },
  {
    title: "Conference Rooms",
    description:
      "Modernized conference and meeting spaces with AV integration coordination, acoustic considerations, and finishes that read professional.",
  },
  {
    title: "Custom Millwork & Built-Ins",
    description:
      "Custom reception desks, feature walls, built-in shelving, and finish carpentry designed specifically for the space.",
  },
];

export default function OfficeRemodelingPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services / Office Remodeling
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Modern workspaces designed for real performance.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Office remodeling that turns outdated or inefficient spaces into
            productive, professional environments. From single office suites to
            full commercial floors, every project delivered with precision and
            clean execution.
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
                Workspaces built around how the team actually works.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md">
                Office layouts are not one-size-fits-all. Some teams need open
                collaboration. Some need private focus. Most need both. The firm
                designs around how the work actually happens, then builds with
                materials and finishes that hold up to daily commercial use.
              </p>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mt-6">
                Florida General Contractor License CGC1523357. Licensed, bonded,
                and insured for residential and commercial work.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Start an office project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full"><Image src="/images/office-remodel.jpg" alt="Tampa office remodel with modern finishes and lighting" fill className="object-cover" /></div>
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
            Complete office remodeling services.
          </h2>
          <p className="font-sans text-base md:text-lg text-ink max-w-2xl leading-relaxed mt-2 mb-16">
            Every part of the office remodel, handled by one licensed team. From
            single-suite reconfigurations to full commercial floor renovations.
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
            Recent office work.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] w-full"><Image src="/images/office-renovation.jpg" alt="Commercial office renovation" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/doctors-office-renovation.jpg" alt="Doctor's office renovation" fill className="object-cover" /></div>
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
            Planning an office project?
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
        { name: "Office Remodeling", url: "https://quality-rr.com/services/office-remodeling" },
      ]} />
      <ServiceJsonLd name="Office Remodeling" description="Layout reconfiguration, custom millwork, lighting, and commercial finishes for offices and suites in Tampa, FL." url="https://quality-rr.com/services/office-remodeling" />
    </>
  );
}
