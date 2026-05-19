"use client";

export default function PhoneLink({
  source,
  className,
  children,
}: {
  source: string;
  className?: string;
  children: React.ReactNode;
}) {
  function handleClick() {
    if (
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function"
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
        "event",
        "phone_click",
        {
          phone_source: source,
          event_category: "engagement",
          event_label: "(813) 517-1555",
        }
      );
    }
  }

  return (
    <a href="tel:8135171555" onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
