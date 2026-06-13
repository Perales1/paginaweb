## [1.0.0] - 2026-06-13
### Añadido
- **Lanzamiento Inicial:** Creación de la estructura base del proyecto utilizando Astro v6.4.6 y Tailwind CSS v4.0.
- **Diseño Veraniego:** Implementación de la paleta de colores corporativa basada en fondo crema (`#fbf9f4`) con gradientes en tonos naranjas y amarillos.
- **Componentes SFC:** Creación del componente reutilizable `Card.astro` estructurado mediante el paso de propiedades estáticas.
- **Modularización de Estilos:** Creación del archivo `src/styles/global.css` para centralizar las directivas `@apply` de Tailwind, resolviendo los errores de compilación de clase desconocida en el entorno de Vite.
- **Layout Agnóstico:** Configuración de `Layout.astro` como un cascarón HTML puro, delegando la maquetación visual y los contenedores semánticos a la página `index.astro`.

### Solucionado
- **Conflicto de PostCSS:** Reemplazada la integración clásica de Astro por el plugin nativo `@tailwindcss/vite` para corregir los errores de dependencias de la v4.
- **Fuga de Procesos:** Solventado el bloqueo de red en Fedora (`Port in use`) mediante el uso de comandos de purga de sockets del sistema (`fuser`).