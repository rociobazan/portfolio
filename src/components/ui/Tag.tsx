export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-lilac-soft px-3 py-1 text-xs font-semibold text-lilac">
      {children}
    </span>
  );
}
