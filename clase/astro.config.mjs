import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// Use an environment variable to set the base when building on CI.
// Locally this will default to '/' so your local dev server is unaffected.
const base = process.env.ASTRO_BASE || '/';

export default defineConfig({
    base,
    vite: {
        plugins: [tailwind()],
    },
});