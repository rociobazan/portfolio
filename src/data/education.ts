import type { Certification, Degree } from "./types";

export const degrees: Degree[] = [
  {
    title: "Tecnicatura Superior en Análisis de Sistemas",
    institution: "Instituto Remedios Escalada de San Martín",
    period: "abr. 2024 – dic. 2026",
  },
  {
    title: "Tecnicatura Superior en Administración de Empresas",
    institution: "Instituto Remedios Escalada de San Martín",
    period: "mar. 2017 – dic. 2019",
  },
];

// El orden no importa: se muestran de la más reciente a la más antigua.
export const certifications: Certification[] = [
  { title: "Programación con C# Nivel 4 [MVC + Entity Framework]", issuer: "Maxi Programa", date: "2026-08" },
  { title: "Bases de Datos SQL [Nivel Universidad]", issuer: "Maxi Programa", date: "2025-01" },
  { title: "C# Nivel 3 [ASP.NET WebForms]", issuer: "Maxi Programa", date: "2024-08" },
  { title: "C# Nivel 2 [.NET, POO, SQL]", issuer: "Maxi Programa", date: "2024-05" },
  { title: "C# Nivel 1", issuer: "Maxi Programa", date: "2023-08" },
  { title: "Fundamentos de la Programación", issuer: "Maxi Programa", date: "2023-07" },
];
