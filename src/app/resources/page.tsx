import type { Metadata } from "next";
import { BookOpen, ExternalLink, LifeBuoy } from "lucide-react";
import { TOOLKIT, BUSINESS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: { absolute: "Therapy Toolkit & Resources | Renewed Mindset Therapy" },
  description:
    "A curated therapy toolkit from Tiffany Mylett, LCSW-S — book recommendations on boundaries, EMDR, ADHD, and emotional regulation, plus crisis resources.",
  alternates: { canonical: "/resources" },
};

const crisis = [
  { name: "988 Suicide & Crisis Lifeline", detail: "Call or text 988 — 24/7" },
  { name: "Crisis Text Line", detail: "Text HOME to 741741" },
  { name: "Emergency", detail: "Call 911 or go to your nearest ER" },
];

export default function ResourcesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-shell-100 to-shell-50 pt-36 pb-14">
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-sage" />
              Therapy toolkit
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ocean-deep sm:text-6xl">
              Resources for the journey
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              A few of the books Tiffany returns to again and again — for clients
              and for herself. Great companions to the work we do together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <h2 className="flex items-center gap-3 font-serif text-2xl font-semibold text-ocean-deep">
              <BookOpen className="h-6 w-6 text-coral" />
              Recommended reading
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {TOOLKIT.map((b, i) => (
              <Reveal key={b.title} delay={(i % 2) * 80}>
                <article className="card-soft flex h-full gap-5 p-6">
                  <div className="flex h-24 w-16 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-ocean to-ocean-mid text-shell-50 shadow-md">
                    <BookOpen className="h-6 w-6 opacity-80" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                      {b.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-widest text-sage-dark">
                      {b.author}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">
                      {b.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Crisis */}
          <Reveal className="mt-14">
            <div className="overflow-hidden rounded-4xl bg-ocean-deep p-8 text-shell-50 sm:p-10">
              <h2 className="flex items-center gap-3 font-serif text-2xl font-semibold text-white">
                <LifeBuoy className="h-6 w-6 text-coral-light" />
                If you need help right now
              </h2>
              <p className="mt-3 max-w-2xl text-shell-100/80">
                Therapy is for ongoing growth — but in a crisis, please reach out to
                immediate support. You deserve help now.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-3">
                {crisis.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-3xl border border-white/15 bg-white/5 p-5"
                  >
                    <p className="font-semibold text-white">{c.name}</p>
                    <p className="mt-1 text-sm text-shell-100/75">{c.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Client portal */}
          <Reveal delay={80} className="mt-10">
            <a
              href={BUSINESS.portal}
              target="_blank"
              rel="noopener noreferrer"
              className="card-soft group flex items-center justify-between gap-4 p-7 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div>
                <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                  Existing client? Visit the secure portal
                </h3>
                <p className="mt-1 text-sm text-ink/65">
                  Manage appointments, paperwork, and documents securely.
                </p>
              </div>
              <ExternalLink className="h-5 w-5 shrink-0 text-coral transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
