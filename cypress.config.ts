import { defineConfig } from 'cypress';
import registerCodeCoverageTasks from '@cypress/code-coverage/task';
import vitePreprocessor from 'cypress-vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor(path.resolve(__dirname, './vite.config.ts')));
      registerCodeCoverageTasks(on, config);
      return config;
    },
  },
});
