import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/portfolio/', // This must match your GitHub repo name
  plugins: [react()],
})
