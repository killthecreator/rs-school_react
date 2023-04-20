import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['istanbul']],
      },
    }),
  ],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        minifyInternalExports: false,
      },
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
  },
});
