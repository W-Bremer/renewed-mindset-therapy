import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/site";
import Reveal from "./Reveal";

export default function CTASection({
  title = "Ready to take the first step?",
  text = "Reaching out is often the hardest part. When you're ready, Tiffany would be honored to walk alongside you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ocean py-20 text-shell-50 sm:py-28">
      {/* organic background flourishes */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sage/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-coral/20 blur-3xl" />
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-sage-light">
            <span className="h-px w-8 bg-sage-light/60" />
            Renewed Mindset Therapy
          </p>
          <h2 className="mt-5 font-serif text-3xl font-semibold text-white sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-shell-100/80">{text}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn-coral group">
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href={BUSINESS.phoneHref} className="btn-ghost-light">
              <Phone className="h-4 w-4" />
              {BUSINESS.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
