// Formato de fecha para ordenar: "AAAA-MM", por ejemplo "2024-05".
export type YearMonth = `${number}-${number}`;

export type ProjectImage = {
  /** Ruta dentro de /public, por ejemplo "/proyectos/mi-proyecto/01.jpg". */
  src: string;
  /** Frase corta que describe la captura. Se muestra en la galería y la leen los lectores de pantalla. */
  caption: string;
};

export type Project = {
  /** Identificador único, en minúsculas y con guiones. */
  slug: string;
  name: string;
  /** Período tal como se muestra, por ejemplo "abr. – jul. 2024". */
  period: string;
  description: string;
  /** Funcionalidades principales (opcional). Se muestran en una lista desplegable. */
  features?: { title: string; text?: string }[];
  technologies: string[];
  /** Si está vacío, se muestra un recuadro de "Capturas próximamente". La primera es la portada. */
  images: ProjectImage[];
  repoUrl?: string;
  demoUrl?: string;
  /** Muestra la etiqueta "Trabajo grupal". */
  isGroupWork?: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Degree = {
  title: string;
  institution: string;
  /** Período tal como se muestra, por ejemplo "abr. 2024 – dic. 2026". */
  period: string;
};

export type Certification = {
  title: string;
  issuer: string;
  /** Se ordenan solas de la más reciente a la más antigua. */
  date: YearMonth;
};
