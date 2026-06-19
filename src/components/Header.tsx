"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, Phone } from "lucide-react";
import { BUSINESS, SERVICES } from "@/lib/site";

const mainNav = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasMenu: true },
  { name: "Fees & Insurance", href: "/fees" },
  { name: "FAQs", href: "/faqs" },
  { name: "Resources", href: "/resources" },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-shell-50/90 shadow-sm shadow-ocean/5 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" aria-label={BUSINESS.name}>
          <Image
            src="/images/logo.png"
            alt={`${BUSINESS.name} logo`}
            width={48}
            height={48}
            className="h-11 w-11 object-contain"
            priority
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span className="font-serif text-lg font-semibold text-ocean-deep">
              Renewed Mindset
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-sage-dark">
              Therapy · Mansfield, TX
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.hasMenu ? (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition-colors hover:text-ocean"
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4 opacity-60" />
                </Link>
                <div
                  className={`absolute left-1/2 top-full w-[22rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                    servicesOpen
                      ? "visible translate-y-0 opacity-100"
                      : "invisible -translate-y-1 opacity-0"
                  }`}
                >
                  <div className="overflow-hidden rounded-3xl border border-shell-200 bg-white/95 p-2 shadow-xl shadow-ocean/10 backdrop-blur">
                    {SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="flex flex-col rounded-2xl px-4 py-2.5 transition-colors hover:bg-shell-100"
                      >
                        <span className="text-sm font-semibold text-ocean-deep">
                          {s.navName}
                        </span>
                        <span className="text-xs text-ink/60">{s.eyebrow}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-ocean ${
                  pathname === item.href ? "text-ocean" : "text-ink/80"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 text-sm font-semibold text-ocean transition-colors hover:text-coral-dark xl:flex"
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
          <Link href="/contact" className="btn-coral hidden sm:inline-flex">
            Book a Consultation
          </Link>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ocean/20 text-ocean lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-y-auto bg-shell-50 lg:hidden ${
          mobileOpen ? "max-h-[calc(100vh-5rem)]" : "max-h-0"
        } transition-[max-height] duration-300`}
      >
        <nav className="container-x flex flex-col gap-1 pb-8 pt-2">
          {mainNav.map((item) =>
            item.hasMenu ? (
              <div key={item.name} className="border-b border-shell-200/70 py-1">
                <button
                  onClick={() => setMobileServices((o) => !o)}
                  className="flex w-full items-center justify-between py-3 text-left text-base font-medium text-ink"
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileServices ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all ${
                    mobileServices ? "max-h-96 pb-2" : "max-h-0"
                  }`}
                >
                  <Link
                    href="/services"
                    className="block py-2 pl-4 text-sm font-semibold text-ocean"
                  >
                    All Services
                  </Link>
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block py-2 pl-4 text-sm text-ink/70"
                    >
                      {s.navName}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="border-b border-shell-200/70 py-3.5 text-base font-medium text-ink"
              >
                {item.name}
              </Link>
            )
          )}
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 py-3.5 text-base font-semibold text-ocean"
          >
            <Phone className="h-5 w-5" /> {BUSINESS.phone}
          </a>
          <Link href="/contact" className="btn-coral mt-3 w-full">
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
}
