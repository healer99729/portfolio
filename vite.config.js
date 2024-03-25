import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: './index.html',
    host: '127.0.0.1',
    port: 8000,
  },
  plugins: [react()],
})
