import ProjectCard from "@/components/ProjectCard";
import Navbar from "@/components/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

const stackIcons = [
  { name: "Next.js", slug: "nextdotjs" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "Prisma", slug: "prisma" },
  { name: "Redis", slug: "redis" },
  { name: "Docker", slug: "docker" },
  { name: "Git", slug: "git" },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Fastify", "REST APIs", "Next.js API routes", "Authentication", "NextAuth.js"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "MySQL", "Prisma", "Redis", "SQL"],
  },
  {
    title: "Tools & Deployment",
    items: ["Git", "Docker", "Linux", "Vercel", "Railway", "Postman", "OpenAPI"],
  },
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "SQL", "C", "C++"],
  },
];

const experiences = [
  {
    role: "STEM Instructor",
    company: "Lavner Education",
    location: "Los Angeles, CA",
    period: "June 2026 - August 2026",
    meta: "Camp Tech Revolution at UCLA",
    bullets: [
      "Delivered hands-on programming and STEM instruction to elementary and middle school students in classroom and one-on-one environments.",
      "Set up and maintained classroom computers, software, and network connectivity while troubleshooting technical issues for students and staff.",
      "Communicated technical concepts clearly and adapted instruction to students with different levels of programming experience.",
    ],
  },
  {
    role: "Operations Intern",
    company: "FutureProof Labs",
    location: "California, United States",
    period: "October 2024 - November 2024",
    meta: "AI Program Strategy & Execution",
    bullets: [
      "Supported operations for an AI-focused hackathon centered on agentic workflows and Retrieval-Augmented Generation.",
      "Collaborated with teams rapidly prototyping applications using LLMs and modern automation tools.",
    ],
  },
];

const coursework = [
  "Principles of Computer Systems Design",
  "Computer Architecture",
  "Computer Systems & C Programming",
  "Data Structures & Algorithms",
  "Technical Writing & Communication",
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
            <div className="hero-panel__primary">
              <p className="hero-panel__kicker">
                <span aria-hidden="true" /> Computer Science @ UC Santa Cruz
              </p>

              <h1 className="hero-panel__title">
                <span className="hero-panel__name">Ghisuh Na</span>
                <span className="hero-panel__headline">
                  Full-Stack &amp; Product Software Engineering
                </span>
              </h1>

              <p className="hero-panel__mission">
                Computer Science student at UC Santa Cruz building polished,
                end-to-end applications with React, TypeScript, APIs, databases,
                and modern backend infrastructure.
              </p>

              <div className="hero-panel__actions">
                <Button asChild className="hero-cta hero-cta--primary">
                  <a href="#projects">View Projects</a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="hero-cta hero-cta--ghost"
                >
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
                  variant="ghost"
                  className="hero-cta hero-cta--ghost"
                >
                  <a href="/ghisuh_resume.pdf" target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </Button>
                <Button asChild variant="ghost" className="hero-cta hero-cta--ghost">
                  <a href="https://www.linkedin.com/in/ghisuh-na-b70b8a207/" target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <aside className="hero-focus" aria-label="Engineering focus">
              <p className="hero-focus__label">Current focus</p>
              <div className="hero-focus__list">
                <div><span>01</span><strong>React &amp; TypeScript interfaces</strong></div>
                <div><span>02</span><strong>APIs, authentication &amp; data</strong></div>
                <div><span>03</span><strong>End-to-end product workflows</strong></div>
              </div>
              <p className="hero-focus__note">
                Turning complex workflows into clear user experiences while owning the software behind them.
              </p>
            </aside>

            <div className="hero-panel__footer">
              <span>Open to software engineering internships</span>
              <span>React · TypeScript · PostgreSQL · APIs</span>
            </div>
          </div>
        </div>
      </section>

      <main className="portfolio-content">
        <section className="section-shell section-shell--narrow portfolio-section" id="projects">
          <div className="section-heading">
            <h2 className="section-heading__eyebrow">Selected Projects</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </section>

        <section className="section-shell section-shell--narrow portfolio-section portfolio-section--skills" id="skills">
          <div className="section-heading">
            <h2 className="section-heading__eyebrow">Skills</h2>
          </div>

          <div className="skills-stage">
            <div className="stack-marquee" aria-label="Technology stack">
              <div className="stack-marquee__track">
                {[...stackIcons, ...stackIcons].map((tool, index) => (
                  <div
                    className="stack-marquee__item"
                    key={`${tool.slug}-${index}`}
                    aria-hidden={index >= stackIcons.length}
                  >
                    {/* The icon CDN keeps brand marks current without bundling a large icon package. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://cdn.simpleicons.org/${tool.slug}/ffffff`}
                      alt=""
                      className="stack-marquee__icon"
                      loading="lazy"
                      width="28"
                      height="28"
                    />
                    <span className="stack-marquee__label">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <section key={group.title} className="skills-card">
                  <h3 className="skills-card__title">{group.title}</h3>
                  <div className="skills-card__items">
                    {group.items.map((item) => (
                      <Badge key={item} variant="outline" className="skills-card__badge">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--narrow portfolio-section" id="experience">
          <div className="section-heading">
            <h2 className="section-heading__eyebrow">Experience</h2>
          </div>

          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article key={`${experience.company}-${experience.role}`} className="experience-card">
                <span className="experience-card__index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="experience-card__header">
                  <div>
                    <h3 className="experience-card__role">{experience.role}</h3>
                    <p className="experience-card__company">{experience.company}</p>
                    {experience.meta && (
                      <p className="experience-card__meta">{experience.meta}</p>
                    )}
                  </div>
                  <div className="experience-card__aside">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>
                <ul className="experience-card__bullets">
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell section-shell--narrow portfolio-section" id="education">
          <div className="section-heading">
            <h2 className="section-heading__eyebrow">Education</h2>
          </div>

          <div className="education-card">
            <p className="education-card__mark">UCSC / 2027</p>
            <div className="education-card__top">
              <div>
                <h3 className="education-card__school">University of California, Santa Cruz</h3>
                <p className="education-card__degree">B.S. Computer Science, Expected June 2027</p>
              </div>
              <p className="education-card__honor">Dean&apos;s Honors — UC Santa Cruz, Fall 2023</p>
            </div>

            <div className="education-card__coursework">
              <p className="education-card__coursework-label">Relevant Coursework</p>
              <div className="education-card__coursework-items">
                {coursework.map((course) => (
                  <Badge key={course} variant="outline" className="skills-card__badge">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-shell section-shell--narrow portfolio-section" id="about">
          <div className="section-heading">
            <h2 className="section-heading__eyebrow">About</h2>
          </div>
          <div className="about-card">
            <p>
              I&apos;m a Computer Science student at UC Santa Cruz interested in full-stack and product software engineering. I enjoy building applications end-to-end, from responsive React interfaces and user workflows to APIs, authentication, databases, and backend infrastructure. I also have experience with lower-level systems programming, which helps me understand software beyond the framework layer.
            </p>
          </div>
        </section>

        <section className="section-shell section-shell--narrow portfolio-section contact-panel" id="contact">
          <div className="contact-panel__glow" aria-hidden="true" />
          <p className="contact-panel__eyebrow">Contact</p>
          <h2 className="section-heading__title">Let&apos;s build a product people enjoy using.</h2>
          <p className="contact-panel__copy">
            Email me and I&apos;ll get back fast.
          </p>
          <div className="contact-panel__actions">
            <Button asChild size="lg">
              <a href="mailto:ghisuh1@gmail.com">Email me</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com/ghisuh" target="_blank" rel="noreferrer">GitHub</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://www.linkedin.com/in/ghisuh-na-b70b8a207/" target="_blank" rel="noreferrer">LinkedIn</a>
            </Button>
          </div>
          <footer className="contact-panel__footer">
            <span>Ghisuh Na</span>
            <span>Built with Next.js and TypeScript</span>
          </footer>
        </section>
      </main>
    </>
  );
}
