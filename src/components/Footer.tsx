import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Printer } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative bg-ocean-deep text-shell-100">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${BUSINESS.name} logo`}
              width={48}
              height={48}
              className="h-11 w-11 object-contain brightness-0 invert"
            />
            <span className="font-serif text-lg font-semibold text-white">
              Renewed Mindset
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-shell-100/70">
            Specialized EMDR, trauma, and anxiety therapy in Mansfield, TX. Helping
            you shift from surviving to thriving.
          </p>
          <p className="mt-5 text-xs leading-relaxed text-shell-100/50">
            {BUSINESS.title} · {BUSINESS.role}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-coral-light">
            Services
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-shell-100/75 transition-colors hover:text-white"
                >
                  {s.navName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-coral-light">
            Explore
          </h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { name: "About Tiffany", href: "/about" },
              { name: "Fees & Insurance", href: "/fees" },
              { name: "FAQs", href: "/faqs" },
              { name: "Therapy Toolkit", href: "/resources" },
              { name: "Contact", href: "/contact" },
              { name: "Client Portal", href: BUSINESS.portal },
            ].map((l) => (
              <li key={l.name}>
                <Link
                  href={l.href}
                  className="text-shell-100/75 transition-colors hover:text-white"
                >
                  {l.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-coral-light">
            Visit & Contact
          </h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" />
              <span className="text-shell-100/75">{BUSINESS.address.full}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" />
              <a
                href={BUSINESS.phoneHref}
                className="text-shell-100/75 transition-colors hover:text-white"
              >
                {BUSINESS.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Printer className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" />
              <span className="text-shell-100/75">Fax: {BUSINESS.fax}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" />
              <a
                href={BUSINESS.emailHref}
                className="break-all text-shell-100/75 transition-colors hover:text-white"
              >
                {BUSINESS.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sage-light" />
              <span className="text-shell-100/75">
                Tue–Thu 9–3 · Fri 9–12
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-shell-100/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
          </p>
          <p>
            In-person in Mansfield · Telehealth across Texas. Serving the DFW
            metroplex.
          </p>
        </div>
      </div>
    </footer>
  );
}
