import type { Metadata } from "next";
import Image from "next/image";
import { Phone, Check } from "lucide-react";
import LandingForm from "@/components/LandingForm";
import FaqAccordion from "@/components/FaqAccordion";
import { HeroContainer, HeroItem } from "@/components/HeroStagger";

export const metadata: Metadata = {
  title:
    "Tampa Bathroom Remodeling Contractor | Quality Restoration & Renovations",
  description:
    "Licensed Tampa bathroom remodeling contractor. Free in-home consultation. Financing available. Custom showers, vanities, tile, and full bathroom renovations. 25+ years serving Tampa Bay.",
  robots: { index: false, follow: true },
};

const SOURCE = "landing-page-bathroom-remodeling-tampa";

const bathroomProjectTypes = [
  "Master Bathroom Remodel",
  "Half Bath / Powder Room",
  "Custom Shower Installation",
  "Tub Replacement",
  "Full Bathroom Renovation",
  "Other",
];

const faqItems = [
  {
    question: "How much does a typical bathroom remodel cost?",
    answer:
      "Costs vary based on scope, materials, and bathroom size. A powder room refresh runs less than a master suite renovation. The team provides detailed written estimates after a free in-home consultation, so there are no surprises. Financing is available.",
  },
  {
    question: "How long does a bathroom remodel take?",
    answer:
      "Most bathroom renovations run 4 to 8 weeks depending on scope. Powder rooms can finish faster. Full master suites with structural changes run longer. The team provides a clear schedule before work begins and updates throughout.",
  },
  {
    question: "Can I still use other bathrooms in the home during construction?",
    answer:
      "Yes. The team plans logistics around occupancy. For households with only one bathroom, the team coordinates work in phases to minimize disruption. Job sites are kept clean and walked daily.",
  },
  {
    question:
      "Do you handle plumbing and electrical, or do I need separate contractors?",
    answer:
      "The team coordinates all licensed sub-trades under one contract: plumbing, electrical, tile, carpentry, and drywall. One project. One point of accountability. No coordinating multiple contractors.",
  },
];

export default function BathroomRemodelingLandingPage() {
  return (
    <>
      {/* Sticky Utility Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-taupe/20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 flex items-center justify-between h-14 md:h-16">
          <Image
            src="/branding/quality-restoration-renovations-site-logo-text-only.png"
            alt="Quality Restoration and Renovations"
            width={200}
            height={50}
            className="h-8 md:h-10 w-auto"
            priority
          />
          <a
            href="tel:8135171555"
            data-conversion="header-phone-click"
            className="flex items-center gap-2 font-sans font-bold text-base md:text-lg text-navy hover:text-taupe-dark transition-colors"
          >
            <Phone className="w-[18px] h-[18px]" />
            <span className="sm:inline">(813) 517-1555</span>
          </a>
        </div>
      </header>

      {/* Section 1: Hero — Image portion */}
      <section className="relative min-h-[65vh] md:min-h-[600px] lg:min-h-[calc(100vh-64px)] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/bathroom-remodeling-hero.jpg"
            alt="Bathroom remodeling in Tampa by Quality Restoration and Renovations"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/40" />
        <div className="relative flex items-end md:items-center min-h-[65vh] md:min-h-[600px] lg:min-h-[calc(100vh-64px)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-16 w-full">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
              {/* Left Column */}
              <HeroContainer className="lg:col-span-7">
                <HeroItem>
                  <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-white/80 mb-6">
                    Tampa, FL &nbsp;&bull;&nbsp; Licensed Contractor
                    &nbsp;&bull;&nbsp; CGC1523357
                  </p>
                </HeroItem>
                <HeroItem>
                  <h1 className="font-sans font-extrabold text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.035em] text-white mb-6">
                    Tampa Bathroom Remodeling. Built to Last.
                  </h1>
                </HeroItem>
                <HeroItem>
                  <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mb-8">
                    Custom showers, vanities, tile work, and full bathroom
                    renovations across Tampa Bay. Free in-home consultation.
                    Financing available. Licensed, bonded, and insured for 25+
                    years.
                  </p>
                </HeroItem>
                <HeroItem>
                  <div className="flex flex-col gap-3 md:grid md:grid-cols-2 md:gap-x-6 md:gap-y-3 lg:flex lg:flex-row lg:flex-wrap lg:gap-x-6 lg:gap-y-3 mb-10">
                    <span className="flex items-center gap-2 font-sans font-medium text-sm text-white">
                      <Check className="w-[18px] h-[18px] shrink-0" />
                      25+ Years in Tampa
                    </span>
                    <span className="flex items-center gap-2 font-sans font-medium text-sm text-white">
                      <Check className="w-[18px] h-[18px] shrink-0" />
                      Licensed CGC1523357
                    </span>
                    <span className="flex items-center gap-2 font-sans font-medium text-sm text-white">
                      <Check className="w-[18px] h-[18px] shrink-0" />
                      Bonded & Insured
                    </span>
                    <span className="flex items-center gap-2 font-sans font-medium text-sm text-white">
                      <Check className="w-[18px] h-[18px] shrink-0" />
                      Free Consultation
                    </span>
                  </div>
                </HeroItem>
                <HeroItem>
                  <a
                    href="tel:8135171555"
                    data-conversion="hero-phone-click"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-3 font-sans font-bold text-base md:text-lg bg-white text-navy px-8 py-5 rounded-[2px] hover:bg-bone transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    Call (813) 517-1555
                  </a>
                  <p className="font-sans text-sm text-white/70 mt-4">
                    Or fill out the form for a callback within one business day
                  </p>
                </HeroItem>
              </HeroContainer>

              {/* Right Column: Form (desktop only) */}
              <div className="hidden lg:block lg:col-span-5" id="lead-form">
                <div className="bg-white p-10 rounded-[2px]">
                  <h2 className="font-sans font-bold text-2xl text-navy leading-tight tracking-[-0.02em] mb-2">
                    Get a Free Consultation
                  </h2>
                  <p className="font-sans text-sm text-ink mb-6">
                    Quick form. One business day response.
                  </p>
                  <LandingForm
                    source={SOURCE}
                    projectTypes={bathroomProjectTypes}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form */}
      <section className="lg:hidden bg-bone py-10 px-6" id="lead-form-mobile">
        <div className="max-w-lg mx-auto bg-white p-6 rounded-[2px]">
          <h2 className="font-sans font-bold text-2xl text-navy leading-tight tracking-[-0.02em] mb-2">
            Get a Free Consultation
          </h2>
          <p className="font-sans text-sm text-ink mb-6">
            Quick form. One business day response.
          </p>
          <LandingForm source={SOURCE} projectTypes={bathroomProjectTypes} />
        </div>
      </section>

      {/* Section 2: Trust Strip */}
      <section className="bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12 md:py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 text-center">
            <div>
              <p className="font-sans font-extrabold text-4xl md:text-5xl text-navy tracking-[-0.04em] leading-none mb-3">
                25+
              </p>
              <p className="font-sans font-medium text-xs md:text-sm tracking-[0.15em] uppercase text-taupe">
                Years in Tampa
              </p>
            </div>
            <div>
              <p className="font-sans font-extrabold text-4xl md:text-5xl text-navy tracking-[-0.04em] leading-none mb-3">
                500+
              </p>
              <p className="font-sans font-medium text-xs md:text-sm tracking-[0.15em] uppercase text-taupe">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="font-sans font-extrabold text-4xl md:text-5xl text-navy tracking-[-0.04em] leading-none mb-3">
                100%
              </p>
              <p className="font-sans font-medium text-xs md:text-sm tracking-[0.15em] uppercase text-taupe">
                Licensed & Insured
              </p>
            </div>
            <div>
              <p className="font-sans font-extrabold text-4xl md:text-5xl text-navy tracking-[-0.04em] leading-none mb-3">
                1 Day
              </p>
              <p className="font-sans font-medium text-xs md:text-sm tracking-[0.15em] uppercase text-taupe">
                Response Time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services Grid */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-28">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-4">
            Bathroom Services
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-12">
            Every bathroom project. One licensed team.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/correct/bathroom-blue-marble-freestanding-tub-glass-shower-tampa.jpg"
                  alt="Blue marble bathroom with freestanding tub and glass shower in Tampa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-sans font-bold text-lg md:text-xl text-navy tracking-[-0.02em] leading-tight">
                  Custom Showers
                </h3>
                <p className="font-sans text-sm text-ink leading-relaxed mt-2">
                  Walk-in showers, frameless glass enclosures, custom tile work,
                  and luxury fixtures.
                </p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/bathroom-freestanding-tub-dual-vanity-chandelier-tampa.jpg"
                  alt="Bathroom with freestanding tub, dual vanity, and chandelier in Tampa"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-sans font-bold text-lg md:text-xl text-navy tracking-[-0.02em] leading-tight">
                  Tubs & Soaking
                </h3>
                <p className="font-sans text-sm text-ink leading-relaxed mt-2">
                  Freestanding tubs, garden tubs, whirlpool installations, and
                  plumbing reroutes.
                </p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/correct/bathroom-white-vanity-gold-mirror-glass-shower-tampa.jpg"
                  alt="White bathroom vanity with glass shower"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-sans font-bold text-lg md:text-xl text-navy tracking-[-0.02em] leading-tight">
                  Vanities & Storage
                </h3>
                <p className="font-sans text-sm text-ink leading-relaxed mt-2">
                  Custom vanities, double sinks, soft-close cabinetry, and
                  built-in storage solutions.
                </p>
              </div>
            </div>
            <div>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/correct/bathroom-stacked-stone-tub-surround-white-vanity-tampa.jpg"
                  alt="Stacked tile bathroom tub surround"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="pt-5">
                <h3 className="font-sans font-bold text-lg md:text-xl text-navy tracking-[-0.02em] leading-tight">
                  Tile & Surfaces
                </h3>
                <p className="font-sans text-sm text-ink leading-relaxed mt-2">
                  Precision tile work, stone surrounds, mosaic accents, and
                  waterproof finishes.
                </p>
              </div>
            </div>
          </div>
          <p className="font-sans text-base text-ink leading-relaxed mt-12 md:mt-16 text-center max-w-3xl mx-auto">
            From powder room refreshes to full master suite renovations, the
            team handles plumbing, electrical, drywall, and finish carpentry as
            part of every bathroom project.
          </p>
        </div>
      </section>

      {/* Section 4: Why Us */}
      <section className="bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-28">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-4">
            The Difference
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            Three reasons Tampa homeowners choose us for bathrooms.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="font-sans font-extrabold text-5xl md:text-6xl text-taupe tracking-[-0.04em] leading-none mb-6">
                01
              </p>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-navy tracking-[-0.02em] leading-tight mb-3">
                Licensed Trades, Under One Contract.
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed max-w-sm">
                Bathrooms touch every trade: plumbing, electrical, tile,
                carpentry, finishing. The team coordinates all licensed
                sub-trades under one contract, so there is never confusion about
                who is responsible for what.
              </p>
            </div>
            <div>
              <p className="font-sans font-extrabold text-5xl md:text-6xl text-taupe tracking-[-0.04em] leading-none mb-6">
                02
              </p>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-navy tracking-[-0.02em] leading-tight mb-3">
                Waterproofing That Actually Lasts.
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed max-w-sm">
                The work that matters most is the work nobody sees. Proper
                substrate prep, moisture-resistant materials, code-compliant
                ventilation, and sealed-tight finishes that hold up to Florida
                humidity for decades.
              </p>
            </div>
            <div>
              <p className="font-sans font-extrabold text-5xl md:text-6xl text-taupe tracking-[-0.04em] leading-none mb-6">
                03
              </p>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-navy tracking-[-0.02em] leading-tight mb-3">
                25 Years of Tampa Bathrooms.
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed max-w-sm">
                Quarter century of bathroom renovations across Tampa Bay. The
                team knows local plumbing code, water table quirks,
                hurricane-rated fixtures, and the realities of Florida bathroom
                construction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Process */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-28">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-4">
            How It Works
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            Three steps to a finished bathroom.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-3">
                Step 01
              </p>
              <p className="font-sans font-extrabold text-5xl md:text-6xl text-navy tracking-[-0.04em] leading-none mb-5">
                01
              </p>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-navy tracking-[-0.02em] mb-3">
                Free Consultation
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed max-w-sm">
                Send a quick note or call. The team schedules a free in-home
                consultation to walk the bathroom, discuss the goals, and set
                the scope.
              </p>
            </div>
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-3">
                Step 02
              </p>
              <p className="font-sans font-extrabold text-5xl md:text-6xl text-navy tracking-[-0.04em] leading-none mb-5">
                02
              </p>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-navy tracking-[-0.02em] mb-3">
                Clear Estimate
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed max-w-sm">
                Receive a detailed written estimate within days. Honest pricing,
                realistic timeline (most bathrooms run 4 to 8 weeks), no
                high-pressure tactics.
              </p>
            </div>
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-3">
                Step 03
              </p>
              <p className="font-sans font-extrabold text-5xl md:text-6xl text-navy tracking-[-0.04em] leading-none mb-5">
                03
              </p>
              <h3 className="font-sans font-bold text-xl md:text-2xl text-navy tracking-[-0.02em] mb-3">
                Project Delivery
              </h3>
              <p className="font-sans text-base text-ink leading-relaxed max-w-sm">
                Licensed crews execute the work with clean job sites, daily
                updates if you are occupying the home, and a final walkthrough
                before close-out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Featured Work */}
      <section className="bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-28">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-4">
            Recent Work
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-16">
            Tampa bathroom renovations.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/powder-room-palm-wallpaper-tampa.jpg"
                alt="Powder room with palm wallpaper in Tampa"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/bathroom-remodel-1.JPG"
                alt="Bathroom remodel by Quality Restoration and Renovations in Tampa"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Financing */}
      <section className="bg-navy">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-white/70 mb-4">
                Financing
              </p>
              <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-[-0.03em] text-white mb-6">
                Financing makes the bathroom project possible.
              </h2>
              <p className="font-sans text-base md:text-lg text-white/85 leading-relaxed max-w-md">
                Bathroom renovation financing is available through trusted
                partner lenders. Whether the project is a quick powder room
                refresh or a full master suite, the team can help structure
                financing that works alongside the construction timeline.
              </p>
            </div>
            <div className="md:text-right">
              <a
                href="tel:8135171555"
                data-conversion="financing-phone-click"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 font-sans font-bold uppercase text-base tracking-[0.1em] bg-white text-navy px-8 py-5 rounded-[2px] hover:bg-bone transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call (813) 517-1555
              </a>
              <p className="font-sans text-sm text-white/80 mt-4">
                Or ask about financing during your free consultation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Service Area */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-28">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-4">
            Service Area
          </p>
          <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-3xl mb-12">
            Serving Tampa Bay's three core counties.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy tracking-[-0.025em] mb-4">
                Hillsborough County
              </h3>
              <div className="flex flex-col font-sans text-base text-ink leading-[1.8]">
                <span>Tampa</span>
                <span>Brandon</span>
                <span>Riverview</span>
                <span>Plant City</span>
                <span>Carrollwood</span>
                <span>Lutz</span>
                <span>Valrico</span>
              </div>
            </div>
            <div>
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy tracking-[-0.025em] mb-4">
                Pinellas County
              </h3>
              <div className="flex flex-col font-sans text-base text-ink leading-[1.8]">
                <span>St. Petersburg</span>
                <span>Clearwater</span>
                <span>Largo</span>
                <span>Dunedin</span>
                <span>Palm Harbor</span>
              </div>
            </div>
            <div>
              <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy tracking-[-0.025em] mb-4">
                Pasco County
              </h3>
              <div className="flex flex-col font-sans text-base text-ink leading-[1.8]">
                <span>Wesley Chapel</span>
                <span>New Port Richey</span>
                <span>Land O' Lakes</span>
                <span>Trinity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: FAQ */}
      <section className="bg-bone">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-4">
                Common Questions
              </p>
              <h2 className="font-sans font-extrabold text-3xl md:text-5xl leading-tight tracking-[-0.03em] text-navy max-w-xl">
                Answers to what most clients ask first.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <FaqAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Final CTA */}
      <section className="bg-navy">
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-20 lg:py-32 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-white/70 mb-6">
            Ready to Start?
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-6xl leading-tight tracking-[-0.035em] text-white mb-6">
            Get a free bathroom consultation today.
          </h2>
          <p className="font-sans text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-12">
            Send a note. Call. Either way, the team responds within one business
            day with next steps. Free consultation. Financing available. No
            obligation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="tel:8135171555"
              data-conversion="final-cta-phone-click"
              className="w-full md:w-auto inline-flex items-center justify-center gap-3 font-sans font-bold uppercase text-base tracking-[0.1em] bg-white text-navy px-8 py-5 rounded-[2px] hover:bg-bone transition-colors"
            >
              <Phone className="w-5 h-5" />
              Call (813) 517-1555
            </a>
            <a
              href="#lead-form"
              data-conversion="final-cta-form-anchor"
              className="w-full md:w-auto inline-flex items-center justify-center font-sans font-bold uppercase text-base tracking-[0.1em] border border-white text-white px-8 py-5 rounded-[2px] hover:bg-white/10 transition-colors"
            >
              Send a Message
            </a>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="bg-ink">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <Image
                src="/branding/quality-restoration-renovations-site-logo.png"
                alt="Quality Restoration and Renovations"
                width={160}
                height={80}
                className="h-12 w-auto brightness-0 invert"
              />
              <p className="font-sans text-xs text-white/60 mt-3">
                Florida License CGC1523357 &nbsp;&bull;&nbsp; Licensed, Bonded,
                Insured
              </p>
            </div>
            <div>
              <a
                href="tel:8135171555"
                data-conversion="footer-phone-click"
                className="font-sans font-bold text-base text-white"
              >
                (813) 517-1555
              </a>
              <p className="font-sans text-xs text-white/60 mt-1">
                1907 N 40th Street, Tampa, FL 33605
              </p>
            </div>
          </div>
          <p className="font-sans text-xs text-white/50 mt-8">
            &copy; 2026 Quality Restoration & Renovations. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
