import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./portfolio.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghisuh Na | Systems & Software Engineer",
  description:
    "Computer Science student at UC Santa Cruz building systems software, backend infrastructure, and full-stack applications in C, C++, Python, and TypeScript.",
  openGraph: {
    title: "Ghisuh Na | Systems & Software Engineer",
    description:
      "Computer Science student at UC Santa Cruz building systems software, backend infrastructure, and full-stack applications in C, C++, Python, and TypeScript.",
    url: "https://gnaportfolio.vercel.app",
    siteName: "Ghisuh Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ghisuh Na | Systems & Software Engineer",
    description:
      "Systems software, backend infrastructure, and full-stack applications in C, C++, Python, and TypeScript.",
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
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
