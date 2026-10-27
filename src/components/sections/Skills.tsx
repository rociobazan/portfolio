import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tag } from "@/components/ui/Tag";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="habilidades" className="bg-surface">
      <div data-reveal className="mx-auto max-w-5xl px-4 py-20">
        <SectionTitle>Habilidades</SectionTitle>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {skillGroups.map((group, i) => (
            // En pantallas grandes: Tecnologías ocupa todo el ancho; abajo, Herramientas (2/3) e Idiomas (1/3).
            <div
              key={group.title}
              className={`rounded-2xl border border-border bg-background p-6 ${i === 0 ? "md:col-span-3" : i === 1 ? "md:col-span-2" : ""}`}
            >
              <h3 className="font-semibold text-pink">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
