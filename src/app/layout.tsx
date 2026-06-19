import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { JsonLd, localBusinessSchema, personSchema } from "@/lib/jsonld";
import { SITE_URL, BUSINESS } from "@/lib/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "EMDR & Trauma Therapy in Mansfield, TX | Renewed Mindset Therapy",
    template: "%s | Renewed Mindset Therapy",
  },
  description:
    "Renewed Mindset Therapy offers certified EMDR, trauma, and anxiety therapy in Mansfield, TX with Tiffany Mylett, LCSW-S. In-person & Texas telehealth. Shift from surviving to thriving.",
  keywords: [
    "EMDR therapy Mansfield TX",
    "trauma therapist Mansfield",
    "anxiety therapy Mansfield TX",
    "PTSD treatment Mansfield",
    "Tiffany Mylett LCSW",
    "Christian counseling Mansfield TX",
    "EMDR consultation",
  ],
  authors: [{ name: "Tiffany Mylett, LCSW-S" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: "EMDR & Trauma Therapy in Mansfield, TX | Renewed Mindset Therapy",
    description:
      "Certified EMDR, trauma, and anxiety therapy in Mansfield, TX with Tiffany Mylett, LCSW-S.",
    images: [
      { url: "/images/calm6.jpg", width: 1200, height: 800, alt: "Renewed Mindset Therapy — EMDR & trauma therapy in Mansfield, TX" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMDR & Trauma Therapy in Mansfield, TX | Renewed Mindset Therapy",
    description:
      "Certified EMDR, trauma, and anxiety therapy in Mansfield, TX with Tiffany Mylett, LCSW-S.",
    images: ["/images/calm6.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="font-sans">
        <JsonLd data={[localBusinessSchema(), personSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
