import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kibret.me"),
  title: "Kibret Guesh Bahta — Bringing You Tomorrow",
  description:
    "Full-stack developer (React, Next.js, Node.js, PostgreSQL/Prisma, MongoDB) with hands-on remote work experience and an enterprise networking background. Based in Addis Ababa, Ethiopia — open to any timezone.",
  openGraph: {
    title: "Kibret Guesh Bahta — Bringing You Tomorrow",
    description:
      "Full-stack developer with remote work experience and an enterprise networking background. Open to any timezone.",
    url: "https://kibret.me",
    siteName: "Kibret Guesh Bahta",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kibret Guesh Bahta — Bringing You Tomorrow",
    description:
      "Full-stack developer with remote work experience and an enterprise networking background.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
