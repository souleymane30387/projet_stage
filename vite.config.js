import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Redirige les requêtes API vers le serveur JSON à l'adresse http://localhost:5000
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // Supprime /api du chemin avant de faire la requête
      }
    }
  }
});

