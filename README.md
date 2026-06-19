# Renewed Mindset Therapy — Website

Marketing website for **Renewed Mindset Therapy**, the Mansfield, TX private practice of
**Tiffany Mylett, LCSW-S** — an EMDR Certified Therapist™ specializing in trauma, anxiety,
and panic treatment.

Built as an SEO-focused, conversion-oriented preview to help the practice rank for its
core services in Mansfield and the Dallas–Fort Worth metroplex.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS 3**
- **lucide-react** icons
- Fonts: **Fraunces** (display serif) + **Figtree** (sans) via `next/font`

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage |
| `/about` | About Tiffany — bio, credentials, modalities |
| `/services` | Services hub |
| `/services/emdr-therapy` | EMDR Therapy (primary SEO target) |
| `/services/trauma-therapy` | Trauma & PTSD |
| `/services/anxiety-therapy` | Anxiety & Panic |
| `/services/individual-therapy` | Individual Therapy |
| `/services/christian-counseling` | Faith-based Counseling |
| `/services/emdr-consultation` | EMDR Consultation (for clinicians) |
| `/fees` | Fees & Insurance |
| `/faqs` | FAQs (with FAQ schema) |
| `/resources` | Therapy toolkit + crisis resources |
| `/contact` | Contact form, hours, map |

## SEO

- Per-page `<title>`, meta description, canonical, and Open Graph tags
- JSON-LD: `MedicalBusiness` / `LocalBusiness`, `Person`, `MedicalTherapy`,
  `BreadcrumbList`, and `FAQPage`
- Auto-generated `sitemap.xml` and `robots.txt`
- Local keywords targeting "Mansfield, TX" and DFW service areas

> Update `SITE_URL` in `src/lib/site.ts` to the final production domain so canonical
> URLs and structured data resolve correctly.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Deploy

Optimized for Vercel — push to the connected GitHub repo and Vercel builds
automatically. No environment variables are required.
