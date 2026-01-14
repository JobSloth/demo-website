import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Listen on all local IPs
    strictPort: true,
    allowedHosts: true, // Allow all hosts to prevent 403 errors
  }
})
