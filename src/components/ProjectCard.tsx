import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const architecture = project.architecture;
  const engineeringFocus = project.engineeringFocus;

  return (
    <Card
      className={`project-card group ${
        project.featured ? "project-card--featured" : ""
      }`}
    >
      <div className="project-card__topline">
        <span>{project.category}</span>
        <span>{String(index + 1).padStart(2, "0")}</span>
      </div>

      <CardHeader className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
      </CardHeader>

      <CardContent className="project-card__content">
        <p className="project-card__description">{project.description}</p>

        {(architecture || engineeringFocus) && (
          <div className="project-card__details">
            {architecture && (
              <div className="project-card__detail-block">
                <p className="project-card__detail-label">Architecture</p>
                <div className="project-card__architecture">
                  {architecture.map((item, architectureIndex) => (
                    <div key={item} className="project-card__architecture-item">
                      <span>{item}</span>
                      {architectureIndex < architecture.length - 1 && (
                        <span className="project-card__arrow" aria-hidden="true">
                          {"->"}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {engineeringFocus && (
              <div className="project-card__detail-block">
                <p className="project-card__detail-label">Engineering Focus</p>
                <ul className="project-card__focus-list">
                  {engineeringFocus.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>

        <div className="project-card__actions">
          {project.liveUrl && (
            <Button asChild className="project-card__button">
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live <ArrowUpRight aria-hidden="true" />
              </a>
            </Button>
          )}

          {project.repoUrl && (
            <Button asChild variant="outline" className="project-card__button">
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <Github aria-hidden="true" /> GitHub
              </a>
            </Button>
          )}

        </div>
      </CardContent>
    </Card>
  );
}
