"use client";

import { useLayoutEffect } from "react";

export function ThemeToggle() {
  // En desarrollo, React borra el atributo al volver a montar; esto lo restaura. En producción no hace nada.
  useLayoutEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  function toggle() {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  // El ícono se elige con CSS según el tema, así el servidor y el navegador muestran lo mismo.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambiar entre modo claro y oscuro"
      title="Cambiar entre modo claro y oscuro"
      className="grid size-10 place-items-center rounded-full text-muted transition-colors hover:bg-pink-soft hover:text-pink"
    >
      {/* Luna: se ve en modo claro */}
      <svg viewBox="0 0 24 24" className="size-5 dark:hidden" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      {/* Sol: se ve en modo oscuro */}
      <svg viewBox="0 0 24 24" className="hidden size-5 dark:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
