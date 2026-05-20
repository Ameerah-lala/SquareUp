import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Make the existing assets folder available from the project root
  publicDir: '../assets',
})
