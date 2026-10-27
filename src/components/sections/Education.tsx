import { SectionTitle } from "@/components/ui/SectionTitle";
import { certifications, degrees } from "@/data/education";
import { formatYearMonth, sortByDateDesc } from "@/lib/dates";

export function Education() {
  const sortedCertifications = sortByDateDesc(certifications);

  return (
    <section id="formacion">
      <div data-reveal className="mx-auto max-w-5xl px-4 py-20">
        <SectionTitle>Formación</SectionTitle>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold">Educación</h3>
            <ul className="mt-4 space-y-4">
              {degrees.map((d) => (
                <li key={d.title} className="rounded-2xl border border-border bg-surface p-5">
                  <p className="text-sm font-medium text-pink">{d.period}</p>
                  <p className="mt-1 font-semibold">{d.title}</p>
                  <p className="mt-1 text-sm text-muted">{d.institution}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Certificaciones</h3>
            {/* Línea de tiempo: de la más reciente a la más antigua */}
            <ol className="mt-4 border-l-2 border-border pl-6">
              {sortedCertifications.map((c) => (
                <li key={c.title} className="relative pb-5 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-linear-to-br from-pink to-lilac ring-4 ring-background"
                  />
                  <p className="font-semibold leading-snug">{c.title}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {c.issuer} · <time dateTime={c.date}>{formatYearMonth(c.date)}</time>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
