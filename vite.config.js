import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Импортируй плагин

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 2. Добавь в плагины
  ],
})