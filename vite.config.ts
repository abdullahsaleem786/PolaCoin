import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or whatever plugin you're using
export default defineConfig({
  base: '/PolaCoin/', // This matches your GitHub repository name
  plugins: [react()], // Keep your existing plugins
  // ... keep any other existing configuration
})