import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  ShieldCheck,
  HeartHandshake,
  Brain,
  Sparkles,
  MapPin,
  Quote,
  Check,
} from "lucide-react";
import { BUSINESS, SERVICES, CREDENTIALS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import WaveDivider from "@/components/WaveDivider";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  const featured = SERVICES.filter((s) => s.featured);

  return (
    <>
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-shell-100 via-shell-50 to-shell-50 pt-28 pb-12 sm:pt-36">
        <div className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-sage/15 blur-3xl" />
        <div className="absolute -left-24 top-52 h-80 w-80 rounded-full bg-coral/10 blur-3xl" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-sage" />
                EMDR Certified Therapist · Mansfield, TX
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.05] text-ocean-deep sm:text-6xl lg:text-[4rem]">
                Shift from{" "}
                <span className="relative whitespace-nowrap text-coral-dark">
                  surviving
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2 8c40-6 158-6 196 0"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-coral/50"
                    />
                  </svg>
                </span>{" "}
                to thriving.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink/75">
                Specialized EMDR, trauma, and anxiety therapy that helps your mind,
                heart, and body finally heal. Compassionate, evidence-based care
                with {BUSINESS.title} — in person in Mansfield or online across
                Texas.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-coral group">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/services/emdr-therapy" className="btn-outline">
                  Explore EMDR Therapy
                </Link>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-shell-200 pt-8">
                {[
                  { n: "16+", l: "Years of practice" },
                  { n: "EMDR", l: "Certified Therapist™" },
                  { n: "100%", l: "Trauma-informed care" },
                ].map((s) => (
                  <div key={s.l}>
                    <dt className="font-serif text-3xl font-semibold text-ocean">
                      {s.n}
                    </dt>
                    <dd className="mt-1 text-xs leading-snug text-ink/60">{s.l}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={200} className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 -z-10 rounded-[2.75rem] bg-gradient-to-br from-sage/30 to-coral/20 blur-2xl" />
              <div className="overflow-hidden rounded-[2.5rem] border-8 border-white shadow-2xl shadow-ocean/20">
                <Image
                  src="/images/calm6.jpg"
                  alt="A wooden path leading through coastal dunes to a calm ocean — the journey from surviving to thriving"
                  width={900}
                  height={1100}
                  className="aspect-[4/5] w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 animate-drift rounded-3xl border border-shell-200 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:-left-10">
                <p className="font-serif text-lg font-semibold text-ocean-deep">
                  Tiffany Mylett, LCSW-S
                </p>
                <p className="text-xs font-medium uppercase tracking-widest text-sage-dark">
                  EMDR Certified Therapist™
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== TRUST STRIP ===================== */}
      <section className="border-y border-shell-200 bg-white/60">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-6 text-center text-xs font-semibold uppercase tracking-widest text-ink/50 sm:text-sm">
          <span>EMDRIA Certified</span>
          <span className="text-coral">•</span>
          <span>HeartMath® Practitioner</span>
          <span className="text-coral">•</span>
          <span>Clinical Supervisor</span>
          <span className="text-coral">•</span>
          <span>Christian Trauma Care</span>
          <span className="text-coral">•</span>
          <span>Texas Telehealth</span>
        </div>
      </section>

      {/* ===================== WELCOME / IS THIS YOU ===================== */}
      <section className="relative py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-sage" />A different kind of therapy
            </p>
            <h2 className="mt-5 font-serif text-3xl font-semibold text-ocean-deep sm:text-4xl">
              You&apos;ve been carrying this for a long time.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/75">
              <p>
                Maybe the anxiety hums under everything. Maybe a memory still
                hijacks your body when you least expect it. Maybe you&apos;re doing
                &quot;fine&quot; on the outside but exhausted underneath.
              </p>
              <p>
                Therapy here is a collaborative process to heal your{" "}
                <span className="font-semibold text-ocean">
                  mind, heart, and body
                </span>{" "}
                — addressing both the symptoms you feel today and the root cause
                underneath. You won&apos;t just learn to cope. You&apos;ll heal.
              </p>
            </div>
            <Link
              href="/about"
              className="link-underline mt-7"
            >
              Meet Tiffany <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={120} className="grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: Brain,
                t: "Root-cause focused",
                d: "We go beyond symptom management to resolve what's actually driving your distress.",
              },
              {
                icon: ShieldCheck,
                t: "Safety first, always",
                d: "A calm, grounded space where deep healing never means being re-traumatized.",
              },
              {
                icon: Sparkles,
                t: "Evidence-based",
                d: "EMDR, CBT, somatic work, and HeartMath® biofeedback — proven, not trendy.",
              },
              {
                icon: HeartHandshake,
                t: "Truly personalized",
                d: "No two plans look alike. Your care is built around your story and goals.",
              },
            ].map((f, i) => (
              <div
                key={f.t}
                className={`card-soft p-7 ${i % 2 === 1 ? "sm:translate-y-6" : ""}`}
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-serif text-lg font-semibold text-ocean-deep">
                  {f.t}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{f.d}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="relative bg-shell-100 py-20 sm:py-28">
        <WaveDivider className="absolute -top-px left-0 rotate-180" fill="#f5eee2" />
        <div className="container-x relative">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center">
              <span className="h-px w-8 bg-sage" />
              How Tiffany can help
            </p>
            <h2 className="mt-5 font-serif text-3xl font-semibold text-ocean-deep sm:text-5xl">
              Specialized therapy services
            </h2>
            <p className="mt-5 text-lg text-ink/70">
              Focused, evidence-based care for the things weighing on you most —
              all offered in Mansfield and online across Texas.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link href="/services" className="btn-primary group">
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== EMDR FEATURE ===================== */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-ocean/15 to-sage/20 blur-2xl" />
            <div className="overflow-hidden rounded-[2.25rem] border-8 border-white shadow-2xl shadow-ocean/15">
              <Image
                src="/images/emdr.jpg"
                alt="Ocean waves representing the calm reached through EMDR therapy in Mansfield, TX"
                width={900}
                height={760}
                className="aspect-[6/5] w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow">
                <span className="h-px w-8 bg-sage" />
                The specialty
              </p>
              <h2 className="mt-5 font-serif text-3xl font-semibold text-ocean-deep sm:text-4xl">
                EMDR: helping your brain finish healing
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                When something overwhelming happens, the memory can get
                &quot;stuck&quot; — frozen with its original images, beliefs, and
                body sensations. EMDR helps your brain reprocess it, so it becomes
                something that <em>happened</em> rather than something that keeps
                happening.
              </p>
              <ul className="mt-7 space-y-3">
                {[
                  "Backed by 26+ randomized controlled studies",
                  "Recommended in the VA/DoD Clinical Practice Guideline",
                  "Effective for trauma, anxiety, panic, grief & more",
                  "You don't have to relive every painful detail",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral-dark">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/services/emdr-therapy" className="link-underline mt-8">
                How EMDR works <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ===================== QUOTE ===================== */}
      <section className="relative overflow-hidden bg-ocean-deep py-20 text-shell-50 sm:py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-prose relative text-center">
          <Reveal>
            <Quote className="mx-auto h-10 w-10 text-coral-light" />
            <p className="mt-6 font-serif text-2xl font-medium leading-snug text-white sm:text-3xl">
              &ldquo;My goal is to help you find peace, emotionally and physically,
              by getting to the core issue.&rdquo;
            </p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-sage-light">
              — Tiffany Mylett, LCSW-S
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== ABOUT TEASER ===================== */}
      <section className="py-20 sm:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              <div className="overflow-hidden rounded-[2.25rem] border-8 border-white shadow-2xl shadow-ocean/15">
                <Image
                  src="/images/about.jpg"
                  alt="Sunrise over the ocean — renewal and hope at Renewed Mindset Therapy"
                  width={700}
                  height={900}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="card-soft absolute -bottom-7 -right-4 max-w-[14rem] p-5 sm:-right-10">
                <p className="font-serif text-sm font-semibold text-ocean-deep">
                  &ldquo;To help you feel safe, secure, and seen.&rdquo;
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:col-span-7">
            <p className="eyebrow">
              <span className="h-px w-8 bg-sage" />
              About Tiffany
            </p>
            <h2 className="mt-5 font-serif text-3xl font-semibold text-ocean-deep sm:text-4xl">
              A steady, compassionate guide through hard seasons
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Tiffany Mylett is a Licensed Clinical Social Worker &amp; Supervisor
              who has spent her career walking alongside people as they process
              life&apos;s hardest moments. She blends deep clinical training with
              genuine warmth — creating a space where you feel understood from the
              very first session.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {CREDENTIALS.slice(0, 4).map((c) => (
                <div key={c} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ocean/10 text-ocean">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm text-ink/80">{c}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-outline mt-9">
              Read Tiffany&apos;s story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ===================== LOCAL / AREA ===================== */}
      <section className="relative bg-shell-100 py-20 sm:py-24">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ocean shadow-sm">
              <MapPin className="h-4 w-4 text-coral" /> Serving Mansfield & DFW
            </span>
            <h2 className="mt-6 font-serif text-3xl font-semibold text-ocean-deep sm:text-4xl">
              Therapy in Mansfield, Texas — and online statewide
            </h2>
            <p className="mt-5 text-lg text-ink/70">
              Renewed Mindset Therapy welcomes clients from Mansfield and across the
              Dallas–Fort Worth metroplex, with secure telehealth available to
              anyone in Texas.
            </p>
          </Reveal>
          <Reveal delay={100} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
            {BUSINESS.serviceAreas.slice(0, 7).map((a) => (
              <span
                key={a}
                className="rounded-full border border-shell-200 bg-white px-5 py-2 text-sm font-medium text-ink/70"
              >
                {a}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
