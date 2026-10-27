import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted sm:flex-row">
        <p>
          <span className="font-semibold text-foreground">{site.name}</span> · {site.role}
        </p>
        <a href="#inicio" className="font-medium hover:text-pink">
          Volver arriba ↑
        </a>
      </div>
    </footer>
  );
}
