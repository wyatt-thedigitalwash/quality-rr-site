"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const defaultProjectTypes = [
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Full Home Renovation",
  "Outdoor Living / Patio / Lanai",
  "Other",
];

export default function LandingForm({
  source,
  projectTypes,
}: {
  source: string;
  projectTypes?: string[];
}) {
  const options = projectTypes || defaultProjectTypes;
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    description: "",
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
      return "Full name is required.";
    }
    if (!formData.phone.trim()) {
      return "Phone number is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      return "Please enter a valid email address.";
    }
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

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
          message: formData.description || `Landing page lead. Project type: ${formData.projectType || "Not specified"}`,
          source,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "form_submit_success",
            form_source: source,
          });
        }
        setSuccess(true);
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "",
          description: "",
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
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-navy mb-6" />
        <h3 className="font-sans font-bold text-2xl text-navy tracking-[-0.02em] leading-tight mb-4">
          Request received.
        </h3>
        <p className="font-sans text-base text-ink leading-relaxed max-w-sm mx-auto">
          The team will call within one business day. For faster response, call
          (813) 517-1555 directly.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="mt-8 font-sans font-medium text-sm uppercase tracking-[0.15em] text-navy hover:text-taupe-dark transition-colors"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div>
        <label htmlFor="landing-name" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
          Full Name
        </label>
        <input
          id="landing-name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Smith"
          className="w-full bg-white border border-taupe/30 rounded-none px-4 py-3 font-sans text-base text-ink placeholder:text-taupe/60 focus:border-navy focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="landing-phone" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
          Phone
        </label>
        <input
          id="landing-phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="(813) 555-0000"
          className="w-full bg-white border border-taupe/30 rounded-none px-4 py-3 font-sans text-base text-ink placeholder:text-taupe/60 focus:border-navy focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="landing-email" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
          Email
        </label>
        <input
          id="landing-email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full bg-white border border-taupe/30 rounded-none px-4 py-3 font-sans text-base text-ink placeholder:text-taupe/60 focus:border-navy focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="landing-projectType" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
          Project Type
        </label>
        <div className="relative">
          <select
            id="landing-projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className={`w-full bg-white border border-taupe/30 rounded-none px-4 py-3 pr-10 font-sans text-base focus:border-navy focus:outline-none transition-colors appearance-none ${formData.projectType ? "text-ink" : "text-taupe/60"}`}
          >
            <option value="" disabled>
              Select a project type
            </option>
            {options.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-taupe" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </div>

      <div>
        <label htmlFor="landing-description" className="block font-sans font-medium text-xs uppercase tracking-[0.15em] text-taupe mb-2">
          Brief Description (optional)
        </label>
        <textarea
          id="landing-description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={3}
          placeholder="Tell us about the project"
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
        data-conversion="hero-form-submit"
        className={`w-full font-sans font-bold uppercase text-sm tracking-[0.15em] bg-navy text-white px-8 py-4 rounded-[2px] hover:bg-taupe-dark transition-colors mt-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
      >
        {isSubmitting ? "Sending..." : "Get My Free Consultation"}
      </button>

      <p className="font-sans text-xs text-taupe/80 text-center">
        No spam. No obligation. Replies within one business day.
      </p>
    </form>
  );
}
