export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  repoPending?: boolean;
  featured?: boolean;
  architecture?: string[];
  engineeringFocus?: string[];
};

export const projects: Project[] = [
  {
    title: "Concurrent HTTP/1.1 Server",
    category: "Systems engineering",
    description:
      "Built a multithreaded HTTP/1.1 server in C with a configurable pthread worker pool and bounded work queue for concurrent client connections. Designed URI-scoped reader-writer synchronization with a hash-indexed lock registry, allowing concurrent reads while serializing conflicting writes. Implemented GET/PUT handling, POSIX file operations, HTTP error handling, and mutex-protected audit logging.",
    tech: ["C", "pthreads", "POSIX", "Linux"],
    featured: true,
    repoPending: true,
    architecture: [
      "Listener",
      "Work Queue",
      "Worker Thread Pool",
      "Request Handler",
      "URI-specific Reader/Writer Lock",
      "File System",
    ],
    engineeringFocus: [
      "Concurrency and synchronization",
      "Thread-pool request dispatch",
      "Resource-level locking",
      "POSIX file operations",
      "HTTP request/response handling",
      "Thread-safe audit logging",
    ],
  },
  {
    title: "Weather API Service",
    category: "Backend infrastructure",
    description:
      "Production-style backend service with API-key authentication, third-party weather-provider normalization, Redis caching, request logging, persistent storage, and OpenAPI documentation.",
    tech: ["Fastify", "TypeScript", "PostgreSQL", "Redis", "Docker", "OpenAPI"],
    repoUrl: "https://github.com/ghisuh/weather_api_service",
    engineeringFocus: [
      "API design",
      "Authentication and access control",
      "Caching",
      "Provider abstraction",
      "Observability/request logging",
      "Reproducible local infrastructure",
    ],
  },
  {
    title: "Micro-Fiverr",
    category: "Full-stack product",
    description:
      "Built a full-stack freelance marketplace where users can register, create service listings, browse gigs, and leave reviews. Implemented credential-based authentication and protected routes, modeled users, gigs, and reviews in PostgreSQL with Prisma, and developed application routes for account registration, gig creation, and dynamic marketplace data.",
    tech: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "NextAuth.js",
    ],
    liveUrl: "https://micro-fiverr-rrws.vercel.app/",
    repoUrl: "https://github.com/ghisuh/Micro-Fiverr",
  },
  {
    title: "Clean the Streets",
    category: "Civic technology",
    description:
      "Collaborated in a team of three to build a location-based civic reporting platform for potholes and street hazards. Designed a PostgreSQL data model for geolocated reports and status tracking, developed RESTful endpoints for creating, retrieving, and updating reports, and built an interface for browsing community issues and identifying problem areas.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    repoUrl: "https://github.com/theohudson24/cleanthestreets",
  },
];
