"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PhoneLink from "@/components/PhoneLink";

const serviceLinks = [
  { label: "Residential", href: "/services/residential" },
  { label: "Commercial", href: "/services/commercial" },
  { label: "Kitchen Remodeling", href: "/services/kitchen-remodeling" },
  { label: "Bathroom Remodeling", href: "/services/bathroom-remodeling" },
  { label: "Office Remodeling", href: "/services/office-remodeling" },
  { label: "Restoration", href: "/services/restoration" },
];

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Project Gallery", href: "/project-gallery" },
  { label: "Contact", href: "/contact" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileOpen) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  function handleDropdownEnter() {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  }

  function handleDropdownLeave() {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 150);
  }

  return (
    <header aria-label="Site header" className="sticky top-0 z-50 bg-white border-b border-taupe/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between h-[60px] md:h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center py-2">
          <Image
            src="/branding/quality-restoration-renovations-site-logo.png"
            alt="Quality Restoration and Renovations"
            width={140}
            height={70}
            className="h-9 md:h-11 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div
                key={link.label}
                className="relative flex items-center self-stretch"
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}
              >
                <Link
                  href={link.href}
                  className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-ink hover:text-navy transition-colors"
                >
                  {link.label}
                </Link>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={reduced ? false : { opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 pt-2"
                    >
                      <div className="bg-white border border-taupe/20 py-3 px-5 min-w-[220px]">
                        {serviceLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block py-1.5 font-sans text-sm text-ink hover:text-navy transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans font-medium text-xs uppercase tracking-[0.15em] text-ink hover:text-navy transition-colors"
              >
                {link.label}
              </Link>
            )
          )}

          {/* Divider */}
          <div className="w-px h-6 bg-taupe/30 mx-2" />

          {/* Phone */}
          <PhoneLink
            source="header"
            className="flex items-center gap-2 font-sans font-semibold text-base text-navy hover:text-taupe-dark transition-colors"
          >
            <Phone className="w-4 h-4" />
            (813) 517-1555
          </PhoneLink>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu-panel"
        >
          <Menu className="w-6 h-6 text-taupe" />
        </button>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-ink/20"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              id="mobile-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={reduced ? false : { x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease }}
              className="fixed inset-y-0 right-0 z-50 w-full bg-white flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-[60px]">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/branding/quality-restoration-renovations-site-logo.png"
                    alt="Quality Restoration and Renovations"
                    width={180}
                    height={90}
                    className="h-10 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-taupe" />
                </button>
              </div>

              <motion.nav
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.05, delayChildren: 0.1 }}
                className="flex-1 flex flex-col justify-center px-10 gap-6"
              >
                <motion.div variants={menuItemVariants} transition={{ duration: 0.3, ease }}>
                  <Link
                    href="/services"
                    onClick={() => setMobileOpen(false)}
                    className="font-sans font-extrabold text-3xl text-navy tracking-[-0.02em]"
                  >
                    Services
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants} transition={{ duration: 0.3, ease }} className="pl-4 flex flex-col gap-2">
                  {serviceLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      onClick={() => setMobileOpen(false)}
                      className="font-sans font-medium text-base text-taupe"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </motion.div>
                <motion.div variants={menuItemVariants} transition={{ duration: 0.3, ease }}>
                  <Link
                    href="/project-gallery"
                    onClick={() => setMobileOpen(false)}
                    className="font-sans font-extrabold text-3xl text-navy tracking-[-0.02em]"
                  >
                    Project Gallery
                  </Link>
                </motion.div>
                <motion.div variants={menuItemVariants} transition={{ duration: 0.3, ease }}>
                  <Link
                    href="/contact"
                    onClick={() => setMobileOpen(false)}
                    className="font-sans font-extrabold text-3xl text-navy tracking-[-0.02em]"
                  >
                    Contact
                  </Link>
                </motion.div>
              </motion.nav>

              <motion.div
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="px-10 pb-10 flex flex-col gap-1"
              >
                <PhoneLink
                  source="header-mobile"
                  className="font-sans font-medium text-xl text-navy"
                >
                  (813) 517-1555
                </PhoneLink>
                <a
                  href="mailto:contact@quality-rr.com"
                  className="font-sans text-sm text-taupe"
                >
                  contact@quality-rr.com
                </a>
                <span className="font-sans text-sm text-taupe">
                  Monday to Friday, 8am to 4:30pm
                </span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
