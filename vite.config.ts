import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  server: {
    port: parseInt(process.env.VITE_APP_PORT || '5173'),
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/main.tsx',
      external: ['react', 'react-dom'],
    },
  },
  optimizeDeps: {
    include: [
      '@nlux/themes/nova.css',
      '@storybook/react',
      '@storybook/addon-actions',
      '@storybook/addon-controls',
    ],
  },
});