import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        canvasLine: resolve(__dirname, 'canvas-line.html')
      }
    }
  }
})
