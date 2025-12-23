import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group relative h-full border border-border bg-card shadow-none">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="flex h-full flex-col gap-4">
        <p className="text-sm text-muted-foreground">{project.description}</p>

        <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.18em]">
          {project.tech.map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                Live
              </a>
            </Button>
          )}

          <Button asChild variant="outline">
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
