import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: "/my-portfolio/",   // WAJIB untuk GitHub Pages
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      "a0d78af6ed1c.ngrok-free.app",
      "localhost",
      "127.0.0.1",
    ],
  },
  assetsInclude: ["**/*.glb"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
