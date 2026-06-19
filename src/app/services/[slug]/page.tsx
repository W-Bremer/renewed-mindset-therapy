import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Phone, MapPin } from "lucide-react";
import { SERVICES, BUSINESS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import {
  JsonLd,
  breadcrumbSchema,
  serviceSchema,
} from "@/lib/jsonld";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      images: [{ url: service.image }],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const svcSchema = serviceSchema(service.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.shortName, path: `/services/${service.slug}` },
          ]),
          ...(svcSchema ? [svcSchema] : []),
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-shell-100 to-shell-50 pt-32 pb-12 sm:pt-36">
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-sage/15 blur-3xl" />
        <div className="absolute -left-20 top-44 h-72 w-72 rounded-full bg-coral/10 blur-3xl" />
        <div className="container-x relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <nav className="flex items-center gap-2 text-xs font-medium text-ink/50">
                <Link href="/" className="hover:text-ocean">
                  Home
                </Link>
                <span>/</span>
                <Link href="/services" className="hover:text-ocean">
                  Services
                </Link>
                <span>/</span>
                <span className="text-ocean">{service.shortName}</span>
              </nav>
              <p className="eyebrow mt-6">
                <span className="h-px w-8 bg-sage" />
                {service.eyebrow}
              </p>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] text-ocean-deep sm:text-5xl">
                {service.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                {service.intro}
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/contact" className="btn-coral group">
                  Book a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <a href={BUSINESS.phoneHref} className="btn-outline">
                  <Phone className="h-4 w-4" />
                  {BUSINESS.phone}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-sage/25 to-coral/15 blur-2xl" />
            <div className="overflow-hidden rounded-[2.25rem] border-8 border-white shadow-2xl shadow-ocean/15">
              <Image
                src={service.image}
                alt={`${service.shortName} in Mansfield, TX, Renewed Mindset Therapy`}
                width={900}
                height={760}
                className="aspect-[6/5] w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          {/* main content */}
          <div className="lg:col-span-7">
            {service.body.map((block, i) => (
              <Reveal key={block.heading} delay={i * 60} className="mb-12">
                <h2 className="font-serif text-2xl font-semibold text-ocean-deep sm:text-3xl">
                  {block.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink/75">
                  {block.paragraphs.map((p, j) => (
                    <p key={j} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </Reveal>
            ))}

            {service.bullets && (
              <Reveal className="mt-4 rounded-4xl border border-shell-200 bg-shell-100/60 p-8">
                <h3 className="font-serif text-xl font-semibold text-ocean-deep">
                  {service.bullets.heading}
                </h3>
                <ol className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.bullets.items.map((item, i) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ocean text-xs font-semibold text-shell-50">
                        {i + 1}
                      </span>
                      <span className="text-ink/80">{item}</span>
                    </li>
                  ))}
                </ol>
              </Reveal>
            )}
          </div>

          {/* sidebar */}
          <aside className="lg:col-span-5 lg:pl-6">
            <div className="sticky top-28 space-y-6">
              <Reveal className="card-soft p-7">
                <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                  This may help if you&apos;re facing…
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.forYou.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-coral/15 text-coral-dark">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-ink/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {service.fee && (
                <Reveal delay={80} className="card-soft p-7">
                  <h3 className="font-serif text-lg font-semibold text-ocean-deep">
                    Investment
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {service.fee.map((f) => (
                      <li
                        key={f.label}
                        className="flex items-baseline justify-between gap-4 border-b border-shell-200/70 pb-3 last:border-0 last:pb-0"
                      >
                        <span className="text-sm text-ink/70">{f.label}</span>
                        <span className="font-serif text-lg font-semibold text-ocean">
                          {f.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/fees" className="link-underline mt-5 text-sm">
                    See fees & insurance <ArrowRight className="h-4 w-4" />
                  </Link>
                </Reveal>
              )}

              <Reveal delay={120} className="overflow-hidden rounded-4xl bg-ocean p-7 text-shell-50">
                <h3 className="font-serif text-lg font-semibold text-white">
                  Offered in Mansfield & online
                </h3>
                <p className="mt-3 flex items-start gap-2 text-sm text-shell-100/80">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" />
                  {BUSINESS.address.full}
                </p>
                <p className="mt-3 text-sm text-shell-100/80">
                  In-person sessions plus secure telehealth for anyone in Texas.
                </p>
                <Link href="/contact" className="btn-coral mt-5 w-full">
                  Get Started
                </Link>
              </Reveal>
            </div>
          </aside>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="border-t border-shell-200 bg-shell-100/60 py-16">
        <div className="container-x">
          <Reveal>
            <h2 className="font-serif text-2xl font-semibold text-ocean-deep">
              Explore other services
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <Link
                  href={`/services/${s.slug}`}
                  className="card-soft group flex h-full flex-col p-6 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-sage-dark">
                    {s.eyebrow}
                  </span>
                  <h3 className="mt-2 font-serif text-lg font-semibold text-ocean-deep">
                    {s.shortName}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-dark">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
