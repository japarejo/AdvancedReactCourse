import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // necesario para simular el navegador
    globals: true,        // habilita expect(), describe(), etc.
    setupFiles: "./src/setupTests.js", // archivo opcional con configuraciones
  },
})
