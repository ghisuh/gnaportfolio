import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";

const stack = [
  {
    title: "Frontend",
    description: "Interface systems with crisp motion and layout discipline.",
    items: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
  },
  {
    title: "Backend",
    description: "APIs built for clarity, speed, and long-term reliability.",
    items: ["Node.js", "Postgres", "Prisma", "Redis", "Fastify"],
  },
  {
    title: "Tooling",
    description: "Delivery and observability from local to production.",
    items: ["Vercel", "GitHub", "Docker", "Playwright", "Figma"],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-24 pt-16 sm:pt-20">
        {/* HERO */}
        <section className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Full-stack developer
            </p>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
              <span className="block font-[var(--font-instrument-serif)]">
                Ghisuh
              </span>
              <span className="block text-gradient">
                Building calm, focused software.
              </span>
            </h1>

            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              I build clean, fast web apps with strong backend fundamentals.
              Currently looking for SWE internships.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild>
                <a
                  href="https://github.com/ghisuh"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Button>

              <Button asChild variant="outline">
                <a
                  href="https://www.linkedin.com/in/ghisuh-na-b70b8a207/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </Button>

              <Button asChild variant="ghost">
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  Resume
                </a>
              </Button>
            </div>
          </div>

          <div className="space-y-6 border border-border p-6 text-sm text-muted-foreground">
            <p className="text-xs uppercase tracking-[0.3em] text-foreground">
              Focus
            </p>
            <p>
              End-to-end product work with an emphasis on API clarity, stable
              data layers, and crisp UI systems.
            </p>
            <p>
              Available for internships and early-stage product teams who want a
              reliable builder.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* STACK */}
        <section className="space-y-6" id="stack">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Stack
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              The systems I&apos;m sharpest with.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {stack.map((group) => (
              <div
                key={group.title}
                className="border border-border p-5 shadow-none"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  {group.title}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {group.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="stack-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* PROJECTS */}
        <section className="space-y-6" id="projects">
          <div className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Projects
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Selected work.
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
        </section>

        <Separator className="my-12" />

        {/* ABOUT */}
        <section className="space-y-6" id="about">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            About
          </p>
          <div className="border border-border p-6">
            <h2 className="text-3xl font-semibold tracking-tight">
              I like clean structure.
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
              I like building products end-to-end: clean UI, thoughtful APIs,
              and reliable data models. I focus on readable code, strong
              fundamentals, and shipping.
            </p>
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
