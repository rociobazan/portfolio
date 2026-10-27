export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold sm:text-3xl">
      {children}
      <span aria-hidden="true" className="mt-3 block h-1 w-12 rounded-full bg-linear-to-r from-pink to-lilac" />
    </h2>
  );
}
