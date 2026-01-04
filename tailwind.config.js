// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Pastikan konten ini menunjuk ke semua file JSX, JS, atau HTML Anda
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Masukkan KUSTOMISASI ANDA DI SINI!
      keyframes: {
        fadeInUp: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards', 
      },
      transitionDelay: {
        '4000': '4000ms', 
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}