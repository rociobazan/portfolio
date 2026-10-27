import { ButtonLink } from "@/components/ui/ButtonLink";
import { site } from "@/config/site";
import { cvExists } from "@/lib/cv";

export function Hero() {
  const hasCv = cvExists();

  return (
    <section id="inicio" className="relative overflow-hidden pt-16">
      {/* Manchas de color decorativas */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-pink/15 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-lilac/15 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85svh] max-w-5xl flex-col justify-center px-4 py-20">
        <p className="font-medium text-pink">¡Hola! Soy</p>
        <h1 className="mt-2 bg-linear-to-r from-pink to-lilac bg-clip-text pb-1 text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl">
          {site.name}
        </h1>
        <p className="mt-4 text-lg font-semibold sm:text-xl">{site.role}</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">{site.intro}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#proyectos">Ver proyectos</ButtonLink>
          {hasCv ? (
            <ButtonLink href={encodeURI(site.cvPath)} download variant="secondary">
              <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" />
              </svg>
              Descargar CV (PDF)
            </ButtonLink>
          ) : (
            <span
              aria-disabled="true"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-full border border-dashed border-border px-5 py-3 text-sm font-semibold text-muted"
            >
              CV disponible próximamente
            </span>
          )}
          <ButtonLink href="#contacto" variant="secondary">
            Contacto
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
