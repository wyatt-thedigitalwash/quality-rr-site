import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, Clock, MapPin } from "lucide-react";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import PhoneLink from "@/components/PhoneLink";
import { HeroContainer, HeroItem } from "@/components/HeroStagger";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Tampa General Contractor",
  description: "Quality Restoration & Renovations is a licensed general contractor in Tampa, FL. Residential and commercial renovation since 2000.",
  alternates: { canonical: "https://quality-rr.com" },
  openGraph: {
    title: "Quality Restoration & Renovations | Tampa General Contractor",
    description: "Licensed general contractor in Tampa, FL. Residential and commercial renovation, remodeling, and restoration since 2000.",
    url: "https://quality-rr.com",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Restoration & Renovations | Tampa General Contractor",
    description: "Licensed general contractor in Tampa, FL. Residential and commercial renovation, remodeling, and restoration since 2000.",
    images: ["/og-image.png"],
  },
};

const faqItems = [
  {
    question: "What areas do you serve?",
    answer:
      "Quality Restoration & Renovations serves Tampa and the surrounding Tampa Bay region, including Hillsborough, Pinellas, and Pasco Counties. If a location falls outside that range, the team is happy to confirm coverage on request.",
  },
  {
    question: "Are you licensed, bonded, and insured?",
    answer:
      "Yes. The firm holds Florida General Contractor License CGC1523357 and is fully bonded and insured for both residential and commercial work.",
  },
  {
    question: "How long will a renovation project take?",
    answer:
      "Timelines depend on scope and complexity. The team provides a detailed schedule upfront and consistent updates throughout the project to keep delivery on track.",
  },
  {
    question:
      "Do you handle insurance claims for fire or flood damage?",
    answer:
      "Yes. Fire and flood restoration is a core service. The team uses Xactimate to coordinate with insurance providers and streamline the claim process from initial estimate through completion.",
  },
];

export default function Home() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="relative min-h-[calc(100dvh-60px)] md:min-h-[calc(100dvh-72px)] overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/blue-daybed-reading-nook.jpg" alt="Custom reading nook renovation in Tampa" fill className="object-cover md:hidden" priority />
          <Image src="/images/kitchen-gray-cabinets-island-bar-stools-tampa.jpg" alt="Modern Tampa kitchen renovation with gray cabinets and center island" fill className="object-cover hidden md:block" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 pb-16 md:pb-24">
          <HeroContainer className="max-w-[1400px] mx-auto px-6 md:px-10">
            <HeroItem>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-white/80 mb-6">
                Tampa, Florida / Since 2000
              </p>
            </HeroItem>
            <HeroItem>
              <h1 className="font-sans font-extrabold text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.035em] text-white max-w-4xl">
                General contracting, done right the first time.
              </h1>
            </HeroItem>
            <HeroItem>
              <p className="mt-8 mb-10 font-sans text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                Quality Restoration & Renovations has served Tampa Bay for over
                25 years, delivering residential and commercial renovation,
                remodeling, and disaster restoration across Hillsborough,
                Pinellas, and Pasco Counties.
              </p>
            </HeroItem>
            <HeroItem>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-block font-sans font-medium uppercase text-xs tracking-[0.15em] bg-white text-navy px-7 py-4 rounded-[2px] hover:bg-bone transition-colors"
                >
                  Get a Free Estimate
                </Link>
                <Link
                  href="/project-gallery"
                  className="inline-block font-sans font-medium uppercase text-xs tracking-[0.15em] border border-white text-white px-7 py-4 rounded-[2px] hover:bg-white/10 transition-colors"
                >
                  View Our Work
                </Link>
              </div>
            </HeroItem>
          </HeroContainer>
        </div>
      </section>

      {/* Section 2: Intro / About Block */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                The Firm
              </p>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-[1.05] tracking-[-0.03em] text-navy">
                Craftsmanship, accountability, and 25 years of doing the work.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="max-w-2xl">
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed">
                  Quality Restoration & Renovations is a licensed, bonded, and
                  insured general contractor based in Tampa, Florida. The firm
                  handles full-scope residential and commercial work, from
                  kitchen and bathroom remodels to commercial build-outs and
                  emergency fire and flood restoration.
                </p>
                <p className="font-sans text-base md:text-lg text-ink leading-relaxed mt-6">
                  Every project is run with the same discipline: clear scope,
                  honest timelines, clean job sites, and finished work that
                  stands up to scrutiny. The team uses Xactimate for insurance
                  claim coordination on restoration jobs, and holds Florida
                  General Contractor License CGC1523357.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 mt-10 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  More about the firm
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Stats Row */}
      <section data-bg="bone" className="bg-bone py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="border-t border-taupe/20 pt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              <div>
                <p className="font-sans font-extrabold text-6xl md:text-7xl text-navy leading-none tracking-[-0.04em]">
                  25+
                </p>
                <p className="mt-4 font-sans text-sm md:text-base text-ink max-w-xs">
                  Years serving the Tampa Bay region with full-scope residential
                  and commercial work.
                </p>
              </div>
              <div>
                <p className="font-sans font-extrabold text-6xl md:text-7xl text-navy leading-none tracking-[-0.04em]">
                  500+
                </p>
                <p className="mt-4 font-sans text-sm md:text-base text-ink max-w-xs">
                  Residential and commercial projects completed across
                  Hillsborough, Pinellas, and Pasco Counties.
                </p>
              </div>
              <div>
                <p className="font-sans font-extrabold text-6xl md:text-7xl text-navy leading-none tracking-[-0.04em]">
                  100%
                </p>
                <p className="mt-4 font-sans text-sm md:text-base text-ink max-w-xs">
                  Licensed, bonded, and insured. Every project, every job site,
                  every time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Services Overview */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Services
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy leading-[1.05] tracking-[-0.03em] max-w-3xl mb-16">
            Residential and commercial work, delivered with the same standards.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/bathroom-blue-marble-double-vanity-led-mirror.jpg" alt="Blue marble bathroom with double vanity and LED mirror" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Residential
                </p>
                <h3 className="font-sans font-bold text-3xl tracking-[-0.02em] text-navy mt-3 leading-[1.2]">
                  Homes built and remodeled for the way you live.
                </h3>
                <p className="font-sans text-base text-ink leading-relaxed mt-4 max-w-md">
                  Full home renovations, kitchen and bathroom remodels, custom
                  additions, outdoor living, and structural modifications. Built
                  with the materials, finishes, and finish quality the home
                  deserves.
                </p>
                <Link
                  href="/services/residential"
                  className="inline-flex items-center gap-2 mt-6 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Explore residential
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
            {/* Commercial */}
            <div>
              <div className="relative aspect-[4/3] w-full"><Image src="/images/doctors-office-renovation.jpg" alt="Commercial office renovation in Tampa" fill className="object-cover" /></div>
              <div className="pt-8">
                <p className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe">
                  Commercial
                </p>
                <h3 className="font-sans font-bold text-3xl tracking-[-0.02em] text-navy mt-3 leading-[1.2]">
                  Commercial spaces built to perform.
                </h3>
                <p className="font-sans text-base text-ink leading-relaxed mt-4 max-w-md">
                  Office remodels, tenant build-outs, multi-housing renovations,
                  retail interiors, and full property rehabs. Delivered with
                  clean execution and the schedule discipline commercial projects
                  demand.
                </p>
                <Link
                  href="/services/commercial"
                  className="inline-flex items-center gap-2 mt-6 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
                >
                  Explore commercial
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Specialty Services */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Specialties
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy leading-[1.05] tracking-[-0.03em] max-w-3xl mb-16">
            Three rooms we know better than anyone.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="font-sans font-extrabold text-5xl text-taupe leading-none tracking-[-0.04em]">
                01
              </p>
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-[1.2]">
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
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-[1.2]">
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
              <h3 className="font-sans font-bold text-2xl tracking-[-0.02em] text-navy mt-6 leading-[1.2]">
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
          </div>
          <div className="flex justify-center mt-20">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
            >
              View all services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Project Gallery Preview */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Selected Work
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy leading-[1.05] tracking-[-0.03em] max-w-3xl mb-16">
            Recent projects across Tampa Bay.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative aspect-[4/3] w-full"><Image src="/images/correct/bathroom-white-vanity-gold-mirror-glass-shower-tampa.jpg" alt="Bathroom renovation with white vanity and glass shower" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/game-room-remodel.jpg" alt="Custom game room renovation" fill className="object-cover" /></div>
            <div className="relative aspect-[4/3] w-full"><Image src="/images/entryway-staircase-iron-chandelier.jpg" alt="Custom staircase entryway renovation" fill className="object-cover" /></div>
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

      {/* Section 7: FAQ Preview */}
      <section data-bg="light" className="bg-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Common Questions
              </p>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy leading-[1.05] tracking-[-0.03em]">
                Answers to what most clients ask first.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion items={faqItems} />
              <Link
                href="/faqs"
                className="inline-flex items-center gap-2 mt-12 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                See all FAQs
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Contact */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 self-center">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Contact
              </p>
              <h2 className="font-sans font-extrabold text-4xl md:text-5xl text-navy leading-[1.05] tracking-[-0.03em] mb-8">
                Start a conversation.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mb-10">
                Tell the team about the project. Quality Restoration &
                Renovations responds within one business day with next steps and
                a free, no-obligation consultation.
              </p>
              <div className="flex flex-col gap-4">
                <PhoneLink
                  source="home-contact-section"
                  className="inline-flex items-center gap-3 font-sans font-medium text-base text-ink hover:text-navy transition-colors"
                >
                  <Phone className="w-[18px] h-[18px] text-navy" />
                  (813) 517-1555
                </PhoneLink>
                <a
                  href="mailto:contact@quality-rr.com"
                  className="inline-flex items-center gap-3 font-sans font-medium text-base text-ink hover:text-navy transition-colors"
                >
                  <Mail className="w-[18px] h-[18px] text-navy" />
                  contact@quality-rr.com
                </a>
                <span className="inline-flex items-center gap-3 font-sans font-medium text-base text-ink">
                  <Clock className="w-[18px] h-[18px] text-navy" />
                  Monday to Friday, 8:00am to 4:30pm
                </span>
                <span className="inline-flex items-center gap-3 font-sans font-medium text-base text-ink">
                  <MapPin className="w-[18px] h-[18px] text-navy" />
                  1907 N 40th Street, Tampa, FL 33605
                </span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <BreadcrumbJsonLd items={[{ name: "Home", url: "https://quality-rr.com" }]} />
      <FaqPageJsonLd items={faqItems} />
    </>
  );
}
