import type { Metadata } from "next";
import Link from "next/link";
import { Check, CreditCard, FileText, ShieldQuestion } from "lucide-react";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Fees & Insurance | Therapy in Mansfield, TX",
  description:
    "Therapy fees and insurance information for Renewed Mindset Therapy in Mansfield, TX. Out-of-network with superbills provided. HSA/FSA, Care Credit, and major cards accepted.",
  alternates: { canonical: "/fees" },
};

const fees = [
  { label: "Initial Evaluation", detail: "90 minutes", price: "$225" },
  { label: "Standard Therapy Session", detail: "45–52 minutes", price: "$140" },
  { label: "Extended EMDR Session", detail: "90 minutes", price: "$215" },
  { label: "Couples / Marital Therapy", detail: "90 minutes", price: "$215" },
];

export default function FeesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Fees & Insurance", path: "/fees" },
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-shell-100 to-shell-50 pt-36 pb-14">
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-sage" />
              Transparent & simple
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ocean-deep sm:text-6xl">
              Fees & insurance
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Clear, upfront pricing so you can make the best decision for you —
              with no surprises.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="card-soft overflow-hidden p-0">
              <div className="border-b border-shell-200 bg-ocean px-8 py-6">
                <h2 className="font-serif text-2xl font-semibold text-white">
                  Session fees
                </h2>
              </div>
              <ul className="divide-y divide-shell-200">
                {fees.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center justify-between gap-4 px-8 py-5"
                  >
                    <div>
                      <p className="font-semibold text-ocean-deep">{f.label}</p>
                      <p className="text-sm text-ink/55">{f.detail}</p>
                    </div>
                    <span className="font-serif text-2xl font-semibold text-coral-dark">
                      {f.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="px-8 py-5 text-sm text-ink/55">
                A no-show or late cancellation is charged the full appointment fee,
                so another waitlisted client can take the slot when there&apos;s
                notice.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-8 card-soft p-8">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
                  <ShieldQuestion className="h-6 w-6" />
                </span>
                <h2 className="font-serif text-xl font-semibold text-ocean-deep">
                  Why out-of-network?
                </h2>
              </div>
              <div className="mt-5 space-y-4 leading-relaxed text-ink/75">
                <p>
                  Renewed Mindset Therapy does not contract directly with insurance
                  plans. That choice protects your care: insurance often limits the
                  number of visits, requires a mental-health diagnosis on file,
                  excludes couples work, and hasn&apos;t raised reimbursement rates
                  in over a decade.
                </p>
                <p>
                  Staying out-of-network keeps your treatment private and driven by
                  what <em>you</em> need — not what a plan will authorize.
                </p>
              </div>
            </Reveal>
          </div>

          {/* sidebar */}
          <aside className="lg:col-span-5">
            <div className="space-y-6">
              <Reveal className="card-soft p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
                    <FileText className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                    Out-of-network reimbursement
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/75">
                  Tiffany provides superbills you can submit to your insurer for
                  possible out-of-network reimbursement, and partners with{" "}
                  <span className="font-semibold text-ocean">Mentaya</span> to help
                  you understand your benefits.
                </p>
              </Reveal>

              <Reveal delay={80} className="card-soft p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
                    <CreditCard className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                    Accepted payments
                  </h3>
                </div>
                <ul className="mt-5 grid gap-3">
                  {[
                    "Major credit cards",
                    "HSA & FSA accounts",
                    "Care Credit",
                    "Cash & checks",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-ink/80">
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-coral/15 text-coral-dark">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={140} className="rounded-4xl bg-shell-100 p-7">
                <p className="text-sm leading-relaxed text-ink/70">
                  Under the No Surprises Act, you have the right to a{" "}
                  <span className="font-semibold text-ocean">
                    Good Faith Estimate
                  </span>{" "}
                  of expected costs. Tiffany will gladly provide one on request.
                </p>
                <Link href="/contact" className="link-underline mt-4 text-sm">
                  Ask a question
                </Link>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}
