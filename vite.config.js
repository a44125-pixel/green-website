import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // Ficheiros que já lá estavam
        eolica: resolve(__dirname, 'eolica.html'),
        solar: resolve(__dirname, 'solar.html'),
        hidro: resolve(__dirname, 'hidro.html'),
        // Seus novos ficheiros de desenho
        desenho_solar: resolve(__dirname, 'Desenh.html'),
        desenho_hidro: resolve(__dirname, 'Desenh1.html'),
        desenho_eolica: resolve(__dirname, 'Desenh2.html'),
      },
    },
  },
})
