import type { YearMonth } from "@/data/types";

const months = ["ene.", "feb.", "mar.", "abr.", "may.", "jun.", "jul.", "ago.", "sep.", "oct.", "nov.", "dic."];

/** "2024-05" → "may. 2024" */
export function formatYearMonth(value: YearMonth): string {
  const [year, month] = value.split("-");
  return `${months[Number(month) - 1]} ${year}`;
}

/** Ordena de la fecha más reciente a la más antigua sin modificar la lista original. */
export function sortByDateDesc<T extends { date: YearMonth }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}
