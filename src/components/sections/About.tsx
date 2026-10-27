import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/config/site";

const highlights = [
  { title: "Desarrollo .NET", text: "C#, ASP.NET MVC y Entity Framework" },
  { title: "Bases de datos", text: "SQL y SQL Server" },
  { title: "Análisis de sistemas", text: "Procesos, organización y requerimientos" },
];

export function About() {
  return (
    <section id="sobre-mi" className="bg-surface">
      <div data-reveal className="mx-auto max-w-5xl px-4 py-20">
        <SectionTitle>Sobre mí</SectionTitle>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed">{site.about}</p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {highlights.map((h) => (
            <li key={h.title} className="rounded-2xl border border-border bg-background p-5">
              <p className="font-semibold text-pink">{h.title}</p>
              <p className="mt-1 text-sm text-muted">{h.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
