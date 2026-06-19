"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/site";

const services = [
  "EMDR Therapy",
  "Trauma & PTSD",
  "Anxiety & Panic",
  "Individual Therapy",
  "Christian Counseling",
  "EMDR Consultation",
  "Not sure yet",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: services[0],
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New inquiry from ${form.name} — ${form.service}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested in: ${form.service}\n\nMessage:\n${form.message}`
    );
    window.location.href = `${BUSINESS.emailHref}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-soft flex flex-col items-center justify-center p-10 text-center">
        <CheckCircle2 className="h-14 w-14 text-sage" />
        <h3 className="mt-5 font-serif text-2xl font-semibold text-ocean-deep">
          Thank you for reaching out
        </h3>
        <p className="mt-3 max-w-sm text-ink/70">
          Your email draft is ready to send. If it didn&apos;t open
          automatically, you can reach Tiffany directly at{" "}
          <a href={BUSINESS.emailHref} className="font-semibold text-ocean">
            {BUSINESS.email}
          </a>
          .
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-2xl border border-shell-200 bg-white px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-ocean focus:outline-none focus:ring-2 focus:ring-ocean/20";

  return (
    <form onSubmit={handleSubmit} className="card-soft space-y-5 p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink/80">
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={update("name")}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink/80">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={update("phone")}
            className={inputClass}
            placeholder="(000) 000-0000"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink/80">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={update("email")}
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-semibold text-ink/80">
          I&apos;m interested in
        </label>
        <select
          id="service"
          value={form.service}
          onChange={update("service")}
          className={inputClass}
        >
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink/80">
          How can Tiffany help?
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update("message")}
          className={inputClass}
          placeholder="Share a little about what's bringing you in. No need to have the perfect words."
        />
      </div>
      <button type="submit" className="btn-coral w-full group">
        Send Message
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="text-center text-xs text-ink/50">
        This form opens your email app. Your information is never stored on this
        site.
      </p>
    </form>
  );
}
