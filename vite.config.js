import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: { 'process.env': process.env },
  plugins: [
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Neohabit',
        },
      },
    }),
    react({
      include: '**/*.{jsx,tsx}',
    }),
  ],
  server: {
    host: '127.0.0.1',
    port: 8080,
  },
});
