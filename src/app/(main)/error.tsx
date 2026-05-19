"use client";

import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="font-sans font-medium text-xs tracking-[0.15em] uppercase text-taupe mb-6">
            Something Went Wrong
          </p>
          <h1 className="font-sans font-extrabold text-5xl md:text-7xl leading-[0.95] tracking-[-0.035em] text-navy mb-8">
            An error occurred.
          </h1>
          <p className="font-sans text-lg text-ink leading-relaxed mb-10 max-w-xl">
            The page failed to load. You can try again, or reach the team
            directly by phone or email if the problem continues.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={reset}
              className="font-sans font-medium uppercase text-xs tracking-[0.15em] bg-navy text-white px-7 py-4 rounded-[2px] hover:bg-taupe-dark transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/contact"
              className="font-sans font-medium uppercase text-xs tracking-[0.15em] border border-taupe text-taupe px-7 py-4 rounded-[2px] hover:border-taupe-dark hover:text-taupe-dark transition-colors"
            >
              Contact the Team
            </Link>
          </div>

          <p className="mt-8 font-sans text-sm text-taupe">
            Call{" "}
            <a
              href="tel:+18135171555"
              className="text-taupe hover:text-navy transition-colors underline underline-offset-2"
            >
              (813) 517-1555
            </a>{" "}
            or email{" "}
            <a
              href="mailto:contact@quality-rr.com"
              className="text-taupe hover:text-navy transition-colors underline underline-offset-2"
            >
              contact@quality-rr.com
            </a>
          </p>
        </div>

        {process.env.NODE_ENV !== "production" && error?.message && (
          <pre className="mt-12 p-4 bg-bone text-xs text-ink font-mono overflow-x-auto max-w-2xl">
            {error.message}
          </pre>
        )}
      </div>
    </section>
  );
}
