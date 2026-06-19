import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-shell-50 px-6 pt-20">
      <div className="text-center">
        <p className="font-serif text-7xl font-semibold text-sage">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold text-ocean-deep">
          This page drifted away
        </h1>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          The page you&apos;re looking for can&apos;t be found — but the path
          forward is still here.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline">
            Contact Tiffany
          </Link>
        </div>
      </div>
    </section>
  );
}
