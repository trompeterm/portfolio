import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use a relative base so the site works on GitHub Pages project URLs.
  base: './',
  plugins: [react()],
})
