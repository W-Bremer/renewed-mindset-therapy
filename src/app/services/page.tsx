import type { Metadata } from "next";
import { SERVICES } from "@/lib/site";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Therapy Services in Mansfield, TX: EMDR, Trauma & Anxiety",
  description:
    "Explore therapy services at Renewed Mindset Therapy in Mansfield, TX: EMDR, trauma & PTSD, anxiety & panic, individual therapy, faith-based counseling, and EMDR consultation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="relative overflow-hidden bg-gradient-to-b from-shell-100 to-shell-50 pt-36 pb-16">
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">
              <span className="h-px w-8 bg-sage" />
              Services
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ocean-deep sm:text-6xl">
              Specialized care, tailored to you
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              Every person arrives with a different story, so every plan looks
              different. Below are the core ways Tiffany helps clients in Mansfield
              and across Texas heal and move forward.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which fits?"
        text="That's completely normal. Reach out and Tiffany will help you find the right starting point."
      />
    </>
  );
}
