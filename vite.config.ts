import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever plugin you're using

export default defineConfig({
  base: '/PolaCoin/', // This matches your GitHub repository name
  plugins: [react()], // Keep your existing plugins
  server: {
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  // ... keep any other existing configuration
})