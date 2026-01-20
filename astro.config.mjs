import { defineConfig } from 'astro/config';


export default defineConfig({
  vite: {
    server: {
      host: true,
      allowedHosts: [
        'tonsystechnologies.local'
      ]
    }
  }
});
