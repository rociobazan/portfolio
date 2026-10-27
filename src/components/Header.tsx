import { MobileMenu } from "@/components/MobileMenu";
import { ThemeToggle } from "@/components/ThemeToggle";
import { navItems, site } from "@/config/site";

// Resalta en ambos menús el enlace de la sección visible (ScrollEffects pone data-section en <html>).
const activeLinkCss = navItems
  .map(({ id }) => `[data-section="${id}"] a[data-nav="${id}"]`)
  .join(",")
  .concat("{color:var(--pink);background:var(--pink-soft)}");

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <style>{activeLinkCss}</style>
      <div className="relative mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <a
          href="#inicio"
          className="bg-linear-to-r from-pink to-lilac bg-clip-text text-lg font-bold text-transparent"
        >
          {site.name}
        </a>

        <div className="flex items-center gap-1">
          <nav aria-label="Menú principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    data-nav={item.id}
                    className="rounded-full px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-pink-soft hover:text-pink"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
