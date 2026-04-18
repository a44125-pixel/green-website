import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        eolica: resolve(__dirname, 'eolica.html'),
        solar: resolve(__dirname, 'solar.html'),
        hidro: resolve(__dirname, 'hidro.html'),
      },
    },
  },
})
