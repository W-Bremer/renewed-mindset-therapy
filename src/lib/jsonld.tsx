import { BUSINESS, SITE_URL, SERVICES } from "./site";

const businessId = `${SITE_URL}/#practice`;

// Core LocalBusiness / medical practice node, referenced across pages.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "ProfessionalService", "LocalBusiness"],
    "@id": businessId,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Renewed Mindset Therapy provides EMDR, trauma, and anxiety therapy in Mansfield, TX with Tiffany Mylett, LCSW-S, an EMDR Certified Therapist.",
    url: SITE_URL,
    telephone: BUSINESS.phone,
    faxNumber: BUSINESS.fax,
    email: BUSINESS.email,
    image: `${SITE_URL}/images/calm6.jpg`,
    logo: `${SITE_URL}/images/logo.png`,
    priceRange: "$$",
    medicalSpecialty: "Psychiatric",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    areaServed: BUSINESS.serviceAreas.map((a) => ({
      "@type": "City",
      name: a,
    })),
    openingHoursSpecification: BUSINESS.hoursSpec.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    founder: { "@id": `${SITE_URL}/#tiffany` },
    sameAs: ["https://www.linkedin.com/in/tiffanymylett/"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Therapy Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.shortName,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

// Person node for Tiffany Mylett, supports name/E-A-T queries.
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#tiffany`,
    name: "Tiffany Mylett",
    honorificSuffix: "LCSW-S",
    jobTitle: "Licensed Clinical Social Worker & EMDR Certified Therapist",
    url: `${SITE_URL}/about`,
    worksFor: { "@id": businessId },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "University of Texas at Arlington" },
      { "@type": "CollegeOrUniversity", name: "University of Houston" },
    ],
    sameAs: ["https://www.linkedin.com/in/tiffanymylett/"],
  };
}

export function serviceSchema(slug: string) {
  const s = SERVICES.find((x) => x.slug === slug);
  if (!s) return null;
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: s.shortName,
    description: s.metaDescription,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": businessId },
    areaServed: BUSINESS.serviceAreas.map((a) => ({ "@type": "City", name: a })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
