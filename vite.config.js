import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/gfg': {
        target: 'http://localhost:5000', // ✅ Replace with your actual backend port
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/gfg/, '') // ✅ Only use this if needed
      }
    }
  },
  base: '/portfolio/', // ✅ Optional: for GitHub Pages or deployment
});
