"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const projectTypes = [
  { value: "Kitchen Remodeling", label: "Kitchen Remodeling" },
  { value: "Bathroom Remodeling", label: "Bathroom Remodeling" },
  { value: "Full Home Renovation", label: "Full Home Renovation" },
  { value: "Outdoor Living / Patio / Lanai", label: "Outdoor Living / Patio / Lanai" },
  { value: "Office Remodeling", label: "Office Remodeling" },
  { value: "Commercial Renovation", label: "Commercial Renovation" },
  { value: "Fire or Flood Restoration", label: "Fire or Flood Restoration" },
  { value: "Water Damage / Demo", label: "Water Damage / Demo" },
  { value: "Custom Home Build", label: "Custom Home Build" },
  { value: "Other", label: "Other (please describe)" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    message: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  }

  function validate(): string | null {
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      return "Full name is required (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return "A valid email address is required.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      return "Message is required (at least 10 characters).";
    }
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Honeypot check
    if (formData.website) {
      setSuccess(true);
      return;
    }

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== "undefined" && typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function") {
          (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "form_submit_success", {
            form_source: "main-site-contact-form",
            event_category: "lead",
            event_label: "Contact Form Submission",
          });
        }
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "",
          message: "",
          website: "",
        });
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle2 className="w-12 h-12 text-navy mb-6" />
        <h3 className="font-sans font-bold text-2xl md:text-3xl text-navy tracking-[-0.02em] leading-tight mb-4">
          Message received.
        </h3>
        <p className="font-sans text-base text-ink leading-relaxed max-w-md mx-auto">
          The team will respond within one business day. For urgent matters,
          call (813) 517-1555.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-8 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="contact-name" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className="w-full bg-white border border-taupe/30 rounded-none px-4 py-3 font-sans text-base text-ink placeholder:text-taupe/60 focus:border-navy focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(813) 555-0000"
            className="w-full bg-white border border-taupe/30 rounded-none px-4 py-3 font-sans text-base text-ink placeholder:text-taupe/60 focus:border-navy focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className="w-full bg-white border border-taupe/30 rounded-none px-4 py-3 font-sans text-base text-ink placeholder:text-taupe/60 focus:border-navy focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="contact-projectType" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
          Project Type
        </label>
        <div className="relative">
          <select
            id="contact-projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full bg-white border border-taupe/30 rounded-none px-4 py-3 pr-10 font-sans text-base focus:border-navy focus:outline-none transition-colors appearance-none ${formData.projectType ? "text-ink" : "text-taupe/60"}`}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-taupe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your project"
          className="w-full bg-white border border-taupe/30 rounded-none px-4 py-3 font-sans text-base text-ink placeholder:text-taupe/60 focus:border-navy focus:outline-none transition-colors resize-none"
        />
      </div>

      {error && (
        <div role="alert" aria-live="polite">
          <p className="font-sans font-medium text-sm text-[#B33A3A]">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full md:w-auto font-sans font-medium uppercase text-xs tracking-[0.15em] bg-navy text-white px-8 py-4 rounded-[2px] hover:bg-taupe-dark transition-colors ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
