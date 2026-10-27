import { ProjectGallery } from "@/components/ProjectGallery";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Tag } from "@/components/ui/Tag";
import type { Project } from "@/data/types";

const linkClass =
  "inline-flex items-center gap-1.5 rounded-full px-1 text-sm font-semibold text-pink underline-offset-4 hover:underline";

export function ProjectCard({ project }: { project: Project }) {
  const { name, period, description, features, technologies, images, repoUrl, demoUrl, isGroupWork } = project;

  return (
    <article className="grid gap-6 rounded-2xl border border-border bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink/40 hover:shadow-lg hover:shadow-pink/10 sm:p-6 lg:grid-cols-2">
      <div>
        {images.length > 0 ? <ProjectGallery projectName={name} images={images} /> : <ImagePlaceholder />}
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-sm font-medium text-muted">{period}</p>
          {isGroupWork && (
            <span className="rounded-full bg-pink-soft px-2.5 py-0.5 text-xs font-semibold text-pink">
              Trabajo grupal
            </span>
          )}
        </div>
        <h3 className="mt-1 text-xl font-bold">{name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{description}</p>

        {features && features.length > 0 && (
          <details className="group mt-4 rounded-xl border border-border bg-background">
            <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
              Funcionalidades principales
              <svg viewBox="0 0 24 24" className="size-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <ul className="space-y-3 px-4 pb-4 text-sm">
              {features.map((f) => (
                <li key={f.title}>
                  <p className="font-semibold">{f.title}</p>
                  {f.text && <p className="text-muted">{f.text}</p>}
                </li>
              ))}
            </ul>
          </details>
        )}

        {technologies.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tecnologías">
            {technologies.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
        )}

        {(repoUrl || demoUrl) && (
          <div className="mt-auto flex flex-wrap gap-4 pt-5">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
                </svg>
                Ver repositorio
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M14 3h7v7M10 14L21 3M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
                </svg>
                Ver demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
