import type { Metadata } from "next";
import { FAQS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/jsonld";
import { ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Therapy in Mansfield, TX",
  description:
    "Answers about insurance, fees, telehealth, ages served, and what to expect in therapy at Renewed Mindset Therapy in Mansfield, TX with Tiffany Mylett, LCSW-S.",
  alternates: { canonical: "/faqs" },
};

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          faqSchema(FAQS),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQs", path: "/faqs" },
          ]),
        ]}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-shell-100 to-shell-50 pt-36 pb-14">
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-sage" />
              Good to know
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ocean-deep sm:text-6xl">
              Frequently asked questions
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              A few of the things people most often want to know before reaching
              out. Don&apos;t see your question? Get in touch — Tiffany is happy to
              help.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-prose space-y-4">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={(i % 4) * 50}>
              <details className="group card-soft p-0 [&_summary]:list-none" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 p-6">
                  <h2 className="font-serif text-lg font-semibold text-ocean-deep">
                    {f.q}
                  </h2>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean transition-transform group-open:rotate-180">
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-ink/75">
                  <p className="leading-relaxed">{f.a}</p>
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        text="Reach out directly and Tiffany will get back to you personally."
      />
    </>
  );
}
