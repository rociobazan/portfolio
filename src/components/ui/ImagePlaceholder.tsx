export function ImagePlaceholder() {
  return (
    <div className="flex aspect-video w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-background text-muted">
      <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="M21 16l-5-5-9 9" />
      </svg>
      <span className="text-sm font-medium">Capturas próximamente</span>
    </div>
  );
}
