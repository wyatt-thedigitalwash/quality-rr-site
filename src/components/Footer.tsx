import Link from "next/link";
import Image from "next/image";
import PhoneLink from "@/components/PhoneLink";

const navigateLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Project Gallery", href: "/project-gallery" },
  { label: "FAQs", href: "/faqs" },
  { label: "Blog", href: "/blog" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Residential", href: "/services/residential" },
  { label: "Commercial", href: "/services/commercial" },
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Office Remodeling", href: "/services/office-remodeling" },
  { label: "Restoration", href: "/services/restoration" },
];

export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-bone">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand Block */}
          <div>
            <div className="mb-4">
              <Image
                src="/branding/quality-restoration-renovations-site-logo.png"
                alt="Quality Restoration and Renovations"
                width={240}
                height={120}
                className="h-16 w-auto"
              />
            </div>
            <p className="font-sans text-sm text-ink max-w-sm mb-4">
              Licensed general contractor serving Tampa Bay since 2000.
              Residential and commercial renovation, remodeling, and
              restoration.
            </p>
            <p className="font-sans font-medium text-xs text-taupe uppercase tracking-[0.15em]">
              Florida License CGC1523357
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-navy mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2">
              {navigateLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-ink hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-navy mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm text-ink hover:text-navy transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-bold text-sm uppercase tracking-[0.15em] text-navy mb-4">
              Contact
            </h3>
            <div className="flex flex-col gap-3 font-sans text-sm text-ink">
              <PhoneLink
                source="footer"
                className="hover:text-navy transition-colors"
              >
                (813) 517-1555
              </PhoneLink>
              <a
                href="mailto:contact@quality-rr.com"
                className="hover:text-navy transition-colors"
              >
                contact@quality-rr.com
              </a>
              <p>
                1907 N 40th Street
                <br />
                Tampa, FL 33605
              </p>
              <p>
                Monday to Friday
                <br />
                8:00am to 4:30pm
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-taupe/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <p className="font-sans text-xs text-taupe">
              &copy; 2026 Quality Restoration & Renovations. All rights
              reserved.
            </p>
            <p className="font-sans text-xs text-taupe">Tampa, Florida</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
