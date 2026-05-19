const BASE_URL = "https://quality-rr.com";

const localBusiness = {
  "@type": "GeneralContractor",
  "@id": `${BASE_URL}/#business`,
  name: "Quality Restoration & Renovations",
  description:
    "Licensed general contractor serving Tampa Bay since 2000. Residential and commercial renovation, remodeling, and restoration.",
  url: BASE_URL,
  telephone: "+18135171555",
  email: "contact@quality-rr.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1907 N 40th Street",
    addressLocality: "Tampa",
    addressRegion: "FL",
    postalCode: "33605",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 27.9659,
    longitude: -82.4278,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Hillsborough County, FL" },
    { "@type": "AdministrativeArea", name: "Pinellas County, FL" },
    { "@type": "AdministrativeArea", name: "Pasco County, FL" },
  ],
  priceRange: "$$",
  image: `${BASE_URL}/og-image.png`,
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "16:30",
  },
};

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    ...localBusiness,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: { "@id": `${BASE_URL}/#business` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Tampa Bay, FL",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function FaqPageJsonLd({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
