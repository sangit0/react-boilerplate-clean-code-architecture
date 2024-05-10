import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
      },
    },
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    css: true,
  },
});
