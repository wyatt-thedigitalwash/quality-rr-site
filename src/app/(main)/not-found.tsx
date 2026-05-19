import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
};

const helpfulLinks = [
  { label: "Return to home", href: "/" },
  { label: "Browse services", href: "/services" },
  { label: "View project gallery", href: "/project-gallery" },
  { label: "Contact the team", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="bg-white pt-32 md:pt-40 pb-24 md:pb-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
          404 / Page Not Found
        </p>
        <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy max-w-3xl mb-8">
          This page does not exist.
        </h1>
        <p className="font-sans text-lg md:text-xl text-ink max-w-2xl leading-relaxed mb-10">
          The page may have moved or never existed. Here are a few places to
          start instead.
        </p>
        <nav className="flex flex-col gap-4">
          {helpfulLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 font-sans font-medium text-base text-navy hover:text-taupe-dark group transition-colors"
            >
              {link.label}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
