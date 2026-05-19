import type { Metadata } from "next";
import Link from "next/link";
import FaqList from "@/components/FaqList";
import PhoneLink from "@/components/PhoneLink";
import { BreadcrumbJsonLd, FaqPageJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about Quality Restoration & Renovations. Service area, licensing, timelines, and the consultation process.",
  alternates: { canonical: "https://quality-rr.com/faqs" },
  openGraph: {
    title: "FAQs | Quality Restoration & Renovations",
    description: "Frequently asked questions about Quality Restoration & Renovations. Service area, licensing, timelines, and the consultation process.",
    url: "https://quality-rr.com/faqs",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQs | Quality Restoration & Renovations",
    description: "Frequently asked questions about Quality Restoration & Renovations. Service area, licensing, timelines, and the consultation process.",
    images: ["/og-image.png"],
  },
};

const faqCategories = [
  {
    label: "Service Area & Scope",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "Quality Restoration & Renovations serves Tampa and the surrounding Tampa Bay region, including Hillsborough, Pinellas, and Pasco Counties. If a location falls outside that range, the team is happy to confirm coverage on request.",
      },
      {
        question: "Do you handle both residential and commercial work?",
        answer:
          "Yes. The firm has 25 years of experience across full-scope residential renovations and commercial projects including office remodels, tenant build-outs, multi-housing renovations, and complete property rehabs.",
      },
      {
        question: "What size projects do you take on?",
        answer:
          "Projects range from single-room renovations to full home rebuilds and large commercial build-outs. The team scopes each project individually and provides honest input on whether the firm is the right fit before any work begins.",
      },
    ],
  },
  {
    label: "Licensing & Insurance",
    items: [
      {
        question: "Are you licensed, bonded, and insured?",
        answer:
          "Yes. The firm holds Florida General Contractor License CGC1523357 and is fully bonded and insured for both residential and commercial work.",
      },
      {
        question: "What does general contractor licensing actually cover?",
        answer:
          "A Florida General Contractor license authorizes the firm to manage and execute commercial and residential construction projects across the state, including structural work, mechanical coordination, and supervision of licensed sub-trades. CGC licensure is the state's highest classification of building contractor.",
      },
    ],
  },
  {
    label: "Timeline & Process",
    items: [
      {
        question: "How long will a renovation project take?",
        answer:
          "Timelines depend on scope and complexity. The team provides a detailed schedule upfront and consistent updates throughout the project to keep delivery on track. Most kitchens and bathrooms run 4 to 8 weeks; full home renovations and commercial build-outs run longer.",
      },
      {
        question: "What does the project process look like?",
        answer:
          "Three phases. Consultation and planning establishes the scope, schedule, and budget. Construction runs the work, with licensed crews handling demo through finish. A final walkthrough confirms every detail meets the standard before the job closes.",
      },
      {
        question: "Can you live in the home during a renovation?",
        answer:
          "Often, yes. For full home renovations or major work in the kitchen or primary bathroom, the team helps plan logistics around occupancy. For partial-scope work, most clients stay in the home throughout.",
      },
    ],
  },
  {
    label: "Estimates & Pricing",
    items: [
      {
        question: "How do I get a quote?",
        answer:
          "Send a quick note through the contact form with the scope, timeline, and any photos or plans. The team responds within one business day to set up a free, no-obligation consultation. Detailed estimates follow the consultation.",
      },
      {
        question: "Is the initial consultation really free?",
        answer:
          "Yes. Initial consultations and walk-throughs are free, with no obligation to move forward. The team uses the consultation to understand the project, scope the work, and provide a clear estimate.",
      },
    ],
  },
  {
    label: "Fire, Flood & Insurance Claims",
    items: [
      {
        question: "Do you handle insurance claims for fire or flood damage?",
        answer:
          "Yes. Fire and flood restoration is a core service. The team uses Xactimate to coordinate with insurance providers and streamline the claim process from initial estimate through completion.",
      },
      {
        question: "What is Xactimate, and why does it matter?",
        answer:
          "Xactimate is the industry-standard software insurance companies use to estimate property damage claims. Working in Xactimate means the firm's estimates align directly with how the insurance carrier evaluates the loss, which reduces friction and speeds up approvals.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            FAQs
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-4xl">
            Answers to what most clients ask first.
          </h1>
          <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mt-8">
            Common questions about scope, scheduling, licensing, and how a
            project actually runs. If something is not covered here, send a
            note. The team responds within one business day.
          </p>
        </div>
      </section>

      {/* Section 2: FAQ Accordion */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                FAQs
              </p>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-navy leading-tight tracking-[-0.025em] mb-6">
                Common questions, plainly answered.
              </h2>
              <p className="font-sans text-base text-ink leading-relaxed max-w-sm">
                Organized by topic. If you have a question that is not here, the
                contact form is the fastest way to reach the team.
              </p>
            </div>
            <div className="lg:col-span-8">
              <FaqList categories={faqCategories} />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Still Have Questions */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Still Have Questions
              </p>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl leading-tight tracking-[-0.025em] text-navy max-w-2xl mb-6">
                If it is not on this page, the team will answer it directly.
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-xl">
                Send a note with the question. Replies typically come within one
                business day, often faster during business hours.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-1">
                    Call
                  </p>
                  <PhoneLink
                    source="faqs-page"
                    className="font-sans font-semibold text-lg md:text-xl text-navy hover:text-taupe-dark transition-colors"
                  >
                    (813) 517-1555
                  </PhoneLink>
                </div>
                <div>
                  <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:contact@quality-rr.com"
                    className="font-sans font-semibold text-lg md:text-xl text-navy hover:text-taupe-dark transition-colors"
                  >
                    contact@quality-rr.com
                  </a>
                </div>
                <div>
                  <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-1">
                    Hours
                  </p>
                  <p className="font-sans font-semibold text-lg md:text-xl text-navy">
                    Monday to Friday, 8am to 4:30pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: CTA Band */}
      <section data-bg="bone" className="bg-bone py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Start
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Have a project to discuss?
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
        { name: "FAQs", url: "https://quality-rr.com/faqs" },
      ]} />
      <FaqPageJsonLd items={faqCategories.flatMap((cat) => cat.items)} />
    </>
  );
}
