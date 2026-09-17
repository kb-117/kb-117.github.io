import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kibret.me"),
  title: "Kibret Guesh Bahta — Full-Stack Developer",
  description:
    "Full-stack developer (React, Next.js, Node.js, PostgreSQL/Prisma, MongoDB) with hands-on remote work experience and an enterprise networking background. Based in Addis Ababa, Ethiopia — open to any timezone.",
  openGraph: {
    title: "Kibret Guesh Bahta — Full-Stack Developer",
    description:
      "Full-stack developer with remote work experience and an enterprise networking background. Open to any timezone.",
    url: "https://kibret.me",
    siteName: "Kibret Guesh Bahta",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Kibret Guesh Bahta — Full-Stack Developer",
    description:
      "Full-stack developer with remote work experience and an enterprise networking background. Open to any timezone.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
