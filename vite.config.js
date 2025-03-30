import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: "/neanderthal/", // 🔥 Set this to your repo name
    build: {
      outDir: "dist" // Make sure the build output is correct
    }// Change output folder from 'dist' to 'build'
  }
})
