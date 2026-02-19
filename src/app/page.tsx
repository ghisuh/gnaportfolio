import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const stackIcons = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Postgres", slug: "postgresql" },
  { name: "Prisma", slug: "prisma" },
  { name: "Redis", slug: "redis" },
  { name: "Fastify", slug: "fastify" },
  { name: "Vercel", slug: "vercel" },
  { name: "Docker", slug: "docker" },
  { name: "GitHub", slug: "github" },
  { name: "Figma", slug: "figma" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero-bleed">
        <div className="hero-bleed__bg" aria-hidden="true" />
        <div className="hero-bleed__blob" aria-hidden="true" />
        <div className="hero-panel">
          <div className="hero-panel__content">
          <p className="hero-panel__kicker">Full-stack developer</p>

          <h1 className="hero-panel__title">
            <span className="hero-panel__name">Ghisuh</span>
            <span className="hero-panel__headline">
              Building calm, focused software.
            </span>
          </h1>

          <p className="hero-panel__mission">
            I build clean, fast web apps with strong backend fundamentals.
            Currently looking for SWE internships.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild className="hero-cta hero-cta--primary">
              <a
                href="https://github.com/ghisuh"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              className="hero-cta hero-cta--ghost"
            >
              <a
                href="https://www.linkedin.com/in/ghisuh-na-b70b8a207/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="hero-cta hero-cta--ghost"
            >
              <a href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-12 sm:pt-16">

        {/* PROJECTS */}
        <section className="space-y-6" id="projects">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Projects
            </h2>
            <p className="text-sm text-muted-foreground">
              Three projects that show full-stack ability, backend fundamentals,
              and engineering depth.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <div className="stack-marquee mt-4">
            <div className="stack-marquee__track">
              {[...stackIcons, ...stackIcons].map((tool, index) => (
                <div className="stack-marquee__item" key={`${tool.slug}-${index}`}>
                  <img
                    src={`https://cdn.simpleicons.org/${tool.slug}`}
                    alt=""
                    className="stack-marquee__icon"
                    loading="lazy"
                  />
                  <span className="stack-marquee__label">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* ABOUT */}
        <section className="space-y-6" id="about">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>
          <div className="about-panel">
            <div className="about-panel__profile">
              <div className="about-panel__photo-wrap">
                <Image
                  src="/about-headshot.jpg.jpeg"
                  alt="Portrait of Ghisuh"
                  fill
                  className="about-panel__photo"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <h3 className="about-panel__name">Ghisuh Na</h3>
              <p className="about-panel__role">
                Full-Stack Engineer (Next.js + TypeScript)
              </p>
            </div>

            <div className="about-panel__copy">
              <p>
                <strong>I build full-stack products that are clean and dependable.</strong>{" "}
                I focus on the details that matter: clear architecture, readable
                code, and interfaces that feel fast and intentional.
              </p>
              <p>
                <strong>I ship v1 fast and improve through tight iteration.</strong>{" "}
                I like working across the stack with typed APIs, solid data
                models, and practical tooling that keeps delivery consistent.
              </p>
              <p>
                <strong>My approach is simple: build for clarity first.</strong>{" "}
                When complexity grows, I reduce it early so products stay easy
                to use, easy to maintain, and ready to scale.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* CONTACT */}
        <section className="space-y-4" id="contact">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Contact
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            Let&apos;s build something.
          </h2>
          <p className="text-sm text-muted-foreground">
            Email me and I&apos;ll get back fast.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href="mailto:ghisuh1@gmail.com">Email me</a>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
}
