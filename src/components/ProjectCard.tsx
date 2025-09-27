// src/components/ProjectCard.tsx
import { memo } from "react";

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];         // np. ["React","Node.js","CSS"]
  image?: string;         // ścieżka do obrazka (opcjonalnie)
  demoUrl?: string;
  repoUrl?: string;
};

type Props = { project: Project };

const tagCls =
  "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs text-muted-foreground";

function ProjectCardBase({ project }: Props) {
  const { title, description, tech, image, demoUrl, repoUrl } = project;

  return (
    <article className="group rounded-2xl border bg-background shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {image ? (
        <div className="aspect-video overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="aspect-video bg-gradient-to-br from-muted to-muted/60" />
      )}

      <div className="p-4 space-y-3">
        <header>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </header>

        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <span key={t} className={tagCls}>#{t}</span>
          ))}
        </div>

        {(demoUrl || repoUrl) && (
          <div className="flex gap-3 pt-1">
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-1.5 bg-primary text-primary-foreground text-sm hover:opacity-90"
              >
                Live demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl px-3 py-1.5 border text-sm hover:bg-muted"
              >
                Repo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export const ProjectCard = memo(ProjectCardBase);
