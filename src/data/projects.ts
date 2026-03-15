export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "Micro Fiverr",
    description:
      "Full-stack freelance marketplace where users can create service listings, browse gigs, and leave reviews with secure authentication and protected routes.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
    ],
    liveUrl: "https://micro-fiverr-rrws.vercel.app/",
    repoUrl: "https://github.com/ghisuh/Micro-Fiverr",
  },
  {
    title: "Weather API Service",
    description:
      "Production-style weather API with API key authentication, third-party provider normalization, Redis caching, and request logging for usage analytics.",
    tech: [
      "Fastify",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "OpenAPI",
    ],
    repoUrl: "https://github.com/ghisuh/weather_api_service",
  },
  {
    title: "Clean the Streets",
    description:
      "Location-based civic issue reporting platform for potholes and street hazards, with geolocated reports, status tracking, and community issue browsing.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    repoUrl: "https://github.com/theohudson24/cleanthestreets",
  },
];
