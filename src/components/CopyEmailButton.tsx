"use client";

import { useState } from "react";

// Útil si quien visita no tiene configurado un programa de correo para los enlaces mailto.
export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted transition-colors hover:border-pink hover:text-pink"
    >
      <span aria-live="polite">{copied ? "¡Copiado!" : "Copiar email"}</span>
    </button>
  );
}
