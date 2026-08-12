import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Ghisuh Na | Full-Stack Software Engineer",
  description:
    "Computer Science student at UC Santa Cruz building full-stack applications with React, TypeScript, APIs, PostgreSQL, and modern backend technologies.",
  openGraph: {
    title: "Ghisuh Na | Full-Stack Software Engineer",
    description:
      "Computer Science student at UC Santa Cruz building full-stack applications with React, TypeScript, APIs, PostgreSQL, and modern backend technologies.",
    url: "https://gnaportfolio.vercel.app",
    siteName: "Ghisuh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghisuh Na | Full-Stack Software Engineer",
    description:
      "Full-stack applications built with React, TypeScript, APIs, PostgreSQL, and modern backend technologies.",
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
