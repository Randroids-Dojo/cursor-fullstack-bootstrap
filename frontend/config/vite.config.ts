// @ts-nocheck

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// __dirname replacement for ESM
const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  // New application root
  root: resolve(__dirname, '../app'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, '../app/src'),
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss({ config: resolve(__dirname, './tailwind.config.ts') }),
        autoprefixer(),
      ],
    },
  },
})
