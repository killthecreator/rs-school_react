import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import App from './src/App';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    let didError = false;
    const stream = renderToPipeableStream(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      {
        bootstrapScripts: ['./src/index.tsx'],
        onShellReady: () => {
          res.statusCode = didError ? 500 : 200;
          res.setHeader('Content-type', 'text/html');
          stream.pipe(res);
        },
        onError: (error) => {
          didError = true;
          console.log(error);
        },
      }
    );
  });

  app.listen(3333);
}

createServer();
