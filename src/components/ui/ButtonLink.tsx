import type { ComponentProps } from "react";

const variants = {
  primary:
    "bg-linear-to-r from-pink to-lilac text-white shadow-md shadow-pink/20 hover:shadow-lg hover:shadow-pink/30 dark:text-background",
  secondary:
    "border border-pink/40 bg-surface text-pink hover:border-pink hover:bg-pink-soft",
};

type Props = ComponentProps<"a"> & { variant?: keyof typeof variants };

export function ButtonLink({ variant = "primary", className = "", ...props }: Props) {
  return (
    <a
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
