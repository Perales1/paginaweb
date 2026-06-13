# ☀️ Curso de Tecnologías Web 2026 — Versión 1.0.0

Plataforma educativa hipermoderna, limpia y corporativa desarrollada con **Astro v6** y **Tailwind CSS v4**. Presenta una estética veraniega basada en tonos crema, naranjas y amarillos, optimizada estructuralmente siguiendo las mejores prácticas de desarrollo basado en componentes (**SFC**) y lista para su despliegue en **GitHub Pages**.

---

## 🏗️ Arquitectura de la Versión 1.0.0

El proyecto ha sido estructurado siguiendo principios estrictos de **Clean Code** y separación de responsabilidades:

1. **Layout Agnótico (`src/layouts/Layout.astro`)**: Funciona como un esqueleto HTML puro desacoplado del diseño visual de las páginas. No contiene maquetación embebida ni contenedores que condicionen el contenido.
2. **Componentes de Fichero Único (SFC - `src/components/Card.astro`)**: Estructura modular estándar con paso de propiedades (`Props`) para la renderización de los módulos del curso.
3. **Estilos Modulares (`src/styles/global.css`)**: De acuerdo con las especificaciones de **Tailwind v4**, el motor del framework y las clases estructuradas mediante la directiva `@apply` se aíslan en un archivo CSS independiente. Esto evita errores de compilación con Vite y limpia el HTML de los componentes.

---

## 🛠️ Instalación y Desarrollo Local

Para levantar el entorno desde cero en Fedora sin conflictos de red ni dependencias, ejecutar:

1. **Instalar Dependencias**:
   ```bash
   npm install --legacy-peer-deps
   
PLANTILLA A MODIFICAR!