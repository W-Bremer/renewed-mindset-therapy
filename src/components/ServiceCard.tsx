import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="card-soft group flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:shadow-ocean/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={`${service.shortName} at Renewed Mindset Therapy in Mansfield, TX`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-shell-50/90 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-ocean">
          {service.eyebrow}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-serif text-xl font-semibold text-ocean-deep">
          {service.shortName}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
          {service.intro.length > 150
            ? service.intro.slice(0, 147).trimEnd() + "…"
            : service.intro}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-coral-dark">
          Learn more
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
