import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import PhoneLink from "@/components/PhoneLink";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Quality Restoration & Renovations for a free consultation. Tampa Bay general contractor. Licensed and insured. CGC1523357.",
  alternates: { canonical: "https://quality-rr.com/contact" },
  openGraph: {
    title: "Contact | Quality Restoration & Renovations",
    description: "Contact Quality Restoration & Renovations for a free consultation. Tampa Bay general contractor. Licensed and insured. CGC1523357.",
    url: "https://quality-rr.com/contact",
    type: "website",
    siteName: "Quality Restoration & Renovations",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Quality Restoration & Renovations",
    description: "Contact Quality Restoration & Renovations for a free consultation. Tampa Bay general contractor. Licensed and insured. CGC1523357.",
    images: ["/og-image.png"],
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Section 1: Page Hero + Form */}
      <section data-bg="light" className="bg-white py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Contact
              </p>
              <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-xl">
                Start a conversation.
              </h1>
              <p className="font-sans text-lg md:text-xl text-ink max-w-md leading-relaxed mt-8 mb-10">
                Tell the team about the project. Quality Restoration &
                Renovations responds within one business day with next steps and
                a free, no-obligation consultation.
              </p>
              <div className="flex flex-col gap-4">
                <PhoneLink
                  source="contact-page"
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

      {/* Section 2: Map / Location */}
      <section data-bg="bone" className="bg-bone py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3525.0!2d-82.4292!3d27.9748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c5d3e3a7c7c1%3A0x0!2s1907+N+40th+St%2C+Tampa%2C+FL+33605!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Quality Restoration & Renovations office location at 1907 N 40th Street, Tampa, FL 33605"
                />
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
                Location
              </p>
              <h2 className="font-sans font-extrabold text-3xl md:text-4xl leading-tight tracking-[-0.025em] text-navy mb-6">
                Tampa, Florida
              </h2>
              <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-md mb-4">
                1907 N 40th Street
                <br />
                Tampa, FL 33605
              </p>
              <p className="font-sans text-base text-ink leading-relaxed max-w-md mb-8">
                Serving Hillsborough, Pinellas, and Pasco Counties across the
                Tampa Bay region.
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=1907+N+40th+Street+Tampa+FL+33605"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
              >
                Get Directions
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Service Area CTA */}
      <section data-bg="light" className="bg-white py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Service Area
          </p>
          <h2 className="font-sans font-extrabold text-4xl md:text-5xl leading-tight tracking-[-0.03em] text-navy mb-8">
            Not sure if the project is in range?
          </h2>
          <p className="font-sans text-base md:text-lg text-ink leading-relaxed max-w-xl mx-auto mb-10">
            The firm covers Hillsborough, Pinellas, and Pasco Counties. Projects
            beyond the standard area are considered on a case-by-case basis.
          </p>
          <Link
            href="/service-area"
            className="inline-flex items-center gap-2 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark group transition-colors"
          >
            View Full Service Area
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://quality-rr.com" },
        { name: "Contact", url: "https://quality-rr.com/contact" },
      ]} />
    </>
  );
}
