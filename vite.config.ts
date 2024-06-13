import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/src/main.tsx',
      // Specify dependencies that should not be bundled
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