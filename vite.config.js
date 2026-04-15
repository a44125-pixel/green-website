import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  appType: 'mpa' // Força o modo de múltiplas páginas
})

