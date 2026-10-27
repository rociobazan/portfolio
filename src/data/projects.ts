import type { Project } from "./types";

// Los proyectos se muestran en este orden.
export const projects: Project[] = [
  {
    slug: "hotel-brisas-de-oro",
    name: "Hotel Brisas de Oro, sistema de reservas y gestión",
    period: "abr. 2026 – nov. 2026",
    description:
      "Proyecto final de carrera realizado en grupo para un hotel real. Incluyó relevamiento de requerimientos mediante entrevistas con los dueños, diseño y desarrollo, con presentaciones periódicas de avances. Consta de una web de presentación (disponibilidad, precios y contacto por WhatsApp) y un sistema interno de gestión (reservas, precios y estadísticas).",
    technologies: [],
    images: [],
    isGroupWork: true,
  },
  {
    slug: "deploy-club",
    name: "Club deportivo Deploy",
    period: "oct. 2026",
    description:
      "Deploy Club es una plataforma web de reservas para un club deportivo que hicimos en equipo para Ingeniería de Software II. Lo desarrollamos con Spec-Driven Development: cada funcionalidad se especificó primero con OpenSpec y un contrato OpenAPI, y recién después se implementó con una API en NestJS y un front en Next.js. Trabajamos con ramas, pull requests con revisión y un pipeline de CI/CD que valida las specs, corre los tests y despliega automáticamente en AWS.",
    features: [
      { title: "Consulta de disponibilidad de canchas" },
      { title: "Reserva de turnos con equipamiento" },
      { title: "Cancelación de turnos" },
      { title: "Confirmación de reservas por mail" },
      { title: "Panel de administración" },
    ],
    technologies: [
      "NestJS",
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "OpenSpec",
      "OpenAPI",
      "Jest",
      "Playwright",
      "Docker",
      "GitHub Actions",
      "AWS EC2",
      "Caddy",
      "Git",
      "GitHub",
      "Resend",
    ],
    images: [
      { src: "/proyectos/deploy-club/club 1.png", caption: "Página de inicio con acceso directo a la reserva por deporte" },
      { src: "/proyectos/deploy-club/club 5.png", caption: "Sección del club con sus servicios" },
      { src: "/proyectos/deploy-club/club 2.png", caption: "Disponibilidad de canchas por fecha y disciplina" },
      { src: "/proyectos/deploy-club/club 4.png", caption: "Aviso para ingresar o crear una cuenta antes de reservar" },
      { src: "/proyectos/deploy-club/club 3.png", caption: "Confirmación del turno con opción de alquilar equipamiento" },
    ],
    repoUrl: "https://github.com/rociobazan/club-deportivo-deploy",
    demoUrl: "https://clubdeploy.online/",
    isGroupWork: true,
  },
  {
    slug: "gestor-articulos-web",
    name: "Gestor de Artículos Web",
    period: "abr. – jul. 2024",
    description:
      "Aplicación web para comercios que permite a los usuarios explorar y gestionar un catálogo de productos. Basada en ASP.NET, Bootstrap y SQL Server, y subida a un hosting, ofrece una experiencia amigable y atractiva.",
    features: [
      {
        title: "Home con catálogo de productos y filtros",
        text: "Página de inicio con catálogo completo, permitiendo filtros por descripción, marca y categoría.",
      },
      {
        title: "Pantalla de detalle de producto",
        text: "Información detallada de cada producto, incluyendo imágenes, descripciones y precios.",
      },
      {
        title: "Pantalla de login y área de administración",
        text: "Sistema de autenticación para la gestión de productos (agregar, modificar y eliminar).",
      },
      {
        title: "Gestión de productos",
        text: "Búsqueda, listado en formato de grilla y administración de artículos (código, nombre, descripción, marca, categoría, imagen y precio).",
      },
      {
        title: "Registro de clientes y gestión de favoritos",
        text: "Los usuarios pueden registrarse, gestionar su perfil y mantener una lista de productos favoritos.",
      },
    ],
    technologies: ["C#", "ASP.NET WebForms", "Bootstrap", "SQL Server"],
    images: [
      { src: "/proyectos/gestor-articulos-web/W1.jpg", caption: "Catálogo de productos con buscador" },
      { src: "/proyectos/gestor-articulos-web/W2.jpg", caption: "Listado de productos con acceso al detalle de cada uno" },
      { src: "/proyectos/gestor-articulos-web/W3.jpg", caption: "Detalle de producto con opción de agregar a favoritos" },
      { src: "/proyectos/gestor-articulos-web/W4.jpg", caption: "Administración de artículos con búsqueda y filtro avanzado" },
      { src: "/proyectos/gestor-articulos-web/W5.jpg", caption: "Formulario para editar o eliminar un artículo" },
    ],
    repoUrl: "https://github.com/rociobazan/tp-final-nivel3-bazan-rocio",
  },
  {
    slug: "gestor-inventario",
    name: "Gestor de Inventario",
    period: "abr. 2024",
    description:
      "Aplicación de escritorio genérica para la administración de artículos. Toda la información está persistida en una base de datos ya existente. La app posee arquitectura en capas, manejo de excepciones y validaciones.",
    features: [
      { title: "Listado de artículos" },
      { title: "Búsqueda mediante distintos criterios" },
      { title: "Agregar, modificar, eliminar y ver detalles de los artículos" },
      { title: "Agregar y eliminar tanto marcas como categorías de productos" },
    ],
    technologies: ["C#", ".NET Framework", "WinForms", "SQL Server"],
    images: [
      { src: "/proyectos/gestor-inventario/G5.jpg", caption: "Pantalla principal con el listado de artículos y la imagen del seleccionado" },
      { src: "/proyectos/gestor-inventario/G4.jpg", caption: "Detalle de un artículo" },
      { src: "/proyectos/gestor-inventario/G6.jpg", caption: "Formulario para agregar un artículo" },
      { src: "/proyectos/gestor-inventario/G2.jpg", caption: "Formulario para modificar un artículo" },
      { src: "/proyectos/gestor-inventario/G3.jpg", caption: "Confirmación antes de eliminar un artículo" },
      { src: "/proyectos/gestor-inventario/G7.jpg", caption: "Alta de marcas y categorías" },
      { src: "/proyectos/gestor-inventario/G1.jpg", caption: "Baja de marcas y categorías" },
    ],
    repoUrl: "https://github.com/rociobazan/Gestor-de-articulos",
  },
];
