import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
    build: {
    outDir: 'build'  // This changes output folder from dist to build
  },
  base:'/pw-demo/',
  plugins: [react(),tailwindcss(),VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt'],
      manifest: {
        name: 'PWDemo App',
        short_name: 'PWDemo',
        description: 'A demo app with Progressive Web App features',
        theme_color: '#0d9488', // Teal
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/pw.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pw.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),],

  // build: {
  //   outDir: 'build', // Output directory is "build"
  //   rollupOptions: {
  //     input: 'index.html',
  //   },
  // },  
})
