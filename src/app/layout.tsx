import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghisuh — Full-Stack Developer",
  description:
    "Full-stack developer building clean, fast web apps with strong backend fundamentals. Seeking SWE internships.",

  openGraph: {
    title: "Ghisuh — Full-Stack Developer",
    description:
      "Portfolio showcasing full-stack projects, backend APIs, and engineering-focused systems.",
    url: "https://gnaportfolio.vercel.app",
    siteName: "Ghisuh Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ghisuh — Full-Stack Developer",
    description:
      "Full-stack projects, backend APIs, and engineering depth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
