import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    // Tambahkan host ngrok Anda di sini
    allowedHosts: [
      'a0d78af6ed1c.ngrok-free.app',
      'localhost', // Biasanya sudah termasuk, tapi aman untuk ditambahkan
      '127.0.0.1'
    ],
  },
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.glb'],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
