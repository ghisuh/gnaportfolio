import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
  <>
    <Navbar />
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* HERO */}
      <section className="space-y-4">
        <p className="text-sm text-muted-foreground">Full-Stack Developer</p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m Ghisuh.
        </h1>

        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          I build clean, fast web apps with strong backend fundamentals. I&apos;m
          currently looking for SWE internships.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <a href="https://github.com/ghisuh" target="_blank" rel="noreferrer">
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
      </section>

      <Separator className="my-12" />

      {/* PROJECTS */}
      <section className="space-y-6" id="projects">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Three projects that show full-stack ability, backend fundamentals,
            and engineering depth.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* ABOUT */}
      <section className="space-y-3" id="about">
        <h2 className="text-2xl font-semibold tracking-tight">About</h2>
        <p className="max-w-3xl text-sm text-muted-foreground">
          I like building products end-to-end: clean UI, thoughtful APIs, and
          reliable data models. I focus on readable code, strong fundamentals,
          and shipping.
        </p>
      </section>

      <Separator className="my-12" />

      {/* CONTACT */}
      <section className="space-y-3" id="contact">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
        <p className="text-sm text-muted-foreground">
          Email:{" "}
          <a className="underline" href="mailto:YOUR_EMAIL@example.com">
            ghisuh1@gmail.com
          </a>
        </p>
      </section>
    </main>
  </>  
  );
}
