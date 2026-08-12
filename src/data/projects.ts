export type Project = {
  title: string;
  subtitle: string;
  category: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  architecture?: string[];
  engineeringFocus?: string[];
};

export const projects: Project[] = [
  {
    title: "Micro-Fiverr",
    subtitle: "Full-Stack Marketplace Platform",
    category: "Flagship project",
    description:
      "An end-to-end marketplace platform where users can create service listings, browse gigs, place orders, communicate through order messaging, manage delivery workflows, and leave reviews.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth.js"],
    featured: true,
    liveUrl: "https://micro-fiverr-rrws.vercel.app/",
    repoUrl: "https://github.com/ghisuh/Micro-Fiverr",
    engineeringFocus: [
      "Owned the interface, API layer, authentication, and relational database",
      "Built workflows for discovery, ordering, delivery, messaging, and reviews",
      "Designed PostgreSQL data models and backend functionality with Prisma",
      "Created a consistent experience across complex, multi-step workflows",
    ],
  },
  {
    title: "CleanTheStreets",
    subtitle: "Collaborative Civic Reporting Platform",
    category: "Three-person team project",
    description:
      "A collaborative web platform for submitting and managing reports of potholes and roadway damage through location-based user submissions.",
    tech: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    repoUrl: "https://github.com/theohudson24/cleanthestreets",
    engineeringFocus: [
      "Focused on backend functionality and relational data modeling",
      "Built API routes for structured report storage and retrieval",
      "Developed report submission and management workflows",
      "Coordinated interfaces with teammates across application layers",
    ],
  },
  {
    title: "Weather API Service",
    subtitle: "Backend Data & API Platform",
    category: "Backend engineering",
    description:
      "A backend service that retrieves, normalizes, caches, and serves external weather data through authenticated APIs.",
    tech: ["Fastify", "TypeScript", "PostgreSQL", "Redis", "Docker", "OpenAPI"],
    repoUrl: "https://github.com/ghisuh/weather_api_service",
    engineeringFocus: [
      "Built authenticated REST endpoints for programmatic weather access",
      "Normalized third-party provider data behind a consistent abstraction",
      "Added Redis caching to reduce redundant upstream requests",
      "Used PostgreSQL for persistent data, request logging, and usage tracking",
    ],
  },
  {
    title: "Concurrent HTTP/1.1 Server",
    subtitle: "Systems Programming Project",
    category: "Additional technical depth",
    description:
      "A multithreaded HTTP/1.1 server implemented in C with concurrent request processing, POSIX file operations, and URI-level synchronization.",
    tech: ["C", "Linux", "POSIX", "pthreads", "HTTP"],
    engineeringFocus: [
      "Configurable pthread worker pool and shared work queue",
      "GET and PUT handling with POSIX file I/O",
      "Reader-writer locking with URI-specific synchronization",
      "Thread-safe audit logging",
    ],
  },
];
