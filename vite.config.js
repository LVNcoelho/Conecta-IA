import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <-- ESSA LINHA

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- ESSA LINHA
  ],
})