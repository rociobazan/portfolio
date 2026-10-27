// Datos personales y de contacto. Cambiá acá cualquier enlace y se actualiza en todo el sitio.
export const site = {
  name: "Rocío Bazán",
  role: "Analista de Sistemas | Desarrolladora C# Junior",
  email: "roobazan98@hotmail.com.ar",
  linkedin: "https://www.linkedin.com/in/carlarociobazan",
  github: "https://github.com/rociobazan",
  // Tiene que coincidir con el nombre del archivo dentro de public/cv/.
  cvPath: "/cv/CV - Rocío Bazán - Analista de Sistemas.pdf",
  intro:
    "Desarrollo aplicaciones web y de escritorio con C# y .NET. Mi formación en análisis de sistemas me ayuda a entender qué necesita cada usuario antes de escribir código.",
  about:
    "Analista de Sistemas y desarrolladora C# Junior, con formación que combina programación con análisis de procesos y organización. Conocimientos sólidos en desarrollo .NET (C#, ASP.NET MVC, Entity Framework, SQL Server). Busco insertarme en el rubro IT, aportando compromiso y ganas de aprender.",
};

// Dirección pública del sitio, para la vista previa al compartir el enlace.
// En Vercel se completa sola; si usás un dominio propio, definí NEXT_PUBLIC_SITE_URL.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Secciones del menú. El id tiene que coincidir con el id de cada sección.
export const navItems = [
  { id: "inicio", label: "Inicio" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "proyectos", label: "Proyectos" },
  { id: "habilidades", label: "Habilidades" },
  { id: "formacion", label: "Formación" },
  { id: "contacto", label: "Contacto" },
] as const;
