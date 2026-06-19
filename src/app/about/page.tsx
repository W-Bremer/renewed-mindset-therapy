import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, BadgeCheck, Users, Heart, ArrowRight } from "lucide-react";
import {
  BUSINESS,
  CREDENTIALS,
  MODALITIES,
  AFFILIATIONS,
} from "@/lib/site";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "About Tiffany Mylett, LCSW-S — EMDR Therapist in Mansfield, TX",
  description:
    "Meet Tiffany Mylett, LCSW-S, an EMDR Certified Therapist and Clinical Supervisor in Mansfield, TX. Learn about her training, approach, and the care she offers.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-shell-100 to-shell-50 pt-32 pb-12 sm:pt-36">
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-sage" />
                About
              </p>
              <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-ocean-deep sm:text-6xl">
                Hi, I&apos;m Tiffany.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
                &ldquo;I am passionate about walking alongside the clients I work
                with as they process through current life struggles.&rdquo; My job
                is to help you feel safe, secure, and seen — and to help your mind,
                heart, and body heal.
              </p>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-sage-dark">
                {BUSINESS.title} · {BUSINESS.role}
              </p>
            </Reveal>
          </div>
          <Reveal delay={150} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sage/25 to-coral/15 blur-2xl" />
              <div className="overflow-hidden rounded-[2.25rem] border-8 border-white shadow-2xl shadow-ocean/15">
                <Image
                  src="/images/headshot.jpg"
                  alt="Tiffany Mylett, LCSW-S, EMDR Certified Therapist in Mansfield, TX"
                  width={800}
                  height={800}
                  className="aspect-square w-full object-cover"
                  priority
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIO */}
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal className="space-y-5 text-lg leading-relaxed text-ink/75">
              <h2 className="font-serif text-3xl font-semibold text-ocean-deep">
                My approach
              </h2>
              <p>
                I believe therapy is a collaborative process. Together, we&apos;ll
                create a safe and calm environment where you can do the real work of
                healing — never rushed, never judged. I care about more than just
                managing symptoms; I want to help you understand the
                neurophysiology underneath them and get to the core issue so change
                actually lasts.
              </p>
              <p>
                I tailor each plan to the person in front of me. Depending on what
                you need, our work might draw on EMDR, Cognitive Behavioral Therapy,
                Rational Emotive Behavior Therapy, somatic approaches, interpersonal
                psychotherapy, or HeartMath® biofeedback. For trauma, anxiety,
                depression, and self-esteem, I often use EMDR&apos;s Adaptive
                Information Processing model to help the brain reprocess what&apos;s
                been stuck.
              </p>
              <p>
                As a Certified Christian Trauma Care Provider, I can incorporate
                faith into our work when that&apos;s meaningful to you — and I warmly
                respect and welcome clients of every spiritual background.
              </p>
              <p className="border-l-4 border-coral/50 pl-5 font-serif text-xl italic text-ocean-deep">
                My goal is to help you find peace, emotionally and physically, by
                getting to the core issue.
              </p>
            </Reveal>

            <Reveal delay={80} className="mt-12">
              <h2 className="font-serif text-2xl font-semibold text-ocean-deep">
                Ways we might work together
              </h2>
              <div className="mt-6 flex flex-wrap gap-3">
                {MODALITIES.map((m) => (
                  <span
                    key={m}
                    className="rounded-full border border-shell-200 bg-white px-4 py-2 text-sm text-ink/75"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* sidebar */}
          <aside className="lg:col-span-5 lg:pl-6">
            <div className="space-y-6">
              <Reveal className="card-soft p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
                    <BadgeCheck className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                    Credentials
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {CREDENTIALS.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-sm text-ink/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                      {c}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={70} className="card-soft p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
                    <GraduationCap className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                    Education
                  </h3>
                </div>
                <ul className="mt-5 space-y-4 text-sm text-ink/80">
                  <li>
                    <p className="font-semibold text-ocean-deep">
                      M.S. Social Work
                    </p>
                    <p className="text-ink/60">University of Texas at Arlington</p>
                  </li>
                  <li>
                    <p className="font-semibold text-ocean-deep">B.S. Psychology</p>
                    <p className="text-ink/60">University of Houston</p>
                  </li>
                </ul>
              </Reveal>

              <Reveal delay={140} className="card-soft p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
                    <Users className="h-6 w-6" />
                  </span>
                  <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                    Affiliations
                  </h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {AFFILIATIONS.map((a) => (
                    <li key={a} className="flex items-start gap-3 text-sm text-ink/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-coral" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={200} className="card-soft overflow-hidden p-0">
                <div className="bg-ocean p-7 text-shell-50">
                  <Heart className="h-7 w-7 text-coral-light" />
                  <p className="mt-4 font-serif text-lg font-medium leading-snug text-white">
                    Clients I&apos;m honored to serve
                  </p>
                  <p className="mt-3 text-sm text-shell-100/80">
                    Teens (16+) and adults, individuals and couples, military &
                    veterans, first responders, and the LGBTQIA+ community.
                  </p>
                  <Link href="/contact" className="btn-coral mt-5 w-full">
                    Reach Out <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      <CTASection
        title="Let's take the first step together"
        text="If anything here resonated, I'd be honored to hear from you. Reaching out is the bravest part — and you don't have to have the words figured out."
      />
    </>
  );
}
