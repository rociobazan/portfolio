"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/config/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  // Cierra el menú con Escape o si la pantalla pasa a tamaño escritorio.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-pink-soft hover:text-pink"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="menu-movil"
          aria-label="Menú principal"
          className="absolute inset-x-0 top-full border-b border-border bg-surface shadow-lg"
        >
          <ul className="flex flex-col px-4 py-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  data-nav={item.id}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium hover:bg-pink-soft hover:text-pink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
