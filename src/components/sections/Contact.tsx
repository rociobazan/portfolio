import { CopyEmailButton } from "@/components/CopyEmailButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { site } from "@/config/site";

// "https://www.linkedin.com/in/usuario" → "linkedin.com/in/usuario"
const displayUrl = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

const icons = {
  email: (
    <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="size-6" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z" />
    </svg>
  ),
};

const channels = [
  { key: "email", label: "Email", value: site.email, href: `mailto:${site.email}`, external: false },
  { key: "linkedin", label: "LinkedIn", value: displayUrl(site.linkedin), href: site.linkedin, external: true },
  { key: "github", label: "GitHub", value: displayUrl(site.github), href: site.github, external: true },
] as const;

export function Contact() {
  return (
    <section id="contacto" className="bg-surface">
      <div data-reveal className="mx-auto max-w-5xl px-4 py-20">
        <SectionTitle>Contacto</SectionTitle>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          ¿Tenés una propuesta o querés conocer más sobre mi trabajo? Escribime por cualquiera de estos medios.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {channels.map((c) => (
            <li
              key={c.key}
              className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-pink/40 hover:shadow-lg hover:shadow-pink/10"
            >
              <span className="grid size-11 place-items-center rounded-full bg-pink-soft text-pink">{icons[c.key]}</span>
              <div className="min-w-0">
                <p className="font-semibold">
                  {/* El enlace cubre toda la tarjeta */}
                  <a
                    href={c.href}
                    {...(c.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="after:absolute after:inset-0 after:rounded-2xl"
                  >
                    {c.label}
                  </a>
                </p>
                <p className="mt-0.5 truncate text-sm text-muted group-hover:text-pink">{c.value}</p>
              </div>
              {c.key === "email" && (
                // Queda por encima del enlace de la tarjeta para poder hacerle clic.
                <div className="relative z-10">
                  <CopyEmailButton email={site.email} />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
