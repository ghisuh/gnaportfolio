export type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl: string;
};

export const projects: Project[] = [
  {
    title: "Production Full-Stack App",
    description:
      "Full-stack app with auth, Postgres, CRUD, search/filtering, and deployment.",
    tech: ["Next.js", "TypeScript", "Postgres", "Prisma", "Auth.js"],
    liveUrl: "https://your-live-demo.com",
    repoUrl: "https://github.com/ghisuh/your-repo",
  },
  {
    title: "Backend / API Project",
    description:
      "REST API with validation, rate limiting, caching, and OpenAPI docs.",
    tech: ["Fastify", "TypeScript", "Postgres", "Redis", "OpenAPI"],
    repoUrl: "https://github.com/ghisuh/your-repo",
  },
  {
    title: "Engineering Depth Project",
    description:
      "Focused system component with benchmarks + trade-offs documented.",
    tech: ["TypeScript", "Testing", "Systems"],
    repoUrl: "https://github.com/ghisuh/your-repo",
  },
];
