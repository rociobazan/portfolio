import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="proyectos">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div data-reveal>
          <SectionTitle>Proyectos</SectionTitle>
        </div>
        <div className="mt-10 grid gap-8">
          {projects.map((project) => (
            <div key={project.slug} data-reveal>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
