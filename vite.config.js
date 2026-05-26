import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Disables the heavy cache mapping that causes Vercel to choke
    sourcemap: false,
    // Limits chunks to reduce memory consumption during transformation
    chunkSizeWarningLimit: 1600,
  }
})