import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Relative base so the built site works from any folder (e.g. Hostinger's public_html).
export default defineConfig({
  plugins: [vue()],
  base: './',
})
