import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollEffects } from "@/components/ScrollEffects";
import { site, siteUrl } from "@/config/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const title = `${site.name} | Desarrolladora C# Junior`;
const description = "Portfolio de Rocío Bazán, Analista de Sistemas y desarrolladora C#/.NET Junior.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: { title, description, type: "website", locale: "es_AR", siteName: site.name },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  // Color de la barra del navegador en el celular (el del modo oscuro, que es el predeterminado).
  themeColor: "#140f1c",
};

// Aplica el tema guardado antes de que se pinte la página, para evitar parpadeos. Sin elección guardada, queda oscuro.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-AR"
      data-theme="dark"
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-pink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white dark:focus:text-background"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollEffects />
      </body>
    </html>
  );
}
