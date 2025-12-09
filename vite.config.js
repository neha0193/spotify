import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,   // allows access via 127.0.0.1, network IP, etc.
    port: 5173,   // change to any port you want (3000, 8080, etc.)
  },
})
