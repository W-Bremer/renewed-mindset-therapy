import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Printer, MonitorSmartphone } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { JsonLd, breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: {
    absolute:
      "Contact & Book a Consultation | Renewed Mindset Therapy, Mansfield TX",
  },
  description:
    "Contact Tiffany Mylett, LCSW-S at Renewed Mindset Therapy in Mansfield, TX. Call (682) 422-9140 or send a message to book a consultation. In-person & Texas telehealth.",
  alternates: { canonical: "/contact" },
};

const mapsQuery = encodeURIComponent(
  `${BUSINESS.name}, ${BUSINESS.address.full}`
);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <section className="relative overflow-hidden bg-gradient-to-b from-shell-100 to-shell-50 pt-36 pb-14">
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />
        <div className="container-x relative max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-sage" />
              Get in touch
            </p>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight text-ocean-deep sm:text-6xl">
              Let&apos;s begin
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/75">
              Reaching out is the hardest part, and the bravest. Send a message or
              call, and Tiffany will personally get back to you to talk about next
              steps.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="space-y-6">
              <div className="card-soft p-7">
                <h2 className="font-serif text-xl font-semibold text-ocean-deep">
                  Office & contact
                </h2>
                <ul className="mt-6 space-y-5">
                  <li className="flex gap-4">
                    <Icon><MapPin className="h-5 w-5" /></Icon>
                    <div>
                      <p className="font-semibold text-ocean-deep">Visit</p>
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ink/70 hover:text-ocean"
                      >
                        {BUSINESS.address.full}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Icon><Phone className="h-5 w-5" /></Icon>
                    <div>
                      <p className="font-semibold text-ocean-deep">Call</p>
                      <a
                        href={BUSINESS.phoneHref}
                        className="text-sm text-ink/70 hover:text-ocean"
                      >
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Icon><Mail className="h-5 w-5" /></Icon>
                    <div>
                      <p className="font-semibold text-ocean-deep">Email</p>
                      <a
                        href={BUSINESS.emailHref}
                        className="break-all text-sm text-ink/70 hover:text-ocean"
                      >
                        {BUSINESS.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <Icon><Printer className="h-5 w-5" /></Icon>
                    <div>
                      <p className="font-semibold text-ocean-deep">Fax</p>
                      <p className="text-sm text-ink/70">{BUSINESS.fax}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="card-soft p-7">
                <div className="flex items-center gap-3">
                  <Icon><Clock className="h-5 w-5" /></Icon>
                  <h2 className="font-serif text-xl font-semibold text-ocean-deep">
                    Office hours
                  </h2>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {BUSINESS.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between border-b border-shell-200/70 pb-2.5 text-sm last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-ink/80">{h.day}</span>
                      <span className="text-ink/60">{h.time}</span>
                    </li>
                  ))}
                  <li className="flex items-center justify-between pt-1 text-sm">
                    <span className="font-medium text-ink/80">Mon · Sat · Sun</span>
                    <span className="text-ink/50">Closed</span>
                  </li>
                </ul>
              </div>

              <div className="overflow-hidden rounded-4xl bg-ocean p-7 text-shell-50">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sage-light">
                    <MonitorSmartphone className="h-5 w-5" />
                  </span>
                  <h2 className="font-serif text-lg font-semibold text-white">
                    Online therapy across Texas
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-shell-100/80">
                  Can&apos;t make it to Mansfield? Secure, HIPAA-compliant telehealth
                  is available to any resident of Texas, same expert care, from the
                  comfort of home.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container-x">
          <Reveal className="overflow-hidden rounded-4xl border border-shell-200 shadow-sm">
            <iframe
              title={`Map to ${BUSINESS.name} in Mansfield, TX`}
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              width="100%"
              height="420"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full grayscale-[0.2]"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
      {children}
    </span>
  );
}
