# Portfolio de Rocío Bazán

Sitio personal de **Rocío Bazán**, Analista de Sistemas y desarrolladora C# Junior. Es una sola página con las secciones Inicio, Sobre mí, Proyectos (con galería de capturas), Habilidades, Formación y Contacto, con modo claro y oscuro.

Hecho con [Next.js](https://nextjs.org) (App Router), TypeScript y Tailwind CSS. No tiene backend ni base de datos: todo el contenido está en archivos de datos dentro del proyecto.

## Probarlo en tu computadora

Necesitás [Node.js](https://nodejs.org) 20 o superior.

```bash
npm install       # solo la primera vez
npm run dev       # abre el sitio en http://localhost:3000
```

Otros comandos:

| Comando         | Para qué sirve                                         |
| --------------- | ------------------------------------------------------ |
| `npm run build` | Arma la versión final y avisa si hay errores           |
| `npm run start` | Muestra la versión final (después de `npm run build`) |
| `npm run lint`  | Revisa el código en busca de problemas comunes         |

## Cómo editar el contenido

No hace falta tocar los componentes: todo se cambia en estos archivos.

| Qué querés cambiar                                       | Archivo                  |
| -------------------------------------------------------- | ------------------------ |
| Nombre, rol, presentación, "Sobre mí", email, LinkedIn, GitHub, ruta del CV | `src/config/site.ts`     |
| Proyectos                                                | `src/data/projects.ts`   |
| Habilidades (tecnologías, herramientas, idiomas)         | `src/data/skills.ts`     |
| Educación y certificaciones                              | `src/data/education.ts`  |

Si te equivocás en un campo (por ejemplo, te falta uno obligatorio), Visual Studio Code lo marca en rojo y `npm run build` avisa del error antes de publicar.

### Agregar un proyecto

1. Creá una carpeta con sus capturas en `public/proyectos/nombre-del-proyecto/`.
2. Copiá un bloque existente en `src/data/projects.ts` y cambiá los datos. Los proyectos se muestran en el orden del archivo.
3. En `images`, la primera captura es la portada. Cada una lleva una frase corta (`caption`) que se ve en la galería.
4. `repoUrl`, `demoUrl`, `features` e `isGroupWork` son opcionales: si no los ponés, no se muestran.

Recomendación para las capturas: misma proporción en todas, unos 1600 px de ancho y sin datos reales de personas.

### Agregar una certificación

Sumala en `src/data/education.ts` con la fecha en formato `"AAAA-MM"` (por ejemplo `"2027-03"`). Se ordenan solas de la más reciente a la más antigua y la fecha se muestra como "mar. 2027".

### Cambiar el CV

Reemplazá el PDF en `public/cv/`. Si cambia el nombre del archivo, actualizá `cvPath` en `src/config/site.ts`. Si el archivo no existe, el botón muestra "CV disponible próximamente" en lugar de un enlace roto.

## Publicar en Vercel

### 1. Subir el proyecto a GitHub

1. En [github.com/new](https://github.com/new) creá un repositorio **vacío** (sin README ni .gitignore), por ejemplo `portfolio`.
2. En la carpeta del proyecto, ejecutá (cambiando la dirección por la de tu repositorio):

   ```bash
   git remote add origin https://github.com/rociobazan/portfolio.git
   git push -u origin main
   ```

### 2. Conectar el repositorio con Vercel

1. Entrá a [vercel.com](https://vercel.com) y registrate con **Continue with GitHub**.
2. Tocá **Add New… → Project** y elegí el repositorio `portfolio` (si no aparece, tocá **Configure GitHub App** y dale acceso).
3. Vercel detecta que es Next.js solo. No cambies nada y tocá **Deploy**.
4. En uno o dos minutos te da la dirección del sitio, por ejemplo `portfolio-rociobazan.vercel.app`.

### 3. Actualizar el sitio

Cada vez que hagas cambios:

```bash
git add .
git commit -m "Describí el cambio"
git push
```

Vercel publica la nueva versión automáticamente en uno o dos minutos. Si algo falla, el sitio anterior sigue en línea y en el panel de Vercel ves el error.

### Opcional: dominio propio

En el proyecto de Vercel, **Settings → Domains** te permite conectar un dominio (por ejemplo `rociobazan.com`). Si lo hacés, agregá en **Settings → Environment Variables** la variable `NEXT_PUBLIC_SITE_URL` con la dirección completa (`https://rociobazan.com`) y volvé a publicar, para que la vista previa al compartir el enlace use ese dominio.

### Después de publicar

- Actualizá el link al portfolio en tu CV y en tu perfil de LinkedIn.
- Probá compartir el enlace por WhatsApp o LinkedIn: debería aparecer la imagen con tu nombre y tu rol.

## Estructura del proyecto

```
public/
  cv/                 PDF del CV
  proyectos/          una carpeta de capturas por proyecto
src/
  app/                página, layout, estilos, favicon e imagen para compartir
  components/         menú, galería, secciones y componentes reutilizables
  config/site.ts      datos personales y de contacto
  data/               proyectos, habilidades y formación
  lib/                funciones de ayuda (fechas, detección del CV)
```
