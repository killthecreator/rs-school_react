import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    /*     istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'coverage/'],
      extension: ['.js', '.jsx', '.ts', '.tsx'],
      cypress: true,
      requireEnv: true,
      forceBuildInstrument: true,
    }), */
  ],
  build: {
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'istanbul',
    },
  },
  envDir: './',
});
