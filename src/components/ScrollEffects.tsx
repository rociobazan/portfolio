"use client";

import { useEffect } from "react";
import { navItems } from "@/config/site";

/**
 * Marca en <html data-section="..."> la sección visible, y el menú la resalta con CSS (ver Header).
 * Solo toca <html>, nunca elementos que dibuja React, para no generar diferencias al hidratar.
 */
export function ScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;

    // Cuenta como sección actual la que cruza la mitad de la pantalla.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) root.setAttribute("data-section", entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    navItems.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
