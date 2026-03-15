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
              <a href="/ghisuh_resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </Button>
          </div>
        </div>
        </div>
      </section>

      <main className="w-full px-6 pb-24 pt-12 sm:px-8 sm:pt-16 lg:px-12">

        {/* PROJECTS */}
        <section className="section-shell space-y-6" id="projects">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              Projects
            </h2>
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
        <section className="section-shell space-y-6" id="about">
          <div className="about-feature">
            <div className="about-feature__photo-wrap">
              <Image
                src="/about-headshot.jpg.jpeg"
                alt="Portrait of Ghisuh"
                fill
                className="about-feature__photo"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>

            <div className="about-feature__content">
              <h2 className="about-feature__title">
                Design <span>Elevates</span>
                <br />
                Experience
              </h2>
              <p className="about-feature__copy">
                I am a full-stack engineer focused on building products that
                feel effortless and dependable. I care deeply about clean
                architecture, API clarity, and strong UI systems that support
                real user needs. I enjoy turning complex product ideas into
                clear flows, maintainable code, and reliable performance. My
                process is iterative and practical: ship, observe, refine, and
                keep improving until the experience is simple, scalable, and
                genuinely useful.
              </p>
            </div>
          </div>
        </section>

        <Separator className="my-12" />

        {/* CONTACT */}
        <section className="section-shell space-y-4" id="contact">
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
