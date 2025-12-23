import type { Metadata } from "next";
import { Instrument_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
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
        className={`${spaceGrotesk.variable} ${instrumentSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
