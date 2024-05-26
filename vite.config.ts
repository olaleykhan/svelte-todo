import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      '$lib': path.resolve(__dirname, 'src/lib'),
      '$components': path.resolve(__dirname, 'src/lib/components'),
      '$stores': path.resolve(__dirname, 'src/lib/stores'),
      '$utils': path.resolve(__dirname, 'src/lib/utils'),
      // Add more aliases as needed
    }
  }
})
